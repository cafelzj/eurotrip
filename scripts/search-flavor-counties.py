import argparse,pathlib,json,urllib.request,urllib.parse,concurrent.futures,hashlib,time
parser=argparse.ArgumentParser(description='按市县执行全品类搜索并记录证据，搜索结果不等于条目核验。');parser.add_argument('--province',required=True);parser.add_argument('--city',required=True);parser.add_argument('--place');args=parser.parse_args();
r=pathlib.Path(__file__).resolve().parents[1];path=r/'docs/flavor-research-queue.json';d=json.load(open(path));cache=pathlib.Path('/tmp/flavor-county-search');cache.mkdir(exist_ok=True);jobs=[p for p in d['places']if p['province']==args.province and p['city']==args.city and (not args.place or p['name']==args.place)];topics=[('local-dishes','特色菜'),('local-dishes','小众菜'),('local-dishes','当地菜'),('local-dishes','小吃'),('dairy','乳品'),('drinks','饮品'),('drinks','奶茶'),('alcohol','酒'),('tea','茶'),('staples','面食'),('seasoning','调味品'),('ingredients','特产'),('crafts','地方物品 传统工艺 特产')]
def run(job):
 p,topic,word=job;name=p['name'];term=name[:-1]if name.endswith(('县','市','区'))else name;q=args.city+' '+term+' '+word if term!=args.city else args.city+' '+word;u='https://newssearch.chinadaily.com.cn/rest/search?'+urllib.parse.urlencode({'keywords':q,'sort':'relevance','page':0,'curType':'story'});f=cache/(hashlib.sha256(u.encode()).hexdigest()[:20]+'.json')
 try:
  if not f.exists():f.write_bytes(urllib.request.urlopen(u,timeout=15).read())
  b=f.read_bytes();x=json.loads(b);hits=[a for a in x.get('content',[])if all(t in a.get('plainText','')for t in q.split())];return {'topic':topic,'query':q,'url':u,'evidenceSha256':hashlib.sha256(b).hexdigest(),'candidateCount':len(hits),'status':'search-only-not-article-review'}
 except Exception as e:return {'topic':topic,'query':q,'url':u,'status':'search-error','error':str(e)}
for p in jobs:
 with concurrent.futures.ThreadPoolExecutor(max_workers=2)as ex:ev=list(ex.map(run,[(p,*t)for t in topics]))
 p['searchEvidence']=ev
 if p['status']=='not-started':p['status']='search-leads-pending-review'
 path.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');print(p['name'],len(ev),'queries',sum(x.get('candidateCount',0)for x in ev),'candidate hits (not reviewed)',flush=True)

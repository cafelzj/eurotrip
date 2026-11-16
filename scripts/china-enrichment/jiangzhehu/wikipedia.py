"""Preserve exact-title Chinese Wikipedia image pointers, then resolve Commons licenses."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor,as_completed
import json,hashlib,re,time
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';(L/'wiki').mkdir(exist_ok=True);read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();scope=[r for r in read(B/'scope.json')['items']if not r['hasPhoto']];titles={}
for r in scope:
 name=r['name'];titles.setdefault(name,[]).append(r['itemId'])
def get(url,p):
 if not p.exists():
  for n in range(3):
   try:
    with urlopen(Request(url,headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=30)as f:data=f.read()
    json.loads(data);p.write_bytes(data);break
   except Exception:
    if n==2:raise
    time.sleep(5)
 return read(p)
def work(group):
 key=sha('|'.join(group).encode())[:20];p=L/'wiki'/f'pages-{key}.json';url='https://zh.wikipedia.org/w/api.php?'+urlencode(dict(action='query',format='json',titles='|'.join(group),redirects=1,converttitles=1,prop='pageimages|info',piprop='name|original',inprop='url'));log=dict(queryTitles=group,url=url,kind='exact-title-image-pointer-only');rows=[]
 try:
  d=get(url,p);q=d.get('query',{});mapping={r['from']:r['to']for k in ['normalized','converted','redirects']for r in q.get(k,[])};pages={r['title']:r for r in q.get('pages',{}).values()}
  for name in group:
   dest=name
   for _ in range(8):
    if dest not in mapping:break
    dest=mapping[dest]
   page=pages.get(dest,{})
   rows.append(dict(inputTitle=name,itemIds=titles[name],resolvedTitle=dest,pageId=page.get('pageid'),pageUrl=page.get('fullurl'),file=page.get('pageimage'),original=page.get('original'),status='pointer-not-photo-approval'if page.get('pageimage')else'no-exact-page-image'))
  log.update(status='response-saved',responseFile=str(p.relative_to(R)),responseSha256=sha(p.read_bytes()),rows=rows)
 except Exception as e:log.update(status='error',error=str(e),rows=[])
 return log
names=list(titles);logs=[]
with ThreadPoolExecutor(max_workers=3)as pool:
 for f in as_completed([pool.submit(work,names[n:n+40])for n in range(0,len(names),40)]):
  r=f.result();logs.append(r);(B/'wiki-pointers.json').write_text(json.dumps(dict(date='2026-11-16',records=logs),ensure_ascii=False,indent=2)+'\n');print('WIKI',len(logs),'pages with images',sum(bool(x.get('file'))for l in logs for x in l['rows']),flush=True)

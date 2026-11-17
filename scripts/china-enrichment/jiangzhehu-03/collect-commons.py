from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,html,re
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';L=R/'research/.local/jiangzhehu-images-20261117-03';(L/'commons').mkdir(exist_ok=True);scope=json.loads((B/'scope.json').read_text())['items'];byname={r['name']:r['itemId']for r in scope};sha=lambda x:hashlib.sha256(x).hexdigest();old={r['query']:r for r in [json.loads(s)for s in(R/'research/china/enrichment/2026-11-16-jiangzhehu-images/query-log.jsonl').read_text().splitlines()]if r.get('responseFile')}
jobs=[dict(query='"'+r['name']+'"',itemIds=[r['itemId']],name=r['name'])for r in scope];(B/'commons-plan.json').write_text(json.dumps(dict(date='2026-11-17',kind='exact-existing-card-name-search-not-verification',jobs=jobs),ensure_ascii=False,indent=2)+'\n')
def fetch(j):
 q=j['query'];id=sha(q.encode())[:20];u='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=q,gsrnamespace=6,gsrlimit=4,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));p=R/old[q]['responseFile']if q in old else L/'commons'/(id+'.json');r=dict(j,id=id,url=old[q]['url']if q in old else u,reusedPriorResponse=q in old)
 try:
  if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=12).read())
  raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d;out=[]
  for page in sorted(d.get('query',{}).get('pages',{}).values(),key=lambda x:x.get('index',9999)):
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName');file=page['title'][5:]
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I)or not re.search(r'\.(jpe?g|png|webp)$',file,re.I):continue
   out.append(dict(id='c-'+sha(file.encode())[:16],title=file,provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],width=info.get('thumbwidth',info['width']),height=info.get('thumbheight',info['height']),author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),itemIds=j['itemIds'],metadataFile=str(p.relative_to(R)),metadataSha256=sha(raw),status='candidate-not-approved'))
  r.update(status='response-saved',responseFile=str(p.relative_to(R)),responseSha256=sha(raw),candidates=out)
 except Exception as e:r.update(status='error',error=str(e),candidates=[])
 return r
assert not (B/'commons-search.json').exists(), 'Historical search receipt already exists; create an explicit follow-up plan instead.'
out=[]
with ThreadPoolExecutor(max_workers=1)as pool:
 for r in pool.map(fetch,jobs):
  out.append(r)
  if '429' in r.get('error',''):
   (B/'commons-search.json').write_text(json.dumps(dict(date='2026-11-17',checks=out,interrupted='HTTP429; remaining queries not executed'),ensure_ascii=False,indent=2)+'\n');raise RuntimeError('HTTP429: stopped; use a different source and retain this receipt.')
  if len(out)%40==0:
   (B/'commons-search.json').write_text(json.dumps(dict(date='2026-11-17',checks=out),ensure_ascii=False,indent=2)+'\n');print('Exact Commons searched',len(out),'/',len(jobs),'candidates',sum(len(x['candidates'])for x in out),'errors',sum(x['status']=='error'for x in out),flush=True)
(B/'commons-search.json').write_text(json.dumps(dict(date='2026-11-17',checks=out),ensure_ascii=False,indent=2)+'\n');rows={}
for r in out:
 for c in r['candidates']:
  v=rows.setdefault(c['id'],dict(c));v['itemIds']=list(dict.fromkeys(v['itemIds']+c['itemIds']))
print('COMMONS',len(out),'queries',sum(x['reusedPriorResponse']for x in out),'reused',len(rows),'candidates',sum(x['status']=='error'for x in out),'errors',flush=True)
def down(r):
 (L/'photos').mkdir(exist_ok=True);p=L/'photos'/(r['id']+'.jpg')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=12).read())
  from PIL import Image
  Image.open(p).verify();r.update(rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=6)as pool:rows=list(pool.map(down,rows.values()))
(B/'commons-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=rows),ensure_ascii=False,indent=2)+'\n');print('DOWNLOADED',sum(x['status']=='downloaded-not-approved'for x in rows),'errors',sum(x['status']=='error'for x in rows),flush=True)

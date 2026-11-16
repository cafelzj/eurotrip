"""Batch public Flickr searches; preserve complete responses, never approve from hits."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor,as_completed
import json,hashlib,gzip,threading,time
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';(L/'search').mkdir(exist_ok=True);read=lambda p:json.loads(p.read_text());sha=lambda raw:hashlib.sha256(raw).hexdigest();save=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');scope=read(B/'scope.json')['items'];aliases={}
for p in [R/'research/china/enrichment/2026-11-16-jiangzhehu-images/knowledge-aliases.txt',B/'knowledge-aliases.txt']:
 for line in p.read_text().splitlines():
  if '|'in line and not line.startswith('#'):
   name,terms=line.split('|',1);aliases.setdefault(name,[]).extend(t.strip()for t in terms.split(';')if t.strip())
jobs={}
for r in scope:
 for term in [r['name']]+aliases.get(r['name'],[])[:2]:
  key=sha(term.encode())[:20];j=jobs.setdefault(key,dict(id=key,query=term,itemIds=[],kind='flickr-exact-name-or-preserved-knowledge-alias'))
  if r['itemId']not in j['itemIds']:j['itemIds'].append(r['itemId'])

if (B/'followup-plan.json').exists():
 for j in read(B/'followup-plan.json')['jobs']:jobs[j['id']]=j
save(B/'query-plan.json',dict(date='2026-11-17',jobs=list(jobs.values())));log=B/'query-log.jsonl';prior=[json.loads(s)for s in log.read_text().splitlines()]if log.exists()else[];done={r['id']for r in prior if r.get('responseFile')};lock=threading.Lock()
def resolve(d,o):
 if isinstance(o,dict)and isinstance(o.get('data'),str)and o['data'].startswith('~'):
  t=d['main']
  for k in d['legend'][int(o['data'][1:])]:t=t[int(k)]if isinstance(t,list)else t[k]
  return t
 return o.get('data',o)
def fetch(j):
 u='https://www.flickr.com/search/?'+urlencode(dict(text=j['query'],license='1,2,3,4,5,6,9,10',media='photos'));p=L/'search'/(j['id']+'.html.gz');row=dict(j,url=u)
 try:
  if p.exists():raw=gzip.decompress(p.read_bytes())
  else:
   with urlopen(Request(u,headers={'User-Agent':'Mozilla/5.0 EurotripRegionalPhotoResearch/1.0'}),timeout=20)as f:raw=f.read()
   assert b'modelExport:'in raw,'Flickr search did not return structured photo data';p.write_bytes(gzip.compress(raw,compresslevel=1,mtime=0))
  s=raw.decode();d,_=json.JSONDecoder().raw_decode(s.split('modelExport:',1)[1].lstrip());photos=[]
  for o in d['main'].get('photo-lite-models',[]):
   v=resolve(d,o)
   if v.get('license')not in [1,2,3,4,5,6,9,10]:continue
   sizes=v.get('sizes',{}).get('data',{});versions=[x['data']for x in sizes.values()if isinstance(x,dict)and isinstance(x.get('data'),dict)and x['data'].get('width')]
   if not versions:continue
   fitting=[x for x in versions if 640<=x['width']<=1280];image=max(fitting or versions,key=lambda x:x['width']);url=image['url'];url='https:'+url if url.startswith('//')else url
   photos.append(dict(id=v['id'],owner=v['ownerNsid'],author=v.get('username'),description=(v.get('description','')[:24]+('…'if len(v.get('description',''))>24 else'')),descriptionPreviewOnly=True,completeDescriptionIn=str(p.relative_to(R)),licenseCode=v['license'],source='https://www.flickr.com/photos/'+v['ownerNsid']+'/'+v['id'],preview=url,width=image['width'],height=image['height'],itemIds=j['itemIds'],queryId=j['id']))
  row.update(status='saved-candidates-not-approved',responseFile=str(p.relative_to(R)),compressedSha256=sha(p.read_bytes()),responseSha256=sha(raw),returnedPhotos=len(photos),candidates=photos)
 except Exception as e:row.update(status='error',error=str(e),candidates=[])
 with lock:
  with log.open('a')as f:f.write(json.dumps(row,ensure_ascii=False)+'\n')
 return row
pending=[j for j in jobs.values()if j['id']not in done];print('QUERY PLAN',len(jobs),'pending',len(pending),flush=True)
with ThreadPoolExecutor(max_workers=8)as pool:
 for n,f in enumerate(as_completed([pool.submit(fetch,j)for j in pending]),1):
  row=f.result()
  if n%50==0:print('SAVED',n,'/',len(pending),flush=True)
print('DONE',flush=True)

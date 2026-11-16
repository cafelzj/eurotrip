"""Preserve independent Commons queries and candidates; never adopt from a name hit."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError
from concurrent.futures import ThreadPoolExecutor,as_completed
import json,hashlib,re,time,threading,html
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';(L/'responses').mkdir(exist_ok=True);read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();scope=read(B/'scope.json')['items'];aliases={}
for line in (B/'knowledge-aliases.txt').read_text().splitlines():
 if '|'in line and not line.startswith('#'):
  a,b=line.split('|',1);aliases[a]=[v.strip()for v in b.split(';')]
# Query identity includes actual text: repeated runs reuse only the same response.
jobs={}
for r in scope:
 if r['hasPhoto']:continue
 terms=aliases.get(r['name'],[])[:2]+[r['name']]
 for term in terms:
  query='"'+term.replace('"','')+'"';key=sha(query.encode())[:20];j=jobs.setdefault(key,dict(id=key,query=query,terms=[],itemIds=[],kind='commons-name-or-known-alias'))
  if r['itemId']not in j['itemIds']:j['itemIds'].append(r['itemId'])
  if term not in j['terms']:j['terms'].append(term)
# English/memory aliases first, then every exact Chinese name, with no hidden sample cap.
initial=list(jobs.values());jobs=[j for j in initial if any(re.search('[a-zA-Z]',t)for t in j['terms'])]
# Broader alias searches deliberately remove phrase-order constraints while
# retaining their separate query hashes and history.
for old in list(jobs):
 text=old['query'].strip('"');jobs.append(dict(old,id=sha(text.encode())[:20],query=text,kind='commons-unquoted-known-alias'))
# Batch exact names with explicit term-to-card mapping. Every name participates;
# only exact metadata hits or the known alias get a proposed binding.
missing=[r for r in scope if not r['hasPhoto']]
for start in range(0,len(missing),12):
 group=missing[start:start+12];query=' OR '.join('"'+r['name'].replace('"','')+'"'for r in group);jobs.append(dict(id=sha(query.encode())[:20],query=query,terms=[r['name']for r in group],itemIds=[r['itemId']for r in group],termMap={r['name']:r['itemId']for r in group},kind='commons-batched-exact-names'))
if(B/'additional-query-plan.json').exists():jobs+=read(B/'additional-query-plan.json')['jobs']
jobs=list({j['id']:j for j in jobs}.values())
(B/'query-plan.json').write_text(json.dumps(dict(date='2026-11-16',jobs=jobs),ensure_ascii=False,indent=2)+'\n');history=B/'query-log.jsonl';done={r['id']for r in [json.loads(l)for l in history.read_text().splitlines()]if r.get('responseFile')}if history.exists()else set();lock=threading.Lock()
def fetch(j):
 p=L/'responses'/(j['id']+'.json');url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=j['query'],gsrnamespace=6,gsrlimit=50 if bool(j.get('termMap'))else 6,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));row=dict(j,url=url)
 try:
  if not p.exists():
   for attempt in range(4):
    try:
     time.sleep(3.2)
     with urlopen(Request(url,headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=25)as f:raw=f.read()
     json.loads(raw);p.write_bytes(raw);break
    except Exception:
     if attempt==3:raise
     time.sleep(20*(attempt+1))
  d=json.loads(p.read_bytes());assert 'error'not in d,d.get('error');pages=sorted(d.get('query',{}).get('pages',{}).values(),key=lambda v:v.get('index',99999));rows=[]
  for v in pages:
   if not v.get('imageinfo'):continue
   info=v['imageinfo'][0];m=info.get('extmetadata',{});license=m.get('LicenseShortName',{}).get('value','');file=v['title'][5:]
   if not re.search(r'CC(?: ?0| BY)|Public domain',license,re.I)or not re.search(r'\.(jpe?g|png|webp)$',file,re.I):continue
   itemIds=j['itemIds']
   if j.get('termMap'):
    norm=lambda x:re.sub(r'[^\w\u4e00-\u9fff]','',html.unescape(re.sub('<[^>]*>','',str(x)))).lower()
    desc=norm(file+' '+str(m.get('ImageDescription',{}).get('value',''))+' '+str(m.get('Categories',{}).get('value','')))
    itemIds=list(dict.fromkeys(id for term,refs in j['termMap'].items()if norm(term)in desc for id in (refs if isinstance(refs,list)else[refs])))
    if not itemIds:continue
   rows.append(dict(id=sha(file.encode())[:16],file=file,info=info,rank=v.get('index'),itemIds=itemIds,queryIds=[j['id']],metadataFile=str(p.relative_to(R)),metadataSha256=sha(p.read_bytes())))
  row.update(status='search-response-saved-not-subject-approved',responseFile=str(p.relative_to(R)),responseSha256=sha(p.read_bytes()),returnedFiles=len(pages),eligibleCandidateFiles=len(rows),candidates=rows if j.get('termMap')or j['kind']!='commons-name-or-known-alias'else rows[:3])
 except Exception as e:row.update(status='error',error=str(e),candidates=[])
 with lock:
  with history.open('a')as f:f.write(json.dumps(row,ensure_ascii=False)+'\n')
 return row
pending=[j for j in jobs if j['id']not in done];print('QUERY PLAN',len(jobs),'pending',len(pending),'cards',sum(not r['hasPhoto']for r in scope),flush=True)
with ThreadPoolExecutor(max_workers=1)as pool:
 for i,f in enumerate(as_completed([pool.submit(fetch,j)for j in pending]),1):
  r=f.result()
  if i%20==0 or r['status']=='error':print('SEARCH',i,'/',len(pending),r['status'],r['query'],flush=True)
print('DONE',flush=True)

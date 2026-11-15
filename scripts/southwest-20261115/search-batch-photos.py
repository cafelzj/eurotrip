"""Search every adopted southwest name exactly; a result is never an automatic image adoption."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError
import json,hashlib,time,datetime,re
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115/photos/exact-search';L.mkdir(parents=True,exist_ok=True)
s=(R/'data/flavors.js').read_text();cat=json.loads(s[s.index('{'):s.rfind(';')]);items=[i for i in cat['items']if i.get('researchBatch')==B.name];names=list(dict.fromkeys(i['name']for i in items));logs=[];candidates={};sha=lambda b:hashlib.sha256(b).hexdigest()
for start in range(0,len(names),16):
 group=names[start:start+16];query=' OR '.join('"'+n.replace('"','')+'"'for n in group);key=sha(query.encode())[:16];p=L/(key+'.json');url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=query,gsrnamespace=6,gsrlimit=50,prop='imageinfo',iiprop='url|extmetadata|size'))
 row=dict(names=group,query=query,url=url,checkedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),status='pending')
 try:
  if not p.exists():
   time.sleep(3)
   with urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=25)as f:p.write_bytes(f.read())
  raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d,d.get('error');pages=list(d.get('query',{}).get('pages',{}).values());row.update(status='search-only-awaiting-visual-review',responseFile=p.relative_to(R).as_posix(),responseSha256=sha(raw),resultCount=len(pages))
  for page in pages:
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];text=' '.join([page['title'],*[str(v.get('value',''))for v in info.get('extmetadata',{}).values()if isinstance(v,dict)]]);matched=[n for n in group if n in text]
   if matched:candidates[page['title']]=dict(file=page['title'][5:],names=list(dict.fromkeys(candidates.get(page['title'],{}).get('names',[])+matched)),info=info,metadataFile=p.relative_to(R).as_posix(),metadataSha256=sha(raw))
 except HTTPError as e:
  row.update(status='search-error',error=str(e),retryAfter=e.headers.get('Retry-After'));print('SEARCH ERROR',start,e.code,row.get('retryAfter'),flush=True)
  # Honor server backpressure; leave unexecuted groups pending instead of hammering.
  if e.code==429:
   try:backoff=max(2,min(20,int(e.headers.get('Retry-After','5'))))
   except ValueError:backoff=5
   time.sleep(backoff)
 except Exception as e:row.update(status='search-error',error=str(e))
 logs.append(row);print('SEARCHED',min(start+16,len(names)),'/',len(names),'names;',len(candidates),'exact-name candidates',flush=True)
coverage={i['id']:dict(name=i['name'],province=i['province'],status='not-yet-searched')for i in items}
for q in logs:
 for n in q['names']:
  for ident,row in coverage.items():
   if row['name']==n:row.update(status=q['status'],queryResponseFile=q.get('responseFile'))
report=dict(date='2026-11-15',scope='only-this-southwest-batch',rule='只用对应实拍；图片命中不是主题与许可审阅；零结果、失败和未执行部分保留，缺图不作通用或生成示意替代。',queries=logs,coverage=coverage,candidates=list(candidates.values()))
(B/'image-exact-search.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print('DONE',len(logs),'queries;',len(candidates),'exact-name candidates',flush=True)

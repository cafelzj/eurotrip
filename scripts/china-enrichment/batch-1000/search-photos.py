"""Search all selected card names, preserving complete Commons responses and honest zero results."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError
import json,hashlib,re,time,html
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000/photos';L.mkdir(exist_ok=True)
items=json.loads((B/'targets.json').read_text())['items'];sha=lambda b:hashlib.sha256(b).hexdigest();queries=[];candidates={};coverage={}
def fetch(url):
 for attempt in range(5):
  try:
   time.sleep(1.5)
   with urlopen(Request(url,headers={'User-Agent':'EurotripSpecificPhotoResearch/1.0'}),timeout=25)as f:return f.read()
  except HTTPError as e:
   if e.code not in (429,500,502,503,504)or attempt==4:raise
   delay=min(max(int(e.headers.get('Retry-After','5')),5),45);time.sleep(delay)
  except Exception:
   if attempt==4:raise
   time.sleep(3)
def norm(s):return re.sub(r'[^\w\u4e00-\u9fff]','',html.unescape(re.sub('<[^>]*>','',str(s))))
for start in range(0,len(items),16):
 group=items[start:start+16];q=' OR '.join('"'+i['name'].replace('"','')+'"'for i in group);url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=q,gsrnamespace=6,gsrlimit=50,prop='imageinfo',iiprop='url|size|extmetadata',iiurlwidth=960));file=L/f'search-{start//16:03d}.json';log=dict(query=q,url=url,itemIds=[i['itemId']for i in group])
 try:
  if not file.exists():file.write_bytes(fetch(url))
  pages=json.loads(file.read_bytes()).get('query',{}).get('pages',{});count=0
  for p in pages.values():
   if not p.get('imageinfo'):continue
   info=p['imageinfo'][0];m=info.get('extmetadata',{});lic=str(m.get('LicenseShortName',{}).get('value',''));title=p['title'][5:]
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I)or not re.search(r'\.(jpe?g|png|webp)$',title,re.I):continue
   descriptive=norm(title+' '+str(m.get('ImageDescription',{}).get('value',''))+' '+str(m.get('Categories',{}).get('value','')))
   matches=[i for i in group if norm(i['name'])in descriptive]
   if not matches:continue
   ident=sha(title.encode())[:14];row=candidates.setdefault(ident,dict(id=ident,file=title,info=info,itemIds=[],subjects=[],metadataFile=str(file.relative_to(R)),metadataSha256=sha(file.read_bytes())))
   for i in matches:
    if i['itemId']not in row['itemIds']:row['itemIds'].append(i['itemId']);row['subjects'].append(i['name'])
   count+=1
  log.update(status='search-only-awaiting-visual-review',responseFile=str(file.relative_to(R)),responseSha256=sha(file.read_bytes()),returnedFiles=len(pages),exactNameCandidateFiles=count)
 except Exception as e:log.update(status='search-error',error=str(e));print('ERROR',start,str(e),flush=True)
 for i in group:coverage[i['itemId']]=dict(queryIndex=len(queries),query=q,status=log['status'],responseFile=log.get('responseFile'),responseSha256=log.get('responseSha256'))
 queries.append(log);result=dict(date='2026-11-15',rule='名称命中仅为候选；未通过实物与展示质量审阅不采用。',queries=queries,coverage=coverage,candidates=list(candidates.values()));(B/'photo-search.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print('SEARCH',start+len(group),'of',len(items),'exact candidates',len(candidates),flush=True)

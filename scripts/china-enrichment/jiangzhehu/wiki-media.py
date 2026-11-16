"""Resolve Wikipedia picture pointers to Commons media; mismatches stay candidates."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
import json,hashlib,re,time
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();pointers=[dict(r,pointerFile=q.get('responseFile'),pointerSha256=q.get('responseSha256'))for q in read(B/'wiki-pointers.json')['records']for r in q['rows']if r.get('file')and re.search(r'\.(jpe?g|png|webp)$',r['file'],re.I)];files=list(dict.fromkeys(r['file']for r in pointers));logs=[];candidates=[]
for start in range(0,len(files),30):
 group=files[start:start+30];key=sha('|'.join(group).encode())[:20];p=L/'wiki'/f'media-{key}.json';url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',titles='|'.join('File:'+f for f in group),prop='imageinfo',iiprop='url|size|extmetadata',iiurlwidth=960));log=dict(url=url,files=group)
 try:
  if not p.exists():
   for attempt in range(4):
    try:
     time.sleep(5)
     with urlopen(Request(url,headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=30)as f:data=f.read()
     json.loads(data);p.write_bytes(data);break
    except Exception:
     if attempt==3:raise
     time.sleep(20)
  d=read(p);q=d.get('query',{});mapping={r['from']:r['to']for r in q.get('normalized',[])};pages={r['title']:r for r in q.get('pages',{}).values()}
  for file in group:
   title=mapping.get('File:'+file,'File:'+file);page=pages.get(title,{})
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];m=info.get('extmetadata',{});license=m.get('LicenseShortName',{}).get('value','')
   if not re.search(r'CC(?: ?0| BY)|Public domain',license,re.I):continue
   links=[r for r in pointers if r['file']==file];title=title[5:];candidates.append(dict(id=sha(title.encode())[:16],file=title,info=info,itemIds=list(dict.fromkeys(id for r in links for id in r['itemIds'])),queryIds=[],wikiPointers=links,metadataFile=str(p.relative_to(R)),metadataSha256=sha(p.read_bytes())))
  log.update(status='response-saved-not-subject-approved',responseFile=str(p.relative_to(R)),responseSha256=sha(p.read_bytes()))
 except Exception as e:log.update(status='error',error=str(e))
 logs.append(log)
(B/'wiki-media.json').write_text(json.dumps(dict(date='2026-11-16',queries=logs,candidates=candidates),ensure_ascii=False,indent=2)+'\n');print('WIKI MEDIA',len(candidates),flush=True)

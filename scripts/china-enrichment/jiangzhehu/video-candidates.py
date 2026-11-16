"""Keep clearly linked, openly licensed real-video still candidates separate from photographs."""
from pathlib import Path
import json,hashlib,html,re
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';sha=lambda b:hashlib.sha256(b).hexdigest();norm=lambda x:re.sub(r'[^\w\u4e00-\u9fff]','',html.unescape(re.sub('<[^>]*>','',str(x)))).lower();rows={}
for line in (B/'query-log.jsonl').read_text().splitlines():
 q=json.loads(line)
 if not q.get('responseFile'):continue
 data=json.loads((R/q['responseFile']).read_text())
 for p in data.get('query',{}).get('pages',{}).values():
  if not p.get('imageinfo'):continue
  info=p['imageinfo'][0];file=p['title'][5:];m=info.get('extmetadata',{});license=m.get('LicenseShortName',{}).get('value','')
  if not re.search(r'\.(webm|ogv|mp4)$',file,re.I)or not info.get('thumburl')or not re.search(r'CC(?: ?0| BY)|Public domain',license,re.I):continue
  ids=q['itemIds']
  if q.get('termMap'):
   desc=norm(file+' '+str(m.get('ImageDescription',{}).get('value',''))+' '+str(m.get('Categories',{}).get('value','')));ids=[id for term,id in q['termMap'].items()if norm(term)in desc]
  if not ids:continue
  id=sha(file.encode())[:16];r=rows.setdefault(id,dict(id=id,file=file,info=info,itemIds=[],queryIds=[],mediaType='video-still',metadataFile=q['responseFile'],metadataSha256=q['responseSha256']))
  r['itemIds']=list(dict.fromkeys(r['itemIds']+ids));r['queryIds']=list(dict.fromkeys(r['queryIds']+[q['id']]))
(B/'video-candidates.json').write_text(json.dumps(dict(date='2026-11-16',rule='视频截图需单独核对实拍性质、主体、帧质量和许可；采用时注明实拍视频画面。',candidates=list(rows.values())),ensure_ascii=False,indent=2)+'\n');print('VIDEO STILL CANDIDATES',len(rows));print([r['file']for r in rows.values()])

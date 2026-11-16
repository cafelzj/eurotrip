"""Deduplicate preserved candidates and download for visual review, with no adoption."""
from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor,as_completed
from PIL import Image,ImageOps,ImageDraw,ImageFont
import json,hashlib,time,shutil
from datetime import datetime,timezone
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';(L/'photos').mkdir(exist_ok=True);read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();rows={};queries=[]
p=B/'query-log.jsonl'
if p.exists():
 for line in p.read_text().splitlines():
  try:q=json.loads(line)
  except Exception:continue
  queries.append(q)
  for r in q.get('candidates',[]):
   old=rows.setdefault(r['id'],dict(r));old['itemIds']=list(dict.fromkeys(old['itemIds']+r['itemIds']));old['queryIds']=list(dict.fromkeys(old['queryIds']+r['queryIds']))
p=B/'wiki-media.json'
if p.exists():
 for r in read(p)['candidates']:
  old=rows.setdefault(r['id'],dict(r));old['itemIds']=list(dict.fromkeys(old['itemIds']+r['itemIds']));old['wikiPointers']=r['wikiPointers']
p=B/'flickr-candidates.json'
if p.exists():
 for r in read(p)['candidates']:
  old=rows.setdefault(r['id'],dict(r));old['itemIds']=list(dict.fromkeys(old['itemIds']+r['itemIds']))
p=B/'video-candidates.json'
if p.exists():
 for r in read(p)['candidates']:
  old=rows.setdefault(r['id'],dict(r));old['itemIds']=list(dict.fromkeys(old['itemIds']+r['itemIds']))
approved={r['itemId']for r in read(B/'visual-decisions.json')['approved']}
def download(r):
 p=L/'photos'/(r['id']+'.original')
 if r['id']in ['16b7eae663cfdb7a','261ba7c8681da740']or('venue-wuxi-nanchansi'in r['itemIds'] and 'Station'in r['file']):
  r.update(status='rejected-metadata-before-download',reason='甘肃肃州、无锡大运河或地铁站，与本卡片的苏州丝绸、剧院或寺庙／商圈主体不对应。');return r
 if ('venue-xuzhou-hubushan'in r['itemIds'] and 'Station'in r['file'])or ('knowledge-suzhou-pingtan'in r['itemIds'] and any(t in r['file'] for t in ['Railway Station','toll station','Streetview','county lige hotel']))or r['id']in ['7ff749a6ecd1526b','8b0afcbedbf4251b']:
  r.update(status='rejected-metadata-before-download',reason='地铁站、福建平潭或安徽雨山湖，与本卡片具体地点／表演主题不对应；来源元数据明确。');return r
 if any(term in r['file'] for term in ['Yunjin Kim','Wu Zhu (五銖)','Tai Huo Liu Zhu','Mi-wa-kan yu-ha-la','Songjin Wangchuke','三枚葉の松']):
  r.update(status='rejected-metadata-before-download',reason='名称明确指向演员、钱币、人名或无关植物，不是本卡片主体。');return r
 restricted={'养乐多无锡乳酸菌饮品','优诺昆山乳品','蒙牛宿迁乳品','伊利苏州乳品','明治苏州乳品'}
 if not p.exists() and all(next(t['name']for t in read(B/'scope.json')['items']if t['itemId']==id)in restricted for id in r['itemIds']):
  r.update(status='pending-local-product-or-factory-proof',reason='涉及本地生产基地，品牌通用产品、其他地区工厂或误命中不能直接采用；保留元数据待核。');return r
 if not p.exists() and all(id in approved for id in r['itemIds']):
  r.update(status='deferred-already-illustrated-subject',reason='该主体已采用审阅实拍，保留新候选，未声称完成该候选的图片审核。');return r
 try:
  if not p.exists():
   urls=list(dict.fromkeys([r['info'].get('thumburl')or r['info']['url'],r['info']['url']]))
   for attempt,url in enumerate(urls):
    time.sleep(2.5 if not attempt else 10)
    event=dict(candidateId=r['id'],url=url,at=datetime.now(timezone.utc).isoformat())
    try:
     with urlopen(Request(url,headers={'User-Agent':'EurotripRegionalPhotoReview/1.0'}),timeout=20)as f:raw=f.read()
     temp=p.with_suffix('.download');temp.write_bytes(raw);Image.open(temp).verify();temp.replace(p);r['downloadUrl']=url;event.update(status='saved',sha256=sha(raw))
    except Exception as e:event.update(status='error',error=str(e))
    with(B/'download-attempts.jsonl').open('a')as f:f.write(json.dumps(event,ensure_ascii=False)+'\n')
    if event['status']=='saved':break
    if attempt==len(urls)-1:raise RuntimeError(event['error'])
  im=Image.open(p);im.verify();r.update(status='downloaded-awaiting-visual-review',rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()));r.setdefault('downloadUrl',r['info'].get('thumburl')or r['info']['url'])
 except Exception as e:r.update(status='download-error',error=str(e))
 return r
# Preserve previously viewed contact sheets before regenerating their index.
prior=list(L.glob('contact-*.jpg'))
if prior:
 folder=L/('review-round-'+str(len(list(L.glob('review-round-*')))+1).zfill(2));folder.mkdir()
 for p in prior+[L/'contact-index.json']:
  if p.exists():shutil.copyfile(p,folder/p.name)
out=[]
with ThreadPoolExecutor(max_workers=1)as pool:
 for i,f in enumerate(as_completed([pool.submit(download,r)for r in rows.values()]),1):
  out.append(f.result())
  if i%20==0:print('DOWNLOADED',i,'/',len(rows),flush=True)
out.sort(key=lambda r:r['id']);
priorFile=B/'candidates.json'
if priorFile.exists():
 snapshot=L/'candidate-snapshots';snapshot.mkdir(exist_ok=True);oldSha=sha(priorFile.read_bytes());saved=snapshot/(oldSha+'.json');shutil.copyfile(priorFile,saved)
 with(B/'download-runs.jsonl').open('a')as f:f.write(json.dumps(dict(previousCandidateSnapshot=str(saved.relative_to(R)),sha256=oldSha,newCandidates=len(out)))+'\n')
(B/'candidates.json').write_text(json.dumps(dict(date='2026-11-16',candidates=out),ensure_ascii=False,indent=2)+'\n');print('CANDIDATES',len(out),flush=True)
valid=[r for r in out if r['status']=='downloaded-awaiting-visual-review'];scope={r['itemId']:r for r in read(B/'scope.json')['items']};font=ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc',16)
for start in range(0,len(valid),40):
 group=valid[start:start+40];sheet=Image.new('RGB',(1200,((len(group)+3)//4)*220),'white');draw=ImageDraw.Draw(sheet)
 for i,r in enumerate(group):
  im=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');im.thumbnail((288,176));x=i%4*300;y=i//4*220;sheet.paste(im,(x+(288-im.width)//2,y));name=' / '.join(scope[id]['name']for id in r['itemIds']);draw.text((x+2,y+178),str(start+i)+' '+name[:17],fill='black',font=font);draw.text((x+2,y+199),r['id'],fill='black',font=font)
 sheet.save(L/f'contact-{start//40:02d}.jpg')
(L/'contact-index.json').write_text(json.dumps(dict(items=[dict(index=i,id=r['id'],file=r['file'],itemIds=r['itemIds'])for i,r in enumerate(valid)]),ensure_ascii=False,indent=2)+'\n')

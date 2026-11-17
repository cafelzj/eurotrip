"""Collect English article image candidates, never automatically approve them."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor
import json,hashlib,re,html,time
from PIL import Image
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';L=R/'research/.local/jiangzhehu-images-20261117-03'
sha=lambda x:hashlib.sha256(x).hexdigest();jobs=json.loads((B/'english-plan.json').read_text())['subjects'];logs=[];pictures={}
for d in ['responses','photos']:(L/d).mkdir(exist_ok=True)
def api(params):
 u='https://en.wikipedia.org/w/api.php?'+urlencode(dict(action='query',format='json',**params));p=L/'responses'/(sha(u.encode())[:20]+'.json')
 if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0 (personal educational project)'}),timeout=25).read())
 raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d,str(d.get('error'));return d,dict(url=u,responseFile=str(p.relative_to(R)),responseSha256=sha(raw))
names=list(jobs)
for start in range(0,len(names),35):
 batch=names[start:start+35]
 try:
  d,log=api(dict(titles='|'.join(batch),prop='images|pageimages',imlimit=100,piprop='name',redirects=1));q=d.get('query',{});aliases={r['from']:r['to']for key in ['normalized','redirects']for r in q.get(key,[])};pages={p['title']:p for p in q.get('pages',{}).values()}
  for name in batch:
   title=name;seen=set()
   while title in aliases and title not in seen:seen.add(title);title=aliases[title]
   p=pages.get(title,{})
   for im in p.get('images',[]):
    file=im['title'][5:]
    if not re.search(r'\.(?:jpe?g|png|webp)$',file,re.I)or re.search('logo|map|flag|question|icon',file,re.I):continue
    row=pictures.setdefault(file,dict(title=file,itemIds=[],articleTitles=[],articleSourceFiles=[]));row['itemIds']=list(dict.fromkeys(row['itemIds']+jobs[name]));row['articleTitles']=list(dict.fromkeys(row['articleTitles']+[title]));row['articleSourceFiles']=list(dict.fromkeys(row['articleSourceFiles']+[log['responseFile']]))
  log.update(status='saved',subjects=batch)
 except Exception as e:log=dict(status='error',subjects=batch,error=str(e))
 logs.append(log);print('Article batch',start,len(pictures),'candidate files',flush=True)
out=[];files=list(pictures)
for start in range(0,len(files),35):
 batch=files[start:start+35]
 try:
  d,log=api(dict(titles='|'.join('File:'+f for f in batch),prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960))
  for p in d.get('query',{}).get('pages',{}).values():
   if not p.get('imageinfo'):continue
   info=p['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName');src=pictures.get(p['title'][5:])
   if src and re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):out.append(dict(src,id='c-'+sha(src['title'].encode())[:16],provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),metadataFile=log['responseFile'],metadataSha256=log['responseSha256'],status='candidate-not-approved'))
  log['status']='saved-image-metadata'
 except Exception as e:log=dict(status='imageinfo-error',files=batch,error=str(e))
 logs.append(log)
def down(r):
 p=L/'photos'/(r['id']+'.jpg')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  im=Image.open(p);im.verify();r.update(width=im.width,height=im.height,rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=6)as pool:out=list(pool.map(down,out))
(B/'english-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=out),ensure_ascii=False,indent=2)+'\n');(B/'english-log.json').write_text(json.dumps(dict(date='2026-11-17',checks=logs),ensure_ascii=False,indent=2)+'\n');print('Downloaded',sum(r['status']=='downloaded-not-approved'for r in out),'of',len(out),flush=True)

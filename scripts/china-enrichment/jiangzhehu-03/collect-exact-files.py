"""Resolve exact existing card names as file titles; save misses without adopting."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,re,html
from PIL import Image
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';L=R/'research/.local/jiangzhehu-images-20261117-03';sha=lambda x:hashlib.sha256(x).hexdigest();scope=json.loads((B/'scope.json').read_text())['items'];jobs={}
for r in scope:
 for ext in ['jpg','JPG']:
  title=r['name']+'.'+ext;jobs.setdefault(title,[]).append(r['itemId'])
jobs['清龙泉剑.jpg']=[r['itemId']for r in scope if r['name']=='龙泉宝剑']
(B/'exact-files-plan.json').write_text(json.dumps(dict(date='2026-11-17',titles=jobs,notes='现有卡片名称的明确文件名查询；清龙泉剑文件名另来自已保存检索。文件名吻合仍须目视复核。'),ensure_ascii=False,indent=2)+'\n')
out=[];logs=[];names=list(jobs)
for start in range(0,len(names),35):
 batch=names[start:start+35];u='https://en.wikipedia.org/w/api.php?'+urlencode(dict(action='query',format='json',titles='|'.join('File:'+f for f in batch),prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));p=L/'responses'/(sha(u.encode())[:20]+'.json');log=dict(url=u,subjects=batch)
 try:
  if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d
  for page in d.get('query',{}).get('pages',{}).values():
   if not page.get('imageinfo'):continue
   file=page['title'][5:];info=page['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName')
   if file in jobs and re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):out.append(dict(id='c-'+sha(file.encode())[:16],title=file,itemIds=jobs[file],provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),metadataFile=str(p.relative_to(R)),metadataSha256=sha(raw),status='candidate-not-approved'))
  log.update(status='saved',responseFile=str(p.relative_to(R)),responseSha256=sha(raw))
 except Exception as e:log.update(status='error',error=str(e))
 logs.append(log)
 if len(logs)%10==0:print('Exact file queries',min(start+35,len(names)),'/',len(names),'candidates',len(out),flush=True)
def down(r):
 p=L/'photos'/(r['id']+'.jpg')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  im=Image.open(p);im.verify();r.update(width=im.width,height=im.height,rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=4)as pool:out=list(pool.map(down,out))
(B/'exact-file-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=out),ensure_ascii=False,indent=2)+'\n');(B/'exact-file-log.json').write_text(json.dumps(dict(date='2026-11-17',checks=logs),ensure_ascii=False,indent=2)+'\n');print('Exact files downloaded',sum(r['status']=='downloaded-not-approved'for r in out),'of',len(out),flush=True)

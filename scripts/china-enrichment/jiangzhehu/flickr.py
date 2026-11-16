"""Preserve exact Flickr pages and license metadata; candidates still need visual approval."""
from pathlib import Path
from urllib.request import Request,urlopen
from PIL import Image
import json,re,hashlib,time,html
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';folder=L/'flickr';folder.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
photos=[('js-suzhou-sanxia','https://www.flickr.com/photos/italita/26421726963'),('sh-eight-treasure-duck','https://www.flickr.com/photos/avlxyz/1808411522/'),('sh-scallion-noodles','https://www.flickr.com/photos/65259238%40N06/14978248807'),('sh-scallion-noodles','https://www.flickr.com/photos/78797573%40N00/23625390789')]
scope=json.loads((B/'scope.json').read_text())['items'];noodle=next(r['itemId']for r in scope if r['name']=='开洋葱油拌面');out=[];log=[]
for id,url in photos:
 if id=='sh-scallion-noodles':id=noodle
 key=hashlib.sha256(url.encode()).hexdigest()[:16];page=folder/(key+'.html');record=dict(itemId=id,url=url)
 try:
  if not page.exists():
   time.sleep(2)
   with urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=25)as f:page.write_bytes(f.read())
  text=page.read_text();objects=[]
  for content in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',text,re.S):
   d=json.loads(content);objects+=d.get('@graph',[d])
  obj=next(o for o in objects if o.get('@type')=='ImageObject');licenseUrl=obj.get('license','');licenses={'by/2.0':'CC BY 2.0','by-sa/2.0':'CC BY-SA 2.0','by-nc/2.0':'CC BY-NC 2.0','by-nc-sa/2.0':'CC BY-NC-SA 2.0'};license=next((v for k,v in licenses.items()if licenseUrl.rstrip('/').endswith('/licenses/'+k)),None)
  title=html.unescape(re.search(r'<meta property="og:title" content="([^"]+)',text)[1]);description=re.search(r'<meta (?:property|name)="(?:og:)?description" content="([^"]+)',text);desc=html.unescape(description[1])if description else obj.get('description',title)
  record.update(title=title,licenseUrl=licenseUrl,license=license,metadataFile=str(page.relative_to(R)),metadataSha256=sha(page),descriptionPreservedIn=str(page.relative_to(R)))
  if not license:record['status']='license-not-selected';log.append(record);continue
  urlImage=obj['contentUrl'];photo=L/'photos'/(key+'.original')
  if not photo.exists():
   time.sleep(2)
   with urlopen(Request(urlImage,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=25)as f:photo.write_bytes(f.read())
  image=Image.open(photo);image.verify();values=dict(Artist=obj['creator']['name'],LicenseShortName=license,LicenseUrl=licenseUrl,ImageDescription=title)
  info=dict(url=urlImage,descriptionurl=url,width=Image.open(photo).width,height=Image.open(photo).height,extmetadata={k:dict(value=v)for k,v in values.items()});out.append(dict(id=key,file=title+'.jpg',provider='Flickr',info=info,itemIds=[id],queryIds=[],metadataFile=str(page.relative_to(R)),metadataSha256=sha(page),rawFile=str(photo.relative_to(R)),rawSha256=sha(photo),status='downloaded-awaiting-visual-review'));record['status']='candidate-not-approved';log.append(record);print(title,license,key,flush=True)
 except Exception as e:record.update(status='error',error=str(e));log.append(record);print('error',str(e),flush=True)
(B/'flickr-candidates.json').write_text(json.dumps(dict(date='2026-11-16',candidates=out,checks=log),ensure_ascii=False,indent=2)+'\n')

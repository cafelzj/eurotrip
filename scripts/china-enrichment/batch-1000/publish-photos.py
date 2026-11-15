"""Publish only manually approved specific-subject photos and preserve past image decisions."""
from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib,re,html
from urllib.parse import quote
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000';read=lambda p:json.loads(p.read_text());save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
media=js(R/'data/flavor-images.js');base=js(L/'baseline-images.js');global_review=read(R/'research/flavors/images/review.json');assert not any(b['batch']==B.name for b in global_review.get('additionalBatches',[])),'This photo batch is already adopted; append a later review.'
assert media==base,'Image registry changed since batch selection; reconcile before adopting.'
records=[];approved=read(B/'approved-photos.json')['items'];candidates=[]
for f in ['photo-search.json','photo-keyword-search.json']:
 for r in (read(L/'photos/download-index.json')['records']if f=='photo-search.json'else read(B/f)['candidates']):
  r=dict(r)
  if 'itemId'not in r:r['itemId']=r['itemIds'][0];r['itemName']=r['subjects'][0]
  candidates.append((f,r))
lookup={(f,r['id']):r for f,r in candidates};chosen={(a['searchFile'],a['candidateId'])for a in approved}
for a in approved:
 r=lookup[(a['searchFile'],a['candidateId'])];assert r['itemId']==a['itemId'];assert sha(R/r['rawFile'])==r['rawSha256'];assert sha(R/r['metadataFile'])==r['metadataSha256'];m=r['info']['extmetadata'];plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value','')))).strip();license=plain('LicenseShortName');author=plain('Artist');license_url=plain('LicenseUrl')or('https://commons.wikimedia.org/wiki/Commons:Public_domain'if license=='Public domain'else '');assert author and license_url and re.search(r'CC(?: ?0| BY)|Public domain',license,re.I)
 image=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');image.thumbnail((960,1280));path=R/'assets/photos/flavors'/('national02-'+r['id']+'.jpg');image.save(path,quality=88,optimize=True);key='national02-photo-'+r['id'];source=r['info'].get('descriptionurl')or'https://commons.wikimedia.org/wiki/File:'+quote(r['file']);caption=a.get('caption',a['itemName']+'实拍');old=media['cards'].get(a['itemId'])
 media['assets'][key]=dict(file=r['file'],src=str(path.relative_to(R)),width=image.width,height=image.height,kind='food',alt=caption,caption=caption,author=author,license=license,licenseUrl=license_url,source=source,checked='2026-11-15',visualReview=dict(status='approved',date='2026-11-15',notes=a['reason']),listDisplay=True,changes='基于Commons提供的缩略响应（无缩略图时使用原图）按EXIF方向与等比例限宽导出JPEG，列表按框裁切；没有生成或替换实物。');media['cards'][a['itemId']]=key
 records.append(dict(id=r['id'],status='adopted',itemId=a['itemId'],itemName=a['itemName'],assetId=key,previousAssetId=old,downloadKind='commons-rendered-thumbnail'if r['info'].get('thumburl')else'original',downloadUrl=r['info'].get('thumburl')or r['info']['url'],action='replace-list-photo'if old else'new-photo-card',source=source,metadataFile=r['metadataFile'],metadataSha256=r['metadataSha256'],originalResponseFile=r['rawFile'],originalSha256=r['rawSha256'],derivativeSha256=sha(path),author=author,license=license,licenseUrl=license_url,reason=a['reason']))
for f,r in candidates:
 if (f,r['id'])in chosen:continue
 records.append(dict(id=r['id'],itemId=r['itemId'],itemName=r['itemName'],file=r['file'],status='held-not-adopted',reason='未通过本轮主题和展示质量选择，或已有更合适照片；店面/摊位、其他地方版本、无关图、模糊昏暗照片不用于凑数。',metadataFile=r['metadataFile'],metadataSha256=r['metadataSha256']))
(R/'data/flavor-images.js').write_text('/* Real, reviewed photographs; absent entries intentionally have no placeholder. */\nwindow.flavorImages='+json.dumps(media,ensure_ascii=False,indent=2)+';\n')
save(B/'photo-adoption.json',dict(date='2026-11-15',publishedPhotos=len(approved),newPhotoCards=sum(r.get('action')=='new-photo-card'for r in records),replacedPhotos=sum(r.get('action')=='replace-list-photo'for r in records),baselineImagesSha256=sha(L/'baseline-images.js'),records=records))
global_review['records']+=records;global_review['illustratedCards']=len(media['cards']);global_review['newPhotographs']=len(media['assets']);global_review.setdefault('additionalBatches',[]).append(dict(batch=B.name,review=str((B/'photo-adoption.json').relative_to(R)),newPhotographs=len(approved)));save(R/'research/flavors/images/review.json',global_review)
cat=js(R/'data/flavors.js');save(R/'research/flavors/images/coverage.json',dict(totalCards=len(cat['items']),illustratedCards=len(media['cards']),listIllustratedCards=sum(media['assets'].get(key,{}).get('listDisplay',True)for key in media['cards'].values()),pendingCards=[i['id']for i in cat['items']if i['id']not in media['cards']],rule='仅主题与展示质量均合适的对应实拍用于列表；其他原图仅留详情，缺图待补。'))
print('PUBLISHED',len(approved),'photos;',sum(r.get('action')=='new-photo-card'for r in records),'new photo cards;',sum(r.get('action')=='replace-list-photo'for r in records),'improved photo;',len(media['cards']),'flavor photo cards')

"""Publish only individually selected real-image bindings; preserve earlier input layers."""
from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib,re,html,shutil
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';read=lambda p:json.loads(p.read_text());save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
assert sha(B/'knowledge-aliases.txt')==read(B/'knowledge-seal.json')['sha256'];assert sha(R/'data/flavors.js')==sha(L/'baseline-flavors.js');assert sha(R/'data/china-card-reading.js')==sha(L/'baseline-china-card-reading.js');assert sha(R/'data/card-images.js')==sha(L/'baseline-card-images.js');assert sha(R/'data/flavor-images.js')==sha(L/'baseline-flavor-images.js')
scope={r['itemId']:r for r in read(B/'scope.json')['items']};candidates={r['id']:r for r in read(B/'candidates.json')['candidates']};approved=read(B/'visual-decisions.json')['approved'];assert len({r['itemId']for r in approved})==len(approved);file=R/'data/china-card-images.js';media=js(file);history=read(B/'photo-adoption.json')if(B/'photo-adoption.json').exists()else dict(date='2026-11-16',kind='reviewed-existing-card-images',records=[]);count=0
# Refuse replay after another batch changed this registry or its derivatives.
for id,key in media['cards'].items():
 prior=next((r for r in reversed(history['records'])if r['itemId']==id),None)
 assert prior and prior['assetId']==key,'Binding changed after this batch: '+id
for key in set(media['cards'].values()):
 prior=next((r for r in reversed(history['records'])if r['assetId']==key),None)
 assert prior and sha(R/media['assets'][key]['src'])==prior['derivativeSha256'],'Derivative changed after this batch: '+key
for a in approved:
 r=candidates[a['candidateId']];target=scope[a['itemId']];assert a['itemId']in r['itemIds']or a.get('reuseExplicitSubject'),'Additional reuse needs an explicit subject decision.';assert not target['hasPhoto']or a.get('replaceExisting');assert r['status']=='downloaded-awaiting-visual-review';assert sha(R/r['rawFile'])==r['rawSha256'];assert sha(R/r['metadataFile'])==r['metadataSha256'];key='jzy-'+r['id'];previous=media['cards'].get(a['itemId'])
 if previous==key and media['assets'][key].get('encodingVersion')=='jpeg-preserve-icc-1':
  asset=media['assets'][key];asset['changes']='来源实拍经方向处理、等比限宽与JPEG编码，保留原有ICC配置（如有），未调色、生成或改变主体；'+('展示保留完整画面。'if asset.get('fit')=='contain'or asset['kind']=='product'else'列表按画框裁切。');continue
 m=r['info']['extmetadata'];plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value','')))).strip();license=plain('LicenseShortName');author=plain('Artist');assert re.fullmatch(r'(?:CC0|CC BY(?:-SA)? [234]\.0|CC BY-NC(?:-SA)? 2\.0|Public domain)',license,re.I)
 if '-NC' in license:assert a.get('noncommercialContext')=='personal-informational-github-pages-without-advertising', 'Noncommercial source needs an explicit compatible deployment context.'
 if not author:
  assert license=='Public domain';author='作者未署名（公有领域作品；详见原始图片页）'
 licenseUrl=plain('LicenseUrl')or('https://commons.wikimedia.org/wiki/Commons:Public_domain'if license=='Public domain'else'');assert licenseUrl
 image=ImageOps.exif_transpose(Image.open(R/r['rawFile']));icc=image.info.get('icc_profile');assert not icc or image.mode in ('RGB','RGBA'),'Colour profile requires explicit conversion review';image.thumbnail((960,1280));image=image.convert('RGB');path=R/'assets/photos/china'/('jzy-'+r['id']+'.jpg');path.parent.mkdir(exist_ok=True)
 if path.exists():
  old=L/'derivative-history';old.mkdir(exist_ok=True);shutil.copyfile(path,old/(sha(path)+'.jpg'))
 image.save(path,quality=90,optimize=True,**({'icc_profile':icc}if icc else{}))
 media['assets'].setdefault(key,dict(file=r['file'],src=str(path.relative_to(R)),width=image.width,height=image.height,kind=a['kind'],alt=a['caption'],caption=a['caption'],author=author,license=license,licenseUrl=licenseUrl,source=r['info']['descriptionurl'],originalSrc=r['info']['url'],provider=r.get('provider','Wikimedia Commons'),checked='2026-11-16',visualReview=dict(status='approved',date='2026-11-16',notes=a['reason']),listDisplay=True,changes='采用来源提供的实拍响应，作EXIF方向处理、等比例限宽和JPEG编码；列表按画框裁切，未生成或改变主体。'))
 media['assets'][key].update(encodingVersion='jpeg-preserve-icc-1',colorProfile='preserved'if icc else'source-without-profile',changes='采用来源提供的实拍响应，作EXIF方向处理、等比限宽与JPEG编码；保留原有ICC色彩配置（如有），不调色、不生成或改变主体；列表按画框裁切。')
 if a.get('photographedAt'):media['assets'][key]['photographedAt']=a['photographedAt']
 if a.get('fit'):
  assert a['fit']=='contain';media['assets'][key]['fit']='contain'
 if '-NC' in license:media['assets'][key].update(commercialUse=False,useConditions='仅限非商业使用；须署名并遵守同方式共享条件（如适用）。',deploymentContext=a['noncommercialContext'])
 media['cards'][a['itemId']]=key;history['records'].append(dict(itemId=a['itemId'],itemName=a['itemName'],province=target['province'],city=target['city'],candidateId=r['id'],assetId=key,previousAssetId=previous,status='adopted',action='preserve-icc-encoding'if previous==key else'replace-reviewed-cover'if previous else'new-photo-card',caption=media['assets'][key]['caption'],reason=a['reason'],source=r['info']['descriptionurl'],metadataFile=r['metadataFile'],metadataSha256=r['metadataSha256'],originalResponseFile=r['rawFile'],originalSha256=r['rawSha256'],downloadedResponseUrl=r.get('downloadUrl',r['info'].get('thumburl')or r['info']['url']),derivativeSha256=sha(path),license=license,licenseUrl=licenseUrl,author=author));count+=1
active=set(media['cards'].values())|{key for values in media.get('galleries',{}).values()for key in values};withdrawnFile=B/'withdrawn-assets.json';withdrawn=read(withdrawnFile)if withdrawnFile.exists()else dict(date='2026-11-16',assets=[])
for key in list(media['assets']):
 if key not in active:
  asset=media['assets'].pop(key);path=R/asset['src'];target=L/'withdrawn-assets'/path.name;target.parent.mkdir(exist_ok=True)
  if path.exists():shutil.copyfile(path,target);path.unlink()
  assert target.exists();withdrawn['assets'].append(dict(assetId=key,previousRuntimeSrc=asset['src'],retainedFile=str(target.relative_to(R)),sha256=sha(target),metadata=asset,reason='主体工艺身份未获确认，撤出正式配置；原件、衍生图与历史决定保留。'))
if withdrawn['assets']:save(withdrawnFile,withdrawn)
superseded=[r['assetId']for r in withdrawn['assets']]
file.write_text('/* Reviewed Chinese card photographs; original research and prior registries remain intact. */\nwindow.chinaCardImages='+json.dumps(media,ensure_ascii=False,indent=2)+';\n');history.update(illustratedCards=len(media['cards']),newPhotoCards=len(media['cards']),derivativeAndAdoptionEvents=len(history['records']),photographs=len(active),retainedSupersededAssets=superseded);save(B/'photo-adoption.json',history);print('Processed',count,'adoption/encoding events;',len(media['cards']),'cards;',len(active),'active distinct real pictures')

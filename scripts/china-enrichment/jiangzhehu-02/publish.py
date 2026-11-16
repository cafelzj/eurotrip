"""Publish individually reviewed photos and explicit same-subject reuses only."""
from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib,re,shutil,copy
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';read=lambda p:json.loads(p.read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();save=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
def registry(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
file=R/'data/china-card-images.js';media=registry(file);base=registry(L/'baseline-china-card-images.js');scope={r['itemId']:r for r in read(B/'scope.json')['items']};approved=read(B/'visual-decisions.json')['approved'];history=read(B/'photo-adoption.json')['records']if(B/'photo-adoption.json').exists()else[];oldHistory=read(R/'research/china/enrichment/2026-11-16-jiangzhehu-images/photo-adoption.json')['records'];sources={}
for name in ['candidates','commons-candidates','wiki-media','off-candidates','wiki-api-candidates']:
 for row in read(B/(name+'.json'))['candidates']:
  if row.get('status')!='downloaded-not-approved':continue
  source=sources.setdefault(row['id'],copy.deepcopy(row));source['itemIds']=list(dict.fromkeys(source['itemIds']+row['itemIds']))
assert sha(B/'knowledge-aliases.txt')==read(B/'knowledge-seal.json')['sha256'];assert sha(R/'data/flavors.js')==sha(L/'baseline-flavors.js');assert sha(R/'data/china-card-reading.js')==sha(L/'baseline-china-card-reading.js')
for id,key in base['cards'].items():assert media['cards'][id]==key,'Earlier binding changed: '+id
for key,a in base['assets'].items():assert media['assets'][key]==a,'Earlier asset changed: '+key
for id,key in media['cards'].items():
 if id not in base['cards']:
  prior=next((r for r in reversed(history)if r['itemId']==id),None);assert prior and prior['assetId']==key and sha(R/media['assets'][key]['src'])==prior['derivativeSha256'],'Unknown newer binding or photo; refuse historical replay.'
for a in approved:
 id=a['itemId'];assert id in scope and id not in base['cards'];assert a['caption']and a['reason']
 if any(r['itemId']==id for r in history):
  prior=next(r for r in reversed(history)if r['itemId']==id);assert media['cards'].get(id)==prior['assetId'],'Recorded binding lost; refuse silent reconstruction.';continue
 if a.get('reuseAssetId'):
  oldkey=a['reuseAssetId'];assert oldkey in base['assets'];key='jzy2-reuse-'+id;m=copy.deepcopy(base['assets'][oldkey]);assert m['visualReview']['status']=='approved';m.update(caption=a['caption'],alt=a['caption'],checked='2026-11-17',batch='2026-11-17-jiangzhehu-images-02',reuseOf=oldkey,visualReview=dict(status='approved',date='2026-11-17',notes=a['reason']));media['assets'][key]=m;origin=next(r for r in reversed(oldHistory)if r['assetId']==oldkey);record=dict(originalResponseFile=origin['originalResponseFile'],originalSha256=origin['originalSha256'],metadataFile=origin['metadataFile'],metadataSha256=origin['metadataSha256'],action='reuse-reviewed-same-subject-photo',reusedAssetId=oldkey)
 else:
  r=sources[a['candidateId']];assert r['status']=='downloaded-not-approved';assert id in r['itemIds'];assert sha(R/r['rawFile'])==r['rawSha256'];assert sha(R/r['metadataFile'])==r['metadataSha256'];url=r['licenseUrl'].rstrip('/');lic=r.get('license')
  if not lic:
   part=re.search(r'/licenses/([^/]+)/([\d.]+)',url)
   if part:lic='CC '+part[1].upper()+' '+part[2]
   elif '/publicdomain/zero/'in url:lic='CC0'
   elif '/publicdomain/mark/'in url:lic='Public domain'
  assert lic and re.fullmatch(r'(?:CC0|Public domain|CC BY(?:-NC)?(?:-SA|-ND)? [234]\.[05])',lic),lic;assert r['author'];nc='-NC'in lic;nd='-ND'in lic
  if nc:assert a['noncommercialContext']=='personal-informational-github-pages-without-advertising'
  key='jzy2-'+r['id'];path=R/'assets/photos/china'/(key+'.jpg');source=Image.open(R/r['rawFile']);source=ImageOps.exif_transpose(source);icc=source.info.get('icc_profile')
  if key not in media['assets']:
   if nd:
    assert source.format in [None,'JPEG']and Image.open(R/r['rawFile']).format=='JPEG';assert Image.open(R/r['rawFile']).getexif().get(274,1)==1;shutil.copyfile(R/r['rawFile'],path);version='source-bytes-nd-1';changes='完整保存来源提供的JPEG网络响应原字节及原作者水印，不裁切、不重编码、不调色、不生成；按不演绎条件展示完整画面。'
   else:
    assert not icc or source.mode in ['RGB','RGBA'];source.thumbnail((960,1280));source.convert('RGB').save(path,quality=90,optimize=True,**({'icc_profile':icc}if icc else{}));version='jpeg-preserve-icc-1';changes='来源实拍仅作方向处理、等比限宽和JPEG编码，保留ICC配置（如有），不调色或生成；完整来源另存底稿。'
   im=Image.open(path);m=dict(file=r['title'],src=str(path.relative_to(R)),width=im.width,height=im.height,kind=a['kind'],alt=a['caption'],caption=a['caption'],author=r['author'],license=lic,licenseUrl=url,source=r['source'],originalSrc=r['preview'],provider=r.get('provider','Flickr'),checked='2026-11-17',batch='2026-11-17-jiangzhehu-images-02',visualReview=dict(status='approved',date='2026-11-17',notes=a['reason']),listDisplay=True,encodingVersion=version,colorProfile='preserved'if icc else'source-without-profile',changes=changes)
   if nd or a['kind']=='product':m['fit']='contain'
   if nc:m.update(commercialUse=False,deploymentContext=a['noncommercialContext'],useConditions='限非商业使用，须署名；'+('不演绎，保留来源JPEG原字节和完整画面。'if nd else'按原许可条件使用。'))
   media['assets'][key]=m
  record=dict(originalResponseFile=r['rawFile'],originalSha256=r['rawSha256'],metadataFile=r['metadataFile'],metadataSha256=r['metadataSha256'],action='newly-adopted-real-photo',candidateId=r['id'])
 m=media['assets'][key];media['cards'][id]=key;history.append(dict(itemId=id,itemName=a['itemName'],assetId=key,src=m['src'],derivativeSha256=sha(R/m['src']),caption=a['caption'],reason=a['reason'],source=m['source'],author=m['author'],license=m['license'],licenseUrl=m['licenseUrl'],**record))
file.write_text('/* Individually reviewed real photographs for canonical Chinese cards; source evidence is retained in research/china/enrichment. */\nwindow.chinaCardImages = '+json.dumps(media,ensure_ascii=False,indent=2)+';\n');save(B/'photo-adoption.json',dict(date='2026-11-17',records=history));print('Published into runtime:',len(history),'new card bindings;',len({r['derivativeSha256']for r in history if r['action']=='newly-adopted-real-photo'}),'newly adopted independent photos;',sum(r['action'].startswith('reuse')for r in history),'same-subject reused bindings',flush=True)

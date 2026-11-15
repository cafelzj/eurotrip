"""Merge explicitly reviewed real photos, preserving earlier images and every missing-card record."""
from pathlib import Path
from PIL import Image,ImageOps
from urllib.parse import quote
import json,hashlib,re,html,collections
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115';TARGET=R/'assets/photos/flavors';TARGET.mkdir(exist_ok=True)
read=lambda p:json.loads(p.read_text());save=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(p):
 t=p.read_text();return json.loads(t[t.index('{'):t.rfind(';')])
base=js(L/'baseline-flavor-images.js');cat=js(R/'data/flavors.js');new=[i for i in cat['items']if i.get('researchBatch')==B.name];approvals=read(B/'approved-photos.json')['items'];records=[]
for name in ['photos/download-index.json','photos/more/download-index.json','photos/exact-selected/download-index.json']:records+=read(L/name)['records']
lookup={r['id']:r for r in records};byname=collections.defaultdict(list)
for i in new:byname[i['name']].append(i)
allowed=set(base['cards'])|{byname[a['itemName']][0]['id']for a in approvals};assert not (set(js(R/'data/flavor-images.js')['cards'])-allowed),'Later image batches exist; refusing to reset registry.'
media=json.loads(json.dumps(base));current_review=read(L/'baseline-photo-review.json');decisions=[];approved_ids={a['recordId']for a in approvals};adopted=[]
for a in approvals:
 assert len(byname[a['itemName']])==1,a['itemName'];item=byname[a['itemName']][0];row=lookup[a['recordId']];assert row.get('read'),row['file'];assert sha(R/row['rawFile'])==row['sha256'];assert sha(R/row['metadataFile'])==row['metadataSha256']
 meta=row['info']['extmetadata'];text=lambda k:html.unescape(re.sub('<[^>]*>','',str(meta.get(k,{}).get('value','')))).strip();license=text('LicenseShortName');author=text('Artist');license_url=text('LicenseUrl');author=author or ('原图未列明作者'if license=='Public domain'else '');license_url=license_url or ('https://commons.wikimedia.org/wiki/Commons:Public_domain'if license=='Public domain'else '');assert author and license_url and re.search(r'CC(?: ?0| BY)|Public domain',license,re.I),(row['file'],license)
 picture=ImageOps.exif_transpose(Image.open(R/row['rawFile'])).convert('RGB');picture.thumbnail((960,1280));path=TARGET/('southwest-'+row['id']+'.jpg');picture.save(path,quality=86,optimize=True);key='southwest-photo-'+row['id'];source='https://commons.wikimedia.org/wiki/File:'+quote(row['file'])
 asset=dict(file=row['file'],src=path.relative_to(R).as_posix(),width=picture.width,height=picture.height,kind='food'if item['type']!='crafts'else 'craft',alt=a['caption'],caption=a['caption'],author=author,license=license,licenseUrl=license_url,source=source,checked='2026-11-15',visualReview=dict(status='approved',date='2026-11-15',notes=a['reviewNotes']),changes='取得的原图或Commons缩略响应按EXIF方向校正、等比例限宽后导出JPEG；网页列表按框裁切。')
 media['assets'][key]=asset;media['cards'][item['id']]=key
 record=dict(id=row['id'],file=row['file'],status='adopted',itemId=item['id'],itemName=item['name'],assetId=key,source=source,metadataFile=row['metadataFile'],metadataSha256=row['metadataSha256'],originalResponseFile=row['rawFile'],originalSha256=row['sha256'],downloadKind=row.get('downloadKind','original'),derivativeSha256=sha(path),reason=a['reviewNotes'],author=author,license=license,licenseUrl=license_url);decisions.append(record);adopted.append(record)
for row in records:
 if row['id']in approved_ids:continue
 bad=bool(re.search(r'Chihuahua|Bandera|Pimoa|Distribution map|Airbus|Livery|Bus|公交',row['file'],re.I));reason='原图或文件描述为交通广告、地名、旗帜或生物等，与目标食品不符'if bad else '未下载成功，保留失败待补'if not row.get('read')else '搜索命中尚不足以直接配到该卡片；实物或地域不匹配、主体不清，或已有更合适照片，保留备选'
 if '阿芒尼户撒过手米线'in row['file']:reason='照片为餐馆门面，不能作为过手米线成品图'
 if row['file'].startswith('官渡粑粑'):reason='原图为官渡粑粑，不能配到喜洲粑粑；对应食品尚未正式采用，保留候选'
 decisions.append(dict(id=row['id'],file=row['file'],searchSubject=row.get('subject'),status='rejected-mismatch'if bad else 'pending-download'if not row.get('read')else 'held-or-alternate',source='https://commons.wikimedia.org/wiki/File:'+quote(row['file']),metadataFile=row['metadataFile'],metadataSha256=row['metadataSha256'],reason=reason))
assert all(media['cards'][k]==v for k,v in base['cards'].items());assert all(media['assets'][k]==v for k,v in base['assets'].items())
(R/'data/flavor-images.js').write_text('/* Real, reviewed photographs; absent entries intentionally have no placeholder. */\nwindow.flavorImages='+json.dumps(media,ensure_ascii=False,indent=2)+';\n')
current_review['records']+=decisions;current_review['newPhotographs']=len(media['assets']);current_review['illustratedCards']=len(media['cards']);current_review.setdefault('additionalBatches',[]).append(dict(batch=B.name,review=(B/'image-review.json').relative_to(R).as_posix(),newPhotographs=len(adopted)));save(R/'research/flavors/images/review.json',current_review)
exact=read(B/'image-exact-search.json');covered=[i['id']for i in new if i['id']in media['cards']];missing=[dict(itemId=i['id'],name=i['name'],province=i['province'],city=i['city'],type=i['type'],status='missing-real-photo',reason='尚未审定可直接采用的对应实拍；不使用通用或生成示意图',search=exact['coverage'].get(i['id'],{}))for i in new if i['id']not in media['cards']]
save(B/'image-review.json',dict(date='2026-11-15',scope='本轮四地新增卡片',rule='用户确认只使用对应实拍，缺图待补；真实图片先核主题、作者、许可和文件，再采用。图片不作为食品产地或配方的独立证明。',newPhotographs=len(adopted),baselineImageRegistrySha256=sha(L/'baseline-flavor-images.js'),records=decisions,sourceIndexes=['research/.local/southwest-20261115/photos/download-index.json','research/.local/southwest-20261115/photos/more/download-index.json','research/.local/southwest-20261115/photos/exact-selected/download-index.json']))
save(B/'image-coverage.json',dict(date='2026-11-15',goal='near-100-percent-only-corresponding-real-photos',goalReached=False,totalCards=len(new),illustratedCards=len(covered),coveragePercent=round(len(covered)/len(new)*100,2),illustratedItemIds=covered,missingCards=missing,searchRegister='image-exact-search.json'))
save(R/'research/flavors/images/coverage.json',dict(totalCards=len(cat['items']),illustratedCards=len(media['cards']),pendingCards=[i['id']for i in cat['items']if i['id']not in media['cards']],rule='只配主题匹配且已审阅的真实照片；未配图保留文字展示，不用通用或生成示意图冒充地方成品。'))
print('PUBLISHED',len(adopted),'new real-photo cards;',len(media['cards']),'total;',len(missing),'southwest cards missing;',round(len(covered)/len(new)*100,2),'percent')

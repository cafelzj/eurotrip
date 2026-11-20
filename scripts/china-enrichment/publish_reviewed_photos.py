"""Publish explicit human-reviewed photographs from any new research batch."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil
from PIL import Image, ImageOps

R = Path(__file__).resolve().parents[2]
read = lambda p: json.loads(p.read_text())
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
def registry(path):
    text = path.read_text()
    return json.loads(text[text.index('{'):text.rfind(';')])

def publish(batch, local, prefix, date):
    B, L = Path(batch).resolve(), Path(local).resolve()
    assert B.is_relative_to(R/'research/china/enrichment') and L.is_relative_to(R/'research/.local')
    assert re.fullmatch('[a-z0-9-]+', prefix)
    output = R/'data/china-card-images.js'
    media, baseline = registry(output), registry(L/'baseline-china-card-images.js')
    for name in ['flavors.js', 'china-card-reading.js', 'card-images.js', 'flavor-images.js']:
        assert sha(R/'data'/name) == sha(L/('baseline-'+name)), 'Original input changed: '+name
    for group in ['cards','assets','galleries']:
        for key, value in baseline[group].items():
            assert media[group][key] == value, 'Earlier photo or binding changed: '+key
    scope = {r['itemId'] for r in read(B/'scope.json')['items']}
    candidates = {r['id']:r for r in read(B/'candidates.json')['candidates']}
    approvals = read(B/'visual-decisions.json')['approved']
    assert len({a['itemId'] for a in approvals}) == len(approvals), 'Duplicate approval'
    history = read(B/'photo-adoption.json')['records'] if (B/'photo-adoption.json').exists() else []
    adopted = {a['itemId']:a for a in history}
    for id, key in media['cards'].items():
        if id not in baseline['cards']:
            assert id in adopted and adopted[id]['assetId']==key, 'Unknown later binding; use a new batch'
    for a in approvals:
        id = a['itemId']
        assert id in scope and id not in baseline['cards'] and a['caption'] and a['reason'] and a['viewedOriginal'] is True
        if id in adopted:
            assert media['cards'][id] == adopted[id]['assetId']
            assert sha(R/adopted[id]['src']) == adopted[id]['derivativeSha256']
            continue
        c = candidates[a['candidateId']]
        assert id in c['itemIds'] and re.fullmatch('[a-zA-Z0-9-]+', c['id'])
        for field, digest_field in [('rawFile','rawSha256'), ('metadataFile','metadataSha256')]:
            assert sha(R/c[field]) == c[digest_field], field+' changed'
        assert c['author'] and c['source'] and c['licenseUrl']
        custom = c.get('licenseKind') == 'author-published-permission'
        if custom:
            policy = c['permission']
            assert a['permissionReviewed'] is True and policy['conditions']
            assert sha(R/policy['responseFile']) == policy['sha256']
            assert c['licenseUrl'] == policy['url']
        else:
            assert re.fullmatch(r'(?:CC0|Public domain|CC BY(?:-NC)?(?:-SA|-ND)? [234]\.[05](?: [a-z]{2})?)', c['license']), c['license']
        nd, nc = '-ND' in c['license'], '-NC' in c['license']
        if nc:
            assert a['noncommercialContext'] == 'personal-informational-github-pages-without-advertising'
        original = Image.open(R/c['rawFile'])
        im = ImageOps.exif_transpose(original)
        icc = im.info.get('icc_profile')
        key = prefix+c['id']
        path = R/'assets/photos/china'/(key+('.png' if nd and original.format=='PNG' else '.jpg'))
        assert key not in media['assets'] and not path.exists(), 'Existing asset; do not overwrite'
        if nd:
            assert original.format in ['JPEG','PNG'] and original.getexif().get(274,1)==1
            shutil.copyfile(R/c['rawFile'], path)
        else:
            assert not icc or im.mode in ['RGB','RGBA']
            im.thumbnail((960,1280))
            im.convert('RGB').save(path, quality=90, optimize=True, **({'icc_profile':icc} if icc else {}))
        saved = Image.open(path)
        m = dict(file=c['title'],src=str(path.relative_to(R)),width=saved.width,height=saved.height,kind=a['kind'],alt=a['caption'],caption=a['caption'],author=c['author'],license=c['license'],licenseUrl=c['licenseUrl'],source=c['source'],originalSrc=c['preview'],provider=c['provider'],checked=date,batch=B.name,visualReview=dict(status='approved',date=date,notes=a['reason']),listDisplay=True,encodingVersion='source-bytes-nd-1' if nd else 'jpeg-preserve-icc-1',colorProfile='preserved' if icc else 'source-without-profile',changes='完整保留原字节和画面。' if nd else '仅方向处理、等比限宽、JPEG编码并保留ICC；没有生成、调色或改变主体。')
        if nd or a['kind']=='product':
            m['fit']='contain'
        if nc:
            m.update(commercialUse=False,deploymentContext=a['noncommercialContext'],useConditions='限非商业使用；按原许可署名并保留使用条件。')
        if custom:
            m.update(permission=c['permission'],useConditions=c['permission']['conditions'])
        media['assets'][key]=m
        media['cards'][id]=key
        history.append(dict(itemId=id,itemName=a['itemName'],assetId=key,src=m['src'],derivativeSha256=sha(path),caption=a['caption'],reason=a['reason'],source=c['source'],author=c['author'],license=c['license'],licenseUrl=c['licenseUrl'],originalResponseFile=c['rawFile'],originalSha256=c['rawSha256'],metadataFile=c['metadataFile'],metadataSha256=c['metadataSha256'],action='newly-adopted-real-photo',candidateId=c['id']))
    output.write_text('/* Individually reviewed real photographs for canonical Chinese cards; source evidence is retained in research/china/enrichment. */\nwindow.chinaCardImages = '+json.dumps(media,ensure_ascii=False,indent=2)+';\n')
    (B/'photo-adoption.json').write_text(json.dumps(dict(date=date,records=history),ensure_ascii=False,indent=2)+'\n')
    print('Published',len(history),'reviewed card photographs')

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--batch',required=True);p.add_argument('--local',required=True);p.add_argument('--prefix',required=True);p.add_argument('--date',required=True)
    args=p.parse_args();publish(args.batch,args.local,args.prefix,args.date)

"""Publish only explicitly reviewed food photographs; retain rejected originals."""
import hashlib
import html
import json
from pathlib import Path
import re
from urllib.parse import quote
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / 'research/.local/flavor-images'
PUBLIC = ROOT / 'research/flavors/images'
PUBLIC.mkdir(parents=True, exist_ok=True)
TARGET = ROOT / 'assets/photos/flavors'
TARGET.mkdir(parents=True, exist_ok=True)
records = json.loads((LOCAL / 'download-index.json').read_text())['records']
approved = {
    '7f0d147b729a16': ('program-bbacc44a49d5314e2f', '糖葫芦制作实拍 · 菜品示例，非指定北京店铺', '糖衣山楂串清楚；采用制作场景，手部未遮住主要成品。'),
    '5ab23ebeba3fd2': ('zj-dongpo', '东坡肉实拍 · 菜品示例', '棕红肉块、酱汁与纹理清楚，近景主体明确。'),
    'a1fe8fe47402f1': ('bj-roast-duck', '北京餐厅的烤鸭切片实拍', '切片鸭肉摆盘清楚；来源说明拍摄于北京，背景配菜不遮挡主菜。'),
    '21259c096db609': ('zj-westlake-fish', '杭州山外山餐厅的西湖醋鱼实拍', '整鱼与酱汁完整，摆盘清楚；餐厅关联来自图片说明。'),
    '0049ead6e0a4ce': ('flavor-heilongjiang-cc5d9b1f4e', '锅包肉实拍 · 菜品示例，非指定店铺', '金黄肉片和整盘主体清楚，黑色背景干净；不以照片证明地方配方。'),
}
reasons = {
    'c49987bbff6f9b': '两幅制作过程拼图，没有合适的碗装成品，不当作刀削面成品图。',
    '455fbd28c5db86': '透明包装与背景物件影响成品展示，不采用。',
    '0bb5bcc2c4fcbb': '照片是生面条包装，不对应刀削面熟食卡片。',
    '8a2a0d53d25aa7': '包装纸和背景杂乱，主体呈现不适合卡片。',
    'e9eddf535a4158': '菜品可辨认；本轮已有更完整清晰的锅包肉照片，保留为备选。',
}
# Refuse to discard later explicitly reviewed image batches.
media_path=ROOT/'data/flavor-images.js'
if media_path.exists():
    current=media_path.read_text();current=json.loads(current[current.index('{'):current.rfind(';')])
    original_ids={v[0] for v in approved.values()}|{'program-c8e15ee4f1bf5df8ad','js-squirrel-fish','program-e634bc45a2b277cec0','js-diguo-chicken'}
    if set(current['cards'])-original_ids:raise RuntimeError('Later photo batches exist; refusing to reset the image registry.')
assets, cards, decisions = {}, {}, []
for record in records:
    row = dict(id=record['id'], file=record['file'], downloaded=record['read'],
               metadataFile='research/.local/flavor-images/' + record['metadataFile'],
               metadataSha256=hashlib.sha256((LOCAL/record['metadataFile']).read_bytes()).hexdigest(),
               source='https://commons.wikimedia.org/wiki/File:' + quote(record['file']))
    if not record['read']:
        row.update(status='pending-download', reason=record['error'])
    elif record['id'] not in approved:
        row.update(status='held-or-rejected', reason=reasons[record['id']], originalSha256=record['sha256'])
    else:
        item, caption, notes = approved[record['id']]
        image = ImageOps.exif_transpose(Image.open(ROOT / record['rawFile'])).convert('RGB')
        image.thumbnail((960, 1280))
        path = TARGET / ('flavor-' + record['id'] + '.jpg')
        image.save(path, quality=86, optimize=True)
        meta = record['info']['extmetadata']
        text = lambda name: html.unescape(re.sub('<[^>]+>', '', meta.get(name, {}).get('value', ''))).strip()
        ident = 'flavor-photo-' + record['id']
        assets[ident] = dict(file=record['file'], src=path.relative_to(ROOT).as_posix(), width=image.width, height=image.height,
             kind='food', alt=caption, caption=caption, author=text('Artist'), license=text('LicenseShortName'),
             licenseUrl=text('LicenseUrl'), source=row['source'], checked='2026-11-15',
             visualReview=dict(status='approved', date='2026-11-15', notes=notes),
             changes='原图按EXIF方向校正、等比例缩小并转为JPEG；网页列表按框裁切预览。')
        assert assets[ident]['author'] and assets[ident]['licenseUrl']
        cards[item] = ident
        row.update(status='adopted', itemId=item, assetId=ident, originalSha256=record['sha256'],
                   derivativeSha256=hashlib.sha256(path.read_bytes()).hexdigest(), reason=notes,
                   license=assets[ident]['license'], licenseUrl=assets[ident]['licenseUrl'], author=assets[ident]['author'])
    decisions.append(row)

# Reuse the reviewed asset itself, with its existing caption and attribution.
reused = {'program-c8e15ee4f1bf5df8ad':'img-7715efa061dc', 'js-squirrel-fish':'img-b959e2fa3b10',
          'program-e634bc45a2b277cec0':'img-53485896af6d', 'js-diguo-chicken':'img-8a86bd25d6a1'}
cards.update(reused)
(ROOT / 'data/flavor-images.js').write_text('/* Real, reviewed photographs; absent entries intentionally have no placeholder. */\nwindow.flavorImages=' + json.dumps(dict(assets=assets, cards=cards), ensure_ascii=False, indent=2) + ';\n')
save = lambda path, value: path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')
save(PUBLIC / 'review.json', dict(checked='2026-11-15', method='下载原图后查看缩略审阅图，核对主体与说明；许可、作者及来源来自实际读取的Commons结构化元数据。',
     newPhotographs=len(assets), reusedPhotographs=len(reused), illustratedCards=len(cards),
     reusedAssetEvidence='research/media/food/review.json', searchResponseFiles=['research/.local/flavor-images/photo-search-1.json','research/.local/flavor-images/photo-search-2.json'],
     queries=['site:commons.wikimedia.org/wiki/File: "Peking duck" "Creative Commons"','site:commons.wikimedia.org/wiki/File: "Dongpo" "Creative Commons"',
              'site:commons.wikimedia.org/wiki/File: "Tanghulu" "Creative Commons"','site:commons.wikimedia.org/wiki/File: "West Lake" "fish" "Creative Commons"',
              'site:commons.wikimedia.org/wiki/File: "刀削面" "license"','site:commons.wikimedia.org/wiki/File: "胡辣汤" "license"',
              'site:commons.wikimedia.org/wiki/File: "锅包肉" "license"','site:commons.wikimedia.org/wiki/File: "德州扒鸡" "license"'],
     records=decisions, reusedCards=reused))
raw = (ROOT / 'data/flavors.js').read_text()
catalog = json.loads(raw[raw.index('{'):raw.rfind(';')])
save(PUBLIC / 'coverage.json', dict(totalCards=len(catalog['items']), illustratedCards=len(cards),
     pendingCards=[i['id'] for i in catalog['items'] if i['id'] not in cards],
     rule='只配与主题匹配且已审阅的真实照片；未配图保留文字展示，不用通用或生成图片冒充地方菜。'))
print(len(cards), 'illustrated cards;', len(assets), 'new photographs;', len(reused), 'reused reviewed assets')

"""Review product boundaries before publishing extracted regulatory descriptions.

An attachment label always ends the preceding product, even when the next
product's heading spans lines and was not recognized by the discovery parser.
"""
import collections
import hashlib
import json
from pathlib import Path
import re
from explanations import primary_detail, section

ROOT = Path(__file__).resolve().parents[2]
LOCAL = ROOT / 'research/.local/program-4000'
PUBLIC = ROOT / 'research/flavors/program-4000'


def load(path):
    return json.loads(path.read_text())


def save(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')


def review():
    source_file = LOCAL / 'primary-reading-drafts.json'
    original = LOCAL / 'primary-reading-drafts.before-boundary-review.json'
    if not original.exists():
        original.write_bytes(source_file.read_bytes())
    records = load(original)['items']
    catalog = ROOT / 'data/flavors.js'
    raw = catalog.read_text()
    data = json.loads(raw[raw.index('{'):raw.rfind(';')])
    provinces = {p['id']: p['name'] for p in data['provinces']}
    items = {i['id']: i for i in data['items']}
    batch = load(PUBLIC / 'adoption.json')
    decisions = {x['inputId']: x for x in batch['decisions'] if x['origin'] == 'primary'}
    changes, details = [], {}
    for x in records:
        old = x['sectionText']
        text = re.split(r'附件[0-9一二三四五六七八九十]+', old, maxsplit=1)[0]
        product_starts = list(re.finditer('一、地理标志产品名称', text))
        if len(product_starts) > 1:
            text = text[:product_starts[1].start()]
        if text != old:
            changes.append(dict(recordId=x['id'], name=x['name'],
                                previousSectionSha256=x['sectionSha256'],
                                reason='以后一附件标签截断，防止跨行标题未识别时串入下一产品。'))
        x['sectionText'] = text
        x['sectionSha256'] = hashlib.sha256(text.encode()).hexdigest()
        for field in ['variety', 'sensory', 'harvest', 'process']:
            if x.get(field) and x[field] not in text:
                x[field] = ''
        if not x.get('sensory'):
            x['sensory'] = section(text, r'(?:感官特[色征]|感观特[色征]|感官品质|感官指标|感官要求|外观特征|外观品质特色)[。:：]?',
                                   r'(?:2[.、]|[（(]2[）)])|理化|安全要求', 650)
        if x['reviewStatus'] == 'hold':
            continue
        x['draftDetail'] = primary_detail(x, provinces[x['province']])
        # Regulatory descriptions occasionally include unsupported general health
        # language: retain concrete product traits rather than those assertions.
        x['draftDetail'] = x['draftDetail'].replace('高产保健', '高产').replace('及营养性、适口性、保健性、特味性等特点', '等特点')
        x['detailReview'] = 'expanded-source-facts' if 300 <= len(x['draftDetail']) <= 500 else 'compact-needs-more-context'
        decision = decisions.get(x['id'])
        if decision:
            item = items[decision['itemId']]
            if item.get('researchBatch') == 'program-4000' or 'previousDetail' in item:
                item['detail'] = x['draftDetail']
            details[x['id']] = x

    # The early ceramic notice uses a composition table: write its actual
    # manufacturing facts as prose instead of relying on table flattening.
    ceramic = next(x for x in records if x['name'] == '无棣贝瓷')
    ceramic_text = ('无棣贝瓷是山东滨州无棣县的地方陶瓷工艺产品，归在物品与工艺类别。2008年的保护公告将其产地范围确定为无棣县现辖行政区域。认识这种瓷器，可以从贝壳原料、成型方法和两次烧成工艺入手。\n\n'
                    '原料组成包括贝壳砂、长石、石英和粘土。制作前需要拣选、水洗、破碎、研磨、过筛、除铁与陈腐，分别制成坯泥和釉料。成型方法随器型而变，公告列有机械成型、手工成型、浇注成型和手工技艺成型；其中机械成型主要采用滚压方式。\n\n'
                    '施釉也依器型选择浸釉、喷釉或涂釉。烧制采用高温素烧、低温釉烧的两次烧成工艺：素烧温度为1280至1300℃，釉烧温度为1150至1180℃。外观品质描述强调质地细腻、壁薄轻柔、釉面滋润与玲珑剔透。这里据公告记录原料、工艺及外观特点，具体器物的用途、质量和标志使用情况仍须看相应产品资料。')
    ceramic['draftDetail'] = ceramic_text
    items[decisions[ceramic['id']]['itemId']]['detail'] = ceramic_text
    for item in data['items']:
        if item.get('researchBatch') and item['name'] == '驴肉汤':
            item.update(type='dishes', kind='地方菜肴与小吃')
        item['explanationStatus'] = '300-500-characters' if 300 <= len(item['detail']) <= 500 else 'needs-expansion'
    for d in batch['decisions']:
        item = items[d['itemId']]
        d.update(finalType=item['type'], explanationLength=len(item['detail']))
        if d['origin'] == 'memory-web' and d['name'] in ['肥西老母鸡', '花生汤', '葱油拌面'] and d['action'] == 'merge':
            d['relation'] = 'general-local-food-context-not-proof-of-specific-dish-or-brand'
            item['aliases'] = [n for n in item.get('aliases', []) if n != d['name']]
            addition = '补充来源仅支持当地相关食物的名称与地域，不单独证明本卡片的具体做法或品牌。'
            if addition not in item.get('originNote', ''):
                item['originNote'] = item.get('originNote', '') + addition
    audit = load(ROOT / 'research/flavors/sources.json')
    record_by_key = {(x['name'], x['province'], x['city']): x for x in records}
    for source in audit['sources']:
        if not source['id'].startswith('program-gi-'):
            continue
        path = ROOT / source['evidenceFile']
        note = load(path)
        for fact in note['facts']:
            x = record_by_key[(fact['name'], fact['province'], fact['city'])]
            fact.update(sectionSha256=x['sectionSha256'], variety=x['variety'], sensory=x['sensory'])
            if x['name'] == '无棣贝瓷':
                fact['manufacturingNotes'] = '贝壳砂、长石、石英、粘土；坯泥和釉料分别制备；随器型成型、施釉；高温素烧和低温釉烧两次烧成。'
        save(path, note)
        source['readingNotesSha256'] = hashlib.sha256(path.read_bytes()).hexdigest()
    batch['explanationCounts'] = dict(collections.Counter(x['explanationStatus'] for x in data['items']))
    save(source_file, dict(items=records))
    # Reconciliation must use the corrected section fingerprints as well.
    classified = load(LOCAL / 'classified-primary.json')
    corrected = {x['id']: x for x in records}
    for x in classified['items']:
        y = corrected[x['id']]
        for field in ['sectionText', 'sectionSha256', 'variety', 'sensory', 'harvest', 'process']:
            x[field] = y[field]
    save(LOCAL / 'classified-primary.json', classified)
    save(ROOT / 'research/flavors/sources.json', audit)
    save(PUBLIC / 'adoption.json', batch)
    save(PUBLIC / 'boundary-review.json', dict(changes=changes,
         method='以后一个附件编号作硬边界，重算说明与指纹；陶瓷表格另作实际原文事实整理，排除泛化保健表述。',
         explanationCounts=batch['explanationCounts']))
    catalog.write_text('/* Regional foods, local products and crafts. Editorial text with sources per item. */\nwindow.flavorCatalog=' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    print(len(changes), 'product boundaries trimmed;', batch['explanationCounts'])


if __name__ == '__main__':
    review()

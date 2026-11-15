"""Build independent Chinese taxonomy, administrative destinations and merge ledger.

Uses preserved administrative boundaries, not food claims inferred from geometry.
The source flavor records remain editorial inputs to the single CardStore registry.
"""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / 'research/.local/china-integration'
PUBLIC = ROOT / 'research/flavors/integration'
PUBLIC.mkdir(exist_ok=True)
baseline = json.loads((LOCAL / 'baseline.json').read_text())
raw = (ROOT / 'data/flavors.js').read_text()
flavors = json.loads(raw[raw.index('{'):raw.rfind(';')])
regions_raw = (ROOT / 'data/flavor-counties.js').read_text()
regions = json.loads(regions_raw[regions_raw.index('{'):regions_raw.rfind(';')])
existing = {d['adcode']: d for d in baseline['destinations']}
ident = lambda code: existing.get(str(code), {}).get('id', 'cn-' + str(code))
province_sources = {}
for province in flavors['provinces']:
    body = json.loads((LOCAL / (str(province['adcode']) + '.json')).read_text())
    province_sources[province['id']] = {f['properties']['adcode']: f['properties'] for f in body['features']}
destinations = []
for city in regions['cities'].values():
    code = city['adcode']
    properties = province_sources[city['province']]
    if code in properties:
        prop = properties[code]
        center = prop.get('centroid') or prop['center']
    else:
        centers = [p.get('centroid') or p['center'] for p in properties.values()]
        center = [sum(p[i] for p in centers) / len(centers) for i in (0, 1)]
    destinations.append(dict(id=ident(code), country='cn', provinceId=city['province'], adcode=str(code),
        name=city['city'], adminName=city['city']+'市' if code in (110000,310000) else properties.get(code, {}).get('name', city['city']),
        local=city['city'], level='municipality' if code in (110000,310000) else 'prefecture' if city['regions'] else 'county-city',
        lon=center[0], lat=center[1], intro='查看本地区已收录的城市卡片、地方食品与特产。'))
    if city['regions']:
        if str(code) in ('110000', '310000'):
            county_properties = properties
        else:
            body = json.loads((ROOT / 'research/.local/flavor-county-boundaries' / f'{code}.json').read_text())
            county_properties = {f['properties']['adcode']: f['properties'] for f in body['features']}
        for county in city['regions']:
            p = county_properties[county['adcode']]
            center = p.get('centroid') or p['center']
            destinations.append(dict(id=ident(county['adcode']), country='cn', provinceId=city['province'],
                parentCity=ident(code), adcode=str(county['adcode']), name=county['name'], adminName=county['name'],
                local=county['name'], level='county-city' if county['name'].endswith('市') else 'county',
                lon=center[0], lat=center[1], intro='查看本县区已有明确地域关联的卡片；未定位条目保留在全市范围。'))
aliases = {
 'food-suzhou-noodles':'program-c8e15ee4f1bf5df8ad',
 'food-suzhou-mandarin-fish':'js-squirrel-fish',
 'food-suzhou-eel':'program-e634bc45a2b277cec0',
 'specialty-suzhou-tea':'js-biluochun',
 'food-xuzhou-diguoji':'js-diguo-chicken',
 'food-xuzhou-mijian':'flavor-jiangsu-6f05e5bdfc',
 'food-wuxi-xiaolong':'flavor-jiangsu-e9fc4e4cb6',
 'food-wuxi-ribs':'js-wuxi-ribs',
 'local-kunshan-culture':'program-9719a554b1ba99a3b4',
 'local-changshu-culture':'program-781bce8ec1eb5f1436',
 'local-taicang-culture':'flavor-jiangsu-e59d104932',
 'local-jiangyin-culture':'flavor-jiangsu-b987dd1904',
}
by_id = {i['id']: i for i in flavors['items']}
old_by_id = {i['id']: i for i in baseline['nodes']}
assert all(old in old_by_id and new in by_id for old, new in aliases.items())
legacy_kinds = {n['id']: ('staples' if n['subcategory'] in ('desserts', 'bread') else 'ingredients' if n['subcategory']=='gifts' else 'dishes' if n['subcategory']=='meat' else n['subcategory']) for n in baseline['nodes'] if n['category']=='food' and n['id'] not in aliases}
legacy_kinds['food-xuzhou-lomo'] = 'staples'
primary = [dict(p) for p in baseline['cat']['primary']]
primary.sort(key=lambda p: p['id'] != 'food')
next(p for p in primary if p['id']=='food')['description'] = '地方乳品、饮品、酒茶、菜肴、面食、食材、调味品及地方物品与工艺'
icons = dict(dairy='🥛', drinks='🥤', alcohol='🍶', tea='🍵', dishes='🍽️', staples='🍜', ingredients='🌾', seasoning='🧂', crafts='🎁')
secondary = [dict(id=c['id'], category='food', name=c['name'], icon=icons[c['id']], description='查看已收录的地方'+c['name']+'，保留来源、地域与待核说明。') for c in flavors['categories']]
secondary += [dict(c) for c in baseline['cat']['secondary'] if c['category']!='food' or c['id'] in ('restaurants','chain-dining','dining-tips')]
taxonomy = dict(primary=primary, secondary=secondary, subcategoryAliases={'wine':'alcohol'},
                typeDefaults={**baseline['cat']['typeDefaults'], 'food':'dishes','specialty':'crafts'},
                pointKinds=baseline['cat']['pointKinds'], pointGroups=baseline['cat']['pointGroups'])
def js(name, variable, value):
    (ROOT / 'data' / name).write_text('/* Independent Chinese collection configuration. */\nwindow.'+variable+'='+json.dumps(value,ensure_ascii=False,indent=2)+';\n')
js('china-categories.js','chinaCardCategories',taxonomy)
js('china-region-catalog.js','chinaRegionCatalog',dict(provinces=[dict(id=p['id'],name=p['name'],adcode=str(p['adcode']),local=p['name']) for p in flavors['provinces']],destinations=destinations))
js('china-card-merges.js','chinaCardMerges',dict(aliases=aliases,legacyKinds=legacy_kinds))
ledger = dict(date='2026-11-15', flavorRecords=len(flavors['items']), legacyChinaRecords=len(baseline['nodes']),
    mergedAliases=[dict(oldId=old,canonicalId=new,oldName=old_by_id[old]['name'],name=by_id[new]['name'],
                        reason='同一地方食物的旧卡片与风物条目，保留旧ID别名、正文、来源、关系和图片引用。') for old,new in aliases.items()],
    expectedChinaRecords=len(flavors['items'])+len(baseline['nodes'])-len(aliases),
    provinces=len(flavors['provinces']),cityScopes=len(regions['cities']),countyScopes=sum(len(c['regions']) for c in regions['cities'].values()),
    administrativeSources=json.loads((LOCAL/'sources.json').read_text()),
    sourceRules='行政中心仅用于地区地图视角，不给地方食品虚构店铺或POI；县域只沿用已有明确归属。',
    authoringInputs=['data/flavors.js','data/china-cards.js','data/card-reading.js'], canonicalRegistry='CardStore.nodes',
    retainedDistinctGuides=legacy_kinds)
(PUBLIC/'china-collection.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
print(len(destinations),'destinations;',ledger['expectedChinaRecords'],'unified Chinese cards;',len(aliases),'merged legacy aliases')

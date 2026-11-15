"""Verify the new province batch against saved originals and the retained baseline."""
from pathlib import Path
import collections
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
BATCH = ROOT / 'research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong'
def read(path): return json.loads(path.read_text())
def digest(value): return hashlib.sha256(json.dumps(value, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
def file_sha(path): return hashlib.sha256(path.read_bytes()).hexdigest()
def js(path):
    raw = (ROOT/path).read_text()
    return json.loads(raw[raw.index('{'):raw.rfind(';')])

catalog = js('data/flavors.js')
items = {i['id']: i for i in catalog['items']}
adoption = read(BATCH/'adoption.json')
preservation = read(BATCH/'preservation-audit.json')
assert adoption['baselineItems'] == len(preservation['originalIds']) == 4255
assert digest([items[i] for i in preservation['originalIds']]) == preservation['baselineEditorialSha256']
assert file_sha(ROOT/'research/china/integration/standalone-retirement.json') == preservation['historicalRetirementReceiptSha256']
seal = read(BATCH/'knowledge-seal.json')
assert file_sha(BATCH/'initial-knowledge.json') == seal['sha256'] == adoption['knowledgeDraftSha256']
knowledge = read(BATCH/'initial-knowledge.json')
assert len(knowledge['candidates']) == 394 and knowledge['externalSearchPerformed'] is False
cohort_ids = set(adoption['retainedBaselineIds']) | {d['itemId'] for d in adoption['decisions']}
cohort = [items[i] for i in cohort_ids]
assert len(cohort) == adoption['totalFlavorItems'] == 5051
assert len(catalog['items']) == len(items) >= len(cohort)
assert sum(i.get('verificationStatus') != 'pending' for i in cohort) == 5004 > 5000
assert sum(i.get('verificationStatus') == 'pending' for i in cohort) == 47
new = [i for i in items.values() if i.get('researchBatch') == BATCH.name]
assert len(new) == adoption['newItems'] == 796
assert dict(collections.Counter(i['province'] for i in new)) == {'jiangxi':222,'guangxi':302,'guangdong':272}
assert all(i.get('verificationStatus') != 'pending' and i['sources'] and not i.get('point') for i in new)
assert not any('\ufffd' in i['detail'] for i in new)
assert not any(i['name'] in {'恭城竹鼠','德保矮马','凭祥石龟','钦州石金钱龟','十万山牛大力'} for i in new)
for name in ['上栗花炮','铅山连四纸','湛江剑麻纤维','怀集茶秆竹','莞香','都安书画纸','南丹瑶蚕平板丝']:
    assert next(i for i in new if i['name']==name)['type'] == 'crafts'
for i in new:
    assert (i['explanationStatus']=='300-500-characters') == (300 <= len(i['detail']) <= 500)
assert sum(i['explanationStatus']=='300-500-characters' for i in new)==366
assert len(read(BATCH/'place-register.json')['places'])==382
queries=read(BATCH/'unit-search-log.json')['queries']
assert len(queries)==764
for q in queries:
    assert file_sha(ROOT/q['responseFile'])==q['responseSha256']
for p in read(BATCH/'place-register.json')['places']:
    assert len(p['searchEvidence'])==2 and p['remainingScope']
assert len(read(BATCH/'cross-review.json')['knowledge'])==394
assert len(read(BATCH/'reviewed-memory.json')['items'])==195
assert len(read(BATCH/'external-only-editorial.json')['items'])==135
assert {d['itemId'] for d in adoption['decisions'] if d['action']=='new'}=={i['id'] for i in new}
notes=list((BATCH/'reading-notes').glob('*.json'))
assert len(notes)==adoption['sourceNotes']==258
for path in notes:
    note=read(path)
    if 'provenance' in note:
        origin=note['provenance']
        assert file_sha(ROOT/origin['pdfFile'])==origin['pdfSha256']
        assert file_sha(ROOT/origin['textFile'])==origin['textSha256']
    else:
        assert file_sha(ROOT/note['originalResponseFile'])==note['originalResponseSha256']
        assert file_sha(ROOT/note['readableFile'])==note['readableSha256']
    assert all(e['itemId'] in items for e in note['items'])
geo=js('data/flavor-counties.js')
historical_provinces={i['province'] for i in cohort}
old_cities=[c for c in geo['cities'].values() if c['province'] in historical_provinces]
assert len(old_cities)==220
assert sum(len(c['regions']) for c in old_cities)==1817
regions=js('data/china-region-catalog.js')
assert len([d for d in regions['destinations'] if d['provinceId'] in historical_provinces])==2037
assert len([p for p in regions['provinces'] if p['id'] in historical_provinces])==18
for code in [441900,442000]:
    city=geo['cities'][str(code)]
    assert city['hasCountyDivisions'] is False and city['regions']==[] and not city.get('map')
    assert next(d for d in regions['destinations'] if d['adcode']==str(code))['level']=='prefecture'
assert all(len(str(c['adcode']))==6 for city in geo['cities'].values() for c in city['regions'])
assert read(ROOT/'research/china/integration/china-collection.json')['expectedChinaRecords']==len(items)+130
print('PASS 796 adopted / 5051 flavors / 5004 source-backed; 4255 unchanged originals; sealed knowledge, searches, source bytes, classifications, county boundaries and honest gaps')

"""Audit the research-to-catalog correspondence and preserved local evidence."""
import collections
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'research/flavors/program-4000'
LOCAL = ROOT / 'research/.local/program-4000'


def read(path):
    return json.loads(path.read_text())


raw = (ROOT / 'data/flavors.js').read_text()
catalog = json.loads(raw[raw.index('{'):raw.rfind(';')])
items = {x['id']: x for x in catalog['items']}
batch = read(PUBLIC / 'adoption.json')
progress = read(PUBLIC / 'progress.json')
review = read(PUBLIC / 'cross-review.json')
assert len(items) == len(catalog['items']) == batch['totalItems'] >= 4001
assert set(batch['baselineItemIds']).issubset(items)
assert batch['newItems'] == len(items) - batch['baselineItems']
assert len({x['itemId'] for x in batch['decisions'] if x['action'] == 'new'}) == batch['newItems']
assert all(x['itemId'] in items and x['sourceIds'] for x in batch['decisions'])
assert hashlib.sha256((PUBLIC / 'knowledge-candidates.json').read_bytes()).hexdigest() == review['knowledgeDraftSha256']
knowledge = read(PUBLIC / 'knowledge-candidates.json')
assert hashlib.sha256((PUBLIC / 'knowledge-draft.txt').read_bytes()).hexdigest() == knowledge['rawDraftSha256']
assert len(review['knowledge']) == len(knowledge['candidates']) == 2046
assert sum(review['knowledgeCounts'].values()) == 2046
assert len(progress['units']) == len({x['placeId'] for x in progress['units']}) == 1673
assert sum(len(x['externalStage']['queries']) for x in progress['units']) == 3346
assert all(x['externalStage']['status'] == 'combined-queries-searched' for x in progress['units'])
assert all(x['crossReviewStage']['status'] != 'complete' for x in progress['units'])
assert progress['explanation']['display'] == 'inline-details'
assert progress['explanation']['noSeparatePage']
explanations = collections.Counter(x['explanationStatus'] for x in items.values())
assert dict(explanations) == batch['explanationCounts']
assert explanations['300-500-characters'] == progress['explanation']['expandedCount']
for item in items.values():
    assert (item['explanationStatus'] == '300-500-characters') == (300 <= len(item['detail']) <= 500)
assert next(i for i in items.values() if '牛奶葡萄' in i['name'])['type'] == 'ingredients'
vinegar = next(i for i in items.values() if i['name'] == '丹东塔醋')
assert '醋酸' in vinegar['detail'] and not re.search('单果重|绿果肩|采摘初期', vinegar['detail'])
assert all(i['name'] != '安达奶牛' for i in items.values())
assert next(i for i in items.values() if i['name'] == '无棣贝瓷')['type'] == 'crafts'
assert all('通用保健' not in i['detail'] for i in items.values())

# Evidence audit reads originals, not the publication's own editorial summaries.
pdfs = {x['id'][:16]: x for x in read(LOCAL / 'github-gi/pdf-index.json')['results']}
pages = {x['id']: x for x in read(LOCAL / 'memory-web-page-index.json')['records']}
source_audit = read(ROOT / 'research/flavors/sources.json')['sources']
new_sources = [x for x in source_audit if x['id'].startswith(('program-gi-', 'program-web-'))]
for source in new_sources:
    assert source['read'] and source['readMethod'].startswith('programmatic-')
    note = ROOT / source['evidenceFile']
    assert hashlib.sha256(note.read_bytes()).hexdigest() == source['readingNotesSha256']
    if source['id'].startswith('program-web-'):
        original = pages[source['id'].removeprefix('program-web-')]
        assert original['read']
        raw_path, sha = ROOT / original['rawFile'], original['responseSha256']
    else:
        original = pdfs[source['id'].removeprefix('program-gi-')]
        raw_path, sha = ROOT / original['pdfFile'], original['pdfSha256']
        assert read(note)['provenance']['mirrorPdfSha256'] == sha
    assert hashlib.sha256(raw_path.read_bytes()).hexdigest() == sha
primary = read(LOCAL / 'primary-reading-drafts.json')['items']
for record in primary:
    assert '附件' not in record['sectionText'] or not re.search(r'附件[0-9一二三四五六七八九十]+', record['sectionText'])
    assert record['sectionText'].count('一、地理标志产品名称') <= 1
    assert hashlib.sha256(record['sectionText'].encode()).hexdigest() == record['sectionSha256']
assert not any(p.name.endswith('.html') for p in PUBLIC.rglob('*'))
# All historical drafts and current evidence have a single indexed home.
index = read(ROOT / 'research/flavors/index.json')
assert len(index['records']) == len({r['path'] for r in index['records']})
expected = {p.relative_to(ROOT).as_posix() for p in (ROOT/'research/flavors').rglob('*') if p.is_file() and p.suffix in ('.json','.md','.txt') and p.name != 'index.json'}
assert expected == {r['path'] for r in index['records']}
for record in index['records']:
    assert hashlib.sha256((ROOT/record['path']).read_bytes()).hexdigest() == record['sha256'], record['path']
assert not set(index['runtimeFiles']) & expected
assert all((ROOT/p).is_file() for p in index['runtimeFiles'])
assert all(x['path'] in expected for x in index['history'])
print(f"PASS {len(items)} items, all initial IDs retained, 2046 immutable knowledge candidates, 1673 units / 3346 queries, {len(new_sources)} source originals and inline explanation counts")

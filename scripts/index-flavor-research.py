"""Maintain one inventory for flavor drafts, decisions, media and historical batches."""
import collections
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / 'research/flavors'
raw = (ROOT / 'data/flavors.js').read_text()
catalog = json.loads(raw[raw.index('{'):raw.rfind(';')])
records = []
for path in sorted(BASE.rglob('*')):
    if not path.is_file() or path.name == 'index.json' or path.suffix not in ('.json', '.md', '.txt'):
        continue
    relative = path.relative_to(BASE).as_posix()
    if '/readings/' in relative or relative.startswith('reading-notes/'):
        role = 'source-reading-notes'
    elif 'working-notes/' in relative:
        role = 'historical-working-draft'
    elif relative.startswith('batches/'):
        role = 'historical-batch'
    elif relative.startswith('images/'):
        role = 'image-review-or-backlog'
    elif relative.endswith(('knowledge-candidates.json', 'knowledge-draft.txt')):
        role = 'initial-knowledge-draft'
    elif relative.endswith(('external-searches.json', 'search-log.json')):
        role = 'external-search-index'
    elif relative.endswith('cross-review.json'):
        role = 'cross-review'
    elif relative.endswith('adoption.json'):
        role = 'adoption-to-card-ledger'
    else:
        role = 'current-index-or-audit'
    body = path.read_bytes()
    records.append(dict(path=path.relative_to(ROOT).as_posix(), role=role, bytes=len(body), sha256=hashlib.sha256(body).hexdigest()))
runtime = ['data/flavors.js','data/flavor-map-regions.js','data/flavor-counties.js','data/flavor-images.js','data/china-categories.js','data/china-region-catalog.js','data/china-card-merges.js','data/china-cards.js']
index = dict(updated='2026-11-15', description='研究底稿统一索引；正式网页展示读取runtimeFiles，不直接读取候选和历史稿。',
             runtimeFiles=runtime, currentItems=len(catalog['items']),canonicalRegistry='CardStore.nodes',unifiedChinaCards=json.loads((BASE/'integration/china-collection.json').read_text())['expectedChinaRecords'],integrationFile='research/flavors/integration/china-collection.json',
             currentSources='research/flavors/sources.json',
             workflow=['initial-knowledge-draft','external-search-index','cross-review','adoption-to-card-ledger'],
             history=[dict(stage='1394→1733', path='research/flavors/batches/2026-11-14/expansion-1733.json'),
                      dict(stage='1733→2112', path='research/flavors/batches/2026-11-14/expansion-2112.json'),
                      dict(stage='2112→4255', path='research/flavors/program-4000/adoption.json')],
             countyAudit='research/flavors/county-maps.json', imageAudit='research/flavors/images/review.json',
             imageBacklog='research/flavors/images/coverage.json',
             archiveIndexes=[p.relative_to(ROOT).as_posix() for p in sorted((ROOT/'research/archives').glob('*.json'))],
             roles=dict(collections.Counter(r['role'] for r in records)), records=records)
(BASE/'index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
print(len(records),'research files indexed; initial drafts and historical bytes retained')

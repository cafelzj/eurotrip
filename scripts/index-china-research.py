"""One inventory for Chinese cards, including retained flavor-topic history."""
from pathlib import Path
import hashlib,json,subprocess,collections
from datetime import datetime
from zoneinfo import ZoneInfo
ROOT=Path(__file__).resolve().parents[1]
subprocess.run(['python',str(ROOT/'scripts/index-flavor-research.py')],check=True)
records=[]
for folder in ['research/china','research/flavors']:
 for p in sorted((ROOT/folder).rglob('*')):
  if not p.is_file() or p.name=='index.json' or p.suffix not in ['.json','.jsonl','.csv','.md','.txt']:continue
  name=p.relative_to(ROOT).as_posix();raw=p.read_bytes()
  role='current-integration' if name.startswith('research/china/integration/') else 'future-source-candidate' if name.startswith('research/china/sources/') else 'preserved-source-reading' if '/reading-notes/' in name or '/readings/' in name else 'historical-batch' if '/batches/' in name else 'initial-knowledge' if name.endswith(('knowledge-candidates.json','knowledge-draft.txt')) else 'cross-review' if name.endswith('cross-review.json') else 'adoption' if name.endswith('adoption.json') else 'research-support'
  if p.suffix=='.json':
   doc=json.loads(raw)
   if isinstance(doc,dict) and doc.get('status')=='moved':role='legacy-path-pointer'
  records.append(dict(path=name,role=role,bytes=len(raw),sha256=hashlib.sha256(raw).hexdigest()))
adoption=json.loads((ROOT/'research/china/integration/china-collection.json').read_text())
index=dict(updated=datetime.now(ZoneInfo('Asia/Shanghai')).date().isoformat(),scope='中国卡片当前研究与保留的风物专题历史',canonicalRegistry='CardStore.nodes',chinaCards=adoption['expectedChinaRecords'],flavorCards=adoption['flavorRecords'],canonicalEntry='research/china/README.md',topicEntry='research/flavors/README.md',runtimeInputs=['data/flavors.js','data/china-cards.js','data/card-reading.js','data/china-card-reading.js','data/china-categories.js','data/china-region-catalog.js','data/china-card-merges.js','data/flavor-counties.js','data/flavor-images.js','data/card-images.js','data/china-card-images.js'],sharedMediaAudits=['research/media/food/review.json','research/media/transport/review.json','research/media/local-copies.json'],migrationFile='research/china/path-migrations.json',roles=dict(collections.Counter(r['role'] for r in records)),records=records)
(ROOT/'research/china/index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
print(len(records),'Chinese research records indexed; original evidence remains at its preserved paths')

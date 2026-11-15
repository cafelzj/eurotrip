"""Verify this provincial batch without relabeling old evidence or inventing counties."""
from pathlib import Path
import json,hashlib,collections
R=Path(__file__).resolve().parents[1];B=R/'research/china/expansions/2026-11-15-shaanxi-gansu'
read=lambda p:json.loads(p.read_text())
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(name):
 s=(R/name).read_text();return json.loads(s[s.index('{'):s.rfind(';')])
def digest(x,**kw):return hashlib.sha256(json.dumps(x,ensure_ascii=False,separators=(',',':'),**kw).encode()).hexdigest()
cat=js('data/flavors.js');items={i['id']:i for i in cat['items']};ad=read(B/'adoption.json');proof=read(B/'preservation-audit.json')
assert len(items)==len(cat['items'])==ad['totalFlavorItems']==5362
assert len(proof['originalIds'])==ad['baselineItems']==5051
assert digest([items[i]for i in proof['originalIds']])==proof['baselineEditorialSha256']
original_source_ids={s for i in proof['originalIds']for s in items[i]['sources']}
# Baseline may include sources with no adopted items; its whole registry is preserved.
base=(R/'research/.local/shaanxi-gansu-20261115/baseline-flavors.js').read_text();base=json.loads(base[base.index('{'):base.rfind(';')])
assert digest({k:cat['sources'][k]for k in base['sources']},sort_keys=True)==proof['originalSourceRegistrySha256']
assert sha(R/'research/china/integration/standalone-retirement.json')==proof['historicalRetirementReceiptSha256']
for n in proof['historicalReadingNotes']:assert sha(R/n['path'])==n['sha256']
seal=read(B/'knowledge-seal.json');assert sha(B/'initial-knowledge.json')==seal['sha256']==ad['knowledgeDraftSha256']
initial=read(B/'initial-knowledge.json');assert len(initial['candidates'])==153 and initial['externalSearchPerformed']is False
new=[x for x in cat['items']if x.get('researchBatch')==B.name]
assert len(new)==ad['newItems']==311 and ad['totalChinaCards']==5492
assert dict(collections.Counter(i['province']for i in new))=={'gansu':164,'shaanxi':147}
assert len({(i['province'],i['city'])for i in new})==24
assert sum(i.get('verificationStatus')=='pending'for i in cat['items'])==47
for i in new:
 assert i['sources'] and i.get('verificationStatus')!='pending' and not i.get('point')
 assert (i['explanationStatus']=='300-500-characters')==(300<=len(i['detail'])<=500)
 assert '\ufffd'not in i['detail']
for name in ['耀州瓷','尧头黑瓷','蒲城花炮','环县皮影','庆阳香包','酒泉夜光杯']:
 assert next(i for i in new if i['name']==name)['type']=='crafts'
x=next(i for i in new if i['name']=='张家川红花牛');assert (x['province'],x['city'],x['locality'])==('gansu','天水','张家川回族自治县')
x=next(i for i in new if i['name']=='百跃羊乳');assert (x['city'],x['locality'])==('西安','阎良区')
x=next(i for i in new if i['name']=='华胥大银杏(华胥大杏)');assert x['kind']=='地方杏果'
assert not any(x['name']in {'略阳猪苓','略阳黄精','白河木瓜'}for x in new)
places=read(B/'place-register.json')['places'];assert len(places)==219
assert collections.Counter(p['level']for p in places)=={'province':2,'city':24,'county':193}
queries=read(B/'unit-search-log.json')['queries'];assert len(queries)==438
for q in queries:assert sha(R/q['responseFile'])==q['responseSha256']
for p in places:assert len(p['searchEvidence'])==2 and p['remainingScope']
web=read(B/'web-search-log.json')['batches'];assert len(web)==12 and sum(len(b['queries'])for b in web)==46
for q in web:assert (R/q['responseFile']).is_file()
notes=list((B/'reading-notes').glob('*.json'));assert len(notes)==ad['sourceNotes']==101
for p in notes:
 n=read(p)
 if 'provenance'in n:
  m=n['provenance'];assert sha(R/m['pdfFile'])==m['pdfSha256'];assert sha(R/m['textFile'])==m['textSha256']
 else:
  assert sha(R/n['originalResponseFile'])==n['originalResponseSha256'];assert sha(R/n['readableFile'])==n['readableSha256']
 assert all(e['itemId']in items for e in n['items'])
assert len(read(B/'cross-review.json')['knowledge'])==153
assert len(read(B/'cross-review.json')['primaryHeld'])==46
geo=js('data/flavor-counties.js');city=geo['cities']['620200'];assert city['hasCountyDivisions']is False and city['regions']==[] and not city.get('map')
assert len(geo['cities'])==244 and sum(len(c['regions'])for c in geo['cities'].values())==2010
reg=js('data/china-region-catalog.js');assert len(reg['provinces'])==20 and len(reg['destinations'])==2254
assert read(R/'research/china/integration/china-collection.json')['expectedChinaRecords']==5492
print('PASS Shaanxi 147 / Gansu 164; 5051 unchanged baseline, 153 sealed memory candidates, 438 unit searches, 101 original-source notes, county and category corrections')

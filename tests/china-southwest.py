"""Audit the southwest cohort, original evidence and real-photo gaps without changing old batches."""
from pathlib import Path
import json,hashlib,collections
R=Path(__file__).resolve().parents[1];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115'
read=lambda p:json.loads(p.read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(p):
 s=(R/p).read_text();return json.loads(s[s.index('{'):s.rfind(';')])
def digest(x,**kw):return hashlib.sha256(json.dumps(x,ensure_ascii=False,separators=(',',':'),**kw).encode()).hexdigest()
cat=js('data/flavors.js');items={i['id']:i for i in cat['items']};ad=read(B/'adoption.json');proof=read(B/'preservation-audit.json');base=js('research/.local/southwest-20261115/baseline-flavors.js')
assert len(proof['originalIds'])==ad['baselineItems']==5362
assert digest([items[i]for i in proof['originalIds']])==proof['baselineEditorialSha256']
assert digest({k:cat['sources'][k]for k in base['sources']},sort_keys=True)==proof['originalSourceRegistrySha256']
assert sha(R/'research/china/integration/standalone-retirement.json')==proof['historicalRetirementReceiptSha256']
assert len(proof['historicalReadingNotes'])==1209
for n in proof['historicalReadingNotes']:assert sha(R/n['path'])==n['sha256']
assert sha(B/'initial-knowledge.json')==read(B/'knowledge-seal.json')['sha256']==ad['knowledgeDraftSha256']
initial=read(B/'initial-knowledge.json');assert len(initial['candidates'])==265 and initial['externalSearchPerformed']is False
new=[i for i in items.values()if i.get('researchBatch')==B.name];assert len(new)==ad['newItems']==1135>1000
assert dict(collections.Counter(i['province']for i in new))=={'sichuan':573,'chongqing':94,'yunnan':265,'guizhou':203}
assert len({(i['province'],i['city'])for i in new if i['city']!='全省'})==47
assert len(items)==ad['totalFlavorItems']==6497 and ad['totalChinaCards']==6627
assert sum(i.get('verificationStatus')=='pending'for i in cat['items'])==47
assert len({(i['province'],i['city'],i['name'])for i in cat['items']})==len(items)
for i in new:
 assert i['sources']and not i.get('point')and '\ufffd'not in i['detail']
 assert (i['explanationStatus']=='300-500-characters')==(300<=len(i['detail'])<=500)
assert sum(i['explanationStatus']=='300-500-characters'for i in new)==419
assert next(i for i in new if i['name']=='合川桃片')['type']=='staples'
assert next(i for i in new if i['name']=='石林乳饼')['type']=='dairy'
assert next(i for i in new if i['name']=='煎茶竹丝茄')['type']=='ingredients'
assert next(i for i in new if i['name']=='䢺江青梅酒')['type']=='alcohol'
for name in ['蜀锦','安顺蜡染','建水紫陶','三都水族马尾绣','梁河葫芦丝']:assert next(i for i in new if i['name']==name)['type']=='crafts'
for name in ['川芎','松贝(松潘产区)','红河灯盏花','云阳乌天麻','巫山淫羊藿']:assert not any(i['name']==name for i in new)
assert next(i for i in new if i['name']=='鹤庆乾酒')['city']=='大理州'
assert next(i for i in new if i['name']=='酥油茶')['city']=='阿坝州'
places=read(B/'place-register.json')['places'];assert len(places)==489
assert collections.Counter(p['level']for p in places)=={'province':4,'city':47,'county':438}
queries=read(B/'unit-search-log.json')['queries'];assert len(queries)==978
for q in queries:
 assert q['status']=='search-only-not-article-review';assert sha(R/q['responseFile'])==q['responseSha256']
for p in places:assert len(p['searchEvidence'])==2 and p['remainingScope']
assert len(read(B/'cross-review.json')['knowledge'])==265
assert len(read(B/'reviewed-memory.json')['items'])==115
assert len(read(B/'cross-review.json')['primaryHeld'])==80
ar=read(B/'agricultural-review.json');assert ar['approved']==463 and ar['held']==174
candidates=read(B/'agricultural-candidates.json');assert len(candidates['items'])==637 and len(candidates['withdrawn'])==12
assert any(r['reviewStatus']=='hold-withdrawn-registration'for r in candidates['items'])
notes=list((B/'reading-notes').glob('*.json'));assert len(notes)==ad['sourceNotes']==210
for p in notes:
 n=read(p)
 if 'provenance'in n:
  m=n['provenance'];assert sha(R/m['pdfFile'])==m['pdfSha256'];assert sha(R/m['textFile'])==m['textSha256']
 else:
  assert sha(R/n['originalResponseFile'])==n['originalResponseSha256'];assert sha(R/n['readableFile'])==n['readableSha256']
 assert all(e['itemId']in items for e in n['items'])
geo=js('data/flavor-counties.js');reg=js('data/china-region-catalog.js')
assert len(geo['cities'])==291 and sum(len(c['regions'])for c in geo['cities'].values())==2448
assert len(geo['cities']['500000']['regions'])==38
assert next(d for d in reg['destinations']if d['adcode']=='500000')['level']=='municipality'
assert len(reg['provinces'])==24 and len(reg['destinations'])==2739
photos=js('data/flavor-images.js');old=js('research/.local/southwest-20261115/baseline-flavor-images.js')
replacements=[r for p in (R/'research/china/enrichment').glob('*/photo-adoption.json')for r in read(p)['records']if r.get('status')=='adopted'and r.get('action')=='replace-list-photo']
for k,v in old['cards'].items():
 assert photos['cards'][k]==v or any(r['itemId']==k and r['previousAssetId']==v and r['assetId']==photos['cards'][k]for r in replacements)
assert all(photos['assets'][k]==v for k,v in old['assets'].items())
coverage=read(B/'image-coverage.json');assert coverage['totalCards']==1135 and coverage['illustratedCards']==35 and len(coverage['missingCards'])==1100
assert coverage['goalReached']is False and coverage['coveragePercent']==3.08
assert len(photos['cards'])>=44  # Later reviewed enrichment batches may add images.
for n in read(B/'image-review.json')['records']:
 if n['status']!='adopted':continue
  # Only manually approved subjects have an image binding.
 assert n['itemId']in coverage['illustratedItemIds'];asset=photos['assets'][n['assetId']]
 assert asset['source']and asset['license']and asset['author']and asset['visualReview']['status']=='approved'
 assert sha(R/n['originalResponseFile'])==n['originalSha256'];assert sha(R/n['metadataFile'])==n['metadataSha256'];assert sha(R/asset['src'])==n['derivativeSha256']
# Historical gaps may only be filled by an explicit later photo-adoption receipt.
later={r['itemId']for p in (R/'research/china/enrichment').glob('*/photo-adoption.json')for r in read(p)['records']if r['status']=='adopted'}
assert ({p['itemId']for p in coverage['missingCards']} & set(photos['cards']))<=later
exact=read(B/'image-exact-search.json');assert set(exact['coverage'])=={i['id']for i in new}
assert len(exact['queries'])==71 and all(q['status']=='search-only-awaiting-visual-review'for q in exact['queries'])
for q in exact['queries']:assert sha(R/q['responseFile'])==q['responseSha256']
assert read(R/'research/china/integration/china-collection.json')['expectedChinaRecords']==6627
print('PASS 1135 southwest cards / 6497 flavors / 6627 China cards; 5362 unchanged originals, sealed knowledge, official tables, source bytes, 24 provinces and 35 real photos with 1100 explicit gaps')

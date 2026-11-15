from pathlib import Path
import json,hashlib,collections
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115'
def load(p):return json.loads(p.read_text())
def save(p,d):p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
s=(R/'data/flavors.js').read_text();cat=json.loads(s[s.index('{'):s.rfind(';')]);ad=load(B/'adoption.json');places=load(B/'place-register.json');queries=load(B/'unit-search-log.json')['queries'];new=[i for i in cat['items'] if i.get('researchBatch')=='2026-11-15-southwest']
for p in places['places']:
 qs=[q for q in queries if q['adcode']==p['adcode'] and q['level']==p['level']];p['searchEvidence']=[dict(query=q['query'],topic=q['topic'],responseFile=q['responseFile'],responseSha256=q['responseSha256'],status=q['status']) for q in qs]
 local=[x for x in new if x['province']==p['province'] and (p['level']=='province' or x['city']==p['city'] and (p['level']=='city' or p['name'] in x.get('locality','')))]
 p['adoptedItemIds']=[x['id'] for x in local];p['reviewedTopics']=list(dict.fromkeys(x['type']for x in local));p['status']='partial-source-backed-adoptions' if local else 'searched-awaiting-item-review';p['remainingScope']='已做美食、特产两类宽检索；不表示九品类或当地资料穷尽。'
save(B/'place-register.json',places)
queue=load(R/'research/flavors/queue.json');lookup={(p['level'],p['adcode']):p for p in places['places']}
for p in queue['places']:
 q=lookup.get((p['level'],p['adcode']))
 if q:p['searchEvidence']=q['searchEvidence'];p['reviewedTopics']=q['reviewedTopics']
queue['reviewed']='2026-11-15';queue['scope']='已收录24省市的地级范围与县级单位；东莞、中山、嘉峪关未设县区，镇街不升格为县。';queue['statusMeaning']['search-leads-pending-review']='已执行搜索、仍有候选待核；不表示全部品类完成';save(R/'research/flavors/queue.json',queue)
cov=load(R/'research/flavors/coverage.json');known={(r['province'],r['city'])for r in cov['cities']}
for p in places['places']:
 if p['level']=='city' and (p['province'],p['city'])not in known:cov['cities'].append(dict(province=p['province'],city=p['city'],count=0,types={},sourceBackedCount=0,pendingCount=0))
cov['reviewed']='2026-11-15';save(R/'research/flavors/coverage.json',cov)
photos=load(R/'research/flavors/images/coverage.json');illustrated={};s=(R/'data/flavor-images.js').read_text();media=json.loads(s[s.index('{'):s.rfind(';')]);photos['totalCards']=len(cat['items']);photos['pendingCards']=[x['id']for x in cat['items'] if x['id']not in media['cards']];save(R/'research/flavors/images/coverage.json',photos)
# Preserve the original, previously read GitHub tree and extracted lead data; they remain leads until original PDF checks.
g=R/'research/.local/program-4000/github-gi';sourcefiles=[g/'products.json',*g.glob('extract-*.json'),g/'tree.json',g/'pdf-index.json'];save(B/'reused-regulatory-sources.json',dict(date='2026-11-15',repository='https://github.com/JinQiangShi/Chinese-Nationnal-Geographic-Products',commit='4d96ec5fbdc26244e9e4db81b073316fc6daa92b',discoveryMethod='复查先前按固定GitHub提交保留的全国性候选目录；本批只选四川、重庆、云南、贵州。结构化目录不是采用证据，逐产品另比对原始公告章节。',originalArchive='research/archives/2026-11-14-flavor-program-4000.json',files=[dict(path=f.relative_to(R).as_posix(),sha256=hashlib.sha256(f.read_bytes()).hexdigest())for f in sourcefiles],adoptedProducts=sum(d['origin']=='original-pdf' and d['action']=='new'for d in ad['decisions']),readingNotes='reading-notes/'))
print('Updated',len(places['places']),'place stages; coverage rows',len(cov['cities']),'new cards',len(new))

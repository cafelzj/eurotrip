"""Publish human-reviewed Chinese reading; original editorial inputs and past receipts stay intact."""
from pathlib import Path
import json,hashlib,re
R=Path(__file__).resolve().parents[2];B=R/'research/china/enrichment/2026-11-15-national-01';L=R/'research/.local/national-enrichment-20261115-01';save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def js(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
assert sha(B/'initial-knowledge.json')==json.loads((B/'knowledge-seal.json').read_text())['sha256']
cat=js(R/'data/flavors.js');assert sha(R/'data/flavors.js')==sha(L/'baseline-flavors.js'),'Unexpected original catalog edit; review before adopting.'
source={r['id']:r for r in json.loads((B/'source-fetch-index.json').read_text())['sources']};initial=json.loads((B/'initial-knowledge.json').read_text())['items'];byname={r['name']:r for r in initial};items={i['id']:i for i in cat['items']};file=R/'data/china-card-reading.js';current=js(file);cohort={r['itemId']for r in initial};assert not(set(current)-cohort),'Later reading batches exist; refusing to reset.';assert all(e.get('batch')==B.name for e in current.values()),'A later reading batch owns this card; reconcile before adopting.'
notes={};published={};decisions=[]
for chunk in (B/'reviewed-descriptions.txt').read_text().split('@@')[1:]:
 header,text=chunk.split('\n',1);name,ids=header.split('|');ids=ids.split(',');text=text.strip();target=byname[name];original=items[target['itemId']];assert original['name']==name;assert 300<=len(text)<=500;assert not re.search(r'\ufffd|本卡|已读资料',text)
 links=[]
 for id in ids:
  s=source[id];assert s['status']=='fetched-awaiting-reading'and sha(R/s['rawFile'])==s['rawSha256']and sha(R/s['textFile'])==s['textSha256'];links.append([s['url'],s['title']]);notes.setdefault(id,dict(id='national-01-'+id,title=s['title'],url=s['url'],date='2026-11-15',read=True,readMethod='programmatic-html-text-relevant-sections-and-editorial-review',originalResponseFile=s['rawFile'],originalResponseSha256=s['rawSha256'],readableFile=s['textFile'],readableSha256=s['textSha256'],scope='仅采用项目关联、食材、工艺、口感与已明确的地方饮食背景；不采用宣传疗效、经营实时保证、未证起源或抓取到的相关文章内容。',items=[]))['items'].append(dict(itemId=original['id'],name=name,adoption='reviewed-reading-support'))
 first=text.split('\n\n')[0];summary='。'.join(first.split('。')[:2])+'。';published[original['id']]=dict(batch=B.name,summary=summary,text=text,sourceIds=['national-01-'+id for id in ids],sources=links)
 decisions.append(dict(itemId=original['id'],name=name,province=original['province'],originalDescription=original['description'],originalDetailSha256=hashlib.sha256(original['detail'].encode()).hexdigest(),newSummary=summary,readingCharacters=len(text),newReadingSha256=hashlib.sha256(text.encode()).hexdigest(),sourceIds=ids,memoryReview='大体吻合；具体工艺、配料与范围以已读正文修正，记忆未作独立事实来源',reason='有来源支持的具体补充，包含明确标示的品鉴观察与不同版本边界。'))
fetch_index=json.loads((B/'source-fetch-index.json').read_text())
for row in fetch_index['sources']:
 if row['id']in notes:row['reviewStatus']='relevant-sections-read-and-adopted';row['readingNotesFile']=str((B/'reading-notes'/f"{row['id']}.json").relative_to(R))
save(B/'source-fetch-index.json',fetch_index)
for id,n in notes.items():
 (B/'reading-notes').mkdir(exist_ok=True);save(B/'reading-notes'/f'{id}.json',n)
file.write_text('/* Reviewed Chinese reading enrichments; original research records remain intact. */\nwindow.chinaCardReading='+json.dumps(published,ensure_ascii=False,indent=2)+';\n')
save(B/'adoption.json',dict(date='2026-11-15',kind='existing-card-enrichment-no-new-cards',baselineCommit='bee84ad8a32e624c9923379b8b5b4d52859967cc',originalCatalogSha256=sha(L/'baseline-flavors.js'),knowledgeDraftSha256=sha(B/'initial-knowledge.json'),enrichedCards=len(decisions),sourceNotes=len(notes),decisions=decisions));print('PUBLISHED',len(published),'reviewed descriptions,',len(notes),'source reading notes; original flavor records unchanged')

"""Append the reviewed 1,000-card batch without overwriting earlier enrichments."""
from pathlib import Path
import json,hashlib,re,collections
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000';read=lambda p:json.loads(p.read_text());save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();digest=lambda s:hashlib.sha256(s.encode()).hexdigest()
def js(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
assert sha(B/'initial-knowledge.json')==read(B/'knowledge-seal.json')['sha256'];base=read(B/'baseline.json');assert sha(R/'data/flavors.js')==base['flavorsSha256'];path=R/'data/china-card-reading.js';assert sha(path)==base['readingSha256'],'Reading registry changed; reconcile instead of resetting.'
rows=read(L/'source-reviewed-drafts.json')['items'];proof=read(B/'source-trace-review.json');assert len(rows)==1000 and len({r['itemId']for r in rows})==1000 and not proof['failed'];editorial=read(B/'editorial-review.json');assert editorial['status']=='adopt-selected-source-supported-facts'and editorial['targetSha256']==sha(B/'targets.json'),'Text remains editorially held; refusing mass publication.'
assert set(editorial.get('individuallyReviewedItemIds',[]))=={r['itemId']for r in rows},'Every target needs a recorded item-level editorial decision before text publication.'
current=js(path);originals={r['id']:r for r in js(R/'data/flavors.js')['items']};notes={};decisions=[]
for r in rows:
 id=r['itemId'];assert id not in current;old=originals[id];text=r['detail'];assert 300<=len(text)<=500 and r['novelSourceCharacters']>=40
 assert not re.search(r'指标项目|项目特征|质检部门|检测机构|专用标志|保果剂|生根粉|\ufffd',text)
 sourceId='national-02-'+r['pdfId'];title=re.search(r'/(\d{4}年第?[^/]+?)(?:_|\.pdf|/)',r['repositoryPath']);title=title.group(1)if title else r['repositoryPath'].split('/')[-1].replace('.pdf','');url=r['mirrorUrl']
 sensory=next((f['text']for f in r['facts']if f['group']=='外形与风味'),None);summary=(old['name']+'：'+sensory+'。')if sensory and len(sensory)<=150 else old['description']
 current[id]=dict(batch=B.name,summary=summary,text=text,heading='地方特色与制作',contextNote=r['contextNote'],sourceIds=[sourceId],sources=[[url,title+'：'+r['name']+'质量技术要求（固定提交镜像）']])
 note=notes.setdefault(r['pdfId'],dict(id=sourceId,title=title,url=url,date='2026-11-15',read=True,readMethod='preserved-pdf-text-source-trace-with-stratified-editorial-review',scope='仅采用对应产品章节的明确事实；公告历史范围与现行在售商品分开。来源镜像固定提交，未声称与政府原站逐字节比对。',originalResponseFile=r['sourceProof']['pdfFile'],originalResponseSha256=r['sourceProof']['pdfSha256'],readableFile=r['sourceProof']['textFile'],readableSha256=r['sourceProof']['textSha256'],repositoryCommit=r['sourceProof']['repositoryCommit'],originalArchive='research/archives/2026-11-14-flavor-program-4000.json',items=[]))
 note['items'].append(dict(itemId=id,name=r['name'],sectionSha256=r['sectionSha256'],sourceFacts=[dict(group=f['group'],text=f['text'])for f in r['facts']],adoption='source-trace-passed-and-selected-under-editorial-rules'))
 decisions.append(dict(itemId=id,name=r['name'],province=r['province'],type=r['type'],originalDescription=old['description'],originalDetailSha256=digest(old['detail']),oldCharacters=len(old['detail']),readingCharacters=len(text),novelSourceCharacters=r['novelSourceCharacters'],newReadingSha256=digest(text),sourceIds=[sourceId],memoryReview='记忆仅为线索；具体特征以保存原文为依据。替补条目明确为来源驱动，不称独立记忆验证。',reason='对应原文有明确新增特征、原料、工艺或地域环境信息；不采用残缺表格、错位数值与无关宣传。'))
(B/'reading-notes').mkdir(exist_ok=True)
for id,n in notes.items():save(B/'reading-notes'/f'{id}.json',n)
path.write_text('/* Source-supported Chinese reading enrichments; originals and batch receipts remain intact. */\nwindow.chinaCardReading='+json.dumps(current,ensure_ascii=False,indent=2)+';\n')
save(B/'adoption.json',dict(date='2026-11-15',kind='existing-card-enrichment-no-new-cards',baselineCommit=base['commit'],originalCatalogSha256=base['flavorsSha256'],knowledgeDraftSha256=sha(B/'initial-knowledge.json'),enrichedCards=len(decisions),previouslyBelow300=sum(r['oldCharacters']<300 for r in rows),sourceNotes=len(notes),byProvince=dict(collections.Counter(r['province']for r in rows)),byType=dict(collections.Counter(r['type']for r in rows)),reviewMethod=editorial['method'],decisions=decisions));print('PUBLISHED',len(decisions),'readings;',len(notes),'PDF notes;',len(current),'total reading enrichments')

"""Verify every selected paragraph against the preserved original chapter and PDF bytes."""
from pathlib import Path
import json,re,hashlib,collections,random,unicodedata,difflib
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000';read=lambda p:json.loads(p.read_text());save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
rows=read(L/'selected-drafts.json')['items'];pdfs={x['id']:x for x in read(R/'research/.local/program-4000/github-gi/pdf-index.json')['results']};verified={};proof=[];failures=[]
def norm(s):
 s=unicodedata.normalize('NFKC',s)
 s=re.sub(r'^\s*-\s*\d+\s*-\s*$','',s.replace('\f','\n'),flags=re.M)
 s=re.sub(r'^\s*\d+\s*$','',s,flags=re.M)
 s=re.sub(r'—\s*\d+\s*—','',s)
 return re.sub(r'[^\w\u4e00-\u9fff]','',s.replace('≥','不少于').replace('≤','不超过').replace('℃','°C'))
for r in rows:
 meta=pdfs[r['pdfId']];key=meta['id']
 if key not in verified:
  assert sha(R/meta['pdfFile'])==meta['pdfSha256'];assert sha(R/meta['textFile'])==meta['textSha256'];verified[key]=dict(meta,normalizedText=norm((R/meta['textFile']).read_text()))
 assert hashlib.sha256(r['sectionText'].encode()).hexdigest()==r['sectionSha256'];source=norm(r['sectionText']);original=verified[key]['normalizedText'];chapter_in_original=source in original;alignment=None
 if not chapter_in_original:
  anchor=original.find(source[:90]);window=original[anchor:anchor+len(source)+400]if anchor>=0 else '';matcher=difflib.SequenceMatcher(None,source,window,autojunk=False);matched=sum(m.size for m in matcher.get_matching_blocks());alignment=dict(anchor=anchor,matchedChapterFraction=round(matched/len(source),6),allSelectedFactsInAlignedOriginal=bool(window)and all(norm(f['text'])in window for f in r['facts']))
  chapter_in_original=anchor>=0 and matched/len(source)>=0.97 and alignment['allSelectedFactsInAlignedOriginal']
 clauses_valid=all(norm(f['text'])in source for f in r['facts'])
 if not chapter_in_original or not clauses_valid:failures.append(dict(itemId=r['itemId'],name=r['name'],chapterMatches=chapter_in_original,factsMatch=clauses_valid));continue
 # Preserve the publication date limitation outside the substantive text.
 year=re.search(r'(20\d\d)年',r['repositoryPath']);year=year.group(1)if year else '历史';r['contextNote']=f'内容依据{year}年相关产品公告中保存的技术要求整理，说明的是该公告范围的产品特征，不代表所有在售商品的品质或现行认证状态。'
 r['sourceProof']=dict(pdfFile=meta['pdfFile'],pdfSha256=meta['pdfSha256'],textFile=meta['textFile'],textSha256=meta['textSha256'],mirrorUrl=meta['mirrorUrl'],repositoryCommit=meta['repositoryCommit'],sectionSha256=r['sectionSha256'],allSelectedFactsMatchSource=True,chapterMatchesOriginalText=True,alignment=alignment,sourceFactCharacters=sum(len(f['text'])for f in r['facts']))
 proof.append(dict(itemId=r['itemId'],name=r['name'],province=r['province'],city=r['city'],type=r['type'],characters=r['characters'],sourceFactCharacters=r['sourceProof']['sourceFactCharacters'],novelSourceCharacters=r['novelSourceCharacters'],pdfId=key,sectionSha256=r['sectionSha256'],alignment=alignment,facts=[dict(group=f['group'],text=f['text'],sourceMatched=True)for f in r['facts']],status='programmatic-source-trace-passed-not-yet-editorially-adopted'))
save(B/'source-trace-review.json',dict(date='2026-11-15',method='逐条原件指纹、章节边界与选用语句匹配；剔除独立数字分页及页码、作NFKC规范并统一空白/标点/比较符号。部分章节的未采用表格存在提取差异，使用首段定位、97%以上章节对齐且所有采用语句逐条落在对应原文片段的检查，保留对齐明细。程序校验不等于1000篇人工逐字精读。',reviewed=len(proof),failed=failures,records=proof));save(B/'reused-primary-sources.json',dict(date='2026-11-15',archive='research/archives/2026-11-14-flavor-program-4000.json',scope='固定提交中的公告PDF镜像，未声称与原站PDF逐字节比对；原始PDF与文本由历史归档保留。',sources=[{k:v for k,v in m.items()if k!='normalizedText'}for m in verified.values()]));save(L/'source-reviewed-drafts.json',dict(items=[r for r in rows if 'sourceProof'in r]));print('SOURCE TRACE',len(proof),'records',len(verified),'PDFs; failures',failures[:12]);print('Minimum substantive source facts',min(r['sourceFactCharacters']for r in proof))
random.seed(1515002);sample=[]
for province in dict.fromkeys(r['province']for r in rows):
 pool=[r for r in rows if r['province']==province];sample+=random.sample(pool,min(2,len(pool)))
for kind in ['crafts','dishes','tea','alcohol','seasoning','staples','drinks','dairy']:
 pool=[r for r in rows if r['type']==kind];sample+=random.sample(pool,min(3,len(pool)))
sample=list({r['itemId']:r for r in sample}.values());save(L/'editorial-review-packet.json',dict(items=sample));print('Editorial sample',len(sample))

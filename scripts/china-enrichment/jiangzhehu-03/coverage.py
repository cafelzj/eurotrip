"""Generate the current 981-card ledger without rewriting historical batches."""
from pathlib import Path
import json,csv,collections
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';read=lambda p:json.loads(p.read_text());save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
old=read(R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02/coverage.json');scope={r['itemId']for r in read(B/'scope.json')['items']};queue={r['itemId']:r for r in read(R/'research/china/enrichment/queue.json')['items']};history=read(B/'photo-adoption.json')['records'];adopted={r['itemId']:r for r in history};flickr=[json.loads(s)for s in(B/'query-log.jsonl').read_text().splitlines()];commons=read(B/'commons-search.json')['checks'];candidates=collections.defaultdict(set);query=collections.defaultdict(list);failures=collections.defaultdict(list)
for name in ['cached-candidates','english-candidates','category-candidates','category-followup-candidates','flickr-candidates','exact-file-candidates','exact-commons-candidates','named-source-candidates']:
 if not(B/(name+'.json')).exists():continue
 for c in read(B/(name+'.json'))['candidates']:
  for id in c['itemIds']:candidates[id].add(c['id'])
for q in flickr+commons:
 for id in q['itemIds']:
  query[id].append(dict(query=q['query'],status=q['status'],source='Flickr'if q in flickr else'Commons',responseFile=q.get('responseFile')))
  if q['status']=='error':failures[id].append(q.get('error'))
rows=[]
for r in old['items']:
 id=r['itemId'];has=queue[id]['imageStatus']!='missing-real-photo';a=adopted.get(id);rows.append(dict(itemId=id,name=r['name'],province=r['province'],city=r['city'],category=r['category'],subcategory=r['subcategory'],baselineHasPhoto=id not in scope,currentImageStatus=queue[id]['imageStatus'],status='本批复用同一对象实拍'if a and a['action'].startswith('reuse')else'本批新增实拍'if a else'此前已有实拍'if has else'缺图待补',batchAdoption=bool(a),adoptionAction=a['action']if a else None,queryHistory=query[id],candidateIds=sorted(candidates[id]),sourceErrors=failures[id],pendingReason=None if has else'缺图待补；查询失败不作零结果，候选未完成主体、地域、画面及使用条件核对前不采用。'))
totals=dict(cards=len(rows),baselineWithPhoto=191,newlyIllustratedCards=len(history),newlyAdoptedIndependentPhotos=len({r['derivativeSha256']for r in history if r['action']=='newly-adopted-real-photo'}),sameSubjectReuseCards=sum(r['action'].startswith('reuse')for r in history),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in rows),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in rows));assert totals['cards']==981 and totals['withPhoto']==191+len(history)
byProvince={p:dict(cards=len(group),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in group),newlyIllustratedCards=sum(r['batchAdoption']for r in group),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in group))for p in ['jiangsu','zhejiang','shanghai']for group in [[r for r in rows if r['province']==p]]};save(B/'coverage.json',dict(date='2026-11-17',status='in-progress-not-complete',goalReached=totals['missingPhoto']==0,totals=totals,byProvince=byProvince,notes=['采用数量来自逐卡绑定，不以检索、下载、接触表或候选数量充当完成数。','原件与历史错误保留；当前覆盖以此批与全量队列为准，不改写上批覆盖快照。'],items=rows))
with(B/'coverage.csv').open('w',encoding='utf-8-sig',newline='')as f:
 w=csv.writer(f,lineterminator='\n');w.writerow(['省份','城市','卡片ID','名称','当前状态','本批采用动作','候选数','待补说明'])
 for r in rows:w.writerow([r['province'],r['city'],r['itemId'],r['name'],r['status'],r['adoptionAction']or'',len(r['candidateIds']),r['pendingReason']or''])
print(json.dumps(dict(totals=totals,byProvince=byProvince),ensure_ascii=False))

"""Current whole-Jiangzhehu ledger, keeping prior batch receipts unchanged."""
from pathlib import Path
import json,csv,collections
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';read=lambda p:json.loads(p.read_text());save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');old=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';scope=read(old/'scope.json')['items'];missingAtStart={r['itemId']for r in read(B/'scope.json')['items']};queue={r['itemId']:r for r in read(R/'research/china/enrichment/queue.json')['items']};history=read(B/'photo-adoption.json')['records'];adopted={r['itemId']:r for r in history};queries=[json.loads(s)for s in(B/'query-log.jsonl').read_text().splitlines()];candidates={};queryByItem=collections.defaultdict(list)
for q in queries:
 for id in q['itemIds']:queryByItem[id].append(q['id'])
for name in ['candidates','commons-candidates','wiki-media','off-candidates','wiki-api-candidates']:
 for c in read(B/(name+'.json'))['candidates']:
  for id in c['itemIds']:candidates.setdefault(id,set()).add(c['id'])
held=collections.defaultdict(list)
for r in read(B/'visual-decisions.json')['held']:
 if r.get('status')!='approved-with-processing-disclosure':held[r['itemId']].append(r['reason'])
apiErrors=collections.defaultdict(list)
for r in read(B/'commons-search.json')['checks']:
 if r['status']=='error':
  for id in r['itemIds']:apiErrors[id].append('Commons API: '+r['error'])
rows=[]
for r in scope:
 id=r['itemId'];a=adopted.get(id);has=queue[id]['imageStatus']!='missing-real-photo';status=('本轮复用同一对象实拍'if a['action'].startswith('reuse')else'本轮新采用实拍')if a else'此前已有实拍'if has else'缺图待补';reason=None if has else('；'.join(held[id])if held[id]else'已保存候选，尚未确认主体、画面与使用条件同时合格；未采用不等于所有候选均已被否决。'if candidates.get(id)else'本轮Flickr与维基页面图片检索尚未找到可确认的对应实拍；不是断言网上不存在图片，其他来源仍待补查。')
 rows.append(dict(itemId=id,name=r['name'],province=r['province'],city=r['city'],category=r['category'],subcategory=r['subcategory'],baselineHasPhoto=id not in missingAtStart,currentImageStatus=queue[id]['imageStatus'],status=status,batchAdoption=bool(a),adoptionAction=a['action']if a else None,queryIds=queryByItem[id],candidateIds=sorted(candidates.get(id,[])),pendingReason=reason,sourceErrors=apiErrors[id]))
totals=dict(cards=len(rows),baselineWithPhoto=157,newlyIllustratedCards=len(history),newlyAdoptedIndependentPhotos=len({r['derivativeSha256']for r in history if r['action']=='newly-adopted-real-photo'}),sameSubjectReuseCards=sum(r['action'].startswith('reuse')for r in history),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in rows),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in rows),flickrQueries=len({r['id']for r in queries if r.get('responseFile')}),unresolvedFlickrErrors=len({r['id']for r in queries if r['status']=='error'}-{r['id']for r in queries if r.get('responseFile')}))
assert totals['cards']==981 and totals['withPhoto']==157+len(history)and totals['withPhoto']+totals['missingPhoto']==981
byProvince={p:dict(cards=len(group),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in group),newlyIllustratedCards=sum(r['batchAdoption']for r in group),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in group))for p in ['jiangsu','zhejiang','shanghai']for group in [[r for r in rows if r['province']==p]]};save(B/'coverage.json',dict(date='2026-11-17',status='in-progress-not-complete',goalReached=totals['missingPhoto']==0,totals=totals,byProvince=byProvince,notes=['这是当前逐卡片覆盖，不以搜索或下载数量充当补图数量。','同一对象的复用另行计数，不重复计算独立新照片。','百科首图、页面转向、同名、同类与拍摄地点均不能自动证明对应产物身份。','来源读取失败与没有结果分开；Commons限流、部分图片服务器503及维基首图错误映射保留待核。','历史批次保持原记录；本批照片不改写原卡片正文。'],items=rows))
original={r['itemId']:r for r in read(R/'research/.local/jiangzhehu-images-20261116/runtime-scope.json')['items']};labels={'jiangsu':'江苏','zhejiang':'浙江','shanghai':'上海'}
with (B/'coverage.csv').open('w',encoding='utf-8-sig',newline='')as f:
 w=csv.writer(f,lineterminator='\n');w.writerow(['省份','城市','原记录具体地域','卡片ID','名称','当前配图状态','采用动作','本轮Flickr查询数','候选数','待补说明','读取错误'])
 for r in rows:w.writerow([labels[r['province']],r['city'],original[r['itemId']].get('locality',''),r['itemId'],r['name'],r['status'],r['adoptionAction']or'',len(r['queryIds']),len(r['candidateIds']),r['pendingReason']or'','；'.join(r['sourceErrors'])])
print(json.dumps(dict(totals=totals,byProvince=byProvince),ensure_ascii=False))

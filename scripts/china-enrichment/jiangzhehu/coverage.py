"""Report actual canonical photo coverage and executed searches, never planned work as done."""
from pathlib import Path
import json,hashlib,collections,csv
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';read=lambda p:json.loads(p.read_text());save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
scope=read(B/'scope.json')['items'];queue={r['itemId']:r for r in read(R/'research/china/enrichment/queue.json')['items']};mediaText=(R/'data/china-card-images.js').read_text();media=json.loads(mediaText[mediaText.index('{'):mediaText.rfind(';')]);reviews={r['itemId']:r for r in read(B/'visual-decisions.json')['approved']};candidates=read(B/'candidates.json')['candidates'];planned=read(B/'query-plan.json')['jobs'];history=[json.loads(line)for line in(B/'query-log.jsonl').read_text().splitlines()];successful={r['id']:r for r in history if r.get('responseFile')};latest={r['id']:r for r in history};
rows=[]
for r in scope:
 id=r['itemId'];jobs=[j for j in planned if id in j['itemIds']];completed=[j for j in jobs if j['id']in successful];possible=[c for c in candidates if id in c['itemIds']];review=reviews.get(id);key=media['cards'].get(id);current=queue[id]['imageStatus'];missing=current=='missing-real-photo'
 row=dict(itemId=id,name=r['name'],province=r['province'],city=r['city'],category=r['category'],subcategory=r['subcategory'],baselineHasPhoto=r['hasPhoto'],currentImageStatus=current,batchAdoption=bool(key),assetId=key,adoptedCandidateId=review['candidateId']if review else None,queryIds=[j['id']for j in completed],plannedUnexecutedQueryIds=[j['id']for j in jobs if j['id']not in successful],candidateIds=[c['id']for c in possible],downloadedCandidates=sum(c['status']=='downloaded-awaiting-visual-review'for c in possible),status='adopted-reviewed-real-photo'if key else'existing-photo-not-reassessed-in-this-batch'if r['hasPhoto']else'pending-real-photo',pendingReason=None if not missing else('检索已保存候选，尚未确认主体、画面质量与采用条件均合格；不能算已配图。'if possible else'本轮已执行检索中尚未确认合格实拍；不是断言网上没有图片，仍需更换关键词与来源。'))
 rows.append(row)
byProvince={}
for p in dict.fromkeys(r['province']for r in rows):
 group=[r for r in rows if r['province']==p];byProvince[p]=dict(cards=len(group),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in group),newPhotoCards=sum(r['batchAdoption']for r in group),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in group))
totals=dict(cards=len(rows),baselineWithPhoto=sum(r['baselineHasPhoto']for r in rows),withPhoto=sum(r['currentImageStatus']!='missing-real-photo'for r in rows),newPhotoCards=len(media['cards']),newDistinctActivePhotographs=len(set(media['cards'].values())),missingPhoto=sum(r['currentImageStatus']=='missing-real-photo'for r in rows),plannedQueries=len(planned),successfulQueries=len(successful),unexecutedQueries=sum(j['id']not in successful for j in planned),unresolvedQueryErrors=sum(r.get('status')=='error' and id not in successful for id,r in latest.items()),downloadedCandidates=sum(c['status']=='downloaded-awaiting-visual-review'for c in candidates),downloadErrors=sum(c['status']=='download-error'for c in candidates))
assert totals['withPhoto']+totals['missingPhoto']==981;assert totals['withPhoto']==totals['baselineWithPhoto']+totals['newPhotoCards']
save(B/'coverage.json',dict(date='2026-11-16',status='in-progress-not-complete',goalReached=totals['missingPhoto']==0,scope='江浙沪全部现有规范化卡片；历史照片与本轮新采用分别计数。',notes=['关键词计划不等于已检索；以实际响应与查询历史为准。','批量OR检索可能只返回前50个结果，不宣称穷尽每个词的图片。','候选不是已验证图片；文件标题、百科首图和分类命中均不能自动采用。','博物馆、工艺与地点展示实际对应主体；食品优先采用清晰成品图，不用无关店铺或通用图代替。'],totals=totals,byProvince=byProvince,items=rows));print(json.dumps(totals,ensure_ascii=False))

# Human-readable current ledger; locality is preserved verbatim, never inferred.
original={r['itemId']:r for r in read(R/'research/.local/jiangzhehu-images-20261116/runtime-scope.json')['items']}
labels={'jiangsu':'江苏','zhejiang':'浙江','shanghai':'上海'}
with (B/'coverage.csv').open('w',encoding='utf-8-sig',newline='') as f:
 writer=csv.writer(f);writer.writerow(['省份','城市','原记录具体地域','卡片ID','名称','图片状态','本轮新增','已执行查询数','候选数','待补说明'])
 for r in rows:
  writer.writerow([labels[r['province']],r['city'],original[r['itemId']].get('locality',''),r['itemId'],r['name'],'缺图待补'if r['currentImageStatus']=='missing-real-photo'else'已有实拍',r['batchAdoption'],len(r['queryIds']),len(r['candidateIds']),r['pendingReason']or''])

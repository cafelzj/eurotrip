"""Index only contact sheets explicitly recorded as viewed, without claiming source approval."""
from pathlib import Path
import json,hashlib
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';L=R/'research/.local/jiangzhehu-images-20261116';read=lambda p:json.loads(p.read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sets=read(B/'reviewed-contact-sets.json')['sets'];seen={};contacts=[]
for entry in sets:
 folder=L/entry['folder'];idx=folder/entry['index'];rows=read(idx)['items'];sheets=sorted(folder.glob(entry['sheets']))
 contacts.append(dict(indexFile=str(idx.relative_to(R)),indexSha256=sha(idx),candidateIds=[r['id']for r in rows],sheets=[dict(file=str(p.relative_to(R)),sha256=sha(p))for p in sheets]))
 for row in rows:seen.setdefault(row['id'],[]).append(str(idx.relative_to(R)))
for entry in read(B/'reviewed-contact-sets.json').get('individualImages',[]):
 assert sha(R/entry['file'])==entry['sha256'];seen.setdefault(entry['candidateId'],[]).append(entry['file'])
approved=read(B/'visual-decisions.json')['approved'];held=read(B/'visual-decisions.json')['held'];A={r['candidateId']for r in approved};H={r['candidateId']for r in held};rows=[dict(candidateId=id,status='selected-for-specific-cards'if id in A else'held-with-explicit-reason'if id in H else'visual-screened-without-adoption',contactIndexes=paths,sourceApproval='只对采用记录中明确核对的卡片与事实范围成立；看过接触表不等于逐个读完所有来源。')for id,paths in sorted(seen.items())];out=dict(date='2026-11-16',reviewer='本轮助理逐图筛选；不冒称用户或其他人员逐项批准',scope='仅记录实际看过的接触表，不自动把未查看的新文件算入。',uniqueVisuallyScreenedCandidates=len(rows),contactSets=contacts,items=rows);(B/'visual-screening.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('Visually screened candidates',len(rows))

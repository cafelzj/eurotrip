"""Freeze reviewed prose, corrections and aliases; never promote unmatched search hits."""
from pathlib import Path
import json
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115'
read=lambda p:json.loads(p.read_text());save=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
# Hand-authored notes are retained with the original working materials; no name match generates prose.
notes=(L/'reviewed-editorial-input.txt').read_text().splitlines();initial=read(B/'initial-knowledge.json')['candidates'];sources=read(B/'source-fetch-index.json')['sources'];items=[]
names={0:'成都担担面',19:'盐边羊肉米线',21:'郎酒',47:'乐山甜皮鸭',195:'烧饵块'};cities={91:'阿坝州',92:'阿坝州',93:'阿坝州',158:'大理州',159:'全省'}
types={26:'dishes',47:'dishes',60:'dishes',84:'seasoning',93:'tea',139:'staples',149:'dishes',223:'dishes',243:'staples',244:'staples',250:'staples',254:'staples'}
localities={8:'武侯区',9:'锦江区',19:'盐边县',104:'黔江区',106:'万州区',107:'梁平区',188:'洱源县',216:'修文县',225:'仁怀市'}
for line in notes:
 idx,suffix,detail=line.split('|',2);idx=int(idx);c=initial[idx];s=next(s for s in sources if s['id'].endswith(suffix));assert s.get('readableFile'),(idx,s['url'],s['status'])
 sid=[s['id']]
 if idx in (5,6):sid+=['sw-source-15494d614f1e1ecf'] # Chengdu association is corroborated by city-organized food coverage.
 if idx==225:sid+=['sw-source-9df45bfdb06b28b7']
 if idx==8:sid+=['sw-source-873d8b7683884ce8']
 r=dict(candidateIndex=idx,candidateId=c['id'],province={'四川':'sichuan','重庆':'chongqing','云南':'yunnan','贵州':'guizhou'}[c['province']],city=cities.get(idx,c['city']),name=names.get(idx,c['name']),type=types.get(idx,c['type']),sourceIds=sid,description=detail.split('。')[0]+'。',detail=detail,locality=localities.get(idx,''),aliases=[c['name']]if idx in names else [],reviewNote='依据已读正文限定名称、地域与识别特征；只读名单或栏目时不扩写原料、历史与工艺。')
 if idx in cities:r['reviewNote']+='地域范围与初稿不同，按明确的来源范围整理；共享食品不因此认定其他地区不存在。'
 if idx in (111,115):r['evidenceAssessment']='reasonable-with-limits';r['reviewNote']+='本条依据民间旅游或企业目录与独立知识相符的信息合理采用，尚待更强的一手材料。'
 items.append(r)
save(B/'reviewed-memory.json',dict(date='2026-11-15',items=items));print('Reviewed memory',len(items))

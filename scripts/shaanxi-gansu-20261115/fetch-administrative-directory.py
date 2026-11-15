from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
from urllib.request import Request,urlopen
import json,hashlib,datetime,time
ROOT=Path(__file__).resolve().parents[2];BASE=ROOT/'research/china/expansions/2026-11-15-shaanxi-gansu';LOCAL=ROOT/'research/.local/shaanxi-gansu-20261115';RAW=LOCAL/'boundaries';RAW.mkdir(exist_ok=True)
provinces=[('shaanxi','陕西',610000),('gansu','甘肃',620000)]
aliases={'临夏回族自治州':'临夏州','甘南藏族自治州':'甘南州','临夏':'临夏州','甘南':'甘南州'}
def acquire(job):
 slug,name,code,level=job;url=f'https://geo.datav.aliyun.com/areas_v3/bound/{code}_full.json';target=RAW/f'{code}.json';row=dict(province=slug,name=name,adcode=code,level=level,url=url,checkedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),purpose='行政目录与地图，不作为食品事实依据')
 try:
  if not target.exists():
   with urlopen(Request(url,headers={'User-Agent':'Eurotrip research/1.0'}),timeout=35) as f:body=f.read()
   json.loads(body);target.write_bytes(body)
  body=target.read_bytes();payload=json.loads(body);row.update(status='read',sha256=hashlib.sha256(body).hexdigest(),responseFile=target.relative_to(ROOT).as_posix(),features=len(payload.get('features',[])))
  return row,payload
 except Exception as e:row.update(status='fetch-error',error=str(e));return row,None
sources=[];directory=[];jobs=[]
for slug,name,code in provinces:
 row,data=acquire((slug,name,code,'province'));sources.append(row)
 if not data:raise RuntimeError(name)
 directory.append(dict(province=slug,provinceName=name,name=name,adcode=code,level='province',city=None))
 for f in data['features']:
  p=f['properties'];city=aliases.get(p['name'],p['name'].removesuffix('市'));directory.append(dict(province=slug,provinceName=name,city=city,name=city,adminName=p['name'],adcode=p['adcode'],level='city',administrativeLevel=p.get('level')));jobs.append((slug,city,p['adcode'],'city'))
with ThreadPoolExecutor(max_workers=6) as pool:
 for fut in as_completed([pool.submit(acquire,j) for j in jobs]):
  row,data=fut.result();sources.append(row)
  if not data:continue
  provinceName=next(n for s,n,c in provinces if s==row['province'])
  for f in data['features']:
   p=f['properties'];code=p.get('adcode');name=p.get('name','')
   if len(str(code))!=6 or name in ['市辖区','省直辖县级行政区划'] or code==row['adcode']:continue
   directory.append(dict(province=row['province'],provinceName=provinceName,city=row['name'],name=name,adcode=code,level='county',parentAdcode=row['adcode']))
  print(row['name'],row['status'],row.get('features',0),flush=True)
(BASE/'administrative-sources.json').write_text(json.dumps(dict(date='2026-11-15',sources=sources),ensure_ascii=False,indent=2)+'\n')
# Extend the sealed memory stage with per-administrative-unit coverage/gaps; no food lookup has been performed here.
knowledge=json.loads((BASE/'initial-knowledge.json').read_text());byCity={}
for c in knowledge['candidates']:byCity.setdefault((c['province'],aliases.get(c['city'],c['city'])),[]).append(c)
for place in directory:
 candidates=byCity.get((place['provinceName'],place.get('city')),[]) if place['level']!='province' else [c for c in knowledge['candidates'] if c['province']==place['provinceName']]
 if place['level']=='county':candidates=[c for c in candidates if place['name'] in c['name']]
 place.update(initialKnowledgeIds=[c['id'] for c in candidates],knowledgeGap=not bool(candidates),reviewedTopics=[],searchEvidence=[],status='initial-knowledge-or-explicit-gap')
directory.sort(key=lambda r:(r['province'],r['adcode']))
(BASE/'place-register.json').write_text(json.dumps(dict(date='2026-11-15',knowledgeSeal='knowledge-seal.json',note='县区名来自行政目录，食品候选仅引用此前封存的记忆稿；县级未知项明确留空，不从行政图推断物产。嘉峪关的功能区不冒充县级行政区。',places=directory),ensure_ascii=False,indent=2)+'\n')
print('DIRECTORY',len(directory),'units;',sum(p['level']=='county' for p in directory),'county-level units; sources',len(sources),flush=True)

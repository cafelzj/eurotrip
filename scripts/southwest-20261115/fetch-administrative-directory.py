from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
from urllib.request import Request,urlopen
import json,hashlib,datetime,time
ROOT=Path(__file__).resolve().parents[2];BASE=ROOT/'research/china/expansions/2026-11-15-southwest';LOCAL=ROOT/'research/.local/southwest-20261115';RAW=LOCAL/'boundaries';RAW.mkdir(exist_ok=True)
provinces=[('sichuan','四川',510000),('chongqing','重庆',500000),('yunnan','云南',530000),('guizhou','贵州',520000)]
aliases={'阿坝藏族羌族自治州': '阿坝州', '甘孜藏族自治州': '甘孜州', '凉山彝族自治州': '凉山州', '楚雄彝族自治州': '楚雄州', '红河哈尼族彝族自治州': '红河州', '文山壮族苗族自治州': '文山州', '西双版纳傣族自治州': '西双版纳州', '大理白族自治州': '大理州', '德宏傣族景颇族自治州': '德宏州', '怒江傈僳族自治州': '怒江州', '迪庆藏族自治州': '迪庆州', '黔西南布依族苗族自治州': '黔西南州', '黔东南苗族侗族自治州': '黔东南州', '黔南布依族苗族自治州': '黔南州'}
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
 if slug=='chongqing':
  directory.append(dict(province=slug,provinceName=name,city=name,name=name,adminName='重庆市',adcode=code,level='city',administrativeLevel='municipality'))
  for f in data['features']:
   p=f['properties'];directory.append(dict(province=slug,provinceName=name,city=name,name=p['name'],adcode=p['adcode'],level='county',parentAdcode=code))
  continue
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
(BASE/'place-register.json').write_text(json.dumps(dict(date='2026-11-15',knowledgeSeal='knowledge-seal.json',note='县区名来自行政目录，食品候选仅引用此前封存的记忆稿；县级未知项明确留空，不从行政图推断物产。重庆作为直辖市建立一个市级范围，不把县区升格为地级市。',places=directory),ensure_ascii=False,indent=2)+'\n')
print('DIRECTORY',len(directory),'units;',sum(p['level']=='county' for p in directory),'county-level units; sources',len(sources),flush=True)

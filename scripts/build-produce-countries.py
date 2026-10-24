#!/usr/bin/env python3
"""Build three comparable country datasets from pinned FAO/OWID and Eurostat.
Refresh only: PYTHONPATH=/tmp/eurotrip-research-py python3 scripts/build-produce-countries.py
The site itself is static. Zero-filled FBS values remain unknown; explicit Eurostat
zeros remain reported zeros. National totals are never apportioned to cities.
"""
import argparse,copy,csv,hashlib,importlib.util,json,math,sys
sys.dont_write_bytecode=True
from concurrent.futures import ThreadPoolExecutor
from datetime import date
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import urlopen

ROOT=Path(__file__).resolve().parents[1]
def read(name):return json.loads((ROOT/name).read_text().split(' = ',1)[1].rstrip().removesuffix(';'))
def write(name,variable,data):(ROOT/name).write_text('const '+variable+' = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
def module(name):
 spec=importlib.util.spec_from_file_location(name,ROOT/'scripts'/name);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m
FBS=module('build-produce-supply.py');STATS=module('build-produce-stats.py')
ENERGY_COMMIT='e7897aed55b514b8d16e0a3d8f1518789ac3de31'
CODEBOOK_COMMIT='7ae9b4864980edf1094c1e3b84aff11a7a40cea3'
ENERGY_URL=f'https://raw.githubusercontent.com/owid/energy-data/{ENERGY_COMMIT}/owid-energy-data.csv'
CODEBOOK_URL=f'https://raw.githubusercontent.com/owid/energy-data/{CODEBOOK_COMMIT}/owid-energy-codebook.csv'
MIX=[('nuclear','核电','nuclear_electricity','#745f9b'),('solar','太阳能','solar_electricity','#d8a83b'),('gas','天然气','gas_electricity','#bc7253'),('coal','煤','coal_electricity','#697584'),('bioenergy','生物能源','biofuel_electricity','#7e965f'),('wind','风电','wind_electricity','#64a4ad'),('oil','石油','oil_electricity','#a28175'),('hydro','水电','hydro_electricity','#5385ab'),('other-renewables','其他可再生能源（不含生物能源）','other_renewable_exc_biofuel_electricity','#a1bba5')]

def main():
 import h5py
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--cache-dir',type=Path,default=Path('/tmp/eurotrip-country-research'));parser.add_argument('--checked-date',default=date.today().isoformat());a=parser.parse_args();cache=a.cache_dir;cache.mkdir(parents=True,exist_ok=True)
 countries=read('data/produce-countries.js');hu_stats=read('data/produce-stats.js');hu_supply=read('data/produce-supply.js');hu_energy=read('data/produce-energy.js')
 def fetch(name,url):
  p=cache/name;p.parent.mkdir(parents=True,exist_ok=True)
  if not p.exists():
   with urlopen(url,timeout=60) as r:p.write_bytes(r.read())
  return p
 def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
 def variable(spec):
  id,label,item=spec;mp=fetch(f'variables/{id}.metadata.json',STATS.BASE+f'{id}.metadata.json');dp=fetch(f'variables/{id}.data.json',STATS.BASE+f'{id}.data.json');meta=json.loads(mp.read_text());data=json.loads(dp.read_text())
  assert meta['id']==id and not meta.get('nonRedistributable');assert len(data['years'])==len(data['values'])==len(data['entities'])
  return id,(meta,data,sha(mp),sha(dp))
 with ThreadPoolExecutor(max_workers=6) as pool:variables=dict(pool.map(variable,STATS.ALL))
 energy_path=fetch('energy.csv',ENERGY_URL);codebook_path=fetch('codebook.csv',CODEBOOK_URL)
 assert sha(energy_path)=='266f2e2baad7975351bc9bb4aa061d22b1da9fe4c47d51d2ac6071e01e171f76'
 assert sha(codebook_path)=='3cc9b7db0d921496e2988568ce3aee5ed41f50431dd234a0663b5f0a4b2e32bb'
 energy_rows=list(csv.DictReader(energy_path.open()));codebook={r['column']:r for r in csv.DictReader(codebook_path.open())}
 assert all(c in codebook for c in ['gas_consumption','oil_consumption','electricity_generation','net_elec_imports'])
 paths={k:fetch({'balance':'balance.nc','population':'population.nc','notebook':'notebook.json'}[k],FBS.BASE+v) for k,v in FBS.PATHS.items()}
 for source in hu_supply['sources'][0]['variables']:
  key=source['id'];assert sha(paths[key])==source['sha256']
 notebook=json.loads(paths['notebook'].read_text());outputs='\n'.join(''.join(o.get('text',[])) for c in notebook['cells'] for o in c.get('outputs',[]))
 assert '5511 1000 t Production' in outputs and '5142 1000 t Food' in outputs
 def euro_url(dataset,unit,siec,balances):
  pairs=[('geo',x) for x in ['DE','AT','HU']]+[('time','2024'),('unit',unit),('siec',siec)]+[('nrg_bal',b) for b in balances]
  return 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/'+dataset+'?'+urlencode(pairs)
 euro_specs=[('gas','nrg_cb_gas','TJ_GCV','G3000',['IPRD','IMP','EXP','IC_CAL','IC_OBS']),('electricity','nrg_cb_e','GWH','E7000',['IMP','EXP','GEP']),('oil','nrg_cb_oil','THS_T','O4000XBIO',['IPRD','IMP','EXP','FC'])]
 euro={}
 for key,dataset,unit,siec,balances in euro_specs:
  url=euro_url(dataset,unit,siec,balances);snapshot=ROOT/'data/snapshots'/('eurostat-'+key+'-2024.json');snapshot.parent.mkdir(parents=True,exist_ok=True)
  if not snapshot.exists():snapshot.write_bytes(fetch(key+'-selected-v1.json',url).read_bytes())
  path=snapshot;data=json.loads(path.read_text());assert data.get('class')=='dataset' and data['dimension']['unit']['category']['index']=={unit:0}
  euro[key]=(data,path,url,unit,siec)
 def euro_value(key,country,balance):
  data,_,_,unit,siec=euro[key];selection=dict(freq='A',nrg_bal=balance,siec=siec,unit=unit,geo=country.upper(),time='2024');at=0
  for dimension,size in zip(data['id'],data['size']):
   ix=data['dimension'][dimension]['category']['index'].get(selection[dimension])
   if ix is None:return None,None
   at=at*size+ix
  value=data.get('value',{}).get(str(at));flag=data.get('status',{}).get(str(at))
  return value,flag
 result={}
 with h5py.File(paths['balance']) as b,h5py.File(paths['population']) as pop:
  years=[int(y) for y in b['Year'][:]];assert years==[int(y) for y in pop['Year'][:]]==list(range(2010,2024))
  for code,cfg in countries.items():
   name=cfg['name'];scope=name+'全国';entity=cfg['entity'];observations={}
   for id,(meta,data,mhash,dhash) in variables.items():
    owner=next((e for e in meta['dimensions']['entities']['values'] if e['name']==entity),None)
    if owner is None:observations[id]={};continue
    assert owner['code']==cfg['iso']
    observations[id]={y:v for y,v,e in zip(data['years'],data['values'],data['entities']) if e==owner['id']}
   stats=copy.deepcopy(hu_stats);stats.update(id=code,updatedAt=a.checked_date,intro=cfg['intro'],context=cfg['findings'],energyContext=[])
   for source in stats['sources']:
    source.update(scope=scope,accessed=a.checked_date)
    source['note']=source['note'].replace('Hungary',entity).replace('匈牙利',name).replace('布达佩斯海关或门店销售','城市海关或门店销售')
    for v in source.get('variables',[]):
     meta,data,mhash,dhash=variables[v['id']];v['metadataSha256']=mhash;v['dataSha256']=dhash
   for series in stats['latestSeries']:
    series['scope']=scope;series['values']=[observations[series['variableId']].get(y) for y in series['years']]
   stats['itemMetrics']=[metric for metric in stats['itemMetrics'] if observations[metric['variableId']]]
   for metric in stats['itemMetrics']:
    obs=observations[metric['variableId']];last=max(obs);metric.update(scope=scope,year=last,value=obs[last])
   for chart in stats['charts']:
    chart['scope']=scope
    for series in chart['series']:series['values']=[observations[series['variableId']].get(y) for y in chart['years']]
   stats['notes']=[n.replace('2024粮食产量与2023谷物贸易','不同年份的农业产量与谷物贸易') for n in stats['notes']]
   ri=list(b['Region_name'][:]).index(entity.encode());pi=list(pop['Region_name'][:]).index(entity.encode());assert int(b['Region'][ri])==int(pop['Region'][pi])==cfg['fao']
   people=[float(x) for x in pop['population'][pi]];assert all(x>0 for x in people);products=[]
   for category,product,name_zh,item in FBS.PRODUCTS:
    ix=list(b['Item'][:]).index(product);values={};ambiguous={}
    for metric in FBS.METRICS[:-1]:
     key=metric['id'];raw=[float(v) for v in b[key][ri,:,ix]];values[key]=[v if math.isfinite(v) and v!=0 else None for v in raw];ambiguous[key]=[years[i] for i,v in enumerate(raw) if v==0]
    values['perCapita']=[v*1000000/people[i] if v is not None else None for i,v in enumerate(values['food'])]
    products.append(dict(id=str(product),code=product,name=name_zh,originalName=b['Item_name'][ix].decode(),category=category,itemId=item,scope=scope,values=values,ambiguousZeroYears=ambiguous,sourceIds=['fao-supply-complete']))
   anchors={'de':(21536,11472,12694,6360),'at':(1745,2018,1365,854),'hu':(5942,816,3476,1284)};w=products[0];assert tuple(w['values'][k][-1] for k in ['production','imports','exports','food'])==anchors[code]
   supply=copy.deepcopy(hu_supply);supply.update(id=code+'-fbs',checkedAt=a.checked_date,scope=scope,years=years,population=people,products=products)
   supply['notes']=[n.replace('布达佩斯','国家或城市') for n in supply['notes']]
   for s in supply['sources']:s.update(scope=scope,accessed=a.checked_date,note=f'已读取固定版本食物平衡表、人口及转换方法；核对 {entity} / FAO代码{cfg["fao"]}、千吨单位与字段。原副本缺失填0，本站将这些0保留为未确认；未直接读取FAO实时API。人均量由Food与同版人口推算，不是实测摄入。')
   rows={int(r['year']):r for r in energy_rows if r['country']==entity and int(r['year'])>=2020}
   def value(y,column):
    raw=rows.get(y,{}).get(column);return float(raw) if raw not in [None,''] else None
   def electric(y):return dict(year=y,geo=scope,unit='TWh',generation=value(y,'electricity_generation'),demand=value(y,'electricity_demand'),netImports=value(y,'net_elec_imports'),netImportShare=value(y,'net_elec_imports_share_demand'),imports=None,exports=None,sourceIds=['energy-owid','energy-codebook'],definition='OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。')
   electricity=electric(2024);electricity['mix']=[dict(id=id,label=label,value=value(2024,column),share=value(2024,column)/electricity['generation']*100 if value(2024,column) is not None else None,color=color,column=column) for id,label,column,color in MIX]
   assert abs(sum(x['value'] or 0 for x in electricity['mix'])-electricity['generation'])<.05
   trend=[electric(y) for y in range(2020,2026)]
   for row in trend:row.update(solar=value(row['year'],'solar_electricity'),nuclear=value(row['year'],'nuclear_electricity'),gas=value(row['year'],'gas_electricity'));assert abs(row['generation']+row['netImports']-row['demand'])<.02
   sources=copy.deepcopy(hu_energy['sources'][:2]);sources[0].update(title='Our World in Data · Energy Data（已读 '+entity+' 行）',sha256=sha(energy_path),accessed=a.checked_date,scope=scope);sources[1].update(accessed=a.checked_date,sha256=sha(codebook_path),scope='指标单位、定义与上游来源')
   trade=[];extra_charts=[]
   for key,label in [('electricity','电力'),('gas','天然气'),('oil','石油与石油产品（不含生物燃料部分）')]:
    data,path,url,unit,siec=euro[key];source_id='eurostat-'+key;readings={};flags={}
    balances={'electricity':['IMP','EXP','GEP'],'gas':['IPRD','IMP','EXP','IC_CAL','IC_OBS'],'oil':['IPRD','IMP','EXP','FC']}[key]
    for balance in balances:readings[balance],flags[balance]=euro_value(key,code,balance)
    note='Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。'
    if key=='gas':note+=' 本版三国 EXP 列均明确报0；这不是对所有过境、输气合同或市场毛流量的结论，不据此计算进口依赖率。TJ_GCV 为总热值能量单位，与其他燃料口径不能无条件混算。'
    if key=='oil':note+=' O4000XBIO 是石油与石油产品合计（排除生物燃料部分），不是只有原油；原生生产与成品油贸易的产品形态不相同。'
    if key=='electricity':note+=' GEP 是毛发电；与 OWID / Ember 的覆盖与修订不同，独立列示，不混算差额。'
    sources.append(dict(id=source_id,title='Eurostat · '+label+'年度商品平衡（已读）',publisher='Eurostat',url=url,scope=scope,year=2024,accessed=a.checked_date,verified=True,sha256=sha(path),snapshotUrl='data/snapshots/'+path.name,datasetUpdated=data.get('updated'),dataset=data['extension']['id'],unit=unit,siec=siec,note=note))
    trade.append(dict(id=key,name=label,year=2024,scope=scope,unit={'GWH':'GWh','TJ_GCV':'TJ（总热值）','THS_T':'千吨'}[unit],values=readings,flags=flags,sourceIds=[source_id],note=note))
    extra_charts.append(dict(id='energy-'+key+'-reported-trade',title=label+'：报告进口与出口',description=note,scope=scope,unit=trade[-1]['unit'],years=[2024],series=[dict(name='报告进口',values=[readings['IMP']],color='#c16b32'),dict(name='报告出口',values=[readings['EXP']],color='#5679b1')],sourceIds=[source_id],section='energy'))
   energy=dict(id=code+'-energy',title=name+'的水与能源',checkedDate=a.checked_date,snapshotYear=2024,scope=scope,intro='分别看全国发电、燃料消费，以及 Eurostat 的电、气、油年度报告进出口；各图保留原有单位和核算体系。全国量不分摊为城市用量。',sources=sources,electricity=electricity,latestElectricity=electric(2025),electricityTrend=trend,primaryEnergy=dict(year=2024,geo=scope,unit='TWh',consumption=value(2024,'primary_energy_consumption'),sourceIds=['energy-owid','energy-codebook']),fuelConsumption=dict(year=2024,geo=scope,unit='TWh',items=[dict(id=k,label=label,value=value(2024,k+'_consumption'),column=k+'_consumption') for k,label in [('gas','天然气'),('oil','石油'),('coal','煤')]],sourceIds=['energy-owid','energy-codebook']),trade=trade)
   energy['charts']=[dict(id='energy-electricity-supply',title='电力供给：发电、需求与跨境净进口',description='OWID / Ember 同一体系；净进口可以为负，负值表示净出口。不是毛进口或毛出口。',scope=scope,unit='TWh',years=list(range(2020,2026)),series=[dict(name=label,values=[r[k] for r in trend]) for k,label in [('generation','国内发电'),('demand','电力需求'),('netImports','跨境净进口')]],sourceIds=['energy-owid','energy-codebook']),dict(id='energy-fuel-consumption',title='天然气、石油与煤：一次能源消费',description='全国燃料消费按能量折算，不是进口吨数、体积或终端售电量；本固定版本2025消费为空，保留缺失。',scope=scope,unit='TWh',years=list(range(2020,2025)),series=[dict(name=label,values=[value(y,k+'_consumption') for y in range(2020,2025)]) for k,label in [('gas','天然气'),('oil','石油'),('coal','煤')]],sourceIds=['energy-owid','energy-codebook'])]+extra_charts
   main=max(electricity['mix'],key=lambda x:x['value'] or 0)
   energy['facts']=[dict(title='2024：'+main['label']+'在本国发电中占比最高',text=f"{name}全国发电 {electricity['generation']:.2f} TWh，其中{main['label']} {main['value']:.2f} TWh，约占 {main['share']:.1f}%。这是国内发电结构，不是所有消费电量的电源追踪。",scope=scope+' · 2024',sourceIds=['energy-owid','energy-codebook'],verified=True),dict(title='进口、出口和净进口各说什么',text='一个国家可以同时大量进口和出口电力；跨境时段、调度与统计范围影响结果。净进口是进口减出口，不能用净额替代毛流量。油、气、煤的消费也不等于进口。',scope='统计口径',sourceIds=['energy-codebook','eurostat-electricity'],verified=True)]
   water={
    'de':[('北海、波罗的海与内陆水系','德国有海岸和海洋渔业，也有鲤鱼、鳟鱼等内陆养殖。河流、海洋、饮用水与水电是不同资源用途，不能把有河流推断成主要依靠水电。','eu-aquaculture-read'),('柏林供水是城市背景','柏林的供水依靠其区域水源和水处理系统；全国粮食、能源或饮用水总量不能按人口比例包装成城市实测用量。可沿官方水务入口查水质和本地信息。','de-water-reference')],
    'at':[('阿尔卑斯山与水电','奥地利有山地水系和显著水电生产。水电随来水变化；2024净出口、2025净进口这样的年度差异，应查看下面同一体系的年度曲线。','energy-owid'),('维也纳饮用水与山泉供水','维也纳的山泉输水是理解城市供水的地方线索；不据此估算全国或全城当年用水量。饮用水、河流发电、温泉和瓶装水各有用途。','at-water-reference')],
    'hu':[('多瑙河、蒂萨河与内陆鱼塘','匈牙利没有海岸，淡水养殖、河湖水域与进口海产是不同链条；多瑙河流经布达佩斯不代表全国主要依靠水电。','eu-aquaculture-read'),('布达佩斯水源与温泉分开看','首都周边的河岸过滤供水、城市自来水处理和浴场温泉是不同系统；本专题没有取得可比市级用水量，不用全国数字分摊。','budapest-water')]}
   energy['water']=[dict(title=t,text=text,scope='地理与城市背景；非市级数量统计',sourceIds=[source],verified=False) for t,text,source in water[code]]
   energy['gaps']=[dict(topic='实际消费与城市用量',reason='目前仍缺同年、同口径的逐产品实际摄入及市级能源用量，不用食物可供量或全国分摊值代替。',sourceIds=['energy-codebook']),dict(topic='贸易来源国与实时价格',reason='本次是年度全国总量，不包含完整的来源国分解、合同、过境毛流量或今天的零售价。',sourceIds=['eurostat-gas','eurostat-oil'])]
   result[code]=dict(stats=stats,supply=supply,energy=energy)
 for name,var,key in [('data/produce-stats.js','produceStats','stats'),('data/produce-supply.js','produceSupply','supply'),('data/produce-energy.js','produceEnergy','energy')]:write(name,var,result['hu'][key])
 write('data/produce-country-data.js','produceCountryData',{k:v for k,v in result.items() if k!='hu'})
 for code,data in result.items():print(code,len(data['supply']['products']),'FBS products;',len(data['stats']['latestSeries']),'latest series;',len(data['energy']['charts']),'energy charts')

if __name__=='__main__':main()

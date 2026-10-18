#!/usr/bin/env python3
"""Extract Hungary's complete food balance from a pinned AgriFoodPy/FAOSTAT copy.
Refresh only: requires h5py (the static website has no Python dependencies).
"""
import argparse
from datetime import date
import hashlib
import json
import math
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
COMMIT = '3251e9fe9a8fb24a471e13c98f058f897c1f0135'
BASE = f'https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/{COMMIT}/'
PATHS = {'balance':'agrifoodpy_data/food/data/FAOSTAT_FBS.nc',
         'population':'agrifoodpy_data/population/data/Population_FAOSTAT_FBS.nc',
         'notebook':'agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb'}
# Explicit classifications shared with the food atlas; no keyword classification.
PRODUCTS = [
 ('grain',2511,'小麦及制品','wheat'),('grain',2513,'大麦及制品','barley'),
 ('grain',2514,'玉米及制品','maize'),('grain',2515,'黑麦及制品','rye'),
 ('grain',2516,'燕麦','oats'),('grain',2807,'大米及制品（碾米口径）','rice'),
 ('fruit',2617,'苹果及制品','apple'),('fruit',2620,'葡萄及制品（不含葡萄酒）','grape'),
 ('fruit',2615,'香蕉',None),('fruit',2611,'橙与柑橘',None),('fruit',2612,'柠檬、青柠及制品',None),
 ('fruit',2625,'其他水果（统计组）',None),
 ('vegetable',2601,'番茄及制品','tomato'),('vegetable',2602,'洋葱','onion'),
 ('vegetable',2605,'其他蔬菜（统计组）',None),('vegetable',2531,'土豆及制品','potato'),
 ('vegetable',2546,'干豆','dry-bean'),('vegetable',2547,'干豌豆',None),
 ('vegetable',2549,'其他豆类及制品（统计组）',None),
 ('meat',2733,'猪肉及制品','pork'),('meat',2731,'牛肉及制品（FAO Bovine Meat）','beef'),
 ('meat',2734,'禽肉及制品（含鸡鸭等）',None),('meat',2732,'羊与山羊肉',None),
 ('aquatic',2761,'淡水鱼（统计组）',None),('aquatic',2762,'底栖海鱼（统计组）',None),
 ('aquatic',2763,'中上层海鱼（统计组）',None),('aquatic',2764,'其他海鱼（统计组）',None),
 ('aquatic',2765,'甲壳类（含虾蟹）',None),('aquatic',2766,'头足类（含鱿鱼等）',None),
 ('aquatic',2767,'其他软体动物（含贝类）',None),
 ('oil',2557,'葵花籽','sunflower'),('oil',2573,'葵花籽油','sunflower'),
 ('oil',2558,'油菜籽与芥籽','rapeseed'),('oil',2574,'菜籽油与芥籽油','rapeseed'),
 ('oil',2571,'大豆油',None),('oil',2580,'橄榄油',None),
 ('spice',2640,'胡椒（FAO Pepper）',None),('spice',2641,'Pimento（FAO香料条目）',None),
 ('spice',2642,'丁香',None),('spice',2645,'其他香料（统计组）',None),
 ('dairy',2848,'奶类与乳品（不含黄油，乳品折算）','milk'),
 ('dairy',2740,'黄油与酥油',None),('dairy',2743,'奶油',None),
 ('eggs',2744,'蛋类','egg'),('nuts',2551,'坚果及制品（统计组）',None),
 ('sweetener',2537,'制糖甜菜','sugar-beet'),('sweetener',2542,'糖（原糖当量）',None),
 ('sweetener',2745,'蜂蜜','honey'),
 ('drink',2655,'葡萄酒','wine'),('drink',2656,'啤酒','beer'),
 ('drink',2658,'其他酒精饮料（统计组）',None),('drink',2630,'咖啡及制品','coffee'),
 ('drink',2635,'茶（含马黛茶）',None),
]
METRICS = [
 {'id':'production','name':'产量','unit':'千吨','definition':'同版FAO食物平衡表的生产量；具体原产品和制品折算范围见产品名称。'},
 {'id':'imports','name':'进口量','unit':'千吨','definition':'进口总量，未扣出口；不是净进口。'},
 {'id':'exports','name':'出口量','unit':'千吨','definition':'出口总量，未扣进口；不与净出口混用。'},
 {'id':'domestic','name':'国内供给量','unit':'千吨','definition':'由生产、贸易及库存变动等共同决定，供食用、饲料、加工、种子等用途，不能全部当作人吃掉的数量。'},
 {'id':'food','name':'食用可供总量','unit':'千吨','definition':'FAO Food项：供人食用的供给端数量，未扣消费者浪费，不是实测摄入。'},
 {'id':'perCapita','name':'人均食用可供量（估算）','unit':'千克 / 人 / 年','definition':'由同版Food总量（千吨）×1,000,000÷同版FAO人口推算；总量有取整，结果为近似参考，不是实测人均消费。'},
]


def main():
 import h5py
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--cache-dir',type=Path,default=Path('/tmp/eurotrip-supply-sources'))
 parser.add_argument('--checked-date',default=date.today().isoformat())
 args=parser.parse_args();cache=args.cache_dir/COMMIT;cache.mkdir(parents=True,exist_ok=True)
 paths={};hashes={}
 for key,path in PATHS.items():
  local=cache/path.split('/')[-1]
  if not local.exists():
   with urllib.request.urlopen(BASE+path,timeout=45) as response:local.write_bytes(response.read())
  paths[key]=local;hashes[key]=hashlib.sha256(local.read_bytes()).hexdigest()
 notebook=json.loads(paths['notebook'].read_text())
 text='\n'.join(''.join(cell.get('source',[])) for cell in notebook['cells'])
 outputs='\n'.join(''.join(output.get('text',[])) for cell in notebook['cells'] for output in cell.get('outputs',[]))
 assert '5511 1000 t Production' in outputs and '5142 1000 t Food' in outputs
 assert '5611 1000 t Import quantity' in outputs and '5911 1000 t Export quantity' in outputs
 assert 'pop_arr*1000' in text and 'fbs_arr[ipos]' in text
 food=json.loads((ROOT/'data/produce-food.js').read_text().split(' = ',1)[1].rstrip().removesuffix(';'))
 categories={category['id'] for category in food['categories']}
 with h5py.File(paths['balance']) as balance,h5py.File(paths['population']) as population:
  r=list(balance['Region_name'][:]).index(b'Hungary');pr=list(population['Region_name'][:]).index(b'Hungary')
  assert int(balance['Region'][r])==int(population['Region'][pr])==97
  years=[int(y) for y in balance['Year'][:]];assert years==[int(y) for y in population['Year'][:]]
  people=[float(p) for p in population['population'][pr]];assert all(p>0 for p in people)
  products=[]
  for category,code,name,item in PRODUCTS:
   assert category in categories
   i=list(balance['Item'][:]).index(code);values={};ambiguous={}
   for metric in METRICS[:-1]:
    key=metric['id'];raw=[float(v) for v in balance[key][r,:,i]]
    # The upstream notebook initializes missing entries to 0. Do not silently
    # claim those zeroes are observed zero production/trade/consumption.
    values[key]=[v if math.isfinite(v) and v!=0 else None for v in raw]
    ambiguous[key]=[years[j] for j,v in enumerate(raw) if v==0]
   values['perCapita']=[v*1000000/people[j] if v is not None else None for j,v in enumerate(values['food'])]
   products.append({'id':str(code),'code':code,'name':name,'originalName':balance['Item_name'][i].decode(),
                    'category':category,'itemId':item,'scope':'匈牙利全国',
                    'values':values,'ambiguousZeroYears':ambiguous,'sourceIds':['fao-supply-complete']})
  # Independently checked anchor quantities agree with the complete source.
  last=years.index(2023);wheat=next(p for p in products if p['code']==2511)
  assert wheat['values']['production'][last]==5942 and wheat['values']['imports'][last]==816
  assert wheat['values']['exports'][last]==3476 and wheat['values']['food'][last]==1284
  result={'id':'hungary-fbs','checkedAt':args.checked_date,'scope':'匈牙利全国','years':years,
          'defaultYear':2023,'population':people,'metrics':METRICS,'products':products,
          'notes':[
           '同年供需表全部来自同一份FAO FBS公开副本，2010–2023；不把2024年农业产量与2023年贸易拼成供需平衡。',
           '总量单位为千吨，源数多已取整；人均量根据同版Food和人口估算，只显示近似值，不是FAO逐项公布的人均值或实测摄入。',
           '奶类为乳品折算，鱼类也不等同零售净鱼肉。制糖甜菜、糖、油籽与成品油必须分别看，不能按相同重量含义直接相加。',
           '国内供给还受库存变动及调整影响，不一定等于产量加进口减出口；食用可供量也只是国内供给的一种用途。',
           '副本中的国内供给负值原样保留并标记，属于需回溯核查的统计平衡，不表示消费者吃了负数量；不据此推算进口依赖率。',
           '副本转换脚本将未记录值填成0，无法区分真实零与缺值；本页将这些零值标为未确认，不擅自当作零产量或零进口。',
           '部分行是统计组或含制品，不能据此分配到某一种生鲜食材；禽肉不等于鸡肉，坚果合计不等于核桃，Pimento条目不等于匈牙利红椒粉单品。',
           '本专题仍未取得可比的布达佩斯逐产品实测消费及摄入数据。食用可供量是消费参考，不能更名为实际消费量。'],
          'sources':[{'id':'fao-supply-complete','title':'FAOSTAT完整食物平衡表 · AgriFoodPy公开整理副本',
           'publisher':'FAO；公开整理：FixOurFood / AgriFoodPy',
           'url':'https://github.com/FixOurFood/agrifoodpy-data/tree/'+COMMIT+'/agrifoodpy_data/food',
           'version':COMMIT,'accessed':args.checked_date,'year':'2010–2023','scope':'匈牙利全国','verified':True,
           'note':'已实际读取FBS、同版人口与转换脚本，核对匈牙利代码97、千吨单位及字段。转换脚本直接转存FAO Value，不进行额外供需平衡拟合；其缺失填0的情况已在本页保守处理。人均量为由Food与人口推算的近似参考。未直接读取FAO官网实时API，原始FAO统计旗标未保留在此副本。',
           'variables':[{'id':key,'label':{'balance':'完整食物平衡表（千吨）','population':'同版FAO人口（人）','notebook':'字段、单位与整理方法'}[key],
                         'unit':{'balance':'1000 t','population':'persons','notebook':'方法说明'}[key],
                         'url':BASE+path,'metadataUrl':BASE+PATHS['notebook'],'sha256':hashes[key]} for key,path in PATHS.items()]}]}
 target=ROOT/'data/produce-supply.js';target.write_text('const produceSupply = '+json.dumps(result,ensure_ascii=False,indent=2)+';\n')
 observations=sum(v is not None for p in products for series in p['values'].values() for v in series)
 print(f'Wrote {target.relative_to(ROOT)}: {len(products)} products, {len(categories)} categories, {len(years)} years, {observations} usable observations.')


if __name__=='__main__':main()

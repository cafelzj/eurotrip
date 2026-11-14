"""Build a sequential city/county research register from read DataV boundaries.

Usage: python3 scripts/build-flavor-research-queue.py /path/to/cached/city-boundaries
No food claims or reviewed-search status are inferred from administrative geometry.
"""
import argparse, hashlib, json, pathlib
p=argparse.ArgumentParser();p.add_argument('source_dir',type=pathlib.Path);args=p.parse_args()
root=pathlib.Path(__file__).resolve().parents[1]
def js(name,variable):return json.loads((root/name).read_text().split(variable+'=',1)[1].rstrip(';\n'))
data=js('data/flavors.js','window.flavorCatalog');geo=js('data/flavor-map-regions.js','window.flavorMapRegions')
oldpath=root/'docs/flavor-research-queue.json';old=json.loads(oldpath.read_text())if oldpath.exists()else{};previous={r['adcode']:r for r in old.get('places',[])};places=[];sources=[];missing=[]
def add(province,city,name,code,level,parent=None):
 items=[i for i in data['items']if i['province']==province['id']and i['city']==city and i.get('verificationStatus')!='pending']
 if level=='county':items=[i for i in items if name in str(i.get('locality',''))or i.get('district')==name or name in i.get('districts',[])]
 prev=previous.get(code,{});row={'adcode':code,'province':province['id'],'city':city,'name':name,'level':level,'entryIds':[i['id']for i in items],'reviewedTopics':prev.get('reviewedTopics',[]),'status':'has-sourced-entries'if items else'search-leads-pending-review'if prev.get('searchEvidence')else'not-started'}
 if parent:row['parentAdcode']=parent
 if prev.get('searchEvidence'):row['searchEvidence']=prev['searchEvidence']
 places.append(row)
for province in data['provinces']:
 g=geo[province['id']]
 if g['level']=='district':
  add(province,province['name'],province['name'],province['adcode'],'city')
  for a in g['regions']:add(province,province['name'],a['name'],a['adcode'],'county',province['adcode'])
  continue
 for city in g['regions']:
  code=city['adcode'];add(province,city['name'],city['name'],code,'city')
  if city['name']in ['济源','仙桃','潜江','天门','神农架']:continue
  f=args.source_dir/(str(code)+'.json')
  if not f.exists():missing.append({'adcode':code,'city':city['name']});continue
  b=f.read_bytes();bound=json.loads(b);sources.append({'adcode':code,'url':f'https://geo.datav.aliyun.com/areas_v3/bound/{code}_full.json','evidenceSha256':hashlib.sha256(b).hexdigest()})
  for a in bound['features']:
   prop=a['properties'];name=prop['name']
   if name in ['市辖区','省直辖县级行政区划']:continue
   add(province,city['name'],name,prop['adcode'],'county',code)
assert len({r['adcode']for r in places})==len(places),'duplicate administrative codes'
result={'reviewed':'2026-11-14','targetItems':2000,'totalItems':len(data['items']),'remainingItems':max(0,2000-len(data['items'])),'scope':'已收录15省市的地级市、自治州、地区及所辖县、县级市、区；济源等省直管单位单列。县内乡镇在卡片 locality 中注明。','order':'按目录省份顺序，每个地级市之后依行政代码逐县级单位检索；省直管县级单位不虚构下属县。','statusMeaning':{'search-leads-pending-review':'已执行逐品类搜索，候选文章与具体条目尚待核对','not-started':'无已核对定位条目，逐品类检索尚未完成','has-sourced-entries':'已有可明确定位卡片，不表示当地或全部品类检索完成'},'queryTemplates':[{'topic':'local-dishes','queries':['{city} {name} 特色菜','{city} {name} 小众菜','{city} {name} 当地菜','{city} {name} 地方小吃']},{'topic':'dairy','queries':['{city} {name} 乳制品 本地牛奶']},{'topic':'drinks','queries':['{city} {name} 饮品 汽水','{city} {name} 奶茶品牌 起源']},{'topic':'alcohol','queries':['{city} {name} 地方酒']},{'topic':'tea','queries':['{city} {name} 茶叶 代用茶']},{'topic':'staples','queries':['{city} {name} 特色面食 米粉 糕饼']},{'topic':'seasoning','queries':['{city} {name} 调味品 酱 醋']},{'topic':'ingredients','queries':['{city} {name} 地方食材 特产']}],'missingBoundaryLists':missing,'boundarySources':sources,'places':places}
oldpath.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(len(places),'places;',sum(r['level']=='county'for r in places),'county-level units;',len(missing),'missing lists')

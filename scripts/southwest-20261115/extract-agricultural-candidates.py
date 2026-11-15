"""Extract exact official table rows, separating publication, notice and withdrawal status."""
from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,collections
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115'
read=lambda p:json.loads(p.read_text());save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
sources=read(B/'agricultural-source-register.json')['sources'];places=read(B/'place-register.json')['places'];provs={'四川省':'sichuan','重庆市':'chongqing','云南省':'yunnan','贵州省':'guizhou'}
old_names={'宜宾县':'叙州区','平坝县':'平坝区','黔西县':'黔西市','马龙县':'马龙区','罗江县':'罗江区','隆昌县':'隆昌市','马尔康县':'马尔康市','康定县':'康定市','沾益县':'沾益区'};withdrawn=[];out=[]
for s in sources:
 if not s.get('readableFile'):continue
 text=(R/s['readableFile']).read_text();lines=text.splitlines();title=next((x.strip()for x in lines if '农产品' in x and ('公告' in x or '公示'in x or '关于注销'in x)),s['title']);title={'sw-agri-3e54d9fbba55c048':'2024年第三批全国名特优新农产品公示','sw-agri-ade367ba321c2835':'农业农村部农产品质量安全中心公告（第44号）：2026年第二批全国名特优新农产品名录','sw-agri-b1b5347a0c33e950':'农业农村部农产品质量安全中心公告（第42号）：2026年第一批全国名特优新农产品名录','sw-agri-69d2fb8f80e127d1':'2026年第二批全国名特优新农产品公示','sw-agri-f98e5886553173bf':'关于注销什贴小米等69个全国名特优新农产品的通知','sw-agri-215519efdbdbc687':'关于注销大白谷小米等170个全国名特优新农产品的通知'}[s['id']];s['title']=title
 soup=BeautifulSoup((R/s['responseFile']).read_bytes(),'html.parser')
 for table in soup.select('table'):
  rows=[[td.get_text(' ',strip=True)for td in tr.select('td,th')]for tr in table.select('tr')];header=next((r for r in rows if '产品名称'in r and '省份'in r),None)
  if not header:continue
  def col(row,key):return row[header.index(key)]if key in header and header.index(key)<len(row)else ''
  for row in rows:
   if len(row)!=len(header)or col(row,'省份')not in provs:continue
   if '注销'in title:
    withdrawn.append(dict(name=col(row,'产品名称'),province=provs[col(row,'省份')],sourceId=s['id'],certificate=col(row,'证书编号')));continue
   province=provs[col(row,'省份')];name=col(row,'产品名称');local=col(row,'县域');authority=col(row,'获证单位')or col(row,'申请单位全称');rawCounty=local
   for old,new in old_names.items():local=local.replace(old,new)
   candidates=[p for p in places if p['province']==province and p['level']=='county'and p['name']in local];location=None
   if len(candidates)>1:candidates=[p for p in candidates if p['city']in local]
   if len(candidates)==1:location=dict(city=candidates[0]['city'],locality=candidates[0]['name'],placeIds=['county:'+str(candidates[0]['adcode'])])
   elif province=='chongqing':location=dict(city='重庆',locality='',placeIds=[])
   elif not local or any(p['province']==province and p['level']=='city'and local in (p['city'],p['city']+'市')for p in places):
    cities=[p for p in places if p['province']==province and p['level']=='city'and (p['city']in authority or p['city']in name)]
    if len(cities)==1:location=dict(city=cities[0]['city'],locality='',placeIds=[])
   item=dict(id='agri-row-'+hashlib.sha256((s['id']+'|'+col(row,'序号')+'|'+name).encode()).hexdigest()[:16],province=province,name=name,sourceId=s['id'],rowNumber=col(row,'序号'),sourceTitle=title,rawCounty=rawCounty,authority=authority,scale=col(row,'生产规模（公顷、万头、万只、万羽等）'),certificate=col(row,'证书编号'),sourceStage='proposed-list'if '公示'in title else 'published-list',rowSha256=hashlib.sha256(json.dumps(row,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(),geographyStatus='mapped'if location else 'unmapped')
   if location:item.update(location)
   out.append(item)
# Prefer the published 2026 list to its earlier proposal; retain all rows for review.
published={(r['province'],r['name'])for r in out if r['sourceStage']=='published-list'}
for r in out:
 r['reviewStatus']='superseded-proposal'if r['sourceStage']=='proposed-list' and (r['province'],r['name'])in published else 'awaiting-editorial-review'
 if any(w['province']==r['province']and w['name']==r['name']for w in withdrawn):r['reviewStatus']='hold-withdrawn-registration'
save(B/'agricultural-candidates.json',dict(date='2026-11-15',items=out,withdrawn=withdrawn));save(B/'agricultural-source-register.json',dict(date='2026-11-15',scope='官方公示、正式公布与注销状态分开；产品地方身份与当前认证有效性不是同一个结论。',sources=sources))
f=B/'source-fetch-index.json';d=read(f);by={s['id']:s for s in sources}
for i,s in enumerate(d['sources']):
 if s['id']in by:d['sources'][i]=by[s['id']]
save(f,d)
print('CANDIDATES',len(out),collections.Counter(r['reviewStatus']for r in out),'withdrawn matches',len(withdrawn))
for stage in ['published-list','proposed-list']:
 for pid in provs.values():
  rows=[r for r in out if r['province']==pid and r['sourceStage']==stage and r['reviewStatus']=='awaiting-editorial-review'];print(stage,pid,len(rows),'、'.join(r['name']for r in rows))
print('UNMAPPED',[(r['name'],r['rawCounty'])for r in out if r['geographyStatus']=='unmapped'])

from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,html,re
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';(L/'commons').mkdir(exist_ok=True);scope=json.loads((B/'scope.json').read_text())['items'];byname={r['name']:r['itemId']for r in scope};sha=lambda x:hashlib.sha256(x).hexdigest();old={r['query']:r for r in [json.loads(s)for s in(R/'research/china/enrichment/2026-11-16-jiangzhehu-images/query-log.jsonl').read_text().splitlines()]if r.get('responseFile')}
pairs={'江南大学 · 蠡湖校区':['"Jiangnan University"','江南大学 蠡湖'],'无锡大剧院':['"Wuxi Grand Theatre"','"Wuxi Grand Theater"'],'回龙窝历史文化街区':['"Huilongwo"','回龙窝'],'彭城广场商圈':['"Pengcheng Square"','彭城广场'],'采芝斋 · 糖果与苏式零食':['采芝斋','Caizhizhai'],'黄天源 · 糕团与时令点心':['黄天源'],'三凤桥 · 酱排骨品牌线索':['三凤桥'],'同得兴 · 嘉馀坊店':['同得兴'],'沛县汉城公园':['汉城公园 沛县'],'香山景区':['Xiangshan Zhangjiagang'],'艾山风景名胜区':['艾山 邳州'],'南京金箔':['"Nanjing gold leaf"','南京 金箔'],'扬州玉雕':['"Yangzhou jade carving"'],'扬州剪纸':['"Yangzhou paper cutting"'],'龙泉宝剑':['"Longquan sword"','龙泉 宝剑'],'南通蓝印花布':['"Nantong blue calico"','南通 蓝印花布'],'湖笔':['Huzhou brush','湖州 毛笔'],'东阳木雕':['"Dongyang wood carving"'],'维维豆奶':['维维 豆奶'],'香飘飘奶茶':['香飘飘 奶茶'],'熊猫炼乳':['熊猫 炼乳'],'今世缘酒':['今世缘'],'双沟酒':['双沟'],'洋河酒':['洋河 酒'],'会稽山绍兴酒':['会稽山'],'石库门黄酒':['石库门 黄酒'],'苏式鲜肉月饼':['鲜肉月饼','"pork mooncake"'],'文思豆腐':['"Wensi tofu"'],'无锡小笼包':['"Wuxi xiaolongbao"'],'茴香豆':['茴香豆'],'灯盏糕':['灯盏糕'],'定胜糕':['定胜糕'],'猫耳朵':['"Hangzhou cat ear noodles"'],'光明鲜牛奶':['光明 鲜牛奶'],'李子园甜牛奶饮料':['李子园'],'雨花茶':['雨花茶'],'金坛雀舌':['金坛 雀舌'],'九曲红梅':['九曲红梅'],'奉化千层饼':['奉化 千层饼'],'清炒虾仁':['"stir fried river shrimp"'],'金华酥饼':['金华 酥饼'],'杭白菊':['杭白菊']}
jobs=[dict(query=q,itemIds=[byname[name]],name=name)for name,terms in pairs.items()if name in byname for q in terms];(B/'commons-plan.json').write_text(json.dumps(dict(date='2026-11-17',kind='source-led-subject-and-place-followup-not-independent-memory',jobs=jobs),ensure_ascii=False,indent=2)+'\n')
def fetch(j):
 q=j['query'];id=sha(q.encode())[:20];u='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=q,gsrnamespace=6,gsrlimit=10,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));p=R/old[q]['responseFile']if q in old else L/'commons'/(id+'.json');r=dict(j,id=id,url=old[q]['url']if q in old else u,reusedPriorResponse=q in old)
 try:
  if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=20).read())
  raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d;out=[]
  for page in sorted(d.get('query',{}).get('pages',{}).values(),key=lambda x:x.get('index',9999)):
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName');file=page['title'][5:]
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I)or not re.search(r'\.(jpe?g|png|webp)$',file,re.I):continue
   out.append(dict(id='c-'+sha(file.encode())[:16],title=file,provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],width=info.get('thumbwidth',info['width']),height=info.get('thumbheight',info['height']),author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),itemIds=j['itemIds'],metadataFile=str(p.relative_to(R)),metadataSha256=sha(raw),status='candidate-not-approved'))
  r.update(status='response-saved',responseFile=str(p.relative_to(R)),responseSha256=sha(raw),candidates=out)
 except Exception as e:r.update(status='error',error=str(e),candidates=[])
 return r
with ThreadPoolExecutor(max_workers=4)as pool:out=list(pool.map(fetch,jobs))
(B/'commons-search.json').write_text(json.dumps(dict(date='2026-11-17',checks=out),ensure_ascii=False,indent=2)+'\n');rows={}
for r in out:
 for c in r['candidates']:
  v=rows.setdefault(c['id'],dict(c));v['itemIds']=list(dict.fromkeys(v['itemIds']+c['itemIds']))
print('COMMONS',len(out),'queries',sum(x['reusedPriorResponse']for x in out),'reused',len(rows),'candidates',sum(x['status']=='error'for x in out),'errors',flush=True)
def down(r):
 p=L/'photos'/(r['id']+'.jpg')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripRegionalPhotoResearch/1.0'}),timeout=20).read())
  from PIL import Image
  Image.open(p).verify();r.update(rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=4)as pool:rows=list(pool.map(down,rows.values()))
(B/'commons-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=rows),ensure_ascii=False,indent=2)+'\n');print('DOWNLOADED',sum(x['status']=='downloaded-not-approved'for x in rows),'errors',sum(x['status']=='error'for x in rows),flush=True)

from pathlib import Path
from urllib.request import urlopen,Request
from urllib.parse import quote,unquote,urlparse
from concurrent.futures import ThreadPoolExecutor
from bs4 import BeautifulSoup
from PIL import Image
import json,hashlib,gzip,re,html
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';(L/'wiki').mkdir(exist_ok=True);sha=lambda x:hashlib.sha256(x).hexdigest();scope=json.loads((B/'scope.json').read_text())['items'];byname={r['name']:r['itemId']for r in scope};existing={r['title']:r for r in json.loads((B/'commons-candidates.json').read_text())['candidates']};old=json.loads((R/'research/china/enrichment/2026-11-16-jiangzhehu-images/candidates.json').read_text())['candidates']
for r in old:
 if r.get('rawFile'):existing.setdefault(r['file'],dict(id='c-'+r['id'],title=r['file'],provider='Wikimedia Commons',source=r['info']['descriptionurl'],preview=r.get('downloadUrl')or r['info'].get('thumburl')or r['info']['url'],rawFile=r['rawFile'],rawSha256=r['rawSha256'],metadataFile=r['metadataFile'],metadataSha256=r['metadataSha256'],description=r['info'].get('extmetadata',{}).get('ImageDescription',{}).get('value',''),author=html.unescape(re.sub('<[^>]*>','',r['info'].get('extmetadata',{}).get('Artist',{}).get('value',''))),license=r['info'].get('extmetadata',{}).get('LicenseShortName',{}).get('value',''),licenseUrl=r['info'].get('extmetadata',{}).get('LicenseUrl',{}).get('value','')))
pairs={'江南大学 · 蠡湖校区':[('en','Jiangnan University')],'无锡大剧院':[('en','Wuxi Grand Theatre'),('zh','无锡大剧院')],'回龙窝历史文化街区':[('zh','回龙窝历史文化街区')],'彭城广场商圈':[('zh','彭城广场')],'采芝斋 · 糖果与苏式零食':[('zh','采芝斋')],'黄天源 · 糕团与时令点心':[('zh','黄天源')],'三凤桥 · 酱排骨品牌线索':[('zh','三凤桥')],'龙泉宝剑':[('en','Longquan sword'),('zh','龙泉剑')],'南京金箔':[('zh','南京金箔')],'扬州剪纸':[('zh','扬州剪纸')],'苏州宋锦':[('en','Song brocade'),('zh','宋锦')],'南通蓝印花布':[('zh','蓝印花布')],'湖笔':[('zh','湖笔')],'文思豆腐':[('en','Wensi tofu')],'苏式鲜肉月饼':[('zh','鲜肉月饼'),('zh','苏式月饼')],'南京鸭血粉丝汤':[('en','Duck blood and vermicelli soup')],'金华火腿':[('en','Jinhua ham')],'茴香豆':[('zh','茴香豆')],'定胜糕':[('en','Dingsheng cake')],'猫耳朵':[('zh','貓耳朵_(麵食)')],'金华两头乌猪':[('en','Jinhua pig')],'嘉定梅山猪':[('en','Meishan pig')],'枫泾猪':[('en','Fengjing pig')],'焦溪二花脸猪':[('en','Erhualian')],'湖州湖羊':[('en','Hu sheep')],'常山胡柚':[('zh','胡柚')],'黄岩东魁杨梅':[('zh','东魁杨梅')],'金华酥饼':[('zh','金华酥饼')],'东阳木雕':[('en','Dongyang wood carving')]}
jobs=[dict(name=n,itemIds=[byname[n]],lang=lang,title=t,url='https://'+lang+'.wikipedia.org/wiki/'+quote(t.replace(' ','_')))for n,terms in pairs.items()if n in byname for lang,t in terms];(B/'wiki-plan.json').write_text(json.dumps(dict(date='2026-11-17',kind='source-led-photo-pointer-followup-not-article-fact-adoption',jobs=jobs),ensure_ascii=False,indent=2)+'\n')
def get(u):
 p=L/'wiki'/(sha(u.encode())[:20]+'.html.gz')
 if p.exists():raw=gzip.decompress(p.read_bytes())
 else:
  raw=urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0 (personal cultural guide)'}),timeout=15).read();p.write_bytes(gzip.compress(raw,compresslevel=1,mtime=0))
 return raw,p
def fetch(j):
 r=dict(j)
 try:
  raw,p=get(j['url']);soup=BeautifulSoup(raw,'html.parser');photos=[];seen=set()
  for img in soup.select('.infobox img, .mw-parser-output img, figure img'):
   src=img.get('src','');a=img.find_parent('a');href=a.get('href','')if a else''
   if not re.search(r'(?:File:|文件:)',unquote(href))or int(img.get('width',0)or 0)<150:continue
   title=re.split(r'(?:File:|文件:)',unquote(href))[-1].replace('_',' ')
   if title in seen or any(t in title.lower()for t in ['logo','map','flag','.svg','coat of']):continue
   seen.add(title);photos.append(dict(file=title,articleImage=src,caption=(img.find_parent('figure').get_text(' ',strip=True)if img.find_parent('figure')else img.get('alt',''))))
   if len(photos)>=3:break
  r.update(status='article-pointer-read-not-photo-approved',responseFile=str(p.relative_to(R)),responseSha256=sha(p.read_bytes()),photos=photos)
 except Exception as e:r.update(status='error',error=str(e),photos=[])
 return r
with ThreadPoolExecutor(max_workers=3)as pool:out=list(pool.map(fetch,jobs))
(B/'wiki-pointers.json').write_text(json.dumps(dict(date='2026-11-17',checks=out),ensure_ascii=False,indent=2)+'\n');print('Wiki pointers',len(out),'read',sum(x['status']!='error'for x in out),flush=True);wanted={}
for r in out:
 for p in r['photos']:
  o=wanted.setdefault(p['file'],dict(p,itemIds=[],articleSources=[]));o['itemIds']=list(dict.fromkeys(o['itemIds']+r['itemIds']));o['articleSources'].append(r['url'])
def media(r):
 file=r['file'];u='https://commons.wikimedia.org/wiki/File:'+quote(file.replace(' ','_'));v=dict(id='c-'+sha(file.encode())[:16],title=file,provider='Wikimedia Commons',source=u,itemIds=r['itemIds'],articleSources=r['articleSources'])
 try:
  if file in existing:
   v.update({k:x for k,x in existing[file].items()if k not in ['itemIds','id']});v['id']='c-'+sha(file.encode())[:16];v.update(status='downloaded-not-approved',reusedSavedSource=True);return v
  raw,p=get(u);soup=BeautifulSoup(raw,'html.parser');shorts=soup.select('.licensetpl_short');links=soup.select('.licensetpl_link');pairs=list(zip(shorts,links));pair=next(((sh,li)for sh,li in pairs if sh.get_text(' ',strip=True).startswith(('CC BY','CC0','Public domain'))),None);assert pair,'File-specific reusable license not parsed';short,link=pair;lic=short.get_text(' ',strip=True);licenseUrl=link.get_text(' ',strip=True);licenseUrl=(link.find('a')or{}).get('href',licenseUrl);author=soup.select_one('#fileinfotpl_aut');author=author.find_next_sibling('td').get_text(' ',strip=True)if author else'';im=soup.select_one('.fullImageLink img');assert im,'No full image preview';url=im['src'];url='https:'+url if url.startswith('//')else url;image=L/'photos'/(v['id']+'.jpg')
  if not image.exists():image.write_bytes(urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  photo=Image.open(image);photo.verify();v.update(preview=url,width=photo.width,height=photo.height,license=lic,licenseUrl=licenseUrl,author=author,metadataFile=str(p.relative_to(R)),metadataSha256=sha(p.read_bytes()),rawFile=str(image.relative_to(R)),rawSha256=sha(image.read_bytes()),description=soup.select_one('#fileinfotpl_desc').find_next_sibling('td').get_text(' ',strip=True)if soup.select_one('#fileinfotpl_desc')else'',status='downloaded-not-approved')
 except Exception as e:v.update(status='error',error=str(e))
 return v
with ThreadPoolExecutor(max_workers=3)as pool:results=list(pool.map(media,wanted.values()))
(B/'wiki-media.json').write_text(json.dumps(dict(date='2026-11-17',candidates=results),ensure_ascii=False,indent=2)+'\n');print('Wiki photos',len(results),'available',sum(x['status']!='error'for x in results),'errors',sum(x['status']=='error'for x in results),flush=True)

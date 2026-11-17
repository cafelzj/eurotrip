"""Read food category pages, then retain file metadata and real-photo candidates."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import quote,urlencode,unquote
from concurrent.futures import ThreadPoolExecutor
import json,hashlib,gzip,re,html
from PIL import Image
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';L=R/'research/.local/jiangzhehu-images-20261117-03';sha=lambda x:hashlib.sha256(x).hexdigest()
for folder in ['categories','responses','photos']:(L/folder).mkdir(exist_ok=True)
scope=json.loads((B/'scope.json').read_text())['items'];files={};logs=[]
seeds=json.loads((B/'category-followup-plan.json').read_text())['categories']
def category(name):
 u='https://commons.wikimedia.org/wiki/Category:'+quote(name.replace(' ','_'));p=L/'categories'/(sha(u.encode())[:20]+'.html.gz');log=dict(category=name,url=u);titles=[];subs=[]
 try:
  if not p.exists():p.write_bytes(gzip.compress(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read()))
  raw=gzip.decompress(p.read_bytes());s=raw.decode();start=s.find('id="mw-category-media"');end=s.find('id="mw-normal-catlinks"',start);gallery=s[start:end if end!=-1 else len(s)];titles=list(dict.fromkeys(html.unescape(unquote(x)).replace('_',' ')for x in re.findall(r'href="/wiki/File:([^"#?]+)"',gallery)if re.search(r'\.(?:jpe?g|png|webp)$',x,re.I)));a=s.find('id="mw-subcategories"');z=s.find('id="mw-category-media"',a);sub=s[a:z]if a!=-1 and z!=-1 else'';subs=list(dict.fromkeys(html.unescape(unquote(x)).replace('_',' ')for x in re.findall(r'href="/wiki/Category:([^"#?]+)"',sub)));log.update(status='saved',responseFile=str(p.relative_to(R)),responseSha256=sha(raw),compressedSha256=sha(p.read_bytes()),fileTitles=titles,subcategories=subs)
 except Exception as e:log.update(status='error',error=str(e))
 return log
with ThreadPoolExecutor(max_workers=4)as pool:logs=list(pool.map(category,seeds))
for log in logs:
 for f in log.get('fileTitles',[]):files.setdefault(f,dict(title=f,categoryNames=[],categorySourceFiles=[]))['categoryNames'].append(log['category']);files[f]['categorySourceFiles'].append(log['responseFile'])
# Keep exact named dish subcategories as a second pass; generic navigation is excluded.
subcats=list(dict.fromkeys(c for log in logs for c in log.get('subcategories',[])if c not in seeds and not re.search('restaurant|market|food in|food stall|food shop|Food_in|Xiaolongbao|Dongpo pork|Beef|tea house',c,re.I)))[:60]
with ThreadPoolExecutor(max_workers=4)as pool:extra=list(pool.map(category,subcats))
logs+=extra
for log in extra:
 for f in log.get('fileTitles',[]):files.setdefault(f,dict(title=f,categoryNames=[],categorySourceFiles=[]))['categoryNames'].append(log['category']);files[f]['categorySourceFiles'].append(log['responseFile'])
(B/'category-followup-log.json').write_text(json.dumps(dict(date='2026-11-17',checks=logs),ensure_ascii=False,indent=2)+'\n');print('Read',len(logs),'categories;',len(files),'file titles',flush=True)
out=[];names=list(files)
for start in range(0,len(names),15):
 batch=names[start:start+15];u='https://en.wikipedia.org/w/api.php?'+urlencode(dict(action='query',format='json',titles='|'.join('File:'+f for f in batch),prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));p=L/'responses'/(sha(u.encode())[:20]+'.json')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=25).read())
  raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d
  for page in d.get('query',{}).get('pages',{}).values():
   if not page.get('imageinfo'):continue
   name=page['title'][5:];info=page['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName');src=files.get(name)
   if not src or not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):continue
   out.append(dict(src,id='c-'+sha(name.encode())[:16],provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),itemIds=[r['itemId']for r in scope if r['name']in name],metadataFile=str(p.relative_to(R)),metadataSha256=sha(raw),status='candidate-not-approved'))
 except Exception as e:print('Metadata error',start,str(e),flush=True)
 print('Metadata',min(start+15,len(names)),'/',len(names),flush=True)
def down(r):
 p=L/'photos'/(r['id']+'.jpg')
 try:
  if not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  im=Image.open(p);im.verify();r.update(width=im.width,height=im.height,rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=6)as pool:out=list(pool.map(down,out))
(B/'category-followup-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=out),ensure_ascii=False,indent=2)+'\n');print('Downloaded',sum(r['status']=='downloaded-not-approved'for r in out),'of',len(out),flush=True)

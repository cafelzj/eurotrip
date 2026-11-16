from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
import json,hashlib,time,re,html
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';folder=L/'wiki-batch';folder.mkdir(exist_ok=True);sha=lambda x:hashlib.sha256(x).hexdigest();scope=json.loads((B/'scope.json').read_text())['items'];adopted={r['itemId']for r in json.loads((B/'photo-adoption.json').read_text())['records']};jobs={}
for r in scope:
 if r['itemId']in adopted:continue
 terms=[r['name']];short=r['name'].split(' · ')[0]
 if short!=r['name']:terms.append(short)
 extra={'金华两头乌猪':['金华猪','金華豬'],'嘉定梅山猪':['梅山猪'],'焦溪二花脸猪':['二花脸猪'],'枫泾猪':['枫泾猪'],'湖州湖羊':['湖羊'],'定胜糕':['定勝糕'],'金华酥饼':['金華酥餅'],'猫耳朵':['貓耳朵 (麵食)'],'文思豆腐':['文思豆腐羹'],'九曲红梅':['九曲紅梅'],'南通蓝印花布':['南通藍印花布'],'香山景区':['香山 (张家港)','张家港香山'],'黄桥烧饼':['黃橋燒餅'],'天目湖砂锅鱼头':['天目湖砂鍋魚頭'],'景宁惠明茶':['惠明茶']}.get(r['name'],[]);terms+=extra
 for t in terms:jobs.setdefault(t,[]).append(r['itemId'])
(B/'wiki-batch-plan.json').write_text(json.dumps(dict(date='2026-11-17',subjects=jobs,notes='目录名称与明确的繁简／同物名称作批量页面图片查询，不把页面首图或转向视为主体已核定。'),ensure_ascii=False,indent=2)+'\n');log=[];pictures={};names=list(jobs)
def api(params):
 u='https://zh.wikipedia.org/w/api.php?'+urlencode(dict(action='query',format='json',**params));key=sha(u.encode())[:20];p=folder/(key+'.json')
 if not p.exists():
  time.sleep(3.5);p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
 raw=p.read_bytes();d=json.loads(raw);assert 'error'not in d,d.get('error');return d,dict(url=u,responseFile=str(p.relative_to(R)),responseSha256=sha(raw))
for start in range(0,len(names),40):
 batch=names[start:start+40]
 try:
  d,record=api(dict(titles='|'.join(batch),prop='pageimages|images',piprop='name|thumbnail|original',pithumbsize=960,imlimit=10,redirects=1,converttitles=1));q=d.get('query',{});aliases={r['from']:r['to']for k in ['normalized','converted','redirects']for r in q.get(k,[])};pages={r['title']:r for r in q.get('pages',{}).values()}
  for name in batch:
   title=name;seen=set()
   while title in aliases and title not in seen:seen.add(title);title=aliases[title]
   p=pages.get(title,{})
   for file in list(dict.fromkeys(([p['pageimage']]if p.get('pageimage')else[])+[im['title'][5:]for im in p.get('images',[])if im['title'].startswith('File:')])):
    file=file.replace('_',' ')
    if not re.search(r'\.(jpe?g|png|webp)$',file,re.I)or any(x in file.lower()for x in ['logo','map','flag','.svg','question','icon','coat of']):continue
    x=pictures.setdefault(file,dict(title=file,itemIds=[],articleTitles=[],articleSourceFiles=[]));x['itemIds']=list(dict.fromkeys(x['itemIds']+jobs[name]));x['articleTitles']=list(dict.fromkeys(x['articleTitles']+[title]));x['articleSourceFiles']=list(dict.fromkeys(x['articleSourceFiles']+[record['responseFile']]))
  record.update(status='saved',subjects=batch)
 except Exception as e:record=dict(status='error',subjects=batch,error=str(e))
 log.append(record)
 if start%160==0:print('WIKI BATCH',min(start+40,len(names)),'/',len(names),'candidate files',len(pictures),flush=True)
(B/'wiki-batch-log.json').write_text(json.dumps(dict(date='2026-11-17',checks=log),ensure_ascii=False,indent=2)+'\n');out=[];files=list(pictures)
for start in range(0,len(files),40):
 batch=files[start:start+40]
 try:
  d,record=api(dict(titles='|'.join('File:'+f for f in batch),prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));pages=d.get('query',{}).get('pages',{})
  for p in pages.values():
   if not p.get('imageinfo'):continue
   file=p['title'][5:];info=p['imageinfo'][0];m=info.get('extmetadata',{});plain=lambda k:html.unescape(re.sub('<[^>]*>','',str(m.get(k,{}).get('value',''))));lic=plain('LicenseShortName')
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):continue
   src=pictures.get(file)
   if src is None:continue
   out.append(dict(src,id='c-'+sha(file.encode())[:16],provider='Wikimedia Commons',source=info['descriptionurl'],preview=info.get('thumburl')or info['url'],author=plain('Artist'),license=lic,licenseUrl=plain('LicenseUrl'),description=plain('ImageDescription'),metadataFile=record['responseFile'],metadataSha256=record['responseSha256'],status='candidate-not-approved'))
 except Exception as e:log.append(dict(status='imageinfo-error',files=batch,error=str(e)))
existing={r['id']:r for name in ['commons-candidates','wiki-media']for r in json.loads((B/(name+'.json')).read_text())['candidates']if r.get('rawFile')}
def download(r):
 p=L/'photos'/(r['id']+'.jpg')
 try:
  if r['id']in existing:
   x=existing[r['id']];p=R/x['rawFile']
  elif not p.exists():p.write_bytes(urlopen(Request(r['preview'],headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  im=Image.open(p);im.verify();r.update(width=im.width,height=im.height,rawFile=str(p.relative_to(R)),rawSha256=sha(p.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=4)as pool:out=list(pool.map(download,out))
(B/'wiki-api-candidates.json').write_text(json.dumps(dict(date='2026-11-17',candidates=out),ensure_ascii=False,indent=2)+'\n');(B/'wiki-batch-log.json').write_text(json.dumps(dict(date='2026-11-17',checks=log),ensure_ascii=False,indent=2)+'\n');print('WIKI BATCH DONE',len(names),'titles',len(out),'candidates',sum(x['status']=='downloaded-not-approved'for x in out),'downloaded',flush=True)

"""Search Commons for specific card subjects, preserve metadata and originals for visual review."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request,urlopen
from urllib.parse import urlencode
import json,hashlib,re,html,time
R=Path(__file__).resolve().parents[2];L=R/'research/.local/southwest-20261115/photos';L.mkdir(exist_ok=True)
jobs=[('麻婆豆腐','Mapo tofu'),('成都担担面','Dandan noodles'),('夫妻肺片','Fuqi feipian'),('乐山钵钵鸡','Bobo chicken'),('宜宾燃面','Yibin burning noodles'),('重庆火锅','Chongqing hot pot'),('重庆小面','Chongqing noodles'),('毛血旺','Maoxuewang'),('万州烤鱼','Wanzhou grilled fish'),('蒙自过桥米线','Crossing the bridge noodles'),('大理乳扇','Rushan cheese'),('汽锅鸡','Steam pot chicken'),('喜洲粑粑','Xizhou baba'),('烧饵块','Erkuai'),('丝娃娃','Siwawa'),('肠旺面','Changwang noodles'),('凯里酸汤鱼','Suantang fish'),('建水紫陶','Jianshui pottery'),('酥油茶','Tibetan butter tea'),('糌粑','Tsampa')]
sha=lambda b:hashlib.sha256(b).hexdigest()
def request(url):
 time.sleep(1.2)
 with urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=30)as f:return f.read()
def search(job):
 subject,query=job;key=sha(query.encode())[:12];file=L/f'search-{key}.json';url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=query,gsrnamespace=6,gsrlimit=3,prop='imageinfo',iiprop='url|extmetadata|size'))
 row=dict(subject=subject,query=query,url=url)
 try:
  if not file.exists():file.write_bytes(request(url))
  data=json.loads(file.read_bytes());out=[]
  for p in data.get('query',{}).get('pages',{}).values():
   if not p.get('imageinfo'):continue
   info=p['imageinfo'][0];lic=info.get('extmetadata',{}).get('LicenseShortName',{}).get('value','')
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):continue
   if not info['url'].split('?')[0].lower().endswith(('.jpg','.jpeg','.png','.webp')):continue
   out.append(dict(subject=subject,query=query,file=p['title'][5:],info=info,metadataFile=file.relative_to(R).as_posix(),metadataSha256=sha(file.read_bytes())))
  row.update(status='metadata-read-awaiting-visual-review',responseFile=file.relative_to(R).as_posix(),responseSha256=sha(file.read_bytes()),eligibleCandidates=len(out));return row,out[:2]
 except Exception as e:row.update(status='search-error',error=str(e));return row,[]
with ThreadPoolExecutor(max_workers=1)as pool:responses=list(pool.map(search,jobs))
rows=[r for r,x in responses];records=[r for x,rs in responses for r in rs]
def download(row):
 ident=sha(row['file'].encode())[:14];path=L/(ident+'.original');url=row['info']['url'].split('?')[0];row.update(id=ident,url=url)
 try:
  if not path.exists():path.write_bytes(request(url))
  row.update(read=True,rawFile=path.relative_to(R).as_posix(),sha256=sha(path.read_bytes()));print('DOWNLOADED',row['subject'],row['file'],flush=True)
 except Exception as e:row.update(read=False,error=str(e));print('FAILED',row['file'],str(e),flush=True)
 return row
with ThreadPoolExecutor(max_workers=1)as pool:records=list(pool.map(download,records))
(L/'download-index.json').write_text(json.dumps(dict(searches=rows,records=records),ensure_ascii=False,indent=2)+'\n')
from PIL import Image,ImageOps,ImageDraw
valid=[r for r in records if r.get('read')];sheet=Image.new('RGB',(1200,((len(valid)+3)//4)*230),'white');draw=ImageDraw.Draw(sheet)
for i,r in enumerate(valid):
 image=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');image.thumbnail((290,195));x=(i%4)*300;y=(i//4)*230;sheet.paste(image,(x+(290-image.width)//2,y));draw.text((x+5,y+197),str(i)+' '+r['id'],fill='black')
sheet.save('/tmp/southwest/photo-review.jpg');print('READY',len(valid),'originals,',len(rows),'subjects')

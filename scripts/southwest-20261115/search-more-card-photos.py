"""Broaden exact food names and local crafts; use Commons-rendered thumbnails when available."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError
from PIL import Image,ImageOps,ImageDraw
import json,hashlib,re,time,datetime,html
R=Path(__file__).resolve().parents[2];L=R/'research/.local/southwest-20261115/photos/more';L.mkdir(exist_ok=True)
jobs=[('丝娃娃','"丝娃娃"'),('肠旺面','"肠旺面"'),('凯里酸汤鱼','"酸汤鱼"'),('肠旺面','Guiyang noodles'),('凯里酸汤鱼','Guizhou sour fish'),('五粮液','Wuliangye'),('泸州老窖','Luzhou Laojiao'),('郎酒','Langjiu'),('贵州茅台酒','Moutai'),('董酒','Dongjiu'),('宣威火腿','Xuanwei ham'),('建水紫陶','Jianshui purple pottery'),('安顺蜡染','Anshun batik'),('汶川羌绣','Qiang embroidery'),('蜀锦','Shu brocade'),('荥经砂器','Yingjing pottery'),('喜洲粑粑','"喜洲粑粑"'),('烧饵块','"饵块"'),('大理乳扇','grilled Rushan cheese'),('酥油茶','"酥油茶"'),('糌粑','"糌粑"'),('都匀毛尖茶','Duyun Maojian'),('红原牦牛奶','"红原牦牛奶"'),('郫县豆瓣','Pixian douban'),('保宁醋','Baoning vinegar')]
sha=lambda b:hashlib.sha256(b).hexdigest();rows=[];records=[]
for subject,query in jobs:
 key=sha(query.encode())[:12];p=L/(key+'.json');url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=query,gsrnamespace=6,gsrlimit=4,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));row=dict(subject=subject,query=query,url=url,checkedAt=datetime.datetime.now(datetime.timezone.utc).isoformat())
 try:
  if not p.exists():
   time.sleep(2)
   with urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=25)as f:p.write_bytes(f.read())
  data=json.loads(p.read_bytes());pages=list(data.get('query',{}).get('pages',{}).values());row.update(status='metadata-read-awaiting-visual-review',responseFile=p.relative_to(R).as_posix(),responseSha256=sha(p.read_bytes()),resultCount=len(pages))
  eligible=[]
  for page in pages:
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];lic=info.get('extmetadata',{}).get('LicenseShortName',{}).get('value','')
   if not re.search(r'CC(?: ?0| BY)|Public domain',lic,re.I):continue
   if not info['url'].split('?')[0].lower().endswith(('.jpg','.jpeg','.png','.webp')):continue
   eligible.append((page,info))
  for page,info in eligible[:2]:
   ident=sha(page['title'].encode())[:14];f=L/(ident+'.response');imgurl=info.get('thumburl')or info['url'].split('?')[0];rec=dict(id=ident,subject=subject,file=page['title'][5:],info=info,url=imgurl,downloadKind='commons-rendered-thumbnail'if info.get('thumburl')else 'original',metadataFile=p.relative_to(R).as_posix(),metadataSha256=sha(p.read_bytes()))
   try:
    if not f.exists():
     time.sleep(1)
     with urlopen(Request(imgurl,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=30)as resp:f.write_bytes(resp.read())
    Image.open(f).verify();rec.update(read=True,rawFile=f.relative_to(R).as_posix(),sha256=sha(f.read_bytes()));print('PHOTO',subject,page['title'],flush=True)
   except Exception as e:rec.update(read=False,error=str(e));print('PHOTO ERROR',subject,str(e),flush=True)
   records.append(rec)
 except Exception as e:row.update(status='search-error',error=str(e));print('SEARCH ERROR',subject,str(e),flush=True)
 rows.append(row)
 (L/'download-index.json').write_text(json.dumps(dict(searches=rows,records=records),ensure_ascii=False,indent=2)+'\n')
valid=[r for r in records if r.get('read')];sheet=Image.new('RGB',(1200,max(230,((len(valid)+3)//4)*230)),'white');draw=ImageDraw.Draw(sheet)
for i,r in enumerate(valid):
 image=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');image.thumbnail((290,195));x=i%4*300;y=i//4*230;sheet.paste(image,(x+(290-image.width)//2,y));draw.text((x+4,y+197),str(i)+' '+r['id'],fill='black')
sheet.save('/tmp/southwest/photos-more.jpg');print('READY',len(valid),'downloaded candidates',flush=True)

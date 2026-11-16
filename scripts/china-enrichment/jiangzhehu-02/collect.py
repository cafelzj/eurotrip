"""Collect photo pages and unmodified Flickr responses for concentrated human review."""
from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor,as_completed
from PIL import Image,ImageOps,ImageDraw,ImageFont
import json,hashlib,gzip,re,html,shutil
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-02';L=R/'research/.local/jiangzhehu-images-20261117-02';read=lambda p:json.loads(p.read_text());sha=lambda raw:hashlib.sha256(raw).hexdigest();save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
for name in ['pages','photos','contacts']:(L/name).mkdir(exist_ok=True)
rows={}
for q in [json.loads(s)for s in(B/'query-log.jsonl').read_text().splitlines()]:
 for rank,r in enumerate(q['candidates']):
  old=rows.setdefault(r['id'],dict(r,queryIds=[],rank=rank))
  old['itemIds']=list(dict.fromkeys(old['itemIds']+r['itemIds']));old['queryIds']=list(dict.fromkeys(old['queryIds']+[q['id']]))
def fetch(r):
 p=L/'pages'/(r['id']+'.html.gz');image=L/'photos'/(r['id']+'.jpg')
 try:
  if p.exists():raw=gzip.decompress(p.read_bytes())
  else:
   with urlopen(Request(r['source'],headers={'User-Agent':'Mozilla/5.0 EurotripRegionalPhotoResearch/1.0'}),timeout=20)as f:raw=f.read()
   p.write_bytes(gzip.compress(raw,compresslevel=1,mtime=0))
  s=raw.decode();objects=[]
  for block in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',s,re.S):
   d=json.loads(block);objects+=d.get('@graph',[d])
  obj=next(o for o in objects if o.get('@type')=='ImageObject');license=obj.get('license','');assert any(t in license for t in ['/licenses/by','/publicdomain/']),'Image page has no selected public-use license';title=html.unescape(re.search(r'<meta property="og:title" content="([^"]+)',s)[1]);r.update(title=title,licenseUrl=license,author=obj['creator']['name'],pageDescription=(obj.get('description','')[:24]+('…'if len(obj.get('description',''))>24 else'')),descriptionPreviewOnly=True,completeDescriptionIn=str(p.relative_to(R)),metadataFile=str(p.relative_to(R)),metadataSha256=sha(p.read_bytes()))
  if not image.exists():
   with urlopen(Request(r['preview'],headers={'User-Agent':'Mozilla/5.0 EurotripRegionalPhotoResearch/1.0'}),timeout=25)as f:data=f.read()
   Image.open(__import__('io').BytesIO(data)).verify();image.write_bytes(data)
  im=Image.open(image);r.update(width=im.width,height=im.height,rawFile=str(image.relative_to(R)),rawSha256=sha(image.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
out=[]
with ThreadPoolExecutor(max_workers=8)as pool:
 for i,f in enumerate(as_completed([pool.submit(fetch,r)for r in rows.values()]),1):
  out.append(f.result())
  if i%25==0:print('COLLECTED',i,'/',len(rows),flush=True)
out.sort(key=lambda r:r['id']);save(B/'candidates.json',dict(date='2026-11-17',selection='All unique eligible results returned by the saved search pages; candidates are not approvals.',candidates=out));valid=[r for r in out if r['status']=='downloaded-not-approved'];scope={r['itemId']:r for r in read(B/'scope.json')['items']};font=ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc',15)
for start in range(0,len(valid),32):
 sheet=Image.new('RGB',(1280,8*230),'white');draw=ImageDraw.Draw(sheet)
 for i,r in enumerate(valid[start:start+32]):
  im=ImageOps.exif_transpose(Image.open(R/r['rawFile']));im.thumbnail((308,176));x=(i%4)*320;y=(i//4)*230;sheet.paste(im.convert('RGB'),(x+(308-im.width)//2,y));draw.text((x+2,y+177),str(start+i)+' '+r['id']+' '+r['title'][:10],font=font,fill='black');draw.text((x+2,y+198),' / '.join(scope[id]['name']for id in r['itemIds'])[:22],font=font,fill='black')
 sheet.save(L/'contacts'/f'contact-{start//32:02}.jpg')
save(B/'contact-index.json',dict(items=[dict(index=i,id=r['id'],title=r['title'],itemIds=r['itemIds'])for i,r in enumerate(valid)]));print('DONE',len(valid),'downloaded;',sum(r['status']=='error'for r in out),'errors',flush=True)

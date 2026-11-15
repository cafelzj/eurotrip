"""Find specific-subject Commons real photos; preserve metadata, download and review separately."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
import time,json,re,hashlib
from PIL import Image,ImageOps,ImageDraw
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000/photos/keywords';L.mkdir(parents=True,exist_ok=True)
jobs=json.loads((B/'photo-keyword-plan.json').read_text())['jobs'];items=jobs;qs=[j['query']for j in jobs];rows=[];logs=[]
sha=lambda b:hashlib.sha256(b).hexdigest()
def get(url):
 for attempt in range(4):
  try:
   time.sleep(1.3)
   with urlopen(Request(url,headers={'User-Agent':'EurotripCuratedPhotoResearch/1.0'}),timeout=25)as res:return res.read()
  except Exception as e:
   if attempt==3:raise
   time.sleep(min(3*(attempt+1),10))
for item,q in zip(items,qs):
 key=sha(q.encode())[:12];p=L/f'search-{key}.json';url='https://commons.wikimedia.org/w/api.php?'+urlencode(dict(action='query',format='json',generator='search',gsrsearch=q,gsrnamespace=6,gsrlimit=3,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=960));log=dict(itemId=item['itemId'],subject=item['name'],query=q,url=url)
 try:
  if not p.exists():p.write_bytes(get(url))
  log.update(status='search-only-awaiting-visual-review',responseFile=str(p.relative_to(R)),responseSha256=sha(p.read_bytes()));found=json.loads(p.read_bytes()).get('query',{}).get('pages',{})
  for page in found.values():
   if not page.get('imageinfo'):continue
   info=page['imageinfo'][0];license=str(info.get('extmetadata',{}).get('LicenseShortName',{}).get('value',''))
   if not re.search(r'CC(?: ?0| BY)|Public domain',license,re.I):continue
   title=page['title'][5:]
   if not re.search(r'\.(jpe?g|png|webp)$',title,re.I):continue
   ident=sha(title.encode())[:14];f=L/(ident+'.original');r=dict(id=ident,itemId=item['itemId'],itemName=item['name'],file=title,info=info,metadataFile=str(p.relative_to(R)),metadataSha256=sha(p.read_bytes()))
   try:
    if not f.exists():f.write_bytes(get(info.get('thumburl')or info['url']))
    Image.open(f).verify();r.update(status='downloaded-awaiting-visual-review',rawFile=str(f.relative_to(R)),rawSha256=sha(f.read_bytes()))
   except Exception as e:r.update(status='download-error',error=str(e))
   rows.append(r)
  print('SEARCH',item['name'],len(found),flush=True)
 except Exception as e:log.update(status='search-error',error=str(e));print('FAILED',item['name'],str(e),flush=True)
 logs.append(log);(B/'photo-keyword-search.json').write_text(json.dumps(dict(date='2026-11-15',queries=logs,candidates=rows),ensure_ascii=False,indent=2)+'\n')
valid=[r for r in rows if r['status']=='downloaded-awaiting-visual-review'];out=Image.new('RGB',(1000,((len(valid)+3)//4)*190),'white');draw=ImageDraw.Draw(out)
for i,r in enumerate(valid):
 im=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');im.thumbnail((240,160));x=(i%4)*250;y=(i//4)*190;out.paste(im,(x+(240-im.width)//2,y));draw.text((x+4,y+162),str(i)+' '+r['id'],fill='black')
out.save('/tmp/national-1000-keywords.jpg');print('CANDIDATES',len(valid),flush=True)

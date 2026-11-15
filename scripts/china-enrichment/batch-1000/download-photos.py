"""Download photo candidates for visual review; downloading never means adoption."""
from pathlib import Path
from urllib.request import Request,urlopen
from PIL import Image,ImageOps,ImageDraw
import json,hashlib,time
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000/photos';d=json.loads((B/'photo-search.json').read_text());rows=[]
for r in d['candidates']:
 p=L/(r['id']+'.original');r=dict(r)
 try:
  if not p.exists():
   time.sleep(1.5)
   with urlopen(Request(r['info'].get('thumburl')or r['info']['url'],headers={'User-Agent':'EurotripSpecificPhotoResearch/1.0'}),timeout=30)as f:p.write_bytes(f.read())
  Image.open(p).verify();r.update(downloadStatus='downloaded-awaiting-review',rawFile=str(p.relative_to(R)),rawSha256=hashlib.sha256(p.read_bytes()).hexdigest());print('PHOTO',len(rows),r['file'],flush=True)
 except Exception as e:r.update(downloadStatus='download-error',error=str(e))
 rows.append(r)
(L/'download-index.json').write_text(json.dumps(dict(records=rows),ensure_ascii=False,indent=2)+'\n');valid=[r for r in rows if r['downloadStatus']=='downloaded-awaiting-review'];out=Image.new('RGB',(1000,((len(valid)+3)//4)*190),'white');draw=ImageDraw.Draw(out)
for i,r in enumerate(valid):
 im=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');im.thumbnail((240,160));x=i%4*250;y=i//4*190;out.paste(im,(x+(240-im.width)//2,y));draw.text((x+4,y+162),str(i)+' '+r['id'],fill='black')
out.save(str(L/'contact-exact.jpg'));print('CONTACT',len(valid),flush=True)

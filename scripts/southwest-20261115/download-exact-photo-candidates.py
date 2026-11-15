"""Fetch explicitly shortlisted real-photo candidates; visual approval remains separate."""
from pathlib import Path
from urllib.request import Request,urlopen
from PIL import Image,ImageOps,ImageDraw
import json,hashlib,time
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115/photos/exact-selected';L.mkdir(exist_ok=True)
allrows=json.loads((B/'image-exact-search.json').read_text())['candidates'];selected=[0,7,9,10,14,29,36,44,54,58,61,62,63,68,71,73,74];rows=[];sha=lambda b:hashlib.sha256(b).hexdigest()
for index in selected:
 row=dict(allrows[index]);name=row['file'];ident=sha(('exact:'+name).encode())[:14];info=row['info'];original=info['url'].split('?')[0];tail=original.split('/commons/',1)[1];base=tail.rsplit('/',1)[-1];url=original if info.get('width',0)<=960 else 'https://upload.wikimedia.org/wikipedia/commons/thumb/'+tail+'/960px-'+base;target=L/(ident+'.response');row.update(id=ident,candidateIndex=index,subject='、'.join(row['names']),url=url,downloadKind='original'if url==original else 'commons-rendered-thumbnail')
 try:
  if not target.exists():
   time.sleep(1.5)
   with urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=30)as f:target.write_bytes(f.read())
  Image.open(target).verify();row.update(read=True,rawFile=target.relative_to(R).as_posix(),sha256=sha(target.read_bytes()));print('PHOTO',index,name,flush=True)
 except Exception as e:row.update(read=False,error=str(e));print('FAILED',index,str(e),flush=True)
 rows.append(row);(L/'download-index.json').write_text(json.dumps(dict(records=rows),ensure_ascii=False,indent=2)+'\n')
valid=[r for r in rows if r.get('read')];sheet=Image.new('RGB',(1200,max(230,((len(valid)+3)//4)*230)),'white');draw=ImageDraw.Draw(sheet)
for i,r in enumerate(valid):
 im=ImageOps.exif_transpose(Image.open(R/r['rawFile'])).convert('RGB');im.thumbnail((290,195));x=i%4*300;y=i//4*230;sheet.paste(im,(x+(290-im.width)//2,y));draw.text((x+4,y+197),str(i)+' '+r['id'],fill='black')
sheet.save('/tmp/southwest/photos-exact-selected.jpg');print('READY',len(valid),'photo candidates',flush=True)

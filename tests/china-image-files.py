"""Check actual exported image dimensions and source ICC colour preservation."""
from pathlib import Path
import json
from PIL import Image,ImageOps
R=Path(__file__).resolve().parents[1];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';s=(R/'data/china-card-images.js').read_text();media=json.loads(s[s.index('{'):s.rfind(';')]);history=json.loads((B/'photo-adoption.json').read_text())['records'];checked=set();profiles=0
for id,key in media['cards'].items():
 if key in checked:continue
 checked.add(key);asset=media['assets'][key];record=next(r for r in reversed(history)if r['itemId']==id and r['assetId']==key);source=ImageOps.exif_transpose(Image.open(R/record['originalResponseFile']));out=Image.open(R/asset['src']);assert out.format=='JPEG'and out.mode=='RGB';assert out.size==(asset['width'],asset['height']);assert out.width<=960 and out.height<=1280;assert out.info.get('icc_profile')==source.info.get('icc_profile'),id+' ICC colour profile lost';assert out.getexif().get(274,1)==1;assert abs(out.width/out.height-source.width/source.height)<=2/min(out.size),id+' changed aspect ratio';assert asset['colorProfile']==('preserved'if source.info.get('icc_profile')else'source-without-profile');profiles+=bool(out.info.get('icc_profile'))
print('PASS',len(checked),'real-image files, exact dimensions, preserved proportions and',profiles,'source ICC colour profiles')

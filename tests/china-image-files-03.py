from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib
R=Path(__file__).resolve().parents[1];B=R/'research/china/enrichment/2026-11-17-jiangzhehu-images-03';s=(R/'data/china-card-images.js').read_text();m=json.loads(s[s.index('{'):s.rfind(';')]);history=json.loads((B/'photo-adoption.json').read_text())['records'];seen=set();nd=0
for r in history:
 a=m['assets'][r['assetId']]
 if a['src']in seen:continue
 seen.add(a['src']);source=ImageOps.exif_transpose(Image.open(R/r['originalResponseFile']));out=Image.open(R/a['src']);assert out.size==(a['width'],a['height']);assert out.info.get('icc_profile')==source.info.get('icc_profile');assert abs(out.width/out.height-source.width/source.height)<2/min(out.size)
 if '-ND'in a['license']:
  assert (R/a['src']).read_bytes()==(R/r['originalResponseFile']).read_bytes();assert a['fit']=='contain';nd+=1
 else:assert out.width<=960 and out.height<=1280
print('PASS',len(seen),'distinct real-image files used by the batch,',nd,'ND files unchanged byte for byte, ICC and proportions preserved')

from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import json,hashlib,re
B=Path('research/china/enrichment/2026-11-17-jiangzhehu-images-02');L=Path('research/.local/jiangzhehu-images-20261117-02');sha=lambda b:hashlib.sha256(b).hexdigest();scope=json.loads((B/'scope.json').read_text())['items'];byname={r['name']:r['itemId']for r in scope};jobs=[('6902007505264',['恒顺香醋','镇江香醋']),('6902007505271',['恒顺香醋','镇江香醋']),('6938888888837',['香飘飘奶茶']),('6938888888813',['香飘飘奶茶']),('6938888884914',['香飘飘奶茶'])]
def fetch(job):
 code,names=job;u='https://world.openfoodfacts.org/api/v2/product/'+code+'.json';p=L/'off'/('product-'+code+'.json');r=dict(id='off-'+code,provider='Open Food Facts',source='https://world.openfoodfacts.org/product/'+code,itemIds=[byname[n]for n in names if n in byname])
 try:
  if not p.exists():p.write_bytes(urlopen(Request(u,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=15).read())
  raw=p.read_bytes();d=json.loads(raw)['product'];url=d['image_front_url'].replace('.400.jpg','.full.jpg');lang=re.search(r'/front_(\w+)\.',url)[1];front=d['images']['front_'+lang];imgid=str(front['imgid']);author=d['images'].get(imgid,{}).get('uploader')or d.get('creator');assert author;image=L/'photos'/('off-'+code+'.jpg')
  if not image.exists():image.write_bytes(urlopen(Request(url,headers={'User-Agent':'EurotripPhotoResearch/1.0'}),timeout=20).read())
  im=Image.open(image);im.verify();r.update(title=d.get('product_name')or d.get('product_name_en')or d.get('brands'),description=d.get('brands',''),preview=url,width=im.width,height=im.height,author=author,license='CC BY-SA 3.0',licenseUrl='https://creativecommons.org/licenses/by-sa/3.0/',metadataFile=str(p),metadataSha256=sha(raw),rawFile=str(image),rawSha256=sha(image.read_bytes()),status='downloaded-not-approved')
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=5)as pool:out=list(pool.map(fetch,jobs))
(B/'off-candidates.json').write_text(json.dumps(dict(date='2026-11-17',photoLicenseReference='docs/card-images.md',candidates=out),ensure_ascii=False,indent=2)+'\n');print([(x['id'],x['status'],x.get('width'),x.get('height'),x.get('error'))for x in out],flush=True)

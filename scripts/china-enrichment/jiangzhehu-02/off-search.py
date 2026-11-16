from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode
from concurrent.futures import ThreadPoolExecutor
import json,hashlib
B=Path('research/china/enrichment/2026-11-17-jiangzhehu-images-02');L=Path('research/.local/jiangzhehu-images-20261117-02');(L/'off').mkdir(exist_ok=True)
terms=['光明','恒顺','维维','香飘飘','李子园','熊猫炼乳'];out=[]
def fetch(term):
 u='https://world.openfoodfacts.org/cgi/search.pl?'+urlencode(dict(search_terms=term,search_simple=1,action='process',json=1,page_size=30));r=dict(query=term,url=u);p=L/'off'/(hashlib.sha256(u.encode()).hexdigest()[:20]+'.json')
 try:
  raw=urlopen(Request(u,headers={'User-Agent':'EurotripFoodPhotoResearch/1.0'}),timeout=12).read();d=json.loads(raw);p.write_bytes(raw);r.update(status='response-saved',responseFile=str(p),sha256=hashlib.sha256(raw).hexdigest(),count=d.get('count'),products=[dict(code=x.get('code'),name=x.get('product_name'),brands=x.get('brands'),image=x.get('image_front_url'))for x in d.get('products',[])])
 except Exception as e:r.update(status='error',error=str(e))
 return r
with ThreadPoolExecutor(max_workers=6)as pool:out=list(pool.map(fetch,terms))
(B/'off-search.json').write_text(json.dumps(dict(date='2026-11-17',checks=out),ensure_ascii=False,indent=2)+'\n')
for r in out:print(r['query'],r.get('count'),r.get('error'),r.get('products',[])[:2],flush=True)

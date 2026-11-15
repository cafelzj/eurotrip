"""Preserve source responses; fetched text is not automatically adopted."""
from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor
from bs4 import BeautifulSoup
import json,re,hashlib
R=Path(__file__).resolve().parents[2];B=R/'research/china/enrichment/2026-11-15-national-01';L=R/'research/.local/national-enrichment-20261115-01';(L/'pages').mkdir(exist_ok=True)
urls={};logs=[]
for p in sorted(L.glob('web-search-*.json')):
 d=json.loads(p.read_text());t='\n'.join(c.get('text','')for c in d['response'].get('content',[]));logs.append(dict(queries=d['queries'],responseFile=str(p.relative_to(R)),sha256=hashlib.sha256(p.read_bytes()).hexdigest()))
 for title,url in re.findall(r'^(.+?) \((https?://[^\s)]+)\)',t,re.M):
  if any(x in url for x in ['gov.cn','ihchina.cn','people.com.cn','xinhuanet.com','cnr.cn','huanqiu.com','lnd.com.cn','zjol.com.cn','voc.com.cn','chinanews.com','bohaitoday.cn','hebtv.com','hsu.edu.cn','dzu.edu.cn','shobserver.com','thepaper.cn'])and not any(x in url.lower()for x in ['.pdf','.xlsx','search_result']):urls[url]=title
(B/'web-search-log.json').write_text(json.dumps(dict(date='2026-11-15',records=logs),ensure_ascii=False,indent=2)+'\n')
previous={r['url']:r for r in json.loads((B/'source-fetch-index.json').read_text())['sources']}if (B/'source-fetch-index.json').exists()else {}
def fetch(pair):
 url,title=pair
 if previous.get(url,{}).get('status')=='fetch-error':return previous[url]
 ident=hashlib.sha256(url.encode()).hexdigest()[:16];f=L/'pages'/f'{ident}.html';out=dict(id=ident,url=url,title=title)
 try:
  if not f.exists():
   with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; EurotripResearch/1.0)'}),timeout=22)as res:f.write_bytes(res.read(5*1024*1024))
  raw=f.read_bytes();s=BeautifulSoup(raw,'html.parser')
  for node in s(['script','style','nav','header','footer','noscript']):node.decompose()
  text='\n'.join(x.strip()for x in s.get_text('\n').splitlines()if x.strip());p=f.with_suffix('.txt');p.write_text(text)
  out.update(status='fetched-awaiting-reading',rawFile=str(f.relative_to(R)),rawSha256=hashlib.sha256(raw).hexdigest(),textFile=str(p.relative_to(R)),textSha256=hashlib.sha256(p.read_bytes()).hexdigest(),characters=len(text))
  if len(text)<300 or any(x in text[:1000]for x in ['Just a moment','DDoS-Guard','验证后继续访问']):out['status']='held-nonarticle-response'
 except Exception as e:out.update(status='fetch-error',error=str(e))
 for key in ['reviewStatus','readingNotesFile']:
  if key in previous.get(url,{}):out[key]=previous[url][key]
 return out
with ThreadPoolExecutor(max_workers=8)as pool:rows=list(pool.map(fetch,urls.items()))
saved=json.dumps(dict(date='2026-11-15',note='保存成功不代表已读或采用；逐项阅读决策另存。',sources=rows),ensure_ascii=False,indent=2)+'\n';(L/f'source-fetch-run-{len(list(L.glob("source-fetch-run-*.json"))):02d}.json').write_text(saved);(B/'source-fetch-index.json').write_text(saved);print('FETCH',len(rows),'readable',sum(r['status']=='fetched-awaiting-reading'for r in rows),flush=True)

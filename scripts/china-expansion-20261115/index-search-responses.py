from pathlib import Path
import json,re,hashlib
BASE=Path('research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong');LOCAL=Path('research/.local/three-provinces-20261115');rows=[];urls={}
for p in sorted(LOCAL.glob('web-search-*.json')):
 raw=p.read_bytes();d=json.loads(raw);text='\n'.join(c.get('text','') for c in d.get('content',[]));(LOCAL/(p.stem+'.txt')).write_text(text)
 links=re.findall(r'^(.+?) \((https?://[^\s)]+)\)',text,re.M)
 for title,url in links:
  if url not in urls:urls[url]={'url':url,'title':title,'searchResponses':[]}
  urls[url]['searchResponses'].append(p.name)
 rows.append(dict(responseFile=str(p),sha256=hashlib.sha256(raw).hexdigest(),urls=len(links),status='search-results-not-article-review'))
(BASE/'search-response-index.json').write_text(json.dumps(dict(date='2026-11-15',responses=rows,results=list(urls.values())),ensure_ascii=False,indent=2)+'\n');print(len(urls),'unique result URLs from',len(rows),'preserved responses')

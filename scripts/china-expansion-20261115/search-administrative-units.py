from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
from urllib.request import Request,urlopen
from urllib.parse import urlencode
import json,hashlib,datetime,re,time
ROOT=Path(__file__).resolve().parents[2];BASE=ROOT/'research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong';LOCAL=ROOT/'research/.local/three-provinces-20261115';RAW=LOCAL/'unit-search-responses';RAW.mkdir(exist_ok=True)
places=json.loads((BASE/'place-register.json').read_text())['places'];jobs=[(p,word) for p in places for word in ['美食','特产']]
def search(job):
 p,word=job;name=p['name'];query=' '.join(dict.fromkeys([p['provinceName'],p.get('city') or '',name,word])).strip();url='https://newssearch.chinadaily.com.cn/rest/search?'+urlencode(dict(keywords=query,sort='relevance',page=0,curType='story'));key=hashlib.sha256(url.encode()).hexdigest();target=RAW/(key+'.json');record=dict(adcode=p['adcode'],level=p['level'],province=p['province'],city=p.get('city'),place=p['name'],query=query,topic='dishes' if word=='美食' else 'ingredients',url=url,checkedAt=datetime.datetime.now(datetime.timezone.utc).isoformat())
 try:
  if not target.exists():
   with urlopen(Request(url,headers={'User-Agent':'Eurotrip research/1.0'}),timeout=18) as f:body=f.read()
   json.loads(body);target.write_bytes(body)
  body=target.read_bytes();d=json.loads(body);hits=d.get('content',[]);terms=[p['name'].removesuffix('市').removesuffix('县').removesuffix('区')];matches=[r for r in hits if all(t in r.get('plainText','') for t in terms)]
  record.update(status='search-only-not-article-review',responseFile=target.relative_to(ROOT).as_posix(),responseSha256=hashlib.sha256(body).hexdigest(),resultCount=len(hits),matchedPlaceCount=len(matches),resultUrls=list(dict.fromkeys(r.get('url') or r.get('htmlUrl') or r.get('sourceUrl') for r in matches if r.get('url') or r.get('htmlUrl') or r.get('sourceUrl'))))
 except Exception as e:record.update(status='search-error',error=str(e))
 return record
records=[]
with ThreadPoolExecutor(max_workers=6) as pool:
 for i,f in enumerate(as_completed([pool.submit(search,j) for j in jobs]),1):
  records.append(f.result())
  if i%60==0:print(i,'/',len(jobs),'unit searches saved;',sum(r.get('matchedPlaceCount',0)>0 for r in records),'with geographic leads',flush=True)
  if i%100==0:(BASE/'unit-search-log.json').write_text(json.dumps(dict(date='2026-11-15',note='逐地搜索仅为候选索引；非逐品类穷尽；所有零结果和失败保留，不计为正文已读。',queries=records),ensure_ascii=False,indent=2)+'\n')
(BASE/'unit-search-log.json').write_text(json.dumps(dict(date='2026-11-15',note='逐地搜索仅为候选索引；非逐品类穷尽；所有零结果和失败保留，不计为正文已读。',queries=records),ensure_ascii=False,indent=2)+'\n');print('DONE',len(records),'unit searches',flush=True)

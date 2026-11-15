from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
from urllib.request import Request,urlopen
from urllib.error import HTTPError
from urllib.parse import urlparse
import json,hashlib,datetime,subprocess,re,html,time,gzip
from bs4 import BeautifulSoup
ROOT=Path(__file__).resolve().parents[2];BASE=ROOT/'research/china/expansions/2026-11-15-southwest';LOCAL=ROOT/'research/.local/southwest-20261115';RAW=LOCAL/'articles';RAW.mkdir(exist_ok=True)
allResults=json.loads((BASE/'search-response-index.json').read_text())['results'];previous=json.loads((BASE/'source-fetch-index.json').read_text())['sources'] if (BASE/'source-fetch-index.json').exists() else [];seen={r['url'] for r in previous};results=[r for r in allResults if r['url'] not in seen]
# Avoid duplicating known mirror URLs and retain all failures in the index.
def fetch(row):
 url=row['url'];key=hashlib.sha256(url.encode()).hexdigest()[:16];record={**row,'id':'sw-source-'+key,'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'unread','sourceType':'government' if '.gov.cn' in urlparse(url).netloc else 'media-or-organization'}
 rawfile=RAW/(key+'.raw');textfile=RAW/(key+'.txt')
 try:
  if not rawfile.exists():
   with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0 Eurotrip editorial research','Accept':'text/html,application/pdf,*/*'}),timeout=22) as f:body=f.read(12*1024*1024);contenttype=f.headers.get('Content-Type','');record['finalUrl']=f.geturl()
   rawfile.write_bytes(body)
  else:body=rawfile.read_bytes();contenttype=''
  record.update(responseFile=rawfile.relative_to(ROOT).as_posix(),responseSha256=hashlib.sha256(body).hexdigest(),responseBytes=len(body),contentType=contenttype)
  if body.startswith(b'\x1f\x8b'):
   body=gzip.decompress(body);record['contentDecoding']='gzip (raw response preserved)'
  if body.startswith(b'%PDF'):
   pdf=RAW/(key+'.pdf');pdf.write_bytes(body);subprocess.run(['pdftotext','-layout',str(pdf),str(textfile)],check=True,timeout=25,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL);text=textfile.read_text();method='pdftotext-original-response'
  else:
   soup=BeautifulSoup(body,'html.parser');encoding=soup.original_encoding
   for tag in soup(['script','style','nav','header','footer','noscript','form']):tag.decompose()
   chosen=None
   for selector in ['.TRS_Editor','.trs_editor','#UCAP-CONTENT','#zoom','#zoomcon','.article-content','.article_content','.rich_media_content','article','main','#articleContent','#content','.content']:
    for node in soup.select(selector):
     t=node.get_text('\n',strip=True)
     if len(t)>250 and (chosen is None or len(t)>chosen[0]):chosen=(len(t),t,selector)
    if chosen:break
   if chosen:
    text=chosen[1];method='html-container:'+chosen[2]
   else:text=soup.get_text('\n',strip=True);method='html-body-fallback'
   text=html.unescape(text);textfile.write_text(text)
   record['encoding']=encoding
  record.update(readableFile=textfile.relative_to(ROOT).as_posix(),readableSha256=hashlib.sha256(text.encode()).hexdigest(),extraction=method,textCharacters=len(text),status='readable-awaiting-editorial-review' if len(text)>80 else 'unusable-response')
 except Exception as e:record.update(status='fetch-or-extraction-error',error=str(e))
 return record
records=list(previous)
with ThreadPoolExecutor(max_workers=8) as pool:
 for i,f in enumerate(as_completed([pool.submit(fetch,r) for r in results]),1):
  records.append(f.result())
  if i%30==0:print(i,'/',len(results),'responses stored;',sum(r['status']=='readable-awaiting-editorial-review' for r in records),'readable',flush=True)
  if i%50==0:(BASE/'source-fetch-index.json').write_text(json.dumps(dict(date='2026-11-15',note='读取到正文不等于已完成逐项编辑核对；失败、空壳和候选均保留。',sources=records),ensure_ascii=False,indent=2)+'\n')
(BASE/'source-fetch-index.json').write_text(json.dumps(dict(date='2026-11-15',note='读取到正文不等于已完成逐项编辑核对；失败、空壳和候选均保留。',sources=sorted(records,key=lambda r:r['id'])),ensure_ascii=False,indent=2)+'\n');print('DONE',len(records),'sources;',sum(r['status']=='readable-awaiting-editorial-review' for r in records),'readable',flush=True)

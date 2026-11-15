"""Preserve official agricultural notices, annexes and withdrawal notices as separate reads."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor
import json,hashlib,datetime,subprocess
R=Path(__file__).resolve().parents[2];L=R/'research/.local/southwest-20261115/agri';L.mkdir(exist_ok=True);B=R/'research/china/expansions/2026-11-15-southwest'
urls=['http://www.aqsc.agri.cn/tzgg/202412/t20241204_450615.htm','http://www.aqsc.agri.cn/mtyx/tzgg/202609/t20260920_474564.htm','http://www.aqsc.agri.cn/mtyx/tzgg/202606/t20260603_472562.htm','http://www.aqsc.agri.cn/mtyx/tzgg/202609/t20260901_474171.htm','http://www.aqsc.agri.cn/tzgg/202610/t20261020_475108.htm','http://www.aqsc.agri.cn/tzgg/202606/t20260618_472857.htm']
sha=lambda b:hashlib.sha256(b).hexdigest()
def get(url):
 key=sha(url.encode())[:16];f=L/(key+'.raw');t=L/(key+'.txt');row=dict(id='sw-agri-'+key,url=url,checkedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),sourceType='government',status='unread')
 try:
  if not f.exists():
   if url==urls[0] and (L.parent/'aqsc-202412.raw').exists():f.write_bytes((L.parent/'aqsc-202412.raw').read_bytes())
   else:
    with urlopen(Request(url,headers={'User-Agent':'EurotripResearch/1.0'}),timeout=35)as response:f.write_bytes(response.read())
  body=f.read_bytes();row.update(responseFile=f.relative_to(R).as_posix(),responseSha256=sha(body),responseBytes=len(body));links=[]
  if body[:2]==b'PK':
   import openpyxl,io
   workbook=openpyxl.load_workbook(io.BytesIO(body),read_only=True,data_only=True);text='\n\n'.join('SHEET '+s.title+'\n'+'\n'.join('\t'.join(str(x or '')for x in r)for r in s.values)for s in workbook);method='openpyxl-original-xlsx';title='全国名特优新农产品名录附件'
  elif body.startswith(b'%PDF'):
   pdf=L/(key+'.pdf');pdf.write_bytes(body);subprocess.run(['pdftotext','-layout',str(pdf),str(t)],check=True,timeout=30);text=t.read_text();method='pdftotext-original-pdf';title='全国名特优新农产品名录附件'
  else:
   soup=BeautifulSoup(body,'html.parser');title=(soup.find('h1')or soup.find('h2')or soup.title);title=title.get_text(' ',strip=True)if title else '农业农村部农产品质量安全中心公告';text=soup.get_text('\n',strip=True);method='html-body-with-original-tables'
   for a in soup.select('a[href]'):
    link=urljoin(url,a['href']);name=a.get_text(' ',strip=True)
    if any(x in link.lower()for x in ['.xlsx','.xls','.pdf','.doc']):links.append(dict(url=link,title=name,parentUrl=url))
  t.write_text(text);row.update(title=title,readableFile=t.relative_to(R).as_posix(),readableSha256=sha(t.read_bytes()),textCharacters=len(text),extraction=method,status='readable-awaiting-editorial-review',attachments=links)
  print('READ',row['title'][:45],len(text),'attachments',len(links),flush=True)
 except Exception as e:row.update(status='fetch-or-extraction-error',error=str(e));print('FAILED',url,str(e),flush=True)
 return row
with ThreadPoolExecutor(max_workers=4)as pool:records=list(pool.map(get,urls))
children=list({r['url']:r for p in records for r in p.get('attachments',[])}.values())
with ThreadPoolExecutor(max_workers=3)as pool:
 for row in pool.map(get,[c['url']for c in children]):
  c=next(c for c in children if c['url']==row['url']);row.update(title=c['title'],parentUrl=c['parentUrl']);records.append(row)
p=B/'source-fetch-index.json';d=json.loads(p.read_text());known={s['id']for s in d['sources']};d['sources'] += [s for s in records if s['id']not in known];p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');(B/'agricultural-source-register.json').write_text(json.dumps(dict(date='2026-11-15',scope='原始公告、完整名单和注销通知分开保留；公示不冒充最终有效认定。',sources=records),ensure_ascii=False,indent=2)+'\n')

from pathlib import Path
import json,re,hashlib,collections,importlib.util,unicodedata
R=Path(__file__).resolve().parents[2];L=R/'research/.local/three-provinces-20261115';B=R/'research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong';N=B/'reading-notes';N.mkdir(exist_ok=True)
def read(p):return json.loads(p.read_text())
def save(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def loadjs(p):s=p.read_text();return s[:s.index('{')],json.loads(s[s.index('{'):s.rfind(';')])
prefix,cat=loadjs(R/'data/flavors.js');baseprefix,baseline=loadjs(L/'baseline-flavors.js')
allowed={x['id']for x in baseline['items']}|{d['itemId']for d in read(B/'adoption.json')['decisions']} if (B/'adoption.json').exists() else {x['id']for x in baseline['items']}
assert not ({x['id']for x in cat['items']}-allowed),'Later batches are present; refusing to reset the live catalog.'
cat['items']=json.loads(json.dumps(baseline['items']));cat['sources']=json.loads(json.dumps(baseline['sources']))
source_audit=read(R/'research/flavors/sources.json');source_audit['sources']=[s for s in source_audit['sources'] if not s['id'].startswith('threeprov-')]
provinces={p['id']:p['name'] for p in cat['provinces']};pn={v:k for k,v in provinces.items()};primary=read(L/'approved-primary.json');pdfs={p['id']:p for p in read(R/'research/.local/program-4000/github-gi/pdf-index.json')['results']};fetch=read(B/'source-fetch-index.json');sources={s['id']:s for s in fetch['sources']};source_used=collections.defaultdict(list);records=[];decisions=[];lookup={}
sp=importlib.util.spec_from_file_location('explain',R/'scripts/china-expansion-20261115/render-regulatory-detail.py');mod=importlib.util.module_from_spec(sp);sp.loader.exec_module(mod)
aliases={'湿烫皮':'烫皮','烫皮丝':'烫皮','沙炒烫皮':'烫皮','宁红茶':'修水宁红茶','桂平西山茶':'西山茶','钦州坭兴陶':'坭兴陶','广丰马家柚':'马家柚','翁源三华李':'三华李','乐昌马蹄':'北乡马蹄','梅县金柚':'梅州金柚','长乐烧':'长乐烧酒','凤凰单丛':'凤凰单丛(枞)茶','云安托洞腐竹':'托洞腐竹','郁南无核黄皮':'郁南无核黄皮','大化七百弄鸡':'七百弄鸡','永福罗汉果':'永福罗汉果','樟树四特酒':'四特酒','潮州工夫茶':'潮汕工夫茶','容县沙田柚':'容县沙田柚'}
def norm(s):return re.sub(r'[\s（()）、·]','',unicodedata.normalize('NFKC',aliases.get(s,s))).replace('单丛枞茶','单丛茶')
def key(x):return (x['province'],x['city'],norm(x['name']))
def add(x,origin,input_id):
 k=key(x)
 if k in lookup:
  old=lookup[k];old['sources']=list(dict.fromkeys(old['sources']+x['sources']));old['aliases']=list(dict.fromkeys(old.get('aliases',[])+[x['name']]))
  decisions.append(dict(inputId=input_id,origin=origin,action='merge',itemId=old['id'],name=x['name'],sourceIds=x['sources'],reason='同省同市的规范名称或已审阅别名；合并来源，不重复计数'))
  return old
 if len(x['description'])<=30:
  intro=[]
  for sentence in x['detail'].split('。'):
   if sentence.strip():intro.append(sentence.strip()+'。')
   if len(''.join(intro))>30:break
  x['description']=''.join(intro)
 x['id']='threeprov-'+hashlib.sha256('|'.join(k).encode()).hexdigest()[:18];x['explanationStatus']='300-500-characters' if 300<=len(x['detail'])<=500 else 'needs-expansion';x['researchBatch']='2026-11-15-jiangxi-guangxi-guangdong';lookup[k]=x;cat['items'].append(x);records.append(x);decisions.append(dict(inputId=input_id,origin=origin,action='new',itemId=x['id'],name=x['name'],province=x['province'],city=x['city'],sourceIds=x['sources'],reason='来源直接支持名称与地方关联；编辑分类和未确认范围分开记录'));return x
for r in primary['items']:
 meta=pdfs[r['pdfId']];assert sha(R/meta['pdfFile'])==meta['pdfSha256'];assert sha(R/meta['textFile'])==meta['textSha256']
 sid='threeprov-gi-'+r['pdfId'][:16];detail=mod.primary_detail(r,provinces[r['province']]);
 # Remove malformed OCR fragments rather than presenting damaged units or mixed tables as prose.
 detail='。'.join(s for s in re.split('。',detail) if not re.search(r'\ufffd|\x00|附件[一二三四五六七八九十0-9]|万吨|农药|杀虫',s)).strip('。')+'。'
 if len(detail)>500:detail=mod.clip(detail,495)+'。'
 first=next((s for s in detail.split('。') if s.strip()),'')+'。'
 x=dict(province=r['province'],city=r['city'],name=r['name'],type=r['type'],kind=r['kind'],description=first,detail=detail,sources=[sid],locality=r['locality'])
 if r['name']=='上栗花炮':x.update(description='上栗地方传统烟花工艺物品。',detail='上栗花炮是江西萍乡上栗的传统烟花物品。产品公告以当地行政范围界定产区，可从地方工艺与节庆用品的关系认识。')
 n=add(x,'original-pdf',r['id']);source_used[sid].append(dict(itemId=n['id'],name=r['name'],scope=r['scope'],type=r['type'],variety=r['variety'][:180],sensory=r['sensory'][:350],process=r['process'][:280],sectionSha256=r['sectionSha256']))
allmemory=read(B/'initial-knowledge.json')['candidates'];memory_review={x['candidateIndex']:x for x in read(B/'reviewed-memory.json')['items']};notes={idx:x['detail'] for idx,x in memory_review.items()}
for idx,text in notes.items():
 c=allmemory[idx];s=sources[memory_review[idx]['sourceId']]
 assert s,(idx,c['name']);assert sha(R/s['responseFile'])==s['responseSha256'];assert sha(R/s['readableFile'])==s['readableSha256']
 city='九江' if idx==96 else c['city'];name=aliases.get(c['name'],c['name']);typ=c['type'];locality=''
 if idx==96:locality='都昌县'
 if idx==325:typ='dishes'
 if idx==80:typ='seasoning'
 if idx==219:typ='dairy';locality='番禺区'
 if idx==111:locality='良庆区'
 if idx==240:locality='光明区'
 if idx==373:city='汕头'
 x=dict(province=pn[c['province']],city=city,name=name,type=typ,kind='地方'+dict(dairy='乳品',drinks='饮品',alcohol='酒',tea='茶与茶饮',dishes='菜肴与加工食品',staples='米面与点心',ingredients='食材',seasoning='调味品',crafts='物品与工艺')[typ],description=text.split('。')[0]+'。',detail=text,sources=[s['id']])
 if locality:x['locality']=locality
 if name!=c['name']:x['aliases']=[c['name']]
 n=add(x,'knowledge-and-external-review',c['id']);source_used[s['id']].append(dict(itemId=n['id'],name=name,initialCandidateId=c['id'],adoptedFacts=text,scope='名称、地方关联与正文明确支持的识别特征；未核对配方、传说、疗效和最新经营情况不作为事实采用。'))
# External-only candidate names from close-read official lists are loaded separately.
external_file=B/'external-only-editorial.json'
if external_file.exists():
 for row in read(external_file)['items']:
  s=sources[row['sourceId']];assert row['name'] in re.sub(r'\s+','',(R/s['readableFile']).read_text()),row['name'];x={k:row[k] for k in ['province','city','name','type','description','detail']};x.update(kind='地方'+next(c['name'] for c in cat['categories'] if c['id']==row['type']),sources=[row['sourceId']]);
  if row.get('locality'):x['locality']=row['locality']
  n=add(x,'external-only',row['id']);source_used[row['sourceId']].append(dict(itemId=n['id'],name=row['name'],adoptedFacts=row['detail'],scope='官方名单或正文直接记录的地方产品与分类，原料与制法仅采用正文支持部分。'))
for sid,entries in source_used.items():
 if sid.startswith('threeprov-gi-'):
  meta=next(m for m in pdfs.values() if m['id'].startswith(sid.removeprefix('threeprov-gi-')));url=meta['mirrorUrl'];title='地理标志产品公告 · '+Path(meta['repositoryPath']).name;note=dict(id=sid,title=title,url=url,read=True,readMethod='programmatic-original-pdf-sections-with-editorial-scope-and-category-review',provenance=meta,scope='固定提交中的公告PDF镜像；已核对原始PDF字节、提取文本和各产品独立章节，未声称与官方站点PDF逐字节比对。',items=entries);evidencehash=meta['pdfSha256']
 else:
  s=sources[sid];url=s['url'];title=s['title'];note=dict(id=sid,title=title,url=url,read=True,readMethod=s['extraction'],originalResponseFile=s['responseFile'],originalResponseSha256=s['responseSha256'],readableFile=s['readableFile'],readableSha256=s['readableSha256'],items=entries,limitations='采用事实范围见各条；搜索命中不计作正文阅读；未采用导航中的跨地域同名词、宣传疗效、无史料传说和未经核实的实时营业信息。');evidencehash=s['responseSha256'];s['status']='reviewed-for-listed-adoptions';s['reviewedItemIds']=list(dict.fromkeys(e['itemId']for e in entries))
 f=N/(sid+'.json');save(f,note);cat['sources'][sid]=dict(name=title,url=url,publisher='公告发布机构（固定GitHub镜像）' if sid.startswith('threeprov-gi-') else '原网页发布机构',kind='primary' if '.gov.cn' in url or sid.startswith('threeprov-gi-') else 'reference',checked='2026-11-15')
 source_audit['sources'].append(dict(id=sid,url=url,title=title,read=True,readMethod=note['readMethod'],evidenceSha256=evidencehash,evidenceFile=f.relative_to(R).as_posix(),readingNotesSha256=sha(f),supportsItems=list(dict.fromkeys(e['name']for e in entries)),itemIds=list(dict.fromkeys(e['itemId']for e in entries))))
# The original source registry remains byte-equivalent per record, with appended batch notes.
cat['targetItems']=5001;save(R/'research/flavors/sources.json',source_audit);(R/'data/flavors.js').write_text(prefix+json.dumps(cat,ensure_ascii=False,indent=2)+';\n');save(B/'source-fetch-index.json',fetch)
knowledge=read(B/'initial-knowledge.json');by_input={d['inputId']:d for d in decisions};cross=[]
for c in knowledge['candidates']:
 d=by_input.get(c['id']);matches=[x for x in records if x['province']==pn[c['province']] and x['city']==c['city'] and norm(x['name'])==norm(c['name'])]
 cross.append(dict(candidateId=c['id'],name=c['name'],status='adopted-or-merged' if d or matches else 'retained-pending-review',itemIds=[d['itemId']] if d else [x['id']for x in matches],reason=d['reason'] if d else '已由原始公告核对到同一名称与地区' if matches else '未完成可靠正文、地域或名称核对；保留记忆候选，不直接导入网页'))
save(B/'cross-review.json',dict(date='2026-11-15',knowledgeDraftSha256=sha(B/'initial-knowledge.json'),knowledge=cross,primaryHeld=[dict(inputId=r['id'],name=r['name'],reason=r['reviewNote'])for r in primary['held']],primaryMerges=primary['merges'],rules=['第三方目录及README只作线索，公告原件独立核对','先按原文章节限定产品边界，再核对地域和食品用途','别名和共享地域食品合并；镇街不虚构为县区','说明不足300字保留needs-expansion，不重复套话补齐长度']))
save(B/'adoption.json',dict(date='2026-11-15',baselineItems=len(baseline['items']),baselineChinaCards=4385,newItems=len(records),totalFlavorItems=len(cat['items']),totalChinaCards=len(cat['items'])+130,sourceNotes=len(source_used),byProvince=dict(collections.Counter(x['province']for x in records)),byType=dict(collections.Counter(x['type']for x in records)),explanationCounts=dict(collections.Counter(x['explanationStatus']for x in records)),decisions=decisions,retainedBaselineIds=[x['id']for x in baseline['items']],knowledgeDraftSha256=sha(B/'initial-knowledge.json')))
print('ADOPTED',len(records),'flavors',len(cat['items']),'China',len(cat['items'])+130,'sources',len(source_used),'memory notes',len(notes));print(collections.Counter(x['province']for x in records))

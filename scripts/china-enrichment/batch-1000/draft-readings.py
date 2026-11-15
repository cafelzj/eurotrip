"""Extract item-specific facts from preserved primary chapters; never pad short sources."""
from pathlib import Path
import json,re,hashlib,collections,difflib,unicodedata
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-15-national-02-1000';L=R/'research/.local/national-enrichment-20261115-02-1000'
read=lambda p:json.loads(p.read_text());save=lambda p,v:p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def js(p):
 s=p.read_text();return json.loads(s[s.index('{'):s.rfind(';')])
cat=js(R/'data/flavors.js');previous=js(R/'data/china-card-reading.js');bykey={(i['province'],i['city'],i['name']):i for i in cat['items']};all=[]
for p in [R/'research/.local/program-4000/primary-reading-drafts.json',*sorted((R/'research/.local').glob('*/approved-primary.json'))]:
 for r in read(p)['items']:all.append((p,r))
# Every phrase remains linked to its exact source chapter. OCR-damaged and unsafe
# clauses are held, not repaired by guessing digits or adding generic filler.
heading=re.compile(r'(?:(?:[（(][一二三四五六七八九十]+[）)]|[一二三四五六七八九十]+、|\d{1,2}[.、])(?=[^\d]))')
labels=re.compile(r'(?:\d{1,2}[.、])?(?:品种|原料|感官特色|感官特征|感官要求|外观特征|外观特色|立地条件|采收和贮存|采摘|采收|收获|加工工艺流程|加工工艺|工艺流程|酿造工艺|栽培管理|种植管理|养殖管理|饲养管理|生产管理|质量特色|质量要求|理化指标|安全要求|安全及其他质量要求)[。:：]?')
unsafe=re.compile(r'指标项目|项目特征|检测机构|安全及其他|知识产权|国家相关|生根粉|公告|质检|保护措施|专用标志|二〇|出仁率|种核形状|种核先端|核棱|种核纵横|赤霉|激素|保果剂|肥|亩栽|行窝距|行距|丛距|\d+卤制|1:45|喷|药|施[^。；;]{0,12}肥|肥料|氮|磷|钾|复混|复合肥|根施|叶面|波尔多|合剂|代森|病|虫|保质期|有效期|饲养密度|种植密度|\d+kg/亩|乳头|阴囊|生殖|肛门|妊娠|受精|精液|性成熟|母猪|公猪|仔猪|仔鸡|种鸡|种猪|补铁|产仔|断奶|咽喉齿|脊椎骨|齿式|肋骨|鳔分|体长之比|无公害|植保|化学防治|物理防治|生物防治|预防为主|综合防治|禁止|营养丰富|口感极佳|株行距|栽植密度|种植密度|每亩|每公顷|每667|每移植|移植667|\d+至?\d*m2|笮|教短|白感|\?|\ufffd|药用|疗效|治疗|保健|壮阳|补肾|降血|抗癌|治病|专用标志|备案|申请人|国家相关|不得|必须符合|农药|杀虫|杀菌|氮肥|磷肥|钾肥|施肥|追肥|亩施|公顷施|有机肥|病虫|除草|消毒|农家肥|复合肥|氯化|尿素|瘟|防疫|疫苗|检疫|兽药|抗生素|休药|项目指标|等级外形|特级.*一级|[A-Z]{2,}|\\n')
markers=re.compile(r'(?:[（(][一二三四五六七八九十]+[）)]|[一二三四五六七八九十]+、)')
def segment(text,start,end):
 m=re.search(start,text)
 if not m:return ''
 v=text[m.end():];s=re.search(end,v);return v[:s.start()if s else len(v)]
def clauses(value):
 # Do not reconstruct flattened tables. Keep any complete prose before them.
 table=re.search(r'项目指标|指标项目|项目要求|级别|等级外形|等级最大|外形内质|分级标准|分级表|外形色泽香气|表\d+',value)
 if table:value=value[:table.start()]
 value=re.sub(r'—\s*\d+\s*—','',value);value=value.replace('≥','不少于').replace('≤','不超过').replace('℃','°C')
 # Split enumerated operations before removing enumerators, retaining source phrases.
 value=re.sub(r'(?<!\d)(\d{1,2})[.、](?=[\u4e00-\u9fff])','。',value)
 value=markers.sub('。',value)
 # Retain stage labels when a PDF typesets them as short standalone sentences.
 value=re.sub(r'((?:[（(]\d+[）)]|\d+[.、])?(?:摊青|摊放|杀青|做形|辉干|青锅|辉锅|毛火|足火|揉捻|初干|复干|烘干|烘焙|提香|日晒|黑蜜|红蜜|黄蜜|装甑|采摘|采收|定植|灌溉|整形修剪|整形|清洗|选料|加工|发酵|蒸馏|贮存|冷却|浸泡|蒸煮|腌制|和面|醒发|晾晒|制坯|炒制|晾干|摊凉|过泥|涂泥))[。.]',r'\1：',value)
 out=[]
 for raw in re.split(r'[。；;]',value):
  raw=raw.strip(' ,，:：。');raw=re.sub(r'^(?:[（(]\d+[）)]|\d+[.、])+','',raw).strip()
  if not 9<=len(raw)<=240 or unsafe.search(raw)or raw.endswith('.')or re.search(r'表\d+|见表|各级|指标应|每穴|穴距|行株距|株距|防病|追施|根施|饲料添加|添加剂|氨气浓度|二氧化碳',raw):continue
  # Table-like collapsed statistics are not natural-language facts.
  if re.search(r'(?:%.*){4,}|(?:\d+[.、].*){3,}|[\u4e00-\u9fff]\d{3,}[\u4e00-\u9fff]',raw):continue
  if raw not in out:out.append(raw)
 return out
def norm(s):
 s=unicodedata.normalize('NFKC',s)
 s=s.replace('≥','不少于').replace('≤','不超过').replace('℃','°C')
 return re.sub(r'[^\w\u4e00-\u9fff]','',s)
def novelty(value,old):
 q=norm(value);original=norm(old);end=0;new=0
 for m in difflib.SequenceMatcher(None,q,original,autojunk=False).get_matching_blocks():
  if m.a-end>=8:new+=m.a-end
  end=m.a+m.size
 return new
approved=[];held=[];seen={}
for path,r in all:
 i=bykey.get((r.get('province'),r.get('city'),r.get('name')))
 if not i or i['id']in previous:continue
 text=r['sectionText']
 if not r.get('sectionSha256')or hashlib.sha256(text.encode()).hexdigest()!=r['sectionSha256']:continue
 # Use already adopted, independently bounded primary chapters only.
 if i['name']in {'郑城金银花','宁波金柑','嵩县银杏','覃塘毛尖茶','南川方竹笋','紫云春茶','都江堰茶叶','景阳冈酒','连环湖鳜鱼'}:continue
 if len(text)>14000 or re.search(r'烟花|花炮|火药|鞭炮|雷管',i['name']):continue
 # Pull facts by source headings, not inferred from the product name.
 # The last finished-product sensory heading matters: an earlier heading can
 # describe a starter culture (酒曲), not the bottled wine.
 quality=list(re.finditer(r'(?:质量特色|特色质量)[。:：]?',text));finished=text[quality[-1].end():]if quality else text
 sensory_heads=list(re.finditer(r'(?:感官特色|感官特征|感官要求|感官指标|感官品质|感观特色|感观特征|外观特征|外观特色)[。:：]?',finished))
 sensory=segment(finished[sensory_heads[0].start():],r'(?:感官特色|感官特征|感官要求|感官指标|感官品质|感观特色|感观特征|外观特征|外观特色)[。:：]?',r'(?:\d+[.、])?(?:理化指标|理化特征|理化要求|安全要求)')if sensory_heads else ''
 variety=segment(text,markers.pattern+r'(?:品种(?:选择)?|原料(?:要求)?|茶树品种|种)[。:：]?',markers.pattern)
 site=segment(text,markers.pattern+r'(?:立地条件|土壤条件|生长环境|养殖环境|养殖条件|原料要求)[。:：]?',markers.pattern)
 harvest=segment(text,markers.pattern+r'(?:采收和贮存|采收与贮藏|采收加工|鲜叶采摘|采摘|采收|采笋|收获)[。:：]?',markers.pattern)
 process=segment(text,markers.pattern+r'(?:加工工艺流程|加工工艺|工艺流程|酿造工艺|加工方法|加工技术|生产工艺要求)[。:：]?',markers.pattern+r'(?:质量特色|特色质量|质量要求|安全要求)')
 if i['type']=='alcohol'and'酿造工艺'in text:process=segment(text,r'酿造工艺[。:：]?',markers.pattern+r'(?:质量特色|特色质量|质量要求)')
 grow=segment(text,markers.pattern+r'(?:栽培管理|栽培技术|种植管理|养殖管理|饲养管理|生产管理|生产技术)[。:：]?',markers.pattern)
 groups=[('外形与风味',clauses(sensory)),('品种与原料',clauses(variety)),('制作与加工',clauses(process)),('产地环境',clauses(site)),('采收与处理',clauses(harvest)),('原料形成',clauses(grow))]
 facts=[]
 for group,values in groups:
  for v in values:
   if norm(v)not in norm(text)or re.match(r'^(?:及|与|和|、)',v):continue
   if group=='制作与加工'and i['type']=='tea'and'绿茶'in text and'红茶'in text and'发酵'in v:continue
   if group=='外形与风味'and re.search(r'工艺|制曲|酿造|栽培|种植|养殖',v):continue
   if any(v in x['text']or x['text']in v for x in facts):continue
   facts.append(dict(group=group,text=v))
 # Keep a clear identity/appearance fact, then prefer genuinely additional
 # source passages over reordering the same original facts.
 for f in facts:f['novelCharacters']=novelty(f['text'],i['detail'])
 identity=next((f for f in facts if f['group']=='外形与风味'),None)
 facts=([identity]if identity else [])+sorted([f for f in facts if f is not identity],key=lambda f:(-f['novelCharacters'],['制作与加工','采收与处理','品种与原料','产地环境','外形与风味','原料形成'].index(f['group'])))
 # Score novelty against original short/technical input; do not relabel identical text.
 novel=[x for x in facts if norm(x['text'])not in norm(i['detail'])]
 chosen=[];body=f"{i['name']}与{next(p['name']for p in cat['provinces']if p['id']==i['province'])}·{i['city']}的地方生产相联系。"
 prefix_map={'外形与风味':'成品呈现','品种与原料':'原料选择','制作与加工':'加工方式','产地环境':'生产环境','采收与处理':'采后处理','原料形成':'原料生产'}
 paragraphs={}
 def compose(groups):
  source=norm(text)
  def position(v):
   pos=source.find(norm(v)[:20]);return pos if pos>=0 else 1000000
  return body+''.join('\n\n'+prefix_map[k]+'：'+'。'.join(sorted(groups[k],key=position))+'。'for k in prefix_map if k in groups)

 for f in facts:
  proposed={k:list(v)for k,v in paragraphs.items()};proposed.setdefault(f['group'],[]).append(f['text'])
  if len(compose(proposed))>500:continue
  paragraphs=proposed;chosen.append(f)
  if len(compose(paragraphs))>=380 and sum(x['novelCharacters']for x in chosen)>=100:break
 body=compose(paragraphs)
 novel_chars=sum(x['novelCharacters']for x in chosen)
 row=dict(itemId=i['id'],name=i['name'],province=i['province'],city=i['city'],type=i['type'],oldCharacters=len(i['detail']),sourceRecordFile=str(path.relative_to(R)),recordId=r['id'],pdfId=r['pdfId'],mirrorUrl=r['mirrorUrl'],repositoryPath=r['repositoryPath'],sectionSha256=r['sectionSha256'],sectionText=text,facts=chosen,detail=body,characters=len(body),novelSourceCharacters=novel_chars)
 if len(body)<300 or novel_chars<40 or len(chosen)<3:held.append({k:row[k]for k in ['itemId','name','characters','novelSourceCharacters']});continue
 score=(i['explanationStatus']!='300-500-characters',novel_chars,-abs(len(body)-400))
 if i['id']not in seen or score>seen[i['id']][0]:seen[i['id']]=(score,row)
approved=[x[1]for x in seen.values()];save(L/'draft-readings.json',dict(eligible=approved,held=held));print('ELIGIBLE',len(approved),'short',sum(r['oldCharacters']<300 for r in approved));print(collections.Counter(r['province']for r in approved));print(collections.Counter(r['type']for r in approved))

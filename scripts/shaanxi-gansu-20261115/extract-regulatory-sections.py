import pathlib,json,re,unicodedata,collections,hashlib
root=pathlib.Path(__file__).resolve().parents[2];base=root/'research/.local/program-4000/github-gi';idx=json.loads((base/'pdf-index.json').read_text())['results']
def norm(s):return re.sub(r'\s+','',unicodedata.normalize('NFKC',s or ''))
raw=[]
for p in base.glob('extract-*.json'):raw.extend(json.loads(p.read_text()))
raw_by_name=collections.defaultdict(list)
for x in raw:raw_by_name[norm(x['product_name'])].append(x)
queue=json.loads((root/'research/china/expansions/2026-11-15-shaanxi-gansu/place-register.json').read_text())['places'];province_names={'陕西':'shaanxi','甘肃':'gansu'}
aliases={'临夏回族自治州':'临夏州','甘南藏族自治州':'甘南州'}

def short(s):return re.sub(r'(满族蒙古族自治县|蒙古族自治县|苗族侗族自治县|土家族自治县|苗族自治县|侗族自治县|回族自治县|朝鲜族自治县|畲族自治县|瑶族自治县|满族自治县|自治县|县|市|区)$','',s)
county_patterns={p['adcode']:re.compile(re.escape(short(p['name']))+r'(?:县|市|区|自治县)') for p in queue if p['level']=='county' and len(short(p['name']))>=2}
def section(text,start,end,limit=1200):
 m=re.search(start,text)
 if not m:return ''
 s=text[m.end():];z=re.search(end,s)
 return s[:z.start() if z else limit][:limit].strip('。:：')
def geography(name,scope,hints):
 if re.search(r'海南省|贵州省|云南省|四川省|重庆市|西藏|青海省|宁夏|新疆|内蒙古|天津市',scope):return None
 province=next((pid for pn,pid in province_names.items() if pn+'省' in scope or pn+'市' in scope or pn=='广西壮族自治区' and pn in scope),None)
 if not province:
  provs={province_names.get(re.sub('[省市]$','',x.get('province',''))) for x in hints};provs.discard(None)
  if len(provs)==1:province=next(iter(provs))
 if province not in ['shaanxi','gansu']:return None
 candidates=[p for p in queue if p['province']==province]
 counties=[p for p in candidates if p['level']=='county' and (p['name'] in scope or (p['adcode'] in county_patterns and county_patterns[p['adcode']].search(scope)))]
 city_names={p['city'] for p in counties}
 explicit={p['city'] for p in candidates if p['level']=='city' and (p['city']+'市' in scope or p['city'] in scope and p['city'].endswith('州'))}
 if explicit:city_names.update(explicit)
 if len(city_names)==1:city=next(iter(city_names))
 elif len(city_names)>1:
  hints_city={aliases.get(x.get('city'),x.get('city','').removesuffix('市')) for x in hints}
  agreed=city_names&hints_city
  city=next(iter(agreed)) if len(agreed)==1 else '全省'
 else:
  hints_city={aliases.get(x.get('city'),x.get('city','').removesuffix('市')) for x in hints}
  agreed=hints_city&{p['city'] for p in candidates}
  if len(agreed)!=1:return None
  city=next(iter(agreed))
  # Require a scope place, product toponym or explicit city, not an ungrounded dataset city.
  local=[p for p in candidates if p['city']==city and p['level']=='county' and len(short(p['name']))>=2 and short(p['name']) in name]
  if not local and city not in scope and city not in name and not any(norm(d) in scope for x in hints for d in x.get('districts',[]) if len(norm(d))>2):return None
  counties=local
 counties=[p for p in counties if city=='全省' or p['city']==city]
 return dict(province=province,city=city,locality='、'.join(dict.fromkeys(p['name'] for p in counties)) or (city+'相关产区'),placeIds=[p['level']+':'+str(p['adcode']) for p in counties])
items=[];counts=collections.Counter();unmapped=[]
for meta in idx:
 if not meta.get('read'):continue
 body=pathlib.Path(root/meta['textFile']).read_text();clean=re.sub(r'^\s*-\s*\d+\s*-\s*$','',body.replace('\f','\n'),flags=re.M)
 headings=[]
 for m in re.finditer(r'^[ \t]*([^\n]{2,65}?)地理标志产品保护要求[ \t]*\n',clean,re.M):
  # Introductory attachment lists are not product sections. A real section starts
  # with its own first heading; otherwise neighbouring products get mispaired.
  if not re.match(r'一\s*、',clean[m.end():].lstrip()[:60]):continue
  name=re.sub(r'^\d+[.．、]\s*','',m.group(1).strip()).strip()
  headings.append((m.start(),m.end(),norm(name),'protection-requirements'))
 for m in re.finditer(r'^\s*([^\n]{2,45}?)质量技术要求\s*$',clean,re.M):
  name=norm(m.group(1)).strip('“”\"')
  if name in raw_by_name:headings.append((m.start(),m.end(),name,'quality-requirements'))
  elif len(name)>=3 and not re.fullmatch(r'[一二三四五六七八九十百千、.()0-9]+',name) and not name.startswith('附件'):
   headings.append((m.start(),m.end(),name,'boundary-only'))
 headings=sorted(set(headings))
 if not headings:
  # Many early notices concern exactly one product and put quality requirements in their body.
  prefix=norm(clean[:900]);found=[n for n in raw_by_name if n in prefix]
  if len(found)==1:headings=[(0,0,found[0],'single-product-notice')]
 flatall=norm(clean)
 for j,(start,end,name,kind) in enumerate(headings):
  if kind=='boundary-only':continue
  text=norm(clean[end:headings[j+1][0] if j+1<len(headings) else len(clean)])
  hints=raw_by_name.get(name,[])
  declared=section(text,r'一、地理标志产品名称',r'二、',120)
  if declared and name not in declared:counts['heading-name-mismatch']+=1;continue
  scope=section(text,r'(?:三、产地范围|一、保护范围|[（(]一[）)](?:产地|保护)范围)[。:：]?',r'(?:四、|二、|[（(]二[）)])',1800)
  if not scope:
   at=flatall.find(name+'产地范围')
   if at<0:at=flatall.find(name+'地理标志产品保护范围')
   if at>=0:scope=flatall[at:at+1800].split('专用标志使用')[0].split('二、质量技术要求')[0]
   if scope and '。' in scope:scope=scope[:scope.index('。')+1]
  if not scope and kind=='single-product-notice':scope=section(flatall,r'一、保护范围',r'二、质量技术要求',1800)
  geo=geography(name,scope,hints)
  if not geo:
   if any(re.sub('[省市]$','',x.get('province','')) in province_names for x in hints):unmapped.append(dict(name=name,pdfId=meta['id'],scope=scope[:500],reason='省市县定位未通过原文范围核对'))
   continue
  sensory=section(text,r'(?:感官特[色征]|感观特[色征]|感官品质|感官指标)[。:：]?',r'(?:\d+[.、]理化|理化|安全(?:要求|及)|五、专用|三、专用)',700)
  variety=section(text,r'[（(]一[）)](?:品种|种源|原料|品系|树种)[。:：]?',r'[（(]二[）)]',450)
  harvest=section(text,r'[（(][一二三四五六七八九十]+[）)](?:采收|采摘|收获|屠宰|捕捞)[。:：]?',r'[（(][一二三四五六七八九十]+[）)]|质量特色|质量要求|五、',500)
  process=section(text,r'[（(][一二三四五六七八九十]+[）)](?:加工工艺|加工|酿造工艺|生产工艺|制作工艺|工艺流程)[。:：]?',r'[（(][一二三四五六七八九十]+[）)]|质量特色|质量要求|五、',1300)
  if not sensory and not variety and not process:counts['no_food_characteristics']+=1;continue
  ident='primary-'+hashlib.sha256((meta['id']+'|'+name).encode()).hexdigest()[:14]
  items.append(dict(id=ident,name=name,**geo,pdfId=meta['id'],mirrorUrl=meta['mirrorUrl'],repositoryPath=meta['repositoryPath'],primarySectionKind=kind,scope=scope,variety=variety,sensory=sensory,harvest=harvest,process=process,sectionText=text,sectionSha256=hashlib.sha256(text.encode()).hexdigest(),headingOffset=start))
  counts[geo['province']]+=1
out=root/'research/.local/shaanxi-gansu-20261115/primary-sections.json';out.write_text(json.dumps(dict(items=items,unmapped=unmapped),ensure_ascii=False,indent=2)+'\n');print('PRIMARY',len(items),'sections',dict(counts),'unmapped',len(unmapped));print('UNIQUE',len({(x['province'],x['name']) for x in items}));print('SAMPLES',json.dumps([{k:x[k] for k in ['name','city','locality','sensory','variety']}for x in items[:8]],ensure_ascii=False)[:3300])

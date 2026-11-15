from pathlib import Path
import json,re,collections
ROOT=Path(__file__).resolve().parents[2];BASE=ROOT/'research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong';LOCAL=ROOT/'research/.local/three-provinces-20261115'
knowledge=json.loads((BASE/'initial-knowledge.json').read_text());sources=json.loads((BASE/'source-fetch-index.json').read_text())['sources']
rows=[]
aliases={'瓦罐汤':['瓦罐煨汤'],'龙虎山天师板栗':['天师板栗'],'横州茉莉花茶':['横县茉莉花茶'],'宜春扎粉':['宜春炒粉'],'罗定皱纱鱼腐':['罗定鱼腐'],'广丰马家柚':['马家柚'],'新会陈皮':['陈皮'],'瑶山苦爽茶':['苦爽茶'],'水东芥菜':['电白芥菜'],'唐家茶果':['唐家湾茶果']}
texts={src['id']:re.sub(r'\s+','',(ROOT/src['readableFile']).read_text()) for src in sources if src.get('readableFile') and src['status'] in ('readable-awaiting-editorial-review','reviewed-for-listed-adoptions')}
for c in knowledge['candidates']:
 variants=[c['name']]+aliases.get(c['name'],[])
 city=c['city'];short=c['name'].removeprefix(city)
 if len(short)>=3 and short not in variants:variants.append(short)
 hits=[]
 for src in sources:
  if src['status'] not in ('readable-awaiting-editorial-review','reviewed-for-listed-adoptions'):continue
  compact=texts[src['id']]
  for name in variants:
   at=compact.find(name)
   if at<0:continue
   context=compact[max(0,at-100):at+len(name)+300]
   score=(8 if name==c['name'] else 3)+(4 if city in context else 0)+(3 if city in src['title'] else 0)+(2 if src['sourceType']=='government' else 0)+(1 if c['province'] in context else 0)
   if src['extraction']=='html-body-fallback':score-=1
   hits.append(dict(sourceId=src['id'],title=src['title'],url=src['url'],matchedName=name,context=context,score=score))
   break
 hits.sort(key=lambda h:-h['score']);rows.append(dict(**c,possibleSources=hits[:5],matchingStatus='potential-source-match-not-adopted' if hits else 'no-readable-match-yet'))
(LOCAL/'memory-source-contexts.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('Candidates',len(rows),'matched',sum(bool(r['possibleSources']) for r in rows))
for key,rs in __import__('itertools').groupby(rows,key=lambda r:(r['province'],r['city'])):
 group=list(rs);print(key,'matched',sum(bool(r['possibleSources']) for r in group),'/',len(group),'missing:',','.join(r['name'] for r in group if not r['possibleSources']))

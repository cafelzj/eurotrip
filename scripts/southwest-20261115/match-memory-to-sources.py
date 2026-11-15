from pathlib import Path
import json,re
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115';candidates=json.loads((B/'initial-knowledge.json').read_text())['candidates'];sources=json.loads((B/'source-fetch-index.json').read_text())['sources'];texts={s['id']:re.sub(r'\s+','',(R/s['readableFile']).read_text())for s in sources if s.get('readableFile') and s['status'] in ['readable-awaiting-editorial-review','reviewed-for-listed-adoptions']};aliases={'乾州锅盔':['乾县锅盔'],'羊肉泡馍':['牛羊肉泡馍'],'汉中热米皮':['汉中米皮','热米皮'],'紫阳富硒茶':['紫阳茶'],'天水浆水面':['浆水面'],'凉州三套车':['武威三套车','三套车'],'绥德油旋':['油旋'],'甘加羊':['甘加藏羊'],'安康蒟蒻':['安康魔芋','魔芋'],'百跃羊乳':['百跃'],'御宝羊乳':['御宝'],'午子仙毫':['午子茶'],'三泡台':['三泡台','三泡臺']};out=[]
for idx,c in enumerate(candidates):
 hits=[];variants=[c['name']]+aliases.get(c['name'],[]);short=c['name'].removeprefix(c['city'])
 if len(short)>=3:variants.append(short)
 for s in sources:
  t=texts.get(s['id']);
  if not t:continue
  for name in variants:
   at=t.find(name)
   if at<0:continue
   context=t[max(0,at-60):at+len(name)+300];score=(10 if name==c['name'] else 4)+(12 if c['city'] in s['title'] else 0)+(4 if c['city'] in context else 0)+(8 if '.gov.cn' in s['url'] else 4 if any(v in s['url']for v in ['people.com','gscn.com','gansudaily','thepaper.cn','chinanews','cnstock','mofcom','cnr.cn'])else 0)
   hits.append(dict(sourceId=s['id'],title=s['title'],url=s['url'],matchedName=name,context=context,score=score));break
 hits.sort(key=lambda x:-x['score']);out.append(dict(index=idx,**c,possibleSources=hits[:5]))
(L/'memory-source-contexts.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(len(out),'candidates;',sum(bool(c['possibleSources'])for c in out),'matched')
for c in out:print(c['index'],c['city'],c['name'],'|',(';'.join(h['sourceId'][-16:]+':'+h['title'][:20] for h in c['possibleSources'][:1])))

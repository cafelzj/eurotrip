from pathlib import Path
import json,re,hashlib,collections,sys
R=Path(__file__).resolve().parents[2];L=R/'research/.local/three-provinces-20261115';rows=json.loads((L/'classified-primary.json').read_text())['items']
crafts=set('铅山连四纸 上栗花炮 湛江剑麻纤维 都安书画纸 香云纱 泗纶蒸笼 乳源彩石 莞香 大埔青花瓷 潮州手拉朱泥壶 南丹瑶蚕平板丝 怀集茶秆竹'.split())
hold=set('十万山牛大力 德保矮马 钦州石金钱龟 凭祥石龟 恭城竹鼠 始兴石斛 德兴铁皮石斛 雅长铁皮石斛 白石山铁皮石斛 都峤山铁皮石斛 铜鼓黄精 临川金银花 忻城金银花 东乡葛 德兴葛 文鲤 文鲩'.split())
for r in rows:
 if r['name'] in hold:r.update(reviewStatus='hold',reviewNote='用途、食用边界或原文名称尚需专门核实；不纳入本轮正式卡片。')
 if r['name'] in crafts:r.update(type='crafts',kind='地方物品与工艺')
 if r['name'] in ['清化粉','岗坪切粉','恩平濑粉']:r.update(type='staples',kind='地方米粉')
 if r['name'] in ['高安腐竹','桂林腐竹','托洞腐竹']:r.update(type='ingredients',kind='地方豆制食材')
 if r['name']=='浮山豆腐花':r.update(type='dishes',kind='地方豆制食品')
 if r['name']=='罗定皱纱鱼腐':r.update(type='dishes',kind='地方鱼制食品')
 if r['name']=='石岐鸽':r.update(type='ingredients',kind='地方鸽种')
 if r['name']=='莞香':r['kind']='地方制香材料'
 if r['name']=='上栗花炮':r['process']='';r['variety']='';r['harvest']='';r['sensory']='地方传统烟花工艺物品';r['sectionText']=''
# Same fruit under two local names: keep the broader name once, retain both sources later.
seen={};selected=[];merges=[]
for r in rows:
 if r['reviewStatus']=='hold':continue
 canonical={'梅县金柚':'梅州金柚'}.get(r['name'],r['name']);key=(r['province'],r['city'],canonical)
 if key in seen:merges.append(dict(inputId=r['id'],canonicalInputId=seen[key]['id'],reason='同产区金柚别名合并，原始公告和名称仍保留'));continue
 seen[key]=r;selected.append(r)
(L/'approved-primary.json').write_text(json.dumps(dict(items=selected,held=[r for r in rows if r['reviewStatus']=='hold'],merges=merges),ensure_ascii=False,indent=2)+'\n');print('approved primary',len(selected),'held',sum(x['reviewStatus']=='hold'for x in rows),'merges',len(merges))

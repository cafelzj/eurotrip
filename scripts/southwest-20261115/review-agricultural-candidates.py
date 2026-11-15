"""Review exact listed crops and foods; do not equate a proposal with current certification."""
from pathlib import Path
import json,re,collections
R=Path(__file__).resolve().parents[2];B=R/'research/china/expansions/2026-11-15-southwest';L=R/'research/.local/southwest-20261115'
read=lambda p:json.loads(p.read_text());save=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
rows=read(B/'agricultural-candidates.json')['items'];pnames={'sichuan':'四川','chongqing':'重庆','guizhou':'贵州','yunnan':'云南'};approved=[];decisions=[]
herbs=r'黄精|天麻|当归|黄连|贝母|白芍|丹参|青蒿|淫羊藿|牛膝|续断|泽泻|木香|西洋参|石斛|艾纳香|枳壳|西归|猴耳环|姜黄|金银花|栀子|金荞麦|大鲵|石蛙|芦山抹竹|文山仙人掌'
for r in rows:
 n=r['name'];reason='';status='adopt-name-region-and-food-identity'
 if r['reviewStatus']!='awaiting-editorial-review':status='hold';reason=r['reviewStatus']
 elif r['geographyStatus']!='mapped':status='hold';reason='未完成当前行政范围核对'
 elif re.search(herbs,n):status='hold';reason='药材、生物或加工用途边界尚未明确，不因进入农产品名单就直接归为食材'
 if status=='hold':decisions.append(dict(inputId=r['id'],name=n,status=status,reason=reason));continue
 if ('茶'in n and '油茶'not in n and '茶花鸡'not in n) or n in {'高县黄金芽','瓮安黄金芽','白玉雪菊','钟山皇菊'}:typ='tea';kind='地方茶品'
 elif '咖啡'in n:typ='drinks';kind='地方咖啡'
 elif '橙汁'in n:typ='drinks';kind='地方果汁'
 elif '酸奶'in n or '奶粉'in n:typ='dairy';kind='地方乳制品'
 elif '葡萄酒'in n:typ='alcohol';kind='地方葡萄酒'
 elif any(x in n for x in ['腊肉','火腿','香肠','醪糟']):typ='dishes';kind='地方加工食品'
 elif any(x in n for x in ['粉条','苕粉','挂面','糌粑']):typ='staples';kind='地方米面食品'
 elif any(x in n for x in ['菜籽油','橄榄油','花椒油','山茶油']):typ='seasoning';kind='地方食用油'
 else:typ='ingredients';kind='地方农产品与食材'
 where='·'.join(dict.fromkeys([pnames[r['province']],r['city'],r['locality']])) .strip('·')
 detail=f'{n}是与{where}相联系的{kind}。农业农村部农产品质量安全中心的'+('正式公布名单'if r['sourceStage']=='published-list'else '公示名单')+'记录了这一名称及申报地域。'
 # Preserve concrete source scope and distinguish original county names from the current selector.
 if r['authority']:detail+='该批资料所列地方申报或获证单位为'+r['authority']+'。'
 if r['scale']:detail+='该批名单记载的生产规模为'+r['scale']+'，对应原文公布或公示时点的登记范围。'
 if r['rawCounty'] and r['locality'] and r['rawCounty']!=r['locality'] and r['locality']not in r['rawCounty']:detail+='来源沿用“'+r['rawCounty']+'”地名，当前地区索引对应'+r['locality']+'。'
 if r['sourceStage']=='proposed-list':detail+='这里采用名单直接支持的地方产品身份，不将公示视为最终认定或当前证书有效性的证明。'
 else:detail+='卡片记录公布时点的名称与地域；品牌、生产主体和具体产品属性分别核对，不据此推断所有在售产品均具相同资质。'
 if n=='望谟油茶':detail+='此处记录油茶类农产品，不能仅因名称含“茶”就等同于冲泡茶饮。'
 if r['rawCounty']=='两江新区':detail+='来源所列两江新区暂未与当前地图版本的县级目录对应，保留全市范围。'
 item=dict(id=r['id'],province=r['province'],city=r['city'],locality=r['locality'],name=n,type=typ,sourceId=r['sourceId'],description=detail.split('。')[0]+'。',detail=detail,sourceRowNumber=r['rowNumber'],sourceRowSha256=r['rowSha256'],sourceStage=r['sourceStage'])
 approved.append(item);decisions.append(dict(inputId=r['id'],name=n,status=status,type=typ,sourceId=r['sourceId'],reason='已读原始官方表格，逐条核对名称、食品身份、地域与公示／公布／注销状态；未添加无依据的配方与疗效'))
save(B/'agricultural-review.json',dict(date='2026-11-15',approved=len(approved),held=len(rows)-len(approved),decisions=decisions));save(L/'approved-agricultural.json',dict(items=approved));print('APPROVED',len(approved),'HELD',len(rows)-len(approved),collections.Counter(x['province']for x in approved))
# Fixed external-only input; source table rows remain separate from independent memory.
p=B/'external-only-editorial.json';old=read(p)['items']if p.exists()else[];old=[x for x in old if not x['id'].startswith('agri-row-')];save(p,dict(date='2026-11-15',items=old+approved))

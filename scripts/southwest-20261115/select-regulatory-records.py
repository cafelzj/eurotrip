"""Record category, identity and food-use corrections after reading original product sections."""
from pathlib import Path
import json
R=Path(__file__).resolve().parents[2];L=R/'research/.local/southwest-20261115';rows=json.loads((L/'classified-primary.json').read_text())['items'];corrections=[]
crafts={'蜀锦','汶川羌绣','夹江书画纸','梁河葫芦丝','安顺蜡染','三都水族马尾绣','建水紫陶','大英长绒棉','大竹苎麻','盐边桑蚕茧','涪城蚕茧','黔江桑蚕茧','红河棕榈','南山腊梅','盐亭桑叶'}
hold={'南江金银花','赤水金钗石斛','红河灯盏花','金堂明参','松贝(松潘产区)','巴州川明参','九寨猪苓','正安野木瓜','苍溪川明参','夹江叠鞘石斛','绥阳金银花','龙陵紫皮石斛','广南铁皮石斛','芒市石斛','织金续断','织金头花蓼','黎平茯苓','安龙石斛','秀山金银花','马楠半细毛羊','巴中柞蚕蛹'}
dishes={'自贡火边子牛肉','盐边油底肉','东坡肘子(眉山产区)','寻甸牛干巴','自贡冷吃兔','通川灯影牛肉','宣汉牛肉','广汉缠丝兔','锦屏腌鱼','观音豆干'}
staples={'合川桃片','蒲江米花糖','苏稽米花糖(苏稽香油米花糖)','清镇黄粑','兴义饵块粑','丹棱冻粑','甘孜水淘糌粑'}
seasoning={'资中冬尖','东坡泡菜','南充冬菜','仪陇酱瓜','富顺豆花蘸水','凯里红酸汤','独山盐酸菜','卓筒井盐','汤池老酱','洪雅藤椒油','汉源花椒油','涪陵榨菜','富宁八角'}
for x in rows:
 n=x['name'];old=x['type'];status=x['reviewStatus']
 if n in hold:x.update(reviewStatus='hold',reviewNote='现有章节主要描述药材、原生药或生物原料，食品用途和具体使用范围尚未完成核对；保留候选，不直接纳入食材。')
 if n in crafts:x.update(type='crafts',kind='地方器物与工艺原料',reviewStatus='primary-text-supported',reviewNote='原文支持器物、纺织或蚕桑等用途；按物品与工艺记录，不作为食品。')
 if n in dishes:x.update(type='dishes',kind='地方菜肴与加工食品')
 if n in staples:x.update(type='staples',kind='地方米面与糖点')
 if n in seasoning:x.update(type='seasoning',kind='地方调味品')
 if n in {'保山小粒咖啡','朱苦拉咖啡','普洱咖啡'}:x.update(type='drinks',kind='地方咖啡')
 if n=='贵定益肝草凉茶':x.update(type='drinks',kind='地方草本饮料')
 if n=='煎茶竹丝茄':x.update(type='ingredients',kind='地方蔬菜')
 if n=='芝溪玉液':x.update(type='alcohol',kind='地方白酒')
 if n=='石林乳饼':x.update(type='dairy',kind='地方乳制品')
 if x['type']!=old or x['reviewStatus']!=status:corrections.append(dict(name=n,action='correct-category-or-review-scope',previousType=old,type=x['type'],status=x['reviewStatus'],reason=x['reviewNote']))
selected=[r for r in rows if r['reviewStatus']!='hold'];held=[r for r in rows if r['reviewStatus']=='hold'];(L/'approved-primary.json').write_text(json.dumps(dict(items=selected,held=held,corrections=corrections),ensure_ascii=False,indent=2)+'\n');print(len(selected),'approved;',len(held),'held;',len(corrections),'corrections')

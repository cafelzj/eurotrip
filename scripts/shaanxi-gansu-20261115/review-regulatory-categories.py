from pathlib import Path
import pathlib,json,re,base64,collections,hashlib
root=Path(__file__).resolve().parents[2];r=root;b=root/'research/.local/program-4000'
secondary=json.loads((b/'secondary-index-data.json').read_text());lookup=collections.defaultdict(list)
for x in secondary:lookup[x['n']].append(x)
items=json.loads((root/'research/.local/shaanxi-gansu-20261115/primary-sections.json').read_text())['items'];chosen={}
for x in items:
 key=(x['province'],x['name'])
 # Prefer the latest full technical requirements over older single notices.
 year=max([int(s)for s in re.findall(r'20\d\d',x['repositoryPath'])] or [0]);score=(year,len(x['sensory'])>20,len(x['scope'])>20,len(x['sectionText']))
 if key not in chosen or score>chosen[key][0]:chosen[key]=(score,x)
common_edible=('枸杞','山药','百合','菊','莲','芡实','生姜','陈皮','橘红','佛手','山楂','葛根','葛粉','桂花','金银花','沙棘','桑椹','罗汉果','肉桂','薏','黑芝麻','银耳','茯苓','黄精','茶','花椒','香椿','松茸','酸枣','芋','板栗','石斛')
unsafe=re.compile(r'烟叶|烟草|烤烟|晒烟|蚕茧|桑蚕|棉花|桑苗|花卉|杜鹃花|水仙花|盆景|国兰|牡丹苗|狗肉|獾|娃娃鱼|林蛙|虎眼万年青|猪牙皂|白术|黄芪|绵芪|黄连|北五味子|三七|重楼|断血流|连翘|太子参|玄参|丹参|党参|地黄|白芍|知母|苍术|牛膝|麦冬|贝母|骨碎补|黄柏|杜仲|独活|防风|龙胆|柴胡|地龙|蝉蜕|蜈蚣|穿山甲|鳄鱼|鳖甲|熊胆|大黄|麻黄|土元|水蛭|木瓜干|川芎|艾草|北艾|蕲艾')
craft=re.compile(r'瓷|陶|砚|宣纸|宣笔|徽墨|云锦|刺绣|蜀锦|丝绸|夏布|竹编|草编|柳编|木雕|石雕|玉雕|玛瑙|绿松石|漆器|毛笔|金箔|年画|浮标|凉席|紫砂|湘绣|湖笔|歙砚|瓯绣|黄杨木雕|雨花石|端砚|寿山石|青田石|独山玉|黄龙玉|蚌塑|泥塑|纸伞|铁锅|银器')
staples=re.compile(r'面条|挂面|粉条|粉丝|米粉|粉干|米线|饼|糕|馍|馒头|烧麦|烧卖|水饺|饺子|馄饨|扁肉|米粿|麻花|糖酥|米塑|干扣面|贡面|板面|火烧')
seasoning=re.compile(r'酱油|虾油|甜油|香醋|陈醋|老醋|米醋|陈醋|醋$|豆豉|腐乳|辣酱|酱菜|虾酱|鱼露|豆瓣|芝麻油|香油|调味')
dishes=re.compile(r'板鸭|烧鸡|烤鸭|腊鸭|酱鸭|卤鸭|熏鸡|烧肉|熏肉|卤肉|腊肉|火腿|肉松|猪蹄|肉脯|香肠|黄牛肉干|牛肉干|酱牛肉|酱驴肉|咸鸭蛋|松花蛋|皮蛋|糟蛋|鱼糕|肉糕|鱼丸|鱼圆|豆腐干|豆腐皮|香干|酱干|豆干|烤鳗|腌菜|泡菜|萝卜干|梅干菜|笋干|板栗仁')
tea=re.compile(r'茶|龙井|毛尖|云尖|毛峰|雪芽|雪峰|雀舌|银猴|猴魁|白毫银针|白牡丹|寿眉|大红袍|金骏眉|观音|龙顶|贡菊|杭白菊|惠明|翠兰|剑毫|春毫|涌溪火青|太平布尖|黄金芽|黄金桂|武阳春雨|松萝|汀溪兰香')
results=[]
for score,x in chosen.values():
 name=x['name'];hints=lookup.get(name,[]);cat=next((h.get('t')for h in hints if h.get('t')!='地理标志商标'),'');x=dict(x);x['secondaryCategoryHint']=cat
 reason=None;typ='ingredients';kind='地方食材'
 primary_tea='叶底' in x['sensory'] and not any(w in name for w in ['花生','大豆','米','面','粉','糕','饼','包','粽','鸭蛋','皮蛋','豆腐','虾','鱼','猪','鸡','牛','羊','酒','花椒','茶油'])
 primary_fruit=bool(re.search(r'苹果|葡萄|西瓜|甜瓜|番茄|西红柿|黄瓜|柿饼|核桃|板栗|樱桃|梨|猕猴桃|蜜柚|蜜桔|蜜橘|脐橙|柑橘|荔枝|龙眼|杨梅|草莓|蓝莓|水蜜桃|黄桃',name))
 is_craft=bool(re.search(r'(?:瓷器|白瓷|青瓷|骨质瓷|陶器|紫砂|玉|玛瑙|水晶|灵璧石|松花石|长白石|青田石|寿山石|砚|宣纸|桑皮纸|徽墨|毛笔|云锦|刺绣|湘绣|湖笔|歙砚|瓯绣|木雕|石雕|漆器|漆篮|漆筷|木刻|罗盘|柳编|竹编|凉席|夏布|大布|丝绸|蚕丝|竹炭|裘皮|熏香|白蜡杆|土陶|砂器|砂锅|泥塑|面塑|纸伞|铁锅)$',name.split('(')[0]))
 medicine=bool(unsafe.search(name)) and not primary_fruit and name not in ['淮南麻黄鸡','东港大黄蚬','宁波岱衢族大黄鱼']
 if name in ['泰宁铁皮石斛','桃江竹叶','德化十八学士茶花','金丝桐油','李营法桐','双店百合花','无棣卤虫卵','南召一化性柞蚕','安达奶牛','抚顺哈什蚂','桓仁蛤蟆油','永州异蛇','张家界大鲵','大兴瓜蒌'] or any(w in name for w in ['鹿茸','鹿鞭','山参','林下参','全蝎','苦参']):reason='食品用途、原料身份或生产边界未单独核对，保留候选，不自动写入食品目录。'
 elif name in ['通化山葡萄酒','戎子酒庄葡萄酒','德山大曲','景芝神酿','五合窖','绣林玉液','窑湾绿豆烧'] or '酒' in name and not any(w in name for w in ['酒花','酿酒葡萄','酒糟']):typ='alcohol';kind='地方酒'
 elif name in ['铜官陶瓷','无棣贝瓷','怀仁陶瓷','南通蓝印花布','舒席','抚顺琥珀']:typ='crafts';kind='地方工艺物品'
 elif name in ['千岛银珍','滁菊']:typ='tea';kind='地方茶或代用茶'
 elif '麻核桃' in name:typ='crafts';kind='地方文玩物品'
 elif primary_fruit:typ='ingredients';kind='地方果蔬或干果'
 elif name.endswith(('茶油','李子','白莲','芦笋','芋头','红薯','文蛤','花椒','赤豆','茶乡鸡','乌骨鸡','屯鸟','甜叶菊','茉莉花')):typ='ingredients';kind='地方食材或食品原料'
 elif name.endswith('茶干'):typ='dishes';kind='地方豆制食品'
 elif '茶口粉干' in name:typ='staples';kind='地方米粉'
 elif primary_tea and not medicine:typ='tea';kind='地方茶或代用茶'
 elif is_craft:typ='crafts';kind='地方工艺物品'
 elif medicine:reason='药材、非食品用途或原料边界未能明确；不自动导入食物目录。'
 elif cat=='中药材类' and not any(w in name for w in common_edible):reason='二级索引提示药材用途；缺少明确食品用途，保留待核。'
 elif name in ['运城盐池黑泥','槐山羊板皮(槐皮)','宜章红炮','亳天花粉','英山桔梗(英桔)'] or cat=='其他类' and not any(w in name for w in ['蜂蜜','矿泉水','山泉水','竹根水','食盐','海盐']):reason='非食品物品或用途不明，暂不自动收录。'
 elif '酒' in name and not any(w in name for w in ['酒花','酿酒葡萄','酒糟']):typ='alcohol';kind='地方酒'
 elif any(w in name for w in ['矿泉水','山泉水','竹根水','汽水','苏打水']):typ='drinks';kind='地方饮品'
 elif tea.search(name) or cat=='茶饮类':typ='tea';kind='地方茶或代用茶'
 elif seasoning.search(name) or name.split('(')[0].endswith(('海盐','食盐','大盐')):typ='seasoning';kind='地方调味品'
 elif name in ['火烧坪包儿菜','永城面粉','东宁椴树蜜','义乌红糖','黄岩红糖','将乐红糖','涡阳苔干'] or name.endswith(('笋干','萝卜干')):typ='ingredients';kind='地方食材或食品原料'
 elif name=='荆州鱼糕':typ='dishes';kind='地方加工食品'
 elif staples.search(name) or name.split('(')[0].endswith(('面','粽子','豆包')):typ='staples';kind='地方面食与米制点心'
 elif dishes.search(name):typ='dishes';kind='地方加工食品'
 elif name.endswith(('奶粉','牛奶','酸奶','奶酪','乳粉')):typ='dairy';kind='地方乳制品'
 elif cat=='加工食品类':typ='dishes';kind='地方加工食品'
 if typ=='ingredients' and cat=='地理标志商标' and any(w in name for w in ['苗木','花卉','蝴蝶兰','银杏树','榕树','香樟']):reason='观赏或苗木产品，不作食材收录。'
 x.update(type=typ,kind=kind,reviewStatus='hold' if reason else 'primary-text-supported',reviewNote=reason or '名称、产地范围与品质段已从原始公告PDF文本比对；二级目录只作类别提示，不作产地依据。')
 results.append(x)
(root/'research/.local/shaanxi-gansu-20261115/classified-primary.json').write_text(json.dumps(dict(items=results),ensure_ascii=False,indent=2)+'\n');good=[x for x in results if x['reviewStatus']!='hold'];print('Primary distinct',len(results),'eligible',len(good),'held',len(results)-len(good));print('types',dict(collections.Counter(x['type']for x in good)));print('held names','、'.join(x['name']for x in results if x['reviewStatus']=='hold'));print('unknown classification', '、'.join(x['name']for x in good if not x['secondaryCategoryHint']))
for typ in ['dishes','staples','seasoning','drinks','dairy','crafts']:
 print(typ,'、'.join(x['name']for x in good if x['type']==typ))

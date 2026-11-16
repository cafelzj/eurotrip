"""Add traditional forms, separated place terms and entity/context queries honestly after discovery."""
from pathlib import Path
import json,hashlib,re,sys
sys.path.insert(0,'/tmp/jzy-image-python')
from opencc import OpenCC
R=Path(__file__).resolve().parents[3];B=R/'research/china/enrichment/2026-11-16-jiangzhehu-images';read=lambda p:json.loads(p.read_text());sha=lambda s:hashlib.sha256(s.encode()).hexdigest();scope=read(B/'scope.json')['items'];cc=OpenCC('s2t');terms={};contexts=[]
def add(term,id):
 if term:terms.setdefault(term,[]).append(id)
for r in scope:
 if r['hasPhoto']:continue
 n=r['name'];trad=cc.convert(n)
 if trad!=n:add(trad,r['itemId'])
 # Parenthetical alternate names are query clues, never automatic verification.
 for v in re.split(r'[（(）)]',n):
  if 2<len(v)<len(n):add(v,r['itemId']);add(cc.convert(v),r['itemId'])
 if r['city']and n.startswith(r['city'])and len(n)>len(r['city'])+1:
  core=n[len(r['city']):];term=r['city']+' '+core;contexts.append(dict(itemIds=[r['itemId']],query=term,kind='separated-place-and-subject',mustVerify='地点与品类分词仅产生候选；采用前逐项核对是否同一物品与限定品种。'))
 # Exact county station photographs support the existing interchange guides.
 if '县级目的地接驳'in n:
  county=n.split('·')[0].strip();contexts.append(dict(itemIds=[r['itemId']],query=county+'站',kind='county-interchange-scene',mustVerify='须为该县市真实交通站点；配图不保证列车和接驳服务实时状态。'))
brandTerms={'古越龙山绍兴酒':'古越龙山','会稽山绍兴酒':'会稽山','光明鲜牛奶':'光明牛奶','光明酸奶':'光明酸奶','卫岗牛奶':'卫岗','扬大康源乳品':'扬大酸奶','养乐多无锡乳酸菌饮品':'养乐多','优诺昆山乳品':'优诺','蒙牛宿迁乳品':'蒙牛','伊利苏州乳品':'伊利','明治苏州乳品':'明治 牛奶','一鸣江苏乳品':'一鸣牛奶','一鸣鲜牛奶':'一鸣牛奶','宁波牛奶':'宁波牛奶','红梅乳品':'红梅牛奶','7分甜':'7分甜 饮品','沪上阿姨':'沪上阿姨 饮品','沙洲优黄':'沙洲优黄','苏州宋锦':'宋锦','苏州缂丝':'缂丝','南通蓝印花布':'南通 蓝印花布','扬州漆器':'扬州 漆器','扬州剪纸':'扬州 剪纸','扬州玉雕':'扬州 玉雕','湖笔':'湖笔','南京金箔':'南京 金箔','古茗':'古茗 饮品'}
for n,term in brandTerms.items():
 for r in scope:
  if r['name']==n:contexts.append(dict(itemIds=[r['itemId']],query=term,kind='shorter-entity-name',mustVerify='须核实实际主体；品牌卡不把异地产品或分支照片冒充本地工厂。'))
topicTerms={
'苏州轨道交通 · 古城与新城之间':'Suzhou Metro train',
'无锡地铁 · 先查方向与末班车':'Wuxi Metro train',
'徐州地铁 · 先查方向与末班车':'Xuzhou Metro train',
'苏州 · 地铁票与铁路票分开选':'Suzhou Metro ticket',
'无锡 · 地铁与城际车票怎么选':'Wuxi Metro station',
'徐州 · 地铁与城际车票怎么选':'Xuzhou Metro station',
'苏州 · 出行 App 与线路查询':'Suzhou Metro station',
'无锡 · 交通 App 与线路图':'Wuxi Metro station',
'徐州 · 交通 App 与线路图':'Xuzhou Metro station',
'苏州 · 共享单车与慢行':'Suzhou bicycle',
'无锡 · 共享单车补齐短途':'Wuxi bicycle',
'徐州 · 共享单车补齐短途':'Xuzhou bicycle',
'苏州 · 药店与就医入口':'苏州 医院',
'无锡 · 药店与就医':'无锡 医院',
'徐州 · 药店与就医':'徐州 医院',
'评弹是说书，还是唱曲？':'Suzhou pingtan',
'昆曲与昆山：一门表演艺术怎样走出地方？':'Kunqu Kunshan',
'苏州话与无锡话：同属吴语，也并非处处一样':'Suzhou pingtan',
'一匹丝绸背后，不只有“养蚕”':'Suzhou Silk Museum weaving',
'园林里的窗，也是一幅画':'Suzhou garden window',
'运河怎样把江南城市连成一张网？':'Grand Canal Suzhou',
'邳州 · 银杏与秋季乡村':'Pizhou ginkgo',
'睢宁 · 儿童画文化':'睢宁 儿童画',
'无锡大剧院':'Wuxi Grand Theater',
'丰县博物馆':'丰县 博物馆 徐州',
'蠡湖':'Wuxi Lihu Lake',
'苏州中心商场':'Suzhou Center mall',
'灵山胜境':'Lingshan Grand Buddha Wuxi',
'无锡恒隆广场':'Center 66 Wuxi',
'苏州大学 · 天赐庄校区':'Soochow University Suzhou campus',
'虞山':'Yushan Changshu',
'云龙山':'Yunlong Mountain Xuzhou',
'梁溪脆鳝':'Liangxi crispy eel',
'无锡小笼包':'Wuxi xiaolongbao',
'南京鸭血粉丝汤':'duck blood and vermicelli soup Nanjing',
'温州鱼丸':'Wenzhou fish ball soup',
'文思豆腐':'Wensi shredded tofu soup',
'开洋葱油拌面':'dried shrimp scallion oil noodles',
'苏州三虾面':'three shrimp noodles Suzhou',
'扬州炒饭':'Yeung Chow fried rice',
'八宝饭':'Babaofan',
'牛肉锅贴':'Nanjing beef potstickers',
'霸王别姬':'霸王别姬 徐州 美食',
'苏州宋锦':'Song brocade',
'苏州缂丝':'Kesi',
'南通蓝印花布':'Nantong blue calico museum',
'湖笔':'Huzhou ink brush',
}
for n,term in topicTerms.items():
 for r in scope:
  if r['name']==n:contexts.append(dict(itemIds=[r['itemId']],query=term,kind='topic-or-context-entity',mustVerify='场景与条目须有明确直接关联，采用时标明真实对象；不以场景照片证明时刻、制度或历史结论。'))
plan=[];pairs=list(terms.items())
for start in range(0,len(pairs),12):
 group=pairs[start:start+12];q=' OR '.join('"'+term.replace('"','')+'"'for term,refs in group);plan.append(dict(id=sha(q)[:20],query=q,terms=[term for term,refs in group],itemIds=list(dict.fromkeys(id for term,refs in group for id in refs)),termMap={term:list(dict.fromkeys(refs))for term,refs in group},kind='commons-traditional-and-alternate-names'))
for r in contexts:
 q=r['query'];plan.append(dict(r,id=sha(q)[:20],terms=[q]))
# Preserve later source-led additions instead of replacing the plan.
if(B/'additional-query-plan.json').exists():
 prior=json.loads((B/'additional-query-plan.json').read_text())['jobs'];plan=list({j['id']:j for j in plan+prior}.values())
# The fetcher reads these separately from the sealed knowledge file.
(B/'additional-query-plan.json').write_text(json.dumps(dict(date='2026-11-16',stage='source-led-query-expansion-not-presearch-memory',jobs=plan),ensure_ascii=False,indent=2)+'\n');print('ADDITIONAL',len(plan),'jobs;',len(terms),'traditional/short-name clues;',len(contexts),'entity/context queries')

# 中国卡片：全国、省、市、县区统一浏览

更新：2026-11-15。中国栏目各层级使用同一套卡片、分类筛选和瀑布流／分类浏览／表格。导航首项为“全国总览”。

| 页面 | 入口示例 | 地区选择与范围 |
| --- | --- | --- |
| 全国总览 | `#card-manager/china` | 全国省份地图及城市、县区地图，汇总全部已收录卡片 |
| 省总览 | `#china/jiangsu` | 省、市、县区三个选择框；本省所有市县已有内容 |
| 市总览 | `#china/jiangsu/suzhou` | 同样三个选择框；本市及下辖县区已有内容 |
| 县／区 | `#china/jiangsu/suzhou/kunshan` | 同样三个选择框；只显示已有明确地域归属的内容 |

全国地图深色省份已有卡片，并提供常驻的省份筛选按钮，显示名称与数量、与地图联动；收起地图后仍可使用。其他省份以灰框注明“待收录”。目前行政目录覆盖24省市、291个城市范围、2448个县级单位；全国总览不代表全国资料已全部补齐。行政地图只作选择地区与展示边界，不用地图推导食品产地。

## 一套卡片与独立中国分类

`CardStore.nodes` 为统一注册库。原4255项风物全部纳入中国栏目；与原142张中国卡片合并12组重复身份后，在4385张基线之上补充江西222、广西302、广东272张，再纳入陕西147、甘肃164张，本轮再新增四川573、重庆94、云南265、贵州203张，现共6627张中国卡片（6497项地方风物，其中6450项有来源、47项原有待核线索）。旧ID、正文、来源、关系及图片引用继续保留，食品概览、具体品种和店铺不无条件合并。

中国分类在 `data/china-categories.js`，欧洲分类继续在 `data/categories.js`。中国“美食与特产”保留乳制品、饮品、酒、茶、特色菜、面食、地方食材、调味品、物品与工艺九类，另含“餐馆与食品品牌”。交通指南、机场车站与码头、历史地理与方言等采用已合并的中国分类。旧分类名称和ID映射到新类别。

全部页面共用紧凑的一级、二级分类按钮、关键词、资料状态、重置与CSV导出。按钮名称和数量同排。菜单按省 → 市 → 县区逐级选择，支持方向键、返回上级和Esc；菜单搜索可按现有省市县名称、所属地区或行政代码查找，以所属省市区分同名地名。

## 卡片显示与详情

- 瀑布流每批24张，逐步加载；分类浏览按一级、二级分组，支持继续加载。
- 所有卡片提供“查看详情”，跳到统一 `#card/<id>` 详情页；列表不再展示“风味与来源”等正文折叠区。正文、来源、未核实线索、旧卡片补充资料和图片许可在详情保留，列表图片不再附来源文字；已有别名、品牌、企业、食材、产品类型和具体地区按实际填写情况展示。
- 表格压缩为四列：**卡片名称、地区、分类、内容与资料状态**。详情和地图操作放在名称列；省市县合并成地区列，一级与二级分类合并成分类列。支持每页25／50／100张、翻页及导出全部筛选结果，导出仍保留完整字段和ID。
- URL保存类别、关键词、资料状态、视图与分页；地区选择可切换对应层级，详情返回与刷新恢复原列表条件。重置清除卡片条件，省市县页面保留当前地区。
- 全国页的地区面板采用三栏：左侧城市清单在上、县区清单在下，中间城市地图，右侧县区地图；去掉重复小字说明，放大地图；页面不显示地图来源小字，出处保留在本文与研究采用记录。窄屏按可用宽度换行。

## 数据与底稿位置

`data/flavors.js`、`data/china-cards.js`、`data/card-reading.js` 是编辑输入；`data/china-region-catalog.js` 是行政目录，县区归属在 `data/flavor-counties.js`，图片及许可配置在 `data/flavor-images.js` 和 `data/card-images.js`。运行时由 `china-collection.js` 合并，原风物独立功能已经撤下。

研究资料统一从 [中国卡片研究目录](../research/china/README.md) 和 [机器可读总索引](../research/china/index.json) 查找。当前整合记录移入 `research/china/integration/`；原风物知识稿、原850份阅读摘记、来源、历史批次、地图及配图底稿继续保留原路径和指纹，`research/flavors/` 作为中国卡片下的历史专题目录。

- [四川、重庆、云南、贵州：1135项新增、实拍与缺口](../research/china/expansions/2026-11-15-southwest/README.md)
- [陕西、甘肃：311项新增、逐地搜索与采用](../research/china/expansions/2026-11-15-shaanxi-gansu/README.md)
- [江西、广西、广东：796项新增、知识稿、逐地搜索与采用](../research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong/README.md)
- [当前6627张卡片验收](../research/china/integration/current-collection-audit.json)
- [卡片合并登记](../research/china/integration/china-collection.json)
- [4255项完整迁入验收](../research/china/integration/standalone-retirement.json)
- [统一页面及地图采用记录](../research/china/integration/unified-overviews.json)
- [底稿迁移映射](../research/china/path-migrations.json)
- [正式数据、底稿和原件保留说明](flavor-migration.md)

47项待核线索继续保留证据缺口；1844项风物未明确县区，不分配到各县。原有300–500字说明及配图缺口继续维护。来源链接存在不等于配方、历史、现售与许可都已验证。行政中心只作地区地图视角，不给食品虚构店铺或POI。

## 后续可用资料来源

以下10项由用户推荐，已登记到 [候选资源底稿](../research/china/sources/resource-candidates-2026-11-15.json)。**本次仅登记，未逐页读取、核实数据覆盖、测试演示可用性或审阅许可，尚未直接采用为卡片事实或配图。** 个人或课程项目可参考结构和交互，具体地方事实再核对原始来源。

| 资源 | 后续用途 | 入口 |
| --- | --- | --- |
| 华夏览胜 | 省份导航、景点美食与历史人文、城市攻略和地方海报 | [GitHub](https://github.com/tanjunming111/HUAXIA_Travel_Web) · [作者演示链接](https://tanjunming111.github.io/HUAXIA_Travel_Web/) |
| 中国美食地图 | 具体餐馆候选、地点搜索、距离和导航跳转；区分店铺与地方食品 | [GitHub](https://github.com/wjjwkwindy/awesome-cn-food-web) · [作者演示链接](https://food.arcticalpaca.com/) |
| 非遗数字博物馆 | 课程作品的非遗分布、热力图、传承人与文化叙事设计 | [作品说明](https://github.com/Jianghao/ucasmap/issues/250) · [演示链接](https://aaacute.github.io/YYYHQL/) |
| 寻迹 · Heritage Trail | 地图猜地、互动工坊、节气和知识图谱；作者所称1557项规模待核 | [GitHub](https://github.com/Aaron-gx/xunji-heritage-trail) |
| 非遗管理平台 | 地区／类别／级别、项目、传承人、技艺档案、三维器物和关系结构 | [GitHub](https://github.com/Wlymc/ICH-Management-Platform) |
| 华夏非遗 | 展馆式页面、项目展示和地理分布星图 | [GitHub](https://github.com/sbcbyhahaha/feiyiweb) |
| 中国传统村落数字博物馆 | 村镇级历史、建筑、民俗、美食物产，以及全景、图片和影音线索 | [网站](https://www.dmctv.cn/) · [村落入口](https://www.dmctv.cn/prevue.aspx) |
| 中国非物质文化遗产网 | 项目名录、传承人、地区分布与饮食技艺核对候选 | [网站](https://www.ihchina.cn/) |
| 浙江非遗网 | 浙江市县项目、传承人、专题和视频；主办信息与正文逐项核对 | [网站](https://www.zjich.cn/) |
| 特色谷特产网 | 县域特产、小吃、农产品和别名候选；民间资料的产地与历史需交叉核对 | [网站](https://www.tesegu.com/) |

检索饮食非遗时组合“食物名称＋制作技艺／酿造技艺／饮食习俗”，再加入省市县、项目名录或传承人。按 `AGENTS.md` 保存查询、原文与指纹、阅读要点及采用决定；图片和影音许可另行审阅，不从项目开源推定素材可转载。

## 验证与维护

`tests/china-overviews.cjs` 验证四个统一层级、三种视图、四列表格、详情返回、地区切换、全国地图与待收录框、地区搜索及五种宽度。其他测试继续覆盖图片、县区地图、来源、欧洲隔离和共享样式。

`python scripts/index-china-research.py` 更新中国总索引与风物专题索引；`node scripts/audit-china-flavor-migration.cjs` 逐项核对原风物字段，`python scripts/check-research.py --local-archives` 检查路径、阅读指纹和原件归档。技术测试不替代事实验证。

本轮四地仅采用对应实拍35张（3.08%），1100张明确待补，图片目标尚未达到；不以通用图或插图补齐。重庆按直辖市与38个区县组织。行政目录沿用所存DataV边界版本；两江新区等未在此版本定位的来源地名保留原词与待明确范围，不强行赋县区代码。

卡片列表采用浅色细边框、紧凑标题与左对齐地域，图片统一16:10；不重复显示“县区待明确”，完整归属仍在详情和表格保留。已审阅的照片也须满足列表展示质量，`listDisplay: false` 的场景照片只在详情显示，避免暗且杂的摊位照片占据列表。

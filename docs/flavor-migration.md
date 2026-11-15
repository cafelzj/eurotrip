# 风物食单迁入中国城市：保留与维护说明

日期：2026-11-15。独立风物食单功能已撤下，内容统一在 **中国城市 → 全国总览 → 美食与特产** 浏览。原 `#flavors` 链接转到 `#card-manager/china?primary=food`，省、市、县区、类别、关键词、资料状态和主要食材条件继续传递，不再维护第二套列表页面。

## 迁移核对

执行 `node scripts/audit-china-flavor-migration.cjs` 可复核 [逐项迁移验收记录](../research/china/integration/standalone-retirement.json)。脚本对原4255条逐项检查全部编辑字段、原别名、正文、来源链接和县区归属；规范化字段为 `type → flavorType`、`city → cityName`、`sources → sourceIds`。合并旧城市卡片时可补充别名和资料，原字段内容不丢弃。

- 原风物4255条全部在 `CardStore.nodes`，保持原条目ID；中国栏目共4385张规范卡片。
- 4208条有来源记录，47条待核线索继续标识；1269条未明确县区，不自动分配给各县。
- 旧中国城市卡片12组合并关系见 [统一登记](../research/china/integration/china-collection.json)。旧卡片ID仍可访问，旧正文、关系、来源和图片引用保留。
- 配图、署名和许可继续由原图片配置与审核记录管理；不把无图卡片标为已配图。
- 300–500字说明、未配图及事实核验缺口仍按原队列维护，撤下独立入口不代表这些任务已完成。

## 数据和底稿在哪里

| 内容 | 保留位置及用途 |
| --- | --- |
| 正式风物编辑数据 | `data/flavors.js`；继续作为中国卡片的编辑输入，不是废弃底稿 |
| 省市县归属与地图 | `data/flavor-map-regions.js`、`data/flavor-counties.js`、`assets/maps/flavors/` |
| 已采用图片与许可 | `data/flavor-images.js`、`data/card-images.js`、`assets/` |
| 分类、登记及运行时合并 | `data/china-categories.js`、`data/china-card-merges.js`、`china-collection.js`、`card-store.js` |
| 卡片和地区地图组件 | `flavors.js` 的 `ChinaFlavorUI`、`flavors.css`；复用地区地图。卡片统一由中国浏览组件展示，正文跳转共享详情页 |
| 所有公开研究底稿 | [中国研究总入口](../research/china/README.md)、[机器可读总索引](../research/china/index.json)，原风物专题保留在 `research/flavors/` |
| 自身知识、外搜及交叉审阅 | `research/flavors/program-4000/`；原始知识候选和历史批次保留原内容 |
| 来源与阅读摘记 | `research/flavors/sources.json`、`research/flavors/reading-notes/` |
| 配图核对及待办 | `research/flavors/images/`、`research/media/food/review.json` |
| 原网页、完整响应和本地原件 | `research/.local/`；[归档目录](../research/archives/README.md) 记录批次及指纹。本地保留不等于异地备份 |

## 中国分类精简

九个风物分类全部保留。餐馆2张与原购物下的食品／消费品牌3张合并为“餐馆与食品品牌”5张；连锁餐饮归同类，点餐／结账提醒归“日常／应急”。乘车指南、地铁、共享骑行合为“交通指南”26张；机场、车站、码头及枢纽合为“机场、车站与码头”9张；历史地理与语言趣闻合为“历史地理与方言”21张。中国一级数量为：美食与特产4268、交通35、购物16、景点36、生活文化30，总数4385不变。

旧分类ID和中文名称在中国栏目映射到新分类，包括跨一级移动的食品品牌。全库为空的二级分类不显示；仅因地区或搜索而暂时为零的已有分类仍可看到。欧洲分类独立，不套用中国合并规则。

## 后续维护顺序

1. 按根目录 `AGENTS.md` 执行知识候选 → 外搜原件 → 交叉审阅 → 采用，底稿从统一入口登记。
2. 更新正式编辑数据和来源，必要时更新县区或配图配置；候选表不能直接当正式卡片导入。
3. 若分类规则变化，同步 `scripts/build-china-collection.py` 的生成规则与分类配置；原始编辑分类可通过规范化映射兼容。
4. 审阅变化后执行 `node scripts/audit-china-flavor-migration.cjs --write` 更新验收记录，再执行 `python scripts/index-flavor-research.py` 更新底稿索引。
5. 运行迁移审计、研究检查及中国卡片、菜单、县区和图片回归测试，再发布并核对线上。

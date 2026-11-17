# 中国卡片研究资料总入口

更新：2026-11-17。中国栏目统一为全国、省、市和县区卡片页面；本目录统一组织中国卡片的资料入口、整合采用记录和未来来源候选。[总索引](index.json) 自动登记相关公开底稿的用途、路径、大小与SHA-256。

## 正式数据和研究资料分开

正式展示读取 `data/` 和 `CardStore.nodes`，不直接读取研究候选。现有6627张中国卡片，包括6497项地方风物（6450项有来源记录、47项原有待核线索）。本批新增四川573、重庆94、云南265、贵州203项，合计1135项；此前陕西147、甘肃164项；此前江西、广西、广东796项及原4255项原样保留。行政目录为24省市、291个城市范围、2448个县级单位；这不表示每县每品类均已补齐，其他10省区仍标注待收录。

| 用途 | 唯一维护位置 |
| --- | --- |
| 正式卡片编辑输入与结构 | `data/flavors.js`、`data/china-cards.js`、`data/card-reading.js`；分类、地区和合并配置见 [实现说明](../../docs/china-collection.md) |
| 中国卡片合并、12组旧ID和来源 | [统一登记](integration/china-collection.json) |
| 现有卡片文字、实拍与全量缺口 | [持续补充](enrichment/README.md)、[全国首批](enrichment/2026-11-15-national-01/README.md)、[6627张全量队列](enrichment/queue.json) |
| 本批四地1135项扩充 | [知识、外搜、交叉核对、配图与采用](expansions/2026-11-15-southwest/README.md) |
| 陕西、甘肃311项扩充 | [知识、外搜、交叉核对与采用](expansions/2026-11-15-shaanxi-gansu/README.md) |
| 上批796项扩充与超过5000的核对 | [知识、外搜、交叉核对与采用](expansions/2026-11-15-jiangxi-guangxi-guangdong/README.md)；[当前卡片验收](integration/current-collection-audit.json) |
| 原风物4255项完整迁入后的验收 | [逐项核对记录](integration/standalone-retirement.json)；[数据与原件保留目录](../../docs/flavor-migration.md) |
| 全国／省／市／县统一界面及地图变更 | [采用记录](integration/unified-overviews.json)；原地图几何保持不变 |
| 未来资料来源候选 | [用户推荐的10个资源](sources/resource-candidates-2026-11-15.json)，尚未逐页读取、核验数据或许可 |
| 地方风物来源、覆盖和待核队列 | [专题底稿](../flavors/README.md)、[来源审阅](../flavors/sources.json)、[城市覆盖](../flavors/coverage.json)、[市县队列](../flavors/queue.json) |
| 自身知识 → 外搜 → 交叉审阅 → 采用 | [4000项研究索引](../flavors/program-4000/README.md)，初始知识稿及采用ID原样保留 |
| 阅读摘记、早期批次及否决 | `research/flavors/reading-notes/`、[历史批次索引](../flavors/batches/2026-11-14/README.md) |
| 县区地图和已明确地名归属 | [县图审阅](../flavors/county-maps.json)；地图不作为产地事实的证明 |
| 中国风物配图、许可和缺口 | [配图审阅](../flavors/images/review.json)、[未配图队列](../flavors/images/coverage.json)；跨栏目共用图片沿用 [食物审核](../media/food/review.json)，不复制结论 |
| 完整原网页、工具响应、原图 | `research/.local/`，按 [归档总目录](../archives/README.md) 查找；本地保存不等于异地备份 |

## 为什么仍保留 `research/flavors/`

它是中国卡片下的地方风物专题及历史资料目录，不再对应独立网站功能。历史批次、初始知识稿、850份阅读摘记和原始证据保留原路径与原字节，避免破坏来源指纹、早期采用记录和外部链接。当前卡片整合记录已实际移入 `research/china/integration/`，旧位置只留下明确的迁移指引，不维护重复副本。[本次迁移映射](path-migrations.json) 记录移动前后的指纹。

中国总索引汇总这些位置；风物专题索引由同一维护命令更新。新增中国资料登记在本目录，已有专题资料按其唯一位置追加，禁止把多个批次简单拼接成新的“已验证”证据。

## 后续维护

按根目录 `AGENTS.md` 执行知识候选、外搜原件、交叉核对、采用和发布。区分正式数据、候选、已读来源、未读线索及历史记录。新的非美食中国卡片研究也从这里组织，不挪入风物候选表冒充已有证据。

执行 `python scripts/index-china-research.py` 更新总索引及专题索引；执行 `node scripts/audit-china-flavor-migration.cjs` 与 `python scripts/check-research.py --local-archives` 核对现有卡片、阅读指纹及原件归档。

江浙沪持续实拍任务见 [最新批次](enrichment/2026-11-17-jiangzhehu-images-03/README.md) 与 [当前逐卡片覆盖](enrichment/2026-11-17-jiangzhehu-images-03/coverage.json)：220/981张有图，761张待补，尚未全部补齐。[首批底稿](enrichment/2026-11-16-jiangzhehu-images/README.md) 保留当时的采用与覆盖快照。

此前补充状态：[1000条待编辑底稿与12张采用实拍](enrichment/2026-11-15-national-02-1000/README.md)。文字未通过逐项编辑前不更新正式阅读层，也不计作已完成。

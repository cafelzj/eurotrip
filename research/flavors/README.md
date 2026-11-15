# 风物食单研究总入口

更新：2026-11-15。所有历史批次、原始知识稿、外搜索引、采用决策、地图与配图资料，从这里查找。[机器可读总索引](index.json) 为每份公开底稿登记用途、路径、大小与SHA-256。用 `python scripts/index-flavor-research.py` 更新，不覆盖旧批次或初始知识稿。

## 正式展示数据与研究底稿

风物的编辑输入与地区、图片配置包括：`data/flavors.js` 是4255项正式卡片，`data/flavor-map-regions.js` 是省内城市目录，`data/flavor-counties.js` 是县区目录与明确归属，`data/flavor-images.js` 是已采用的配图。卡片、地图和照片分别引用其来源记录；候选、搜索响应和历史稿不直接作为卡片发布。运行时已与原中国城市卡片统一到 `CardStore.nodes`，A与新版中国管理页共用同一批风物对象。中欧分类独立，原始输入及ID继续保留。

| 用途 | 统一入口 |
| --- | --- |
| 中国城市与风物统一登记 | [4385张统一卡片及12组旧ID](integration/china-collection.json)，架构见 [统一说明](../../docs/china-collection.md) |
| 当前来源、覆盖与待核队列 | [来源审阅](sources.json)、[城市覆盖](coverage.json)、[市县队列](queue.json) |
| 自身知识 → 外搜 → 交叉审阅 → 采用 | [4000项研究索引](program-4000/README.md)，其中初始知识稿独立保留 |
| 正式卡片ID与底稿对应 | [采用清单](program-4000/adoption.json)、[交叉审阅](program-4000/cross-review.json) |
| 逐省市县进度、300–500字说明缺口 | [研究进度](program-4000/progress.json) |
| 历史批次、旧候选及否决理由 | [历史批次索引](batches/2026-11-14/README.md) |
| 公告边界纠错 | [边界审阅](program-4000/boundary-review.json) |
| 县区地图和县名归属依据 | [县图审阅](county-maps.json)；仅以卡片已有明确地名分配，不以地图推断物产 |
| 配图采用、备选、失败和否决 | [配图审阅](images/review.json)、[未配图卡片队列](images/coverage.json) |
| 完整响应、原图、元数据与历史工作文件 | [归档总入口](../archives/README.md)；全文和原件在Git忽略的 `research/.local/` 保留 |

## 批次如何衔接

早期知识、来源纠错和茶品牌稿保留在历史批次中；[1394→1733项](batches/2026-11-14/expansion-1733.json) 记录物产与工艺扩充，[1733→2112项](batches/2026-11-14/expansion-2112.json) 记录市县与乳品企业扩充，[2112→4255项](program-4000/adoption.json) 记录三步研究的新增与合并。这些阶段数字保留当时含义，当前总数统一以正式数据为准。

既有48份阅读笔记、802份本轮来源笔记均保持原路径与指纹。总入口做用途分类与关联，不把多个阶段的候选表拼接后当成新证据，也不把历史待核状态悄悄改成已验证。新地图和配图记录归入本目录，已审核的共用食物照片仍引用 `research/media/food/review.json`，不复制成另一套审核结论。

说明直接在卡片内展开。底稿中的300–500字任务和未配图队列继续保留；本次配图是首批9张卡片，未配置图片的卡片保持文字展示。照片许可和主题需逐张核对，不用通用图或生成图冒充地方菜成品。

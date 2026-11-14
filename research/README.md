# 研究资料与底稿

这里保存检索、来源核对、编辑决策、候选与否决记录。网站展示内容以 `../data/` 的实际配置为准；被收录的底稿不自动等于已验证事实，也不自动发布成卡片。

| 主题 | 当前记录 | 历史与原始材料 |
| --- | --- | --- |
| 地方风物 | [来源审阅](flavors/sources.json)、[市级覆盖](flavors/coverage.json)、[市县检索队列](flavors/queue.json) | [2026-11-14批次](flavors/batches/2026-11-14/README.md)、`flavors/reading-notes/` 的逐源阅读摘记 |
| 食物配图 | [审核与否决](media/food/review.json)、[候选](media/food/candidates.json)、[覆盖](media/food/coverage.json) | [2026-11-09批次](media/food/batches/2026-11-09.json) |
| 交通配图 | [审核记录](media/transport/review.json) | 作者、许可、拍摄与审核说明随记录保留 |
| 本地图片 | [编码与下载指纹](media/local-copies.json) | 原图与本地版本的哈希、格式转换记录 |
| 景点插画 | [生成计划与提示](media/landmarks/generation-plan.json) | 生成图原件不等于网站导出图；网站配置在 `data/landmark-art.js` |
| 词典音标 | [逐词核对记录](dictionary/ipa-records.json) | 许可与维护规则见 [音标说明](../docs/ipa-sources.md) |
| 生活开销 | [来源与表格摘录](living-costs/sources.json) | 编辑与更新规则见 [维护说明](../docs/living-costs.md) |

## 保存层次

- `sources.json`、`queue.json` 等为持续维护的当前记录。更正可核对的事实，不把历史阶段数字改成今天的数字。
- `batches/YYYY-MM-DD/` 为当批决策、搜索索引与编辑底稿。候选不等于采用，旧批次不等于当前状态。
- `reading-notes/` 保存编辑整理的事实要点；保留原字节与SHA-256，移动目录不重写笔记正文。
- `.local/` 保存完整网页、搜索响应、截图与归档包，由 `.gitignore` 排除，不随 Git 或网站发布。公开记录保留来源网址、时间、指纹与本地归档索引。
- [archives/](archives/README.md) 的清单纳入 Git，归档包只在本机。**清单不含原始内容，本地归档不等于异地备份。** 换环境前需要另外保存归档包。

只清理明确可重建的缓存；原始材料、零结果、失败读取和被否决的候选都不是垃圾。全文网页是否可公开分发须逐源判断，不能因为已下载就直接发布。

## 整理与追溯

本次路径调整见 [迁移表](path-migrations.json)，包含迁移前后路径及校验值；旧文件仍可从 Git 历史恢复。网站提供下载的三份 Eurostat 原始数据继续位于 `data/snapshots/`。

新一轮研究先记录查询与来源，再将采用结果写入正式数据；重复检索追加运行记录，不覆盖旧 `searchEvidence`，也不自动完成 `reviewedTopics`。整理后检查引用、来源指纹、图片署名和相应页面；具体维护命令见 [脚本索引](../scripts/README.md)。

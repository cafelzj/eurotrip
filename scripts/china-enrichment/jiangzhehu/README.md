# 江浙沪已有卡片实拍维护

对应 [研究底稿](../../../research/china/enrichment/2026-11-16-jiangzhehu-images/README.md)。Python需Pillow；`extend-keywords.py` 生成简繁体扩展时另外使用OpenCC（本轮环境安装在`/tmp/jzy-image-python`）。已保存查询计划与结果可直接复核，不能重新生成并冒充外搜前知识。

1. `search.py` 追加实际Commons检索，按查询哈希复用完整响应，不按运行序号复用；当前采用顺序请求与限流退避。
2. `wikipedia.py`／`wiki-media.py` 只建立首图指针与许可候选。`video-candidates.py` 同样只记录候选，本轮未采用视频截帧。
3. `flickr.py` 保存原始页面、页面声明的作者与许可及图片响应；未声明合适许可的来源不自动采用。非商业许可另外记录用途条件。
4. `download.py` 保存供人工看图的图片响应及指纹；每次保留旧候选快照与接触表索引，限流失败不算无图。明显不同主体可在元数据阶段否决，已经有采用图的新候选可明确暂缓，不声称已审核。
5. 人工核对图片和来源，编辑批次 `visual-decisions.json`。未经逐项批准不得直接从候选导入。
6. `publish.py` 核对封存与旧输入指纹，只写新增中国图片配置和采用历史；撤下素材保留但解绑。NC素材必须有明确适用的非商业部署条件。
7. `node scripts/china-enrichment/refresh-queue.cjs` 更新实际全国状态，`coverage.py` 更新江浙沪逐卡片状态，不把计划算作完成。
8. 最终检查前用 `scripts/archive-research.py` 冻结原件清单；再次运行时另取批次归档名，不覆盖既有归档。`node tests/china-images.cjs` 验证新增图片指纹、规范化卡片、列表／详情和窄屏视图；发布后可设置 `SITE_URL` 复核线上。

研究工具允许重复读源，不代表可以覆盖较新人工编辑。四个原始数据层是本批基线，修改基线须另建任务并明确复核，不通过改写基线使检查通过。

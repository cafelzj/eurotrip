# 江浙沪实拍第二批维护

对应 [本批底稿](../../../research/china/enrichment/2026-11-17-jiangzhehu-images-02/README.md)。命令从仓库根目录运行，Python需要Pillow；百科HTML辅助读取另需BeautifulSoup。完整响应在本地底稿，公开采用决定与哈希在批次目录。

- `search-flickr.py` 按稳定查询ID追加实际历史，使用完整原响应缓存；`collect.py` 只收集候选，不自动采用。避免在封存后重新生成接触表覆盖实际看过的版本。
- `commons.py`、`wikipedia.py`、`wikipedia-batch.py`、`off-search.py`、`off-photos.py` 为该批来源读取工具；不以首图、同名或搜索结果直接配图。历史错误与首次输出单独保留。
- 人工修改批次 `visual-decisions.json` 后运行 `python scripts/china-enrichment/jiangzhehu-02/publish.py`。它保留旧资产与绑定，核对知识封存、原输入、原页和图片哈希；仅批准的主体可进入正式配置。不演绎照片保留完整JPEG原字节，复用另记。
- `node scripts/china-enrichment/refresh-queue.cjs` 后运行本目录 `coverage.py` 更新本批当前清单；原批覆盖快照保留，不以新数据覆盖旧日期收据。
- `node tests/china-images-02.cjs` 检查本批实际列表／详情与手机端；`python tests/china-image-files-02.py` 检查真实文件与不演绎原字节。`SKIP_UI=1 node tests/china-images.cjs` 与旧文件检查用于上批静态回归，避免每批重复遍历旧图片UI。

本批原件归档后视作历史快照。后续继续收集应新建批次，复用来源缓存与稳定ID，不改写旧知识封存、原件或采用历史。旧维护工具不是新的后台采集任务；不要对历史批次直接重跑后覆盖底稿。

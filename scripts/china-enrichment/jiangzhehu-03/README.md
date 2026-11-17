# 江浙沪第三批实拍工具

从仓库根目录运行，Python依赖Pillow；UI检查使用已安装的Playwright和Chromium。对应[采用底稿](../../../research/china/enrichment/2026-11-17-jiangzhehu-images-03/README.md)。

采集工具分别保存英文条目、具体分类HTML、明确文件名和Flickr搜索；只生成候选，不自动采用。查询和元数据响应在`research/.local/jiangzhehu-images-20261117-03/`，HTTP429、414和下载失败保留。Commons搜索发生429时停止后续调用，转向其他来源；不得重跑历史计划覆盖失败记录。

人工核对后维护`visual-decisions.json`，运行`python scripts/china-enrichment/jiangzhehu-03/publish.py`写入审核过的图片绑定。它核对原图、来源、旧输入及既有绑定，不接收未知增量。批次封存后不能借历史脚本覆盖后续批次。

运行`node scripts/china-enrichment/refresh-queue.cjs`，再运行`python scripts/china-enrichment/jiangzhehu-03/coverage.py`生成当前覆盖；不修改以前批次的验收快照。`node tests/china-images-03.cjs`检查全部本批列表／详情及320像素三种模式，`python tests/china-image-files-03.py`检查像素、ICC和不演绎原字节。底稿链接和本地归档由仓库通用检查验证。

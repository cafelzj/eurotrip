# 维护脚本

从仓库根目录执行。网站自身不需要Python或构建步骤；这些工具用于资料维护，不会因打开网页自动运行。

| 脚本 | 输入与输出 | 依赖与注意事项 |
| --- | --- | --- |
| `archive-research.py` | 研究工作目录 → 本地归档包及 `research/archives/` 清单 | Python标准库；逐成员校验，拒绝覆盖，保留输入 |
| `check-research.py` | 索引、路径、笔记、公开快照、可选本地归档 → 检查结果 | Python标准库；离线、不修改文件 |
| `search-flavor-counties.py` | 市县队列 → 追加检索证据、逐次运行日志及本地响应原件 | Python标准库、网络；不自动采用食品或完成研究主题 |
| `refresh-flavor-coverage.py` | 正式风物目录 → 覆盖数量与队列条目引用 | Python标准库；保留检索记录与主题核对状态 |
| `build-flavor-research-queue.py` | 已读取的市级行政边界目录 → 市县检索目录 | Python标准库；保留旧证据；行政边界不作食品归属证明 |
| `build-flavor-province-maps.py` | 行政边界目录 → 省图及 `data/flavor-map-regions.js` | Python标准库；会更新正式地图文件 |
| `build-china-province-map.py` | 边界输入 → 中国省图 | Python标准库；先查看 `--help` 确认输入与输出 |
| `build-landmark-art.py` | 生成计划、本地原图记录 → 图片导出及景点配置 | ImageMagick 7 `magick`；不负责生成画作；完整导出前拒绝缺失原件 |
| `build-produce-stats.py` | 固定版本公开数据 → 匈牙利统计 | Python标准库、网络；固定版本与原始缓存按脚本核对 |
| `build-produce-supply.py` | 固定版本FAOSTAT副本 → 匈牙利供需 | `h5py`、网络；原始缓存保留，不把零值自动当作真实为零 |
| `build-produce-countries.py` | 固定版本供需及能源数据 → 三国统计、能源及公开快照 | `h5py`、网络；导入前两份统计脚本，保持三者同一版本 |

```sh
python scripts/check-research.py
python scripts/check-research.py --local-archives
python tests/research-workflow.py
python scripts/refresh-flavor-coverage.py
python scripts/search-flavor-counties.py --province jiangsu --city 无锡 --place 江阴市
```

最后一条会实际联网并追加记录。默认队列在 `research/flavors/queue.json`，逐次日志在 `research/flavors/search-runs/`，完整响应在Git忽略的 `research/.local/search-responses/`；不再依靠 `/tmp` 保存新检索原件。参数可指定隔离的队列和输出目录，供测试或独立研究使用。

浏览器测试见 `tests/*.cjs`，沿用现有Playwright与Chromium环境及各文件的 `SITE_URL`；完整命令见 [主说明](../README.md#验证)。一次性批次工作脚本保存在本地研究归档内，不能当作通用生成器直接重跑。

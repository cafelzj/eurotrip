# 维护脚本

从仓库根目录执行。网站自身不需要Python或构建步骤；这些工具用于资料维护，不会因打开网页自动运行。

| 脚本 | 输入与输出 | 依赖与注意事项 |
| --- | --- | --- |
| `archive-research.py` | 研究工作目录 → 本地归档包及 `research/archives/` 清单 | Python标准库；逐成员校验，拒绝覆盖，保留输入 |
| `check-research.py` | 索引、路径、笔记、公开快照、可选本地归档 → 检查结果 | Python标准库；离线、不修改文件 |
| `search-flavor-counties.py` | 市县队列 → 追加检索证据、逐次运行日志及本地响应原件 | Python标准库、网络；不自动采用食品或完成研究主题 |
| `refresh-flavor-coverage.py` | 正式风物目录 → 覆盖数量与队列条目引用 | Python标准库；保留检索记录与主题核对状态 |
| `index-flavor-program-searches.py` | 4000项研究的完整查询响应 → 公开索引与逐地搜索证据 | Python标准库；不把搜索完成写成事实核实完成 |
| `flavor-program/` | 已保存本地输入 → 单次采用、产品边界复核、交叉审阅索引 | 见 [研究索引](../research/flavors/program-4000/README.md)；单次导入拒绝重复运行，初始知识稿保持不变 |
| `build-china-collection.py` | 保留的行政原件与旧卡片快照 → 独立中国分类、地区目录、别名和整合登记 | Python标准库；不生成食品POI，见 [统一说明](../docs/china-collection.md) |
| `index-flavor-research.py` | 所有风物底稿 → 统一用途、历史批次及指纹索引 | Python标准库；保留原稿，见 [总入口](../research/flavors/README.md) |
| `build-flavor-county-maps.py` | 已存行政边界与明确县名 → 县图、归属注册表及来源审阅 | Python标准库；`--fetch-missing` 保存缺失原件，不由地图推断食物归属 |
| `build-flavor-images.py` | 已审阅照片、元数据与明确采用表 → 本地配图和审阅／待配图队列 | Pillow；不把搜索命中自动作为图片采用 |
| `audit-css.cjs` | 当前入口与浏览器路由 → CSS候选和匹配报告 | Playwright、Chromium；只读，不自动删除，详见 [CSS审计](../docs/css-audit.md) |
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

- `node scripts/audit-china-flavor-migration.cjs`：逐项核对当前地方风物的全部编辑字段、来源、县区和中国栏目登记；审阅正式变化后用 `--write` 更新 `current-collection-audit.json`，原4255项 `standalone-retirement.json` 作为历史收据保持不变。

- `python scripts/index-china-research.py`：更新中国卡片总索引，并更新保留的风物专题索引；新底稿统一从 `research/china/README.md` 查找。
- `python scripts/update-china-province-map.py`：按现有风物省份配置更新全国SVG的可选地区，保留原行政路径几何。

- `scripts/china-expansion-20261115/`：江西、广西、广东批次的采集、公告章节提取、类别审阅与固定采用稿重建。顺序及本地原件依赖见 [批次说明](../research/china/expansions/2026-11-15-jiangxi-guangxi-guangdong/README.md)。采用程序仅读取已审阅稿，不把实时搜索结果自动导入。

- `scripts/shaanxi-gansu-20261115/`：陕西、甘肃批次的封存知识、行政登记、检索与原文取得、公告章节和固定编辑稿采用。见 [本批底稿](../research/china/expansions/2026-11-15-shaanxi-gansu/README.md)。两批采用程序均会拒绝覆盖后续批次。
- `python tests/china-shaanxi-gansu.py` 与 `node tests/china-shaanxi-gansu.cjs`：核对旧5051项及来源、知识封存、逐地查询与原文指纹、地域／分类纠错，以及新两省的地图、视图、详情与嘉峪关全市范围。

- `southwest-20261115/`：四川、重庆、云南、贵州专用批次工具，从封存知识、外搜与原文、公告/农业名录审阅，到采用、配图与缺口。采用脚本拒绝覆盖后续批次，旧配图生成器也拒绝覆盖新图片。复跑前先读 [批次说明](../research/china/expansions/2026-11-15-southwest/README.md)。`python tests/china-southwest.py` 检查基线、知识封存、来源字节、采用、行政与实拍覆盖；`node tests/china-southwest.cjs` 检查四地页面。

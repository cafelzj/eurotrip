# 网站正式数据

本目录正式数据JS由 `index.html` 直接加载，均参与网站运行；文件只声明数据，不负责页面或网络操作。入口脚本有顺序依赖，整理时保留声明名与稳定ID。

| 文件或文件组 | 维护方式与依据 |
| --- | --- |
| `destinations.js`、`categories.js`、`cards.js`、`relations.js`、`borders.js` | 目的地、分类、卡片、关联与边界配置；手工维护，边界记录原始来源 |
| `capitals-cards.js`、`china-cards.js`、`heritage-cards.js`、`knowledge-cards.js`、`slovenia-cards.js`、`poland-cards.js` | 分主题及地区的卡片和关联；手工维护，不按引用关系推断坐标 |
| `china-card-reading.js` | 中国现有卡片的来源支持补充；与原始输入分开保留，由 `ChinaCollection` 整合，生成工具与采用底稿见 [全国补充](../research/china/enrichment/README.md) |
| `china-card-images.js` | 后续中国规范化卡片的审阅实拍、署名及许可；原图片层保留，运行时按卡片身份合并，逐项采用与当前覆盖见 [实拍批次入口](../research/china/enrichment/README.md) |
| `card-reading.js` | 详情阅读层；按卡片ID维护，与基本卡片及知识关联核对 |
| `languages.js`、`vocabulary.js`、`ipa-en.js`、`ipa-de.js`、`ipa-hu-sr.js` | 词典与音标；来源许可见 [音标说明](../docs/ipa-sources.md)，核对底稿在 `research/dictionary/` |
| `card-images.js`、`country-art.js`、`landmark-art.js` | 正式图片配置、署名与许可；审核和生成底稿在 `research/media/`。景点插画可由 `build-landmark-art.py` 更新 |
| `map-providers.js` | 地图提供方、坐标与署名配置 |
| `plan.js` | 已实现能力、计划与参考资料；手工维护，动态数量由页面计算 |
| `flavors.js` | 正式地方风物目录；来源、候选、检索记录在 `research/flavors/`，派生覆盖由 `refresh-flavor-coverage.py` 更新 |
| `flavor-map-regions.js` | 由 `build-flavor-province-maps.py` 根据行政边界生成，与 `assets/maps/flavors/` 一起维护 |
| `produce-food.js`、`produce-countries.js` | 地方食材、用途、指标与区域说明；手工维护，数值与来源口径单独核对 |
| `produce-stats.js` | `build-produce-stats.py` 生成匈牙利统计；输入为脚本固定版本的公开数据 |
| `produce-supply.js` | `build-produce-supply.py` 生成完整供需序列；输入为脚本固定版本FAOSTAT副本，维护时需 `h5py` |
| `produce-country-data.js`、`produce-energy.js` | `build-produce-countries.py` 生成三国数值及匈牙利能源信息；复用前两份脚本的指标与供需定义 |
| `snapshots/eurostat-*-2024.json` | 三份可公开下载的原始JSON-stat响应，由三国脚本读取或保存；网站来源详情直接链接并核对字节哈希，路径保留 |

重新生成前先核对版本和输入，不以重新运行成功代替资料核实。不要手改生成文件后又无意重跑脚本覆盖；需保留的人工修订应进入来源、生成逻辑或明确的编辑配置。

研究阅读摘记已迁至 `research/flavors/reading-notes/`；`snapshots/` 不再混放该类底稿。研究索引见 [research/README.md](../research/README.md)，路径与工作流程见 [维护说明](../docs/repository-layout.md)。

中国已有卡片配图第二批增加12张对应实拍，详情保留作者与许可，列表不显示来源小字。1000条待编辑文字底稿仍在 [研究目录](../research/china/enrichment/2026-11-15-national-02-1000/README.md)，尚未纳入正式阅读层。

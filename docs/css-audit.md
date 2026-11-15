# CSS审计与公共组件

日期：2026-11-15。基线为 `9d588d5`。本次结合实际入口脚本、动态类名、SVG、历史实现及浏览器页面核对，清理359个确认失效的选择器分支；不是把一次浏览器覆盖率未命中的规则全部删除。一方CSS包含新增组件层和县区布局后，仍较原有约183KB减少约22KB。

| 文件 | 清理的选择器分支 | 主要失效内容 |
| --- | ---: | --- |
| `guide.css` | 187 | 旧国家标签、旧城市卡、旧景点／餐饮比较／出行提示／知识网格，已由关联卡片替代 |
| `cards.css` | 91 | 旧卡片目录、旧筛选、旧面包屑、旧词汇翻译及路线拼接布局 |
| `knowledge-hub.css` | 27 | 旧城市入口网格、已不生成的栏目标题和旧国家小地图 |
| `destination-gallery.css` | 25 | 已改为当前目的地切换器的旧多城市图片入口 |
| `design-system.css` | 21 | 上述失效组件的主题覆盖，以及旧 `data-pointer-glow` 打印规则 |
| `card-layout.css` | 5 | 旧图库和已取消的AI说明布局 |
| `flavors.css` | 3 | 已不由当前入口加载的全国省界地图交互样式 |

完整选择器与审计摘要见 [机器可读审计](css-audit.json)。Leaflet动态弹窗、按媒体类型生成的照片类、图表指标类、方案优先级、空状态、触屏、减少动效、强制颜色及地图／图片失败回退均保留。未匹配DOM只作复核线索，不等于无用；被后续声明覆盖也不直接等于无用，需检查媒体条件和其他组件。

## 三个栏目的复用

欧洲和中国原本共用 `KnowledgeHub`；风物食单现也采用同一组公共类。`components.css` 集中定义 `.ui-card`、标题与右侧信息、`.ui-search`、`.ui-select`、`.ui-button`、`.ui-tabs` 和 `.ui-choice`。模块CSS负责布局、地图与业务差异，通过变量提供类别颜色；原来散落的对应基础声明已移走，避免继续叠加覆盖。桌面和手机测试比较三个栏目的实际圆角、间距、字号、按钮及下拉框样式。

按用户本次明确选择恢复卡片鼠标高光。`card-highlight.js` 使用一套文档级事件委托和按帧更新，适用于欧洲、中国、风物食单及追加的卡片；导航保持固定颜色。光层在内容下面，不拦截点击，不滤镜处理照片，不影响卡片内展开。离开、滚动、切换页面、失焦会清理；触屏、减少动效／透明度、高对比、强制颜色及打印不显示。

## 复核命令

```sh
SITE_URL=http://127.0.0.1:4180 node scripts/audit-css.cjs /tmp/css-audit.json
SITE_URL=http://127.0.0.1:4180 node tests/shared-components.cjs
SITE_URL=http://127.0.0.1:4180 node tests/card-header.cjs
SITE_URL=http://127.0.0.1:4180 node tests/card-layout.cjs
SITE_URL=http://127.0.0.1:4180 node tests/card-feed.cjs
SITE_URL=http://127.0.0.1:4180 node tests/flavors.cjs
SITE_URL=http://127.0.0.1:4180 node tests/flavor-counties.cjs
SITE_URL=http://127.0.0.1:4180 node tests/flavor-images.cjs
```

审计脚本只读，不自动删CSS；取44组路由／视口样本，包含欧洲、中国、风物、地图、管理、词典、物产和方案。测试另外覆盖筛选、展开、加载失败、键盘与系统偏好。这是Chromium验证，不代表其他浏览器或所有潜在状态均已实际测试。

2026-11-15后续：独立风物食单功能撤下，`flavors.css` 保留中国栏目需要的卡片、正文、来源和省市县地图样式；独立标题、类别栏、筛选行、分页按钮及专用列表布局已删除。共用组件和鼠标跟随高光继续适用于中国风物卡片。

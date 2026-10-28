# 网页视觉更新：调研与取舍

整理日期：2026-10-29（Asia/Shanghai）。本轮先读取下列规范、源码说明和示例，再修改网站；范围是视觉与可访问性，沿用现有数据和地图关联，并在保留分类浏览的基础上新增瀑布流。

## 调研材料

| 材料 | 实际核对范围 | 对本网站的启发 |
| --- | --- | --- |
| [MDN · backdrop-filter](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/backdrop-filter/index.md) | 属性、透明背景、backdrop root 的说明与示例 | 透明与模糊只用于导航和浮层；不对正文或地图自身施加 filter，不用父级 opacity 做透明度 |
| [MDN · 浏览器兼容数据](https://github.com/mdn/browser-compat-data/blob/main/css/properties/backdrop-filter.json) | Chrome 76、Firefox 103、Safari 18 的标准属性记录；较早 Safari 的前缀记录 | 保留不支持滤镜时的实色背景，标准和 WebKit 前缀并列；这是资料核对，不是 Safari / Firefox 实机测试 |
| [MDN · prefers-reduced-motion](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/at-rules/@media/prefers-reduced-motion/index.md) | 减少非必要运动的系统偏好 | 动效只用于短暂的交互反馈，系统要求减少动效时取消移动与过渡 |
| [MDN · prefers-reduced-transparency](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/at-rules/@media/prefers-reduced-transparency/index.md) | 减少透明度以改善阅读的系统偏好 | 支持该媒体查询的浏览器采用实色表面；同时适配高对比与强制颜色模式 |
| [MDN · color-mix](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/values/color_value/color-mix/index.md) | 色彩混合与透明度规则 | 分类色仍由既有卡片配置提供，不用透明度把整组文字一起变淡；本轮主要使用稳定的 RGBA 与渐变 |
| [Microsoft Fluent UI](https://github.com/microsoft/fluentui) | README 中的主题、基础 API 和无障碍设计资料入口 | 统一表面、间距、圆角、阴影与选中状态，而非每一页各写一套效果 |
| [Adobe Spectrum CSS](https://github.com/adobe/spectrum-css) | README 的 CSS 自定义属性、设计 token 和组件结构 | 通过独立主题层管理视觉值，继续复用原生 HTML / JavaScript，不引入 UI 框架 |
| [Radix Colors](https://github.com/radix-ui/colors) | README 的可访问色彩系统定位 | 区分装饰色、边界色和可阅读文字色；浅色说明文字需要加深，不能只追求通透 |
| [Open Props](https://github.com/argyleink/open-props) | README 的色彩、阴影、尺寸、圆角和 easing 变量组织 | 少量可复用 token 足以建立整体质感，不需要把依赖库带进网站 |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | README 的可组合、自有组件理念 | 卡片与工具栏的表面保持一致，复杂度来自内容而非额外装饰 |
| [Liquid Glass React](https://github.com/rdev/liquid-glass-react) | README、卡片与按钮截图；Safari / Firefox 位移效果限制 | 借鉴边缘高光、玻璃厚度和轻阴影。它是第三方演示，不是 Apple 官方实现；不引入 React、折射位移或色散 |
| [liquidGL](https://github.com/naughtyduk/liquidGL) | README 的 WebGPU → WebGL → CSS 回退、离屏渲染和镜片效果 | 动态折射需要额外渲染管线。本网站已有地图，不额外增加 GPU 画布；后续追光仅在鼠标移动时按帧更新 |
| [ericwu.me](https://github.com/itsEricWu/ericwu.me) | README 与仓库中的浅色桌面截图 | 借鉴 Bento 模块的层级、留白、浮动导航和浅色背景；不增加卡片拖拽或改变既有分组顺序 |
| [dashdot](https://github.com/MauriceNino/dashdot) | README 的玻璃风格仪表盘定位；截图链接本次未成功读取 | 作为数据密集产品的辅助参考，不声称已检查其运行页面或图表实机表现 |

研究使用公开 GitHub 文档、源码说明与上述可读取的截图；未部署这些参考项目，也未读取 Apple 官方设计规范。未复制第三方库的实现或图片到产品。

## 本轮采用的设计

1. **轻玻璃导航与浮层**：主导航、目的地菜单、随身地图外壳、词条对话框采用高不透明度底色、局部背景模糊、细亮边与柔和阴影。正文卡片、表格、地图瓦片和图钉保持清晰。
2. **浅色旅行手账**：延续森林绿与五种卡片分类色，背景增加静态的薄荷、天空蓝和暖砂色光晕；目的地介绍用柔和的空间装饰，字体和正文不透明。
3. **统一表面与层级**：统一内容卡片、国家 / 城市选择、筛选器、输入框和图表面板的圆角、边界、阴影及焦点样式。现有列表、折叠与表格结构继续使用。
4. **克制的微交互**：精确指针悬停时轻微上移，按钮有短暂反馈，键盘焦点清晰；不使用自动漂浮、弹簧缩放、光标镜片或持续动画。
5. **移动端与渐进增强**：桌面和手机主导航均随文档滚动，不吸顶，腾出卡片和地图的浏览空间。无滤镜、减少透明度、减少动态、高对比、强制颜色与打印均有回退。

## 代码组织与验证边界

- `design-system.css` 是最后加载的视觉主题层，定义共享 token、组件表面与无障碍回退；原有 CSS 继续负责业务布局与组件结构。
- `spotlight.js` 提供轻量的指针高光，`card-feed.js` 提供增量瀑布流；使用原生浏览器 API，不引入框架、字体包、图片下载或图形渲染依赖。
- 浏览器验证覆盖 Chromium 桌面 / 手机尺寸、键盘焦点、导航菜单、词典对话框、地图操作、卡片管理与物产图表，并检查减少动效、减少透明度、强制颜色及无滤镜回退。
- 兼容性说明来自规范与公开数据；未将 Chromium 的模拟验证表述为 Safari、Firefox 或真机全覆盖测试。透明面板上的实际对比度受下方内容影响，因此使用高不透明度表面，并抽查关键文字的对比度。

## 鼠标跟随高光

- **视觉目的**：在半透明 / 纸面背景上表达正在探索的交互目标。光斑与毛玻璃是两层独立效果；追光不模拟真实折射、放大镜或元素形变。
- **范围与颜色**：主导航、目的地卡片、知识卡片、关联小卡片、方案卡片标题、食材标题、产区卡片与方案统计卡片；分类卡片沿用分类色，其余默认薄荷绿。地图、图钉、图表、表格、输入框、下拉菜单及长文不添加追光。
- **层级与强度**：圆形渐变半径 240px，分类色最高约 18% 透明度，辅以较小的白色高光；伪元素在文字下方，裁切在卡片圆角内，`pointer-events: none` 保证点击和文本选择。
- **性能**：事件委托支持后续动态加载的卡片；只合并鼠标移动事件更新当前目标，每帧至多读取一次目标尺寸并写入局部坐标，不用持续渲染循环、逐卡片事件监听或 GPU 画布。
- **清理与降级**：指针离开、滚动、路由变化、窗口失焦、页面隐藏时清理。只有可悬停精确鼠标参与；触屏和减少动效 / 透明度、高对比、强制颜色偏好使用静态样式；键盘焦点按原规则显示。

## 分类浏览与瀑布流

两种模式使用相同的卡片、筛选与地图来源。分类模式面向结构化查阅；瀑布流面向连续发现，每批 24 张，按最短列计算稳定位置。没有图片资料时直接使用卡片正文、分类图标和真实名称，不生成虚构的照片占位。

桌面三列、中等宽度和常规手机两列、较窄手机一列。滚动接近底部自动追加，手动按钮支持键盘及没有 IntersectionObserver 的环境；匹配内容耗尽时显示结束信息。初始加载有限，追加时保持原卡片位置；改变窗口宽度或字体加载后重新测量。单个 ResizeObserver 观察容器宽度，路由切换时取消观察器与待执行帧。

浏览方式支持本地偏好与显式网址参数，筛选后重置批次与旧锚点。从详情返回时，通过已展示数量和卡片 ID 恢复到附近位置；地图仍依据完整的筛选结果生成图层。瀑布流不会另建卡片副本或修改 POI 约束。

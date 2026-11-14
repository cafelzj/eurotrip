# 旅行词典国际音标

2026-11-14 为现有 87 个词条增加独立的国际音标资料，不改变词条顺序、收藏编号或朗读文本。当前收录英语 84、德语 83、匈牙利语 83、塞尔维亚语 55 条，共 305 条。中文不另注 IPA。

## 来源和许可

| 数据 | 来源 | 对应数据许可 |
| --- | --- | --- |
| `data/ipa-en.js` | [open-dict-data/ipa-dict · en_UK](https://github.com/open-dict-data/ipa-dict/blob/master/data/en_UK.txt)，上游 [leoboiko/ipacards](https://github.com/leoboiko/ipacards) | **GPL-3.0**，原文见 [vendor/licenses/ipa-en-GPL-3.0.txt](../vendor/licenses/ipa-en-GPL-3.0.txt) |
| `data/ipa-de.js` | [ipa-dict · de](https://github.com/open-dict-data/ipa-dict/blob/master/data/de.txt)，上游 [devio-at/german-ipa-dict](https://github.com/devio-at/german-ipa-dict) / Wiktionary contributors | **CC BY-SA 4.0**；上游声明见 [vendor/licenses/ipa-de-license.md](../vendor/licenses/ipa-de-license.md) |
| `data/ipa-hu-sr.js` | [Kaikki · Hungarian](https://kaikki.org/dictionary/Hungarian/index.html)、[Kaikki · Serbo-Croatian](https://kaikki.org/dictionary/Serbo-Croatian/index.html)，English Wiktionary contributors，经 Tatu Ylonen 的 wiktextract 提取 | **CC BY-SA 4.0**，保留 Wiktionary 贡献者与 Kaikki 署名 |

不能将 ipa-dict 整体的 MIT 许可误套在它引用的第三方发音数据上。以上三份数据各自保留其上游条件；页面的音标说明也提供署名、许可和来源入口。

## 编辑约定

- 英语采用 `en_UK` 的英式变体，保留源数据列出的首个读音。德语采用其词典形式；名词前的冠词仍显示在原词中，音标只标名词。
- 匈牙利语和塞尔维亚语只采用对应语言记录中实际存在的 IPA；不将另一种语言的同形词发音误配过来。
- 完整短语没有收录而每个组成词都有读音时，逐词标注，以 `·` 分隔并提示“按词分段标音，未标注连读”。不把这种组合称为整句的词典音标。
- 没有可用记录时不展示音标，不根据拼写、语音合成输出或其他语言猜写。塞尔维亚语保留源数据的声调与长音标记；这不是当地所有地区读音的全集。
- 原文、查词项、分段状态和采用的音标保存在 [ipa-source-records.json](ipa-source-records.json)，便于逐项追查。Kaikki 页面标注提取于 2026-10-30，使用 2026-10-01 的 enwiktionary dump。
- 音标随网站本地加载，不在浏览器中实时调用外部词典。朗读继续使用系统语音，可能与音标的变体不同。

“显示国际音标”默认开启，使用 `eurotrip-show-ipa` 保存本机偏好；存储不可用时仍可切换。语言设置、跨语言搜索、收藏、键盘打开详情及朗读沿用原有行为。

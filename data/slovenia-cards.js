/* Slovenia destination cards and reading relationships. Static JSON only; positions are reference points and sources are reading entrances, not live-verification claims. */
const sloveniaCards = [
  {
    "id": "tip-city-ljubljana",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "卢布尔雅那 · 到站与换乘",
    "description": "市内主要依靠公交与步行，Urbana 是重要票务入口；铁路总站、区域巴士和机场接驳分别确认，城市票不默认覆盖它们。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。卢布尔雅尼察河（Ljubljanica）经过老城，属于萨瓦河—多瑙河水系；河岸步道与桥梁构成中心城市空间。",
    "sources": [
      [
        "https://www.lpp.si/en",
        "Urbana / LPP 官方查询 · 查询入口"
      ],
      [
        "https://www.lpp.si/en",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "ljubljana"
  },
  {
    "id": "tip-ljubljana-ticket-choice",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "卢布尔雅那 · 选票与乘车",
    "description": "市内主要依靠公交与步行，Urbana 是重要票务入口；铁路总站、区域巴士和机场接驳分别确认，城市票不默认覆盖它们。",
    "note": "先核对 Urbana 实体卡、App 或运营商目前支持的支付方式，确认所买的是单次、可换乘或其他票种。公交上的验证要求与铁路电子票不同。日票、月票是否适合短住，比较实际乘车次数和适用线路；机场接驳另看专门规则。",
    "sources": [
      [
        "https://www.lpp.si/en",
        "Urbana / LPP 官方查询 · 查询入口"
      ],
      [
        "https://www.lpp.si/en",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "ljubljana"
  },
  {
    "id": "tip-ljubljana-transit-tools",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "卢布尔雅那 · 交通 App 与线路图",
    "description": "查询入口：Urbana / LPP 官方查询。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：LPP。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://www.lpp.si/en",
        "Urbana / LPP 官方查询 · 查询入口"
      ],
      [
        "https://www.lpp.si/en",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "ljubljana"
  },
  {
    "id": "fact-ljubljana-daily-setting",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "卢布尔雅那 · 河流、气候与日常预算",
    "description": "卢布尔雅尼察河（Ljubljanica）经过老城，属于萨瓦河—多瑙河水系；河岸步道与桥梁构成中心城市空间。",
    "note": "内陆与周边山地共同影响天气，夏季可热，冬季偏冷且可能有雾；全年都适合准备雨具和可叠穿衣物。\n货币：欧元 EUR。\n预算观察：老城河岸餐馆和住宿可能较贵，面包店、超市与非核心街区更利于控制日常预算；不按全国平均推算具体菜单。",
    "sources": [
      [
        "https://www.visitljubljana.com/en/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "ljubljana",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-maribor",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "马里博尔 · 到站与换乘",
    "description": "市内公交由 Marprom 提供，MBajk 是共享单车入口；铁路、山地缆车与城市公交是否联票，按各运营商规则确认。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。德拉瓦河（Drava）穿过市区，之后汇入多瑙河；河岸、葡萄园与周边丘陵构成不同的景观尺度。",
    "sources": [
      [
        "https://www.marprom.si/",
        "Marprom 官网 / MBajk · 查询入口"
      ],
      [
        "https://www.marprom.si/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "maribor"
  },
  {
    "id": "tip-maribor-ticket-choice",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "马里博尔 · 选票与乘车",
    "description": "市内公交由 Marprom 提供，MBajk 是共享单车入口；铁路、山地缆车与城市公交是否联票，按各运营商规则确认。",
    "note": "先查 Marprom 当前单程、日票或其他票种，以及实体卡、App 和车上购票规则。前往波霍列山的缆车属于另一种服务，不把市内月票理解为包全部旅游交通；MBajk 共享单车也有独立账户与计费。",
    "sources": [
      [
        "https://www.marprom.si/",
        "Marprom 官网 / MBajk · 查询入口"
      ],
      [
        "https://www.marprom.si/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "maribor"
  },
  {
    "id": "tip-maribor-transit-tools",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "马里博尔 · 交通 App 与线路图",
    "description": "查询入口：Marprom 官网 / MBajk。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：Marprom。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://www.marprom.si/",
        "Marprom 官网 / MBajk · 查询入口"
      ],
      [
        "https://www.marprom.si/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "maribor"
  },
  {
    "id": "fact-maribor-daily-setting",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "马里博尔 · 河流、气候与日常预算",
    "description": "德拉瓦河（Drava）穿过市区，之后汇入多瑙河；河岸、葡萄园与周边丘陵构成不同的景观尺度。",
    "note": "内陆季节差异明显，夏季温暖，冬季可冷；上波霍列山地时海拔和天气会进一步改变体感。\n货币：欧元 EUR。\n预算观察：日常餐饮常比首都热门河岸更易控制预算；葡萄酒体验、山地活动和节庆期间的住宿需单独比较。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "maribor",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-bled",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "布莱德 · 到站与换乘",
    "description": "巴士常比铁路更接近中心。Lesce–Bled 站在湖东侧之外，Bled Jezero 站在湖西侧；查票时先核对实际到站和接驳。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。主要水景是布莱德湖（Blejsko jezero），附近有萨瓦河上游水系；湖、峡谷和山地步道各自确认入口与距离。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / SŽ 官方时刻 · 查询入口"
      ],
      [
        "https://potniski.sz.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "bled"
  },
  {
    "id": "tip-bled-ticket-choice",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "布莱德 · 选票与乘车",
    "description": "巴士常比铁路更接近中心。Lesce–Bled 站在湖东侧之外，Bled Jezero 站在湖西侧；查票时先核对实际到站和接驳。",
    "note": "短住先按实际巴士行程查单程或往返，再看区域联程产品是否适合。铁路两站服务的线路与接驳距离不同，买到 Bled 字样的车票并不意味着直接下在湖畔中心。Pletna 游船和城堡门票分别购买。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / SŽ 官方时刻 · 查询入口"
      ],
      [
        "https://potniski.sz.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "bled"
  },
  {
    "id": "tip-bled-transit-tools",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "布莱德 · 交通 App 与线路图",
    "description": "查询入口：Arriva / SŽ 官方时刻。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：区域巴士 / SŽ 铁路。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / SŽ 官方时刻 · 查询入口"
      ],
      [
        "https://potniski.sz.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "bled"
  },
  {
    "id": "fact-bled-daily-setting",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "布莱德 · 河流、气候与日常预算",
    "description": "主要水景是布莱德湖（Blejsko jezero），附近有萨瓦河上游水系；湖、峡谷和山地步道各自确认入口与距离。",
    "note": "阿尔卑斯山地边缘天气变化较快，湖边也会有雨和低温；冬季短日照与夏季雷雨都影响户外安排。\n货币：欧元 EUR。\n预算观察：湖景餐饮、住宿和游船属于明显的旅游消费，旺季可能较贵；日常采购与景观体验适合分别做预算。",
    "sources": [
      [
        "https://www.bled.si/en/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "bled",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-piran",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "皮兰 · 到站与换乘",
    "description": "老城以步行为主，区域公交连接波尔托罗日和科佩尔。皮兰没有自己的铁路站，乘火车通常另接地面交通，行李与上坡路线提前看。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。位于亚得里亚海的伊斯特拉半岛海岸，海岸线和港湾比河流更能解释城区；塞乔夫列盐田在城外另一片区域。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / 当地官方接驳说明 · 查询入口"
      ],
      [
        "https://arriva.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "piran"
  },
  {
    "id": "tip-piran-ticket-choice",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "皮兰 · 选票与乘车",
    "description": "老城以步行为主，区域公交连接波尔托罗日和科佩尔。皮兰没有自己的铁路站，乘火车通常另接地面交通，行李与上坡路线提前看。",
    "note": "先确认到达的是皮兰公交终点、波尔托罗日还是科佩尔。区域车票、地方接驳和停车设施相关服务有不同条件；老城步行段不需要为不存在的“皮兰地铁”找票。返程班次与晚间接驳提前留好。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / 当地官方接驳说明 · 查询入口"
      ],
      [
        "https://arriva.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "piran"
  },
  {
    "id": "tip-piran-transit-tools",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "皮兰 · 交通 App 与线路图",
    "description": "查询入口：Arriva / 当地官方接驳说明。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：Arriva 与地方接驳服务。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://arriva.si/en/",
        "Arriva / 当地官方接驳说明 · 查询入口"
      ],
      [
        "https://arriva.si/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "piran"
  },
  {
    "id": "fact-piran-daily-setting",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "皮兰 · 河流、气候与日常预算",
    "description": "位于亚得里亚海的伊斯特拉半岛海岸，海岸线和港湾比河流更能解释城区；塞乔夫列盐田在城外另一片区域。",
    "note": "沿海较温和，但冬季风、夏季日晒和海边湿滑路面都会影响步行；不把晴朗海景视作全年相同天气。\n货币：欧元 EUR。\n预算观察：老城海景餐饮和夏季住宿可能明显上浮；海鲜按重量、品种及当日供应计价时，点单前确认菜单。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "piran",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-si-rail",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "tickets",
    "name": "斯洛文尼亚 · 城市票与火车票分开买",
    "description": "SŽ / Grem z vlakom 是认识铁路的重要入口；城市公交、区域列车和长途列车不是一套自动互通的票。",
    "note": "先用原文站名查询，再确认运营商、座席与换乘时间。月票、多日票或区域联票要核对适用范围与实名条件。跨境路线另查每段实际承运方，购票平台显示路线不等于所有车票已经一并买齐。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "SŽ / Grem z vlakom · 官方查询入口"
      ]
    ]
  },
  {
    "id": "tip-si-money",
    "type": "tip",
    "country": "si",
    "category": "brands",
    "subcategory": "payments",
    "name": "斯洛文尼亚 · 货币、刷卡与取现",
    "description": "使用欧元 EUR。结账与取款时先辨认币种、手续费和汇率，欧盟成员身份不等于一定使用欧元。",
    "note": "银行卡受理、最低消费和现金需求按商户确认。终端出现本币或持卡币种选择时，比较动态货币转换（DCC）及银行费率；ATM 运营方收费与发卡行费用可能分别出现。留一笔小额现金，避免用历史汇率估算当日实际扣款。",
    "sources": [
      [
        "https://www.bsi.si/en",
        "斯洛文尼亚央行 · 货币资料"
      ]
    ]
  },
  {
    "id": "tip-si-sunday",
    "type": "tip",
    "country": "si",
    "category": "brands",
    "subcategory": "shopping-tips",
    "name": "斯洛文尼亚 · 周日采购先查营业时间",
    "description": "大型商店星期日营业存在限制或例外；旅游旺季、便利店和车站店的具体营业不能一概推断。",
    "note": "把饮水、早餐和日用品采购尽量提前安排，再查连锁官方门店页的当周时段。斯洛文尼亚大型超市的星期日营业通常受限，小型店和特定地点可能有不同安排。 节假日和临时调整另外核对。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "国家旅游资料入口（具体营业另核）"
      ]
    ]
  },
  {
    "id": "tip-si-pharmacy",
    "type": "tip",
    "country": "si",
    "category": "brands",
    "subcategory": "pharmacy",
    "name": "斯洛文尼亚 · 药房与药妆店分清",
    "description": "寻找药房时认“lekarna”；洗护日用品连锁与能够配药的药房，服务范围不同。",
    "note": "出行常用药保留原包装与处方资料；处方要求和可售品种由当地药师确认。值班药房以当地公告查询，紧急情况拨 112，非紧急健康咨询使用正规医疗或药师服务。",
    "sources": [
      [
        "https://www.lek-zbor.si/",
        "斯洛文尼亚药房协会入口"
      ]
    ]
  },
  {
    "id": "tip-si-dining",
    "type": "tip",
    "country": "si",
    "category": "food",
    "subcategory": "dining-tips",
    "name": "斯洛文尼亚 · 点餐、饮水与结账",
    "description": "先看菜单、计价单位和过敏原说明，结账时确认服务费、支付方式与币种。",
    "note": "voda 是水，voda iz pipe 可用于询问自来水；不同瓶装水还需分是否含气。 服务费与自愿小费分别理解；鱼类、拼盘或按重量计价的菜，点单前确认份量与总价。饮食限制用清楚文字向店员确认。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "官方旅游与饮食阅读入口"
      ]
    ]
  },
  {
    "id": "tip-si-entry-connectivity",
    "type": "tip",
    "country": "si",
    "category": "facts",
    "subcategory": "daily",
    "name": "斯洛文尼亚 · 申根、通信与紧急准备",
    "description": "属于欧盟和申根区；按护照、旅行日期与整段行程核对入境及停留要求。紧急求助使用 112。",
    "note": "申根停留的计算涉及整段区域行程，住宿、保险与签证要求由官方领事信息确认。欧盟漫游规则也要看所用 SIM 与套餐，不能把中国或其他非欧盟号码自动视为免费漫游。保存住宿地址原文、证件备份与紧急联系人。",
    "sources": [
      [
        "https://www.gov.si/en/",
        "斯洛文尼亚政府 · 领事与旅行资料入口"
      ]
    ]
  },
  {
    "id": "place-ljubljana-airport",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "airport",
    "name": "卢布尔雅那约热·普奇尼克机场 LJU",
    "description": "斯洛文尼亚主要国际航空门户，位于首都以北，不能把机场位置当作市中心。",
    "note": "按航班时间比较区域巴士、机场接驳与其他地面交通；前往布莱德或皮兰也需另查路线。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.lju-airport.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.2237&mlon=14.4576#map=17/46.2237/14.4576",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ljubljana%20Jo%C5%BEe%20Pu%C4%8Dnik%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Ljubljana Jože Pučnik Airport",
    "point": {
      "id": "place-ljubljana-airport",
      "lat": 46.2237,
      "lon": 14.4576,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-ljubljana-station",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "station",
    "name": "卢布尔雅那火车站",
    "description": "首都铁路出行的重要站点，可衔接国内与部分跨境列车。",
    "note": "铁路站台、公交与长途巴士乘车位置分别核对；车站工程或临时站位可能影响步行路线。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0587&mlon=14.51#map=17/46.0587/14.51",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ljubljana%20railway%20station",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Ljubljana railway station",
    "point": {
      "id": "place-ljubljana-station",
      "lat": 46.0587,
      "lon": 14.51,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-maribor-station",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "station",
    "name": "马里博尔火车站",
    "description": "马里博尔铁路主站，连接斯洛文尼亚国内和部分跨境路线。",
    "note": "到 Lent 河岸和老城需继续步行或转公交；跨境票、区域票与城市公交票分别确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.561&mlon=15.6571#map=17/46.561/15.6571",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Maribor%20railway%20station",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Maribor railway station",
    "point": {
      "id": "place-maribor-station",
      "lat": 46.561,
      "lon": 15.6571,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-bled-lesce-station",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "station",
    "name": "Lesce–Bled 火车站",
    "description": "位于布莱德湖以东的 Lesce，是前往湖区的重要铁路到达站之一。",
    "note": "下车后通常还需地面接驳；不要与湖西侧的 Bled Jezero 站混淆，按具体车次和住宿位置选站。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3612&mlon=14.1577#map=17/46.3612/14.1577",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Lesce-Bled",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Lesce-Bled",
    "point": {
      "id": "place-bled-lesce-station",
      "lat": 46.3612,
      "lon": 14.1577,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-bled-jezero-station",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "station",
    "name": "Bled Jezero 火车站",
    "description": "位于布莱德湖西侧，服务的线路与 Lesce–Bled 不同。",
    "note": "车票上的站名、抵达时间和后续步行距离共同决定是否适合；不默认所有去布莱德的列车都停这里。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3683&mlon=14.0844#map=17/46.3683/14.0844",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bled%20Jezero",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Bled Jezero",
    "point": {
      "id": "place-bled-jezero-station",
      "lat": 46.3683,
      "lon": 14.0844,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-piran-koper-station",
    "type": "place",
    "country": "si",
    "category": "transport",
    "subcategory": "station",
    "name": "科佩尔火车站 · 皮兰铁路接驳",
    "description": "车站实际位于科佩尔，是通过铁路前往皮兰时可考虑的地面接驳节点。",
    "note": "皮兰本身没有铁路站；从科佩尔继续查区域公交或其他交通。此卡的城市关联表示服务皮兰行程，不表示站点位于皮兰老城。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://potniski.sz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5394&mlon=13.7379#map=17/45.5394/13.7379",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Koper%20railway%20station",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Koper railway station",
    "point": {
      "id": "place-piran-koper-station",
      "lat": 45.5394,
      "lon": 13.7379,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "tip-ljubljana-shared-mobility",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "BicikeLJ · 卢布尔雅那共享单车",
    "description": "用运营商官方入口确认注册、可用车站与骑行规则；城市公交票通常不自动包括共享骑行。",
    "note": "使用前核对当前运营季、费用、车站与还车方式，关注车辆类型和允许停车区域。第三方地图上的车站不代表实时有车或有空位，骑行时沿合法道路通行。",
    "sources": [
      [
        "https://www.bicikelj.si/",
        "共享单车运营商入口"
      ]
    ],
    "city": "ljubljana",
    "local": "BicikeLJ"
  },
  {
    "id": "tip-maribor-shared-mobility",
    "type": "tip",
    "country": "si",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "MBajk · 马里博尔共享单车",
    "description": "用运营商官方入口确认注册、可用车站与骑行规则；城市公交票通常不自动包括共享骑行。",
    "note": "使用前核对当前运营季、费用、车站与还车方式，关注车辆类型和允许停车区域。第三方地图上的车站不代表实时有车或有空位，骑行时沿合法道路通行。",
    "sources": [
      [
        "https://www.mbajk.si/",
        "共享单车运营商入口"
      ]
    ],
    "city": "maribor",
    "local": "MBajk"
  },
  {
    "id": "place-ljubljana-triple-bridge",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "三重桥与普列舍伦广场",
    "description": "桥梁、广场与河岸连接成首都老城的步行节点，可从这里认识普列奇尼克的城市设计。",
    "note": "三座桥的组合经历不同建设阶段；建筑整体与正式遗产范围分别看。广场纪念普列舍伦，诗人并非出生在这座广场。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitljubljana.com/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0511&mlon=14.506#map=17/46.0511/14.506",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Tromostovje%20/%20Pre%C5%A1ernov%20trg",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Tromostovje / Prešernov trg",
    "point": {
      "id": "place-ljubljana-triple-bridge",
      "lat": 46.0511,
      "lon": 14.506,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-ljubljana-dragon-bridge",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "龙桥",
    "description": "以龙雕塑著称的河桥，是认识卢布尔雅那城市象征与近代桥梁的入口。",
    "note": "现存桥梁来自二十世纪初，龙的象征与传说又有更早文化线索；不要把所有龙故事当成建筑年代记录。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitljubljana.com/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0518&mlon=14.5104#map=17/46.0518/14.5104",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Zmajski%20most",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Zmajski most",
    "point": {
      "id": "place-ljubljana-dragon-bridge",
      "lat": 46.0518,
      "lon": 14.5104,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-ljubljana-castle",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "卢布尔雅那城堡",
    "description": "城堡山上的建筑群兼有城市观景和历史展览线索。",
    "note": "上山可比较步行与缆车；城堡区域、展览和缆车可能采用不同票种。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.ljubljanskigrad.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0489&mlon=14.5084#map=17/46.0489/14.5084",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ljubljanski%20grad",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Ljubljanski grad",
    "point": {
      "id": "place-ljubljana-castle",
      "lat": 46.0489,
      "lon": 14.5084,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-ljubljana-national-gallery",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "museum",
    "name": "斯洛文尼亚国家美术馆",
    "description": "通过艺术收藏认识斯洛文尼亚及相关地区的绘画与雕塑。",
    "note": "不同展区与临展的范围、开放和票务以馆方说明为准；作品反映的地域文化不等于今日国界。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.ng-slo.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0543&mlon=14.4996#map=17/46.0543/14.4996",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Narodna%20galerija",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Narodna galerija",
    "point": {
      "id": "place-ljubljana-national-gallery",
      "lat": 46.0543,
      "lon": 14.4996,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-ljubljana-nuk",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "国家与大学图书馆 · NUK",
    "description": "普列奇尼克的重要建筑作品，把材料、光线与学习空间组织在一起。",
    "note": "图书馆仍有实际使用功能，外观、公共展览与阅览空间的进入规则不同；从机构说明了解建筑的具体参观范围。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.nuk.uni-lj.si/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0465&mlon=14.5039#map=17/46.0465/14.5039",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Narodna%20in%20univerzitetna%20knji%C5%BEnica",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Narodna in univerzitetna knjižnica",
    "point": {
      "id": "place-ljubljana-nuk",
      "lat": 46.0465,
      "lon": 14.5039,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-ljubljana-university",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "university",
    "name": "卢布尔雅那大学 · 主楼",
    "description": "大学主楼位于城市核心，可与广场、图书馆和老城公共空间一起理解。",
    "note": "校园与学院分布在不同地点，本卡只标主楼参考位置，不代表所有学院或可以自由进入的教学空间。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.uni-lj.si/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0492&mlon=14.5039#map=17/46.0492/14.5039",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Univerza%20v%20Ljubljani",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Univerza v Ljubljani",
    "point": {
      "id": "place-ljubljana-university",
      "lat": 46.0492,
      "lon": 14.5039,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "place-ljubljana-tivoli",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "park",
    "name": "蒂沃利公园",
    "description": "连接中心城区与绿地步行空间的城市公园。",
    "note": "公园、展馆和进一步的山林路线属于不同范围；按天气、日照与体力选择步行距离。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitljubljana.com/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.06&mlon=14.494#map=17/46.06/14.494",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Park%20Tivoli",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Park Tivoli",
    "point": {
      "id": "place-ljubljana-tivoli",
      "lat": 46.06,
      "lon": 14.494,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-ljubljana-cankarjev-dom",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "theatre",
    "name": "Cankarjev dom 文化中心",
    "description": "音乐、戏剧、展览和会议交会的公共文化场所。",
    "note": "节目、场馆和入场时间分别确认；建筑开放不等于当天有可入场的演出。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.cd-cc.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0502&mlon=14.4994#map=17/46.0502/14.4994",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Cankarjev%20dom",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Cankarjev dom",
    "point": {
      "id": "place-ljubljana-cankarjev-dom",
      "lat": 46.0502,
      "lon": 14.4994,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "place-maribor-old-vine",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "老葡萄藤与老藤之家",
    "description": "Lent 河岸的老葡萄藤是马里博尔葡萄种植和城市形象的重要线索。",
    "note": "活体葡萄藤、展示空间和品酒活动各有安排；“老藤”不等于商店中每瓶酒都由这株葡萄产出。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.5568&mlon=15.6443#map=17/46.5568/15.6443",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Stara%20trta%20/%20Hi%C5%A1a%20Stare%20trte",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Stara trta / Hiša Stare trte",
    "point": {
      "id": "place-maribor-old-vine",
      "lat": 46.5568,
      "lon": 15.6443,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-maribor-cathedral",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "church",
    "name": "马里博尔主教座堂",
    "description": "老城中的宗教建筑，可从建筑层次和城市广场理解地方历史。",
    "note": "礼拜与游客参观可能有不同安排，钟楼和内部空间的开放单独确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.558&mlon=15.6444#map=17/46.558/15.6444",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Mariborska%20stolnica",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Mariborska stolnica",
    "point": {
      "id": "place-maribor-cathedral",
      "lat": 46.558,
      "lon": 15.6444,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-maribor-castle-museum",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "museum",
    "name": "马里博尔城堡与地区博物馆",
    "description": "城堡建筑与地方收藏连接城市和周边地区的历史。",
    "note": "本卡以同一建筑的博物馆参观为主，不把地区内所有分馆合并成一个坐标。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.5602&mlon=15.648#map=17/46.5602/15.648",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Mariborski%20grad%20/%20Pokrajinski%20muzej%20Maribor",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Mariborski grad / Pokrajinski muzej Maribor",
    "point": {
      "id": "place-maribor-castle-museum",
      "lat": 46.5602,
      "lon": 15.648,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-maribor-university",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "university",
    "name": "马里博尔大学 · 主楼",
    "description": "大学主楼与老城公共空间相联系，体现今天的教育与城市生活。",
    "note": "不同学院分散在其他地点；主楼参考坐标不能替代具体院系地址。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.um.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.5591&mlon=15.643#map=17/46.5591/15.643",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Univerza%20v%20Mariboru",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Univerza v Mariboru",
    "point": {
      "id": "place-maribor-university",
      "lat": 46.5591,
      "lon": 15.643,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "place-maribor-puppet-theatre",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "theatre",
    "name": "马里博尔木偶剧院",
    "description": "位于 Lent 一带的表演机构，提供木偶与其他舞台作品。",
    "note": "演出语言、年龄建议、日期和票务以当期节目为准，不把木偶剧一概视为没有年龄区分的儿童节目。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.lg-mb.si/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.5553&mlon=15.6429#map=17/46.5553/15.6429",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Lutkovno%20gledali%C5%A1%C4%8De%20Maribor",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Lutkovno gledališče Maribor",
    "point": {
      "id": "place-maribor-puppet-theatre",
      "lat": 46.5553,
      "lon": 15.6429,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "place-maribor-lent",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "other-places",
    "name": "Lent 河岸历史街区",
    "description": "德拉瓦河边的历史街区，适合把葡萄藤、公共文化和滨河步行串起来。",
    "note": "街区范围大于单一建筑，图钉仅作河岸辨认参考；节庆时段和具体活动场所另查。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.5565&mlon=15.6455#map=17/46.5565/15.6455",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Lent",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Lent",
    "point": {
      "id": "place-maribor-lent",
      "lat": 46.5565,
      "lon": 15.6455,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "place-bled-castle",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "布莱德城堡",
    "description": "湖畔高地上的城堡，提供从历史建筑观察湖区的角度。",
    "note": "登高、停车、博物馆和餐饮安排各自确认；城堡在高处，步行强度与湖边平路不同。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.blejski-grad.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3698&mlon=14.1002#map=17/46.3698/14.1002",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Blejski%20grad",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Blejski grad",
    "point": {
      "id": "place-bled-castle",
      "lat": 46.3698,
      "lon": 14.1002,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-bled-island",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "church",
    "name": "布莱德湖心岛与圣母教堂",
    "description": "湖心岛的教堂与台阶是布莱德的标志性景象。",
    "note": "上岛船只、教堂参观与湖岸步行分别安排；本卡定位岛上参考点，不代表某一固定登船码头。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.blejskiotok.si/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3626&mlon=14.09#map=17/46.3626/14.09",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Blejski%20otok",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Blejski otok",
    "point": {
      "id": "place-bled-island",
      "lat": 46.3626,
      "lon": 14.09,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-bled-lakeside",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "park",
    "name": "布莱德湖 · 东岸步行参考点",
    "description": "从湖东岸进入湖滨步行环境，能观察湖、岛和城堡的相对位置。",
    "note": "整片湖区远大于一个坐标；环湖、下水活动、私人岸段与游船各有规则，先按目的选择入口。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.bled.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3633&mlon=14.1092#map=17/46.3633/14.1092",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Blejsko%20jezero",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Blejsko jezero",
    "point": {
      "id": "place-bled-lakeside",
      "lat": 46.3633,
      "lon": 14.1092,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-bled-straza",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "park",
    "name": "Straža 山坡休闲区",
    "description": "湖旁的山坡与季节性休闲设施，提供另一种高差视角。",
    "note": "夏季、冬季设施和开放时间不同；具体活动、缆车与步道按当期公告确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.bled.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.3609&mlon=14.1084#map=17/46.3609/14.1084",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Stra%C5%BEa%20Bled",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Straža Bled",
    "point": {
      "id": "place-bled-straza",
      "lat": 46.3609,
      "lon": 14.1084,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-piran-tartini-square",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "塔尔蒂尼广场",
    "description": "皮兰的城市广场连接海港、街巷与塔尔蒂尼纪念。",
    "note": "今天的广场形态经历后世改造，纪念像与人物出生年代不同；可沿广场继续探索历史街道。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5289&mlon=13.5684#map=17/45.5289/13.5684",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Tartinijev%20trg",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Tartinijev trg",
    "point": {
      "id": "place-piran-tartini-square",
      "lat": 45.5289,
      "lon": 13.5684,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-piran-st-george",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "church",
    "name": "皮兰圣乔治教堂",
    "description": "位于老城高处的宗教建筑，与钟楼和海岸城市轮廓相联系。",
    "note": "上坡、钟楼与内部参观分别核对，礼拜时遵循现场安排。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5299&mlon=13.5692#map=17/45.5299/13.5692",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%BDupnijska%20cerkev%20sv.%20Jurija",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Župnijska cerkev sv. Jurija",
    "point": {
      "id": "place-piran-st-george",
      "lat": 45.5299,
      "lon": 13.5692,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-piran-walls",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "landmark",
    "name": "皮兰城墙",
    "description": "从防御设施和高处视角理解紧凑的半岛城区。",
    "note": "城墙区段、可进入部分与票务分开确认，历史城墙并不覆盖今天每一段市界。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5287&mlon=13.5718#map=17/45.5287/13.5718",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Piransko%20obzidje",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Piransko obzidje",
    "point": {
      "id": "place-piran-walls",
      "lat": 45.5287,
      "lon": 13.5718,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-piran-maritime-museum",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "museum",
    "name": "谢尔盖·马舍拉海事博物馆",
    "description": "通过航海、港口与相关收藏认识亚得里亚海岸生活。",
    "note": "馆藏、分馆与具体展览各有地点，本卡只标皮兰主馆参考位置。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://pomorskimuzej.si/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5277&mlon=13.5668#map=17/45.5277/13.5668",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Pomorski%20muzej%20Sergej%20Ma%C5%A1era%20Piran",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Pomorski muzej Sergej Mašera Piran",
    "point": {
      "id": "place-piran-maritime-museum",
      "lat": 45.5277,
      "lon": 13.5668,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-piran-saltpans",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "park",
    "name": "塞乔夫列盐田自然公园",
    "description": "皮兰地区的盐田景观连接制盐、湿地与鸟类栖息环境。",
    "note": "盐田位于皮兰老城之外，不同分区和入口另查；传统生产、保护区与旅游活动相互关联但各有范围。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.kpss.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.4815&mlon=13.602#map=17/45.4815/13.602",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Se%C4%8Doveljske%20soline",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Sečoveljske soline",
    "point": {
      "id": "place-piran-saltpans",
      "lat": 45.4815,
      "lon": 13.602,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-ljubljana-central-market",
    "type": "place",
    "country": "si",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "卢布尔雅那中央市场",
    "description": "露天摊位、市场建筑与河岸公共空间相互连接，可从食材与日常购物认识首都。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitljubljana.com/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.051&mlon=14.509#map=17/46.051/14.509",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Osrednja%20tr%C5%BEnica",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Osrednja tržnica",
    "point": {
      "id": "place-ljubljana-central-market",
      "lat": 46.051,
      "lon": 14.509,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-maribor-glavni-trg",
    "type": "place",
    "country": "si",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "马里博尔主广场周边",
    "description": "老城广场及周边商店、餐馆提供步行与购物线索。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.557&mlon=15.646#map=17/46.557/15.646",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Glavni%20trg",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "maribor",
    "local": "Glavni trg",
    "point": {
      "id": "place-maribor-glavni-trg",
      "lat": 46.557,
      "lon": 15.646,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-bled-centre-shopping",
    "type": "place",
    "country": "si",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "布莱德中心采购与餐饮区",
    "description": "湖东侧中心一带可寻找日常采购、面包店和餐饮；商店分散，具体营业另查。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.bled.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.368&mlon=14.1145#map=17/46.368/14.1145",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bled%20centre",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Bled centre",
    "point": {
      "id": "place-bled-centre-shopping",
      "lat": 46.368,
      "lon": 14.1145,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-piran-old-town-shopping",
    "type": "place",
    "country": "si",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "皮兰老城市场与街巷",
    "description": "以步行街巷、小型店和地方食品寻找购物线索，不等于大型商场集中区。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=45.5289&mlon=13.5675#map=17/45.5289/13.5675",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Piran%20old%20town",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "piran",
    "local": "Piran old town",
    "point": {
      "id": "place-piran-old-town-shopping",
      "lat": 45.5289,
      "lon": 13.5675,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "heritage-ljubljana-plecnik",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "卢布尔雅那的约热·普列奇尼克作品——以人为本的城市设计",
    "description": "把桥梁、河岸、公共空间和建筑放在城市整体设计中理解，而不只看一栋名作。",
    "note": "这是分布于城市的系列遗产，不是整座卢布尔雅那或全部普列奇尼克作品都自动包含。卡片通过关联地点继续探索，不用一个坐标冒充所有组成部分。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/1643/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "ljubljana"
    ],
    "local": "The works of Jože Plečnik in Ljubljana – Human Centred Urban Design",
    "subtitle": "UNESCO 世界文化遗产",
    "heritage": {
      "organization": "UNESCO",
      "listId": "1643"
    }
  },
  {
    "id": "heritage-skocjan",
    "type": "place",
    "country": "si",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "什科茨扬溶洞",
    "description": "地下河、洞穴与喀斯特地貌构成的重要自然遗产。",
    "note": "位于 Divača 一带，不在布莱德湖或卢布尔雅那市中心。图钉为洞穴区域参考，实际访客中心、路线、预约与天气限制看管理机构。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/390/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "local": "Škocjan Caves",
    "subtitle": "UNESCO 世界自然遗产",
    "point": {
      "id": "heritage-skocjan",
      "lat": 45.6651,
      "lon": 13.9873,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "world-heritage"
    },
    "heritage": {
      "organization": "UNESCO",
      "listId": "390"
    }
  },
  {
    "id": "food-si-potica",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "bread",
    "name": "Potica · 卷馅甜面包",
    "description": "酵母面团卷入馅料后烘烤，核桃馅是常见版本之一，切面能看到卷层。",
    "note": "它与一般千层酥不同，主体是发酵面团；核桃、龙蒿及其他馅料会形成不同风味。家庭节庆、面包店和包装版本的大小与保存条件不同，不能只凭环形外观判断配方。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Potica",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Potica"
  },
  {
    "id": "food-si-kranjska",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "meat",
    "name": "卡尼奥拉香肠",
    "description": "斯洛文尼亚具有代表性的香肠传统，肉馅与香料比例、加工和食用方式构成风味。",
    "note": "受保护名称与普通同类香肠需区分，常见煮热后配面包、芥末或辣根等食用。品牌、产地与餐厅摆盘不是同一维度；具体肉类与配料看包装或向店员确认。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Kranjska%20klobasa",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Kranjska klobasa"
  },
  {
    "id": "food-si-struklji",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "dishes",
    "name": "Štruklji · 卷馅面点",
    "description": "以面皮包卷馅料，可做甜味或咸味，奶酪、核桃和其他配料带来不同版本。",
    "note": "煮、蒸、烤等做法会改变口感，并非每一份都是甜点。点菜时先问馅料与做法，再判断是主食、配菜还是餐后甜品；它与 potica 的发酵甜面包结构不同。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%A0truklji",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Štruklji"
  },
  {
    "id": "food-si-gibanica",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "desserts",
    "name": "普雷克穆列 Gibanica 多层糕点",
    "description": "以罂粟籽、凝乳、核桃和苹果等多层馅料著称，名字指向斯洛文尼亚东北部的普雷克穆列。",
    "note": "它与只有单一馅料的卷心糕点不同，切面层次是理解口感的线索。在本项目城市找到它属于销售或餐饮联系，不表示这些城市都是发源地；名称与配方规范请看产品说明。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Prekmurska%20gibanica",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Prekmurska gibanica"
  },
  {
    "id": "food-si-bled-cream",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "desserts",
    "name": "布莱德奶油蛋糕",
    "description": "酥皮、蛋奶馅和奶油形成不同口感层次，是布莱德湖区广为人知的甜点。",
    "note": "与普通海绵奶油蛋糕相比，主体常见更明显的蛋奶凝固层与酥皮。不同店家版本并不完全相同；酒店和咖啡馆的历史、今天的菜单与一块蛋糕的配方分别理解。",
    "sources": [
      [
        "https://www.sava-hotels-resorts.com/en/sava-hoteli-bled/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Blejska%20kremna%20rezina%20/%20krem%C5%A1nita",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "bled"
    ],
    "local": "Blejska kremna rezina / kremšnita"
  },
  {
    "id": "food-si-styrian-wine",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "wine",
    "name": "斯洛文尼亚施蒂利亚葡萄酒",
    "description": "马里博尔及周边葡萄种植地区的酒类探索入口，白葡萄酒是重要线索之一。",
    "note": "Štajerska 是跨越今日边界的历史地区名称，斯洛文尼亚产区与奥地利葡萄酒各有规则。老葡萄藤的纪念意义、产区风格和买到的一瓶酒的具体来源不同，先看酒标、品种与年份。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%A0tajerska%20Slovenija",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "maribor"
    ],
    "local": "Štajerska Slovenija"
  },
  {
    "id": "food-si-istrian-fish",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "dishes",
    "name": "皮兰的海鱼与伊斯特拉风味",
    "description": "海鱼、鱿鱼、橄榄油等构成海岸菜单的常见线索，做法与计价方式值得一起看。",
    "note": "烤鱼、炖煮、意面或其他组合代表不同用餐体验。海岸餐馆不等于每一种海产都是当天本地捕捞，鱼种、养殖或野生、冷藏与供应按菜单和店家说明确认。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ribe%20/%20istrska%20kuhinja",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "piran"
    ],
    "local": "Ribe / istrska kuhinja"
  },
  {
    "id": "food-si-piran-salt",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "gifts",
    "name": "皮兰盐与盐之花",
    "description": "盐田生产与海岸文化相联系，盐与盐之花的颗粒和使用方式不同。",
    "note": "可作为调味与地方工艺线索，购买时看具体产地、包装和生产说明。盐田景观、企业品牌和一包盐的批次来源分别理解；盐之花常用作完成调味，不必与普通烹调用盐等量比较价格。",
    "sources": [
      [
        "https://www.soline.si/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Piranska%20sol%20/%20solni%20cvet",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "piran"
    ],
    "local": "Piranska sol / solni cvet"
  },
  {
    "id": "food-si-gorenjka",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "chocolate",
    "name": "Gorenjka 巧克力",
    "description": "斯洛文尼亚常见的巧克力品牌，整粒榛子等版本适合与普通巧克力排比较。",
    "note": "品牌与地方工业史相联系；黑巧、牛奶巧克力、坚果和夹心版本的配料不同，外包装国旗或销售城市不代替实际产地和过敏原标识。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.gorenjka.si/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Gorenjka",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Gorenjka",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-si-cockta",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "snacks",
    "name": "Cockta 草本风味汽水",
    "description": "源于斯洛文尼亚的区域性汽水品牌，草本与果味线索让它有别于普通可乐。",
    "note": "可以比较原味、无糖和其他版本，不把品牌故事里的传统配方直接等同于每一款今天的配料。它在邻国也常见，销售范围不代表每个市场都拥有同一生产地点。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://cockta.eu/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Cockta",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Cockta",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-si-argeta",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "snacks",
    "name": "Argeta 涂抹酱",
    "description": "常见的小包装肉类或其他风味涂抹酱，可配面包作为方便食品。",
    "note": "鸡肉、鱼类及其他配方分别看标签；它与切片香肠、冷鲜肉或奶酪不是同一产品。常温保存条件、开封后冷藏与食用时限以具体包装为准。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.argeta.com/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Argeta",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Argeta",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-si-fructal",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "snacks",
    "name": "Fructal 果汁与饮料",
    "description": "斯洛文尼亚起源的果汁和饮料品牌，超市中可按水果、含量和包装规格比较。",
    "note": "果汁、果蜜和其他果味饮料的配料与果汁含量不同，不能仅凭正面水果图判断。产地、糖与其他成分按标签阅读，销售地不等于所用水果全部当地种植。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.fructal.si/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Fructal",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Fructal",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-si-radenska",
    "type": "food",
    "country": "si",
    "category": "food",
    "subcategory": "snacks",
    "name": "Radenska 矿泉水",
    "description": "带三颗心标志的矿泉水品牌，可从含气与不同产品线认识日常饮水。",
    "note": "天然矿泉水、调味饮料和不同含气程度分别看具体产品；瓶形和品牌相同不代表配料一致。旅行采购可同时比较容量、可回收包装和单位价格。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.radenska.com/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Radenska",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "local": "Radenska",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "place-ljubljana-klobasarna",
    "type": "place",
    "country": "si",
    "category": "food",
    "subcategory": "restaurants",
    "name": "Klobasarna 香肠餐饮店",
    "description": "从卡尼奥拉香肠及简明菜单认识一处具体餐饮场所。",
    "note": "这是一处门店参考，不保证当日菜单与营业；地点关联不表示整种香肠起源于这个店面。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.klobasarna.si/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.0502&mlon=14.5073#map=17/46.0502/14.5073",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Klobasarna",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "ljubljana",
    "local": "Klobasarna",
    "point": {
      "id": "place-ljubljana-klobasarna",
      "lat": 46.0502,
      "lon": 14.5073,
      "coordSystem": "wgs84",
      "group": "food",
      "sub": "restaurants"
    }
  },
  {
    "id": "place-bled-park-cafe",
    "type": "place",
    "country": "si",
    "category": "food",
    "subcategory": "restaurants",
    "name": "Park Café · 布莱德奶油蛋糕线索",
    "description": "湖东侧的一处咖啡馆和甜点探索入口，与布莱德奶油蛋糕的城市故事相联系。",
    "note": "同类甜点在不同店有不同版本；历史叙述、今天的供应与具体座位预订分别确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.sava-hotels-resorts.com/en/sava-hoteli-bled/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=46.367&mlon=14.1098#map=17/46.367/14.1098",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Park%20Caf%C3%A9%20Bled",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "bled",
    "local": "Park Café Bled",
    "point": {
      "id": "place-bled-park-cafe",
      "lat": 46.367,
      "lon": 14.1098,
      "coordSystem": "wgs84",
      "group": "food",
      "sub": "restaurants"
    }
  },
  {
    "id": "brand-si-mercator",
    "type": "brand",
    "country": "si",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "Mercator",
    "description": "起源于斯洛文尼亚的零售品牌，日常采购可以从其官方门店查询与地图探索开始。",
    "note": "品牌起源、当前集团所有权和每家门店的经营安排分别理解。城市关联提供门店网络的查询线索，不表示所有门店售卖同一地方商品；地图按当前范围动态搜索。",
    "sources": [
      [
        "https://www.mercator.si/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "searchKind": "supermarket",
    "aliases": [
      "Mercator"
    ]
  },
  {
    "id": "brand-si-spar",
    "type": "brand",
    "country": "si",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "SPAR / INTERSPAR · 斯洛文尼亚",
    "description": "斯洛文尼亚 SPAR 经营入口，超市与较大店型可用于比较日常采购。",
    "note": "SPAR 是跨国品牌网络，本卡介绍斯洛文尼亚业务入口，不把品牌历史起源改写为斯洛文尼亚。动态搜索匹配所选品牌，具体营业、店型和库存仍需看门店。",
    "sources": [
      [
        "https://www.spar.si/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "searchKind": "supermarket",
    "aliases": [
      "SPAR",
      "INTERSPAR"
    ]
  },
  {
    "id": "brand-si-nlb",
    "type": "brand",
    "country": "si",
    "category": "brands",
    "subcategory": "bank",
    "name": "NLB 银行",
    "description": "斯洛文尼亚银行服务和网点查询的一个入口，可用于认识本地金融品牌。",
    "note": "官方网点与 ATM 查询优先于地图旧标记。网点、自动柜员机与营业时间分别确认，取现费用取决于设备提示、发卡行与账户条件，不提供免费提现保证。",
    "sources": [
      [
        "https://www.nlb.si/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ]
  },
  {
    "id": "brand-si-krka",
    "type": "brand",
    "country": "si",
    "category": "brands",
    "subcategory": "industry",
    "name": "Krka · 制药企业",
    "description": "斯洛文尼亚的重要制药企业之一，总部关联 Novo mesto，可作为本地产业知识入口。",
    "note": "企业生产药品与游客在城市药房购药是不同层面。本卡没有设为参观地点，也不把总部放到已收录的首都；用药与处方问题由正规药师和医生处理。",
    "sources": [
      [
        "https://www.krka.biz/",
        "企业 / 品牌官方入口"
      ]
    ]
  },
  {
    "id": "fact-si-country-history",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "1991、2004、2007：几种不同的国家节点",
    "description": "斯洛文尼亚在 1991 年独立，2004 年加入欧盟，2007 年采用欧元并加入申根体系；这些不是同一天发生的一件事。",
    "note": "今天的国家制度并不是当地历史的起点。斯洛文尼亚地区曾涉及哈布斯堡领地、南斯拉夫等不同政治结构，语言、城市与社会生活的历史比现代国界更长。\n1991 年的独立、2004 年加入欧盟、2007 年采用欧元，分别涉及国家主权、区域组织与货币；申根又主要涉及边境和人员通行安排。用不同时间节点理解它们，可以减少对旅行规则的误会。\n在卢布尔雅那和马里博尔看旧建筑时，先读建造年代，再判断当时的行政背景。现代斯洛文尼亚的名称和边界不能直接套回每一个历史时期。",
    "sources": [
      [
        "https://www.gov.si/en/",
        "斯洛文尼亚政府 · 国家历史与制度入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "subtitle": "国家历史 · 独立、欧盟与欧元"
  },
  {
    "id": "fact-si-slovenia-slovakia",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "Slovenija 与 Slovensko：名字相近的两个国家",
    "description": "斯洛文尼亚是 Slovenia / Slovenija，首都是卢布尔雅那；斯洛伐克是 Slovakia / Slovensko，首都是布拉迪斯拉发。",
    "note": "旅行搜索时，这两个国家的英语名称、本地名称与相似的三色旗容易混淆。斯洛文尼亚代码 SI，斯洛伐克代码 SK；确认机票、住宿和交通网站时，把国家、城市和机场代码一起看更可靠。\n斯洛文尼亚语属于南斯拉夫语支，斯洛伐克语属于西斯拉夫语支。名称相近体现语言历史中的一些共同来源，却不等于同一种语言或同一个国家，学习词汇时应分别查词典。\n斯洛文尼亚拥有一小段亚得里亚海岸，与意大利、奥地利、匈牙利和克罗地亚接壤；斯洛伐克则是内陆国家。把名称、首都、地形和国别代码一起看，比只凭相似旗色辨认更有用。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "斯洛文尼亚官方旅游入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "subtitle": "国家与语言 · 斯洛文尼亚和斯洛伐克"
  },
  {
    "id": "fact-si-language",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "斯洛文尼亚语的双数，与几句旅行用语",
    "description": "斯洛文尼亚语保留双数，表示“两个人或两个事物”时可能使用与普通复数不同的形式；旅行问候可以先从 Dober dan 和 Hvala 开始。",
    "note": "双数是语法里的数量区别，并非简单把数字二加在每个词前面。名词、代词、动词等会依句法变化；例如动词 sva 可出现在第一人称双数表达中，不能拿一个例子套所有词。\nDober dan 常用于白天问候，Hvala 是谢谢，Prosim 可随语境表示请或不用谢，Oprostite 可用于礼貌打扰。Račun, prosim 可以用来请求账单；保留原文字母有助于进一步查发音。\n斯洛文尼亚语不是德语，也不是只把英语换几种拼写。城市本地名、菜单和日常语言可逐步成对记录；沿海和边境部分地区还使用意大利语或匈牙利语，具体地名与语言环境应结合当地背景。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "官方旅游 · 语言与日常资料入口"
      ],
      [
        "https://en.wiktionary.org/wiki/Category:Slovene_language",
        "维基词典 · 斯洛文尼亚语检索入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "subtitle": "语言文化 · 两个人也有专门的语法形式"
  },
  {
    "id": "fact-si-karst",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "“喀斯特”这个地理词，与这里有什么关系？",
    "description": "地理学中的喀斯特名称，与今天斯洛文尼亚和意大利一带的 Kras / Karst 地区有历史联系。洞穴、落水与地下河是不同尺度的观察对象。",
    "note": "可溶性岩石在水作用下发生溶蚀，能形成洼地、洞穴和地下水通道等地貌。并非每一种洞穴都用同样过程形成，地表没有大河也不代表地下缺水。\n什科茨扬溶洞提供了地下河与大型洞穴系统的阅读入口。看照片时可以先分辨岩层、河道与沉积，再理解地下空间并非一座永远静止、不受水位影响的天然大厅。\nKras 是具体区域名称，喀斯特则成为更广泛使用的地理术语。布莱德湖的湖盆、沿海盐田与喀斯特洞穴各有形成条件，不把斯洛文尼亚所有自然景观都归为同一种地貌。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/390/",
        "UNESCO · 什科茨扬溶洞"
      ]
    ],
    "cities": [
      "ljubljana",
      "maribor",
      "bled",
      "piran"
    ],
    "subtitle": "自然地理 · Kras 高原与地下水"
  },
  {
    "id": "fact-si-ljubljana-bridges",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "为什么三重桥会是三座桥？",
    "description": "原有桥梁旁增加两座桥，把通行、河岸与广场组织在一起；这是一种以城市使用为核心的设计，而不只是多造两个装饰。",
    "note": "三重桥的中央桥与两侧桥来自不同阶段。普列奇尼克在既有条件上增建并组织步行联系，让桥不只跨水，也成为城市广场和河岸空间的延伸。\n同一位建筑师在市场、图书馆和其他公共空间的工作，反映了连续的城市思考：人怎样走、视线怎样转、日常交易怎样与公共生活相遇。UNESCO 的系列遗产也需要按具体组成部分理解。\n今天的步行体验与早期机动车交通环境不同，建筑使用会随城市改变。看桥时可以把旧桥、增建与后来的交通安排分开，再沿关联地点寻找同一设计思路的不同表达。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/1643/",
        "UNESCO · 普列奇尼克的城市作品"
      ]
    ],
    "cities": [
      "ljubljana"
    ],
    "subtitle": "卢布尔雅那 · 交通空间怎样变成公共空间"
  },
  {
    "id": "fact-si-maribor-drava",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "德拉瓦河怎样连接木材贸易与水电？",
    "description": "德拉瓦河的区域运输、河岸生活与近现代水电工程，提供了葡萄酒之外的城市阅读线索。",
    "note": "河流过去连接上游木材、沿岸聚落与更远市场，木筏运输和港岸活动体现了利用水流的交通方式。马里博尔的 Lent 河岸，适合把街区放回这一水路背景中理解。\n后来水电工程改变了河流利用，发电、防洪、生态与休闲需要在同一流域协调。今天可见的平稳水面并不等于河道从未被工程影响，城市河岸、上游电站和整个流域也有不同尺度。\n德拉瓦河最后属于多瑙河水系，跨越今天国界。木材运输和现代发电是不同年代的用途，不能把眼前一个岸段当成全部历史；可从地方博物馆和运营机构资料继续核对。",
    "sources": [
      [
        "https://www.visitmaribor.si/en/",
        "马里博尔官方旅游 · 河岸与城市资料"
      ],
      [
        "https://www.dem.si/",
        "德拉瓦河水电企业 · 工程资料入口"
      ]
    ],
    "cities": [
      "maribor"
    ],
    "subtitle": "马里博尔 · 一条河的多种用途"
  },
  {
    "id": "fact-si-bled-landscape",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "湖、岛与城堡：布莱德的自然和人造层次",
    "description": "湖盆、岛屿与山地环境提供自然条件，教堂、城堡、步道和旅游设施又在其上留下不同年代的选择。",
    "note": "布莱德湖区与冰川及地质过程有关，湖岸形态和周边高差影响今天的步行、观景与聚落分布。自然形成时间与教堂、城堡的建造年代相差很大，不能用一则传说同时解释全部景观。\n城堡占据高地，湖心岛拥有宗教建筑，湖东岸发展成便于到达的旅游中心。把这些位置放回地图，可以理解为什么从一种体验转到另一种仍需要船、上坡或绕行。\nPletna 木船、奶油蛋糕与酒店文化属于人的生活和旅游传统。它们为认识地方提供线索，但“传统”不表示所有今天的服务价格、班次和路线一直固定不变。",
    "sources": [
      [
        "https://www.bled.si/en/",
        "布莱德官方旅游 · 湖区历史与自然资料"
      ]
    ],
    "cities": [
      "bled"
    ],
    "subtitle": "布莱德 · 景观不只是一张明信片"
  },
  {
    "id": "fact-si-piran-venice",
    "type": "fact",
    "country": "si",
    "category": "facts",
    "subcategory": "facts",
    "name": "皮兰为什么会让人想到威尼斯？",
    "description": "皮兰长期与威尼斯共和国及伊斯特拉海岸网络相联系，街巷、教堂与双语地名能帮助阅读这段历史。",
    "note": "从十三世纪末到十八世纪末，皮兰处于威尼斯共和国统治之下。海上贸易、地方治理与宗教建筑共同影响城区，而今天看到的广场与房屋也包含后续重建和改造。\n此后哈布斯堡统治以及二十世纪的战争、国家与边界变化，又给城市带来新层次。Piran 和 Pirano 是相关语言语境中的名称，不能只凭一种语言的地名反推某个居民的身份。\n看圣乔治教堂高地、塔尔蒂尼广场与城墙时，可以分别观察防御、宗教和公共生活如何使用狭窄半岛。盐田在城外另一片环境中，它与老城相连，但并不是同一个景点或同一坐标。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "皮兰与波尔托罗日官方旅游 · 地方历史"
      ]
    ],
    "cities": [
      "piran"
    ],
    "subtitle": "皮兰 · 海岸商贸与多语言历史"
  },
  {
    "id": "person-si-plecnik",
    "type": "person",
    "country": "si",
    "category": "facts",
    "subcategory": "people",
    "name": "约热·普列奇尼克 · 用建筑连接日常生活",
    "description": "出生于卢布尔雅那的建筑师，曾在维也纳学习和工作，也在布拉格等地实践；首都的桥梁、图书馆与公共空间是重要线索。",
    "note": "普列奇尼克生于 1872 年，在维也纳的建筑教育和实践使他接触到现代城市问题，并与奥托·瓦格纳的教育环境相关。他的生平跨越多个城市，不能把所有作品都归入同一国的单一风格。\n在卢布尔雅那，他通过桥梁、河岸、市场与建筑建立步行和公共生活的联系。材料、视线与人与空间的尺度，往往比一处立面装饰更能解释设计。UNESCO 系列遗产只包含列明的组成部分。\n维也纳、布拉格和卢布尔雅那面对不同的委托与城市条件。比较这些实践，可以看到建筑师怎样回应具体环境，而不是把一种固定外观搬到所有城市；建筑名称、作者与建造阶段仍要逐一核对。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/1643/",
        "UNESCO · 普列奇尼克的卢布尔雅那作品"
      ],
      [
        "https://mgml.si/en/",
        "卢布尔雅那博物馆与美术馆 · 人物资料入口"
      ]
    ],
    "cities": [
      "ljubljana",
      "vienna"
    ],
    "local": "Jože Plečnik",
    "subtitle": "人物 · 卢布尔雅那、维也纳与公共空间",
    "countries": [
      "si",
      "at"
    ]
  },
  {
    "id": "person-si-preseren",
    "type": "person",
    "country": "si",
    "category": "facts",
    "subcategory": "people",
    "name": "弗兰采·普列舍伦 · 诗歌与公共纪念",
    "description": "斯洛文尼亚诗人，与卢布尔雅那的公共纪念紧密相关；出生地 Vrba 在布莱德附近地区，不是布莱德市中心。",
    "note": "普列舍伦生于 1800 年，诗作对斯洛文尼亚文学和语言文化影响深远。《祝酒辞》中的诗节后来用于国歌，文学作品与国家公共仪式因而发生了新的联系，但不能把全部诗作都看作国家宣传文本。\n卢布尔雅那以他命名的广场、纪念像与三重桥形成城市空间，纪念设施则出现在诗人身后。Vrba 的出生关联与布莱德湖区的邻近关系，为本项目的区域阅读提供线索，不改变实际地点。\n诗歌、人物生平与后世使用各有年代。参观时可以先看广场怎样组织人流和视线，再读诗人与语言的故事，避免把一座纪念像误认成他本人长期创作的原址。",
    "sources": [
      [
        "https://www.slovenia.info/en",
        "斯洛文尼亚旅游组织 · 人物与文化资料"
      ],
      [
        "https://www.bled.si/en/",
        "布莱德地区旅游 · 邻近文化线索"
      ]
    ],
    "cities": [
      "ljubljana",
      "bled"
    ],
    "local": "France Prešeren",
    "subtitle": "人物 · 问候诗、广场与地方记忆"
  },
  {
    "id": "person-si-maister",
    "type": "person",
    "country": "si",
    "category": "facts",
    "subcategory": "people",
    "name": "鲁道夫·迈斯特 · 马里博尔的 1918 年",
    "description": "军人与诗人鲁道夫·迈斯特，与第一次世界大战结束时马里博尔的政权和边界变动有关。",
    "note": "1918 年哈布斯堡君主国解体后，不同政治力量对德拉瓦河区域的归属提出主张，军事行动、地方人口与国际谈判共同影响结果。迈斯特在马里博尔的活动是其中一条人物线索。\n他也写作诗歌，人物的文化活动、军事角色和后来的国家纪念应分别理解。纪念日和雕像反映社会怎样选择叙述历史，并不代替对当时不同居民经历与材料的研究。\n看马里博尔的大学、广场和旧城时，可以把旧帝国的城市环境与二十世纪的新边界放在一起比较。今天的国际边界不是地形自然写出的唯一答案，而是具体历史过程的结果。",
    "sources": [
      [
        "https://www.gov.si/en/",
        "斯洛文尼亚政府 · 人物与纪念资料入口"
      ],
      [
        "https://www.visitmaribor.si/en/",
        "马里博尔官方旅游入口"
      ]
    ],
    "cities": [
      "maribor"
    ],
    "local": "Rudolf Maister",
    "subtitle": "人物 · 军事、诗歌与边界变迁"
  },
  {
    "id": "person-si-tartini",
    "type": "person",
    "country": "si",
    "category": "facts",
    "subcategory": "people",
    "name": "朱塞佩·塔尔蒂尼 · 皮兰出生，音乐跨越海岸",
    "description": "塔尔蒂尼于 1692 年出生在皮兰，当时城市处于威尼斯共和国之下，后来在帕多瓦等地从事音乐工作。",
    "note": "他以小提琴演奏、教学和作曲等活动进入欧洲音乐史。今日皮兰的广场、纪念像和人物资料构成出生地关联，但不能把他全部职业生涯限制在今天斯洛文尼亚的国界内。\n《魔鬼的颤音》相关梦境故事流传很广，适合作为音乐接受与人物传奇阅读；具体作品形成和故事传播仍需区分，不能把传奇当成可以现场复原的创作实录。\n站在广场看城市建筑，可以同时理解意大利语文化联系和今天斯洛文尼亚城市生活。出生年代、当时政治归属与现代国家身份各是一层，人物卡通过关系继续进入地点，而不直接生成一个“人物坐标”。",
    "sources": [
      [
        "https://www.portoroz.si/en/",
        "皮兰官方旅游 · 塔尔蒂尼文化资料入口"
      ]
    ],
    "cities": [
      "piran"
    ],
    "local": "Giuseppe Tartini",
    "subtitle": "人物 · 小提琴、作曲与后世纪念"
  },
  {
    "id": "person-si-alma-karlin",
    "type": "person",
    "country": "si",
    "category": "facts",
    "subcategory": "people",
    "name": "阿尔玛·卡林 · 语言与远行的另一种人生",
    "description": "出生于今天斯洛文尼亚采列的旅行者和作家，以多语言学习与长期旅行经历提供认识当地文化的另一条线索。",
    "note": "阿尔玛·卡林生于 1889 年，主要以德语写作，曾进行长期跨地区旅行。她的作品、照片与个人材料可以帮助理解旅行、劳动、语言和性别处境，而不只是列出去过多少地方。\n人物出生地、写作语言与今日国籍标签不是同一回事，历史上的采列与更广的中欧文化环境相联系。读游记时也要把作者当时的观察、时代观念与今天对当地社会的认识区别开来。\n她在旅行中以语言能力和不同工作谋生，留下文字、图像与采集材料。采列的博物馆资料提供了继续了解的入口；把个人旅行与当时的交通、劳动条件一起读，比仅以现代游客的自由出行经验衡量更有层次。",
    "sources": [
      [
        "https://www.pokmuz-ce.si/en/",
        "采列地区博物馆 · 阿尔玛·卡林资料入口"
      ]
    ],
    "local": "Alma M. Karlin",
    "subtitle": "人物 · 采列与跨地区旅行写作"
  }
];

const sloveniaRelations = [
  [
    "place-ljubljana-airport",
    "tip-city-ljubljana",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-ljubljana-station",
    "tip-city-ljubljana",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-maribor-station",
    "tip-city-maribor",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-bled-lesce-station",
    "tip-city-bled",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-bled-jezero-station",
    "tip-city-bled",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-piran-koper-station",
    "tip-city-piran",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-ljubljana-triple-bridge",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-dragon-bridge",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-castle",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-national-gallery",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-nuk",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-university",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-tivoli",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-cankarjev-dom",
    "fact-ljubljana-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-old-vine",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-cathedral",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-castle-museum",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-university",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-puppet-theatre",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-maribor-lent",
    "fact-maribor-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-bled-castle",
    "fact-bled-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-bled-island",
    "fact-bled-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-bled-lakeside",
    "fact-bled-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-bled-straza",
    "fact-bled-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-piran-tartini-square",
    "fact-piran-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-piran-st-george",
    "fact-piran-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-piran-walls",
    "fact-piran-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-piran-maritime-museum",
    "fact-piran-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-piran-saltpans",
    "fact-piran-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-ljubljana-central-market",
    "tip-si-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-maribor-glavni-trg",
    "tip-si-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-bled-centre-shopping",
    "tip-si-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-piran-old-town-shopping",
    "tip-si-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "food-si-potica",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-kranjska",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-struklji",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-gibanica",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-bled-cream",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-styrian-wine",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-istrian-fish",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-piran-salt",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-gorenjka",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-gorenjka",
    "brand-si-mercator",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-si-cockta",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-cockta",
    "brand-si-mercator",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-si-argeta",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-argeta",
    "brand-si-mercator",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-si-fructal",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-fructal",
    "brand-si-mercator",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-si-radenska",
    "tip-si-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-si-radenska",
    "brand-si-mercator",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "place-ljubljana-klobasarna",
    "tip-si-dining",
    "点餐与结账准备",
    "可继续探索的餐饮场所"
  ],
  [
    "place-bled-park-cafe",
    "tip-si-dining",
    "点餐与结账准备",
    "可继续探索的餐饮场所"
  ],
  [
    "brand-si-mercator",
    "tip-si-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-si-spar",
    "tip-si-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-si-nlb",
    "tip-si-money",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-si-krka",
    "tip-si-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "tip-city-ljubljana",
    "tip-ljubljana-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-ljubljana-ticket-choice",
    "tip-ljubljana-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-ljubljana-daily-setting",
    "tip-city-ljubljana",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-maribor",
    "tip-maribor-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-maribor-ticket-choice",
    "tip-maribor-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-maribor-daily-setting",
    "tip-city-maribor",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-bled",
    "tip-bled-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-bled-ticket-choice",
    "tip-bled-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-bled-daily-setting",
    "tip-city-bled",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-piran",
    "tip-piran-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-piran-ticket-choice",
    "tip-piran-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-piran-daily-setting",
    "tip-city-piran",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-si-entry-connectivity",
    "tip-si-money",
    "准备当地支付与币种",
    "出发前核对国家信息"
  ],
  [
    "heritage-ljubljana-plecnik",
    "place-ljubljana-triple-bridge",
    "观察桥梁与公共空间",
    "认识正式遗产范围"
  ],
  [
    "heritage-ljubljana-plecnik",
    "place-ljubljana-nuk",
    "从图书馆继续理解设计",
    "进入系列遗产背景"
  ],
  [
    "heritage-ljubljana-plecnik",
    "place-ljubljana-central-market",
    "看市场与河岸的联系",
    "了解建筑与城市设计"
  ],
  [
    "heritage-skocjan",
    "fact-si-karst",
    "理解喀斯特地貌",
    "从地理概念进入洞穴"
  ],
  [
    "fact-si-country-history",
    "knowledge-habsburg-compromise",
    "回看更早的中欧政治结构",
    "继续认识斯洛文尼亚的制度节点"
  ],
  [
    "fact-si-country-history",
    "fact-si-slovenia-slovakia",
    "辨认今天的国家名称",
    "了解现代制度节点"
  ],
  [
    "fact-si-language",
    "person-si-preseren",
    "从语言进入诗歌",
    "把文学放回语言文化"
  ],
  [
    "fact-si-language",
    "fact-si-slovenia-slovakia",
    "区分相近的国家与语言名",
    "继续学几句当地语言"
  ],
  [
    "fact-si-ljubljana-bridges",
    "place-ljubljana-triple-bridge",
    "在桥上观察空间组织",
    "了解增建与城市设计"
  ],
  [
    "fact-si-ljubljana-bridges",
    "person-si-plecnik",
    "认识建筑师",
    "从人物进入桥梁设计"
  ],
  [
    "fact-si-maribor-drava",
    "place-maribor-lent",
    "从河岸观察城市用途",
    "了解木材与水电背景"
  ],
  [
    "fact-si-maribor-drava",
    "place-maribor-castle-museum",
    "从地方收藏继续查",
    "把收藏放回河流与城市"
  ],
  [
    "fact-si-bled-landscape",
    "place-bled-lakeside",
    "先辨认湖岸尺度",
    "阅读景观形成与使用"
  ],
  [
    "fact-si-bled-landscape",
    "place-bled-castle",
    "观察高差与人造建筑",
    "把城堡放回湖区"
  ],
  [
    "fact-si-bled-landscape",
    "place-bled-island",
    "比较湖与宗教空间",
    "理解湖区不同层次"
  ],
  [
    "fact-si-piran-venice",
    "place-piran-st-george",
    "看宗教与海岸轮廓",
    "认识威尼斯时期背景"
  ],
  [
    "fact-si-piran-venice",
    "place-piran-walls",
    "看防御与半岛形态",
    "阅读地方统治变化"
  ],
  [
    "person-si-plecnik",
    "heritage-ljubljana-plecnik",
    "看正式列名作品",
    "认识建筑师的跨城生平"
  ],
  [
    "person-si-plecnik",
    "place-ljubljana-nuk",
    "从图书馆看材料和光线",
    "认识设计者"
  ],
  [
    "person-si-plecnik",
    "person-at-otto-wagner",
    "比较建筑教育与设计路径",
    "继续认识相关建筑师"
  ],
  [
    "person-si-preseren",
    "place-ljubljana-triple-bridge",
    "查看广场与纪念联系",
    "认识被纪念的诗人"
  ],
  [
    "person-si-preseren",
    "fact-si-bled-landscape",
    "把邻近出生地与湖区分清",
    "从湖区延伸到区域人物"
  ],
  [
    "person-si-maister",
    "place-maribor-castle-museum",
    "从地方历史继续阅读",
    "认识 1918 年的人物线索"
  ],
  [
    "person-si-maister",
    "fact-si-country-history",
    "比较不同时期的国家节点",
    "回看更早的边界与人物"
  ],
  [
    "person-si-tartini",
    "place-piran-tartini-square",
    "认识广场上的纪念",
    "了解作曲家的生平"
  ],
  [
    "person-si-tartini",
    "fact-si-piran-venice",
    "放回出生时的地方背景",
    "从城市历史进入音乐人物"
  ],
  [
    "person-si-alma-karlin",
    "fact-si-language",
    "比较写作语言与国家标签",
    "认识多语言旅行者"
  ],
  [
    "person-si-alma-karlin",
    "fact-si-country-history",
    "放回不同年代的国家背景",
    "通过旅行写作认识人物"
  ],
  [
    "food-si-kranjska",
    "place-ljubljana-klobasarna",
    "餐饮探索（菜单另核）",
    "了解相关香肠传统"
  ],
  [
    "food-si-bled-cream",
    "place-bled-park-cafe",
    "具体甜点探索入口",
    "比较相关城市甜点"
  ],
  [
    "food-si-piran-salt",
    "place-piran-saltpans",
    "把商品放回盐田景观",
    "认识盐与盐之花"
  ],
  [
    "food-si-styrian-wine",
    "place-maribor-old-vine",
    "认识城市葡萄文化",
    "继续了解地区葡萄酒"
  ],
  [
    "food-si-potica",
    "food-si-struklji",
    "比较两种卷馅结构",
    "比较发酵甜面包与其他面点"
  ],
  [
    "food-si-gibanica",
    "food-si-bled-cream",
    "比较多层馅料与蛋奶糕点",
    "认识另一种地方甜点"
  ]
];

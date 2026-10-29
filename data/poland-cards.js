/* Poland destination cards and reading relationships. Static JSON only; positions are reference points and sources are reading entrances, not live-verification claims. */
const polandCards = [
  {
    "id": "tip-city-warsaw",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "华沙 · 到站与换乘",
    "description": "地铁、公交、电车与部分城市铁路按具体票种衔接。先查 1 区、2 区和有效时长；肖邦机场与莫德林机场的接驳条件不同。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。维斯瓦河（Wisła）经过市区，老城和主要皇家路线在西岸；河东普拉加区也有独立的街区历史。",
    "sources": [
      [
        "https://www.wtp.waw.pl/en/",
        "Jakdojade / Warszawski Transport Publiczny · 查询入口"
      ],
      [
        "https://www.wtp.waw.pl/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "warsaw"
  },
  {
    "id": "tip-warsaw-ticket-choice",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "华沙 · 选票与乘车",
    "description": "地铁、公交、电车与部分城市铁路按具体票种衔接。先查 1 区、2 区和有效时长；肖邦机场与莫德林机场的接驳条件不同。",
    "note": "先区分时间票、单次/换乘票与较长期票，再核对 1 区和 2 区范围。纸票、App 票和其他介质的生效方式分别看，保存可供检查的票证。肖邦机场与莫德林机场不共用同一接驳假设，跨城 PKP Intercity 另购。",
    "sources": [
      [
        "https://www.wtp.waw.pl/en/",
        "Jakdojade / Warszawski Transport Publiczny · 查询入口"
      ],
      [
        "https://www.wtp.waw.pl/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "warsaw"
  },
  {
    "id": "tip-warsaw-transit-tools",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "华沙 · 交通 App 与线路图",
    "description": "查询入口：Jakdojade / Warszawski Transport Publiczny。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：WTP / ZTM。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://www.wtp.waw.pl/en/",
        "Jakdojade / Warszawski Transport Publiczny · 查询入口"
      ],
      [
        "https://www.wtp.waw.pl/en/",
        "运营商线路 / 时刻入口"
      ],
      [
        "https://jakdojade.pl/",
        "Jakdojade · 第三方路线与部分票务，按城市支持范围使用"
      ]
    ],
    "city": "warsaw"
  },
  {
    "id": "fact-warsaw-daily-setting",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "华沙 · 河流、气候与日常预算",
    "description": "维斯瓦河（Wisła）经过市区，老城和主要皇家路线在西岸；河东普拉加区也有独立的街区历史。",
    "note": "内陆冬季偏冷、日照较短，夏季可热；开阔广场和河边体感差异明显，准备雨具和分层衣物。\n货币：波兰兹罗提 PLN（zł）。\n预算观察：首都中心、热门博物馆和住宿可能较贵；奶食堂、面包店和超市更利于控制日常开支，特价与午餐套餐按具体店比较。",
    "sources": [
      [
        "https://warsawtour.pl/en/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "warsaw",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-krakow",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "克拉科夫 · 到站与换乘",
    "description": "市内以电车和公交为主，票区与时间票要分清。机场列车、机场公交以及前往维利奇卡等城外线路，分别检查适用票种。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。维斯瓦河（Wisła）经过瓦维尔山下，老城、卡齐米日和南岸城区并不是同一片街区。",
    "sources": [
      [
        "https://ztp.krakow.pl/",
        "Jakdojade / ZTP / MPK · 查询入口"
      ],
      [
        "https://www.mpk.krakow.pl/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "krakow"
  },
  {
    "id": "tip-krakow-ticket-choice",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "克拉科夫 · 选票与乘车",
    "description": "市内以电车和公交为主，票区与时间票要分清。机场列车、机场公交以及前往维利奇卡等城外线路，分别检查适用票种。",
    "note": "市内时间票和区域票须同时看时长与票区，地铁并非这里的常规出行方式。机场巴士、机场铁路和去维利奇卡的区域交通分别核对；日票或多日票是否覆盖目标线路，以 ZTP/MPK 当期说明为准。",
    "sources": [
      [
        "https://ztp.krakow.pl/",
        "Jakdojade / ZTP / MPK · 查询入口"
      ],
      [
        "https://www.mpk.krakow.pl/en/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "krakow"
  },
  {
    "id": "tip-krakow-transit-tools",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "克拉科夫 · 交通 App 与线路图",
    "description": "查询入口：Jakdojade / ZTP / MPK。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：ZTP 统筹 / MPK 等运营。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://ztp.krakow.pl/",
        "Jakdojade / ZTP / MPK · 查询入口"
      ],
      [
        "https://www.mpk.krakow.pl/en/",
        "运营商线路 / 时刻入口"
      ],
      [
        "https://jakdojade.pl/",
        "Jakdojade · 第三方路线与部分票务，按城市支持范围使用"
      ]
    ],
    "city": "krakow"
  },
  {
    "id": "fact-krakow-daily-setting",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "克拉科夫 · 河流、气候与日常预算",
    "description": "维斯瓦河（Wisła）经过瓦维尔山下，老城、卡齐米日和南岸城区并不是同一片街区。",
    "note": "冬季寒冷且白天较短，夏季可能炎热并有阵雨；参观户外纪念地和在河边步行时关注天气。\n货币：波兰兹罗提 PLN（zł）。\n预算观察：老城核心和旺季住宿具有旅游溢价；奶食堂、面包摊与校园周边餐饮提供不同预算选择，景区票另算。",
    "sources": [
      [
        "https://krakow.travel/en",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "krakow",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-gdansk",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "格但斯克 · 到站与换乘",
    "description": "公交、电车与 SKM、区域铁路组成不同出行层次；三联城跨市交通和机场铁路的票制，不默认等同于格但斯克市内单程票。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。主城河岸常见的是莫特瓦瓦河（Motława），更大的城市港口与维斯瓦河、波罗的海相联系；老城河岸不是开阔海滩。",
    "sources": [
      [
        "https://ztm.gda.pl/",
        "Jakdojade / ZTM Gdańsk / SKM · 查询入口"
      ],
      [
        "https://ztm.gda.pl/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "gdansk"
  },
  {
    "id": "tip-gdansk-ticket-choice",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "格但斯克 · 选票与乘车",
    "description": "公交、电车与 SKM、区域铁路组成不同出行层次；三联城跨市交通和机场铁路的票制，不默认等同于格但斯克市内单程票。",
    "note": "先分格但斯克市内公交/电车票、SKM 铁路和跨市联程产品。票面时长不自动等于覆盖三联城所有运营商；机场铁路也应单独核对。旅行天数多时比较多日产品，月票则先检查身份、线路和生效条件。",
    "sources": [
      [
        "https://ztm.gda.pl/",
        "Jakdojade / ZTM Gdańsk / SKM · 查询入口"
      ],
      [
        "https://ztm.gda.pl/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "gdansk"
  },
  {
    "id": "tip-gdansk-transit-tools",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "格但斯克 · 交通 App 与线路图",
    "description": "查询入口：Jakdojade / ZTM Gdańsk / SKM。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：ZTM / SKM 等运营。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://ztm.gda.pl/",
        "Jakdojade / ZTM Gdańsk / SKM · 查询入口"
      ],
      [
        "https://ztm.gda.pl/",
        "运营商线路 / 时刻入口"
      ],
      [
        "https://jakdojade.pl/",
        "Jakdojade · 第三方路线与部分票务，按城市支持范围使用"
      ]
    ],
    "city": "gdansk"
  },
  {
    "id": "fact-gdansk-daily-setting",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "格但斯克 · 河流、气候与日常预算",
    "description": "主城河岸常见的是莫特瓦瓦河（Motława），更大的城市港口与维斯瓦河、波罗的海相联系；老城河岸不是开阔海滩。",
    "note": "受海洋影响，风常比内陆明显，夏季也可能有凉雨；海边、港区和中心街巷准备不同的防风层。\n货币：波兰兹罗提 PLN（zł）。\n预算观察：夏季海岸住宿与主城餐饮可能上涨；海鲜产地、品种和计价方式具体看菜单，不由港口城市身份推断全部为本地捕捞。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "gdansk",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-city-wroclaw",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "弗罗茨瓦夫 · 到站与换乘",
    "description": "电车与公交为主要市内方式，URBANCARD 是票务入口之一；上车购票、验票方式及机场公交的适用票种按当期说明确认。",
    "note": "先核对到达站、城区方向和末班接驳，再看步行距离。奥得河（Odra）及支流形成河岛与多座桥梁；图姆岛的历史名称不意味着今天仍完全四面环水。",
    "sources": [
      [
        "https://www.mpk.wroc.pl/",
        "Jakdojade / MPK / URBANCARD · 查询入口"
      ],
      [
        "https://www.mpk.wroc.pl/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "wroclaw"
  },
  {
    "id": "tip-wroclaw-ticket-choice",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "弗罗茨瓦夫 · 选票与乘车",
    "description": "电车与公交为主要市内方式，URBANCARD 是票务入口之一；上车购票、验票方式及机场公交的适用票种按当期说明确认。",
    "note": "先看时间票、日票或较长期票的范围与生效方式，URBANCARD、银行卡购票和手机票的检查凭据可能不同。不要仅凭扣款短信推断所有票种都已有效；城际铁路与城市公交分别查询。",
    "sources": [
      [
        "https://www.mpk.wroc.pl/",
        "Jakdojade / MPK / URBANCARD · 查询入口"
      ],
      [
        "https://www.mpk.wroc.pl/",
        "运营商线路 / 时刻入口"
      ]
    ],
    "city": "wroclaw"
  },
  {
    "id": "tip-wroclaw-transit-tools",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "弗罗茨瓦夫 · 交通 App 与线路图",
    "description": "查询入口：Jakdojade / MPK / URBANCARD。官方线路和时刻用于核对方向、票区与改线，地图可辅助步行。",
    "note": "运营组织：城市公共交通 / MPK 等运营。网站入口不一定等于可下载 App；下载前核对发行方与适用城市。离线保存车站名、线路图和住址原文，临时服务调整按运营商公告。",
    "sources": [
      [
        "https://www.mpk.wroc.pl/",
        "Jakdojade / MPK / URBANCARD · 查询入口"
      ],
      [
        "https://www.mpk.wroc.pl/",
        "运营商线路 / 时刻入口"
      ],
      [
        "https://jakdojade.pl/",
        "Jakdojade · 第三方路线与部分票务，按城市支持范围使用"
      ]
    ],
    "city": "wroclaw"
  },
  {
    "id": "fact-wroclaw-daily-setting",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "弗罗茨瓦夫 · 河流、气候与日常预算",
    "description": "奥得河（Odra）及支流形成河岛与多座桥梁；图姆岛的历史名称不意味着今天仍完全四面环水。",
    "note": "内陆季节差异明显，河边风与雨会改变体感；冬季短日照、夏季高温和雷雨分别准备。\n货币：波兰兹罗提 PLN（zł）。\n预算观察：旧城广场和大型活动周边的餐饮住宿会有溢价；社区餐馆、奶食堂与市场可作比较，博物馆和场馆费用另计。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "城市官方旅游阅读入口"
      ]
    ],
    "city": "wroclaw",
    "subtitle": "城市地理 · 出发前快速了解"
  },
  {
    "id": "tip-pl-rail",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "tickets",
    "name": "波兰 · 城市票与火车票分开买",
    "description": "PKP Intercity 与各区域铁路 是认识铁路的重要入口；城市公交、区域列车和长途列车不是一套自动互通的票。",
    "note": "先用原文站名查询，再确认运营商、座席与换乘时间。月票、多日票或区域联票要核对适用范围与实名条件。跨境路线另查每段实际承运方，购票平台显示路线不等于所有车票已经一并买齐。",
    "sources": [
      [
        "https://www.intercity.pl/en/",
        "PKP Intercity 与各区域铁路 · 官方查询入口"
      ]
    ]
  },
  {
    "id": "tip-pl-money",
    "type": "tip",
    "country": "pl",
    "category": "brands",
    "subcategory": "payments",
    "name": "波兰 · 货币、刷卡与取现",
    "description": "使用波兰兹罗提 PLN（zł）。结账与取款时先辨认币种、手续费和汇率，欧盟成员身份不等于一定使用欧元。",
    "note": "银行卡受理、最低消费和现金需求按商户确认。终端出现本币或持卡币种选择时，比较动态货币转换（DCC）及银行费率；ATM 运营方收费与发卡行费用可能分别出现。留一笔小额现金，避免用历史汇率估算当日实际扣款。",
    "sources": [
      [
        "https://nbp.pl/en/",
        "波兰国家银行 · 货币资料"
      ]
    ]
  },
  {
    "id": "tip-pl-sunday",
    "type": "tip",
    "country": "pl",
    "category": "brands",
    "subcategory": "shopping-tips",
    "name": "波兰 · 周日采购先查营业时间",
    "description": "大型商店星期日营业存在限制或例外；旅游旺季、便利店和车站店的具体营业不能一概推断。",
    "note": "把饮水、早餐和日用品采购尽量提前安排，再查连锁官方门店页的当周时段。波兰有法定可营业的特定星期日及例外安排；Żabka 等加盟便利店是否开门，也要看具体店铺。 节假日和临时调整另外核对。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "国家旅游资料入口（具体营业另核）"
      ]
    ]
  },
  {
    "id": "tip-pl-pharmacy",
    "type": "tip",
    "country": "pl",
    "category": "brands",
    "subcategory": "pharmacy",
    "name": "波兰 · 药房与药妆店分清",
    "description": "寻找药房时认“apteka”；洗护日用品连锁与能够配药的药房，服务范围不同。",
    "note": "出行常用药保留原包装与处方资料；处方要求和可售品种由当地药师确认。值班药房以当地公告查询，紧急情况拨 112，非紧急健康咨询使用正规医疗或药师服务。",
    "sources": [
      [
        "https://www.nfz.gov.pl/",
        "波兰国家卫生基金 · 医疗服务入口"
      ]
    ]
  },
  {
    "id": "tip-pl-dining",
    "type": "tip",
    "country": "pl",
    "category": "food",
    "subcategory": "dining-tips",
    "name": "波兰 · 点餐、饮水与结账",
    "description": "先看菜单、计价单位和过敏原说明，结账时确认服务费、支付方式与币种。",
    "note": "woda niegazowana 是不含气水，gazowana 是含气水；pierogi 的馅料需要逐项确认。 服务费与自愿小费分别理解；鱼类、拼盘或按重量计价的菜，点单前确认份量与总价。饮食限制用清楚文字向店员确认。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "官方旅游与饮食阅读入口"
      ]
    ]
  },
  {
    "id": "tip-pl-entry-connectivity",
    "type": "tip",
    "country": "pl",
    "category": "facts",
    "subcategory": "daily",
    "name": "波兰 · 申根、通信与紧急准备",
    "description": "属于欧盟和申根区；按护照、旅行日期与整段行程核对入境及停留要求。紧急求助使用 112。",
    "note": "申根停留的计算涉及整段区域行程，住宿、保险与签证要求由官方领事信息确认。欧盟漫游规则也要看所用 SIM 与套餐，不能把中国或其他非欧盟号码自动视为免费漫游。保存住宿地址原文、证件备份与紧急联系人。",
    "sources": [
      [
        "https://www.gov.pl/web/diplomacy",
        "波兰外交部 · 领事资料入口"
      ]
    ]
  },
  {
    "id": "place-warsaw-chopin-airport",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "airport",
    "name": "华沙肖邦机场 WAW",
    "description": "华沙主要航空门户，靠近城市南侧。",
    "note": "到市内的铁路与公交适用票种需按线路核对；与莫德林机场 WMI 是两个不同地点。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.lotnisko-chopina.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.1657&mlon=20.9671#map=17/52.1657/20.9671",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Warsaw%20Chopin%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Warsaw Chopin Airport",
    "point": {
      "id": "place-warsaw-chopin-airport",
      "lat": 52.1657,
      "lon": 20.9671,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-warsaw-modlin-airport",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "airport",
    "name": "华沙莫德林机场 WMI",
    "description": "位于华沙以北较远处的另一座民航机场。",
    "note": "铁路站、机场接驳巴士与直达交通需组合核对，夜间航班留意末班；不要沿用 WAW 的到市内路线。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://en.modlinairport.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.4511&mlon=20.6518#map=17/52.4511/20.6518",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Warsaw%20Modlin%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Warsaw Modlin Airport",
    "point": {
      "id": "place-warsaw-modlin-airport",
      "lat": 52.4511,
      "lon": 20.6518,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-krakow-airport",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "airport",
    "name": "克拉科夫若望·保禄二世机场 KRK",
    "description": "位于 Balice 的克拉科夫主要民航机场。",
    "note": "机场铁路与机场公交的票制、终点和运行时间不同；按住宿位置与到达时刻比较。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.krakowairport.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0777&mlon=19.7848#map=17/50.0777/19.7848",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Krak%C3%B3w%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Kraków Airport",
    "point": {
      "id": "place-krakow-airport",
      "lat": 50.0777,
      "lon": 19.7848,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-gdansk-airport",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "airport",
    "name": "格但斯克莱赫·瓦文萨机场 GDN",
    "description": "服务格但斯克及三联城地区的机场，位于主城以西。",
    "note": "机场铁路、公交与跨市衔接分别看实际路线，车次不一定都直接到 Gdańsk Główny。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.airport.gdansk.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3776&mlon=18.4662#map=17/54.3776/18.4662",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Gda%C5%84sk%20Lech%20Wa%C5%82%C4%99sa%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Gdańsk Lech Wałęsa Airport",
    "point": {
      "id": "place-gdansk-airport",
      "lat": 54.3776,
      "lon": 18.4662,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-wroclaw-airport",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "airport",
    "name": "弗罗茨瓦夫哥白尼机场 WRO",
    "description": "位于市中心以西的民航机场。",
    "note": "先核对机场公交实际停靠与末班，再比较其他接驳；机场名称纪念哥白尼，不表示他出生在此。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://airport.wroclaw.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1027&mlon=16.8858#map=17/51.1027/16.8858",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Wroc%C5%82aw%20Airport",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Wrocław Airport",
    "point": {
      "id": "place-wroclaw-airport",
      "lat": 51.1027,
      "lon": 16.8858,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "place-warsaw-station",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "station",
    "name": "华沙中央车站",
    "description": "城市铁路出行的重要站点；原文站名用于核对车票、站台和换乘。",
    "note": "城内可能还有其他站点，按具体车次核对实际发到站。长途车厢、座位和进站时间与城市电车票的规则不同。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.intercity.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2288&mlon=21.0034#map=17/52.2288/21.0034",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Warszawa%20Centralna",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Warszawa Centralna",
    "point": {
      "id": "place-warsaw-station",
      "lat": 52.2288,
      "lon": 21.0034,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-krakow-station",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "station",
    "name": "克拉科夫火车总站",
    "description": "城市铁路出行的重要站点；原文站名用于核对车票、站台和换乘。",
    "note": "城内可能还有其他站点，按具体车次核对实际发到站。长途车厢、座位和进站时间与城市电车票的规则不同。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.intercity.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0684&mlon=19.9475#map=17/50.0684/19.9475",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Krak%C3%B3w%20G%C5%82%C3%B3wny",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Kraków Główny",
    "point": {
      "id": "place-krakow-station",
      "lat": 50.0684,
      "lon": 19.9475,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-gdansk-station",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "station",
    "name": "格但斯克火车总站",
    "description": "城市铁路出行的重要站点；原文站名用于核对车票、站台和换乘。",
    "note": "城内可能还有其他站点，按具体车次核对实际发到站。长途车厢、座位和进站时间与城市电车票的规则不同。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.intercity.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3568&mlon=18.6444#map=17/54.3568/18.6444",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Gda%C5%84sk%20G%C5%82%C3%B3wny",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Gdańsk Główny",
    "point": {
      "id": "place-gdansk-station",
      "lat": 54.3568,
      "lon": 18.6444,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "place-wroclaw-station",
    "type": "place",
    "country": "pl",
    "category": "transport",
    "subcategory": "station",
    "name": "弗罗茨瓦夫火车总站",
    "description": "城市铁路出行的重要站点；原文站名用于核对车票、站台和换乘。",
    "note": "城内可能还有其他站点，按具体车次核对实际发到站。长途车厢、座位和进站时间与城市电车票的规则不同。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.intercity.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.0988&mlon=17.0369#map=17/51.0988/17.0369",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Wroc%C5%82aw%20G%C5%82%C3%B3wny",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Wrocław Główny",
    "point": {
      "id": "place-wroclaw-station",
      "lat": 51.0988,
      "lon": 17.0369,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "tip-warsaw-shared-mobility",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "Veturilo · 华沙共享单车",
    "description": "用运营商官方入口确认注册、可用车站与骑行规则；城市公交票通常不自动包括共享骑行。",
    "note": "使用前核对当前运营季、费用、车站与还车方式，关注车辆类型和允许停车区域。第三方地图上的车站不代表实时有车或有空位，骑行时沿合法道路通行。",
    "sources": [
      [
        "https://veturilo.waw.pl/en/",
        "共享单车运营商入口"
      ]
    ],
    "city": "warsaw",
    "local": "Veturilo"
  },
  {
    "id": "tip-gdansk-shared-mobility",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "MEVO · 三联城共享单车",
    "description": "用运营商官方入口确认注册、可用车站与骑行规则；城市公交票通常不自动包括共享骑行。",
    "note": "使用前核对当前运营季、费用、车站与还车方式，关注车辆类型和允许停车区域。第三方地图上的车站不代表实时有车或有空位，骑行时沿合法道路通行。",
    "sources": [
      [
        "https://rowermevo.pl/",
        "共享单车运营商入口"
      ]
    ],
    "city": "gdansk",
    "local": "MEVO"
  },
  {
    "id": "tip-wroclaw-shared-mobility",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "弗罗茨瓦夫城市自行车",
    "description": "用运营商官方入口确认注册、可用车站与骑行规则；城市公交票通常不自动包括共享骑行。",
    "note": "使用前核对当前运营季、费用、车站与还车方式，关注车辆类型和允许停车区域。第三方地图上的车站不代表实时有车或有空位，骑行时沿合法道路通行。",
    "sources": [
      [
        "https://wroclawskirower.pl/",
        "共享单车运营商入口"
      ]
    ],
    "city": "wroclaw",
    "local": "Wrocławski Rower Miejski"
  },
  {
    "id": "tip-warsaw-metro",
    "type": "tip",
    "country": "pl",
    "category": "transport",
    "subcategory": "metro",
    "name": "华沙地铁 · M1 与 M2",
    "description": "华沙地铁是市内公共交通的重要组成，可与电车、公交和部分铁路按票种换乘。",
    "note": "先看站名、方向和换乘，再核对时间票、票区及进闸验证。路线延伸或施工以 Metro Warszawskie 和 WTP 的当前公告为准，不用历史线路图推断当日运营。",
    "sources": [
      [
        "https://metro.waw.pl/en/",
        "华沙地铁 · 官方入口"
      ],
      [
        "https://www.wtp.waw.pl/en/",
        "WTP · 票务与线路"
      ]
    ],
    "city": "warsaw"
  },
  {
    "id": "place-warsaw-old-town",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "landmark",
    "name": "华沙老城市场广场",
    "description": "认识重建老城与城市公共空间的入口，可沿街巷连接王宫与城墙。",
    "note": "今天看到的老城大量建筑经历二战后的重建；正式世界遗产范围不等于整座现代华沙。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://warsawtour.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2496&mlon=21.0123#map=17/52.2496/21.0123",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Rynek%20Starego%20Miasta",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Rynek Starego Miasta",
    "point": {
      "id": "place-warsaw-old-town",
      "lat": 52.2496,
      "lon": 21.0123,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-warsaw-royal-castle",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "华沙皇家城堡",
    "description": "城堡建筑、收藏与重建历史共同呈现国家和城市记忆。",
    "note": "建筑、展览、庭院和特别展票务分别确认；现存结构、历史原物与修复部分通过展陈区分。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.zamek-krolewski.pl/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2479&mlon=21.0142#map=17/52.2479/21.0142",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Zamek%20Kr%C3%B3lewski%20w%20Warszawie",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Zamek Królewski w Warszawie",
    "point": {
      "id": "place-warsaw-royal-castle",
      "lat": 52.2479,
      "lon": 21.0142,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-warsaw-polin",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "POLIN 波兰犹太人历史博物馆",
    "description": "从长期历史与社区生活认识波兰犹太人的经历。",
    "note": "展陈不只讲二战，应给早期社会、宗教和日常文化留出阅读时间；参观安排按馆方确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://polin.pl/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2496&mlon=20.9922#map=17/52.2496/20.9922",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=POLIN%20Museum",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "POLIN Museum",
    "point": {
      "id": "place-warsaw-polin",
      "lat": 52.2496,
      "lon": 20.9922,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-warsaw-uprising-museum",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "华沙起义博物馆",
    "description": "以 1944 年华沙起义及相关城市经历为主要主题。",
    "note": "1944 年华沙起义与 1943 年华沙隔都起义是不同事件，阅读前先分清年代、参与者与地点。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.1944.pl/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.232&mlon=20.9809#map=17/52.232/20.9809",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Muzeum%20Powstania%20Warszawskiego",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Muzeum Powstania Warszawskiego",
    "point": {
      "id": "place-warsaw-uprising-museum",
      "lat": 52.232,
      "lon": 20.9809,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-warsaw-lazienki",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "park",
    "name": "瓦津基皇家公园",
    "description": "园林、建筑与肖邦纪念联系在一起的城市文化绿地。",
    "note": "公园散步、宫殿展览和季节性音乐活动采用不同安排；纪念像不是作曲家本人生活过的房间。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.lazienki-krolewskie.pl/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2153&mlon=21.035#map=17/52.2153/21.035",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%81azienki%20Kr%C3%B3lewskie",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Łazienki Królewskie",
    "point": {
      "id": "place-warsaw-lazienki",
      "lat": 52.2153,
      "lon": 21.035,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-warsaw-chopin-museum",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "弗里德里克·肖邦博物馆",
    "description": "通过作品、文献与展示认识肖邦生平及其华沙联系。",
    "note": "馆藏与互动展示的开放按官方安排，不把作曲家所有生活地点汇总成这一个博物馆坐标。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://muzeum.nifc.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2366&mlon=21.0225#map=17/52.2366/21.0225",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Muzeum%20Fryderyka%20Chopina",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Muzeum Fryderyka Chopina",
    "point": {
      "id": "place-warsaw-chopin-museum",
      "lat": 52.2366,
      "lon": 21.0225,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-warsaw-university",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "university",
    "name": "华沙大学 · 主校园",
    "description": "沿皇家路线的大学空间，连接城市建筑与教育生活。",
    "note": "校园、图书馆和各院系地址不同；教学、展览与游客进入的权限分别确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://en.uw.edu.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2401&mlon=21.0186#map=17/52.2401/21.0186",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Uniwersytet%20Warszawski",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Uniwersytet Warszawski",
    "point": {
      "id": "place-warsaw-university",
      "lat": 52.2401,
      "lon": 21.0186,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "place-warsaw-grand-theatre",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "theatre",
    "name": "华沙大剧院与国家歌剧院",
    "description": "城市重要舞台场所，可从歌剧、芭蕾与建筑继续探索。",
    "note": "节目、场次、字幕与座位按当季安排；建筑参观与演出票不是同一种项目。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://teatrwielki.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2443&mlon=21.0104#map=17/52.2443/21.0104",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Teatr%20Wielki%20%E2%80%93%20Opera%20Narodowa",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Teatr Wielki – Opera Narodowa",
    "point": {
      "id": "place-warsaw-grand-theatre",
      "lat": 52.2443,
      "lon": 21.0104,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "place-krakow-main-square",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "landmark",
    "name": "克拉科夫中央集市广场",
    "description": "历史中心的广场将商贸、宗教建筑和公共生活连接起来。",
    "note": "广场、纺织会馆、塔楼与周边博物馆各有具体参观入口，不能把整个广场理解为单一售票景点。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://krakow.travel/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0617&mlon=19.9373#map=17/50.0617/19.9373",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Rynek%20G%C5%82%C3%B3wny",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Rynek Główny",
    "point": {
      "id": "place-krakow-main-square",
      "lat": 50.0617,
      "lon": 19.9373,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-krakow-st-mary",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "church",
    "name": "克拉科夫圣玛利亚圣殿",
    "description": "位于中央广场旁，可从塔楼、祭坛和城市仪式认识地方文化。",
    "note": "礼拜与参观时段不同，登塔、祭坛观看和音乐仪式的规则各自核对。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://mariacki.com/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0617&mlon=19.9394#map=17/50.0617/19.9394",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bazylika%20Mariacka",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Bazylika Mariacka",
    "point": {
      "id": "place-krakow-st-mary",
      "lat": 50.0617,
      "lon": 19.9394,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-krakow-wawel",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "瓦维尔皇家城堡",
    "description": "城堡与维斯瓦河、山丘和王室历史相联系。",
    "note": "瓦维尔山、城堡不同展区与大教堂分别确认票务；本卡不把各个入口合并成一个万能参观通行证。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://wawel.krakow.pl/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.054&mlon=19.9354#map=17/50.054/19.9354",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Zamek%20Kr%C3%B3lewski%20na%20Wawelu",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Zamek Królewski na Wawelu",
    "point": {
      "id": "place-krakow-wawel",
      "lat": 50.054,
      "lon": 19.9354,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-krakow-collegium-maius",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "university",
    "name": "雅盖隆大学 · 大学院博物馆",
    "description": "大学历史建筑与博物馆提供认识克拉科夫学术传统的入口。",
    "note": "哥白尼曾在克拉科夫学习，不等于今天建筑中的每个房间都由他使用；按校史与馆方资料辨认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://maius.uj.edu.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0616&mlon=19.9332#map=17/50.0616/19.9332",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Collegium%20Maius",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Collegium Maius",
    "point": {
      "id": "place-krakow-collegium-maius",
      "lat": 50.0616,
      "lon": 19.9332,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "place-krakow-mocak",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "MOCAK 当代艺术博物馆",
    "description": "与老城古典形象不同的当代艺术阅读入口。",
    "note": "临展内容与票务按馆方确认；相邻的历史博物馆和建筑属于不同机构与展览。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://en.mocak.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0473&mlon=19.9618#map=17/50.0473/19.9618",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=MOCAK",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "MOCAK",
    "point": {
      "id": "place-krakow-mocak",
      "lat": 50.0473,
      "lon": 19.9618,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-krakow-czartoryski",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "恰尔托雷斯基博物馆",
    "description": "艺术收藏与家族、公共机构的历史相连，达·芬奇作品是重要线索之一。",
    "note": "具体作品可见性和临展调动按官方确认；不能把馆藏目录等同于当日所有原作均在展厅。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://mnk.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0652&mlon=19.9389#map=17/50.0652/19.9389",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Muzeum%20Ksi%C4%85%C5%BC%C4%85t%20Czartoryskich",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Muzeum Książąt Czartoryskich",
    "point": {
      "id": "place-krakow-czartoryski",
      "lat": 50.0652,
      "lon": 19.9389,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-krakow-planty",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "park",
    "name": "普兰蒂环城公园",
    "description": "环绕历史中心的绿地带，有助于理解旧城边缘与后来的公共空间。",
    "note": "公园由多个区段组成，本卡只作东侧步行参考；历史城墙与后来的绿地建设分别阅读。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://krakow.travel/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.06&mlon=19.943#map=17/50.06/19.943",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Planty",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Planty",
    "point": {
      "id": "place-krakow-planty",
      "lat": 50.06,
      "lon": 19.943,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-gdansk-long-market",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "landmark",
    "name": "长市场与长街",
    "description": "格但斯克主城的商贸与公共建筑轴线。",
    "note": "建筑经历战争损毁和战后修复，今天的街景既有历史依据也有重建层次。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3485&mlon=18.653#map=17/54.3485/18.653",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=D%C5%82ugi%20Targ%20/%20D%C5%82uga",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Długi Targ / Długa",
    "point": {
      "id": "place-gdansk-long-market",
      "lat": 54.3485,
      "lon": 18.653,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-gdansk-st-mary",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "church",
    "name": "格但斯克圣玛利亚圣殿",
    "description": "砖石教堂与主城街道共同构成城市轮廓。",
    "note": "内部、登塔与礼拜分别确认；高处步行强度和天气会影响登塔体验。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3498&mlon=18.6534#map=17/54.3498/18.6534",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bazylika%20Mariacka%20w%20Gda%C5%84sku",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Bazylika Mariacka w Gdańsku",
    "point": {
      "id": "place-gdansk-st-mary",
      "lat": 54.3498,
      "lon": 18.6534,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-gdansk-solidarity-centre",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "欧洲团结中心",
    "description": "通过造船厂、工人运动与社会变迁认识团结运动。",
    "note": "展陈、历史厂区和今天仍在使用的工业空间不是同一范围；劳动与政治历史应结合时间线阅读。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://ecs.gda.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3611&mlon=18.6496#map=17/54.3611/18.6496",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Europejskie%20Centrum%20Solidarno%C5%9Bci",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Europejskie Centrum Solidarności",
    "point": {
      "id": "place-gdansk-solidarity-centre",
      "lat": 54.3611,
      "lon": 18.6496,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-gdansk-wwii-museum",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "格但斯克第二次世界大战博物馆",
    "description": "从战争与平民经历了解二十世纪的重要断裂。",
    "note": "预留阅读时间，展陈叙事与原始材料分别判断；展陈涉及战争和民众遭遇，可按个人与同行者情况安排阅读节奏。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://muzeum1939.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3562&mlon=18.659#map=17/54.3562/18.659",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Muzeum%20II%20Wojny%20%C5%9Awiatowej",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Muzeum II Wojny Światowej",
    "point": {
      "id": "place-gdansk-wwii-museum",
      "lat": 54.3562,
      "lon": 18.659,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-gdansk-crane",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "格但斯克起重机 · 海事博物馆线索",
    "description": "莫特瓦瓦河岸的港口建筑，连接贸易、装卸与城市防御。",
    "note": "国家海事博物馆有多个馆舍，本卡只标起重机这一处；具体开放与修缮安排单独查询。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://nmm.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3503&mlon=18.6577#map=17/54.3503/18.6577",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%BBuraw",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Żuraw",
    "point": {
      "id": "place-gdansk-crane",
      "lat": 54.3503,
      "lon": 18.6577,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-gdansk-shakespeare-theatre",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "theatre",
    "name": "格但斯克莎士比亚剧院",
    "description": "当代剧院与城市历史中的表演交流产生联系。",
    "note": "表演、建筑参观与节庆活动分别查询；历史渊源不意味着莎士比亚本人曾在这里演出。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://teatrszekspirowski.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3474&mlon=18.6485#map=17/54.3474/18.6485",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Gda%C5%84ski%20Teatr%20Szekspirowski",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Gdański Teatr Szekspirowski",
    "point": {
      "id": "place-gdansk-shakespeare-theatre",
      "lat": 54.3474,
      "lon": 18.6485,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "place-gdansk-oliwa-park",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "park",
    "name": "奥利瓦公园",
    "description": "主城以外的绿地与园林空间，可配合奥利瓦一带安排步行。",
    "note": "距离主城有一段城市交通行程；公园、教堂与具体室内设施分别看入口和开放。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.4107&mlon=18.56#map=17/54.4107/18.56",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Park%20Oliwski",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Park Oliwski",
    "point": {
      "id": "place-gdansk-oliwa-park",
      "lat": 54.4107,
      "lon": 18.56,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-wroclaw-rynek",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "landmark",
    "name": "弗罗茨瓦夫市场广场",
    "description": "市政厅、街道与广场共同呈现老城的公共生活。",
    "note": "今天建筑中有战争修复与后期使用变化；小矮人是散布城市的多个作品，本卡不把它们合并成一个 POI。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.109&mlon=17.0325#map=17/51.109/17.0325",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Rynek%20we%20Wroc%C5%82awiu",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Rynek we Wrocławiu",
    "point": {
      "id": "place-wroclaw-rynek",
      "lat": 51.109,
      "lon": 17.0325,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "place-wroclaw-cathedral",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "church",
    "name": "弗罗茨瓦夫主教座堂",
    "description": "图姆岛历史区域的重要宗教建筑。",
    "note": "区域地理和建筑经历过变化，现存外观还包含战后修复；礼拜、塔楼与参观时段分开确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.114&mlon=17.0466#map=17/51.114/17.0466",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Archikatedra%20%C5%9Bw.%20Jana%20Chrzciciela",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Archikatedra św. Jana Chrzciciela",
    "point": {
      "id": "place-wroclaw-cathedral",
      "lat": 51.114,
      "lon": 17.0466,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "church"
    }
  },
  {
    "id": "place-wroclaw-national-museum",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "museum",
    "name": "弗罗茨瓦夫国家博物馆",
    "description": "从西里西亚及相关收藏认识艺术、宗教与区域历史。",
    "note": "不同分馆和临展不共用一个地理位置；本卡仅标主馆参考点。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://mnwr.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1104&mlon=17.0468#map=17/51.1104/17.0468",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Muzeum%20Narodowe%20we%20Wroc%C5%82awiu",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Muzeum Narodowe we Wrocławiu",
    "point": {
      "id": "place-wroclaw-national-museum",
      "lat": 51.1104,
      "lon": 17.0468,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "place-wroclaw-university",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "university",
    "name": "弗罗茨瓦夫大学 · 主楼",
    "description": "河边大学建筑与城市多语言、多时代历史相联系。",
    "note": "主楼、大学博物馆与其他学院的进入规则不同，历史名称也要按具体年代区分。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://uwr.edu.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1141&mlon=17.0344#map=17/51.1141/17.0344",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Uniwersytet%20Wroc%C5%82awski",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Uniwersytet Wrocławski",
    "point": {
      "id": "place-wroclaw-university",
      "lat": 51.1141,
      "lon": 17.0344,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "place-wroclaw-opera",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "theatre",
    "name": "弗罗茨瓦夫歌剧院",
    "description": "市中心的表演艺术入口，可沿歌剧和音乐节目继续认识城市。",
    "note": "节目、字幕、票务与建筑参观以当季说明为准。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://www.opera.wroclaw.pl/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1046&mlon=17.0311#map=17/51.1046/17.0311",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Opera%20Wroc%C5%82awska",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Opera Wrocławska",
    "point": {
      "id": "place-wroclaw-opera",
      "lat": 51.1046,
      "lon": 17.0311,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "place-wroclaw-szczytnicki",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "park",
    "name": "什奇特尼茨基公园",
    "description": "靠近百年厅的大片城市绿地，适合把建筑与户外空间一起理解。",
    "note": "公园区、日式庭园和其他设施的票务与开放不同；坐标仅为园区参考。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1146&mlon=17.082#map=17/51.1146/17.082",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Park%20Szczytnicki",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Park Szczytnicki",
    "point": {
      "id": "place-wroclaw-szczytnicki",
      "lat": 51.1146,
      "lon": 17.082,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "place-warsaw-koszyki",
    "type": "place",
    "country": "pl",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "Hala Koszyki 市集与餐饮空间",
    "description": "历史市场建筑内外的餐饮与城市消费空间，可和传统生鲜市场作比较。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://warsawtour.pl/en/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=52.2222&mlon=21.0102#map=17/52.2222/21.0102",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Hala%20Koszyki",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "warsaw",
    "local": "Hala Koszyki",
    "point": {
      "id": "place-warsaw-koszyki",
      "lat": 52.2222,
      "lon": 21.0102,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-krakow-kleparz",
    "type": "place",
    "country": "pl",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "老 Kleparz 市场",
    "description": "从食材摊位与小型商家认识城市采购，和纪念品摊、旅游餐馆分别比较。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://krakow.travel/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=50.0665&mlon=19.9395#map=17/50.0665/19.9395",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Stary%20Kleparz",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "krakow",
    "local": "Stary Kleparz",
    "point": {
      "id": "place-krakow-kleparz",
      "lat": 50.0665,
      "lon": 19.9395,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-gdansk-mariacka",
    "type": "place",
    "country": "pl",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "玛利亚街 · 琥珀与工艺",
    "description": "历史街道上的工艺和琥珀商店提供地方购物线索，原料与鉴定应看具体商品。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=54.3491&mlon=18.6549#map=17/54.3491/18.6549",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ulica%20Mariacka",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "gdansk",
    "local": "Ulica Mariacka",
    "point": {
      "id": "place-gdansk-mariacka",
      "lat": 54.3491,
      "lon": 18.6549,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "place-wroclaw-hala-targowa",
    "type": "place",
    "country": "pl",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "弗罗茨瓦夫市场大厅",
    "description": "市场建筑、食材和日常交易，把购物带回城市生活。",
    "note": "市场、餐馆与店铺可能各自营业，节假日、摊位供应和商品来源按现场与商家说明确认。\n坐标用于辨认位置，非精确入口；开放、预约、施工与具体服务按官方最新说明确认。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "场馆 / 旅游机构阅读入口"
      ],
      [
        "https://www.openstreetmap.org/?mlat=51.1132&mlon=17.0407#map=17/51.1132/17.0407",
        "OpenStreetMap 参考坐标"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Hala%20Targowa",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "city": "wroclaw",
    "local": "Hala Targowa",
    "point": {
      "id": "place-wroclaw-hala-targowa",
      "lat": 51.1132,
      "lon": 17.0407,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "heritage-warsaw-centre",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "华沙历史中心",
    "description": "世界遗产价值与二战后对历史中心的大规模重建密切相关。",
    "note": "范围是正式列名的历史中心，不能将整座华沙或所有新建历史风格街区归入。沿关联广场、城堡与博物馆继续读重建史。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/30/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "local": "Historic Centre of Warsaw",
    "subtitle": "UNESCO 世界文化遗产",
    "heritage": {
      "organization": "UNESCO",
      "listId": "30"
    }
  },
  {
    "id": "heritage-krakow-centre",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "克拉科夫历史中心",
    "description": "历史中心、瓦维尔及卡齐米日等部分共同构成对城市长时段历史的理解。",
    "note": "核心区和缓冲区以 UNESCO 正式图件为准；没有单一坐标可以代表整片遗产，具体建筑由关联地点卡分别定位。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/29/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Historic Centre of Kraków",
    "subtitle": "UNESCO 世界文化遗产",
    "heritage": {
      "organization": "UNESCO",
      "listId": "29"
    }
  },
  {
    "id": "heritage-wroclaw-centennial",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "弗罗茨瓦夫百年厅",
    "description": "二十世纪初的大型钢筋混凝土建筑，连接工程、公共活动与现代建筑史。",
    "note": "建筑由马克斯·贝格设计，于 1913 年启用；名称关联的是当年的历史纪念，并不是“已有一百年”这一泛称。入场、展览和活动按官方安排。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/1165/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "wroclaw"
    ],
    "local": "Centennial Hall in Wrocław",
    "subtitle": "UNESCO 世界文化遗产",
    "point": {
      "id": "heritage-wroclaw-centennial",
      "lat": 51.1068,
      "lon": 17.0774,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "world-heritage"
    },
    "heritage": {
      "organization": "UNESCO",
      "listId": "1165"
    }
  },
  {
    "id": "heritage-wieliczka-bochnia",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "维利奇卡和博赫尼亚皇家盐矿",
    "description": "不同盐矿与相关设施组成的系列遗产，让地下工程、盐业和文化展示相互联系。",
    "note": "位于克拉科夫之外的不同城镇。图钉只选维利奇卡区域作为单一参考，不代表博赫尼亚或全部遗产范围；不同路线的入口、预约和参观条件分别确认。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/32/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Wieliczka and Bochnia Royal Salt Mines",
    "subtitle": "UNESCO 世界文化遗产",
    "point": {
      "id": "heritage-wieliczka-bochnia",
      "lat": 49.9833,
      "lon": 20.055,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "world-heritage"
    },
    "heritage": {
      "organization": "UNESCO",
      "listId": "32"
    }
  },
  {
    "id": "heritage-malbork",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "马尔堡的条顿骑士团城堡",
    "description": "砖砌城堡群与军事、宗教及区域政治历史相联系。",
    "note": "地点实际在 Malbork，并非格但斯克市内。图钉只作城堡区域参考；城堡群、重建部分、展览和铁路行程各自确认。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/847/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "local": "Castle of the Teutonic Order in Malbork",
    "subtitle": "UNESCO 世界文化遗产",
    "point": {
      "id": "heritage-malbork",
      "lat": 54.0399,
      "lon": 19.0284,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "world-heritage"
    },
    "heritage": {
      "organization": "UNESCO",
      "listId": "847"
    }
  },
  {
    "id": "heritage-auschwitz-birkenau",
    "type": "place",
    "country": "pl",
    "category": "places",
    "subcategory": "world-heritage",
    "name": "奥斯维辛—比克瑙：德国纳粹集中营与灭绝营（1940—1945年）",
    "description": "纪念与保存纳粹迫害和大屠杀历史的重要场所，应结合证据、受害者经历和机构说明阅读。",
    "note": "遗址在 Oświęcim 一带，和克拉科夫是不同城市；城市关联表示常见行程出发地。图钉仅选奥斯维辛一号营区域，不能代表另一营区或全部遗址。按官方预约、导览与现场纪念规则参观。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/31/",
        "UNESCO 世界遗产中心 · 正式条目与范围"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Auschwitz Birkenau German Nazi Concentration and Extermination Camp (1940–1945)",
    "subtitle": "UNESCO 世界文化遗产",
    "point": {
      "id": "heritage-auschwitz-birkenau",
      "lat": 50.027,
      "lon": 19.2036,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "world-heritage"
    },
    "heritage": {
      "organization": "UNESCO",
      "listId": "31"
    }
  },
  {
    "id": "food-pl-pierogi",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Pierogi · 波兰饺子",
    "description": "可煮、煎或组合处理，常见肉、卷心菜蘑菇、土豆凝乳和水果等馅料。",
    "note": "同一名称下有咸味和甜味。Pierogi ruskie 常见土豆与凝乳馅，其中 ruskie 与鲁塞尼亚历史称呼相连，不宜直接理解为“俄罗斯人发明的饺子”；酸奶油、洋葱或其他配料也按店家确认。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Pierogi",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Pierogi"
  },
  {
    "id": "food-pl-zurek",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Żurek · 黑麦发酵酸汤",
    "description": "以发酵黑麦底味著称，常见香肠、鸡蛋等搭配，酸香与甜菜汤不同。",
    "note": "发酵底汤、肉类和餐馆版本会改变味道，面包碗并非每一份都有。Żurek 与 barszcz biały 在名称和配方上存在区域差异，先看菜单与配料，不能只凭白色汤面认定相同。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%BBurek",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Żurek"
  },
  {
    "id": "food-pl-bigos",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Bigos · 酸菜肉炖锅",
    "description": "卷心菜、酸菜、肉类及香料长时间炖煮形成的家常菜，配方随家庭和店家变化。",
    "note": "不同版本的酸度、肉类、蘑菇和其他配料各有差别，不宜给它假定唯一标准配方。与单一肉排相比，它更适合从炖煮、发酵蔬菜和复合香味理解。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bigos",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Bigos"
  },
  {
    "id": "food-pl-barszcz",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Barszcz czerwony · 红甜菜汤",
    "description": "以甜菜为重要线索，可清汤饮用，也可能搭配小面点或其他食物。",
    "note": "红色外观不说明所有版本相同：肉汤、蔬菜汤、酸味来源与附加配料分别看。它与 Żurek 的黑麦发酵底味不同；具体餐馆的素食、乳制品和过敏原按菜单确认。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Barszcz%20czerwony",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Barszcz czerwony"
  },
  {
    "id": "food-pl-golabki",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Gołąbki · 卷心菜包馅",
    "description": "卷心菜叶包入米饭、肉类或其他馅料，再以不同方式烹制。",
    "note": "番茄酱与其他浇汁、肉馅或素馅会形成不同版本。名称字面与小鸽子有关，菜本身通常不是鸽肉；点菜时看馅料和附加配料。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Go%C5%82%C4%85bki",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Gołąbki"
  },
  {
    "id": "food-pl-paczek",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "desserts",
    "name": "Pączki · 波兰夹馅甜甜圈",
    "description": "发酵面团油炸后加馅，果酱或其他夹心与糖霜形成常见组合。",
    "note": "与环形甜甜圈相比，常见 pączek 是整颗包馅而非中空圆环。馅料、糖霜和表面点缀有很多版本，油腻感和甜度也不同；油脂与过敏原按具体产品确认。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=P%C4%85czki",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Pączki"
  },
  {
    "id": "food-pl-sernik",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "desserts",
    "name": "Sernik · 波兰奶酪蛋糕",
    "description": "凝乳等奶酪原料带来与常见奶油奶酪蛋糕不同的口感线索。",
    "note": "烘烤与冷制、是否有饼底、葡萄干或其他配料会改变体验。不要由名称推断每一份都使用相同奶酪或没有面粉，菜单与标签是确认具体配方的入口。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Sernik",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Sernik"
  },
  {
    "id": "food-pl-wuzetka",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "desserts",
    "name": "Wuzetka · 华沙可可奶油蛋糕",
    "description": "深色可可蛋糕层与奶油构成华沙具有城市记忆的甜点。",
    "note": "名字常与华沙的 W-Z 城市交通线等解释联系，但起源说法并不只有一种，不能把一种传说写成唯一确定结论。它与布莱德蛋奶酥皮糕点不同，比较时看蛋糕体、奶油与夹层。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Wuzetka%20/%20W-Z",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "local": "Wuzetka / W-Z"
  },
  {
    "id": "food-pl-obwarzanek",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "bread",
    "name": "克拉科夫 Obwarzanek 环形面包",
    "description": "具有扭结环形外观，表面可有盐、芝麻或罂粟籽等，制作中先经水煮再烘烤。",
    "note": "与普通甜甜圈和百吉饼不能只凭圆环外形认作同一产品。克拉科夫名称与地方传统和保护规范有关；街头摊位、包装和具体配料分别看。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Obwarzanek%20krakowski",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Obwarzanek krakowski"
  },
  {
    "id": "food-pl-oscypek",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dairy",
    "name": "Oscypek · 波德哈莱熏奶酪",
    "description": "与塔特拉山地和波德哈莱地区的羊奶制酪传统有关，常见烟熏香味与刻纹外形。",
    "note": "传统受保护产品与普通旅游区熏奶酪需分清，不能只凭纹样判定。克拉科夫是购买和阅读入口之一，实际传统产区在城外；加热后配果酱是一种供应方式，不代表所有吃法。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Oscypek",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Oscypek"
  },
  {
    "id": "food-pl-sledz",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "Śledź · 鲱鱼小食",
    "description": "鱼类腌渍、油浸或配酱的小食，在波罗的海沿岸与波兰其他地区都能看到。",
    "note": "不同腌制和调味可产生咸、酸、甜或奶油感，不同鱼种和捕捞海域也要看产品。格但斯克的港口关联不保证盘中鲱鱼全部来自当天当地渔获。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%C5%9Aled%C5%BA",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "gdansk"
    ],
    "local": "Śledź"
  },
  {
    "id": "food-pl-amber",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "gifts",
    "name": "波罗的海琥珀工艺",
    "description": "格但斯克及周边常见的地方工艺与伴手礼线索，可比较首饰、原料与设计。",
    "note": "琥珀原料、压制或复合材料和仿制品需要具体说明，不靠颜色或旅游故事鉴定。历史贸易、加工地与一件商品的真实来源分别看，购买时保存商家与材料信息。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Bursztyn",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "gdansk"
    ],
    "local": "Bursztyn"
  },
  {
    "id": "food-pl-kluski",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "dishes",
    "name": "西里西亚土豆团",
    "description": "土豆团与西里西亚饮食传统相联系，常作为主菜配食的一部分。",
    "note": "西里西亚历史区域与今天行政范围不同，不能把一种菜完全归给弗罗茨瓦夫一城。比较时看土豆、淀粉、浇汁与配肉；今天餐桌也受到战后迁移和不同家庭传统影响。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Kluski%20%C5%9Bl%C4%85skie",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "wroclaw"
    ],
    "local": "Kluski śląskie"
  },
  {
    "id": "food-pl-wedel",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "chocolate",
    "name": "E.Wedel 巧克力",
    "description": "波兰广为人知的巧克力品牌，巧克力排、夹心和其他产品可以分别比较。",
    "note": "品牌与华沙工业及消费文化有联系，今天的企业所有权、工厂和历史起源是不同问题。可可比例、夹心与坚果等依具体包装确认，门店库存以实际供应为准。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://wedel.pl/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=E.Wedel",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "E.Wedel",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-pl-ptasie-mleczko",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "snacks",
    "name": "Ptasie Mleczko · 巧克力裹泡沫糖",
    "description": "轻盈内馅与外层巧克力形成口感对比，是常见盒装甜食线索。",
    "note": "它与固体太妃奶糖或普通夹心巧克力不同，味型和配方看具体品牌。名称、商标与产品历史各有对应资料，不能把所有看起来相似的糖都视为同一品牌。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://wedel.pl/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Ptasie%20Mleczko",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Ptasie Mleczko",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-pl-prince-polo",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "snacks",
    "name": "Prince Polo 威化",
    "description": "层叠威化与巧克力外层构成日常零食，适合与普通巧克力排比较。",
    "note": "波兰起源的产品如今属于跨国品牌网络，零售地不等于总部或全部生产地。不同口味、规格与配料以包装为准，脆度、甜度与坚果版本可分别比较。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.princepolo.pl/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Prince%20Polo",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Prince Polo",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-pl-krowki",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "snacks",
    "name": "Krówki · 波兰奶糖",
    "description": "以奶香和焦糖风味为线索的糖果，不同产品可能呈较软或外脆内软的口感。",
    "note": "它是产品类型，不是只有一个厂家使用的品牌。新鲜度、配料和工艺会影响质地；礼品包装与普通散装的价格、产地和保存期限分别比较。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Kr%C3%B3wki",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Krówki",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "food-pl-tymbark",
    "type": "food",
    "country": "pl",
    "category": "food",
    "subcategory": "snacks",
    "name": "Tymbark 果汁与饮料",
    "description": "波兰常见的饮料品牌，可从水果组合和包装规格认识日常购买选择。",
    "note": "果汁、果蜜和果味饮料不是同一概念，瓶盖趣味文案也不能代替配料表。先看果汁含量、糖和容量，再比较单位价格与具体口味。 地图仅提供附近超市探索，不保证具体商品库存。",
    "sources": [
      [
        "https://tymbark.com/",
        "品牌 / 旅游机构阅读入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=Tymbark",
        "图片参考 · Commons 检索（逐图确认许可）"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "local": "Tymbark",
    "shopping": true,
    "searchKind": "supermarket"
  },
  {
    "id": "brand-pl-biedronka",
    "type": "brand",
    "country": "pl",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "Biedronka",
    "description": "波兰广泛可见的折扣零售品牌，适合寻找日常食品与家庭用品。",
    "note": "品牌在波兰经营，与葡萄牙 Jerónimo Martins 集团有关，销售市场不等于集团起源国。各店店型、营业与库存不同；按当前地图范围搜索已选品牌。",
    "sources": [
      [
        "https://www.biedronka.pl/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "searchKind": "supermarket",
    "aliases": [
      "Biedronka"
    ]
  },
  {
    "id": "brand-pl-zabka",
    "type": "brand",
    "country": "pl",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "Żabka 便利店",
    "description": "波兰常见的便利店网络，适合小份食品、饮料和临时采购。",
    "note": "便利店与大型超市的面积、单价和供应不同。部分门店的星期日安排依经营情况和法律例外而变，不能默认全部全天营业；地图同时检索 supermarket 与 convenience 类型。",
    "sources": [
      [
        "https://www.zabka.pl/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "searchKind": "supermarket",
    "aliases": [
      "Żabka",
      "Zabka"
    ]
  },
  {
    "id": "brand-pl-rossmann",
    "type": "brand",
    "country": "pl",
    "category": "brands",
    "subcategory": "drugstore",
    "name": "Rossmann · 波兰",
    "description": "药妆和日用品连锁的波兰经营入口，可寻找洗护、防晒与家庭用品。",
    "note": "德国起源的品牌在波兰经营，不是波兰起源的大药房。药妆店与 apteka 的配药服务不同，具体门店与营业使用官方查询。",
    "sources": [
      [
        "https://www.rossmann.pl/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ]
  },
  {
    "id": "brand-pl-pko",
    "type": "brand",
    "country": "pl",
    "category": "brands",
    "subcategory": "bank",
    "name": "PKO Bank Polski",
    "description": "波兰银行品牌与金融服务的一个认识入口，网点和 ATM 使用官方查询核对。",
    "note": "PKO Bank Polski 与名称相近的 Bank Pekao 是不同机构。银行品牌、设备运营方与发卡行费用分开辨认，地图位置不能保证开放或没有额外取现收费。",
    "sources": [
      [
        "https://www.pkobp.pl/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ]
  },
  {
    "id": "brand-pl-cdprojekt",
    "type": "brand",
    "country": "pl",
    "category": "brands",
    "subcategory": "industry",
    "name": "CD PROJEKT · 游戏与文化产业",
    "description": "与华沙关联的游戏产业企业，可从《巫师》等作品继续认识波兰当代文化出口。",
    "note": "CD PROJEKT 集团、CD PROJEKT RED 开发业务与商店或游戏内虚构世界是不同对象。公司所在地不代表对外开放的游客景点，因此不为本卡设置参观坐标。",
    "sources": [
      [
        "https://www.cdprojekt.com/en/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw"
    ]
  },
  {
    "id": "brand-pl-zapiecek",
    "type": "brand",
    "country": "pl",
    "category": "food",
    "subcategory": "chain-dining",
    "name": "Zapiecek · 波兰饺子餐饮",
    "description": "华沙可探索的波兰菜与饺子餐饮品牌，具体门店在地图范围内动态搜索。",
    "note": "门店菜单、价格和营业按官方确认；品牌与一种地方菜的关联不代表菜肴由这家企业发明。",
    "sources": [
      [
        "https://zapiecek.eu/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "searchKind": "restaurant",
    "aliases": [
      "Zapiecek"
    ]
  },
  {
    "id": "brand-pl-green-nero",
    "type": "brand",
    "country": "pl",
    "category": "food",
    "subcategory": "chain-dining",
    "name": "Green Caffè Nero",
    "description": "波兰城市中可见的连锁咖啡馆品牌，可作为咖啡与简餐的具体门店线索。",
    "note": "不同门店的座位、供应和营业各异；城市关联指门店网络，不把每座城市都写成企业发源地。",
    "sources": [
      [
        "https://greencaffenero.pl/",
        "企业 / 品牌官方入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "searchKind": "restaurant",
    "aliases": [
      "Green Caffè Nero",
      "Green Cafe Nero"
    ]
  },
  {
    "id": "fact-pl-state-history",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "波兰的 1918 年，为什么不是历史起点？",
    "description": "波兰的国家和文化历史远早于 1918 年；这一年主要标记在分割统治之后恢复独立的现代节点。",
    "note": "十八世纪末的多次分割，使波兰国家从当时欧洲政治地图上消失，但语言、社会与政治活动并未因此停止。1918 年在一战结束和区域变动中恢复独立，不能理解成此前这片地方没有自己的历史。\n二战、战后边界调整与社会主义时期又改变了国家和城市。1989 年前后的政治转型、2004 年加入欧盟、2007 年加入申根体系，分别涉及不同制度，而今天的货币仍是兹罗提。\n华沙重建、格但斯克工人运动与弗罗茨瓦夫的人口变化，是不同角度的城市材料。比较时先确认事件年代与当时疆域，避免把今日的国界、语言和城市名称机械套回过去。",
    "sources": [
      [
        "https://muzhp.pl/en",
        "波兰历史博物馆 · 历史阅读入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "subtitle": "国家历史 · 分割、复国与现代制度"
  },
  {
    "id": "fact-pl-language",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "Ł、sz 与几句波兰语，怎样开始认？",
    "description": "波兰语属于西斯拉夫语支，变音字母和字母组合有自己的读音。Dzień dobry、Dziękuję 与 Przepraszam 是实用的开始。",
    "note": "Dzień dobry 用于礼貌问候，Dziękuję 是谢谢，Przepraszam 可用于道歉或打扰。Poproszę rachunek 可用于请求账单，woda niegazowana 指不含气的水；使用时结合场景和店员回应。\nŁ 不宜直接按英语 l 读，sz、cz 等组合也有特定读音。城市名在句中可能变形，例如 Warszawa 与 w Warszawie、Kraków 与 w Krakowie，因此看到不同词尾未必是另一座城市。\n先保存票面和地址的原文，再借助词典听发音，比用不稳定的中文谐音更可靠。波兰语与斯洛伐克语、捷克语有亲缘关系，但不是斯洛文尼亚语或德语的一种地方口音。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "波兰官方旅游 · 语言和日常资料"
      ],
      [
        "https://en.wiktionary.org/wiki/Category:Polish_language",
        "维基词典 · 波兰语入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "subtitle": "语言文化 · 保留原文比猜英语读法有用"
  },
  {
    "id": "fact-pl-milk-bars",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "“奶食堂”为什么不只卖牛奶？",
    "description": "Bar mleczny 通常指一种面向日常用餐的食堂式餐饮传统，今天菜单可能有汤、饺子、土豆、蔬菜或肉菜，不是只卖奶制品。",
    "note": "这种用餐形式与城市大众饮食、价格和社会政策的历史有关。不同店的经营、菜单与补贴情况可能不同，不能把所有挂着同样名称的店理解为同一个全国连锁。\n点菜时可以先看柜台、菜单与取餐流程，注意一道主食、配菜、汤和饮料是否分别计价。波兰语菜单中的单词有助于识别土豆、卷心菜与不同馅料，但食物限制仍需向店员确认。\n它适合与旅游餐厅和连锁快餐对比，理解当地日常消费，而不是把便宜当作唯一特征。具体营业和座位安排以门店为准，本卡讲一种餐饮文化，因此没有随意关联一个所谓全城统一的地点。",
    "sources": [
      [
        "https://www.poland.travel/en",
        "波兰官方旅游 · 饮食阅读入口"
      ]
    ],
    "cities": [
      "warsaw",
      "krakow",
      "gdansk",
      "wroclaw"
    ],
    "subtitle": "生活文化 · Bar mleczny 与日常用餐"
  },
  {
    "id": "fact-pl-warsaw-rebuilding",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "1943、1944 与战后重建，怎样分清？",
    "description": "1943 年华沙隔都起义与 1944 年华沙起义是不同事件；战后的历史中心重建又是后续过程。",
    "note": "1943 年的隔都起义发生在纳粹对犹太人的隔离、驱逐与大屠杀背景下。1944 年的华沙起义由波兰地下抵抗力量等发动，涉及另一阶段的军事与政治环境，参与者和地点不能简单重合。\n战争对城市造成大规模破坏。战后历史中心的重建依据文献、图像、保留构件与城市规划进行，体现的不只是恢复一种立面风格，也包括保存文化记忆与重新组织生活。\nUNESCO 将华沙历史中心列为世界遗产，与这种重建具有特殊关系。今天的历史感并不说明每栋楼都完整保存自中世纪；在 POLIN、起义博物馆和老城之间行走，可以把不同群体和不同年代分别理解。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/30/",
        "UNESCO · 华沙历史中心"
      ],
      [
        "https://polin.pl/en",
        "POLIN · 历史展陈"
      ],
      [
        "https://www.1944.pl/en",
        "华沙起义博物馆"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "subtitle": "华沙 · 三段相关但不同的历史"
  },
  {
    "id": "fact-pl-krakow-trumpet",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "圣玛利亚教堂的号角：仪式与传说怎样分读？",
    "description": "Hejnał 号角是克拉科夫具有辨识度的城市传统，旋律突然结束也伴随流传甚广的守城故事。",
    "note": "常见传说把中断的旋律解释为警报号手遭袭，这可以作为民间叙事阅读，却不应不加区分地当作每一个细节都有同时代史料证实的事件记录。仪式的长期变化与现代演出安排也有各自历史。\n听城市声音时，可以同时留意钟、号角与广场活动怎样组织日常时间。圣玛利亚教堂不只是声音来源，也有宗教用途、建筑与艺术收藏，参观不能只靠等候一个旅游节目来概括。\n旅行前查具体仪式时段与登塔安排，现场再分辨传说、可核对的建筑年代和当代实践。这样既保留故事的趣味，也知道哪些内容属于文化想象，哪些需要进一步史料支持。",
    "sources": [
      [
        "https://krakow.travel/en",
        "克拉科夫官方旅游 · 城市传统"
      ],
      [
        "https://mariacki.com/",
        "圣玛利亚圣殿入口"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "subtitle": "克拉科夫 · 城市声音的历史"
  },
  {
    "id": "fact-pl-gdansk-names",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "Gdańsk 与 Danzig：同一城市的不同历史语境",
    "description": "Gdańsk 是波兰语城市名，Danzig 是常见德语名称。名字帮助识别资料语境，不能单独决定城市每个时期的政治归属。",
    "note": "港口城市长期与波罗的海贸易、汉萨网络及周边政治力量相联系。不同年代的语言使用和行政地位变化，使今天阅读地图、老照片与建筑说明时会遇到不同名称。\n两次世界大战之间存在但泽自由市这一特殊政治安排，与今天波兰城市的地位不同。二战及战后重建又改变了人口和街景，不能把一张旧明信片当作现代居民身份的唯一依据。\n欧洲团结中心提供更晚的造船厂与工人运动线索，海事博物馆则帮助理解贸易和港口。把语言、城市、国家与事件分层阅读，比简单套一个“从来只属于谁”的标签更能理解地方历史。",
    "sources": [
      [
        "https://visitgdansk.com/",
        "格但斯克官方旅游 · 城市资料"
      ],
      [
        "https://ecs.gda.pl/",
        "欧洲团结中心 · 现代历史入口"
      ]
    ],
    "cities": [
      "gdansk"
    ],
    "subtitle": "格但斯克 · 港口、语言与政治地位"
  },
  {
    "id": "fact-pl-wroclaw-layers",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "Wrocław 与 Breslau：今天街景里的多层历史",
    "description": "Breslau 是城市的德语历史名称，Wrocław 是波兰语名称。二战后的边界和人口变化，对今天城市生活产生深远影响。",
    "note": "城市属于西里西亚的长时段历史，经历过不同政治结构与语言环境。1945 年前后的战争破坏、德裔居民离散或被迁出，以及新的波兰居民迁入，共同改变了城市社会。\n部分新居民与今天乌克兰境内的利沃夫等地区有联系，这涉及战后边界重划和人口迁移，不能把每个家庭的经历都说成相同。大学、宗教建筑与博物馆也在新的制度下继续发展。\n百年厅、旧城重建与当代文学提供不同的时间层。读地名时可以保留历史拼写用于查档案，同时尊重今天的城市名称；一座建筑的历史作者和当代使用者并不必然属于同一文化环境。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "弗罗茨瓦夫官方旅游 · 城市历史"
      ],
      [
        "https://mnwr.pl/en/",
        "国家博物馆 · 西里西亚与收藏入口"
      ]
    ],
    "cities": [
      "wroclaw"
    ],
    "subtitle": "弗罗茨瓦夫 · 西里西亚、边界与迁移"
  },
  {
    "id": "fact-pl-wroclaw-gnomes",
    "type": "fact",
    "country": "pl",
    "category": "facts",
    "subcategory": "facts",
    "name": "街上的小矮人，怎样从讽刺走向城市探索？",
    "description": "城市小矮人与二十世纪末的橙色替代运动记忆相联系，后来又发展为大量不同主题的公共雕塑。",
    "note": "橙色替代运动以荒诞、讽刺与街头行动回应当时的政治环境，小矮人成为相关视觉符号之一。今天的铜像探索则包含后来的公共艺术、商业委托和城市传播，不能把每一尊都当成当年留下的原物。\n不同雕塑讲述职业、机构、人物或店铺故事，数量与位置持续变化。因此一份网络清单可以作为散步线索，却不应被当作永远完整的固定名录；有些作品也可能暂时迁移或修复。\n可以先选择市场广场附近的一段步行路线，观察不同作品怎样讲述职业、机构与人物，再比较它们的委托与设置背景。城市艺术、商业传播和早期运动的政治语境各有不同，寻找的乐趣也可以成为理解历史的入口。",
    "sources": [
      [
        "https://visitwroclaw.eu/en",
        "弗罗茨瓦夫官方旅游 · 小矮人与城市资料"
      ]
    ],
    "cities": [
      "wroclaw"
    ],
    "subtitle": "弗罗茨瓦夫 · 公共艺术与城市记忆"
  },
  {
    "id": "person-pl-chopin",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "弗里德里克·肖邦 · 华沙成长与巴黎创作",
    "description": "肖邦于 1810 年出生在华沙附近的热拉佐瓦沃拉，在华沙成长学习，后来长期在巴黎生活和创作。",
    "note": "他的音乐与钢琴演奏、出版、沙龙和教学等职业环境相联系，波兰舞曲与民族文化是理解作品的线索之一，却不能把每一段旋律都当作一段具体政治事件的直接叙述。\n华沙的博物馆、纪念像与音乐活动，让成长城市保留多种阅读路径。实际出生地点在城外，国籍、文化认同、居住和创作地点也不能缩成一个简单标签。\n看公园演出或人物故居时，先确认当季安排与原物、复原展示的区别；通过与李斯特等同时代音乐家的卡片比较，可继续认识跨欧洲的演出与交往网络，而不凭同一时代就推断两人所有作品彼此影响。",
    "sources": [
      [
        "https://nifc.pl/en",
        "波兰肖邦研究所 · 生平与作品资料"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "local": "Fryderyk Chopin",
    "subtitle": "人物 · 音乐、迁移与城市纪念"
  },
  {
    "id": "person-pl-curie",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "玛丽·斯克沃多夫斯卡-居里 · 从华沙到研究世界",
    "description": "1867 年出生于华沙，后来在法国研究；1903 年获诺贝尔物理学奖、1911 年获诺贝尔化学奖。",
    "note": "她的工作涉及放射性研究以及钋、镭等元素，研究依靠实验、测量与合作，也发生在具体教育和职业条件之中。两项奖项属于不同年份与学科，不能简单写成同一年两次获奖。\n钋的命名与波兰有关，体现个人文化联系，但科学发现并不因此只属于某个城市或一个国家。华沙是出生与成长的重要关联，主要研究场所又位于法国，两种地理尺度需要同时保留。\n人物照片、故居展示和研究原物各讲不同内容；认识科学家时可进一步问贡献是什么、证据如何形成、谁参与合作。纪念机构的今天开放与具体馆藏另查，不从人物卡自动推导参观坐标。",
    "sources": [
      [
        "https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/biographical/",
        "诺贝尔奖 · 居里生平"
      ],
      [
        "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/",
        "诺贝尔奖 · 1903 年物理学奖资料"
      ]
    ],
    "cities": [
      "warsaw"
    ],
    "local": "Maria Skłodowska-Curie / Marie Curie",
    "subtitle": "人物 · 两项诺贝尔奖与跨国科研"
  },
  {
    "id": "person-pl-copernicus",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "尼古拉·哥白尼 · 克拉科夫是学习的一站",
    "description": "哥白尼于 1473 年出生在托伦，曾在克拉科夫学习，生平还连接意大利及波兰其他地方。",
    "note": "他提出以太阳为中心组织行星体系的理论，是天文学史的重要人物。但历史研究不能只用“突然推翻所有旧知识”的传奇概括，观测、数学模型、出版与后来的发展共同构成科学转变。\n哥白尼也参与教会行政等工作，教育涉及不同领域。克拉科夫大学传统帮助理解他的学习背景，却不意味着他出生在这里，或大学现存每一个房间都可以直接指认为他曾使用。\n今天多座机场、学校和机构以他命名，命名联系与真实生活地点不同。托伦的出生背景、克拉科夫的学习和后来在瓦尔米亚地区的工作，应放回各自年代理解。",
    "sources": [
      [
        "https://maius.uj.edu.pl/",
        "雅盖隆大学博物馆 · 学术与人物资料"
      ],
      [
        "https://muzeum.torun.pl/",
        "托伦地区博物馆 · 哥白尼人物资料入口"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Mikołaj Kopernik / Nicolaus Copernicus",
    "subtitle": "人物 · 天文学与多种职业角色"
  },
  {
    "id": "person-pl-szymborska",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "维斯瓦娃·辛波斯卡 · 从日常细节走向大问题",
    "description": "长期与克拉科夫相联系的诗人，1996 年获诺贝尔文学奖；出生地在今天 Kórnik 一带，并非克拉科夫。",
    "note": "她的诗歌常从熟悉的事物、偶然性和细小观察出发，让读者重新思考知识、历史与个人生活。看起来简明的语句包含修辞与结构选择，不宜把每一首诗都当成可直接引用的格言结论。\n克拉科夫的生活、出版与文学网络，是人物卡的重要城市关联。诗作里的地点、作者居住地址和后世纪念场所可能不同，不能仅凭诗题或一张照片就确定实地位置。\n阅读翻译时，译者和版本也参与文字呈现。若为卡片摘引诗句，应分别确认原作、译文和所用材料的授权，先用生平与作品介绍建立线索，再按许可选择短引文。",
    "sources": [
      [
        "https://www.nobelprize.org/prizes/literature/1996/szymborska/biographical/",
        "诺贝尔奖 · 辛波斯卡生平"
      ]
    ],
    "cities": [
      "krakow"
    ],
    "local": "Wisława Szymborska",
    "subtitle": "人物 · 克拉科夫与诗歌阅读"
  },
  {
    "id": "person-pl-walesa",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "莱赫·瓦文萨 · 造船厂与团结运动",
    "description": "与格但斯克造船厂和团结运动相联系的工人领袖、政治人物，1983 年获诺贝尔和平奖，后来担任波兰总统。",
    "note": "1980 年的罢工和团结运动涉及工人、社会组织与更广的政治环境，不能把过程完全归结为一个人的选择。瓦文萨是其中的重要人物，随后波兰经历戒严、谈判与制度转型等不同阶段。\n他在 1990—1995 年任总统，这属于运动之后的另一种政治角色。对人物的评价和争论需要结合具体时期与材料，城市博物馆可以帮助建立时间线，也不代替读者对来源的判断。\n欧洲团结中心、历史厂区和今天的工业空间彼此关联但范围不同。机场以他命名提供的是后世纪念线索，不意味着机场所在地就是罢工事件现场。",
    "sources": [
      [
        "https://www.nobelprize.org/prizes/peace/1983/walesa/biographical/",
        "诺贝尔奖 · 瓦文萨生平"
      ],
      [
        "https://ecs.gda.pl/",
        "欧洲团结中心 · 社会历史资料"
      ]
    ],
    "cities": [
      "gdansk"
    ],
    "local": "Lech Wałęsa",
    "subtitle": "人物 · 格但斯克的劳动与政治历史"
  },
  {
    "id": "person-pl-tokarczuk",
    "type": "person",
    "country": "pl",
    "category": "facts",
    "subcategory": "people",
    "name": "奥尔加·托卡尔丘克 · 旅行、叙事与地方联系",
    "description": "波兰作家，与弗罗茨瓦夫的生活和文化机构有关；她获 2018 年诺贝尔文学奖，该奖在 2019 年公布。",
    "note": "她的小说探索旅行、人物经验、地域与叙事方式，作品的多种声音不等于一本可以直接按图索骥的旅游攻略。文学地点可能经过组合与想象，需与实际地理和作者生平区分。\n她出生在 Sulechów，生活和工作跨越其他地方，不能把与弗罗茨瓦夫的关联改写成出生地。基金会和文化活动使人物与城市形成当代联系，具体活动与访客安排仍须查询机构。\n诺贝尔奖的标注年份与宣布年份是一个常见细节，2018 年奖在 2019 年公布并不矛盾。引用文学文字时另外核对版本、译者与许可，从人物经历与作品介绍进入阅读，更便于比较不同地方和不同声音的叙事。",
    "sources": [
      [
        "https://www.nobelprize.org/prizes/literature/2018/tokarczuk/biographical/",
        "诺贝尔奖 · 托卡尔丘克生平"
      ],
      [
        "https://fundacjaolgitokarczuk.org/",
        "奥尔加·托卡尔丘克基金会入口"
      ]
    ],
    "cities": [
      "wroclaw"
    ],
    "local": "Olga Tokarczuk",
    "subtitle": "人物 · 2018 年文学奖于 2019 年公布"
  }
];

const polandRelations = [
  [
    "place-warsaw-chopin-airport",
    "tip-city-warsaw",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-warsaw-modlin-airport",
    "tip-city-warsaw",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-krakow-airport",
    "tip-city-krakow",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-gdansk-airport",
    "tip-city-gdansk",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-wroclaw-airport",
    "tip-city-wroclaw",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-warsaw-station",
    "tip-city-warsaw",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-krakow-station",
    "tip-city-krakow",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-gdansk-station",
    "tip-city-gdansk",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-wroclaw-station",
    "tip-city-wroclaw",
    "到站后怎样换乘",
    "相关交通地点"
  ],
  [
    "place-warsaw-old-town",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-royal-castle",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-polin",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-uprising-museum",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-lazienki",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-chopin-museum",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-university",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-grand-theatre",
    "fact-warsaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-main-square",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-st-mary",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-wawel",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-collegium-maius",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-mocak",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-czartoryski",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-krakow-planty",
    "fact-krakow-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-long-market",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-st-mary",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-solidarity-centre",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-wwii-museum",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-crane",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-shakespeare-theatre",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-gdansk-oliwa-park",
    "fact-gdansk-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-rynek",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-cathedral",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-national-museum",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-university",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-opera",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-wroclaw-szczytnicki",
    "fact-wroclaw-daily-setting",
    "把地点放回城市环境",
    "继续探索城市地点"
  ],
  [
    "place-warsaw-koszyki",
    "tip-pl-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-krakow-kleparz",
    "tip-pl-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-gdansk-mariacka",
    "tip-pl-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "place-wroclaw-hala-targowa",
    "tip-pl-sunday",
    "购物前查营业",
    "城市采购线索"
  ],
  [
    "food-pl-pierogi",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-zurek",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-bigos",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-barszcz",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-golabki",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-paczek",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-sernik",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-wuzetka",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-obwarzanek",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-oscypek",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-sledz",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-amber",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-kluski",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-wedel",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-wedel",
    "brand-pl-biedronka",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-pl-ptasie-mleczko",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-ptasie-mleczko",
    "brand-pl-biedronka",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-pl-prince-polo",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-prince-polo",
    "brand-pl-biedronka",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-pl-krowki",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-krowki",
    "brand-pl-biedronka",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "food-pl-tymbark",
    "tip-pl-dining",
    "点餐与配料提醒",
    "认识相关食物与特产"
  ],
  [
    "food-pl-tymbark",
    "brand-pl-biedronka",
    "超市探索（不保证库存）",
    "可查找的日常商品（供应另核）"
  ],
  [
    "brand-pl-biedronka",
    "tip-pl-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-zabka",
    "tip-pl-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-rossmann",
    "tip-pl-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-pko",
    "tip-pl-money",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-cdprojekt",
    "tip-pl-sunday",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-zapiecek",
    "tip-pl-dining",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "brand-pl-green-nero",
    "tip-pl-dining",
    "使用与购买前的提醒",
    "相关企业与品牌"
  ],
  [
    "tip-city-warsaw",
    "tip-warsaw-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-warsaw-ticket-choice",
    "tip-warsaw-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-warsaw-daily-setting",
    "tip-city-warsaw",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-krakow",
    "tip-krakow-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-krakow-ticket-choice",
    "tip-krakow-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-krakow-daily-setting",
    "tip-city-krakow",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-gdansk",
    "tip-gdansk-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-gdansk-ticket-choice",
    "tip-gdansk-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-gdansk-daily-setting",
    "tip-city-gdansk",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-city-wroclaw",
    "tip-wroclaw-ticket-choice",
    "继续选票",
    "到站与换乘背景"
  ],
  [
    "tip-wroclaw-ticket-choice",
    "tip-wroclaw-transit-tools",
    "查官方时刻与线路",
    "了解票种与乘车条件"
  ],
  [
    "fact-wroclaw-daily-setting",
    "tip-city-wroclaw",
    "连接城市交通",
    "了解城市环境"
  ],
  [
    "tip-pl-entry-connectivity",
    "tip-pl-money",
    "准备当地支付与币种",
    "出发前核对国家信息"
  ],
  [
    "heritage-warsaw-centre",
    "place-warsaw-old-town",
    "进入具体广场位置",
    "了解世界遗产范围"
  ],
  [
    "heritage-warsaw-centre",
    "place-warsaw-royal-castle",
    "从城堡继续认识重建",
    "把建筑放回历史中心"
  ],
  [
    "heritage-warsaw-centre",
    "fact-pl-warsaw-rebuilding",
    "区分战争与重建阶段",
    "查看正式遗产条目"
  ],
  [
    "heritage-krakow-centre",
    "place-krakow-main-square",
    "从广场读历史城市",
    "了解遗产的整体范围"
  ],
  [
    "heritage-krakow-centre",
    "place-krakow-wawel",
    "从王室建筑继续探索",
    "把地点放回历史中心"
  ],
  [
    "heritage-krakow-centre",
    "place-krakow-collegium-maius",
    "连接学术传统",
    "理解大学所在城市"
  ],
  [
    "heritage-wroclaw-centennial",
    "fact-pl-wroclaw-layers",
    "放回城市多层历史",
    "从历史进入现代建筑"
  ],
  [
    "heritage-wroclaw-centennial",
    "place-wroclaw-szczytnicki",
    "认识邻近绿地",
    "连接现代建筑与公共空间"
  ],
  [
    "heritage-wieliczka-bochnia",
    "tip-krakow-ticket-choice",
    "城外交通与城市票分别看",
    "探索区域行程的票务条件"
  ],
  [
    "heritage-wieliczka-bochnia",
    "heritage-skocjan",
    "比较人工采矿与自然洞穴",
    "比较不同地下空间"
  ],
  [
    "heritage-malbork",
    "fact-pl-gdansk-names",
    "阅读区域政治与贸易背景",
    "从港口历史延伸到城堡"
  ],
  [
    "heritage-malbork",
    "place-gdansk-station",
    "铁路行程线索（车次另核）",
    "继续探索城外遗产"
  ],
  [
    "heritage-auschwitz-birkenau",
    "fact-pl-warsaw-rebuilding",
    "区分战争时期不同事件与地点",
    "继续了解纳粹迫害的遗址"
  ],
  [
    "heritage-auschwitz-birkenau",
    "fact-pl-state-history",
    "放回国家与战争历史",
    "从历史继续认识纪念地"
  ],
  [
    "fact-pl-state-history",
    "knowledge-habsburg-compromise",
    "比较十九世纪中欧的政治格局",
    "继续认识波兰国家节点"
  ],
  [
    "fact-pl-state-history",
    "fact-pl-gdansk-names",
    "从港口名称看历史变化",
    "把城市放回国家时间线"
  ],
  [
    "fact-pl-language",
    "food-pl-pierogi",
    "从菜单练习识别词形",
    "了解日常语言与点单"
  ],
  [
    "fact-pl-language",
    "fact-si-language",
    "比较两种斯拉夫语言",
    "比较不同语支与词形"
  ],
  [
    "fact-pl-milk-bars",
    "food-pl-pierogi",
    "认识日常菜单的一种食物",
    "把饺子放回用餐场景"
  ],
  [
    "fact-pl-milk-bars",
    "food-pl-zurek",
    "从汤品继续读菜单",
    "认识日常餐饮传统"
  ],
  [
    "fact-pl-warsaw-rebuilding",
    "place-warsaw-uprising-museum",
    "了解 1944 年事件",
    "先区分起义与重建"
  ],
  [
    "fact-pl-warsaw-rebuilding",
    "place-warsaw-polin",
    "了解犹太社区的长期历史",
    "把不同战争记忆分清"
  ],
  [
    "fact-pl-krakow-trumpet",
    "place-krakow-st-mary",
    "在教堂与广场观察仪式",
    "阅读城市声音的背景"
  ],
  [
    "fact-pl-krakow-trumpet",
    "place-krakow-main-square",
    "把声音放回公共空间",
    "认识号角传统"
  ],
  [
    "fact-pl-gdansk-names",
    "place-gdansk-solidarity-centre",
    "从港口史继续看现代运动",
    "了解城市名称与历史语境"
  ],
  [
    "fact-pl-gdansk-names",
    "place-gdansk-crane",
    "从港口建筑看贸易",
    "把建筑放回多语言历史"
  ],
  [
    "fact-pl-wroclaw-layers",
    "place-wroclaw-university",
    "读大学的多时代环境",
    "把校园放回城市变化"
  ],
  [
    "fact-pl-wroclaw-layers",
    "place-wroclaw-national-museum",
    "从地区收藏继续读",
    "理解西里西亚与城市"
  ],
  [
    "fact-pl-wroclaw-gnomes",
    "place-wroclaw-rynek",
    "从广场开始城市观察",
    "继续认识公共艺术"
  ],
  [
    "fact-pl-wroclaw-gnomes",
    "fact-pl-wroclaw-layers",
    "比较当代符号与长期城市史",
    "从城市历史延伸到街头艺术"
  ],
  [
    "person-pl-chopin",
    "place-warsaw-chopin-museum",
    "通过文献继续认识",
    "了解音乐家的生平"
  ],
  [
    "person-pl-chopin",
    "place-warsaw-lazienki",
    "认识纪念与公共音乐空间",
    "了解被纪念的作曲家"
  ],
  [
    "person-pl-chopin",
    "person-liszt",
    "比较跨国音乐人生",
    "继续认识同时代音乐家"
  ],
  [
    "person-pl-curie",
    "person-einstein",
    "比较跨国科学人生",
    "继续认识不同领域的研究者"
  ],
  [
    "person-pl-curie",
    "fact-pl-state-history",
    "把出生与成长放回历史背景",
    "从国家历史进入人物"
  ],
  [
    "person-pl-copernicus",
    "place-krakow-collegium-maius",
    "认识学习城市与大学史",
    "了解关联的天文学家"
  ],
  [
    "person-pl-copernicus",
    "place-wroclaw-airport",
    "区分后世纪念命名",
    "认识机场名称所纪念的人物"
  ],
  [
    "person-pl-szymborska",
    "place-krakow-main-square",
    "从诗人继续看生活城市",
    "认识城市的文学线索"
  ],
  [
    "person-pl-szymborska",
    "person-pl-tokarczuk",
    "比较两位文学奖得主",
    "继续认识波兰文学"
  ],
  [
    "person-pl-walesa",
    "place-gdansk-solidarity-centre",
    "从人物进入运动背景",
    "认识工人运动人物"
  ],
  [
    "person-pl-walesa",
    "place-gdansk-airport",
    "区分机场命名与活动地点",
    "认识机场纪念的人物"
  ],
  [
    "person-pl-tokarczuk",
    "fact-pl-wroclaw-layers",
    "把当代写作放回地方背景",
    "从城市继续阅读文学"
  ],
  [
    "brand-pl-zapiecek",
    "food-pl-pierogi",
    "认识菜单关联（供应另核）",
    "探索连锁餐饮门店"
  ],
  [
    "food-pl-zurek",
    "food-pl-barszcz",
    "比较黑麦发酵与甜菜底味",
    "比较不同酸汤"
  ],
  [
    "food-pl-wuzetka",
    "food-pl-sernik",
    "比较蛋糕体与奶酪口感",
    "认识另一种城市甜点"
  ],
  [
    "food-pl-oscypek",
    "food-pl-sernik",
    "比较奶酪的不同食用方式",
    "从甜点延伸到制酪传统"
  ],
  [
    "food-pl-amber",
    "place-gdansk-mariacka",
    "工艺购物线索（商品另核）",
    "认识地方特产与材料"
  ],
  [
    "food-pl-kluski",
    "fact-pl-wroclaw-layers",
    "把饮食放回区域与迁移",
    "认识西里西亚风味"
  ]
];

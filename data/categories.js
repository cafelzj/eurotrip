/* Static content only. Edit stable IDs here; views read this catalog. */
const cardCategories = {
  "primary": [
    {
      "id": "essential",
      "icon": "🧭",
      "name": "必备信息",
      "description": "医药、应急与容易忽略的日常提醒",
      "prefix": "必",
      "color": "#4f6c50"
    },
    {
      "id": "transport",
      "icon": "🚆",
      "name": "交通出行",
      "description": "交通 App、线路图、票务、机场、火车站与轮渡码头",
      "prefix": "交",
      "color": "#3d7775"
    },
    {
      "id": "food",
      "icon": "🍽️",
      "name": "美食与特产",
      "description": "菜肴、甜品、点餐结账、国民零食与伴手礼",
      "prefix": "食",
      "color": "#925533"
    },
    {
      "id": "brands",
      "icon": "🛍️",
      "name": "购物",
      "description": "支付、货币、超市、商圈、银行、药妆与企业品牌",
      "prefix": "购",
      "color": "#486b84"
    },
    {
      "id": "facts",
      "icon": "💡",
      "name": "冷知识与人物",
      "description": "从历史、地理和人物认识当地",
      "prefix": "知",
      "color": "#73608b"
    },
    {
      "id": "places",
      "icon": "🏛️",
      "name": "景点与建筑",
      "description": "教堂、博物馆、展览空间、剧院与公园",
      "prefix": "景",
      "color": "#826b3e"
    }
  ],
  "secondary": [
    {
      "id": "daily",
      "category": "essential",
      "name": "日常 / 应急",
      "icon": "🧳",
      "description": "紧急求助与旅行中的日常准备，提前保存重要联系方式。"
    },
    {
      "id": "pharmacy",
      "category": "essential",
      "name": "医药服务",
      "icon": "💊",
      "description": "分清药房与药妆店，从官方渠道寻找药品与值班服务。"
    },
    {
      "id": "tickets",
      "category": "transport",
      "name": "交通买票",
      "icon": "🎫",
      "description": "从单次票、多日票到月票，先比较有效时间、区域和机场适用范围，再查官方票务。"
    },
    {
      "id": "transit-tools",
      "category": "transport",
      "name": "交通 App / 线路图",
      "icon": "🚇",
      "description": "随身查询工具与官方线路图入口，实时班次和服务状态以运营商为准。"
    },
    {
      "id": "transport-rules",
      "category": "transport",
      "name": "乘车提醒",
      "icon": "🚇",
      "description": "验证、票区、换乘与机场接驳等容易忽略的出行规则。"
    },
    {
      "id": "airport",
      "category": "transport",
      "name": "机场",
      "icon": "✈️",
      "description": "进出城市的重要机场；参考坐标用于辨认位置，航站楼和接驳另查官方。"
    },
    {
      "id": "station",
      "category": "transport",
      "name": "火车站",
      "icon": "🚉",
      "description": "重要铁路车站，车次、站台与换乘安排以运营商为准。"
    },
    {
      "id": "ferry",
      "category": "transport",
      "name": "轮渡码头",
      "icon": "⛴️",
      "description": "水上交通的出发地点，登船桥、线路与季节班次请分别确认。"
    },
    {
      "id": "hub",
      "category": "transport",
      "name": "交通枢纽",
      "icon": "🚏",
      "description": "了解城市内外交通衔接的位置与查询入口。"
    },
    {
      "id": "dishes",
      "category": "food",
      "name": "美食",
      "icon": "🍽️",
      "description": "认识当地汤品、主菜与咸味小食，比较做法、口味和点单名称；具体餐厅请看关联地点卡片。"
    },
    {
      "id": "desserts",
      "category": "food",
      "name": "甜品",
      "icon": "🍰",
      "description": "从蛋糕、果馅卷到地方甜点，了解口感、配料与点单名称；具体供应请查餐馆或甜品店菜单。"
    },
    {
      "id": "restaurants",
      "category": "food",
      "name": "著名餐馆 / 咖啡馆",
      "icon": "🥘",
      "description": "具体餐饮场所的探索线索，每张卡片只定位一个场所。"
    },
    {
      "id": "chain-dining",
      "category": "food",
      "name": "连锁餐饮",
      "icon": "🍔",
      "description": "一起认识连锁品牌与具体门店：品牌卡片按地图范围动态搜索，门店卡片定位一个具体位置。"
    },
    {
      "id": "dining-tips",
      "category": "food",
      "name": "点餐 / 结账提醒",
      "icon": "🍽️",
      "description": "点单、结账与小费习惯，有饮食限制时向店员确认。"
    },
    {
      "id": "coffee",
      "category": "food",
      "name": "咖啡",
      "icon": "☕",
      "description": "了解咖啡名称、杯量与奶泡差异，具体配方因店而异。"
    },
    {
      "id": "dairy",
      "category": "food",
      "name": "奶酪 / 乳制品",
      "icon": "🧀",
      "description": "从风味、熟成与保存方式比较，旅行携带时注意冷藏。"
    },
    {
      "id": "chocolate",
      "category": "food",
      "name": "巧克力",
      "icon": "🍫",
      "description": "从日常零食到礼品，比较口感、包装与品牌起源。"
    },
    {
      "id": "meat",
      "category": "food",
      "name": "香肠 / 肉类",
      "icon": "🌭",
      "description": "认识常见肉类加工品与吃法，按标签确认原料和保存方式。"
    },
    {
      "id": "bread",
      "category": "food",
      "name": "面包",
      "icon": "🥖",
      "description": "从当地名称、谷物与口感认识面包店的日常选择。"
    },
    {
      "id": "wine",
      "category": "food",
      "name": "酒",
      "icon": "🍷",
      "description": "从品种、产区与饮用文化入门，留意容量、酒精度及携带规定。"
    },
    {
      "id": "snacks",
      "category": "food",
      "name": "国民零食 / 饮料",
      "icon": "🍪",
      "description": "认识平价常见的货架选择；地图提供购买线索，不保证库存。"
    },
    {
      "id": "gifts",
      "category": "food",
      "name": "伴手礼 / 礼品",
      "icon": "🎁",
      "description": "结合产区、包装与携带条件，选择适合带走的当地纪念。"
    },
    {
      "id": "payments",
      "category": "brands",
      "name": "支付 / 货币",
      "icon": "💳",
      "description": "了解币种、刷卡与取现习惯，现场核对汇率和手续费。"
    },
    {
      "id": "shopping-tips",
      "category": "brands",
      "name": "购物提醒",
      "icon": "🛒",
      "description": "营业时间、押金与退税等日常采购中容易忽略的事项。"
    },
    {
      "id": "supermarkets",
      "category": "brands",
      "name": "超市",
      "icon": "🛒",
      "description": "认识当地常见连锁；在地图中动态搜索当前范围的具体门店。"
    },
    {
      "id": "supermarket-locations",
      "category": "brands",
      "name": "超市地点",
      "icon": "🛒",
      "description": "已经收录的具体门店；一张地点卡片对应一个位置。"
    },
    {
      "id": "bank",
      "category": "brands",
      "name": "银行",
      "icon": "🏦",
      "description": "银行与 ATM 查询线索，品牌不代表免手续费。"
    },
    {
      "id": "drugstore",
      "category": "brands",
      "name": "药妆 / 日用",
      "icon": "🧴",
      "description": "洗护、防晒与生活用品的常见购物选择。"
    },
    {
      "id": "industry",
      "category": "brands",
      "name": "大型企业 / 产业",
      "icon": "🏢",
      "description": "从企业起源与产业认识当地；总部与生产地不自动视为游览场所。"
    },
    {
      "id": "consumer-brands",
      "category": "brands",
      "name": "食品 / 消费品牌",
      "icon": "🏷️",
      "description": "认识常见品牌、起源与产品，再沿关联卡片了解日常消费。"
    },
    {
      "id": "shopping-districts",
      "category": "brands",
      "name": "商圈 / 购物",
      "icon": "🛍️",
      "description": "适合步行逛街的商圈与购物地点，营业安排以各店为准。"
    },
    {
      "id": "people",
      "category": "facts",
      "name": "当地人物",
      "icon": "👤",
      "description": "通过生平、作品与城市联系认识人物，再访问相关地点卡片。"
    },
    {
      "id": "facts",
      "category": "facts",
      "name": "历史 / 地理 / 趣闻",
      "icon": "📜",
      "description": "把有趣的线索放回历史和地理背景中，沿关联继续阅读。"
    },
    {
      "id": "church",
      "category": "places",
      "name": "教堂",
      "icon": "⛪",
      "description": "从建筑、宗教与城市历史理解教堂，注意礼拜时间和参观礼仪。"
    },
    {
      "id": "museum",
      "category": "places",
      "name": "博物馆 / 美术馆 / 展览",
      "icon": "🏛️",
      "description": "按藏品、艺术与展览主题挑选；文化园区内各机构的展期、预约与票务请分别查官网。"
    },
    {
      "id": "theatre",
      "category": "places",
      "name": "剧院 / 演出场馆",
      "icon": "🎭",
      "description": "演出、建筑导览和观景平台可能需要分别订票。"
    },
    {
      "id": "university",
      "category": "places",
      "name": "著名大学",
      "icon": "🎓",
      "description": "认识当地的学术与校园历史，公众可进入范围请现场确认。"
    },
    {
      "id": "landmark",
      "category": "places",
      "name": "地标建筑",
      "icon": "🏰",
      "description": "城市最有辨识度的建筑与历史地点，坐标为参考位置。"
    },
    {
      "id": "park",
      "category": "places",
      "name": "公园 / 游乐园",
      "icon": "🌳",
      "description": "从城市绿地到游乐设施，按步行、休闲或游玩兴趣安排；园区开放与设施票务请分别确认。"
    },
    {
      "id": "other-places",
      "category": "places",
      "name": "其他景点",
      "icon": "📍",
      "description": "温泉、山地观景起点等其他值得停留的城市体验。"
    }
  ],
  "subcategoryAliases": {
    "展览馆": "博物馆 / 美术馆 / 展览",
    "连锁餐饮门店": "连锁餐饮",
    "连锁餐饮品牌": "连锁餐饮",
    "支付": "支付 / 货币",
    "购物": "购物提醒",
    "餐饮": "点餐 / 结账提醒",
    "交通": "乘车提醒",
    "日常": "日常 / 应急"
  },
  "pointKinds": {
    "church": "church",
    "museum": "museum",
    "exhibition": "museum",
    "theatre": "theatre",
    "university": "university",
    "landmark": "landmark",
    "park": "park",
    "other": "other-places",
    "airport": "airport",
    "station": "station",
    "ferry": "ferry"
  },
  "pointGroups": {
    "transport": "hub",
    "shopping": "shopping-districts",
    "supermarkets": "supermarket-locations",
    "food": "restaurants",
    "landmarks": "other-places"
  },
  "typeDefaults": {
    "food": "dishes",
    "specialty": "gifts",
    "brand": "consumer-brands",
    "person": "people",
    "fact": "facts",
    "tip": "daily",
    "place": "other-places"
  },
  "types": {
    "brand": [
      "企业 / 品牌",
      "▦"
    ],
    "food": [
      "美食",
      "♧"
    ],
    "place": [
      "地点",
      "⌖"
    ],
    "person": [
      "人物",
      "♙"
    ],
    "fact": [
      "冷知识",
      "✦"
    ],
    "specialty": [
      "特产",
      "◇"
    ],
    "tip": [
      "实用提醒",
      "☑"
    ]
  }
};

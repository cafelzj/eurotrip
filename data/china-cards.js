/* Suzhou catalog. Static content only; all fixed coordinates are WGS84 references. */
const chinaCards = [
  {
    "id": "tip-suzhou-metro",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "metro",
    "name": "苏州轨道交通 · 古城与新城之间",
    "description": "用线路编号、终点方向和站名规划行程。苏州站与苏州北站是不同的铁路车站，不要只输入“火车站”。",
    "note": "古城游览可结合地铁与步行；换乘、末班车、运营调整和车站出入口请查苏州轨道交通。",
    "sources": [
      [
        "https://www.sz-mtr.com/",
        "苏州轨道交通官方入口"
      ]
    ]
  },
  {
    "id": "tip-suzhou-ticket-choice",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "tickets",
    "name": "苏州 · 地铁票与铁路票分开选",
    "description": "地铁可比较单程购票、官方 App 乘车码等方式；城际铁路需单独在铁路官方渠道查询与购票。",
    "note": "按官方规则确认乘车码、支付方式及优惠资格；不要默认地铁乘车码可用于高铁。具体票价与可用票种以购票时的官方信息为准。",
    "sources": [
      [
        "https://www.sz-mtr.com/",
        "苏州轨道交通 · 票务入口"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ]
    ]
  },
  {
    "id": "tip-suzhou-transit-tools",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "transit-tools",
    "name": "苏州 · 出行 App 与线路查询",
    "description": "地铁从“苏e行”和苏州轨道交通官网开始查，铁路用 12306，城市步行、公交与导航可用高德地图。",
    "note": "提前确认账号、支付方式与手机电量；线路、运营时间和服务状态以提供方为准。",
    "sources": [
      [
        "https://www.sz-mtr.com/",
        "苏州轨道交通 · 官方线路与 App 信息"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.amap.com/",
        "高德地图"
      ]
    ]
  },
  {
    "id": "tip-city-suzhou",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "transport-rules",
    "name": "苏州出行 · 留出古城步行时间",
    "description": "平江路、山塘街及园林周边步行段较多。出发前看清上下车点，节假日热门街区可能有交通管制。",
    "note": "公共交通到站不等于到达景区入口；预约时段前留出步行与安检时间。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-suzhou-shared-mobility",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "苏州 · 共享单车与慢行",
    "description": "适合用共享单车补齐地铁与目的地间的一小段路。先在运营商 App 查看车辆、允许骑行区域与还车点。",
    "note": "不要默认所有古城步行街都能骑行，也不要默认有共享电动滑板车服务；按现场标识和当地规则通行。还车后确认订单结束。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "venue-suzhou-station",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "station",
    "name": "苏州站",
    "description": "靠近古城北侧的重要铁路车站，可与城市轨道交通衔接。购票时确认票面写的是“苏州”。",
    "note": "坐标为车站参考位置；南北广场、进站口和地铁出入口分别核对。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306 · 车站与车票"
      ],
      [
        "https://www.sz-mtr.com/",
        "苏州轨道交通"
      ]
    ],
    "point": {
      "id": "venue-suzhou-station",
      "lat": 31.3351,
      "lon": 120.6062,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "venue-suzhou-north-station",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "station",
    "name": "苏州北站",
    "description": "位于相城区的铁路车站，与古城附近的苏州站不是同一站。预订酒店和跨城行程时注意接驳时间。",
    "note": "请按票面车站进站，站台、检票口与车次以铁路实时信息为准。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306 · 车站与车票"
      ]
    ],
    "point": {
      "id": "venue-suzhou-north-station",
      "lat": 31.417,
      "lon": 120.6448,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "tip-suzhou-airport",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "transport",
    "subcategory": "airport",
    "name": "去苏州，机场接驳怎么选",
    "description": "航空旅客可结合航班与后续行程比较无锡的苏南硕放机场、上海虹桥或浦东机场，再确认铁路、大巴或其他接驳。",
    "note": "机场位于不同城市，勿把到达机场当成到达苏州市区；跨城接驳、夜间班次与返程时间应单独查询。",
    "sources": [
      [
        "https://www.wuxiairport.com/",
        "苏南硕放国际机场"
      ],
      [
        "https://www.shanghaiairport.com/",
        "上海机场官方入口"
      ]
    ]
  },
  {
    "id": "food-suzhou-noodles",
    "type": "food",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "苏式汤面 · 先选汤，再选浇头",
    "description": "常见红汤、白汤与不同浇头组合。与拌面相比，苏式汤面更适合先尝汤底，再比较面条与浇头。",
    "note": "红汤通常有酱油调味，白汤不等于没有盐；焖肉、爆鱼、鳝丝等浇头因店而异。奥灶面常与苏州所辖昆山联系，不把所有苏式面都称作奥灶面。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%BC%8F%E6%B1%A4%E9%9D%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-suzhou-mandarin-fish",
    "type": "food",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "松鼠鳜鱼 · 造型与酸甜口",
    "description": "鱼肉改刀后炸制定形，再淋酸甜酱汁，是辨识度很高的苏帮菜。与清蒸鱼相比，更突出酥脆表面与酱汁。",
    "note": "通常适合多人分享，鱼种、规格与价格需点单时确认；有鱼类过敏或忌口时先问店员。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%9D%BE%E9%BC%A0%E9%B3%9C%E9%B1%BC",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-suzhou-eel",
    "type": "food",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "响油鳝糊 · 鲜香的一道热菜",
    "description": "鳝丝配调味炒制，常在上桌时加入热油突出香气。与酸甜的松鼠鳜鱼相比，风味更偏鲜香浓郁。",
    "note": "菜名中的“响油”描述热油激发香味的做法；不同餐厅用料、蒜香与油量会有差异。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%93%8D%E6%B2%B9%E9%B3%9D%E7%B3%8A",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-suzhou-mooncake",
    "type": "food",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "desserts",
    "name": "苏式月饼 · 酥皮也有咸口",
    "description": "苏式月饼以层次分明的酥皮为特点，既有甜馅，也有鲜肉等咸馅。与广式月饼相比，饼皮口感和保存方式不同。",
    "note": "鲜肉月饼适合按商家要求趁鲜食用；伴手礼需看配料、保质期与保存条件，不能只按外盒判断。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%BC%8F%E6%9C%88%E9%A5%BC",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-suzhou-cakes",
    "type": "food",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "desserts",
    "name": "苏式糕团 · 随季节挑选",
    "description": "青团、定胜糕、海棠糕等常见于江南糕点与小吃语境。可按糯米口感、馅料甜度及是否现做来比较。",
    "note": "糕团并非每款都全年售卖；部分用糯米制作、口感黏软，购买前确认配料与食用建议。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%BC%8F%E7%B3%95%E5%9B%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "specialty-suzhou-tea",
    "type": "specialty",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "gifts",
    "name": "洞庭碧螺春 · 苏州的茶礼",
    "description": "与苏州太湖洞庭东山、西山产区联系密切的绿茶。这里的“洞庭”不要直接理解成湖南洞庭湖。",
    "note": "比较产地、等级、生产日期和包装；茶叶适合轻便携带，但避免只凭“明前”或礼盒大小判断品质。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州 · 地方特产信息入口"
      ]
    ]
  },
  {
    "id": "venue-suzhou-songhelou",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "restaurants",
    "name": "松鹤楼 · 观前街店",
    "description": "苏州老字号餐馆的具体门店，可作为认识苏帮菜与松鼠鳜鱼的线索。",
    "note": "此卡定位观前街店的参考位置；不同门店菜单、订位与营业时间分别核对，不保证当天供应。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州 · 老字号与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-suzhou-songhelou",
      "lat": 31.312,
      "lon": 120.6208,
      "coordSystem": "wgs84",
      "group": "food",
      "sub": "restaurant"
    }
  },
  {
    "id": "venue-suzhou-noodle-shop",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "food",
    "subcategory": "restaurants",
    "name": "同得兴 · 嘉馀坊店",
    "description": "以苏式面为探索线索的一家面馆地点卡片，适合与苏式汤面知识卡片一起看。",
    "note": "此卡仅定位嘉馀坊店的参考位置；现时地址、营业时间和浇头供应请在高德及店内确认。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州 · 餐饮与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-suzhou-noodle-shop",
      "lat": 31.3017,
      "lon": 120.6196,
      "coordSystem": "wgs84",
      "group": "food",
      "sub": "restaurant"
    }
  },
  {
    "id": "brand-suzhou-rtmart",
    "type": "brand",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "大润发 · 在苏州找门店",
    "description": "在高德地图按当前位置查找大润发的具体门店。适合补给饮水、零食或日常用品。",
    "note": "品牌卡没有固定地址；门店营业、配送范围与库存以商家最新信息为准。",
    "sources": [
      [
        "https://www.rt-mart.com.cn/",
        "品牌官方入口"
      ]
    ],
    "searchKind": "supermarket",
    "searchName": "大润发",
    "aliases": [
      "大润发"
    ]
  },
  {
    "id": "brand-suzhou-hema",
    "type": "brand",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "盒马 · 在苏州找门店",
    "description": "在高德地图按当前位置查找盒马的具体门店。适合补给饮水、零食或日常用品。",
    "note": "品牌卡没有固定地址；门店营业、配送范围与库存以商家最新信息为准。",
    "sources": [
      [
        "https://www.freshippo.com/",
        "品牌官方入口"
      ]
    ],
    "searchKind": "supermarket",
    "searchName": "盒马",
    "aliases": [
      "盒马"
    ]
  },
  {
    "id": "brand-suzhou-samsclub",
    "type": "brand",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "山姆会员商店 · 在苏州找门店",
    "description": "会员制仓储超市，与普通超市相比更适合比较大包装和家庭采购；短途旅行先确认入店、结账与会员规则。",
    "note": "品牌卡没有固定地址，地图按范围查找具体门店；会员要求、营业与库存以商家最新信息为准。",
    "sources": [
      [
        "https://www.samsclub.cn/",
        "山姆会员商店官方入口"
      ]
    ],
    "searchKind": "supermarket",
    "searchName": "山姆会员商店",
    "aliases": [
      "山姆会员商店",
      "山姆"
    ]
  },
  {
    "id": "venue-suzhou-guanqian",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "观前街",
    "description": "古城中心的传统商业街区，可把老字号、小吃与日常购物放在同一段步行行程里。",
    "note": "坐标代表街区参考位置，不是所有店铺的共同入口。热门时段留意人流与街区管理。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-suzhou-guanqian",
      "lat": 31.3124,
      "lon": 120.6199,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping"
    }
  },
  {
    "id": "venue-suzhou-center",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "苏州中心商场",
    "description": "金鸡湖西侧的现代商业综合体，可与湖滨步行安排在一起。与古城商街相比，更适合集中餐饮、购物和室内休息。",
    "note": "楼层、店铺、营业与停车信息以商场当天公告为准。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-suzhou-center",
      "lat": 31.3141,
      "lon": 120.6737,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping"
    }
  },
  {
    "id": "brand-suzhou-caizhizhai",
    "type": "brand",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "consumer-brands",
    "name": "采芝斋 · 糖果与苏式零食",
    "description": "苏州老字号品牌，可从苏式糖果与日常点心认识当地零食。适合买小包装尝味，再决定是否作为伴手礼。",
    "note": "核对品牌、生产商、配料、保质期及门店信息；老字号名气不代表每件产品都适合长途携带。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "brand-suzhou-huangtianyuan",
    "type": "brand",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "consumer-brands",
    "name": "黄天源 · 糕团与时令点心",
    "description": "与苏式糕团联系紧密的苏州老字号，可留意时令糕团、口味与当天供应。",
    "note": "即食糕团和礼盒的保存条件不同，旅行购买应按包装和店员说明安排。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-suzhou-silk",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "shopping-tips",
    "name": "苏绣与丝绸 · 看工艺，也看材质",
    "description": "选购苏绣时区分手工刺绣、机绣与印花；购买丝绸时看纤维成分和洗护标签。",
    "note": "先比较工艺、尺寸、用途与预算，再购买。不要把“苏州购买”直接等同于“苏州手工制作”。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-suzhou-pharmacy",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "brands",
    "subcategory": "pharmacy",
    "name": "苏州 · 药店与就医入口",
    "description": "日常购药可查附近正规药店；处方药、持续不适或紧急情况应咨询药师或正规医疗机构。",
    "note": "高德的门店信息可辅助找位置；营业、药品供应和处方要求需现场或电话确认。紧急医疗求助拨打 120。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "venue-suzhou-humble-administrator",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "gardens",
    "name": "拙政园",
    "description": "苏州古典园林的重要代表，以水面、亭台与借景组织空间。可从“移步换景”理解游线，而不只拍单一建筑。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/813/",
        "世界遗产 · 苏州古典园林"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%8B%99%E6%94%BF%E5%9B%AD",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-humble-administrator",
      "lat": 31.3263,
      "lon": 120.6239,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "gardens"
    }
  },
  {
    "id": "venue-suzhou-lingering-garden",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "gardens",
    "name": "留园",
    "description": "通过厅堂、廊道、庭院与山石形成层次丰富的游览体验。适合与拙政园比较园林的尺度和空间组织。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/813/",
        "世界遗产 · 苏州古典园林"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E7%95%99%E5%9B%AD",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-lingering-garden",
      "lat": 31.3177,
      "lon": 120.5927,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "gardens"
    }
  },
  {
    "id": "venue-suzhou-tiger-hill",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "landmark",
    "name": "虎丘",
    "description": "以云岩寺塔、山林与历史故事著称的苏州名胜。可把塔的辨识度与园区的步行游览一起看。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%99%8E%E4%B8%98",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-tiger-hill",
      "lat": 31.3385,
      "lon": 120.5778,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "venue-suzhou-museum",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "museum",
    "name": "苏州博物馆 · 本馆",
    "description": "现代博物馆建筑与江南庭院语言相结合。本馆与西馆不是同一地址，预约时先确认参观馆区。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.szmuseum.com/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%B7%9E%E5%8D%9A%E7%89%A9%E9%A6%86",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-museum",
      "lat": 31.3249,
      "lon": 120.6238,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "venue-suzhou-hanshan",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "temples",
    "name": "寒山寺",
    "description": "因张继《枫桥夜泊》广为人知的寺院。适合把诗歌意象、寺院建筑与周边水岸放在一起理解。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%AF%92%E5%B1%B1%E5%AF%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-hanshan",
      "lat": 31.3108,
      "lon": 120.5647,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "temples"
    }
  },
  {
    "id": "venue-suzhou-pingjiang",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "other-places",
    "name": "平江路历史街区",
    "description": "沿河街巷、桥梁与老城肌理构成慢行路线。可结合街区内的小店与评弹空间安排，不把整条街当作一个售票景点。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%B9%B3%E6%B1%9F%E8%B7%AF%E5%8E%86%E5%8F%B2%E8%A1%97%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-pingjiang",
      "lat": 31.3147,
      "lon": 120.6267,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "venue-suzhou-shantang",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "other-places",
    "name": "山塘街",
    "description": "与运河水岸和古城生活联系紧密的历史街区。白天看街巷结构，夜间看水岸灯光，体验会有所不同。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%B1%B1%E5%A1%98%E8%A1%97",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-shantang",
      "lat": 31.3222,
      "lon": 120.596,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "venue-suzhou-jinji-lake",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "park",
    "name": "金鸡湖 · 湖滨步行",
    "description": "与古典园林不同的开放城市湖滨景观。适合散步，结合周边商业、文化场馆理解苏州的新城面貌。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E9%87%91%E9%B8%A1%E6%B9%96",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-jinji-lake",
      "lat": 31.3073,
      "lon": 120.6889,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "venue-suzhou-university",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "university",
    "name": "苏州大学 · 天赐庄校区",
    "description": "认识苏州近现代教育历史的校园线索。校园不是随时可自由进入的公共景区。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.suda.edu.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%B7%9E%E5%A4%A7%E5%AD%A6",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-university",
      "lat": 31.3029,
      "lon": 120.6343,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "venue-suzhou-arts",
    "type": "place",
    "country": "cn",
    "city": "suzhou",
    "category": "places",
    "subcategory": "theatre",
    "name": "苏州文化艺术中心",
    "description": "金鸡湖畔的演出与文化场馆，可按剧目、演出时间与购票安排参观。",
    "note": "坐标为场所参考位置，并非精确入口；预约、开放、票务与可进入范围请查官方。",
    "sources": [
      [
        "https://www.sscac.com.cn/",
        "机构 / 城市官方信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%8B%8F%E5%B7%9E%E6%96%87%E5%8C%96%E8%89%BA%E6%9C%AF%E4%B8%AD%E5%BF%83",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suzhou-arts",
      "lat": 31.3237,
      "lon": 120.7001,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "fact-suzhou-water",
    "type": "fact",
    "country": "cn",
    "city": "suzhou",
    "category": "facts",
    "subcategory": "facts",
    "name": "苏州为什么叫“水城”？",
    "description": "古城河网、京杭大运河与太湖共同塑造苏州的交通、商业和生活。水城并不只指景点里的一条游船河道。",
    "note": "苏州行政范围还包括多个县级市，古城、金鸡湖、太湖与周边城镇并非步行即可串完。夏季湿热，梅雨时节多雨；长距离游览应结合交通安排。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "fact-suzhou-gardens",
    "type": "fact",
    "country": "cn",
    "city": "suzhou",
    "category": "facts",
    "subcategory": "facts",
    "name": "园林里的窗，也是一幅画",
    "description": "借景把园外景物纳入视线，框景则用门洞、窗洞等形成观看边界。走动时，同一个庭院会不断改变构图。",
    "note": "联合国教科文组织的“苏州古典园林”世界遗产包含多座园林，不是只有拙政园一处。",
    "sources": [
      [
        "https://whc.unesco.org/en/list/813/",
        "UNESCO · Classical Gardens of Suzhou"
      ]
    ]
  },
  {
    "id": "person-suzhou-wenzhengming",
    "type": "person",
    "country": "cn",
    "city": "suzhou",
    "category": "facts",
    "subcategory": "people",
    "name": "文徵明 · 吴门文人的苏州",
    "description": "明代书画家，与苏州的吴门艺术传统及园林文化联系紧密。认识他，有助于理解园林与诗、书、画的关系。",
    "note": "人物与地点的文化关联不等同于可参观故居；具体展览请查博物馆最新安排。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "person-suzhou-pei",
    "type": "person",
    "country": "cn",
    "city": "suzhou",
    "category": "facts",
    "subcategory": "people",
    "name": "贝聿铭 · 从家族江南记忆到博物馆",
    "description": "苏州博物馆本馆设计者贝聿铭出生于广州，家族与苏州有深厚联系。建筑中的庭院、白墙与几何形体可作为观察线索。",
    "note": "不要把家族渊源写成“出生于苏州”；建筑参观与展览预约分别留意官方安排。",
    "sources": [
      [
        "https://www.szmuseum.com/",
        "苏州博物馆官方入口"
      ]
    ]
  },
  {
    "id": "tip-suzhou-help",
    "type": "tip",
    "country": "cn",
    "city": "suzhou",
    "category": "facts",
    "subcategory": "daily",
    "name": "苏州旅行 · 紧急求助与日常准备",
    "description": "报警 110、火警 119、急救 120；非紧急城市服务可查询 12345。出行前保存住宿地址和紧急联系人。",
    "note": "按实际紧急情况选择服务，先说位置与发生了什么。手机号、实名预约、证件及支付方式应在出发前确认；游客预算可分为餐饮、门票、住宿和跨城接驳。",
    "sources": [
      [
        "https://www.suzhou.gov.cn/",
        "苏州市政府 · 城市与文旅信息入口"
      ]
    ]
  }
];

const chinaRelations = [
  [
    "food-suzhou-noodles",
    "venue-suzhou-noodle-shop",
    "面馆探索（供应需确认）",
    "认识苏式汤面"
  ],
  [
    "food-suzhou-mandarin-fish",
    "venue-suzhou-songhelou",
    "餐馆探索（供应需确认）",
    "认识苏帮菜"
  ],
  [
    "food-suzhou-eel",
    "venue-suzhou-songhelou",
    "餐馆探索（供应需确认）",
    "相关菜肴"
  ],
  [
    "food-suzhou-cakes",
    "brand-suzhou-huangtianyuan",
    "认识糕团品牌",
    "认识苏式糕团"
  ],
  [
    "food-suzhou-mooncake",
    "brand-suzhou-caizhizhai",
    "逛老字号尝点心",
    "比较苏式点心"
  ],
  [
    "venue-suzhou-guanqian",
    "brand-suzhou-caizhizhai",
    "老字号探索线索",
    "逛古城商圈"
  ],
  [
    "venue-suzhou-guanqian",
    "brand-suzhou-huangtianyuan",
    "老字号探索线索",
    "逛古城商圈"
  ],
  [
    "fact-suzhou-gardens",
    "venue-suzhou-humble-administrator",
    "在拙政园看框景",
    "园林怎么读"
  ],
  [
    "fact-suzhou-gardens",
    "venue-suzhou-lingering-garden",
    "在留园看空间",
    "园林怎么读"
  ],
  [
    "person-suzhou-wenzhengming",
    "fact-suzhou-gardens",
    "认识文人园林",
    "认识吴门人物"
  ],
  [
    "person-suzhou-pei",
    "venue-suzhou-museum",
    "看博物馆建筑",
    "认识建筑设计者"
  ],
  [
    "fact-suzhou-water",
    "venue-suzhou-pingjiang",
    "沿水巷走进古城",
    "认识水城地理"
  ],
  [
    "fact-suzhou-water",
    "venue-suzhou-shantang",
    "探索运河街巷",
    "认识水城地理"
  ],
  [
    "venue-suzhou-center",
    "venue-suzhou-jinji-lake",
    "一起安排湖滨步行",
    "周边购物"
  ],
  [
    "tip-suzhou-metro",
    "tip-suzhou-transit-tools",
    "查询 App 与线路图",
    "地铁使用指南"
  ],
  [
    "tip-suzhou-metro",
    "tip-suzhou-ticket-choice",
    "比较交通票种",
    "地铁使用指南"
  ],
  [
    "venue-suzhou-station",
    "venue-suzhou-north-station",
    "注意区分两个车站",
    "注意区分两个车站"
  ]
];

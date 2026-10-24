/* Jiangsu destinations catalog. Static content only; all fixed coordinates are WGS84 references. */
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
    "subcategory": "tickets",
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
    "subcategory": "tickets",
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
    "note": "水城的形成，是长期利用河湖、交通和市政工程的结果。苏州地方建城叙事常追溯到春秋吴国及公元前 514 年的阖闾大城；这类建城纪年不等于今天每一段街道、城墙和桥梁都能连续追溯到同一年。\n隋唐以后，运河网络把江南与更大范围的粮运、商业体系连接起来；宋代以来的城市发展，则不断改变河道、街巷与居住格局。“京杭大运河”由不同时期的河段和工程组成，不能理解为某一年一次开挖完成的一条水渠。\n现存南宋《平江图》碑刻于 1229 年，可帮助比较古城的河街关系。它是一个时代的城市记录，不是所有后续街巷的原始施工图。到平江路时，观察水陆并行、桥梁和宅院出入口，比只记“东方威尼斯”的比喻更能理解本地结构。\n山塘街则适合联系唐代以来的城市水运、虎丘游览和商业活动。今天看到的历史街区也有修缮与经营更新，应区分历史格局、保留建筑与后期整治。全市行政范围还包括县级市，水城不意味着所有目的地都能乘一条游船到达。",
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
    "note": "先看年代与主人：苏州古典园林多次经历营建、易主、分割、改造和修复，今天看到的格局往往包含不同阶段。明清时期的文人审美、城市经济和私人园居生活，是理解这些园林的重要背景；它们不能全部归到同一位造园者或同一个朝代。\n拙政园始建于明代十六世纪初，后世仍有显著变化；留园也经历了多代经营。名字中的“园主”与现存每一座亭榭的实际建造年代，并不总是一一对应。游览时可以同时留意园名、历代主人和现存建筑的说明牌。\n1997 年“苏州古典园林”列入世界遗产，2000 年扩展，列名范围共九座园林。这个名录不等于苏州所有开放园林，也不代表虎丘、金鸡湖等所有热门景点都属于同一遗产。\n再看空间手法：借景把视线引向园外；框景用门窗组织画面；漏窗、曲廊与转折让同一片水面呈现不同景象。“移步换景”描述的是行走中的连续体验，可以结合池岸、假山、题额和室内外边界一起观察，而不只寻找一个固定拍照角度。",
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
  },
  {
    "id": "tip-xuzhou-metro",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "metro",
    "name": "徐州地铁 · 先查方向与末班车",
    "description": "用线路编号、终点方向与站名规划行程；徐州站、徐州东站是不同铁路车站，需按票面站名安排接驳。",
    "note": "线路延伸、施工与末班时间会调整，出发前查询运营商最新线路图。",
    "sources": [
      [
        "https://www.xzdtjt.com/",
        "徐州地铁官方入口"
      ]
    ]
  },
  {
    "id": "tip-xuzhou-ticket-choice",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "tickets",
    "name": "徐州 · 地铁与城际车票怎么选",
    "description": "地铁可比较单程购票与官方乘车服务，铁路另用 12306 查询。先确认实际出发站与目的站，再安排交通预算。",
    "note": "普通地铁乘车码不默认适用于铁路；可用票种、票价和优惠资格以运营商为准。",
    "sources": [
      [
        "https://www.xzdtjt.com/",
        "徐州地铁官方票务入口"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ]
    ]
  },
  {
    "id": "tip-xuzhou-transit-tools",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "tickets",
    "name": "徐州 · 交通 App 与线路图",
    "description": "地铁从徐州地铁及运营商官方信息开始查；铁路使用 12306，其他城市导航可用地图 App。",
    "note": "市区交通与下辖县、县级市之间的行程要单独规划，不按同一个市名假定已经到达。",
    "sources": [
      [
        "https://www.xzdtjt.com/",
        "徐州地铁官方入口"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ]
    ]
  },
  {
    "id": "tip-city-xuzhou",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "tickets",
    "name": "徐州出行 · 全市不等于市区",
    "description": "全市概览包含已收录的下辖县级目的地，景点之间可能需要跨城区或跨县级城市出行。",
    "note": "点开地点卡片先看所在行政层级，再确认车程、预约时间与返程方案。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-xuzhou-shared-mobility",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "徐州 · 共享单车补齐短途",
    "description": "可用共享单车衔接地铁与街区，先在运营商 App 查看服务区域、车辆及允许还车点。",
    "note": "不要默认所有景区、步行街或湖滨路径都允许骑行；遵守现场规则，还车后确认订单结束。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-xuzhou-help",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "facts",
    "subcategory": "daily",
    "name": "徐州旅行 · 日常与紧急准备",
    "description": "报警 110、火警 119、急救 120；保存住宿地址、紧急联系人与预约凭证。",
    "note": "县级目的地与市区可能相距较远，节假日注意门票预约、营业与末班交通。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-xuzhou-pharmacy",
    "type": "tip",
    "country": "cn",
    "city": "xuzhou",
    "category": "brands",
    "subcategory": "pharmacy",
    "name": "徐州 · 药店与就医",
    "description": "日常购药查询附近正规药店，处方药和持续不适请咨询药师或医疗机构。",
    "note": "地图辅助找位置；营业、库存与处方要求需电话或现场确认。急救请拨 120。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "brand-xuzhou-rtmart",
    "type": "brand",
    "country": "cn",
    "city": "xuzhou",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "大润发 · 在徐州找门店",
    "description": "品牌卡不对应固定地址，可在地图范围内搜索当地大润发门店，补给饮水、零食与日用品。",
    "note": "门店营业与商品库存以商家为准；全市搜索需先放大到具体城区。",
    "sources": [
      [
        "https://www.rt-mart.com.cn/",
        "品牌官方入口"
      ]
    ],
    "searchKind": "supermarket",
    "searchName": "大润发",
    "aliases": [
      "大润发",
      "RT-Mart"
    ]
  },
  {
    "id": "tip-wuxi-metro",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "metro",
    "name": "无锡地铁 · 先查方向与末班车",
    "description": "用线路编号、终点方向与站名规划行程；无锡站、无锡东站是不同铁路车站，需按票面站名安排接驳。",
    "note": "线路延伸、施工与末班时间会调整，出发前查询运营商最新线路图。",
    "sources": [
      [
        "https://www.wxmetro.net/",
        "无锡地铁官方入口"
      ]
    ]
  },
  {
    "id": "tip-wuxi-ticket-choice",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "tickets",
    "name": "无锡 · 地铁与城际车票怎么选",
    "description": "地铁可比较单程购票与官方乘车服务，铁路另用 12306 查询。先确认实际出发站与目的站，再安排交通预算。",
    "note": "普通地铁乘车码不默认适用于铁路；可用票种、票价和优惠资格以运营商为准。",
    "sources": [
      [
        "https://www.wxmetro.net/",
        "无锡地铁官方票务入口"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ]
    ]
  },
  {
    "id": "tip-wuxi-transit-tools",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "tickets",
    "name": "无锡 · 交通 App 与线路图",
    "description": "地铁从码上行 / 无锡地铁官方乘车服务及运营商官方信息开始查；铁路使用 12306，其他城市导航可用地图 App。",
    "note": "市区交通与下辖县、县级市之间的行程要单独规划，不按同一个市名假定已经到达。",
    "sources": [
      [
        "https://www.wxmetro.net/",
        "无锡地铁官方入口"
      ],
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ]
    ]
  },
  {
    "id": "tip-city-wuxi",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "tickets",
    "name": "无锡出行 · 全市不等于市区",
    "description": "全市概览包含已收录的下辖县级目的地，景点之间可能需要跨城区或跨县级城市出行。",
    "note": "点开地点卡片先看所在行政层级，再确认车程、预约时间与返程方案。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-wuxi-shared-mobility",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "shared-mobility",
    "name": "无锡 · 共享单车补齐短途",
    "description": "可用共享单车衔接地铁与街区，先在运营商 App 查看服务区域、车辆及允许还车点。",
    "note": "不要默认所有景区、步行街或湖滨路径都允许骑行；遵守现场规则，还车后确认订单结束。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-wuxi-help",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "facts",
    "subcategory": "daily",
    "name": "无锡旅行 · 日常与紧急准备",
    "description": "报警 110、火警 119、急救 120；保存住宿地址、紧急联系人与预约凭证。",
    "note": "县级目的地与市区可能相距较远，节假日注意门票预约、营业与末班交通。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-wuxi-pharmacy",
    "type": "tip",
    "country": "cn",
    "city": "wuxi",
    "category": "brands",
    "subcategory": "pharmacy",
    "name": "无锡 · 药店与就医",
    "description": "日常购药查询附近正规药店，处方药和持续不适请咨询药师或医疗机构。",
    "note": "地图辅助找位置；营业、库存与处方要求需电话或现场确认。急救请拨 120。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "brand-wuxi-rtmart",
    "type": "brand",
    "country": "cn",
    "city": "wuxi",
    "category": "brands",
    "subcategory": "supermarkets",
    "name": "大润发 · 在无锡找门店",
    "description": "品牌卡不对应固定地址，可在地图范围内搜索当地大润发门店，补给饮水、零食与日用品。",
    "note": "门店营业与商品库存以商家为准；全市搜索需先放大到具体城区。",
    "sources": [
      [
        "https://www.rt-mart.com.cn/",
        "品牌官方入口"
      ]
    ],
    "searchKind": "supermarket",
    "searchName": "大润发",
    "aliases": [
      "大润发",
      "RT-Mart"
    ]
  },
  {
    "id": "venue-xuzhou-station",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "station",
    "name": "徐州站",
    "description": "靠近传统市区的铁路车站，不能与徐州东站混用。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-station",
      "lat": 34.2638,
      "lon": 117.2152,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "venue-xuzhou-east-station",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "transport",
    "subcategory": "station",
    "name": "徐州东站",
    "description": "位于城市东部的重要高铁车站，安排市区接驳需留出时间。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-east-station",
      "lat": 34.2667,
      "lon": 117.3031,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "venue-xuzhou-airport",
    "type": "place",
    "country": "cn",
    "city": "suining",
    "category": "transport",
    "subcategory": "airport",
    "name": "徐州观音国际机场",
    "description": "位于睢宁县的机场。它服务徐州，但不位于传统市中心。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-airport",
      "lat": 33.78,
      "lon": 117.554,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "venue-xuzhou-museum",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "museum",
    "name": "徐州博物馆",
    "description": "从馆藏与考古线索认识徐州历史，可与周边汉文化主题景点比较参观。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%BE%90%E5%B7%9E%E5%8D%9A%E7%89%A9%E9%A6%86",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-museum",
      "lat": 34.253,
      "lon": 117.18,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "venue-xuzhou-han-culture",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "landmark",
    "name": "徐州汉文化景区",
    "description": "以汉墓、汉兵马俑等汉代文化线索组织参观，票务和展区开放分别确认。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%BE%90%E5%B7%9E%E6%B1%89%E6%96%87%E5%8C%96%E6%99%AF%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-han-culture",
      "lat": 34.242,
      "lon": 117.231,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "venue-xuzhou-yunlong-lake",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "park",
    "name": "云龙湖",
    "description": "适合湖滨散步与看城市山水，环湖距离不短，按体力选择一段步行。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E4%BA%91%E9%BE%99%E6%B9%96",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-yunlong-lake",
      "lat": 34.242,
      "lon": 117.151,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "venue-xuzhou-yunlong-hill",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "park",
    "name": "云龙山",
    "description": "与云龙湖相邻但并非同一景点，可结合山林步行理解徐州的地形。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E4%BA%91%E9%BE%99%E5%B1%B1",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-yunlong-hill",
      "lat": 34.245,
      "lon": 117.18,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "venue-xuzhou-huaihai-memorial",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "museum",
    "name": "淮海战役纪念馆",
    "description": "通过展陈认识淮海战役与区域近现代历史，参观规则及开放时间查官方。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B7%AE%E6%B5%B7%E6%88%98%E5%BD%B9%E7%BA%AA%E5%BF%B5%E9%A6%86",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-huaihai-memorial",
      "lat": 34.239,
      "lon": 117.185,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "venue-xuzhou-huilongwo",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "other-places",
    "name": "回龙窝历史文化街区",
    "description": "从街巷、建筑与更新后的公共空间观察彭城生活。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%9B%9E%E9%BE%99%E7%AA%9D%E5%8E%86%E5%8F%B2%E6%96%87%E5%8C%96%E8%A1%97%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-huilongwo",
      "lat": 34.257,
      "lon": 117.19,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "venue-xuzhou-hubushan",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "places",
    "subcategory": "landmark",
    "name": "户部山",
    "description": "以历史街巷与古民居认识徐州城市生活，可与回龙窝安排同一片区步行。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%88%B7%E9%83%A8%E5%B1%B1",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-hubushan",
      "lat": 34.255,
      "lon": 117.186,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "landmark"
    }
  },
  {
    "id": "venue-xuzhou-suning-plaza",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "徐州苏宁广场",
    "description": "市中心的现代商业综合体线索，可与彭城广场周边街区一起规划。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-suning-plaza",
      "lat": 34.264,
      "lon": 117.186,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "venue-xuzhou-pengcheng-square",
    "type": "place",
    "country": "cn",
    "city": "xuzhou",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "彭城广场商圈",
    "description": "传统城市中心的商业与交通衔接区域，不代表其中每家店同时营业。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-xuzhou-pengcheng-square",
      "lat": 34.265,
      "lon": 117.184,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "food-xuzhou-diguoji",
    "type": "food",
    "country": "cn",
    "city": "xuzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "徐州地锅鸡",
    "description": "锅中炖鸡与贴饼组合，和普通炖鸡相比，多了饼吸收汤汁的口感。",
    "note": "锅底、辣度与分量因店而异，点单时问清适合几人分享。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%BE%90%E5%B7%9E%E5%9C%B0%E9%94%85%E9%B8%A1",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-xuzhou-lomo",
    "type": "food",
    "country": "cn",
    "city": "xuzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "烙馍与卷菜",
    "description": "薄烙馍卷入蔬菜或肉类，适合用主食口感比较徐州日常吃法。",
    "note": "烙馍不是所有卷饼的统一叫法；配菜与饼的厚薄会因店而异。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E7%83%99%E9%A6%8D%E4%B8%8E%E5%8D%B7%E8%8F%9C",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-xuzhou-satang",
    "type": "food",
    "country": "cn",
    "city": "xuzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "饣它汤 · 早餐热汤",
    "description": "常作为徐州早餐线索，与羊肉汤或普通粥品的原料和口感不同。",
    "note": "常见含小麦或其他谷物，具体肉汤原料与配料向商家确认。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E9%A5%A3%E5%AE%83%E6%B1%A4%20%C2%B7%20%E6%97%A9%E9%A4%90%E7%83%AD%E6%B1%A4",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-xuzhou-sha-tang",
    "type": "food",
    "country": "cn",
    "city": "xuzhou",
    "category": "food",
    "subcategory": "dishes",
    "name": "徐州辣汤与早餐搭配",
    "description": "可与煎包、油条等早餐搭配，先比较胡椒、辣度与汤的稠度。",
    "note": "不同店铺对汤名、用料与搭配的习惯可能不同，以菜单和店员说明为准。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%BE%90%E5%B7%9E%E8%BE%A3%E6%B1%A4%E4%B8%8E%E6%97%A9%E9%A4%90%E6%90%AD%E9%85%8D",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-xuzhou-mijian",
    "type": "food",
    "country": "cn",
    "city": "xuzhou",
    "category": "food",
    "subcategory": "desserts",
    "name": "蜜三刀",
    "description": "甜度和糖浆感鲜明的传统点心，可与苏式酥点比较口感。",
    "note": "常见于包括徐州在内的多地，不能只凭名称认定唯一产地；看标签与生产商。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%9C%9C%E4%B8%89%E5%88%80",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "fact-xuzhou-han",
    "type": "fact",
    "country": "cn",
    "city": "xuzhou",
    "category": "facts",
    "subcategory": "facts",
    "name": "徐州与彭城、汉文化",
    "description": "彭城是认识徐州历史的重要旧称。汉代墓葬、画像石与出土文物，让汉文化成为城市鲜明的探索线索。",
    "note": "彭城是徐州的重要历史旧称，但古代地名范围与今天的地级市边界并不完全相同。理解这里的汉文化，可以把楚汉之际的政治转折、西汉诸侯王的地方统治，以及墓葬所呈现的社会生活分开看。\n刘邦的故里线索在今沛县一带，不宜写成今天徐州市中心的某个街区。楚汉战争之后，西汉设置诸侯王国，彭城与楚国王室及其墓葬紧密相关。“楚王”在不同年代指不同人物，也不能直接把每座楚王墓都归给项羽。\n狮子山等墓葬遗存、兵马俑与画像石提供不同类型的证据：墓室结构显示营建与丧葬制度，随葬品呈现身份和生活想象，画像石则需要结合题材与出土背景解释。它们不是同一座墓、同一年或同一种用途的统一套装。\n建议先在徐州博物馆建立年代和器物概念，再看汉文化景区。实地分清原址遗迹、出土原物、移置陈列、复制品与场景复原；纪念公园中的现代雕像可以讲故事，但不能替代考古证据。汉文化之外，运河变迁与近现代交通同样塑造徐州，不能用一个朝代概括整座城市。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "person-xuzhou-liubang",
    "type": "person",
    "country": "cn",
    "city": "xuzhou",
    "category": "facts",
    "subcategory": "people",
    "name": "刘邦 · 沛县与汉文化线索",
    "description": "刘邦早年与沛县关系密切，可沿沛县相关纪念与徐州的汉文化展陈继续了解。",
    "note": "不同史料中的古代地名与今天行政边界不能简单等同；现代纪念场所不自动等于古代原址。",
    "sources": [
      [
        "https://www.xz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "venue-wuxi-station",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "station",
    "name": "无锡站",
    "description": "靠近传统市区的重要铁路车站，与无锡东站不同。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-wuxi-station",
      "lat": 31.588,
      "lon": 120.299,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "venue-wuxi-east-station",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "station",
    "name": "无锡东站",
    "description": "位于锡山区的重要高铁车站，需预留与古城、太湖景点间的接驳时间。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-wuxi-east-station",
      "lat": 31.597,
      "lon": 120.457,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "station"
    }
  },
  {
    "id": "venue-wuxi-airport",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "transport",
    "subcategory": "airport",
    "name": "苏南硕放国际机场",
    "description": "位于无锡的民航机场，也服务周边城市；按航站楼与后续目的地安排出行。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-wuxi-airport",
      "lat": 31.494,
      "lon": 120.429,
      "coordSystem": "wgs84",
      "group": "transport",
      "sub": "airport"
    }
  },
  {
    "id": "venue-wuxi-yuantouzhu",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "park",
    "name": "鼋头渚",
    "description": "从太湖湖滨、山水与季节花景认识无锡，赏花期及游船运行要单独确认。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E9%BC%8B%E5%A4%B4%E6%B8%9A",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-yuantouzhu",
      "lat": 31.52,
      "lon": 120.22,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "venue-wuxi-huishan",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "other-places",
    "name": "惠山古镇",
    "description": "以古镇街巷、祠堂与惠山周边景观认识城市历史。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%83%A0%E5%B1%B1%E5%8F%A4%E9%95%87",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-huishan",
      "lat": 31.578,
      "lon": 120.264,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "venue-wuxi-qingmingqiao",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "other-places",
    "name": "清名桥历史文化街区",
    "description": "沿运河和桥梁理解无锡的水岸生活，适合按一段步行路线安排。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B8%85%E5%90%8D%E6%A1%A5%E5%8E%86%E5%8F%B2%E6%96%87%E5%8C%96%E8%A1%97%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-qingmingqiao",
      "lat": 31.553,
      "lon": 120.308,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "venue-wuxi-museum",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "museum",
    "name": "无锡博物院",
    "description": "通过文物与城市相关展陈认识无锡，可结合市区行程安排参观。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%97%A0%E9%94%A1%E5%8D%9A%E7%89%A9%E9%99%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-museum",
      "lat": 31.553,
      "lon": 120.299,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "museum"
    }
  },
  {
    "id": "venue-wuxi-lingshan",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "temples",
    "name": "灵山胜境",
    "description": "太湖西侧的宗教与文化游览场所，与市中心及鼋头渚不是同一位置。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E7%81%B5%E5%B1%B1%E8%83%9C%E5%A2%83",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-lingshan",
      "lat": 31.425,
      "lon": 120.093,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "temples"
    }
  },
  {
    "id": "venue-wuxi-lihu",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "park",
    "name": "蠡湖",
    "description": "开放湖滨景观的探索线索，可按天气、体力和交通挑选一段步行。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%A0%A1%E6%B9%96",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-lihu",
      "lat": 31.531,
      "lon": 120.269,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "venue-wuxi-university",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "university",
    "name": "江南大学 · 蠡湖校区",
    "description": "了解无锡高等教育与校园建筑的线索，公众进入须按学校现行规定。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B1%9F%E5%8D%97%E5%A4%A7%E5%AD%A6%20%C2%B7%20%E8%A0%A1%E6%B9%96%E6%A0%A1%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-university",
      "lat": 31.489,
      "lon": 120.27,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "university"
    }
  },
  {
    "id": "venue-wuxi-grand-theatre",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "places",
    "subcategory": "theatre",
    "name": "无锡大剧院",
    "description": "蠡湖附近的文化演出场馆，剧目、入场与建筑参观安排需分别确认。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%97%A0%E9%94%A1%E5%A4%A7%E5%89%A7%E9%99%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-wuxi-grand-theatre",
      "lat": 31.519,
      "lon": 120.284,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "theatre"
    }
  },
  {
    "id": "venue-wuxi-henglong",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "无锡恒隆广场",
    "description": "市中心的现代商业综合体，适合与老城商圈安排购物和餐饮。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-wuxi-henglong",
      "lat": 31.575,
      "lon": 120.296,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "venue-wuxi-nanchansi",
    "type": "place",
    "country": "cn",
    "city": "wuxi",
    "category": "brands",
    "subcategory": "shopping-districts",
    "name": "南禅寺商圈",
    "description": "寺院周边的商业街区与运河步行线索，街区和寺院参观规则要分别看。",
    "note": "坐标为场所参考位置，不保证精确入口；预约、开放、车次与营业以官方为准。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ],
    "point": {
      "id": "venue-wuxi-nanchansi",
      "lat": 31.564,
      "lon": 120.307,
      "coordSystem": "wgs84",
      "group": "shopping",
      "sub": "shopping-districts"
    }
  },
  {
    "id": "food-wuxi-xiaolong",
    "type": "food",
    "country": "cn",
    "city": "wuxi",
    "category": "food",
    "subcategory": "dishes",
    "name": "无锡小笼包",
    "description": "常见口味带甜，汤汁与肉馅是比较线索；与生煎或普通包子的做法和口感不同。",
    "note": "小笼大小、甜度与汤汁温度因店而异，刚出笼时先小口试温。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%97%A0%E9%94%A1%E5%B0%8F%E7%AC%BC%E5%8C%85",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-wuxi-ribs",
    "type": "food",
    "country": "cn",
    "city": "wuxi",
    "category": "food",
    "subcategory": "meat",
    "name": "无锡酱排骨",
    "description": "甜咸浓郁的酱汁与排骨相结合，是认识锡帮风味的一道线索。",
    "note": "堂食菜与真空伴手礼在口感和保存条件上不同，购买礼盒请看配料和保质期。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%97%A0%E9%94%A1%E9%85%B1%E6%8E%92%E9%AA%A8",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-wuxi-gluten",
    "type": "food",
    "country": "cn",
    "city": "wuxi",
    "category": "food",
    "subcategory": "dishes",
    "name": "清水油面筋与面筋塞肉",
    "description": "油面筋可做汤或塞肉烹调；和未经油炸的普通面筋在口感上不同。",
    "note": "含小麦成分，素面筋与塞肉菜肴也不是同一种饮食选择。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B8%85%E6%B0%B4%E6%B2%B9%E9%9D%A2%E7%AD%8B%E4%B8%8E%E9%9D%A2%E7%AD%8B%E5%A1%9E%E8%82%89",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "food-wuxi-haitang",
    "type": "food",
    "country": "cn",
    "city": "wuxi",
    "category": "food",
    "subcategory": "desserts",
    "name": "无锡糕团与时令点心",
    "description": "可从玉兰饼、青团等地方小吃线索比较酥脆外皮、糯米口感和馅料。",
    "note": "部分小吃与多座江南城市共享，不视为无锡独有；时令与供应请按当地菜单。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%97%A0%E9%94%A1%E7%B3%95%E5%9B%A2%E4%B8%8E%E6%97%B6%E4%BB%A4%E7%82%B9%E5%BF%83",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "brand-wuxi-sanfengqiao",
    "type": "brand",
    "country": "cn",
    "city": "wuxi",
    "category": "brands",
    "subcategory": "consumer-brands",
    "name": "三凤桥 · 酱排骨品牌线索",
    "description": "无锡老字号品牌，可沿酱排骨与熟食包装认识当地日常消费和伴手礼。",
    "note": "品牌卡没有固定门店地址；到店、真空包装与邮寄产品的保存条件分别核对。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "fact-wuxi-taihu",
    "type": "fact",
    "country": "cn",
    "city": "wuxi",
    "category": "facts",
    "subcategory": "facts",
    "name": "无锡不只有市中心的一片太湖",
    "description": "太湖湖岸与运河共同塑造无锡。无锡还代管江阴、宜兴，两座县级市各有独立的交通与游览安排。",
    "note": "无锡的水系至少可以分成太湖、运河及城市内部河道几个层次。太湖与区域渔业、农业和游览有关；运河把粮食、原料与商品接入更大的流通网络，不能把“临太湖”当作所有工商业发展的唯一原因。\n明清以来，无锡是江南重要的米市与商贸节点。到近代，缫丝、棉纺、面粉等工业在交通、市场、资本和技术共同作用下发展，荣氏等实业家的经历也是认识这座城市的重要入口。“小上海”是一种城市发展比喻，不是正式行政称号。\n沿清名桥和古运河，可以把桥梁、河埠、商铺、居住区与近代产业遗存放在一起看；惠山古镇则可联系祠堂、地方家族和手工业。博物院中的文物与近代城市史展示，能帮助比较不同地点的年代与功能。\n今天的鼋头渚、蠡湖等风景也包含近现代园林和公共空间建设的层次，不是从古代完整不变地保存至今。江阴、宜兴属于无锡代管的县级市，却各有自身的历史与产业线索；全市概览汇总这些目的地，不代表它们都在同一片市区湖岸。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "person-wuxi-a-bing",
    "type": "person",
    "country": "cn",
    "city": "wuxi",
    "category": "facts",
    "subcategory": "people",
    "name": "阿炳 · 无锡与二泉映月",
    "description": "民间音乐家华彦钧，艺名阿炳，与无锡及《二泉映月》有紧密联系。",
    "note": "音乐作品中的意象与可参观地点并非一一对应；展览和纪念场所开放应另查官方。",
    "sources": [
      [
        "https://www.wuxi.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "venue-kunshan-highlight",
    "type": "place",
    "country": "cn",
    "city": "kunshan",
    "category": "places",
    "subcategory": "other-places",
    "name": "周庄古镇",
    "description": "位于昆山的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.ks.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%91%A8%E5%BA%84%E5%8F%A4%E9%95%87",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-kunshan-highlight",
      "lat": 31.114,
      "lon": 120.845,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "local-kunshan-culture",
    "type": "food",
    "country": "cn",
    "city": "kunshan",
    "category": "food",
    "subcategory": "dishes",
    "name": "奥灶面",
    "description": "红汤与白汤、不同浇头都值得分别比较；奥灶面与昆山联系紧密，不能把所有苏式面都叫奥灶面。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.ks.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%A5%A5%E7%81%B6%E9%9D%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "tip-kunshan-access",
    "type": "tip",
    "country": "cn",
    "city": "kunshan",
    "category": "transport",
    "subcategory": "tickets",
    "name": "昆山 · 县级目的地接驳",
    "description": "这里属于江苏省苏州市下辖的县级市；从苏州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.ks.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-changshu-highlight",
    "type": "place",
    "country": "cn",
    "city": "changshu",
    "category": "places",
    "subcategory": "park",
    "name": "虞山",
    "description": "位于常熟的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.changshu.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%99%9E%E5%B1%B1",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-changshu-highlight",
      "lat": 31.663,
      "lon": 120.721,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-changshu-culture",
    "type": "food",
    "country": "cn",
    "city": "changshu",
    "category": "food",
    "subcategory": "dishes",
    "name": "常熟蕈油面",
    "description": "蕈类风味与面汤组合是认识当地面食的线索，蕈类原料、时令与供应因店而异。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.changshu.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%B8%B8%E7%86%9F%E8%95%88%E6%B2%B9%E9%9D%A2",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "tip-changshu-access",
    "type": "tip",
    "country": "cn",
    "city": "changshu",
    "category": "transport",
    "subcategory": "tickets",
    "name": "常熟 · 县级目的地接驳",
    "description": "这里属于江苏省苏州市下辖的县级市；从苏州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.changshu.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-zhangjiagang-highlight",
    "type": "place",
    "country": "cn",
    "city": "zhangjiagang",
    "category": "places",
    "subcategory": "park",
    "name": "香山景区",
    "description": "位于张家港的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.zjg.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E9%A6%99%E5%B1%B1%E6%99%AF%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-zhangjiagang-highlight",
      "lat": 31.857,
      "lon": 120.402,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-zhangjiagang-culture",
    "type": "fact",
    "country": "cn",
    "city": "zhangjiagang",
    "category": "facts",
    "subcategory": "facts",
    "name": "张家港 · 长江港城",
    "description": "张家港是苏州代管的县级市，临长江；港口与沿江生活比“苏州古城”的印象更能解释这里的地理。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.zjg.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-zhangjiagang-access",
    "type": "tip",
    "country": "cn",
    "city": "zhangjiagang",
    "category": "transport",
    "subcategory": "tickets",
    "name": "张家港 · 县级目的地接驳",
    "description": "这里属于江苏省苏州市下辖的县级市；从苏州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.zjg.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-taicang-highlight",
    "type": "place",
    "country": "cn",
    "city": "taicang",
    "category": "places",
    "subcategory": "other-places",
    "name": "沙溪古镇",
    "description": "位于太仓的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.taicang.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-taicang-highlight",
      "lat": 31.569,
      "lon": 121.038,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "local-taicang-culture",
    "type": "specialty",
    "country": "cn",
    "city": "taicang",
    "category": "food",
    "subcategory": "gifts",
    "name": "太仓肉松",
    "description": "比较原料、口感、配料与包装；即食零食和礼盒的保存、开封条件应按标签确认。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.taicang.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-taicang-access",
    "type": "tip",
    "country": "cn",
    "city": "taicang",
    "category": "transport",
    "subcategory": "tickets",
    "name": "太仓 · 县级目的地接驳",
    "description": "这里属于江苏省苏州市下辖的县级市；从苏州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.taicang.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-jiangyin-highlight",
    "type": "place",
    "country": "cn",
    "city": "jiangyin",
    "category": "places",
    "subcategory": "park",
    "name": "鹅鼻嘴公园",
    "description": "位于江阴的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.jiangyin.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E9%B9%85%E9%BC%BB%E5%98%B4%E5%85%AC%E5%9B%AD",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-jiangyin-highlight",
      "lat": 31.944,
      "lon": 120.292,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-jiangyin-culture",
    "type": "food",
    "country": "cn",
    "city": "jiangyin",
    "category": "food",
    "subcategory": "desserts",
    "name": "江阴马蹄酥",
    "description": "以酥香口感认识江阴的传统糕点；它的名称与外形有关，选购时看馅料、配料和生产日期。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.jiangyin.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B1%9F%E9%98%B4%E9%A9%AC%E8%B9%84%E9%85%A5",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "tip-jiangyin-access",
    "type": "tip",
    "country": "cn",
    "city": "jiangyin",
    "category": "transport",
    "subcategory": "tickets",
    "name": "江阴 · 县级目的地接驳",
    "description": "这里属于江苏省无锡市下辖的县级市；从无锡市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.jiangyin.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-yixing-highlight",
    "type": "place",
    "country": "cn",
    "city": "yixing",
    "category": "places",
    "subcategory": "park",
    "name": "宜兴竹海",
    "description": "位于宜兴的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.yixing.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E5%AE%9C%E5%85%B4%E7%AB%B9%E6%B5%B7",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-yixing-highlight",
      "lat": 31.178,
      "lon": 119.71,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-yixing-culture",
    "type": "tip",
    "country": "cn",
    "city": "yixing",
    "category": "brands",
    "subcategory": "shopping-tips",
    "name": "宜兴紫砂 · 看泥料与工艺",
    "description": "紫砂壶与宜兴丁蜀的制陶传统联系紧密；先比较用途、做工、材质说明和预算，不把价格或作者印章直接当作真伪保证。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.yixing.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-yixing-access",
    "type": "tip",
    "country": "cn",
    "city": "yixing",
    "category": "transport",
    "subcategory": "tickets",
    "name": "宜兴 · 县级目的地接驳",
    "description": "这里属于江苏省无锡市下辖的县级市；从无锡市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.yixing.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-fengxian-highlight",
    "type": "place",
    "country": "cn",
    "city": "fengxian",
    "category": "places",
    "subcategory": "museum",
    "name": "丰县博物馆",
    "description": "位于丰县的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "暂不提供固定地图坐标；参观馆址、开放与预约请通过当地官方信息核对。",
    "sources": [
      [
        "https://www.chinafx.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E4%B8%B0%E5%8E%BF%E5%8D%9A%E7%89%A9%E9%A6%86",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ]
  },
  {
    "id": "local-fengxian-culture",
    "type": "specialty",
    "country": "cn",
    "city": "fengxian",
    "category": "food",
    "subcategory": "gifts",
    "name": "丰县 · 梨与苹果的产地线索",
    "description": "可从当地果品认识丰县农业；鲜果的品种、上市时间与品质以当季商家和官方产区信息为准。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.chinafx.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-fengxian-access",
    "type": "tip",
    "country": "cn",
    "city": "fengxian",
    "category": "transport",
    "subcategory": "tickets",
    "name": "丰县 · 县级目的地接驳",
    "description": "这里属于江苏省徐州市下辖的县；从徐州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.chinafx.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-peixian-highlight",
    "type": "place",
    "country": "cn",
    "city": "peixian",
    "category": "places",
    "subcategory": "park",
    "name": "沛县汉城公园",
    "description": "位于沛县的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.px.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B2%9B%E5%8E%BF%E6%B1%89%E5%9F%8E%E5%85%AC%E5%9B%AD",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-peixian-highlight",
      "lat": 34.73,
      "lon": 116.93,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-peixian-culture",
    "type": "fact",
    "country": "cn",
    "city": "peixian",
    "category": "facts",
    "subcategory": "facts",
    "name": "沛县 · 刘邦与汉文化记忆",
    "description": "沛县常以刘邦相关历史和汉文化记忆作为认识线索。历史叙事与现代纪念建筑要分开理解，不把复建景观直接当成汉代原物。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.px.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-peixian-access",
    "type": "tip",
    "country": "cn",
    "city": "peixian",
    "category": "transport",
    "subcategory": "tickets",
    "name": "沛县 · 县级目的地接驳",
    "description": "这里属于江苏省徐州市下辖的县；从徐州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.px.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-suining-highlight",
    "type": "place",
    "country": "cn",
    "city": "suining",
    "category": "places",
    "subcategory": "temples",
    "name": "水月禅寺",
    "description": "位于睢宁的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.cnsn.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E6%B0%B4%E6%9C%88%E7%A6%85%E5%AF%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-suining-highlight",
      "lat": 33.905,
      "lon": 117.954,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "temples"
    }
  },
  {
    "id": "local-suining-culture",
    "type": "fact",
    "country": "cn",
    "city": "suining",
    "category": "facts",
    "subcategory": "facts",
    "name": "睢宁 · 儿童画文化",
    "description": "睢宁以儿童画文化形成鲜明的地方艺术线索。具体展览、公共文化活动与可参观场馆应按当地最新安排查询。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.cnsn.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-suining-access",
    "type": "tip",
    "country": "cn",
    "city": "suining",
    "category": "transport",
    "subcategory": "tickets",
    "name": "睢宁 · 县级目的地接驳",
    "description": "这里属于江苏省徐州市下辖的县；从徐州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.cnsn.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-xinyi-highlight",
    "type": "place",
    "country": "cn",
    "city": "xinyi",
    "category": "places",
    "subcategory": "other-places",
    "name": "窑湾古镇",
    "description": "位于新沂的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.xy.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E7%AA%91%E6%B9%BE%E5%8F%A4%E9%95%87",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-xinyi-highlight",
      "lat": 34.185,
      "lon": 118.112,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "other-places"
    }
  },
  {
    "id": "local-xinyi-culture",
    "type": "fact",
    "country": "cn",
    "city": "xinyi",
    "category": "facts",
    "subcategory": "facts",
    "name": "新沂 · 窑湾与运河商贸",
    "description": "窑湾古镇可作为认识运河商贸与水陆交通的线索；它属于徐州代管的新沂市，与徐州市区并不是同一段步行行程。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.xy.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-xinyi-access",
    "type": "tip",
    "country": "cn",
    "city": "xinyi",
    "category": "transport",
    "subcategory": "tickets",
    "name": "新沂 · 县级目的地接驳",
    "description": "这里属于江苏省徐州市下辖的县级市；从徐州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.xy.gov.cn/",
        "本地官方服务入口"
      ]
    ]
  },
  {
    "id": "venue-pizhou-highlight",
    "type": "place",
    "country": "cn",
    "city": "pizhou",
    "category": "places",
    "subcategory": "park",
    "name": "艾山风景名胜区",
    "description": "位于邳州的已收录游览线索，可与本地特产、历史或自然景观一起安排。",
    "note": "坐标为场所参考位置，开放、入口与票务请从当地官方信息核对。",
    "sources": [
      [
        "https://www.pz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ],
      [
        "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=%E8%89%BE%E5%B1%B1%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA",
        "图片参考 · Wikimedia Commons 检索"
      ]
    ],
    "point": {
      "id": "venue-pizhou-highlight",
      "lat": 34.523,
      "lon": 117.93,
      "coordSystem": "wgs84",
      "group": "landmarks",
      "sub": "park"
    }
  },
  {
    "id": "local-pizhou-culture",
    "type": "fact",
    "country": "cn",
    "city": "pizhou",
    "category": "facts",
    "subcategory": "facts",
    "name": "邳州 · 银杏与秋季乡村",
    "description": "银杏景观是认识邳州的一条季节线索，叶色受气温与天气影响。不要把固定某一天当成每年都适用的最佳观赏日期。",
    "note": "该卡介绍当地文化或物产，不继承关联地点的坐标；具体供应、展览或销售按官方和商家信息核对。",
    "sources": [
      [
        "https://www.pz.gov.cn/",
        "地方政府 · 城市与文旅信息入口"
      ]
    ]
  },
  {
    "id": "tip-pizhou-access",
    "type": "tip",
    "country": "cn",
    "city": "pizhou",
    "category": "transport",
    "subcategory": "tickets",
    "name": "邳州 · 县级目的地接驳",
    "description": "这里属于江苏省徐州市下辖的县级市；从徐州市区出发需按实际位置另查铁路、公路或公交接驳。",
    "note": "铁路与客运并非每个景点门口都有站。先确认实际站名和到景点的距离，再安排返程；不默认地级市的市区地铁票可覆盖此地。",
    "sources": [
      [
        "https://www.12306.cn/",
        "铁路 12306"
      ],
      [
        "https://www.pz.gov.cn/",
        "本地官方服务入口"
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
  ],
  [
    "local-kunshan-culture",
    "venue-kunshan-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-kunshan-access",
    "venue-kunshan-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-changshu-culture",
    "venue-changshu-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-changshu-access",
    "venue-changshu-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-zhangjiagang-culture",
    "venue-zhangjiagang-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-zhangjiagang-access",
    "venue-zhangjiagang-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-taicang-culture",
    "venue-taicang-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-taicang-access",
    "venue-taicang-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-jiangyin-culture",
    "venue-jiangyin-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-jiangyin-access",
    "venue-jiangyin-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-yixing-culture",
    "venue-yixing-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-yixing-access",
    "venue-yixing-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-fengxian-culture",
    "venue-fengxian-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-fengxian-access",
    "venue-fengxian-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-peixian-culture",
    "venue-peixian-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-peixian-access",
    "venue-peixian-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-suining-culture",
    "venue-suining-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-suining-access",
    "venue-suining-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-xinyi-culture",
    "venue-xinyi-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-xinyi-access",
    "venue-xinyi-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "local-pizhou-culture",
    "venue-pizhou-highlight",
    "结合本地地点探索",
    "认识本地生活与文化"
  ],
  [
    "tip-pizhou-access",
    "venue-pizhou-highlight",
    "规划实际目的地接驳",
    "交通与行政归属"
  ],
  [
    "food-xuzhou-diguoji",
    "venue-xuzhou-huilongwo",
    "探索古城街区（供应另查）",
    "认识徐州风味"
  ],
  [
    "fact-xuzhou-han",
    "venue-xuzhou-han-culture",
    "看汉文化景区",
    "历史背景"
  ],
  [
    "fact-xuzhou-han",
    "venue-xuzhou-museum",
    "看博物馆展陈",
    "认识汉文化"
  ],
  [
    "person-xuzhou-liubang",
    "local-peixian-culture",
    "去沛县了解汉文化线索",
    "认识相关人物"
  ],
  [
    "food-wuxi-ribs",
    "brand-wuxi-sanfengqiao",
    "认识地方品牌",
    "认识无锡酱排骨"
  ],
  [
    "fact-wuxi-taihu",
    "venue-wuxi-yuantouzhu",
    "看太湖湖岸",
    "认识城市水系"
  ],
  [
    "fact-wuxi-taihu",
    "local-yixing-culture",
    "认识下辖宜兴",
    "回看无锡全市背景"
  ],
  [
    "person-wuxi-a-bing",
    "venue-wuxi-huishan",
    "结合城市文化探索",
    "相关音乐人物"
  ]
];

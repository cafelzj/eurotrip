const travelBrands = [
  {
    "id": "otp",
    "country": "hu",
    "name": "OTP Bank",
    "kind": "银行与金融",
    "origin": "匈牙利",
    "base": "总部关联：布达佩斯",
    "description": "匈牙利起源的银行集团，在中东欧多国开展金融服务。旅行中可能在 ATM 和银行网点看到。",
    "url": "https://www.otpbank.hu/",
    "cities": [
      "budapest"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "mol",
    "country": "hu",
    "name": "MOL Group",
    "kind": "能源",
    "origin": "匈牙利",
    "base": "总部关联：布达佩斯",
    "description": "匈牙利起源的综合能源企业，业务涉及炼化、燃油零售等。加油站品牌与总部办公楼是不同的地点类型。",
    "url": "https://molgroup.info/en/",
    "cities": [
      "budapest"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "richter",
    "country": "hu",
    "name": "Gedeon Richter",
    "kind": "医药",
    "origin": "匈牙利",
    "base": "总部关联：布达佩斯",
    "description": "匈牙利起源的大型制药企业。这里介绍产业与城市关系，不提供用药建议或药品购买推荐。",
    "url": "https://www.gedeonrichter.com/en/",
    "cities": [
      "budapest"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "pottyos",
    "country": "hu",
    "name": "Pöttyös",
    "kind": "冷藏乳制零食",
    "origin": "匈牙利市场品牌",
    "base": "与匈牙利乳制品消费文化有关；并非以独立本土所有权作分类",
    "description": "以 Túró Rudi 等产品著称，是认识匈牙利日常零食的入口。品牌属于跨国乳企体系，品牌传统与当前所有权要分开看。",
    "url": "https://www.pottyos.hu/",
    "cities": [],
    "local": true,
    "aliases": [
      "Túró Rudi",
      "波点"
    ]
  },
  {
    "id": "sport",
    "country": "hu",
    "name": "Sport szelet",
    "kind": "巧克力零食",
    "origin": "匈牙利市场品牌",
    "base": "品牌历史与匈牙利市场相关；当前企业归属请查品牌/集团资料",
    "description": "朗姆风味巧克力棒的经典品牌之一，不因当地传统就自动等同于独立匈牙利企业。",
    "url": "https://www.sportszelet.hu/",
    "cities": [],
    "local": true,
    "aliases": [
      "Sport"
    ]
  },
  {
    "id": "balaton",
    "country": "hu",
    "name": "Balaton",
    "kind": "威化零食",
    "origin": "匈牙利市场品牌",
    "base": "品牌名关联巴拉顿；名称不等于所有产品都在湖区生产",
    "description": "匈牙利市场常见的巧克力威化品牌，购买时仍要看具体包装的制造商、产地与配料。",
    "url": "https://cerbona.hu/",
    "cities": [],
    "local": true,
    "aliases": [
      "Balaton szelet"
    ]
  },
  {
    "id": "szentkiralyi",
    "country": "hu",
    "name": "Szentkirályi",
    "kind": "矿泉水",
    "origin": "匈牙利",
    "base": "品牌与 Szentkirály 地名及水源联系有关",
    "description": "匈牙利市场的瓶装水品牌之一。品牌名与气泡强弱不是一回事，要看具体瓶身标签。",
    "url": "https://www.szentkiralyi.hu/",
    "cities": [],
    "local": true,
    "aliases": [
      "Szentkiralyi"
    ]
  },
  {
    "id": "hell",
    "country": "hu",
    "name": "HELL Energy",
    "kind": "饮料",
    "origin": "匈牙利",
    "base": "品牌与匈牙利有起源及生产联系；不作为门店或总部定位",
    "description": "能量饮料品牌，旅行时可用来认识当地饮料货架；产品规格、咖啡因与糖分以包装为准。",
    "url": "https://www.hellenergy.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "HELL"
    ]
  },
  {
    "id": "marka",
    "country": "hu",
    "name": "Márka",
    "kind": "汽水与果味饮料",
    "origin": "匈牙利",
    "base": "匈牙利市场的本土饮料品牌传统",
    "description": "以果味饮料等为人熟悉；不同系列的果汁含量、糖分和是否含气需要分别看标签。",
    "url": "https://markaudito.hu/",
    "cities": [],
    "local": true,
    "aliases": [
      "Marka"
    ]
  },
  {
    "id": "univer",
    "country": "hu",
    "name": "Univer",
    "kind": "食品与调味料",
    "origin": "匈牙利",
    "base": "产地/产业关联：凯奇凯梅特地区，本站未收录该城市",
    "description": "以红椒酱等调味品为旅行者提供认识匈牙利家庭厨房的入口，不只是高价伴手礼。",
    "url": "https://www.univer.hu/en",
    "cities": [],
    "local": true,
    "aliases": [
      "Erős Pista"
    ]
  },
  {
    "id": "pick",
    "country": "hu",
    "name": "PICK",
    "kind": "肉制品",
    "origin": "匈牙利",
    "base": "品牌和生产历史关联：塞格德",
    "description": "以熟成萨拉米等产品闻名。品牌、具体品类和配方要分别看，不能把所有香肠都当作同一产品。",
    "url": "https://www.pick.hu/en/",
    "cities": [
      "szeged"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "omv",
    "country": "at",
    "name": "OMV",
    "kind": "能源与化工",
    "origin": "奥地利",
    "base": "总部关联：维也纳",
    "description": "奥地利起源的大型能源与化工企业，旅行中可在加油站看到其品牌。",
    "url": "https://www.omv.com/en",
    "cities": [
      "vienna"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "voestalpine",
    "country": "at",
    "name": "voestalpine",
    "kind": "钢铁与工业技术",
    "origin": "奥地利",
    "base": "总部关联：林茨；林茨尚未收录",
    "description": "奥地利的重要工业企业，业务包括钢铁与工业技术。它的总部不在维也纳。",
    "url": "https://www.voestalpine.com/group/en/",
    "cities": [],
    "local": true,
    "aliases": []
  },
  {
    "id": "swarovski",
    "country": "at",
    "name": "Swarovski",
    "kind": "水晶与设计",
    "origin": "奥地利蒂罗尔起源",
    "base": "历史与生产联系地：瓦滕斯；集团业务和法人架构跨国",
    "description": "由水晶切割与设计发展起来的品牌。品牌起源、游客体验场所与不同法人的所在地不应混为一谈。",
    "url": "https://www.swarovski.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "施华洛世奇"
    ]
  },
  {
    "id": "manner",
    "country": "at",
    "name": "Manner",
    "kind": "威化与糖果",
    "origin": "奥地利",
    "base": "品牌与企业总部关联：维也纳",
    "description": "维也纳起源的威化与糖果品牌，粉色包装是容易辨识的货架线索。",
    "url": "https://www.manner.com/",
    "cities": [
      "vienna"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "almdudler",
    "country": "at",
    "name": "Almdudler",
    "kind": "草本汽水",
    "origin": "奥地利",
    "base": "品牌起源与总部关联：维也纳",
    "description": "奥地利的草本风味汽水品牌，风味与普通柠檬汽水不同。",
    "url": "https://almdudler.com/",
    "cities": [
      "vienna"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "redbull",
    "country": "at",
    "name": "Red Bull",
    "kind": "能量饮料与媒体",
    "origin": "奥地利品牌；有泰国饮料渊源",
    "base": "总部联系地：滨湖富施尔（萨尔茨堡州），不是萨尔茨堡市内",
    "description": "现代 Red Bull 品牌与奥地利企业发展有关，也有泰国饮料渊源；不要简化成全部产品最初都在奥地利发明。",
    "url": "https://www.redbull.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "红牛"
    ]
  },
  {
    "id": "rauch",
    "country": "at",
    "name": "RAUCH",
    "kind": "果汁与饮料",
    "origin": "奥地利",
    "base": "总部关联：Rankweil，福拉尔贝格州；本站未收录",
    "description": "奥地利起源的饮料企业，Bravo 等饮料可作为认识果汁货架的入口。",
    "url": "https://www.rauch.cc/",
    "cities": [],
    "local": true,
    "aliases": [
      "Rauch",
      "Bravo"
    ]
  },
  {
    "id": "pez",
    "country": "at",
    "name": "PEZ",
    "kind": "糖果",
    "origin": "奥地利",
    "base": "品牌起源于维也纳；企业联系地包括上奥地利 Traun",
    "description": "糖果与分配器共同形成的品牌形象容易辨识；购买时可把糖果本身与收藏型包装分开比较。",
    "url": "https://www.pez.com/",
    "cities": [
      "vienna"
    ],
    "local": true,
    "aliases": []
  },
  {
    "id": "kellys",
    "country": "at",
    "name": "Kelly’s",
    "kind": "咸味零食",
    "origin": "奥地利市场品牌",
    "base": "品牌与奥地利消费文化相关；现属跨国零食企业体系",
    "description": "薯片和咸味零食品牌。历史起源、销售市场和当前集团所有权是不同维度。",
    "url": "https://www.kellys.at/",
    "cities": [],
    "local": true,
    "aliases": [
      "Kelly's"
    ]
  },
  {
    "id": "bmw",
    "country": "de",
    "name": "BMW",
    "kind": "汽车与出行",
    "origin": "德国",
    "base": "总部关联：慕尼黑",
    "description": "德国汽车企业，可通过 BMW Welt 等对公众开放的品牌场所认识工业设计；总部办公室不等于旅游景点。",
    "url": "https://www.bmwgroup.com/en.html",
    "cities": [
      "munich"
    ],
    "local": true,
    "aliases": [
      "宝马"
    ]
  },
  {
    "id": "siemens",
    "country": "de",
    "name": "Siemens",
    "kind": "工业技术",
    "origin": "德国",
    "base": "慕尼黑有总部联系；柏林有起源与注册地联系",
    "description": "德国起源的工业技术企业。企业在多个城市的联系不同，不能把全部地点都称为总部。",
    "url": "https://www.siemens.com/",
    "cities": [
      "munich",
      "berlin"
    ],
    "local": true,
    "aliases": [
      "西门子"
    ]
  },
  {
    "id": "bosch",
    "country": "de",
    "name": "Bosch",
    "kind": "工业与消费技术",
    "origin": "德国",
    "base": "总部关联：格尔林根（斯图加特地区），不是慕尼黑；本站未收录",
    "description": "德国起源的技术企业，产品涉及出行、工业及消费技术等多个领域。",
    "url": "https://www.bosch.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "博世"
    ]
  },
  {
    "id": "sap",
    "country": "de",
    "name": "SAP",
    "kind": "企业软件",
    "origin": "德国",
    "base": "总部关联：瓦尔多夫；本站未收录",
    "description": "德国起源的企业软件公司，说明本地重要企业不只有汽车和传统制造业。",
    "url": "https://www.sap.com/",
    "cities": [],
    "local": true,
    "aliases": []
  },
  {
    "id": "adidas",
    "country": "de",
    "name": "adidas",
    "kind": "运动用品",
    "origin": "德国",
    "base": "总部关联：黑措根奥拉赫；本站未收录",
    "description": "德国起源的运动用品品牌，不能因为在慕尼黑常见就把总部标在慕尼黑。",
    "url": "https://www.adidas-group.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "阿迪达斯"
    ]
  },
  {
    "id": "haribo",
    "country": "de",
    "name": "HARIBO",
    "kind": "糖果",
    "origin": "德国",
    "base": "起源：波恩；总部联系地：Grafschaft，两地尚未收录",
    "description": "德国起源的糖果品牌，Goldbären 软糖是辨识度较高的产品之一。起源地与现在总部并不相同。",
    "url": "https://www.haribo.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "哈瑞宝"
    ]
  },
  {
    "id": "ritter",
    "country": "de",
    "name": "Ritter Sport",
    "kind": "巧克力",
    "origin": "德国",
    "base": "企业与生产联系地：Waldenbuch；本站未收录",
    "description": "以方形包装容易辨认的德国巧克力品牌，不同口味与含可可量差异明显。",
    "url": "https://www.ritter-sport.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "瑞特运动"
    ]
  },
  {
    "id": "leibniz",
    "country": "de",
    "name": "LEIBNIZ",
    "kind": "饼干",
    "origin": "德国",
    "base": "品牌历史关联：汉诺威；本站未收录",
    "description": "Bahlsen 旗下的饼干品牌；品牌名称与哲学家莱布尼茨有关，但不代表由他发明。",
    "url": "https://www.leibniz.com/",
    "cities": [],
    "local": true,
    "aliases": [
      "Leibniz"
    ]
  },
  {
    "id": "funnyfrisch",
    "country": "de",
    "name": "funny-frisch",
    "kind": "咸味零食",
    "origin": "德国市场品牌",
    "base": "德国市场的零食品牌，企业归属以对应集团资料为准",
    "description": "薯片等咸味零食的代表性货架品牌之一，不同口味的调味与配料差异很大。",
    "url": "https://www.funny-frisch.de/",
    "cities": [],
    "local": true,
    "aliases": [
      "Chipsfrisch"
    ]
  },
  {
    "id": "fritz",
    "country": "de",
    "name": "fritz-kola",
    "kind": "汽水",
    "origin": "德国",
    "base": "品牌起源关联：汉堡",
    "description": "汉堡起源的饮料品牌，可从可乐及其他饮料系列认识本地消费文化。",
    "url": "https://fritz-kola.com/",
    "cities": [
      "hamburg"
    ],
    "local": true,
    "aliases": [
      "fritz kola"
    ]
  },
  {
    "id": "clubmate",
    "country": "de",
    "name": "Club-Mate",
    "kind": "马黛茶饮料",
    "origin": "德国",
    "base": "生产者联系地：Münchsteinach，巴伐利亚；并非柏林起源",
    "description": "马黛茶风味含咖啡因饮料，在柏林等地的消费场景中常见，但不能据此说产地在柏林。",
    "url": "https://www.club-mate.de/",
    "cities": [],
    "local": true,
    "aliases": [
      "Club Mate"
    ]
  },
  {
    "id": "bionade",
    "country": "de",
    "name": "BIONADE",
    "kind": "发酵风味汽水",
    "origin": "德国",
    "base": "品牌起源/生产联系：Ostheim vor der Rhön；本站未收录",
    "description": "以发酵工艺与不同风味为识别线索的饮料品牌，具体配方及系列请看瓶身。",
    "url": "https://www.bionade.de/",
    "cities": [],
    "local": true,
    "aliases": [
      "Bionade"
    ]
  },
  {
    "id": "milka",
    "country": "de",
    "name": "Milka",
    "kind": "巧克力",
    "origin": "瑞士起源；德国市场常见",
    "base": "跨国食品集团品牌，并非德国本土起源企业",
    "description": "德国货架上常见的紫色包装品牌，但品牌起源与销售国不能画等号。这里作为当地日常购买文化的补充。",
    "url": "https://www.milka.com/",
    "cities": [],
    "local": false,
    "aliases": [
      "妙卡"
    ]
  },
  {
    "id": "lidl",
    "country": "de",
    "name": "Lidl",
    "kind": "超市零售",
    "origin": "德国",
    "base": "德国起源的零售品牌；不同业务法人的所在地以公司资料为准",
    "description": "Schwarz 集团旗下的折扣零售品牌，在本次三国旅行中都可能遇见。门店所在国不等于品牌起源国。",
    "url": "https://info.lidl/",
    "cities": [],
    "local": true,
    "aliases": [
      "利德尔"
    ]
  },
  {
    "id": "aldi",
    "country": "de",
    "name": "ALDI",
    "kind": "超市零售",
    "origin": "德国",
    "base": "ALDI Nord 与 ALDI Süd 为不同体系；总部关联分别为埃森与米尔海姆，本站均未收录",
    "description": "日常说的 ALDI 涵盖不同企业体系，不能把 ALDI Nord 与 ALDI Süd 当作同一家总部。奥地利 HOFER 属于 ALDI Süd 体系。",
    "url": "https://www.aldi-sued.de/",
    "otherSources": [
      [
        "https://www.aldi-nord.de/",
        "ALDI Nord 官方入口"
      ]
    ],
    "cities": [],
    "local": true,
    "aliases": [
      "奥乐齐"
    ]
  },
  {
    "id": "hofer",
    "country": "at",
    "name": "HOFER",
    "kind": "超市零售",
    "origin": "奥地利市场品牌；属 ALDI Süd 体系",
    "base": "总部关联：Sattledt，上奥地利；不是维也纳，本站未收录",
    "description": "在奥地利旅行常见的折扣超市品牌，与 ALDI Süd 体系有关；不因商标不同就完全没有企业联系。",
    "url": "https://www.hofer.at/",
    "cities": [],
    "local": true,
    "aliases": [
      "Hofer"
    ]
  },
  {
    "id": "sparat",
    "country": "at",
    "name": "SPAR Österreich",
    "kind": "超市零售",
    "origin": "奥地利企业主体；SPAR 国际品牌体系起源于荷兰",
    "base": "SPAR 奥地利企业总部关联：萨尔茨堡；不能把全球 SPAR 门店都当作同一法人",
    "description": "奥地利重要的零售企业主体，经营 SPAR、INTERSPAR 等业态。品牌标识、企业主体与具体门店运营关系需要分别理解。",
    "url": "https://www.spar.at/",
    "cities": [
      "salzburg"
    ],
    "local": true,
    "aliases": [
      "SPAR",
      "INTERSPAR"
    ]
  }
];
const everydayProducts = [
  {
    "id": "turo-rudi",
    "brand": "pottyos",
    "country": "hu",
    "name": "Pöttyös Túró Rudi",
    "foodType": "冷藏零食",
    "description": "巧克力外层包裹凝乳类内馅的小条状零食，是匈牙利日常食品的代表性入口。",
    "comparison": "比普通巧克力棒更有酸奶/凝乳的乳香与轻酸感；它不是常温巧克力。",
    "buying": "到超市冷藏乳制品区寻找，别只逛糖果货架。",
    "storage": "需按包装冷藏，不适合作为长途常温携带的伴手礼。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Turo%20Rudi&title=Special:MediaSearch&type=image",
    "word": "凝乳"
  },
  {
    "id": "sport-bar",
    "brand": "sport",
    "country": "hu",
    "name": "Sport szelet 巧克力棒",
    "foodType": "巧克力",
    "description": "匈牙利市场有历史的巧克力棒，经典款有朗姆风味。",
    "comparison": "比纯巧克力更突出甜馅和朗姆风味；不要仅凭风味名推断是否含酒精。",
    "buying": "超市糖果货架或收银区可以作为寻找入口，不保证每店有货。",
    "storage": "看具体配方、过敏原和保存温度。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Sport%20szelet&title=Special:MediaSearch&type=image",
    "word": "巧克力"
  },
  {
    "id": "balaton-wafer",
    "brand": "balaton",
    "country": "hu",
    "name": "Balaton 巧克力威化",
    "foodType": "威化",
    "description": "巧克力包裹的威化零食，适合认识匈牙利的日常甜食货架。",
    "comparison": "比实心巧克力更轻脆，但不代表糖或热量一定更低。",
    "buying": "先买小包装试味，按每100克单价比较大、小包装。",
    "storage": "留意乳制品、坚果等标识，天气热时避免融化。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Balaton%20wafer&title=Special:MediaSearch&type=image",
    "word": "巧克力"
  },
  {
    "id": "szent-water",
    "brand": "szentkiralyi",
    "country": "hu",
    "name": "Szentkirályi 矿泉水",
    "foodType": "瓶装水",
    "description": "匈牙利市场瓶装水品牌之一，有不同含气程度的产品。",
    "comparison": "品牌名不能说明带气与否；比较 szénsavas 与 szénsavmentes 等标签。",
    "buying": "超市、便利店等可作为寻找入口；别把同品牌所有瓶子当同一规格。",
    "storage": "看包装是否有押金标识和退瓶要求。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Szentkiralyi%20mineral%20water&title=Special:MediaSearch&type=image",
    "word": "水"
  },
  {
    "id": "hell-can",
    "brand": "hell",
    "country": "hu",
    "name": "HELL 能量饮料",
    "foodType": "含咖啡因饮料",
    "description": "匈牙利品牌的能量饮料，是当地饮料货架的一类代表。",
    "comparison": "与普通汽水相比要留意咖啡因标示；不同系列的糖和容量不同。",
    "buying": "按每升单价比较，促销不等于所有规格都便宜。",
    "storage": "查看咖啡因、糖分及瓶罐回收标志。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Hell%20energy%20drink&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "marka-soda",
    "brand": "marka",
    "country": "hu",
    "name": "Márka 果味饮料",
    "foodType": "果味饮料",
    "description": "匈牙利日常饮料品牌，可从不同果味系列认识当地口味。",
    "comparison": "果味饮料、果汁饮料与100%果汁不是同一概念。",
    "buying": "超市饮料货架是探索入口，按果汁含量、是否含气和单价挑选。",
    "storage": "具体配料、糖分及开启后保存方式看瓶身。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Marka%20soft%20drink&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "eros-pista",
    "brand": "univer",
    "country": "hu",
    "name": "Univer Erős Pista 红椒酱",
    "foodType": "日常调味料",
    "description": "辣味红椒调味酱，可帮助理解匈牙利餐桌的红椒风味。",
    "comparison": "不同于甜红椒粉；这一产品以辣和咸味为特点，用量可先少一点。",
    "buying": "看超市调味品货架；挑小罐试味，不必把所有特产都在景区购买。",
    "storage": "玻璃瓶易碎；查看开启后冷藏要求及行李规定。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Eros%20Pista&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "manner-wafer",
    "brand": "manner",
    "country": "at",
    "name": "Manner Neapolitaner 威化",
    "foodType": "威化",
    "description": "粉色包装的榛子夹心威化，是奥地利日常甜食的代表性选择之一。",
    "comparison": "与莫扎特巧克力球相比更轻脆，包装和规格选择多；并不需要买礼盒。",
    "buying": "超市与品牌门店都可作为入口，比较普通包装和纪念包装的单价。",
    "storage": "含坚果等过敏原，具体配料看包装。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Manner%20wafers&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "almdudler-soda",
    "brand": "almdudler",
    "country": "at",
    "name": "Almdudler 草本汽水",
    "foodType": "汽水",
    "description": "奥地利的草本风味碳酸饮料，玻璃瓶形象容易辨认。",
    "comparison": "与普通柠檬汽水相比有不同的草本香气；不同版本糖分不同。",
    "buying": "在超市或餐馆可寻找品牌；购买瓶装时留意容量与押金。",
    "storage": "确认是否含气、是否无糖及退瓶标识。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Almdudler&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "redbull-can",
    "brand": "redbull",
    "country": "at",
    "name": "Red Bull 能量饮料",
    "foodType": "含咖啡因饮料",
    "description": "奥地利企业发展出的国际饮料品牌，可作为本地企业故事与消费文化的连接。",
    "comparison": "不把它当廉价汽水：比较每升单价，并留意咖啡因与糖分。",
    "buying": "超市、小卖店和加油站价格可能不同，先比较相同容量。",
    "storage": "具体咖啡因、配方和瓶罐回收说明看包装。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Red%20Bull%20can&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "rauch-bravo",
    "brand": "rauch",
    "country": "at",
    "name": "RAUCH Bravo 果味饮料",
    "foodType": "果味饮料",
    "description": "RAUCH 旗下饮料系列，是认识奥地利饮料企业的日常入口。",
    "comparison": "不同口味与系列的果汁含量可能不同，不要默认都是100%果汁。",
    "buying": "超市饮料区按标签与每升单价挑选。",
    "storage": "包装材质和开启后冷藏要求可能不同。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Rauch%20Bravo&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "pez-candy",
    "brand": "pez",
    "country": "at",
    "name": "PEZ 糖果",
    "foodType": "糖果",
    "description": "糖果与可补充的分配器组合，有日常食品与收藏包装两种购买角度。",
    "comparison": "单买补充糖与买造型分配器的价格结构不同，不要只比较包装大小。",
    "buying": "超市糖果区和品牌渠道可作为寻找入口。",
    "storage": "看年龄、配料及包装提示；外观主题不代表口味相同。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Pez%20candy&title=Special:MediaSearch&type=image",
    "word": "糖"
  },
  {
    "id": "kellys-chips",
    "brand": "kellys",
    "country": "at",
    "name": "Kelly’s 薯片",
    "foodType": "咸味零食",
    "description": "奥地利市场的咸味零食品牌之一，是比高价礼盒更日常的选择。",
    "comparison": "不同口味的盐、香料及过敏原不同；大袋并不一定更划算。",
    "buying": "超市零食区按每100克单价比较。",
    "storage": "薯片易碎，保存与配料以包装为准。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Kelly%20chips&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "haribo-goldbaren",
    "brand": "haribo",
    "country": "de",
    "name": "HARIBO Goldbären 小熊软糖",
    "foodType": "糖果",
    "description": "德国起源的软糖品牌代表产品，适合从普通超市零食认识品牌文化。",
    "comparison": "普通款、素食款等配方可能不同，不能假设所有软糖都不含明胶。",
    "buying": "在超市糖果区寻找，先买小袋；旅游礼盒不是唯一选择。",
    "storage": "看明胶来源、配料和口味版本。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Haribo%20Goldbaren&title=Special:MediaSearch&type=image",
    "word": "糖"
  },
  {
    "id": "ritter-chocolate",
    "brand": "ritter",
    "country": "de",
    "name": "Ritter Sport 方形巧克力",
    "foodType": "巧克力",
    "description": "方形包装容易辨认，口味从牛奶巧克力到坚果等多种变化。",
    "comparison": "与Milka等品牌可比较可可含量、甜度与夹心，而不只看外包装。",
    "buying": "超市巧克力区比较每100克单价；不同口味价格可能不同。",
    "storage": "含坚果、乳制品等的版本需查看配料；避免高温。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Ritter%20Sport&title=Special:MediaSearch&type=image",
    "word": "巧克力"
  },
  {
    "id": "leibniz-biscuit",
    "brand": "leibniz",
    "country": "de",
    "name": "LEIBNIZ Butterkeks 黄油饼干",
    "foodType": "饼干",
    "description": "德国日常饼干品牌的代表产品之一，普通包装也可以作为平价尝鲜。",
    "comparison": "比巧克力夹心饼干更偏朴素黄油风味；系列不同配方也不同。",
    "buying": "在饼干货架寻找，比较原味、小包装与组合装的单价。",
    "storage": "留意小麦、乳制品等过敏原和保存方式。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Leibniz%20Butterkeks&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "chipsfrisch",
    "brand": "funnyfrisch",
    "country": "de",
    "name": "funny-frisch Chipsfrisch 薯片",
    "foodType": "咸味零食",
    "description": "德国市场的常见薯片品牌系列，可用来比较当地偏好的调味风格。",
    "comparison": "同系列的不同味型可能相差很大，别把红椒风味直接理解为很辣。",
    "buying": "从普通超市零食区寻找，不保证每家店每种口味都有。",
    "storage": "看调味配料、盐分和包装保存说明。",
    "image": "https://commons.wikimedia.org/w/index.php?search=funny%20frisch%20chips&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "fritz-kola",
    "brand": "fritz",
    "country": "de",
    "name": "fritz-kola 可乐",
    "foodType": "含咖啡因饮料",
    "description": "与汉堡品牌故事相连的可乐产品，是德国饮料货架的一个入口。",
    "comparison": "与普通汽水比较时留意咖啡因标示、糖分和容量；不同系列不可混作一款。",
    "buying": "超市、饮料店或餐饮渠道可寻找；不同城市覆盖不同。",
    "storage": "玻璃瓶可能涉及押金，具体看包装。",
    "image": "https://commons.wikimedia.org/w/index.php?search=fritz%20kola&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "club-mate",
    "brand": "clubmate",
    "country": "de",
    "name": "Club-Mate 马黛茶饮料",
    "foodType": "含咖啡因饮料",
    "description": "马黛茶风味含咖啡因饮料，在柏林等地有鲜明消费文化联系。",
    "comparison": "与可乐相比茶味和风味不同；“在柏林流行”不代表产地在柏林。",
    "buying": "超市或饮料店可作为寻找入口，不能保证附近每家都售卖。",
    "storage": "看咖啡因、糖分和退瓶标识。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Club%20Mate&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "bionade",
    "brand": "bionade",
    "country": "de",
    "name": "BIONADE 风味汽水",
    "foodType": "汽水",
    "description": "德国起源的饮料品牌，有多种风味系列。",
    "comparison": "发酵工艺或品牌定位不等于无糖，仍要看具体营养标签。",
    "buying": "在饮料货架按口味和每升单价比较。",
    "storage": "不同系列配方、糖分及包装可能不同。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Bionade&title=Special:MediaSearch&type=image",
    "word": ""
  },
  {
    "id": "milka-chocolate",
    "brand": "milka",
    "country": "de",
    "name": "Milka 牛奶巧克力",
    "foodType": "巧克力",
    "description": "德国超市里容易见到的跨国品牌补充，并非德国本土起源品牌。",
    "comparison": "与Ritter Sport可比较甜度、可可含量及夹心；不把销售国家当作品牌起源。",
    "buying": "超市巧克力区可寻找，比较普通包装与礼盒规格。",
    "storage": "检查乳制品、坚果等过敏原；注意高温融化。",
    "image": "https://commons.wikimedia.org/w/index.php?search=Milka%20chocolate&title=Special:MediaSearch&type=image",
    "word": "巧克力"
  }
];
const brandVisitPlaces = [
  {
    "id": "mol-campus",
    "brand": "mol",
    "city": "budapest",
    "name": "MOL Campus 访客/观景入口",
    "local": "MOL Campus",
    "lat": 47.4663,
    "lon": 19.0593,
    "category": "landmark",
    "description": "MOL 总部建筑的访客及观景设施探索入口。办公区域不是自由参观区域；开放、门票和预约须查官网。",
    "url": "https://molcampus.hu/en/"
  },
  {
    "id": "bmw-welt",
    "brand": "bmw",
    "city": "munich",
    "name": "BMW Welt 品牌体验空间",
    "local": "BMW Welt",
    "lat": 48.1768,
    "lon": 11.5565,
    "category": "museum",
    "description": "面向公众的品牌展示与体验场所，邻近 BMW 博物馆。它不是总部办公室，活动与博物馆门票请分别查官网。",
    "url": "https://www.bmw-welt.com/en.html"
  }
];
const industrialBrandIds=new Set(['otp','mol','richter','omv','voestalpine','bmw','siemens','bosch','sap','adidas']);
for(const b of travelBrands)b.segment=industrialBrandIds.has(b.id)?'industry':'consumer';
for(const p of brandVisitPlaces){const c=travelCities.find(c=>c.id===p.city);c.places.push({name:p.name,local:p.local,lat:p.lat,lon:p.lon,category:p.category,description:p.description,brandId:p.brand});}

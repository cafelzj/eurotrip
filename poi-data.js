const poiCountryProfiles = {
  "hu": {
    "brands": [
      "Lidl",
      "ALDI",
      "SPAR",
      "Tesco",
      "PENNY",
      "Auchan"
    ],
    "brandNote": "ALDI、Lidl 多为折扣型超市；SPAR 和 Tesco 常见于城市。不同城区的品牌覆盖不同。"
  },
  "at": {
    "brands": [
      "Lidl",
      "HOFER",
      "BILLA",
      "SPAR",
      "PENNY",
      "MPREIS"
    ],
    "brandNote": "HOFER 是奥地利的 Aldi 品牌；BILLA 与 SPAR 很常见。MPREIS 在蒂罗尔尤其常见。"
  },
  "de": {
    "brands": [
      "Lidl",
      "ALDI",
      "REWE",
      "EDEKA",
      "Netto",
      "PENNY"
    ],
    "brandNote": "ALDI 分为 Nord 与 Süd，地图归在同一品牌下。Lidl / ALDI 为折扣型，REWE / EDEKA 的商品通常更多样。"
  }
};
const poiCityInfo = {
  "budapest": {
    "food": [
      {
        "name": "古拉什汤（gulyás）",
        "description": "红椒风味的牛肉汤，常与面包一起食用。",
        "type": "汤品",
        "comparison": "与浓汁 pörkölt 不同，gulyás 通常是汤；红椒风味不一定很辣。",
        "imageQuery": "Gulyas soup",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Gulyas%20soup&title=Special:MediaSearch&type=image"
      },
      {
        "name": "烟囱蛋糕（kürtőskalács）",
        "description": "裹糖烘烤的圆筒糕点；市场和小食店常见。",
        "type": "甜点",
        "comparison": "与油炸兰戈什不同，这是裹糖烘烤的甜糕点。",
        "imageQuery": "Kurtoskalacs",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kurtoskalacs&title=Special:MediaSearch&type=image"
      },
      {
        "name": "兰戈什（lángos）",
        "description": "油炸面饼，常搭配酸奶油与奶酪。",
        "type": "小食",
        "comparison": "比椒盐卷饼更油润，常加蒜、酸奶油和奶酪。",
        "imageQuery": "Langos",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Langos&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "炖肉（pörkölt）",
        "description": "以红椒和洋葱为基础的浓汁炖肉。",
        "comparison": "与古拉什汤相比，通常汁更浓、不是汤；肉类随菜单而异。",
        "imageQuery": "Pörkölt",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=P%C3%B6rk%C3%B6lt&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "多博什蛋糕（Dobos torta）",
        "description": "多层海绵蛋糕夹巧克力奶油，顶部有焦糖。",
        "comparison": "比苹果卷更富奶油感；与萨赫蛋糕相比层次更多。",
        "imageQuery": "Dobos torte",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Dobos%20torte&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "托卡伊甜酒（Tokaji Aszú）",
        "description": "匈牙利代表性的甜葡萄酒，常作为餐后饮品。",
        "comparison": "不同于清爽干白，甜度与酒体更明显；不饮酒可选咖啡或茶。",
        "imageQuery": "Tokaji Aszu",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tokaji%20Aszu&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "budapest-0",
        "group": "transport",
        "sub": "airport",
        "name": "布达佩斯李斯特国际机场 BUD",
        "local": "Budapest Liszt Ferenc Airport",
        "lat": 47.4369,
        "lon": 19.2556,
        "description": "城市东南；机场大巴与市内普通交通票种不同。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "budapest-1",
        "group": "transport",
        "sub": "station",
        "name": "东站",
        "local": "Budapest Keleti",
        "lat": 47.5003,
        "lon": 19.0838,
        "description": "重要的国际及国内铁路枢纽，靠近 M2 / M4 地铁。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "budapest-2",
        "group": "transport",
        "sub": "station",
        "name": "西站",
        "local": "Budapest Nyugati",
        "lat": 47.5108,
        "lon": 19.0561,
        "description": "历史站房与城市交通相连，出发前核对车站。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "budapest-3",
        "group": "shopping",
        "sub": "street",
        "name": "瓦茨街",
        "local": "Váci utca",
        "lat": 47.4911,
        "lon": 19.0524,
        "description": "市中心步行购物街，餐饮与旅游商品集中。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "budapest-4",
        "group": "shopping",
        "sub": "mall",
        "name": "Westend",
        "local": "Westend City Center",
        "lat": 47.5135,
        "lon": 19.0592,
        "description": "西站附近的大型购物中心。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "debrecen": {
    "food": [
      {
        "name": "德布勒森香肠（debreceni）",
        "description": "红椒调味的香肠，是当地代表风味。",
        "type": "小食",
        "comparison": "比萨拉米更适合热食；具体肉类与调味请看配料。",
        "imageQuery": "Debrecener sausage",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Debrecener%20sausage&title=Special:MediaSearch&type=image"
      },
      {
        "name": "炖肉（pörkölt）",
        "description": "红椒与洋葱炖煮的肉类菜肴。",
        "type": "主菜",
        "comparison": "比古拉什汤更浓稠，常搭配面团或其他主食。",
        "imageQuery": "Porkolt",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Porkolt&title=Special:MediaSearch&type=image"
      },
      {
        "name": "甜点与糕饼",
        "description": "市中心咖啡馆和甜品店适合短暂停留。",
        "type": "甜点",
        "comparison": "蛋糕常较丰厚，想吃轻一点可问水果类糕点。",
        "imageQuery": "Hungarian pastries",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Hungarian%20pastries&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "炖肉（pörkölt）",
        "description": "以红椒和洋葱为基础的浓汁炖肉。",
        "comparison": "与古拉什汤相比，通常汁更浓、不是汤；肉类随菜单而异。",
        "imageQuery": "Pörkölt",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=P%C3%B6rk%C3%B6lt&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "多博什蛋糕（Dobos torta）",
        "description": "多层海绵蛋糕夹巧克力奶油，顶部有焦糖。",
        "comparison": "比苹果卷更富奶油感；与萨赫蛋糕相比层次更多。",
        "imageQuery": "Dobos torte",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Dobos%20torte&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "托卡伊甜酒（Tokaji Aszú）",
        "description": "匈牙利代表性的甜葡萄酒，常作为餐后饮品。",
        "comparison": "不同于清爽干白，甜度与酒体更明显；不饮酒可选咖啡或茶。",
        "imageQuery": "Tokaji Aszu",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tokaji%20Aszu&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "debrecen-0",
        "group": "transport",
        "sub": "airport",
        "name": "德布勒森国际机场 DEB",
        "local": "Debrecen International Airport",
        "lat": 47.4889,
        "lon": 21.6153,
        "description": "城市南侧的地区机场，航班与接驳请查最新安排。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "debrecen-1",
        "group": "transport",
        "sub": "station",
        "name": "德布勒森车站",
        "local": "Debrecen Nagyállomás",
        "lat": 47.5192,
        "lon": 21.6282,
        "description": "位于市中心南侧，与市区交通连接。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "debrecen-2",
        "group": "shopping",
        "sub": "street",
        "name": "皮亚茨街",
        "local": "Piac utca",
        "lat": 47.5294,
        "lon": 21.6254,
        "description": "贯穿中心城区的主要街道，有商店与餐馆。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "debrecen-3",
        "group": "shopping",
        "sub": "mall",
        "name": "Forum Debrecen",
        "local": "Fórum Debrecen",
        "lat": 47.5328,
        "lon": 21.6304,
        "description": "市中心商业综合体。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "szeged": {
    "food": [
      {
        "name": "塞格德鱼汤（szegedi halászlé）",
        "description": "以淡水鱼和红椒为特色的鱼汤。",
        "type": "汤品",
        "comparison": "与牛肉古拉什汤不同，以淡水鱼为主；留意鱼刺和辣度。",
        "imageQuery": "Szeged fish soup",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Szeged%20fish%20soup&title=Special:MediaSearch&type=image"
      },
      {
        "name": "Pick 萨拉米",
        "description": "与塞格德密切相关的熟成香肠。",
        "type": "伴手礼",
        "comparison": "与热狗肠不同，属于熟成冷切香肠。",
        "imageQuery": "Pick salami",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Pick%20salami&title=Special:MediaSearch&type=image"
      },
      {
        "name": "红椒粉（paprika）",
        "description": "适合作为伴手礼，注意区分甜味与辣味。",
        "type": "伴手礼",
        "comparison": "甜红椒粉与辣椒粉用途不同，购买时核对标签。",
        "imageQuery": "Hungarian paprika",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Hungarian%20paprika&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "炖肉（pörkölt）",
        "description": "以红椒和洋葱为基础的浓汁炖肉。",
        "comparison": "与古拉什汤相比，通常汁更浓、不是汤；肉类随菜单而异。",
        "imageQuery": "Pörkölt",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=P%C3%B6rk%C3%B6lt&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "多博什蛋糕（Dobos torta）",
        "description": "多层海绵蛋糕夹巧克力奶油，顶部有焦糖。",
        "comparison": "比苹果卷更富奶油感；与萨赫蛋糕相比层次更多。",
        "imageQuery": "Dobos torte",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Dobos%20torte&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "托卡伊甜酒（Tokaji Aszú）",
        "description": "匈牙利代表性的甜葡萄酒，常作为餐后饮品。",
        "comparison": "不同于清爽干白，甜度与酒体更明显；不饮酒可选咖啡或茶。",
        "imageQuery": "Tokaji Aszu",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tokaji%20Aszu&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "szeged-0",
        "group": "transport",
        "sub": "airport",
        "name": "塞格德机场",
        "local": "Szeged Airport",
        "lat": 46.2465,
        "lon": 20.0908,
        "description": "以通用航空为主，不应当作常规国际客运机场规划行程。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "szeged-1",
        "group": "transport",
        "sub": "station",
        "name": "塞格德车站",
        "local": "Szeged vasútállomás",
        "lat": 46.2398,
        "lon": 20.1441,
        "description": "主铁路车站，位于市中心南侧。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "szeged-2",
        "group": "shopping",
        "sub": "street",
        "name": "卡拉斯街",
        "local": "Kárász utca",
        "lat": 46.2511,
        "lon": 20.1471,
        "description": "市中心步行街，适合逛店与找咖啡馆。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "szeged-3",
        "group": "shopping",
        "sub": "mall",
        "name": "Árkád Szeged",
        "local": "Árkád Szeged",
        "lat": 46.2557,
        "lon": 20.1362,
        "description": "中心城区西侧的购物中心。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "vienna": {
    "food": [
      {
        "name": "维也纳炸肉排（Wiener Schnitzel）",
        "description": "传统名称通常指小牛肉版本，点餐时可确认肉类。",
        "type": "主菜",
        "comparison": "Wiener Schnitzel 传统为小牛肉；猪肉版本常另作标注。",
        "imageQuery": "Wiener Schnitzel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Wiener%20Schnitzel&title=Special:MediaSearch&type=image"
      },
      {
        "name": "萨赫蛋糕（Sachertorte）",
        "description": "巧克力蛋糕搭配杏酱，常与咖啡一起品尝。",
        "type": "甜点",
        "comparison": "相比多博什蛋糕层数少，巧克力与杏酱更突出。",
        "imageQuery": "Sachertorte",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Sachertorte&title=Special:MediaSearch&type=image"
      },
      {
        "name": "苹果卷（Apfelstrudel）",
        "description": "薄皮卷起苹果馅的经典甜点。",
        "type": "甜点",
        "comparison": "与奶油蛋糕相比果味更突出，常配奶油或香草酱。",
        "imageQuery": "Apfelstrudel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Apfelstrudel&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "清煮牛肉（Tafelspitz）",
        "description": "牛肉在汤中煮制，常配蔬菜及酱料。",
        "comparison": "比炸肉排清淡，口感更偏软嫩；配料各店不同。",
        "imageQuery": "Tafelspitz",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tafelspitz&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "皇帝煎饼（Kaiserschmarrn）",
        "description": "撕成块的厚煎饼，常配糖粉和果酱。",
        "comparison": "比薄可丽饼更松软、份量通常较大，适合分享。",
        "imageQuery": "Kaiserschmarrn",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kaiserschmarrn&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "维也纳米朗琪（Wiener Melange）",
        "description": "咖啡与热奶、奶泡组成的咖啡馆经典。",
        "comparison": "与卡布奇诺相近，但各咖啡馆配比不同，不能只凭名称判断浓度。",
        "imageQuery": "Wiener Melange",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Wiener%20Melange&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "vienna-0",
        "group": "transport",
        "sub": "airport",
        "name": "维也纳国际机场 VIE",
        "local": "Flughafen Wien",
        "lat": 48.1103,
        "lon": 16.5697,
        "description": "位于施韦夏特，市区核心交通票通常不覆盖完整机场行程。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "vienna-1",
        "group": "transport",
        "sub": "station",
        "name": "维也纳中央车站",
        "local": "Wien Hauptbahnhof",
        "lat": 48.185,
        "lon": 16.376,
        "description": "主要长途列车枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "vienna-2",
        "group": "transport",
        "sub": "station",
        "name": "维也纳西站",
        "local": "Wien Westbahnhof",
        "lat": 48.1967,
        "lon": 16.337,
        "description": "连接城市西侧及部分区域与长途服务。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "vienna-3",
        "group": "shopping",
        "sub": "street",
        "name": "玛利亚希尔费大街",
        "local": "Mariahilfer Straße",
        "lat": 48.198,
        "lon": 16.349,
        "description": "维也纳的重要购物街，沿线有商店和餐饮。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "vienna-4",
        "group": "shopping",
        "sub": "street",
        "name": "格拉本与克恩滕大街",
        "local": "Graben / Kärntner Straße",
        "lat": 48.2076,
        "lon": 16.3697,
        "description": "老城核心商业步行区域。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "salzburg": {
    "food": [
      {
        "name": "萨尔茨堡舒芙蕾（Salzburger Nockerl）",
        "description": "蓬松的蛋白甜点，通常现做现吃。",
        "type": "甜点",
        "comparison": "比蛋糕更蓬松，通常现烤且适合多人分享。",
        "imageQuery": "Salzburger Nockerl",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Salzburger%20Nockerl&title=Special:MediaSearch&type=image"
      },
      {
        "name": "莫扎特巧克力球（Mozartkugel）",
        "description": "包裹杏仁糖等内馅的巧克力伴手礼。",
        "type": "伴手礼",
        "comparison": "属于夹心巧克力，不是整块蛋糕；品牌与配方有差别。",
        "imageQuery": "Mozartkugel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Mozartkugel&title=Special:MediaSearch&type=image"
      },
      {
        "name": "卡斯诺肯（Kasnocken）",
        "description": "搭配奶酪的小面团，是当地常见的暖食。",
        "type": "主菜",
        "comparison": "比甜煎饼咸香，奶酪味更浓。",
        "imageQuery": "Kasnocken",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kasnocken&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "清煮牛肉（Tafelspitz）",
        "description": "牛肉在汤中煮制，常配蔬菜及酱料。",
        "comparison": "比炸肉排清淡，口感更偏软嫩；配料各店不同。",
        "imageQuery": "Tafelspitz",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tafelspitz&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "皇帝煎饼（Kaiserschmarrn）",
        "description": "撕成块的厚煎饼，常配糖粉和果酱。",
        "comparison": "比薄可丽饼更松软、份量通常较大，适合分享。",
        "imageQuery": "Kaiserschmarrn",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kaiserschmarrn&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "维也纳米朗琪（Wiener Melange）",
        "description": "咖啡与热奶、奶泡组成的咖啡馆经典。",
        "comparison": "与卡布奇诺相近，但各咖啡馆配比不同，不能只凭名称判断浓度。",
        "imageQuery": "Wiener Melange",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Wiener%20Melange&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "salzburg-0",
        "group": "transport",
        "sub": "airport",
        "name": "萨尔茨堡机场 SZG",
        "local": "Salzburg Airport",
        "lat": 47.7933,
        "lon": 13.0043,
        "description": "位于市区西侧，有公交接驳。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "salzburg-1",
        "group": "transport",
        "sub": "station",
        "name": "萨尔茨堡中央车站",
        "local": "Salzburg Hauptbahnhof",
        "lat": 47.8131,
        "lon": 13.0459,
        "description": "市区北侧的主要国内及跨境铁路枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "salzburg-2",
        "group": "shopping",
        "sub": "street",
        "name": "粮食胡同",
        "local": "Getreidegasse",
        "lat": 47.8002,
        "lon": 13.0428,
        "description": "老城购物街，以传统招牌和精品小店闻名。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "salzburg-3",
        "group": "shopping",
        "sub": "mall",
        "name": "EUROPARK",
        "local": "EUROPARK Salzburg",
        "lat": 47.8185,
        "lon": 13.0071,
        "description": "市区西北侧的大型购物中心。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "innsbruck": {
    "food": [
      {
        "name": "蒂罗尔培根（Tiroler Speck）",
        "description": "熏制或风干的猪肉制品。",
        "type": "伴手礼",
        "comparison": "与新鲜培根不同，通常为风干或熏制产品。",
        "imageQuery": "Tiroler Speck",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tiroler%20Speck&title=Special:MediaSearch&type=image"
      },
      {
        "name": "奶酪面疙瘩（Käsespätzle）",
        "description": "小面团、奶酪与洋葱组成的家常暖食。",
        "type": "主菜",
        "comparison": "与意式面条不同，Spätzle 是小面团，奶酪味较浓。",
        "imageQuery": "Kasespatzle",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kasespatzle&title=Special:MediaSearch&type=image"
      },
      {
        "name": "蒂罗尔煎锅（Tiroler Gröstl）",
        "description": "土豆、肉和洋葱炒制，常配煎蛋。",
        "type": "主菜",
        "comparison": "相比炖肉更干香，土豆与煎蛋使饱腹感较强。",
        "imageQuery": "Tiroler Grostl",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tiroler%20Grostl&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "清煮牛肉（Tafelspitz）",
        "description": "牛肉在汤中煮制，常配蔬菜及酱料。",
        "comparison": "比炸肉排清淡，口感更偏软嫩；配料各店不同。",
        "imageQuery": "Tafelspitz",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Tafelspitz&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "皇帝煎饼（Kaiserschmarrn）",
        "description": "撕成块的厚煎饼，常配糖粉和果酱。",
        "comparison": "比薄可丽饼更松软、份量通常较大，适合分享。",
        "imageQuery": "Kaiserschmarrn",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kaiserschmarrn&title=Special:MediaSearch&type=image"
      },
      {
        "type": "饮品",
        "name": "维也纳米朗琪（Wiener Melange）",
        "description": "咖啡与热奶、奶泡组成的咖啡馆经典。",
        "comparison": "与卡布奇诺相近，但各咖啡馆配比不同，不能只凭名称判断浓度。",
        "imageQuery": "Wiener Melange",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Wiener%20Melange&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "innsbruck-0",
        "group": "transport",
        "sub": "airport",
        "name": "因斯布鲁克机场 INN",
        "local": "Flughafen Innsbruck",
        "lat": 47.2602,
        "lon": 11.3439,
        "description": "城市西侧，山地天气可能影响航班。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "innsbruck-1",
        "group": "transport",
        "sub": "station",
        "name": "因斯布鲁克中央车站",
        "local": "Innsbruck Hauptbahnhof",
        "lat": 47.2635,
        "lon": 11.4008,
        "description": "连接蒂罗尔和跨境线路的主要铁路枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "innsbruck-2",
        "group": "shopping",
        "sub": "street",
        "name": "玛利亚·特蕾西亚大街",
        "local": "Maria-Theresien-Straße",
        "lat": 47.2656,
        "lon": 11.3949,
        "description": "市中心主要商业街，向北通往老城。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "innsbruck-3",
        "group": "shopping",
        "sub": "mall",
        "name": "SILLPARK",
        "local": "SILLPARK",
        "lat": 47.2646,
        "lon": 11.407,
        "description": "主车站附近的购物中心。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "berlin": {
    "food": [
      {
        "name": "咖喱香肠（Currywurst）",
        "description": "香肠搭配番茄咖喱酱，是常见街头小食。",
        "type": "小食",
        "comparison": "比一般烤香肠更突出番茄咖喱酱，辣度视店铺而异。",
        "imageQuery": "Currywurst",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Currywurst&title=Special:MediaSearch&type=image"
      },
      {
        "name": "柏林甜甜圈（Berliner / Pfannkuchen）",
        "description": "带甜馅的油炸面团，当地命名与其他地区不同。",
        "type": "甜点",
        "comparison": "与带孔甜甜圈不同，通常是带甜馅的圆形面团。",
        "imageQuery": "Berliner doughnut",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Berliner%20doughnut&title=Special:MediaSearch&type=image"
      },
      {
        "name": "Döner",
        "description": "土耳其风味烤肉夹饼，已成为柏林日常饮食的一部分。",
        "type": "小食",
        "comparison": "与咖喱香肠相比蔬菜选择更多，但肉类和酱料仍需确认。",
        "imageQuery": "Doner kebab",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Doner%20kebab&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "酸炖牛肉（Sauerbraten）",
        "description": "先腌制再炖煮的肉类菜肴，常配饺子或土豆。",
        "comparison": "相比烤猪肘通常更软、酸味更明显；地方版本和肉类不同。",
        "imageQuery": "Sauerbraten",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Sauerbraten&title=Special:MediaSearch&type=image"
      },
      {
        "type": "小食",
        "name": "土豆煎饼（Reibekuchen）",
        "description": "磨碎土豆后煎炸，常配苹果酱。",
        "comparison": "比薯条更像薄饼；外脆内软，科隆及莱茵地区尤其常见。",
        "imageQuery": "Reibekuchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Reibekuchen&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "苹果卷（Apfelstrudel）",
        "description": "薄皮包裹苹果馅的甜点，在德语地区广泛出现。",
        "comparison": "与奶油夹层蛋糕相比果味更突出；不是德国所有城市的专属特产。",
        "imageQuery": "Apfelstrudel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Apfelstrudel&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "berlin-0",
        "group": "transport",
        "sub": "airport",
        "name": "柏林勃兰登堡机场 BER",
        "local": "Flughafen Berlin Brandenburg",
        "lat": 52.3667,
        "lon": 13.5033,
        "description": "位于城市东南，属于交通 C 区。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "berlin-1",
        "group": "transport",
        "sub": "station",
        "name": "柏林中央车站",
        "local": "Berlin Hauptbahnhof",
        "lat": 52.5251,
        "lon": 13.3694,
        "description": "城市主要长途铁路枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "berlin-2",
        "group": "transport",
        "sub": "station",
        "name": "东十字站",
        "local": "Berlin Ostkreuz",
        "lat": 52.5031,
        "lon": 13.469,
        "description": "S-Bahn 与区域交通的重要换乘站。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "berlin-3",
        "group": "shopping",
        "sub": "street",
        "name": "库达姆大街",
        "local": "Kurfürstendamm",
        "lat": 52.5028,
        "lon": 13.3308,
        "description": "西柏林的经典购物街。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "berlin-4",
        "group": "shopping",
        "sub": "street",
        "name": "亚历山大广场",
        "local": "Alexanderplatz",
        "lat": 52.5219,
        "lon": 13.4132,
        "description": "交通、购物与城市地标交汇的广场。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "munich": {
    "food": [
      {
        "name": "白香肠（Weißwurst）",
        "description": "巴伐利亚传统香肠，常搭配甜芥末和椒盐卷饼。",
        "type": "小食",
        "comparison": "比烤香肠口味温和，常搭配甜芥末；并非所有店全天供应。",
        "imageQuery": "Weisswurst",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Weisswurst&title=Special:MediaSearch&type=image"
      },
      {
        "name": "椒盐卷饼（Brezel）",
        "description": "啤酒花园与面包店常见的小食。",
        "type": "小食",
        "comparison": "比油炸兰戈什更紧实，表皮咸香，通常不加甜馅。",
        "imageQuery": "Bavarian pretzel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Bavarian%20pretzel&title=Special:MediaSearch&type=image"
      },
      {
        "name": "猪肘（Schweinshaxe）",
        "description": "巴伐利亚餐馆常见的烤肉菜。",
        "type": "主菜",
        "comparison": "比清煮牛肉更油润且份量大，适合分享。",
        "imageQuery": "Schweinshaxe",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Schweinshaxe&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "酸炖牛肉（Sauerbraten）",
        "description": "先腌制再炖煮的肉类菜肴，常配饺子或土豆。",
        "comparison": "相比烤猪肘通常更软、酸味更明显；地方版本和肉类不同。",
        "imageQuery": "Sauerbraten",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Sauerbraten&title=Special:MediaSearch&type=image"
      },
      {
        "type": "小食",
        "name": "土豆煎饼（Reibekuchen）",
        "description": "磨碎土豆后煎炸，常配苹果酱。",
        "comparison": "比薯条更像薄饼；外脆内软，科隆及莱茵地区尤其常见。",
        "imageQuery": "Reibekuchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Reibekuchen&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "苹果卷（Apfelstrudel）",
        "description": "薄皮包裹苹果馅的甜点，在德语地区广泛出现。",
        "comparison": "与奶油夹层蛋糕相比果味更突出；不是德国所有城市的专属特产。",
        "imageQuery": "Apfelstrudel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Apfelstrudel&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "munich-0",
        "group": "transport",
        "sub": "airport",
        "name": "慕尼黑机场 MUC",
        "local": "Flughafen München",
        "lat": 48.3538,
        "lon": 11.7861,
        "description": "距市中心较远，留足机场铁路或巴士时间。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "munich-1",
        "group": "transport",
        "sub": "station",
        "name": "慕尼黑中央车站",
        "local": "München Hauptbahnhof",
        "lat": 48.1402,
        "lon": 11.5586,
        "description": "主要长途列车枢纽，施工及换乘请提前核对。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "munich-2",
        "group": "transport",
        "sub": "station",
        "name": "慕尼黑东站",
        "local": "München Ost",
        "lat": 48.127,
        "lon": 11.6045,
        "description": "S-Bahn、区域与部分长途交通的换乘站。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "munich-3",
        "group": "shopping",
        "sub": "street",
        "name": "考芬格街",
        "local": "Kaufingerstraße",
        "lat": 48.1382,
        "lon": 11.5704,
        "description": "连接卡尔广场与玛利亚广场的商业步行街。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "munich-4",
        "group": "shopping",
        "sub": "street",
        "name": "谷物市场",
        "local": "Viktualienmarkt",
        "lat": 48.1351,
        "lon": 11.576,
        "description": "食品摊位与餐饮集中的市中心市场。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "hamburg": {
    "food": [
      {
        "name": "鱼面包（Fischbrötchen）",
        "description": "夹鱼与配菜的小面包，适合在港口附近品尝。",
        "type": "小食",
        "comparison": "与热鱼排汉堡不同，馅料可能是腌鱼或冷鱼，先确认鱼种。",
        "imageQuery": "Fischbrotchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Fischbrotchen&title=Special:MediaSearch&type=image"
      },
      {
        "name": "肉桂卷（Franzbrötchen）",
        "description": "汉堡代表性的肉桂黄油面点。",
        "type": "甜点",
        "comparison": "与普通牛角包相比肉桂和糖味更突出。",
        "imageQuery": "Franzbrotchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Franzbrotchen&title=Special:MediaSearch&type=image"
      },
      {
        "name": "Labskaus",
        "description": "北德传统菜，常见牛肉、土豆等食材，做法各异。",
        "type": "主菜",
        "comparison": "外观像混合土豆泥，不像完整肉排；做法和配菜差异较大。",
        "imageQuery": "Labskaus",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Labskaus&title=Special:MediaSearch&type=image"
      },
      {
        "type": "主菜",
        "name": "酸炖牛肉（Sauerbraten）",
        "description": "先腌制再炖煮的肉类菜肴，常配饺子或土豆。",
        "comparison": "相比烤猪肘通常更软、酸味更明显；地方版本和肉类不同。",
        "imageQuery": "Sauerbraten",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Sauerbraten&title=Special:MediaSearch&type=image"
      },
      {
        "type": "小食",
        "name": "土豆煎饼（Reibekuchen）",
        "description": "磨碎土豆后煎炸，常配苹果酱。",
        "comparison": "比薯条更像薄饼；外脆内软，科隆及莱茵地区尤其常见。",
        "imageQuery": "Reibekuchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Reibekuchen&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "苹果卷（Apfelstrudel）",
        "description": "薄皮包裹苹果馅的甜点，在德语地区广泛出现。",
        "comparison": "与奶油夹层蛋糕相比果味更突出；不是德国所有城市的专属特产。",
        "imageQuery": "Apfelstrudel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Apfelstrudel&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "hamburg-0",
        "group": "transport",
        "sub": "airport",
        "name": "汉堡机场 HAM",
        "local": "Hamburg Airport",
        "lat": 53.6304,
        "lon": 9.9882,
        "description": "城市北侧，与 S-Bahn 连接。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "hamburg-1",
        "group": "transport",
        "sub": "station",
        "name": "汉堡中央车站",
        "local": "Hamburg Hauptbahnhof",
        "lat": 53.5528,
        "lon": 10.0068,
        "description": "市中心繁忙的长途与城市铁路枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "hamburg-2",
        "group": "transport",
        "sub": "station",
        "name": "汉堡阿尔托纳站",
        "local": "Hamburg Altona",
        "lat": 53.5528,
        "lon": 9.935,
        "description": "西侧城区的重要铁路节点。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "hamburg-3",
        "group": "shopping",
        "sub": "street",
        "name": "蒙克贝格街",
        "local": "Mönckebergstraße",
        "lat": 53.5505,
        "lon": 10.0016,
        "description": "连接中央车站与市中心的主要购物街。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "hamburg-4",
        "group": "shopping",
        "sub": "street",
        "name": "少女堤",
        "local": "Jungfernstieg",
        "lat": 53.5534,
        "lon": 9.9934,
        "description": "内阿尔斯特湖边的商业与漫步区域。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  },
  "cologne": {
    "food": [
      {
        "name": "科隆啤酒（Kölsch）",
        "description": "通常用细长小杯供应，适合了解当地啤酒馆文化。",
        "type": "饮品",
        "comparison": "与深色麦芽啤酒相比通常更轻盈；注意服务员可能续杯。",
        "imageQuery": "Kolsch beer",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Kolsch%20beer&title=Special:MediaSearch&type=image"
      },
      {
        "name": "Halver Hahn",
        "description": "名称看似“半只鸡”，其实是黑麦面包配奶酪。",
        "type": "小食",
        "comparison": "名称不是菜的字面解释，实际上是黑麦面包配奶酪。",
        "imageQuery": "Halver Hahn",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Halver%20Hahn&title=Special:MediaSearch&type=image"
      },
      {
        "name": "莱茵酸炖牛肉（Sauerbraten）",
        "description": "先腌制再炖煮的肉类菜肴。",
        "type": "主菜",
        "comparison": "与烤猪肘相比酸味更明显、肉质更软，先确认肉类。",
        "imageQuery": "Rhenish Sauerbraten",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Rhenish%20Sauerbraten&title=Special:MediaSearch&type=image"
      },
      {
        "type": "配菜",
        "name": "酸菜（Sauerkraut）",
        "description": "发酵卷心菜，常作为肉类餐食的配菜。",
        "comparison": "与新鲜沙拉相比更酸、更软；是否含培根或其他配料需询问。",
        "imageQuery": "Sauerkraut",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Sauerkraut&title=Special:MediaSearch&type=image"
      },
      {
        "type": "小食",
        "name": "土豆煎饼（Reibekuchen）",
        "description": "磨碎土豆后煎炸，常配苹果酱。",
        "comparison": "比薯条更像薄饼；外脆内软，科隆及莱茵地区尤其常见。",
        "imageQuery": "Reibekuchen",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Reibekuchen&title=Special:MediaSearch&type=image"
      },
      {
        "type": "甜点",
        "name": "苹果卷（Apfelstrudel）",
        "description": "薄皮包裹苹果馅的甜点，在德语地区广泛出现。",
        "comparison": "与奶油夹层蛋糕相比果味更突出；不是德国所有城市的专属特产。",
        "imageQuery": "Apfelstrudel",
        "imageUrl": "https://commons.wikimedia.org/w/index.php?search=Apfelstrudel&title=Special:MediaSearch&type=image"
      }
    ],
    "pois": [
      {
        "id": "cologne-0",
        "group": "transport",
        "sub": "airport",
        "name": "科隆波恩机场 CGN",
        "local": "Flughafen Köln/Bonn",
        "lat": 50.8659,
        "lon": 7.1427,
        "description": "服务科隆与波恩，可由机场铁路站换乘。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "cologne-1",
        "group": "transport",
        "sub": "station",
        "name": "科隆中央车站",
        "local": "Köln Hauptbahnhof",
        "lat": 50.943,
        "lon": 6.9585,
        "description": "紧邻大教堂的主要铁路枢纽。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "cologne-2",
        "group": "transport",
        "sub": "station",
        "name": "科隆展会/道依茨站",
        "local": "Köln Messe/Deutz",
        "lat": 50.9408,
        "lon": 6.974,
        "description": "莱茵河东岸的重要铁路节点。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "cologne-3",
        "group": "shopping",
        "sub": "street",
        "name": "席尔德街",
        "local": "Schildergasse",
        "lat": 50.9367,
        "lon": 6.9553,
        "description": "老城的重要商业步行街。",
        "source": "编辑精选 · 坐标为区域参考位置"
      },
      {
        "id": "cologne-4",
        "group": "shopping",
        "sub": "street",
        "name": "埃伦街",
        "local": "Ehrenstraße",
        "lat": 50.9396,
        "lon": 6.9438,
        "description": "精品店与餐饮较集中的街区。",
        "source": "编辑精选 · 坐标为区域参考位置"
      }
    ]
  }
};

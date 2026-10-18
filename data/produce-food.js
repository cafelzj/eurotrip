const produceFood = {
  "title": "布达佩斯餐桌上的物产",
  "scope": "城市消费视角；生产、供给与贸易量化数据采用匈牙利全国口径。",
  "seasonNote": "月份为匈牙利一般露地 / 果园新季上市的大致窗口，受产区、天气和品种影响；并非已核实的逐产地日历。温室、储藏、冷冻与进口可使全年在售。动物、水产、饮料等不设采收月份。",
  "notes": [
    "“匈牙利产”表示本国存在相应生产与饮食联系，不承诺某一门店批次或全部消费均由国内供应。",
    "未取得布达佩斯逐品类产量、海关进口量或实测消费量；不按人口比例冒充城市统计。",
    "水产中的淡水鱼与饮水资源分别呈现；海产来自外部供应链，不存在匈牙利本国海洋捕捞。",
    "所有食材的产地以摊位或包装原产国为准；城市菜式传统不等于每一种原料都本地产。"
  ],
  "categories": [
    {
      "id": "grain",
      "name": "谷物（主粮）",
      "icon": "🌾",
      "description": "小麦、玉米、大麦、黑麦、燕麦与稻米。按主要农产品形态分类，土豆归蔬菜，油籽另列油料。"
    },
    {
      "id": "fruit",
      "name": "水果",
      "icon": "🍎",
      "description": "鲜果、果酱、果汁与水果加工原料；水果酒类成品归饮品。"
    },
    {
      "id": "vegetable",
      "name": "蔬菜与豆类",
      "icon": "🥬",
      "description": "蔬菜、薯类、鲜豆与干豆，以及按食用习惯归入此类的栽培食用菌。"
    },
    {
      "id": "meat",
      "name": "肉类",
      "icon": "🥩",
      "description": "猪、牛、鸡、鸭鹅等肉类；蛋类与乳制品分别展示。"
    },
    {
      "id": "aquatic",
      "name": "水产",
      "icon": "🐟",
      "description": "合并淡水鱼与海产，逐项注明淡水或海产背景，不把进口海产当成当地海洋捕捞。"
    },
    {
      "id": "oil",
      "name": "油料与食用油",
      "icon": "🌻",
      "description": "葵花籽、油菜籽与对应食用油；籽粒、成品油与饼粕的重量分别核算。"
    },
    {
      "id": "spice",
      "name": "香料与调味",
      "icon": "🌿",
      "description": "红椒粉、葛缕子、莳萝与辣根，区别鲜椒、甜椒粉与辣椒粉。"
    },
    {
      "id": "dairy",
      "name": "奶与乳制品",
      "icon": "🥛",
      "description": "鲜奶、酸奶油、凝乳与奶酪等；总量统计可能采用乳品折算口径。"
    },
    {
      "id": "eggs",
      "name": "蛋类",
      "icon": "🥚",
      "description": "鸡蛋等蛋类，与肉类和奶类分开。"
    },
    {
      "id": "nuts",
      "name": "坚果与籽实",
      "icon": "🌰",
      "description": "核桃与食用罂粟籽等糕点、零食原料；不因含油就把所有食用籽实都归油料。"
    },
    {
      "id": "sweetener",
      "name": "糖料与蜂蜜",
      "icon": "🍯",
      "description": "制糖甜菜与蜂蜜等甜味原料；甜菜鲜根与成品糖不能按等重比较。"
    },
    {
      "id": "drink",
      "name": "饮品与水",
      "icon": "🥤",
      "description": "葡萄酒、蒸馏酒、啤酒、咖啡与饮用水，作为加工饮品和城市供应的补充。"
    }
  ],
  "methods": [
    {
      "id": "raw",
      "name": "鲜食 / 凉拌",
      "description": "水果、番茄和甜椒可鲜食；按标签清洗或去皮，肉鱼不要照此生食。",
      "icon": "🥗",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "stew",
      "name": "炖煮 / 焖烧",
      "description": "洋葱、红椒粉、肉和少量汤汁构成多种匈牙利家常炖菜；汤与浓炖菜的液体量不同。",
      "icon": "🍲",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "fry",
      "name": "煎炸",
      "description": "裹粉鱼、炸肉排、兰戈什都用得到；葵花油常见，使用温度按油品标签。",
      "icon": "🍳",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "roast",
      "name": "烤制",
      "description": "适合肉、土豆、南瓜与根茎；烤鸭、烤鹅常与酸菜和土豆搭配。",
      "icon": "🔥",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "bake",
      "name": "烘焙 / 制面",
      "description": "小麦粉做面包、饼、蛋糕与果馅卷；罂粟籽和核桃是常见甜馅。",
      "icon": "🥖",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "boil",
      "name": "水煮 / 汤 / 粥",
      "description": "面、土豆、米、豆和鱼汤都属于此类；香料与烹煮时间因菜式而异。",
      "icon": "🥣",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "pickle",
      "name": "腌渍",
      "description": "醋渍、盐渍和乳酸发酵并不相同；市场散装酸黄瓜和酸菜要问保存方式。",
      "icon": "🥒",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "dry",
      "name": "干燥 / 研磨",
      "description": "红椒干燥研粉；干果、蘑菇和香草须按用途复水或直接使用。",
      "icon": "🌶️",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "smoke",
      "name": "烟熏 / 风干",
      "description": "常见于香肠、萨拉米及部分鱼制品；烟熏不自动等于熟食，仍看包装。",
      "icon": "🥓",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "ferment",
      "name": "发酵 / 酿造",
      "description": "葡萄成酒、谷物酿啤酒、乳发酵成酸奶，工艺与食用方式各不相同。",
      "icon": "🫙",
      "sourceIds": [
        "hu-tourism"
      ]
    },
    {
      "id": "drink",
      "name": "饮用 / 冲泡",
      "description": "矿泉水、咖啡、茶及酒类；酒精饮料注明酒精度，驾驶与未成年人不饮酒。",
      "icon": "☕",
      "sourceIds": [
        "hu-tourism"
      ]
    }
  ],
  "sources": [
    {
      "id": "ksh-agriculture",
      "title": "KSH 农业统计主题入口",
      "publisher": "Hungarian Central Statistical Office（匈牙利中央统计局）",
      "url": "https://www.ksh.hu/agriculture",
      "scope": "匈牙利全国农业，参考入口",
      "note": "官方参考入口；未逐项读取与核实作物产区、月份或当前贸易量。目录季节为一般性概览。",
      "verified": false
    },
    {
      "id": "eu-fishery-hu",
      "title": "欧盟渔业与水产养殖 · 匈牙利国别信息入口",
      "publisher": "European Commission",
      "url": "https://oceans-and-fisheries.ec.europa.eu/facts-and-figures/facts-and-figures-common-fisheries-policy/hungary_en",
      "scope": "匈牙利内陆渔业与水产养殖，参考入口",
      "note": "参考入口，未逐项读取与核实；食物目录仅说明淡水 / 海产来源性质，不编造当期产量或进口量。",
      "verified": false
    },
    {
      "id": "hu-tourism",
      "title": "Visit Hungary · 饮食与饮品参考",
      "publisher": "Visit Hungary",
      "url": "https://visithungary.com/category/gastronomy",
      "scope": "匈牙利饮食文化，参考入口",
      "note": "官方旅游资料入口；菜式、食材用途为概览，未逐项抓取此站正文。",
      "verified": false
    },
    {
      "id": "budapest-water",
      "title": "布达佩斯自来水公司",
      "publisher": "Fővárosi Vízművek / Budapest Waterworks",
      "url": "https://www.vizmuvek.hu/en",
      "scope": "布达佩斯供水，参考入口",
      "note": "官方供水入口；未核实当年度供水量、岸滤比例和能耗，因此不展示精确数值。",
      "verified": false
    }
  ],
  "items": [
    {
      "id": "wheat",
      "name": "小麦",
      "hu": "búza",
      "en": "wheat",
      "category": "grain",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        6,
        7,
        8
      ],
      "uses": [
        "面包",
        "面条与饺子",
        "蛋糕与糕点"
      ],
      "cooking": [
        "bake",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-1",
        "food-budapest-2",
        "food-budapest-retes"
      ],
      "regions": [
        "匈牙利农业区；布达佩斯的面粉和面包由全国供应链供货。"
      ],
      "summary": "小麦是主粮与出口商品。面粉包装 BL 等级偏用途标签，不等同全麦比例。",
      "trade": "已核查的2023全国谷物贸易为合计口径，不是小麦单项；本专题未取得同年小麦进口量或城市消费量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wheat",
      "icon": "🌾",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "炸面饼、烟囱卷与果馅卷",
          "description": "小麦粉可制作 lángos、kürtőskalács 和 rétes；具体菜式见关联卡片。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "maize",
      "name": "玉米",
      "hu": "kukorica",
      "en": "maize",
      "category": "grain",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        8,
        9,
        10,
        11
      ],
      "uses": [
        "甜玉米",
        "玉米糁",
        "饲料与工业淀粉"
      ],
      "cooking": [
        "boil",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利农业区，气候与干旱会影响年产。"
      ],
      "summary": "鲜甜玉米与干籽粒玉米的用途不同；全国供给中的饲料和工业用量不等于人食用量。",
      "trade": "谷物进出口合计见供给图表，不能拆成玉米单项；饲料和工业用量不等于人吃掉的玉米。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=maize",
      "icon": "🌽",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "barley",
      "name": "大麦",
      "hu": "árpa",
      "en": "barley",
      "category": "grain",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        6,
        7
      ],
      "uses": [
        "饲料",
        "麦芽与啤酒原料",
        "谷粒菜"
      ],
      "cooking": [
        "boil",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利农业区与制麦供应链。"
      ],
      "summary": "啤酒生产也用到麦芽；并非所有大麦都达到酿造品质。",
      "trade": "谷物贸易合计不等于大麦单项；麦芽、啤酒和原粮用不同商品口径，本专题未取得可比的单项进出口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=barley",
      "icon": "",
      "iconLabel": "大麦",
      "features": []
    },
    {
      "id": "rye",
      "name": "黑麦",
      "hu": "rozs",
      "en": "rye",
      "category": "grain",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8
      ],
      "uses": [
        "黑麦面包",
        "混合面包",
        "谷物制品"
      ],
      "cooking": [
        "bake",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内田作与欧洲谷物贸易。"
      ],
      "summary": "rozskenyér 的配方可混小麦；“颜色深”不保证全黑麦或全谷。",
      "trade": "国内与进口份额未核实，不给出供给占比。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rye",
      "icon": "",
      "iconLabel": "黑麦",
      "features": []
    },
    {
      "id": "oats",
      "name": "燕麦",
      "hu": "zab",
      "en": "oats",
      "category": "grain",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8
      ],
      "uses": [
        "燕麦粥",
        "麦片",
        "烘焙"
      ],
      "cooking": [
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内田作及进口燕麦制品。"
      ],
      "summary": "zabpehely 为燕麦片，常在超市早餐谷物区。",
      "trade": "原粮、麦片和植物饮料属于不同统计项。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=oats",
      "icon": "",
      "iconLabel": "燕麦",
      "features": []
    },
    {
      "id": "rice",
      "name": "稻米",
      "hu": "rizs",
      "en": "rice",
      "category": "grain",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        9,
        10
      ],
      "uses": [
        "填馅甜椒",
        "卷心菜卷",
        "牛奶米布丁"
      ],
      "cooking": [
        "boil",
        "stew"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-stuffed-cabbage"
      ],
      "regions": [
        "匈牙利有稻作，也有大量不同品种进口；不能把内陆国家等同于不种水稻。"
      ],
      "summary": "米与肉馅常同用于填馅料理；长粒、圆粒及速煮米用途不同。",
      "trade": "没有核实当前国内自给率或进口吨数。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rice",
      "icon": "🌾",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "apple",
      "name": "苹果",
      "hu": "alma",
      "en": "apple",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        8,
        9,
        10
      ],
      "uses": [
        "鲜食",
        "苹果馅卷",
        "果汁与果泥"
      ],
      "cooking": [
        "raw",
        "bake",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-retes"
      ],
      "regions": [
        "匈牙利果园；东北部是重要传统果区。布达佩斯为消费市场。"
      ],
      "summary": "储藏苹果可使本国产季延长，摊位上的苹果不一定来自首都周边。",
      "trade": "有国内产也有进口；市级进口吨数未取得。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apple",
      "icon": "🍎",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "pear",
      "name": "梨",
      "hu": "körte",
      "en": "pear",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        8,
        9,
        10
      ],
      "uses": [
        "鲜食",
        "糖煮梨",
        "糕点馅"
      ],
      "cooking": [
        "raw",
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内果园与欧洲供货商。"
      ],
      "summary": "与苹果一样适合看品种名和原产国，不把本地销售等同本地种植。",
      "trade": "品种和月份会改变进口比例；没有逐品类市级消费量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pear",
      "icon": "🍐",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "sour-cherry",
      "name": "酸樱桃",
      "hu": "meggy",
      "en": "sour cherry",
      "category": "fruit",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        6,
        7
      ],
      "uses": [
        "冷酸樱桃汤",
        "果馅卷",
        "糖渍与果酱"
      ],
      "cooking": [
        "boil",
        "bake",
        "raw"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-retes"
      ],
      "regions": [
        "匈牙利多个果区；鲜果季可在城市市场寻找国内批次。"
      ],
      "summary": "比甜樱桃酸，meggyleves 是加奶油的水果汤，甜点里也常见。",
      "trade": "鲜果、冷冻果和罐头为不同贸易品类，不混算重量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sour+cherry",
      "icon": "🍒",
      "iconLabel": "",
      "features": [
        {
          "kind": "method",
          "name": "酸樱桃冷汤",
          "description": "Meggyleves 用酸樱桃做冷汤，区别于直接鲜食的甜樱桃。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "sweet-cherry",
      "name": "甜樱桃",
      "hu": "cseresznye",
      "en": "sweet cherry",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        5,
        6,
        7
      ],
      "uses": [
        "鲜食",
        "果酱",
        "甜点"
      ],
      "cooking": [
        "raw",
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利果园与进口渠道。"
      ],
      "summary": "cseresznye 与 meggy 是两种市场标签，买甜樱桃时不要混淆。",
      "trade": "同季也可能见到进口；产地以标牌为准。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+cherry",
      "icon": "🍒",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "plum",
      "name": "李子",
      "hu": "szilva",
      "en": "plum",
      "category": "fruit",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        7,
        8,
        9
      ],
      "uses": [
        "李子饺子",
        "浓缩李子酱",
        "蒸馏酒原料"
      ],
      "cooking": [
        "boil",
        "bake",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利果园；Szatmár 是相关果酱与果酒的传统地域名。"
      ],
      "summary": "szilvás gombóc 是裹李子的甜土豆面团球；szilvalekvár 是李子酱。",
      "trade": "鲜李子、果酱和 pálinka 的统计单位与产品分类不同。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=plum",
      "icon": "",
      "iconLabel": "李子",
      "features": [
        {
          "kind": "method",
          "name": "浓李子酱",
          "description": "Szilvalekvár 是常见李子酱；也可进入糕点。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "dish",
          "name": "李子团子",
          "description": "Szilvás gombóc 是裹李子的土豆面团甜食。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "apricot",
      "name": "杏",
      "hu": "sárgabarack",
      "en": "apricot",
      "category": "fruit",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        6,
        7
      ],
      "uses": [
        "杏酱",
        "蛋糕夹馅",
        "杏白兰地"
      ],
      "cooking": [
        "raw",
        "boil",
        "bake",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-beigli"
      ],
      "regions": [
        "匈牙利果园；Gönc 一带有著名杏果与杏酒传统。"
      ],
      "summary": "barack 也可能泛指桃类，买杏时认 sárgabarack；杏酱常用于糕点。",
      "trade": "国内产量受春霜影响；不据此推定当前价格或进口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apricot",
      "icon": "",
      "iconLabel": "杏",
      "features": [
        {
          "kind": "method",
          "name": "杏酱与杏子蒸馏酒",
          "description": "Sárgabarack 可制杏酱，也可作为水果蒸馏酒的原料；并非所有杏都在当地种植。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "peach",
      "name": "桃",
      "hu": "őszibarack",
      "en": "peach",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8,
        9
      ],
      "uses": [
        "鲜食",
        "糖水",
        "水果甜点"
      ],
      "cooking": [
        "raw",
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内果园与欧洲进口；摊位可询问产区。"
      ],
      "summary": "őszibarack 为桃，词面含“秋”但并不表示只在秋季上市。",
      "trade": "新鲜果、罐头和果汁须分别读贸易统计。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=peach",
      "icon": "🍑",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "strawberry",
      "name": "草莓",
      "hu": "szamóca / eper",
      "en": "strawberry",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        5,
        6
      ],
      "uses": [
        "鲜食",
        "果酱",
        "甜点与冰淇淋"
      ],
      "cooking": [
        "raw",
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利露地或设施栽培，非本季亦有进口。"
      ],
      "summary": "日常常说 eper；温室与进口会使销售月份早于露地产季。",
      "trade": "五月至六月是近似露地新季窗口，不代表全年门店供应。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=strawberry",
      "icon": "🍓",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "watermelon",
      "name": "西瓜",
      "hu": "görögdinnye",
      "en": "watermelon",
      "category": "fruit",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8,
        9
      ],
      "uses": [
        "鲜食",
        "果汁",
        "夏季冷盘"
      ],
      "cooking": [
        "raw",
        "drink"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利夏季瓜田与境外供应商。"
      ],
      "summary": "görögdinnye 是西瓜，sárgadinnye 是甜瓜；夏季可找 magyar 原产标签。",
      "trade": "国内新季前后的进口供应不能只按国名词源判断。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=watermelon",
      "icon": "🍉",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "grape",
      "name": "葡萄",
      "hu": "szőlő",
      "en": "grape",
      "category": "fruit",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        8,
        9,
        10
      ],
      "uses": [
        "鲜食",
        "葡萄汁",
        "葡萄酒"
      ],
      "cooking": [
        "raw",
        "ferment",
        "drink"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-5"
      ],
      "regions": [
        "匈牙利葡萄园；食用葡萄与酿酒葡萄应分别理解。"
      ],
      "summary": "布达佩斯可以买到各葡萄酒区产品；托卡伊酒区并不位于首都市内。",
      "trade": "葡萄鲜果贸易、葡萄汁和葡萄酒贸易不能直接相加。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=grape",
      "icon": "🍇",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "托卡伊等葡萄酒产区",
          "description": "匈牙利有多个葡萄酒产区，首都销售不代表在市内种植或酿造。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "tomato",
      "name": "番茄",
      "hu": "paradicsom",
      "en": "tomato",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9
      ],
      "uses": [
        "红椒番茄炖菜",
        "沙拉",
        "酱汁"
      ],
      "cooking": [
        "raw",
        "stew",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-lecso"
      ],
      "regions": [
        "国内露地 / 温室与进口供应。"
      ],
      "summary": "与甜椒、洋葱同炖的 lecsó 是理解当地夏季蔬菜的入口。",
      "trade": "设施栽培与进口均会延长供应；无布达佩斯进口量拆分。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=tomato",
      "icon": "🍅",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Lecsó 红椒番茄炖菜",
          "description": "番茄与甜椒、洋葱共同炖煮，配方可有不同变化。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "sweet-pepper",
      "name": "鲜甜椒",
      "hu": "paprika / TV paprika",
      "en": "sweet pepper",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9
      ],
      "uses": [
        "lecsó",
        "酿甜椒",
        "沙拉"
      ],
      "cooking": [
        "raw",
        "stew",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-lecso"
      ],
      "regions": [
        "国内设施与露地种植，也有进口。"
      ],
      "summary": "paprika 可指鲜椒也可指椒粉；浅黄锥形甜椒与磨粉用红椒不是同一售卖形态。",
      "trade": "辣度看 édes / csípős，鲜椒和椒粉分别统计。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+pepper",
      "icon": "🫑",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Lecsó 红椒番茄炖菜",
          "description": "以鲜椒入菜，不能把所有 paprika 都理解为辣椒粉。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "potato",
      "name": "土豆",
      "hu": "burgonya / krumpli",
      "en": "potato",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9,
        10
      ],
      "uses": [
        "土豆泥",
        "层烤土豆",
        "炖汤与甜饺面团"
      ],
      "cooking": [
        "boil",
        "roast",
        "fry"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-0"
      ],
      "regions": [
        "匈牙利田作与欧洲进口渠道。"
      ],
      "summary": "krumpli 是常见口语；淀粉含量与品种决定更适合煮或炸。",
      "trade": "新薯上市月份与储藏土豆全年供货分开理解。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=potato",
      "icon": "🥔",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "onion",
      "name": "洋葱",
      "hu": "vöröshagyma",
      "en": "onion",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8,
        9
      ],
      "uses": [
        "炖肉底味",
        "鱼汤",
        "红椒炖菜"
      ],
      "cooking": [
        "stew",
        "fry",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-3",
        "food-budapest-fish-soup"
      ],
      "regions": [
        "国内种植；Makó 是著名传统洋葱产区。"
      ],
      "summary": "先炒洋葱再加入红椒粉，是许多当地家常炖菜的味道基础。",
      "trade": "Makó 等地名不代表所有柜台洋葱的产地，仍要看标签。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=onion",
      "icon": "🧅",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "Makó 洋葱产区",
          "description": "Makó 是匈牙利有名的洋葱产区，并不在布达佩斯市内。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "garlic",
      "name": "大蒜",
      "hu": "fokhagyma",
      "en": "garlic",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8
      ],
      "uses": [
        "兰戈什蒜汁",
        "香肠调味",
        "炖菜"
      ],
      "cooking": [
        "raw",
        "fry",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-2"
      ],
      "regions": [
        "国内种植与进口。"
      ],
      "summary": "lángos 常抹蒜汁再加酸奶油和奶酪。",
      "trade": "进口批次很常见，但未核得匈牙利当前逐品类进口份额。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=garlic",
      "icon": "🧄",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Lángos 蒜味炸面饼",
          "description": "蒜汁常与酸奶油、奶酪一起作为炸面饼配料。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "cabbage",
      "name": "卷心菜 / 酸菜原料",
      "hu": "káposzta",
      "en": "cabbage",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "uses": [
        "卷心菜卷",
        "酸菜",
        "烤肉配菜"
      ],
      "cooking": [
        "stew",
        "pickle",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-stuffed-cabbage"
      ],
      "regions": [
        "国内田作，亦有进口与加工品供应。"
      ],
      "summary": "savanyú káposzta 是酸卷心菜，和肉馅组合可做 töltött káposzta。",
      "trade": "鲜菜和发酵菜是不同产品；市级消耗量无可靠公开拆分。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cabbage",
      "icon": "🥬",
      "iconLabel": "",
      "features": [
        {
          "kind": "method",
          "name": "酸卷心菜",
          "description": "Savanyú káposzta 为酸卷心菜，腌渍或发酵方式需看具体产品。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "dish",
          "name": "匈牙利卷心菜包",
          "description": "Töltött káposzta 常将肉馅、米与卷心菜组合。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "carrot",
      "name": "胡萝卜",
      "hu": "sárgarépa",
      "en": "carrot",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "uses": [
        "肉汤",
        "炖菜",
        "烤根菜"
      ],
      "cooking": [
        "boil",
        "stew",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内根菜田与进口供应。"
      ],
      "summary": "与欧芹根、芹菜根常组成汤菜包；买汤料时看是否为组合称重。",
      "trade": "储藏和进口带来全年供应，月份只指大致新季。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carrot",
      "icon": "🥕",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "cucumber",
      "name": "黄瓜",
      "hu": "uborka",
      "en": "cucumber",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8,
        9
      ],
      "uses": [
        "黄瓜沙拉",
        "酸黄瓜",
        "发酵黄瓜"
      ],
      "cooking": [
        "raw",
        "pickle",
        "ferment"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内露地 / 设施与进口渠道。"
      ],
      "summary": "kovászos uborka 是常见夏季发酵黄瓜，区别于普通醋渍罐头。",
      "trade": "鲜黄瓜与腌渍制品的重量及统计分类不等同。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cucumber",
      "icon": "🥒",
      "iconLabel": "",
      "features": [
        {
          "kind": "method",
          "name": "夏季发酵黄瓜",
          "description": "Kovászos uborka 与普通醋渍黄瓜不同，保存条件也不同。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "beetroot",
      "name": "甜菜根",
      "hu": "cékla",
      "en": "beetroot",
      "category": "vegetable",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        7,
        8,
        9,
        10,
        11
      ],
      "uses": [
        "醋渍配菜",
        "烤甜菜",
        "沙拉"
      ],
      "cooking": [
        "pickle",
        "roast",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内根菜种植与城市零售市场。"
      ],
      "summary": "cékla 通常是餐桌甜菜根，不要与工业制糖甜菜 cukorrépa 混淆。",
      "trade": "此处为食用甜菜根，未套用制糖甜菜产量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beetroot",
      "icon": "",
      "iconLabel": "甜菜根",
      "features": []
    },
    {
      "id": "peas",
      "name": "青豌豆",
      "hu": "zöldborsó",
      "en": "green peas",
      "category": "vegetable",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        5,
        6,
        7
      ],
      "uses": [
        "青豌豆浓菜",
        "汤",
        "配菜"
      ],
      "cooking": [
        "boil",
        "stew"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内田作，常以冷冻或罐装形式销售。"
      ],
      "summary": "főzelék 是介于浓汤与炖菜之间的蔬菜主食配菜，常搭蛋或肉。",
      "trade": "鲜品、冷冻、罐头是不同贸易品类，不将净重混为鲜重。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=green+peas",
      "icon": "",
      "iconLabel": "豌豆",
      "features": [
        {
          "kind": "dish",
          "name": "Főzelék 浓蔬菜炖菜",
          "description": "青豌豆可做浓蔬菜炖菜，常搭配蛋或肉。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "mushroom",
      "name": "蘑菇",
      "hu": "gomba / csiperke",
      "en": "mushroom",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "奶油蘑菇汤",
        "蘑菇炖菜",
        "煎烤配菜"
      ],
      "cooking": [
        "fry",
        "stew",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "栽培蘑菇可来自国内；野生与进口菌菇来源另查。"
      ],
      "summary": "csiperke 常指栽培双孢菇；陌生野菇只从合规销售渠道购买。",
      "trade": "栽培生产不是露地季节作物，此处不设果蔬采收月份。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mushroom",
      "icon": "",
      "iconLabel": "蘑菇",
      "features": []
    },
    {
      "id": "asparagus",
      "name": "芦笋",
      "hu": "spárga",
      "en": "asparagus",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        4,
        5,
        6
      ],
      "uses": [
        "蒸煮配菜",
        "浓汤",
        "黄油煎制"
      ],
      "cooking": [
        "boil",
        "fry",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内春季种植与欧洲进口。"
      ],
      "summary": "白芦笋与绿芦笋栽培及口感不同，通常分别标售。",
      "trade": "产季短，全年供应不能据此判断为本国新鲜采收。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=asparagus",
      "icon": "",
      "iconLabel": "芦笋",
      "features": []
    },
    {
      "id": "lentil",
      "name": "扁豆",
      "hu": "lencse",
      "en": "lentil",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8
      ],
      "uses": [
        "扁豆浓菜",
        "汤",
        "新年菜肴"
      ],
      "cooking": [
        "boil",
        "stew"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内种植与进口干豆渠道。"
      ],
      "summary": "lencsefőzelék 是可尝试的家常豆类菜；干豆储存供应不受鲜季限制。",
      "trade": "lentil 与 green peas 不合并；未核当前国内供给与进口比例。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=lentil",
      "icon": "",
      "iconLabel": "扁豆",
      "features": [
        {
          "kind": "dish",
          "name": "Lencsefőzelék 扁豆炖菜",
          "description": "扁豆也是当地家常浓炖菜的原料。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "pumpkin",
      "name": "南瓜",
      "hu": "sütőtök",
      "en": "pumpkin",
      "category": "vegetable",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        9,
        10,
        11
      ],
      "uses": [
        "烤南瓜",
        "浓汤",
        "糕点"
      ],
      "cooking": [
        "roast",
        "boil",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利田作与秋冬城市零售市场。"
      ],
      "summary": "sütőtök 适合烤制；与 tök 泛指的其他瓜类比较时看具体品种。",
      "trade": "储藏可延续冬季供应；工业南瓜籽油与南瓜果肉不是同一统计项。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pumpkin",
      "icon": "",
      "iconLabel": "南瓜",
      "features": []
    },
    {
      "id": "dry-bean",
      "name": "干菜豆",
      "hu": "szárazbab / bab",
      "en": "dry bean",
      "category": "vegetable",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        8,
        9
      ],
      "uses": [
        "豆汤",
        "豆类炖菜",
        "沙拉"
      ],
      "cooking": [
        "boil",
        "stew"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内田作与进口干豆供应。"
      ],
      "summary": "bableves 是豆汤；鲜四季豆 zöldbab 与成熟干豆不是同一产品形态。",
      "trade": "鲜豆荚、干豆和罐头用不同重量与海关编码；不混算进口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dry+bean",
      "icon": "🫘",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "pork",
      "name": "猪肉",
      "hu": "sertéshús",
      "en": "pork",
      "category": "meat",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "炖猪肉",
        "卷心菜卷",
        "香肠与萨拉米"
      ],
      "cooking": [
        "stew",
        "roast",
        "smoke"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-3",
        "food-budapest-stuffed-cabbage",
        "food-budapest-salami",
        "brand-pick"
      ],
      "regions": [
        "匈牙利畜牧与屠宰加工，也有跨境肉类贸易。"
      ],
      "summary": "Mangalica 是匈牙利相关猪种名，商品是否使用该猪种要查明确标签。",
      "trade": "活猪、猪肉和香肠分别统计；人均食物可供量不是实际入口摄入量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pork",
      "icon": "🐖",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "Mangalica 猪种",
          "description": "与匈牙利有代表性联系的猪种；普通猪肉商品不自动等于 Mangalica。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "dish",
          "name": "萨拉米与卷心菜包",
          "description": "猪肉可用于香肠、萨拉米及卷心菜包，具体产品配方不同。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "beef",
      "name": "牛肉",
      "hu": "marhahús",
      "en": "beef",
      "category": "meat",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "古拉什汤",
        "炖牛肉",
        "肉汤"
      ],
      "cooking": [
        "stew",
        "boil",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-0",
        "food-budapest-3"
      ],
      "regions": [
        "国内畜牧与进口牛肉供应。"
      ],
      "summary": "gulyás 常是带汤的牛肉菜；pörkölt 更接近浓炖肉，但配方可用不同肉类。",
      "trade": "胴体重、零售肉重和菜肴净重不可相互替代。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beef",
      "icon": "🐄",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Gulyás 古拉什汤",
          "description": "常见牛肉、蔬菜与红椒组合；gulyás 与较浓的 pörkölt 不宜混为一菜。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "chicken",
      "name": "鸡肉",
      "hu": "csirkehús",
      "en": "chicken",
      "category": "meat",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "红椒炖鸡",
        "裹粉炸鸡",
        "肉汤"
      ],
      "cooking": [
        "stew",
        "fry",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-chicken-paprikash"
      ],
      "regions": [
        "国内家禽养殖及跨境肉类供应。"
      ],
      "summary": "红椒炖鸡 paprikás csirke 常搭酸奶油与小面疙瘩 nokedli。",
      "trade": "全国 poultry meat 包含多种家禽，不应全部当作鸡肉。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=chicken",
      "notes": "详情中的禽肉人均可供量包含鸡、鸭等禽肉，不是仅鸡肉，也不是实际摄入。",
      "icon": "🐔",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Paprikás csirke 红椒炖鸡",
          "description": "常搭酸奶油与 nokedli 小面疙瘩。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "duck-goose",
      "name": "鸭与鹅",
      "hu": "kacsa / liba",
      "en": "duck / goose",
      "category": "meat",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [],
      "uses": [
        "烤鸭腿",
        "烤鹅",
        "油脂与肝制品"
      ],
      "cooking": [
        "roast",
        "stew"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利家禽产业与肉制品供应链。"
      ],
      "summary": "kacsa 为鸭、liba 为鹅；鹅肝 libamáj 与鸭肝 kacsamáj 要区分。",
      "trade": "活禽、禽肉和肝制品分类不同；此处不虚构当前出口排名或份额。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=duck+%2F+goose",
      "icon": "",
      "iconLabel": "鸭·鹅",
      "features": []
    },
    {
      "id": "carp",
      "name": "鲤鱼",
      "hu": "ponty",
      "en": "carp",
      "category": "aquatic",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [],
      "uses": [
        "匈牙利鱼汤",
        "裹粉炸鱼",
        "节庆餐"
      ],
      "cooking": [
        "boil",
        "fry"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [
        "food-budapest-fish-soup",
        "food-szeged-0"
      ],
      "regions": [
        "匈牙利内陆池塘养殖及淡水渔业；不是首都市内海产。"
      ],
      "summary": "本地鱼汤可用鲤鱼；鱼刺较多。养殖鱼与野生捕捞必须分别统计。",
      "trade": "匈牙利全国淡水养殖不等于布达佩斯产量；鲜活、冰鲜、冷冻贸易也不同。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carp",
      "habitat": "freshwater",
      "icon": "🐟",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Halászlé 匈牙利鱼汤",
          "description": "鲤鱼可用于红椒鱼汤；鱼刺较多，不把餐厅鱼汤自动认作多瑙河市区野捕。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "catfish",
      "name": "鲶鱼",
      "hu": "harcsa",
      "en": "catfish",
      "category": "aquatic",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "红椒鲶鱼炖菜",
        "煎鱼",
        "鱼汤"
      ],
      "cooking": [
        "stew",
        "fry",
        "boil"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [
        "food-budapest-fish-soup"
      ],
      "regions": [
        "匈牙利内陆水产与供应商；非洲鲶鱼和欧洲鲶鱼要区分。"
      ],
      "summary": "harcsapaprikás 是可寻找的餐厅菜名；afrikai harcsa 为非洲鲶鱼。",
      "trade": "鱼种、养殖方式和来源国看标签；全国养殖总量不能直接当餐厅消费。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=catfish",
      "habitat": "freshwater",
      "icon": "🐟",
      "iconLabel": "",
      "features": [
        {
          "kind": "dish",
          "name": "Harcsapaprikás 红椒炖鲶鱼",
          "description": "可在菜单上寻找此菜名；鲶鱼品种和供应来源以菜单及标签为准。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "pikeperch",
      "name": "梭鲈",
      "hu": "fogas / süllő",
      "en": "pike-perch",
      "category": "aquatic",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "煎烤鱼排",
        "整鱼",
        "餐厅鱼菜"
      ],
      "cooking": [
        "fry",
        "roast"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "内陆水体、养殖与境外供应均可能进入市场。"
      ],
      "summary": "fogas / süllő 指梭鲈，餐厅常写 fogasfilé；不应仅凭菜名宣称巴拉顿湖野捕。",
      "trade": "菜单上的“当地风味”不是捕捞地证明；进口吨数未核。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pike-perch",
      "habitat": "freshwater",
      "icon": "🐟",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "trout",
      "name": "鳟鱼",
      "hu": "pisztráng",
      "en": "trout",
      "category": "aquatic",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "烤鳟鱼",
        "煎鱼",
        "烟熏鱼"
      ],
      "cooking": [
        "roast",
        "fry",
        "smoke"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "国内冷水养殖与欧洲进口供应。"
      ],
      "summary": "温度适宜的冷水养殖与河湖自然捕捞是不同来源。",
      "trade": "烟熏、冰鲜与冷冻品须按各自货品统计。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=trout",
      "habitat": "freshwater",
      "icon": "🐟",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "salmon",
      "name": "三文鱼",
      "hu": "lazac",
      "en": "salmon",
      "category": "aquatic",
      "origin": "import",
      "originLabel": "依赖进口",
      "season": [],
      "uses": [
        "鱼排",
        "烟熏三文鱼",
        "沙拉"
      ],
      "cooking": [
        "fry",
        "roast",
        "smoke"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "境外海洋 / 水产供应链，经进口商进入内陆市场。"
      ],
      "summary": "匈牙利没有海岸，市内销售的海产不构成当地海洋捕捞；具体原产国仍看包装。",
      "trade": "进口可经其他欧盟成员国分销；销售品牌、发货国与养殖国不必相同。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=salmon",
      "habitat": "marine",
      "icon": "🐟",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "herring",
      "name": "鲱鱼",
      "hu": "hering",
      "en": "herring",
      "category": "aquatic",
      "origin": "import",
      "originLabel": "依赖进口",
      "season": [],
      "uses": [
        "腌鱼冷盘",
        "三明治",
        "鱼沙拉"
      ],
      "cooking": [
        "pickle",
        "smoke"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "境外海产供应，常见腌渍或罐装。"
      ],
      "summary": "超市罐头或冷藏柜比较常见，腌渍产品可能含较多盐或糖。",
      "trade": "鲜重、罐头净重和鱼肉含量不是同一口径；没有城市级进口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=herring",
      "habitat": "marine",
      "icon": "🐟",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "shrimp",
      "name": "虾",
      "hu": "garnélarák",
      "en": "shrimp",
      "category": "aquatic",
      "origin": "import",
      "originLabel": "依赖进口",
      "season": [],
      "uses": [
        "煎炒",
        "意面",
        "汤与沙拉"
      ],
      "cooking": [
        "fry",
        "boil"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "境外捕捞 / 养殖与冷冻运输。"
      ],
      "summary": "在布达佩斯售卖的海虾来自外部供应链；淡水小龙虾不是同一品类。",
      "trade": "带壳与去壳重量不可直接比较，原产国及养殖 / 捕捞看标签。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=shrimp",
      "habitat": "marine",
      "icon": "🦐",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "mussel",
      "name": "贻贝 / 海贝",
      "hu": "kagyló",
      "en": "mussel / shellfish",
      "category": "aquatic",
      "origin": "import",
      "originLabel": "依赖进口",
      "season": [],
      "uses": [
        "白酒焖贝",
        "意面",
        "汤"
      ],
      "cooking": [
        "boil",
        "stew"
      ],
      "sourceIds": [
        "eu-fishery-hu",
        "fao-fbs"
      ],
      "cardIds": [],
      "regions": [
        "境外海产供应，常见冷冻或餐饮渠道。"
      ],
      "summary": "kagyló 是宽泛贝类词；必须查看具体种类，不能把所有贝类统称贻贝。",
      "trade": "活贝、熟肉和罐藏的重量与保存要求不同；不等同匈牙利本土海产。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mussel+%2F+shellfish",
      "habitat": "marine",
      "icon": "",
      "iconLabel": "贻贝",
      "features": []
    },
    {
      "id": "sunflower",
      "name": "向日葵籽 / 葵花油",
      "hu": "napraforgó / napraforgóolaj",
      "en": "sunflower seed / oil",
      "category": "oil",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        8,
        9,
        10
      ],
      "uses": [
        "烹调用油",
        "瓜子",
        "饲料饼粕"
      ],
      "cooking": [
        "fry",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利油料田与加工企业。"
      ],
      "summary": "种子压榨后可产油与饼粕；种子重量不能当作同量食用油。",
      "trade": "全国葵花籽生产量见详情；籽粒、食用油和饼粕分别核算，本专题未取得可比的成品油进口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sunflower+seed+%2F+oil",
      "icon": "🌻",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "rapeseed",
      "name": "油菜籽 / 菜籽油",
      "hu": "repce / repceolaj",
      "en": "rapeseed / oil",
      "category": "oil",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        6,
        7
      ],
      "uses": [
        "食用植物油",
        "蛋白饼粕饲料",
        "生物燃料原料"
      ],
      "cooking": [
        "fry",
        "roast"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利油料田与油脂加工供应链。"
      ],
      "summary": "农业油料除了上餐桌，也进入饲料、工业与能源链；菜籽油与籽粒产量不可等同。",
      "trade": "生物柴油中的原料比例、菜籽贸易和成品燃料贸易须分别核算。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rapeseed+%2F+oil",
      "icon": "",
      "iconLabel": "油菜籽",
      "features": []
    },
    {
      "id": "paprika-powder",
      "name": "红椒粉",
      "hu": "fűszerpaprika",
      "en": "ground paprika",
      "category": "spice",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        8,
        9,
        10
      ],
      "uses": [
        "古拉什汤",
        "红椒炖鸡",
        "香肠与红椒酱"
      ],
      "cooking": [
        "dry",
        "stew"
      ],
      "sourceIds": [
        "hu-tourism",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-szeged-2",
        "food-budapest-0",
        "food-budapest-chicken-paprikash",
        "food-product-eros-pista"
      ],
      "regions": [
        "Szeged、Kalocsa 为著名红椒粉地域；亦有其他国内与进口产品。"
      ],
      "summary": "édes 多为甜口，csípős 表示辣。椒粉直接接触过热油容易发苦，常移锅降温再加。",
      "trade": "原产保护名称、一般红椒粉与红椒酱应分别看标签；未取得逐类进口量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=ground+paprika",
      "icon": "",
      "iconLabel": "椒粉",
      "features": [
        {
          "kind": "regional",
          "name": "塞格德 / 卡洛乔红椒",
          "description": "匈牙利有传统红椒产区，购买时核对具体产地。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "method",
          "name": "甜椒粉与辣椒粉分开认",
          "description": "Édes 通常指甜口，csípős 表示辣；椒粉接触过热油可能发苦。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "dish",
          "name": "红椒炖鸡与古拉什",
          "description": "椒粉是多种当地汤、炖菜的调味原料，配方与辣度因菜而异。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "caraway",
      "name": "葛缕子籽",
      "hu": "kömény",
      "en": "caraway",
      "category": "spice",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        6,
        7,
        8
      ],
      "uses": [
        "炖汤",
        "面包",
        "卷心菜菜肴"
      ],
      "cooking": [
        "dry",
        "stew",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "欧洲香料供应链；具体种植国看包装。"
      ],
      "summary": "这里的 kömény 通常是 caraway；római kömény 才是 cumin（孜然），两者香气不同。",
      "trade": "混合调味料和单一香料不能混为一种进口货品。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=caraway",
      "icon": "",
      "iconLabel": "葛缕子",
      "features": []
    },
    {
      "id": "dill",
      "name": "莳萝",
      "hu": "kapor",
      "en": "dill",
      "category": "spice",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        5,
        6,
        7,
        8,
        9
      ],
      "uses": [
        "黄瓜沙拉",
        "酸奶油酱",
        "炖南瓜 / 浓菜"
      ],
      "cooking": [
        "raw",
        "boil",
        "pickle"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "国内香草种植与进口供应。"
      ],
      "summary": "新鲜莳萝与酸奶油、黄瓜搭配常见，也可以买到干莳萝。",
      "trade": "鲜、干香草重量差异大，统计时须分别处理。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dill",
      "icon": "",
      "iconLabel": "莳萝",
      "features": []
    },
    {
      "id": "horseradish",
      "name": "辣根",
      "hu": "torma",
      "en": "horseradish",
      "category": "spice",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        10,
        11,
        3,
        4
      ],
      "uses": [
        "火腿配料",
        "辣根酱",
        "冷盘"
      ],
      "cooking": [
        "raw",
        "pickle"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利有传统辣根种植与加工。"
      ],
      "summary": "味道接近山葵的冲鼻感，和辣椒辣不同；罐装酱可能加醋、奶油或苹果。",
      "trade": "整根、磨泥与混合酱是不同货品，未取得当期贸易吨数。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=horseradish",
      "icon": "",
      "iconLabel": "辣根",
      "features": []
    },
    {
      "id": "milk",
      "name": "奶与乳制品",
      "hu": "tej / tejtermék",
      "en": "milk / dairy",
      "category": "dairy",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "酸奶油",
        "凝乳 túró",
        "奶酪与甜点"
      ],
      "cooking": [
        "ferment",
        "bake",
        "drink"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-turos-csusza",
        "food-culture-trappista",
        "food-product-turo-rudi"
      ],
      "regions": [
        "国内奶牛与乳品加工，同时有进口乳品。"
      ],
      "summary": "tejföl 是酸奶油；túró 为凝乳，常用于甜食与拌面；Trappista 是常见奶酪。",
      "trade": "FAO milk excluding butter 不是超市液态奶销量，不能误写为每人喝奶量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=milk+%2F+dairy",
      "notes": "全国奶类生产与可供量包含多种乳畜及乳品统计口径，不只是瓶装牛奶的销售重量。",
      "icon": "🥛",
      "iconLabel": "",
      "features": [
        {
          "kind": "method",
          "name": "Tejföl 酸奶油 / Túró 凝乳",
          "description": "两者是不同乳品，常用于当地炖菜、甜点与拌面。",
          "sourceIds": [
            "hu-tourism"
          ]
        },
        {
          "kind": "dish",
          "name": "Túrós csusza 凝乳拌面",
          "description": "凝乳用于咸味面食，具体配料因做法而异。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "egg",
      "name": "鸡蛋",
      "hu": "tojás",
      "en": "egg",
      "category": "eggs",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "糕点",
        "面团",
        "早餐与配菜"
      ],
      "cooking": [
        "boil",
        "fry",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-4",
        "food-budapest-pogacsa"
      ],
      "regions": [
        "国内蛋鸡与零售供应，也有跨境交易。"
      ],
      "summary": "欧盟蛋壳首位码表示饲养方式，后续国家码与生产者码有助辨识来源。",
      "trade": "人均供应的 kg/年不能直接当作“枚数”，除非明确采用蛋重假设。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=egg",
      "icon": "🥚",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "poppy-seed",
      "name": "食用罂粟籽",
      "hu": "mák",
      "en": "poppy seed",
      "category": "nuts",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [
        7,
        8
      ],
      "uses": [
        "罂粟籽卷",
        "甜面条",
        "蛋糕馅"
      ],
      "cooking": [
        "dry",
        "bake",
        "boil"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-beigli"
      ],
      "regions": [
        "国内农作与欧洲供应商；食用加工籽看正规包装。"
      ],
      "summary": "mákos 是“罂粟籽口味”，磨碎后常加糖用于糕点，与毒品并非同种食用概念。",
      "trade": "仅讨论合法食品籽与加工品，不以食品名推断入境携带规则。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=poppy+seed",
      "icon": "",
      "iconLabel": "罂粟籽",
      "features": [
        {
          "kind": "dish",
          "name": "Mákos bejgli 罂粟籽卷",
          "description": "研磨的食用罂粟籽常与糖组成糕点馅。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "walnut",
      "name": "核桃",
      "hu": "dió",
      "en": "walnut",
      "category": "nuts",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        9,
        10
      ],
      "uses": [
        "核桃卷",
        "果馅卷",
        "甜点"
      ],
      "cooking": [
        "raw",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-beigli",
        "food-budapest-somloi"
      ],
      "regions": [
        "匈牙利果园与坚果贸易。"
      ],
      "summary": "diós 为核桃口味；与 mákos 常作为 bejgli 的两种选择。",
      "trade": "带壳、去壳、烘焙馅料的净重与价格应分别比较。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=walnut",
      "icon": "",
      "iconLabel": "核桃",
      "features": [
        {
          "kind": "dish",
          "name": "Diós bejgli 核桃卷",
          "description": "核桃馅与罂粟籽馅是 bejgli 的常见选择。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "honey",
      "name": "蜂蜜",
      "hu": "méz",
      "en": "honey",
      "category": "sweetener",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [],
      "uses": [
        "茶饮调味",
        "蜂蜜糕点",
        "早餐"
      ],
      "cooking": [
        "raw",
        "bake",
        "drink"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利养蜂；蜂蜜品种与原产国以标签为准。"
      ],
      "summary": "akácméz 为洋槐蜜；混合蜜须读配料与原产标识，不能仅凭品牌断言为单一匈牙利蜜。",
      "trade": "蜂蜜贸易量与国内蜂群数量不能替代城市蜂蜜消费量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=honey",
      "icon": "🍯",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "Akácméz 洋槐蜜",
          "description": "当地常见有特色的蜂蜜类型；需查看原产标识，不能仅凭品牌推断产地。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "sugar-beet",
      "name": "制糖甜菜",
      "hu": "cukorrépa",
      "en": "sugar beet",
      "category": "sweetener",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [
        9,
        10,
        11
      ],
      "uses": [
        "蔗糖加工",
        "糖蜜发酵",
        "甜菜粕饲料"
      ],
      "cooking": [
        "ferment",
        "bake"
      ],
      "sourceIds": [
        "fao-fbs",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利糖料田与制糖加工供应链。"
      ],
      "summary": "cukorrépa 是糖料作物，不是餐桌上的红甜菜 cékla；糖最终可进入烘焙与饮料。",
      "trade": "甜菜鲜根吨数不能当成食糖产量；进口糖也不能按根重直接比较。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sugar+beet",
      "icon": "",
      "iconLabel": "糖用甜菜",
      "features": []
    },
    {
      "id": "wine",
      "name": "葡萄酒",
      "hu": "bor",
      "en": "wine",
      "category": "drink",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [],
      "uses": [
        "佐餐",
        "甜酒配甜点",
        "酒文化体验"
      ],
      "cooking": [
        "ferment",
        "drink"
      ],
      "sourceIds": [
        "hu-tourism",
        "ksh-agriculture"
      ],
      "cardIds": [
        "food-budapest-5"
      ],
      "regions": [
        "匈牙利多个葡萄酒区；在布达佩斯选购全国酒区产品。"
      ],
      "summary": "Tokaji Aszú 与公牛血 Egri Bikavér 风格、产区不同；首都销售不等于首都酿造。",
      "trade": "酒类以升、百升或酒精量统计时要分别换算，不能与鲜葡萄吨数相加。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wine",
      "icon": "🍷",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "Tokaji Aszú / Egri Bikavér",
          "description": "托卡伊贵腐甜酒与埃格尔公牛血风格、产区不同，并非首都市区特产。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "palinka",
      "name": "水果蒸馏酒",
      "hu": "pálinka",
      "en": "fruit spirit",
      "category": "drink",
      "origin": "domestic",
      "originLabel": "匈牙利产",
      "season": [],
      "uses": [
        "小杯品饮",
        "果香比较",
        "伴手礼"
      ],
      "cooking": [
        "ferment",
        "drink"
      ],
      "sourceIds": [
        "hu-tourism",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "匈牙利水果蒸馏传统，各产地与果种看标签。"
      ],
      "summary": "杏、李、梨等都可作原料；发酵后还需蒸馏，酒精度明显高于葡萄酒。",
      "trade": "成品升数不等于原果耗用量，且酒精度会影响纯酒精量。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=fruit+spirit",
      "icon": "🥃",
      "iconLabel": "",
      "features": [
        {
          "kind": "regional",
          "name": "Pálinka 水果蒸馏酒",
          "description": "以水果发酵后蒸馏，可见杏、李、梨等原料；原料与酒精度看标签。",
          "sourceIds": [
            "hu-tourism"
          ]
        }
      ]
    },
    {
      "id": "beer",
      "name": "啤酒",
      "hu": "sör",
      "en": "beer",
      "category": "drink",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "佐餐",
        "啤酒馆体验",
        "低醇 / 无醇选择"
      ],
      "cooking": [
        "ferment",
        "drink"
      ],
      "sourceIds": [
        "hu-tourism",
        "ksh-agriculture"
      ],
      "cardIds": [],
      "regions": [
        "布达佩斯及匈牙利有酿造企业，也有进口品牌。"
      ],
      "summary": "本地酿造、品牌国别与麦芽 / 啤酒花原产地是三件事。",
      "trade": "啤酒产量不意味着所有谷物和啤酒花均由本国种植；无当期首都原料进口拆分。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beer",
      "icon": "🍺",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "coffee",
      "name": "咖啡",
      "hu": "kávé",
      "en": "coffee",
      "category": "drink",
      "origin": "import",
      "originLabel": "依赖进口",
      "season": [],
      "uses": [
        "意式浓缩",
        "奶咖",
        "咖啡馆与糕点搭配"
      ],
      "cooking": [
        "roast",
        "drink"
      ],
      "sourceIds": [
        "hu-tourism",
        "fao-fbs"
      ],
      "cardIds": [
        "food-culture-hungarian-coffee"
      ],
      "regions": [
        "咖啡豆依赖境外种植；国内可烘焙、加工和冲煮。"
      ],
      "summary": "匈牙利咖啡馆文化深厚，但不代表当地有规模咖啡农作种植。",
      "trade": "生豆、熟豆、速溶咖啡按不同贸易编码统计；烘焙地与生豆原产国分开。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=coffee",
      "icon": "☕",
      "iconLabel": "",
      "features": []
    },
    {
      "id": "mineral-water",
      "name": "饮用水 / 矿泉水",
      "hu": "ivóvíz / ásványvíz",
      "en": "drinking / mineral water",
      "category": "drink",
      "origin": "mixed",
      "originLabel": "国内 + 进口",
      "season": [],
      "uses": [
        "日常饮水",
        "烹饪",
        "含气 / 无气比较"
      ],
      "cooking": [
        "drink",
        "boil"
      ],
      "sourceIds": [
        "budapest-water"
      ],
      "cardIds": [
        "food-product-szent-water",
        "brand-szentkiralyi"
      ],
      "regions": [
        "首都自来水来自城市供水系统；瓶装矿泉水可来自国内其他水源或进口。"
      ],
      "summary": "szénsavas 为含气，szénsavmentes 为无气。布达佩斯多瑙河岸滤供水与商业矿泉水不是一回事。",
      "trade": "天然矿泉水、瓶装饮水与自来水供给是不同统计口径，不以瓶装水品牌地替代城市水源。",
      "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=drinking+%2F+mineral+water",
      "icon": "💧",
      "iconLabel": "",
      "features": []
    }
  ],
  "featureTypes": [
    {
      "id": "regional",
      "name": "地方特色",
      "description": "与匈牙利特定产区、品种或饮食传统有联系，不表示仅当地独有。"
    },
    {
      "id": "method",
      "name": "特色做法",
      "description": "值得认识的当地处理、烹饪或保存方式。"
    },
    {
      "id": "dish",
      "name": "关联美食",
      "description": "这种原料常参与的当地菜肴，可继续查看已有美食卡片。"
    }
  ],
  "indicators": [
    {
      "id": "production",
      "name": "产量",
      "unit": "吨 / 年",
      "description": "一定地区在一年内生产的数量，需注明原粮、鲜根、鲜奶或其他产品形态。",
      "coverage": "53个产品/统计组的2010–2023同年供需数据；另有部分2024农业单项。"
    },
    {
      "id": "imports",
      "name": "进口量",
      "unit": "吨 / 年",
      "description": "从境外进入的总数量，不是扣除出口后的净进口；进口额另用货币统计。",
      "coverage": "按产品列出2010–2023全国进口量，含制品或统计组的按名称区分。"
    },
    {
      "id": "exports",
      "name": "出口量",
      "unit": "吨 / 年",
      "description": "销往境外的总数量；同时进口和出口很常见。",
      "coverage": "按产品列出2010–2023全国出口量；总出口不等于净出口。"
    },
    {
      "id": "domestic-use",
      "name": "国内供给量（含非食用）",
      "unit": "吨 / 年",
      "description": "可能包括人食、饲料、种子、加工、工业及损耗，不能全部当作人吃掉的数量。",
      "coverage": "同年供需表已有国内供给量，包含食用与非食用用途。"
    },
    {
      "id": "food-supply",
      "name": "食物可供量",
      "unit": "吨 / 年；千克 / 人 / 年",
      "description": "供给链末端可供人类消费的量；除以相应人口得到人均可供量，尚未扣除消费者浪费。",
      "coverage": "同年Food总量与由同版人口估算的人均量均已列出；可切换产品及年份。"
    },
    {
      "id": "consumption",
      "name": "实际消费量与人均消费量",
      "unit": "吨 / 年；千克 / 人 / 年",
      "description": "根据调查等明确方法统计的实际消费；家庭购买、家庭消费和实际摄入仍是不同口径。",
      "coverage": "本专题尚未取得可比的布达佩斯逐产品实测数据，不用可供量替代。"
    }
  ]
};

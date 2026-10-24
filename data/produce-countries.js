const produceCountries = {
  "de": {
    "id": "de",
    "name": "德国",
    "english": "GERMANY",
    "entity": "Germany",
    "iso": "DEU",
    "fao": 79,
    "flag": "🇩🇪",
    "icon": "🥔",
    "language": "de",
    "languageName": "德语",
    "intro": "从北海与波罗的海沿岸，到北德平原、莱茵河谷和阿尔卑斯山前：谷物、土豆、乳品、啤酒与葡萄酒连接着不同产区。既有大型农业和食品加工业，也通过贸易取得咖啡、热带水果和部分水产。",
    "regions": [
      {
        "title": "北德平原与下萨克森",
        "products": "土豆、谷物、油菜与畜牧",
        "text": "同属北部也有不同土壤和种植制度；粮食进入面包、饲料及加工链。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      },
      {
        "title": "巴伐利亚与阿尔高",
        "products": "乳品、奶酪、酿造大麦与啤酒花",
        "text": "山前草地、乳业和啤酒加工联系紧密；啤酒产地不等于所有麦芽和酒花均来自本地。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      },
      {
        "title": "莱茵河、摩泽尔与美因河谷",
        "products": "酿酒葡萄与葡萄酒",
        "text": "以葡萄园、酒庄和各产区风格认识地理；葡萄种植量与成品葡萄酒量分开。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      },
      {
        "title": "阿尔特斯兰与博登湖周边",
        "products": "苹果、梨与果品加工",
        "text": "果园景观与果汁、果酒、烘焙都有联系；储藏苹果可以在收获季后继续销售。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      },
      {
        "title": "北海与波罗的海沿岸",
        "products": "鲱鱼、海鱼、北海虾与海产加工",
        "text": "捕捞海域、上岸港、加工地点和进口来源可能各不相同。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      },
      {
        "title": "巴登、普法尔茨与区域蔬菜带",
        "products": "芦笋、浆果、葡萄与露地蔬菜",
        "text": "露地收获、温室、储藏和跨境供应共同形成全年货架。",
        "sourceIds": [
          "de-food-reference"
        ],
        "verified": false
      }
    ],
    "food": {
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
          "description": "水果和可生食蔬菜的鲜食、凉拌；不是肉鱼生食指引。",
          "icon": "🥗",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "stew",
          "name": "炖煮 / 焖烧",
          "description": "炖肉、炖豆与炖蔬菜；水量和时间随食材改变。",
          "icon": "🍲",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "fry",
          "name": "煎炸",
          "description": "煎鱼、炸肉排、土豆与面糊等；用油依标签和温度选择。",
          "icon": "🍳",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "roast",
          "name": "烤制",
          "description": "烤肉、根菜、南瓜与鱼类。",
          "icon": "🔥",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "bake",
          "name": "烘焙 / 制面",
          "description": "面包、糕点、团子和面条等面粉用途。",
          "icon": "🥖",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "boil",
          "name": "水煮 / 汤 / 粥",
          "description": "汤、粥、水煮土豆、面和豆类。",
          "icon": "🥣",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "pickle",
          "name": "腌渍",
          "description": "醋渍、盐渍与乳酸发酵属于不同过程。",
          "icon": "🥒",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "dry",
          "name": "干燥 / 研磨",
          "description": "香料、籽实、菌类和果品的干燥加工。",
          "icon": "🌶️",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "smoke",
          "name": "烟熏 / 风干",
          "description": "鱼、肉和部分乳品的烟熏或风干；是否即食仍看标签。",
          "icon": "🥓",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "ferment",
          "name": "发酵 / 酿造",
          "description": "酸菜、乳品、啤酒、葡萄酒和果酒的发酵加工。",
          "icon": "🫙",
          "sourceIds": [
            "de-food-reference"
          ]
        },
        {
          "id": "drink",
          "name": "饮用 / 冲泡",
          "description": "水、咖啡、茶与酒类的饮用或冲泡。",
          "icon": "☕",
          "sourceIds": [
            "de-food-reference"
          ]
        }
      ],
      "featureTypes": [
        {
          "id": "regional",
          "name": "地方特色",
          "description": "与当地特定产区、品种或饮食传统有联系，不表示仅当地独有。"
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
          "coverage": "本专题尚未取得可比的全国同口径逐产品实测数据，不用可供量替代。"
        }
      ],
      "title": "德国食材与物产",
      "scope": "德国全国；产区与用途为导读",
      "seasonNote": "月份仅为通常国内露地收获参考，因地区、海拔、品种、天气、设施和储藏而异；空白表示未提供，不代表没有供应。",
      "notes": [
        "产区是了解供应链的线索，不承诺任一批次为国产；请看原产国、品种、生产者和加工地点。"
      ],
      "sources": [],
      "items": [
        {
          "id": "wheat",
          "name": "小麦",
          "en": "wheat",
          "category": "grain",
          "icon": "🌾",
          "iconLabel": "",
          "season": [
            7,
            8
          ],
          "cooking": [
            "bake",
            "boil"
          ],
          "local": "Weizen",
          "language": "de",
          "regions": [
            "北德平原、巴伐利亚等耕作区"
          ],
          "uses": [
            "面包",
            "椒盐卷饼",
            "蛋糕与面条"
          ],
          "summary": "小麦粉 Type 405、550 等是灰分等级，不能直接等同蛋白质或全麦比例。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-munich-1",
            "food-culture-brot"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wheat"
        },
        {
          "id": "maize",
          "name": "玉米",
          "en": "maize",
          "category": "grain",
          "icon": "🌽",
          "iconLabel": "",
          "season": [
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "boil",
            "roast"
          ],
          "local": "Mais",
          "language": "de",
          "regions": [
            "德国多地耕作区"
          ],
          "uses": [
            "饲料",
            "淀粉",
            "少量食用玉米制品"
          ],
          "summary": "区分籽粒玉米与青贮玉米；后者不应当成罐头甜玉米或人的主粮消费量。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=maize"
        },
        {
          "id": "barley",
          "name": "大麦",
          "en": "barley",
          "category": "grain",
          "icon": "",
          "iconLabel": "大麦",
          "season": [
            6,
            7
          ],
          "cooking": [
            "boil",
            "ferment"
          ],
          "local": "Gerste",
          "language": "de",
          "regions": [
            "巴伐利亚及多地谷物区"
          ],
          "uses": [
            "麦芽",
            "啤酒与饲料"
          ],
          "summary": "只有符合酿造要求的一部分大麦进入啤酒，饲料大麦不能全部当作酿酒原料。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-culture-helles"
          ],
          "features": [
            {
              "kind": "method",
              "name": "大麦到麦芽和啤酒",
              "description": "酿造麦芽对品种、质量与加工有要求；产量不等于成品啤酒吨数。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=barley"
        },
        {
          "id": "rye",
          "name": "黑麦",
          "en": "rye",
          "category": "grain",
          "icon": "",
          "iconLabel": "黑麦",
          "season": [
            7,
            8
          ],
          "cooking": [
            "bake",
            "ferment"
          ],
          "local": "Roggen",
          "language": "de",
          "regions": [
            "北德与东部轻质土壤区"
          ],
          "uses": [
            "黑麦面包",
            "酸种混合面包"
          ],
          "summary": "Roggenbrot 与 Mischbrot 的配方不同；颜色深不自动等于纯黑麦或全麦。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-culture-brot"
          ],
          "features": [
            {
              "kind": "dish",
              "name": "黑麦与酸种面包",
              "description": "认识黑麦、小麦混合面包和酸种；并非所有深色面包都是全麦。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rye"
        },
        {
          "id": "oats",
          "name": "燕麦",
          "en": "oats",
          "category": "grain",
          "icon": "",
          "iconLabel": "燕麦",
          "season": [
            7,
            8
          ],
          "cooking": [
            "boil",
            "bake"
          ],
          "local": "Hafer",
          "language": "de",
          "regions": [
            "德国多地谷物区"
          ],
          "uses": [
            "燕麦片",
            "早餐粥",
            "烘焙与植物饮品"
          ],
          "summary": "Haferflocken 在超市很常见；燕麦饮品是加工品，重量不能直接与原燕麦相加。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=oats"
        },
        {
          "id": "rice",
          "name": "稻米",
          "en": "rice",
          "category": "grain",
          "icon": "🌾",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Reis",
          "language": "de",
          "regions": [
            "国际稻米供应链"
          ],
          "uses": [
            "米饭",
            "牛奶米布丁 Milchreis"
          ],
          "summary": "德国不是主要稻米产区。米布丁、长粒米和寿司米是用途标签，注意实际原产国。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rice"
        },
        {
          "id": "apple",
          "name": "苹果",
          "en": "apple",
          "category": "fruit",
          "icon": "🍎",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "bake",
            "boil"
          ],
          "local": "Apfel",
          "language": "de",
          "regions": [
            "阿尔特斯兰、博登湖及多地果园"
          ],
          "uses": [
            "鲜食",
            "苹果汁",
            "苹果蛋糕与果泥"
          ],
          "summary": "储藏使德国苹果在收获季后继续出现；果汁浓缩加工与鲜食是不同供应链。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [
            "food-berlin-5"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apple"
        },
        {
          "id": "pear",
          "name": "梨",
          "en": "pear",
          "category": "fruit",
          "icon": "🍐",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Birne",
          "language": "de",
          "regions": [
            "博登湖与德国多地果园"
          ],
          "uses": [
            "鲜食",
            "炖梨",
            "果汁与糕点"
          ],
          "summary": "梨常见于秋季市场；Birnensaft 和 Obstbrand 分别是果汁与水果蒸馏酒。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pear"
        },
        {
          "id": "sour-cherry",
          "name": "酸樱桃",
          "en": "sour cherry",
          "category": "fruit",
          "icon": "🍒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "boil",
            "bake",
            "raw"
          ],
          "local": "Sauerkirsche",
          "language": "de",
          "regions": [
            "多地果园与加工供应链"
          ],
          "uses": [
            "酸樱桃酱",
            "罐头",
            "蛋糕夹层"
          ],
          "summary": "黑森林蛋糕中的樱桃、奶油与樱桃酒是不同原料，不能凭菜名判断全部原料产区。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sour+cherry"
        },
        {
          "id": "sweet-cherry",
          "name": "甜樱桃",
          "en": "sweet cherry",
          "category": "fruit",
          "icon": "🍒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Süßkirsche",
          "language": "de",
          "regions": [
            "南德与多地果园"
          ],
          "uses": [
            "鲜食",
            "果馅与甜点"
          ],
          "summary": "与酸樱桃分开辨认；进口果和国内果上市时间会重叠。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+cherry"
        },
        {
          "id": "plum",
          "name": "李子",
          "en": "plum",
          "category": "fruit",
          "icon": "",
          "iconLabel": "李子",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "boil",
            "bake",
            "ferment"
          ],
          "local": "Zwetschge / Pflaume",
          "language": "de",
          "regions": [
            "巴登、巴伐利亚等果园"
          ],
          "uses": [
            "Zwetschgendatschi 李子蛋糕",
            "果酱"
          ],
          "summary": "细长 Zwetschge 常用于烘焙，圆李子 Pflaume 的汁水与口感可以不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=plum"
        },
        {
          "id": "apricot",
          "name": "杏",
          "en": "apricot",
          "category": "fruit",
          "icon": "",
          "iconLabel": "杏",
          "season": [],
          "cooking": [
            "raw",
            "boil",
            "bake",
            "ferment"
          ],
          "local": "Aprikose",
          "language": "de",
          "regions": [
            "进口与少量国内果园"
          ],
          "uses": [
            "鲜食",
            "果酱",
            "果馅"
          ],
          "summary": "德国有少量种植，但货架常见跨境供应；不要把本土甜品等同本土水果原料。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apricot"
        },
        {
          "id": "peach",
          "name": "桃",
          "en": "peach",
          "category": "fruit",
          "icon": "🍑",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Pfirsich",
          "language": "de",
          "regions": [
            "进口及较温暖地区少量种植"
          ],
          "uses": [
            "鲜食",
            "果酱",
            "炖果"
          ],
          "summary": "成熟季多见境外南欧供应；包装标注原产国比零售品牌更能说明产地。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=peach"
        },
        {
          "id": "strawberry",
          "name": "草莓",
          "en": "strawberry",
          "category": "fruit",
          "icon": "🍓",
          "iconLabel": "",
          "season": [
            5,
            6,
            7
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Erdbeere",
          "language": "de",
          "regions": [
            "露地、设施与进口供应链"
          ],
          "uses": [
            "鲜食",
            "草莓蛋糕",
            "果酱"
          ],
          "summary": "露地草莓多集中于晚春夏初，全年出售不意味着全年在德国露地收获。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=strawberry"
        },
        {
          "id": "watermelon",
          "name": "西瓜",
          "en": "watermelon",
          "category": "fruit",
          "icon": "🍉",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "drink"
          ],
          "local": "Wassermelone",
          "language": "de",
          "regions": [
            "主要境外供应链"
          ],
          "uses": [
            "鲜食",
            "果盘与清凉沙拉"
          ],
          "summary": "德国有少量试种和区域产品，不能据此称全国货架主要来自本地。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=watermelon"
        },
        {
          "id": "grape",
          "name": "葡萄",
          "en": "grape",
          "category": "fruit",
          "icon": "🍇",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "ferment",
            "drink"
          ],
          "local": "Weintraube",
          "language": "de",
          "regions": [
            "莱茵、摩泽尔、弗兰肯等葡萄区；鲜食葡萄另有进口"
          ],
          "uses": [
            "酿酒",
            "鲜食与葡萄汁"
          ],
          "summary": "德国葡萄园主要面向酿酒；餐桌葡萄的产地和酿酒葡萄产区要分开。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=grape"
        },
        {
          "id": "tomato",
          "name": "番茄",
          "en": "tomato",
          "category": "vegetable",
          "icon": "🍅",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "stew",
            "boil"
          ],
          "local": "Tomate",
          "language": "de",
          "regions": [
            "国内设施与进口供应链"
          ],
          "uses": [
            "沙拉",
            "汤",
            "酱与配菜"
          ],
          "summary": "超市鲜番茄、罐装番茄和番茄酱不是同一种贸易统计，冬季尤其看原产国。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=tomato"
        },
        {
          "id": "sweet-pepper",
          "name": "鲜甜椒",
          "en": "sweet pepper",
          "category": "vegetable",
          "icon": "🫑",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "stew",
            "roast"
          ],
          "local": "Paprika",
          "language": "de",
          "regions": [
            "国内设施与进口供应链"
          ],
          "uses": [
            "鲜食",
            "酿椒",
            "烤椒与炖菜"
          ],
          "summary": "德语 Paprika 可指甜椒，也可出现在椒粉名称中；蔬菜与干香料应分别辨认。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+pepper"
        },
        {
          "id": "potato",
          "name": "土豆",
          "en": "potato",
          "category": "vegetable",
          "icon": "🥔",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10
          ],
          "cooking": [
            "boil",
            "roast",
            "fry"
          ],
          "local": "Kartoffel",
          "language": "de",
          "regions": [
            "下萨克森、巴伐利亚等产区"
          ],
          "uses": [
            "水煮",
            "土豆沙拉",
            "煎土豆与团子"
          ],
          "summary": "festkochend 偏适合沙拉，mehligkochend 偏适合土豆泥；加工用薯不全是餐桌鲜薯。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-berlin-4"
          ],
          "features": [
            {
              "kind": "method",
              "name": "先按烹饪类型选土豆",
              "description": "festkochend 偏适合沙拉与保持块形；mehligkochend 常做土豆泥或团子。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=potato"
        },
        {
          "id": "onion",
          "name": "洋葱",
          "en": "onion",
          "category": "vegetable",
          "icon": "🧅",
          "iconLabel": "",
          "season": [
            7,
            8,
            9
          ],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "local": "Zwiebel",
          "language": "de",
          "regions": [
            "下萨克森、巴伐利亚等蔬菜区"
          ],
          "uses": [
            "汤",
            "肉汁",
            "洋葱蛋糕与炒制"
          ],
          "summary": "Zwiebelkuchen 常与新酒季联系，烹饪用洋葱仍有国产和进口不同批次。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=onion"
        },
        {
          "id": "garlic",
          "name": "大蒜",
          "en": "garlic",
          "category": "vegetable",
          "icon": "🧄",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "fry",
            "roast"
          ],
          "local": "Knoblauch",
          "language": "de",
          "regions": [
            "境外供应及德国少量种植"
          ],
          "uses": [
            "调味",
            "蒜酱与烤蔬菜"
          ],
          "summary": "零售蒜的产地可能来自多个国家，不能从德语包装推断德国种植。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=garlic"
        },
        {
          "id": "cabbage",
          "name": "卷心菜 / 酸菜原料",
          "en": "cabbage",
          "category": "vegetable",
          "icon": "🥬",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "stew",
            "pickle",
            "ferment"
          ],
          "local": "Weißkohl / Rotkohl",
          "language": "de",
          "regions": [
            "北德等露地蔬菜区"
          ],
          "uses": [
            "酸菜 Sauerkraut",
            "红甘蓝",
            "炖菜"
          ],
          "summary": "酸菜是加工与发酵产品；生卷心菜、罐装酸菜和餐馆配菜不能直接按等重相加。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [
            "food-cologne-3"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cabbage"
        },
        {
          "id": "carrot",
          "name": "胡萝卜",
          "en": "carrot",
          "category": "vegetable",
          "icon": "🥕",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "boil",
            "stew",
            "roast"
          ],
          "local": "Karotte / Möhre",
          "language": "de",
          "regions": [
            "德国多地露地蔬菜区"
          ],
          "uses": [
            "汤",
            "炖菜",
            "沙拉与配菜"
          ],
          "summary": "Karotte 和 Möhre 都常见，属于名称差异；储藏根菜可延长国内供应季。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carrot"
        },
        {
          "id": "cucumber",
          "name": "黄瓜",
          "en": "cucumber",
          "category": "vegetable",
          "icon": "🥒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "pickle",
            "ferment"
          ],
          "local": "Gurke",
          "language": "de",
          "regions": [
            "国内设施、露地与进口供应链"
          ],
          "uses": [
            "鲜食",
            "腌黄瓜与沙拉"
          ],
          "summary": "Spreewald 的腌黄瓜传统与德国黄瓜加工联系紧密；生鲜黄瓜和腌制品要分别看。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "施普雷森林腌黄瓜",
              "description": "地方加工传统与原料黄瓜供应链相连，具体产地与认证看产品标签。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cucumber"
        },
        {
          "id": "beetroot",
          "name": "甜菜根",
          "en": "beetroot",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "甜菜根",
          "season": [
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "pickle",
            "roast",
            "boil"
          ],
          "local": "Rote Bete",
          "language": "de",
          "regions": [
            "德国多地根菜产区"
          ],
          "uses": [
            "烤制",
            "沙拉",
            "腌渍与汤"
          ],
          "summary": "Rote Bete 是食用甜菜根；Zuckerrübe 才是制糖甜菜，不能混成同一种产量。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beetroot"
        },
        {
          "id": "peas",
          "name": "青豌豆",
          "en": "green peas",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "豌豆",
          "season": [
            5,
            6,
            7
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Erbse",
          "language": "de",
          "regions": [
            "多地露地与加工供应链"
          ],
          "uses": [
            "青豌豆配菜",
            "浓汤与冷冻蔬菜"
          ],
          "summary": "青豌豆与干豌豆统计不同；冷冻加工可延长供应，不是冬季露地收获。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=green+peas"
        },
        {
          "id": "mushroom",
          "name": "蘑菇",
          "en": "mushroom",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "蘑菇",
          "season": [],
          "cooking": [
            "fry",
            "stew",
            "boil"
          ],
          "local": "Champignon / Pilz",
          "language": "de",
          "regions": [
            "栽培设施；森林野菌另有来源"
          ],
          "uses": [
            "蘑菇酱",
            "汤与炒制"
          ],
          "summary": "栽培蘑菇可全年生产；鸡油菌等野生菌要另看来源，不能将所有野菌都当作德国采集。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mushroom"
        },
        {
          "id": "asparagus",
          "name": "芦笋",
          "en": "asparagus",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "芦笋",
          "season": [
            4,
            5,
            6
          ],
          "cooking": [
            "boil",
            "fry",
            "roast"
          ],
          "local": "Spargel",
          "language": "de",
          "regions": [
            "下萨克森、勃兰登堡、巴登等产区"
          ],
          "uses": [
            "白芦笋水煮",
            "配土豆与荷兰酱"
          ],
          "summary": "白芦笋文化有鲜明季节感，常以春季到六月下旬为参考；天气和设施会改变上市期。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "春季白芦笋",
              "description": "产区、直径和新鲜度影响处理；露地季节与全年进口供给分开看。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=asparagus"
        },
        {
          "id": "lentil",
          "name": "扁豆",
          "en": "lentil",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "扁豆",
          "season": [
            7,
            8
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Linse",
          "language": "de",
          "regions": [
            "施瓦本地区种植及进口供应链"
          ],
          "uses": [
            "Linsen mit Spätzle 扁豆配面疙瘩"
          ],
          "summary": "地方菜使用扁豆不代表全国扁豆均为国产；不同品种的浸泡与烹煮时间不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=lentil"
        },
        {
          "id": "pumpkin",
          "name": "南瓜",
          "en": "pumpkin",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "南瓜",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "roast",
            "boil",
            "bake"
          ],
          "local": "Kürbis",
          "language": "de",
          "regions": [
            "德国多地瓜类产区"
          ],
          "uses": [
            "南瓜汤",
            "烤南瓜与泥"
          ],
          "summary": "Hokkaido 与 Butternut 是常见品种名；食用南瓜与观赏葫芦分开。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pumpkin"
        },
        {
          "id": "dry-bean",
          "name": "干菜豆",
          "en": "dry bean",
          "category": "vegetable",
          "icon": "🫘",
          "iconLabel": "",
          "season": [
            8,
            9
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Bohne, getrocknet",
          "language": "de",
          "regions": [
            "进口与国内豆类供应链"
          ],
          "uses": [
            "豆汤",
            "炖豆与沙拉"
          ],
          "summary": "干菜豆需按包装浸泡煮熟；与鲜菜豆、青豌豆的统计和做法不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dry+bean"
        },
        {
          "id": "pork",
          "name": "猪肉",
          "en": "pork",
          "category": "meat",
          "icon": "🐖",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "roast",
            "smoke"
          ],
          "local": "Schweinefleisch",
          "language": "de",
          "regions": [
            "下萨克森、北威州等养殖与加工链"
          ],
          "uses": [
            "烤猪肉",
            "香肠",
            "猪肘与肉排"
          ],
          "summary": "Bratwurst 是香肠类型集合，不是单一产地；鲜肉与加工肉制品重量口径不同。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-berlin-0",
            "food-munich-2"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pork"
        },
        {
          "id": "beef",
          "name": "牛肉",
          "en": "beef",
          "category": "meat",
          "icon": "🐄",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "boil",
            "roast"
          ],
          "local": "Rindfleisch",
          "language": "de",
          "regions": [
            "巴伐利亚及多地畜牧区"
          ],
          "uses": [
            "Sauerbraten 酸汁炖牛肉",
            "汤与烤肉"
          ],
          "summary": "乳业与肉牛链有联系，但奶牛数量不能直接当成牛肉产量；部位与来源国另看标签。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-cologne-2"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beef"
        },
        {
          "id": "chicken",
          "name": "鸡肉",
          "en": "chicken",
          "category": "meat",
          "icon": "🐔",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "local": "Hähnchen / Huhn",
          "language": "de",
          "regions": [
            "国内养殖及进口供应链"
          ],
          "uses": [
            "烤鸡",
            "鸡汤与煎制"
          ],
          "summary": "禽肉统计可含火鸡和其他禽类，不能把合计值全写成鸡肉。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=chicken"
        },
        {
          "id": "duck-goose",
          "name": "鸭与鹅",
          "en": "duck / goose",
          "category": "meat",
          "icon": "",
          "iconLabel": "鸭·鹅",
          "season": [],
          "cooking": [
            "roast",
            "stew"
          ],
          "local": "Ente / Gans",
          "language": "de",
          "regions": [
            "国内养殖及进口供应链"
          ],
          "uses": [
            "烤鸭",
            "圣马丁节与圣诞烤鹅"
          ],
          "summary": "节庆烤鹅是消费传统，不代表所有鹅均在德国养殖；特别留意原产国。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=duck+%2F+goose"
        },
        {
          "id": "carp",
          "name": "鲤鱼",
          "en": "carp",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "fry"
          ],
          "habitat": "freshwater",
          "local": "Karpfen",
          "language": "de",
          "regions": [
            "弗兰肯、上普法尔茨等鱼塘"
          ],
          "uses": [
            "烤鲤鱼",
            "煎鲤鱼与节庆鱼菜"
          ],
          "summary": "属于淡水养殖链，不能归入德国海洋捕捞；整鱼产量不等于去骨净肉。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carp"
        },
        {
          "id": "catfish",
          "name": "鲶鱼",
          "en": "catfish",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "habitat": "freshwater",
          "local": "Wels",
          "language": "de",
          "regions": [
            "国内养殖与跨境供应链"
          ],
          "uses": [
            "煎鱼",
            "烟熏与炖鱼"
          ],
          "summary": "Wels 通常指鲶鱼类，进口与国内养殖并存，具体种名和养殖地看标签。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=catfish"
        },
        {
          "id": "pikeperch",
          "name": "梭鲈",
          "en": "pike-perch",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "roast"
          ],
          "habitat": "freshwater",
          "local": "Zander",
          "language": "de",
          "regions": [
            "内陆水域、养殖与进口供应链"
          ],
          "uses": [
            "带皮煎鱼",
            "烤鱼与清淡酱汁"
          ],
          "summary": "餐馆供应不保证来自旁边河湖，捕捞区和养殖国要分别辨认。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pike-perch"
        },
        {
          "id": "trout",
          "name": "鳟鱼",
          "en": "trout",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "roast",
            "fry",
            "smoke"
          ],
          "habitat": "freshwater",
          "local": "Forelle",
          "language": "de",
          "regions": [
            "南德等冷水养殖区"
          ],
          "uses": [
            "煎鳟鱼",
            "烤鱼与烟熏"
          ],
          "summary": "Forelle blau 与烟熏鳟鱼工艺不同，养殖生产通常按整鱼重量统计。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=trout"
        },
        {
          "id": "salmon",
          "name": "三文鱼",
          "en": "salmon",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "roast",
            "smoke"
          ],
          "habitat": "marine",
          "local": "Lachs",
          "language": "de",
          "regions": [
            "主要境外海水养殖与进口供应链"
          ],
          "uses": [
            "煎烤",
            "烟熏与熟食"
          ],
          "summary": "德国加工或烟熏的三文鱼，原料鱼仍可能来自挪威等境外养殖区。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=salmon"
        },
        {
          "id": "herring",
          "name": "鲱鱼",
          "en": "herring",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "pickle",
            "smoke"
          ],
          "habitat": "marine",
          "local": "Hering",
          "language": "de",
          "regions": [
            "北海、波罗的海及境外供应链"
          ],
          "uses": [
            "Matjes",
            "腌鲱鱼",
            "鱼面包"
          ],
          "summary": "Matjes 是特定加工风格，不是鱼的产地；渔获海域和德国零售加工地可以不同。",
          "origin": "mixed",
          "originLabel": "德国海岸与进口供应",
          "cardIds": [
            "food-hamburg-0"
          ],
          "features": [
            {
              "kind": "dish",
              "name": "Matjes 与腌鲱鱼",
              "description": "鱼种、熟化方式和调味决定产品；Matjes 名称不代表本土捕捞。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=herring"
        },
        {
          "id": "shrimp",
          "name": "虾",
          "en": "shrimp",
          "category": "aquatic",
          "icon": "🦐",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "boil"
          ],
          "habitat": "marine",
          "local": "Garnele / Nordseekrabbe",
          "language": "de",
          "regions": [
            "北海捕捞与其他进口虾供应链"
          ],
          "uses": [
            "虾面包",
            "冷食",
            "煎炒"
          ],
          "summary": "北海褐虾与温水养殖虾不是同一产品；剥壳加工和上岸地点也可能跨国。",
          "origin": "mixed",
          "originLabel": "德国海岸与进口供应",
          "cardIds": [
            "food-hamburg-0"
          ],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=shrimp"
        },
        {
          "id": "mussel",
          "name": "贻贝 / 海贝",
          "en": "mussel / shellfish",
          "category": "aquatic",
          "icon": "",
          "iconLabel": "贻贝",
          "season": [],
          "cooking": [
            "boil",
            "stew"
          ],
          "habitat": "marine",
          "local": "Miesmuschel",
          "language": "de",
          "regions": [
            "北海养殖、捕捞及进口供应链"
          ],
          "uses": [
            "白葡萄酒煮贻贝与汤"
          ],
          "summary": "贝类有本地海产背景，也有境外供应；活贝处理和食用按标签指导。",
          "origin": "mixed",
          "originLabel": "德国海岸与进口供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mussel+%2F+shellfish"
        },
        {
          "id": "sunflower",
          "name": "向日葵籽 / 葵花油",
          "en": "sunflower seed / oil",
          "category": "oil",
          "icon": "🌻",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "fry",
            "roast"
          ],
          "local": "Sonnenblume / Sonnenblumenöl",
          "language": "de",
          "regions": [
            "国内部分种植及跨境油籽、油品链"
          ],
          "uses": [
            "食用籽",
            "煎炒与烘焙"
          ],
          "summary": "葵花籽和葵花油分列统计，压榨还产生饼粕，不按籽重等量生成油。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sunflower+seed+%2F+oil"
        },
        {
          "id": "rapeseed",
          "name": "油菜籽 / 菜籽油",
          "en": "rapeseed / oil",
          "category": "oil",
          "icon": "",
          "iconLabel": "油菜籽",
          "season": [
            6,
            7
          ],
          "cooking": [
            "fry",
            "roast"
          ],
          "local": "Raps / Rapsöl",
          "language": "de",
          "regions": [
            "北德与德国多地耕作区"
          ],
          "uses": [
            "食用油",
            "加工及非食用用途"
          ],
          "summary": "油菜田景观很常见；食用油、饲料饼粕和生物燃料是不同加工去向。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rapeseed+%2F+oil"
        },
        {
          "id": "paprika-powder",
          "name": "红椒粉",
          "en": "ground paprika",
          "category": "spice",
          "icon": "",
          "iconLabel": "椒粉",
          "season": [],
          "cooking": [
            "dry",
            "stew"
          ],
          "local": "Paprikapulver",
          "language": "de",
          "regions": [
            "进口香料与境内分装链"
          ],
          "uses": [
            "香肠",
            "炖菜与酱汁调味"
          ],
          "summary": "edelsüß 偏甜椒风味，rosenscharf 辣度更高；分装国不等于红椒种植国。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=ground+paprika"
        },
        {
          "id": "caraway",
          "name": "葛缕子籽",
          "en": "caraway",
          "category": "spice",
          "icon": "",
          "iconLabel": "葛缕子",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "dry",
            "stew",
            "bake"
          ],
          "local": "Kümmel",
          "language": "de",
          "regions": [
            "国内部分香料种植及进口"
          ],
          "uses": [
            "面包",
            "酸菜",
            "烤肉调味"
          ],
          "summary": "Kümmel 是葛缕子，不是 Kreuzkümmel 孜然；两者风味和菜谱用途不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=caraway"
        },
        {
          "id": "dill",
          "name": "莳萝",
          "en": "dill",
          "category": "spice",
          "icon": "",
          "iconLabel": "莳萝",
          "season": [
            5,
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "boil",
            "pickle"
          ],
          "local": "Dill",
          "language": "de",
          "regions": [
            "国内鲜香草与进口供应链"
          ],
          "uses": [
            "黄瓜",
            "鱼菜与酸奶酱"
          ],
          "summary": "鲜莳萝、干莳萝叶和种籽不是同一规格，烹饪加入时间也不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dill"
        },
        {
          "id": "horseradish",
          "name": "辣根",
          "en": "horseradish",
          "category": "spice",
          "icon": "",
          "iconLabel": "辣根",
          "season": [
            10,
            11,
            3,
            4
          ],
          "cooking": [
            "raw",
            "pickle"
          ],
          "local": "Meerrettich",
          "language": "de",
          "regions": [
            "弗兰肯、巴登等种植区"
          ],
          "uses": [
            "磨蓉",
            "奶油辣根酱与熟肉配料"
          ],
          "summary": "加工辣根酱可能含奶油、糖和醋，不等于纯根重；与山葵风味来源不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=horseradish"
        },
        {
          "id": "milk",
          "name": "奶与乳制品",
          "en": "milk / dairy",
          "category": "dairy",
          "icon": "🥛",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "bake",
            "drink"
          ],
          "local": "Milch / Quark / Käse",
          "language": "de",
          "regions": [
            "德国草地畜牧与乳品加工区"
          ],
          "uses": [
            "鲜奶",
            "Quark 凝乳",
            "奶酪",
            "黄油与蛋糕"
          ],
          "summary": "德国乳业规模较大；奶类总量常用生乳当量，不能把奶、黄油、奶酪公斤直接相加。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [
            "food-cologne-1"
          ],
          "features": [
            {
              "kind": "dish",
              "name": "Quark 凝乳与奶酪",
              "description": "Quark 常用于甜点或咸味涂抹，不等于液态酸奶。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-milk-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=milk+%2F+dairy"
        },
        {
          "id": "egg",
          "name": "鸡蛋",
          "en": "egg",
          "category": "eggs",
          "icon": "🥚",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "fry",
            "bake"
          ],
          "local": "Ei",
          "language": "de",
          "regions": [
            "国内蛋鸡养殖及进口供应链"
          ],
          "uses": [
            "水煮",
            "烘焙",
            "面糊与家庭菜"
          ],
          "summary": "鸡蛋码可查养殖方式和国家代码；销售品牌或包装语言不能替代产地代码。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=egg"
        },
        {
          "id": "poppy-seed",
          "name": "食用罂粟籽",
          "en": "poppy seed",
          "category": "nuts",
          "icon": "",
          "iconLabel": "罂粟籽",
          "season": [
            7,
            8
          ],
          "cooking": [
            "dry",
            "bake",
            "boil"
          ],
          "local": "Mohn",
          "language": "de",
          "regions": [
            "进口与少量国内种植供应链"
          ],
          "uses": [
            "Mohnkuchen 罂粟籽蛋糕",
            "面包"
          ],
          "summary": "食用罂粟籽属于烘焙籽实；不是毒品制品，也不能把全株产量当作食用籽量。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=poppy+seed"
        },
        {
          "id": "walnut",
          "name": "核桃",
          "en": "walnut",
          "category": "nuts",
          "icon": "",
          "iconLabel": "核桃",
          "season": [
            9,
            10
          ],
          "cooking": [
            "raw",
            "bake"
          ],
          "local": "Walnuss",
          "language": "de",
          "regions": [
            "南德等小规模果树与进口供应链"
          ],
          "uses": [
            "鲜食",
            "蛋糕",
            "面包与坚果油"
          ],
          "summary": "德国有核桃树和商业小规模生产，货架仍可能大量来自境外；整壳和仁重不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=walnut"
        },
        {
          "id": "honey",
          "name": "蜂蜜",
          "en": "honey",
          "category": "sweetener",
          "icon": "🍯",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "bake",
            "drink"
          ],
          "local": "Honig",
          "language": "de",
          "regions": [
            "德国多地养蜂与进口蜂蜜链"
          ],
          "uses": [
            "面包涂抹",
            "烘焙与饮品"
          ],
          "summary": "“EU und Nicht-EU” 混合蜜来源要看标签；德国品牌并不保证德国采蜜。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=honey"
        },
        {
          "id": "sugar-beet",
          "name": "制糖甜菜",
          "en": "sugar beet",
          "category": "sweetener",
          "icon": "",
          "iconLabel": "糖用甜菜",
          "season": [
            9,
            10,
            11
          ],
          "cooking": [
            "ferment",
            "bake"
          ],
          "local": "Zuckerrübe",
          "language": "de",
          "regions": [
            "下萨克森、北威州与巴伐利亚等产区"
          ],
          "uses": [
            "提糖",
            "糖蜜和加工副产品"
          ],
          "summary": "德国是欧盟重要制糖甜菜生产国；甜菜根、原糖当量和零售白糖必须分开比较。",
          "origin": "domestic",
          "originLabel": "德国有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sugar+beet"
        },
        {
          "id": "wine",
          "name": "葡萄酒",
          "en": "wine",
          "category": "drink",
          "icon": "🍷",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Wein",
          "language": "de",
          "regions": [
            "莱茵、摩泽尔、弗兰肯与巴登等葡萄酒区"
          ],
          "uses": [
            "配餐",
            "烹饪与葡萄酒体验"
          ],
          "summary": "Riesling、Spätburgunder 是品种线索，干型、甜度和产区要一起看；德国也进口大量葡萄酒。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "莱茵与摩泽尔葡萄酒",
              "description": "品种、产区、甜度和年份一起读，酿酒葡萄与鲜食葡萄贸易分开。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-vineyards-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wine"
        },
        {
          "id": "palinka",
          "name": "水果蒸馏酒",
          "en": "fruit brandy",
          "category": "drink",
          "icon": "🥃",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Obstbrand / Obstwasser",
          "language": "de",
          "regions": [
            "果园与蒸馏加工区"
          ],
          "uses": [
            "果蒸馏酒",
            "小量餐后酒"
          ],
          "summary": "这里对应德国水果蒸馏酒，不称为匈牙利 Pálinka；Kirschwasser、梨或李子蒸馏酒原料不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=fruit+brandy"
        },
        {
          "id": "beer",
          "name": "啤酒",
          "en": "beer",
          "category": "drink",
          "icon": "🍺",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Bier",
          "language": "de",
          "regions": [
            "巴伐利亚及全国酿造网络"
          ],
          "uses": [
            "啤酒饮用",
            "炖煮与面糊"
          ],
          "summary": "Pils、Helles、Weizen 是不同风格；酿造地不说明全部谷物和啤酒花来自同地。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [
            "food-culture-kolsch",
            "food-culture-helles"
          ],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beer"
        },
        {
          "id": "coffee",
          "name": "咖啡",
          "en": "coffee",
          "category": "drink",
          "icon": "☕",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "roast",
            "drink"
          ],
          "local": "Kaffee",
          "language": "de",
          "regions": [
            "热带咖啡产区与德国进口、烘焙链"
          ],
          "uses": [
            "过滤咖啡",
            "浓缩咖啡与糕点搭配"
          ],
          "summary": "德国是咖啡贸易和烘焙加工市场，德国烘焙不等于咖啡豆在德国种植。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=coffee"
        },
        {
          "id": "mineral-water",
          "name": "饮用水 / 矿泉水",
          "en": "drinking / mineral water",
          "category": "drink",
          "icon": "💧",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "drink",
            "boil"
          ],
          "local": "Mineralwasser / Leitungswasser",
          "language": "de",
          "regions": [
            "本地地下水、供水系统与瓶装水贸易"
          ],
          "uses": [
            "饮用与烹饪"
          ],
          "summary": "still、medium、classic 常描述气泡程度；矿泉水瓶装统计与城市自来水供水量不同。",
          "origin": "mixed",
          "originLabel": "德国产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "de-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=drinking+%2F+mineral+water"
        },
        {
          "id": "pumpkin-seed-oil",
          "name": "南瓜籽与南瓜籽油",
          "local": "Kürbiskern / Kürbiskernöl",
          "en": "pumpkin seed and pumpkin seed oil",
          "category": "oil",
          "origin": "mixed",
          "icon": "",
          "iconLabel": "南瓜籽",
          "season": [
            9,
            10
          ],
          "cooking": [
            "raw"
          ],
          "regions": [
            "进口与德国部分生产、加工供应链"
          ],
          "uses": [
            "沙拉",
            "汤出锅点缀",
            "食用籽与烘焙"
          ],
          "summary": "深绿色籽油有烘烤坚果香，常冷拌或出锅加入；种籽、油和南瓜果肉分别核算。",
          "features": [
            {
              "kind": "method",
              "name": "籽油与果肉分开看",
              "description": "特定地域产品需以认证标签核对；这里介绍风味和用途，不保证每瓶产区。",
              "sourceIds": [
                "de-food-reference"
              ]
            }
          ],
          "originLabel": "产区与跨境加工",
          "trade": "同年供需未取得本单品独立行，相关统计组不擅自拆分。",
          "sourceIds": [
            "de-food-reference"
          ],
          "cardIds": [],
          "language": "de",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pumpkin+seed+and+pumpkin+seed+oil"
        },
        {
          "id": "mustard",
          "name": "芥末籽与芥末酱",
          "local": "Senfkorn / Senf",
          "en": "mustard seed and prepared mustard",
          "category": "spice",
          "origin": "mixed",
          "icon": "",
          "iconLabel": "芥末",
          "season": [],
          "cooking": [
            "raw",
            "pickle"
          ],
          "regions": [
            "国内部分香料种植、进口与酱料加工链"
          ],
          "uses": [
            "香肠蘸酱",
            "腌汁",
            "沙拉酱"
          ],
          "summary": "籽粒与成品酱不是同一产品，süß、mittelscharf、scharf 提示甜味或辣度，配方与原料产地另看标签。",
          "features": [],
          "originLabel": "产区与跨境加工",
          "trade": "同年供需未取得本单品独立行，相关统计组不擅自拆分。",
          "sourceIds": [
            "de-food-reference"
          ],
          "cardIds": [],
          "language": "de",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mustard+seed+and+prepared+mustard"
        }
      ]
    },
    "findings": [
      {
        "title": "谷物与甜菜，不只对应面包和糖",
        "text": "Eurostat 2024 农作物文章记载：德国谷物收获量约3910万吨，制糖甜菜约3670万吨。其产品分组、重量和FAO最新单项可能不同，不把甜菜根等同零售白糖。",
        "sourceIds": [
          "eu-crops-read"
        ]
      },
      {
        "title": "奶业与乳品加工都很重要",
        "text": "Eurostat 2024 资料中，德国约占欧盟原牛奶生产的22.0%，也约占乳企收奶的22.0%；奶酪约240万吨。生产、收集和加工是不同阶段，不能把生乳与奶酪直接相加。",
        "sourceIds": [
          "eu-milk-read"
        ]
      }
    ],
    "sources": [
      {
        "id": "eu-crops-read",
        "title": "Eurostat · 农作物生产（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Agricultural_production_-_crops",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "6caa320ba94403d02fc877d588f30bdf1526268f73a8cc2d43bff5d28f309a5b",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-milk-read",
        "title": "Eurostat · 奶与乳品生产（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Milk_and_milk_product_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "2ae837c182371e65df2c22e18090ba08c90058b056223a1d406ed85e1dc435f3",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-vineyards-read",
        "title": "Eurostat · 欧盟葡萄园（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Vineyards_in_the_EU_-_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2020",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "998bfca6e6b44f494ff3fbb26a70b1470222da5a15cd27d7ecc34bf1a1614e63",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-aquaculture-read",
        "title": "Eurostat · 水产养殖（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Aquaculture_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "22c6660a561da50348ccf61138cebe8277351820e0e3f16ea4b67443ef653f13",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "de-food-reference",
        "title": "德国国家旅游局 · 饮食文化入口",
        "publisher": "German National Tourist Board",
        "url": "https://www.germany.travel/en/experience-enjoy/food-drink.html",
        "scope": "德国饮食与区域风味",
        "verified": false,
        "note": "延伸参考入口，未逐页核验菜谱与产地；食材导读不作为批次原产地认证。"
      },
      {
        "id": "de-water-reference",
        "title": "柏林水务 · 官方供水入口",
        "publisher": "Berliner Wasserbetriebe",
        "url": "https://www.bwb.de/en/",
        "scope": "柏林供水背景，非全国用水量",
        "verified": false,
        "note": "官方核查入口，未取得本次可比市级用水量。"
      }
    ],
    "checkedAt": "2026-10-24"
  },
  "at": {
    "id": "at",
    "name": "奥地利",
    "english": "AUSTRIA",
    "entity": "Austria",
    "iso": "AUT",
    "fao": 11,
    "flag": "🇦🇹",
    "icon": "🎃",
    "language": "de",
    "languageName": "德语（含奥地利用语）",
    "intro": "阿尔卑斯山地与东部平原，塑造了奥地利的乳品、谷物、糖料、果园和葡萄园。施蒂里亚南瓜籽油、瓦豪杏、山地奶酪与多瑙河葡萄酒各有地方风格；海鲜、咖啡和热带作物则连接境外供应链。",
    "regions": [
      {
        "title": "下奥地利与维也纳盆地",
        "products": "小麦、土豆、制糖甜菜与葡萄",
        "text": "东部耕地和葡萄园连接维也纳消费市场；首都本身也有葡萄种植。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      },
      {
        "title": "瓦豪与多瑙河沿岸",
        "products": "杏与酿酒葡萄",
        "text": "杏饺、杏酱和果蒸馏酒与地方果园相连；产区名称不等于每份甜品的原料认证。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      },
      {
        "title": "施蒂里亚",
        "products": "南瓜籽油、苹果、菜豆与葡萄酒",
        "text": "绿色南瓜籽油多作冷拌或出锅点缀；油、种籽和南瓜果肉分开比较。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      },
      {
        "title": "蒂罗尔、福拉尔贝格与萨尔茨堡",
        "products": "草地畜牧、奶与山地奶酪",
        "text": "高山牧场是地域线索；奶酪包装仍需查看实际生产地、奶种与工艺。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      },
      {
        "title": "上奥地利与 Mostviertel",
        "products": "谷物、乳品、苹果和梨果酒",
        "text": "谷物、牲畜、果园与食品加工共同构成区域农业，而非只生产旅游名物。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      },
      {
        "title": "布尔根兰与 Waldviertel",
        "products": "葡萄酒、谷物、罂粟籽与鲤鱼",
        "text": "东部葡萄园与北部鱼塘、籽实传统不同；淡水养殖不能归成海洋捕捞。",
        "sourceIds": [
          "at-food-reference"
        ],
        "verified": false
      }
    ],
    "food": {
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
          "description": "水果和可生食蔬菜的鲜食、凉拌；不是肉鱼生食指引。",
          "icon": "🥗",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "stew",
          "name": "炖煮 / 焖烧",
          "description": "炖肉、炖豆与炖蔬菜；水量和时间随食材改变。",
          "icon": "🍲",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "fry",
          "name": "煎炸",
          "description": "煎鱼、炸肉排、土豆与面糊等；用油依标签和温度选择。",
          "icon": "🍳",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "roast",
          "name": "烤制",
          "description": "烤肉、根菜、南瓜与鱼类。",
          "icon": "🔥",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "bake",
          "name": "烘焙 / 制面",
          "description": "面包、糕点、团子和面条等面粉用途。",
          "icon": "🥖",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "boil",
          "name": "水煮 / 汤 / 粥",
          "description": "汤、粥、水煮土豆、面和豆类。",
          "icon": "🥣",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "pickle",
          "name": "腌渍",
          "description": "醋渍、盐渍与乳酸发酵属于不同过程。",
          "icon": "🥒",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "dry",
          "name": "干燥 / 研磨",
          "description": "香料、籽实、菌类和果品的干燥加工。",
          "icon": "🌶️",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "smoke",
          "name": "烟熏 / 风干",
          "description": "鱼、肉和部分乳品的烟熏或风干；是否即食仍看标签。",
          "icon": "🥓",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "ferment",
          "name": "发酵 / 酿造",
          "description": "酸菜、乳品、啤酒、葡萄酒和果酒的发酵加工。",
          "icon": "🫙",
          "sourceIds": [
            "at-food-reference"
          ]
        },
        {
          "id": "drink",
          "name": "饮用 / 冲泡",
          "description": "水、咖啡、茶与酒类的饮用或冲泡。",
          "icon": "☕",
          "sourceIds": [
            "at-food-reference"
          ]
        }
      ],
      "featureTypes": [
        {
          "id": "regional",
          "name": "地方特色",
          "description": "与当地特定产区、品种或饮食传统有联系，不表示仅当地独有。"
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
          "coverage": "本专题尚未取得可比的全国同口径逐产品实测数据，不用可供量替代。"
        }
      ],
      "title": "奥地利食材与物产",
      "scope": "奥地利全国；产区与用途为导读",
      "seasonNote": "月份仅为通常国内露地收获参考，因地区、海拔、品种、天气、设施和储藏而异；空白表示未提供，不代表没有供应。",
      "notes": [
        "产区是了解供应链的线索，不承诺任一批次为国产；请看原产国、品种、生产者和加工地点。"
      ],
      "sources": [],
      "items": [
        {
          "id": "wheat",
          "name": "小麦",
          "en": "wheat",
          "category": "grain",
          "icon": "🌾",
          "iconLabel": "",
          "season": [
            7,
            8
          ],
          "cooking": [
            "bake",
            "boil"
          ],
          "local": "Weizen",
          "language": "de",
          "regions": [
            "下奥地利、上奥地利及东部耕作区"
          ],
          "uses": [
            "面包",
            "Semmel 面包卷",
            "面条与糕点"
          ],
          "summary": "W480、W700 等面粉标识偏矿物质与用途等级，不等同全麦或蛋白质含量。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-vienna-semmel",
            "food-vienna-palatschinken"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wheat"
        },
        {
          "id": "maize",
          "name": "玉米",
          "en": "maize",
          "category": "grain",
          "icon": "🌽",
          "iconLabel": "",
          "season": [
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "boil",
            "roast"
          ],
          "local": "Mais",
          "language": "de",
          "regions": [
            "施蒂里亚、下奥地利等产区"
          ],
          "uses": [
            "饲料",
            "淀粉",
            "玉米粥与加工"
          ],
          "summary": "Kukuruz 是地区用语；区分籽粒、青贮与鲜食甜玉米，不把饲料全部视作人的主粮。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=maize"
        },
        {
          "id": "barley",
          "name": "大麦",
          "en": "barley",
          "category": "grain",
          "icon": "",
          "iconLabel": "大麦",
          "season": [
            6,
            7
          ],
          "cooking": [
            "boil",
            "ferment"
          ],
          "local": "Gerste",
          "language": "de",
          "regions": [
            "下奥地利及多地耕作区"
          ],
          "uses": [
            "麦芽",
            "啤酒和饲料"
          ],
          "summary": "奥地利啤酒与酿造大麦相连，但并非所有大麦符合麦芽用途。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=barley"
        },
        {
          "id": "rye",
          "name": "黑麦",
          "en": "rye",
          "category": "grain",
          "icon": "",
          "iconLabel": "黑麦",
          "season": [
            7,
            8
          ],
          "cooking": [
            "bake",
            "ferment"
          ],
          "local": "Roggen",
          "language": "de",
          "regions": [
            "Waldviertel 等较凉爽耕作区"
          ],
          "uses": [
            "酸种黑麦面包",
            "混合面包"
          ],
          "summary": "Bauernbrot 配方常混合黑麦和小麦，名称不能替代成分表。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rye"
        },
        {
          "id": "oats",
          "name": "燕麦",
          "en": "oats",
          "category": "grain",
          "icon": "",
          "iconLabel": "燕麦",
          "season": [
            7,
            8
          ],
          "cooking": [
            "boil",
            "bake"
          ],
          "local": "Hafer",
          "language": "de",
          "regions": [
            "多地谷物区"
          ],
          "uses": [
            "燕麦粥",
            "早餐片与烘焙"
          ],
          "summary": "奥地利生产和进口并存；植物饮品与原粮属于不同加工形态。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=oats"
        },
        {
          "id": "rice",
          "name": "稻米",
          "en": "rice",
          "category": "grain",
          "icon": "🌾",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Reis",
          "language": "de",
          "regions": [
            "主要境外供应链，东部有小规模种植"
          ],
          "uses": [
            "米饭",
            "奶米布丁与配菜"
          ],
          "summary": "本土小规模稻米产品存在，但不能把全国稻米消费写成主要本国产。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rice"
        },
        {
          "id": "apple",
          "name": "苹果",
          "en": "apple",
          "category": "fruit",
          "icon": "🍎",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "bake",
            "boil"
          ],
          "local": "Apfel",
          "language": "de",
          "regions": [
            "施蒂里亚、下奥地利与多地果园"
          ],
          "uses": [
            "鲜食",
            "苹果卷",
            "果汁与 Most 果酒"
          ],
          "summary": "苹果卷是著名用途，国内果园、储藏与进口批次共同供应市场。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [
            "food-vienna-2"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apple"
        },
        {
          "id": "pear",
          "name": "梨",
          "en": "pear",
          "category": "fruit",
          "icon": "🍐",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Birne",
          "language": "de",
          "regions": [
            "Mostviertel 与多地果园"
          ],
          "uses": [
            "梨果酒",
            "果汁",
            "鲜食与甜点"
          ],
          "summary": "Most 可指发酵果酒，不是所有果汁；果酒梨与鲜食梨用途可不同。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pear"
        },
        {
          "id": "sour-cherry",
          "name": "酸樱桃",
          "en": "sour cherry",
          "category": "fruit",
          "icon": "🍒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "boil",
            "bake",
            "raw"
          ],
          "local": "Weichsel",
          "language": "de",
          "regions": [
            "东部果园与进口供应链"
          ],
          "uses": [
            "酸樱桃酱",
            "糕点与炖果"
          ],
          "summary": "Weichsel 是常见奥地利用语；与 Süßkirsche 甜樱桃分开辨认。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sour+cherry"
        },
        {
          "id": "sweet-cherry",
          "name": "甜樱桃",
          "en": "sweet cherry",
          "category": "fruit",
          "icon": "🍒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Kirsche",
          "language": "de",
          "regions": [
            "布尔根兰、下奥地利等果园"
          ],
          "uses": [
            "鲜食",
            "糕点与果酱"
          ],
          "summary": "夏季可见本地樱桃，全年加工果和鲜果进口各有供应链。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+cherry"
        },
        {
          "id": "plum",
          "name": "李子",
          "en": "plum",
          "category": "fruit",
          "icon": "",
          "iconLabel": "李子",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "boil",
            "bake",
            "ferment"
          ],
          "local": "Zwetschke",
          "language": "de",
          "regions": [
            "多地果园"
          ],
          "uses": [
            "Powidl 浓李子酱",
            "饺子与果馅"
          ],
          "summary": "Powidl 常是熬浓的李子制品，不能从成品重量反推鲜李子重量。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=plum"
        },
        {
          "id": "apricot",
          "name": "杏",
          "en": "apricot",
          "category": "fruit",
          "icon": "",
          "iconLabel": "杏",
          "season": [
            7,
            8
          ],
          "cooking": [
            "raw",
            "boil",
            "bake",
            "ferment"
          ],
          "local": "Marille",
          "language": "de",
          "regions": [
            "瓦豪及其他适宜果园区"
          ],
          "uses": [
            "Marillenknödel 杏饺",
            "果酱与蒸馏酒"
          ],
          "summary": "瓦豪杏与地方风味关联紧密；餐馆写 Marille 并不自动证明使用认证产区水果。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "瓦豪杏与杏饺",
              "description": "Marillenknödel 可用凝乳或土豆面团包杏，不同做法的口感有别。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=apricot"
        },
        {
          "id": "peach",
          "name": "桃",
          "en": "peach",
          "category": "fruit",
          "icon": "🍑",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Pfirsich",
          "language": "de",
          "regions": [
            "施蒂里亚等较温暖果园及进口"
          ],
          "uses": [
            "鲜食",
            "果酱与甜点"
          ],
          "summary": "少量国内种植与季节性进口并存；以批次原产地标注识别。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=peach"
        },
        {
          "id": "strawberry",
          "name": "草莓",
          "en": "strawberry",
          "category": "fruit",
          "icon": "🍓",
          "iconLabel": "",
          "season": [
            5,
            6,
            7
          ],
          "cooking": [
            "raw",
            "boil",
            "bake"
          ],
          "local": "Erdbeere",
          "language": "de",
          "regions": [
            "下奥地利等露地、设施与进口"
          ],
          "uses": [
            "鲜食",
            "蛋糕",
            "酱与冰淇淋"
          ],
          "summary": "露地上市以晚春初夏为参考，全年供应依赖设施、加工或进口。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=strawberry"
        },
        {
          "id": "watermelon",
          "name": "西瓜",
          "en": "watermelon",
          "category": "fruit",
          "icon": "🍉",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "drink"
          ],
          "local": "Wassermelone",
          "language": "de",
          "regions": [
            "主要进口与少量东部种植"
          ],
          "uses": [
            "鲜食与夏日水果沙拉"
          ],
          "summary": "本土种植并非不存在，但不能从少量特色产品推断全国主要来源。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=watermelon"
        },
        {
          "id": "grape",
          "name": "葡萄",
          "en": "grape",
          "category": "fruit",
          "icon": "🍇",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "raw",
            "ferment",
            "drink"
          ],
          "local": "Weintraube",
          "language": "de",
          "regions": [
            "下奥地利、布尔根兰、施蒂里亚与维也纳"
          ],
          "uses": [
            "酿酒",
            "葡萄汁与鲜食"
          ],
          "summary": "葡萄园多数服务酿酒，鲜食葡萄可以来自不同的国内外供应链。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=grape"
        },
        {
          "id": "tomato",
          "name": "番茄",
          "en": "tomato",
          "category": "vegetable",
          "icon": "🍅",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "stew",
            "boil"
          ],
          "local": "Paradeiser / Tomate",
          "language": "de",
          "regions": [
            "东部设施与进口供应链"
          ],
          "uses": [
            "沙拉",
            "汤",
            "酱与炖菜"
          ],
          "summary": "Paradeiser 是奥地利用语之一；全年货架与本地露地收获不是一回事。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=tomato"
        },
        {
          "id": "sweet-pepper",
          "name": "鲜甜椒",
          "en": "sweet pepper",
          "category": "vegetable",
          "icon": "🫑",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "stew",
            "roast"
          ],
          "local": "Paprika",
          "language": "de",
          "regions": [
            "布尔根兰等蔬菜区及进口"
          ],
          "uses": [
            "酿椒",
            "鲜食",
            "烤制与炖菜"
          ],
          "summary": "鲜甜椒与红椒粉分属蔬菜和香料；辣度、颜色和规格看品种与标签。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sweet+pepper"
        },
        {
          "id": "potato",
          "name": "土豆",
          "en": "potato",
          "category": "vegetable",
          "icon": "🥔",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10
          ],
          "cooking": [
            "boil",
            "roast",
            "fry"
          ],
          "local": "Erdäpfel / Kartoffel",
          "language": "de",
          "regions": [
            "下奥地利 Waldviertel 等产区"
          ],
          "uses": [
            "土豆沙拉",
            "团子",
            "烤土豆与泥"
          ],
          "summary": "土豆沙拉常搭配炸肉排；festkochend 和 mehlig 的用途不同。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-innsbruck-2"
          ],
          "features": [
            {
              "kind": "dish",
              "name": "Erdäpfelsalat 土豆沙拉",
              "description": "常作为炸肉排配菜，酸度、油和汤汁做法各异，不等同所有德国土豆沙拉。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=potato"
        },
        {
          "id": "onion",
          "name": "洋葱",
          "en": "onion",
          "category": "vegetable",
          "icon": "🧅",
          "iconLabel": "",
          "season": [
            7,
            8,
            9
          ],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "local": "Zwiebel",
          "language": "de",
          "regions": [
            "下奥地利等产区"
          ],
          "uses": [
            "汤",
            "Gulasch 炖肉与肉汁"
          ],
          "summary": "炒洋葱既带甜味也增稠，奥地利 Gulasch 的风格与匈牙利菜有联系但配方不完全相同。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=onion"
        },
        {
          "id": "garlic",
          "name": "大蒜",
          "en": "garlic",
          "category": "vegetable",
          "icon": "🧄",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "fry",
            "roast"
          ],
          "local": "Knoblauch",
          "language": "de",
          "regions": [
            "东部部分种植与进口供应链"
          ],
          "uses": [
            "蒜汤",
            "蘸酱",
            "烤肉与蔬菜"
          ],
          "summary": "本土种植标签与进口品牌分装要区分，不从包装语言猜原产地。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=garlic"
        },
        {
          "id": "cabbage",
          "name": "卷心菜 / 酸菜原料",
          "en": "cabbage",
          "category": "vegetable",
          "icon": "🥬",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "stew",
            "pickle",
            "ferment"
          ],
          "local": "Kraut / Kohl",
          "language": "de",
          "regions": [
            "露地蔬菜区"
          ],
          "uses": [
            "Sauerkraut 酸菜",
            "卷心菜面与炖菜"
          ],
          "summary": "Krautfleckerl 把卷心菜与小面片结合；发酵酸菜与鲜卷心菜不是同一重量口径。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cabbage"
        },
        {
          "id": "carrot",
          "name": "胡萝卜",
          "en": "carrot",
          "category": "vegetable",
          "icon": "🥕",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "boil",
            "stew",
            "roast"
          ],
          "local": "Karotte",
          "language": "de",
          "regions": [
            "多地露地蔬菜区"
          ],
          "uses": [
            "汤菜",
            "炖菜",
            "烤根菜与沙拉"
          ],
          "summary": "储藏、冷冻和进口延长供应，不代表全年露地采收。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carrot"
        },
        {
          "id": "cucumber",
          "name": "黄瓜",
          "en": "cucumber",
          "category": "vegetable",
          "icon": "🥒",
          "iconLabel": "",
          "season": [
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "pickle",
            "ferment"
          ],
          "local": "Gurke",
          "language": "de",
          "regions": [
            "东部设施、露地与进口"
          ],
          "uses": [
            "沙拉",
            "醋渍小黄瓜与冷盘"
          ],
          "summary": "Essiggurkerl 是腌渍小黄瓜用语，和沙拉黄瓜的品种、规格与用途不同。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=cucumber"
        },
        {
          "id": "beetroot",
          "name": "甜菜根",
          "en": "beetroot",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "甜菜根",
          "season": [
            7,
            8,
            9,
            10,
            11
          ],
          "cooking": [
            "pickle",
            "roast",
            "boil"
          ],
          "local": "Rote Rübe",
          "language": "de",
          "regions": [
            "多地根菜产区"
          ],
          "uses": [
            "沙拉",
            "烤制",
            "汤和腌渍"
          ],
          "summary": "Rote Rübe 与 Zuckerrübe 制糖甜菜不同，不能混用生产数字。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beetroot"
        },
        {
          "id": "peas",
          "name": "青豌豆",
          "en": "green peas",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "豌豆",
          "season": [
            5,
            6,
            7
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Erbse",
          "language": "de",
          "regions": [
            "露地蔬菜与加工供应链"
          ],
          "uses": [
            "配菜",
            "浓汤与冷冻蔬菜"
          ],
          "summary": "绿豌豆与干豌豆要分开；冷冻豌豆的全年供应不等于全年露地收获。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=green+peas"
        },
        {
          "id": "mushroom",
          "name": "蘑菇",
          "en": "mushroom",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "蘑菇",
          "season": [],
          "cooking": [
            "fry",
            "stew",
            "boil"
          ],
          "local": "Champignon / Eierschwammerl",
          "language": "de",
          "regions": [
            "栽培设施；野生菌采集与进口另计"
          ],
          "uses": [
            "蘑菇酱",
            "汤与煎炒"
          ],
          "summary": "Eierschwammerl 指鸡油菌；野生菌并非全部本地采集，且不能套用栽培蘑菇的全年季节。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mushroom"
        },
        {
          "id": "asparagus",
          "name": "芦笋",
          "en": "asparagus",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "芦笋",
          "season": [
            4,
            5,
            6
          ],
          "cooking": [
            "boil",
            "fry",
            "roast"
          ],
          "local": "Spargel",
          "language": "de",
          "regions": [
            "Marchfeld 等东部产区"
          ],
          "uses": [
            "水煮",
            "奶油汤",
            "煎烤与配土豆"
          ],
          "summary": "Marchfeld 芦笋具有区域识别度；白芦笋、绿芦笋的种植与处理不同。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "Marchfeld 芦笋",
              "description": "白、绿芦笋处理不同，春季市场是认识地方露地作物的入口。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=asparagus"
        },
        {
          "id": "lentil",
          "name": "扁豆",
          "en": "lentil",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "扁豆",
          "season": [
            7,
            8
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Linse",
          "language": "de",
          "regions": [
            "东部旱作区与进口供应链"
          ],
          "uses": [
            "扁豆炖菜",
            "沙拉与配培根"
          ],
          "summary": "小规模本土豆类与进口并存，不能把一种地方菜当成全国自给证明。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=lentil"
        },
        {
          "id": "pumpkin",
          "name": "南瓜",
          "en": "pumpkin",
          "category": "vegetable",
          "icon": "",
          "iconLabel": "南瓜",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "roast",
            "boil",
            "bake"
          ],
          "local": "Kürbis",
          "language": "de",
          "regions": [
            "施蒂里亚及多地瓜类产区"
          ],
          "uses": [
            "南瓜汤",
            "烤制",
            "泥与点籽油"
          ],
          "summary": "取油用南瓜与食用果肉品种并不完全相同；果肉、籽和油分别看。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pumpkin"
        },
        {
          "id": "dry-bean",
          "name": "干菜豆",
          "en": "dry bean",
          "category": "vegetable",
          "icon": "🫘",
          "iconLabel": "",
          "season": [
            8,
            9
          ],
          "cooking": [
            "boil",
            "stew"
          ],
          "local": "Käferbohne / Bohne",
          "language": "de",
          "regions": [
            "施蒂里亚及跨境豆类供应链"
          ],
          "uses": [
            "菜豆沙拉",
            "汤与炖豆"
          ],
          "summary": "施蒂里亚 Käferbohne 是知名地方菜豆；常配南瓜籽油，不代表所有干豆都属于该品种。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "dish",
              "name": "Käferbohnensalat 菜豆沙拉",
              "description": "施蒂里亚菜豆常与南瓜籽油、洋葱和醋搭配，干豆须按要求完全煮熟。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dry+bean"
        },
        {
          "id": "pork",
          "name": "猪肉",
          "en": "pork",
          "category": "meat",
          "icon": "🐖",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "roast",
            "smoke"
          ],
          "local": "Schweinefleisch",
          "language": "de",
          "regions": [
            "上奥地利、下奥地利与施蒂里亚等畜牧区"
          ],
          "uses": [
            "烤猪肉",
            "香肠",
            "猪肉炸排与培根"
          ],
          "summary": "猪肉炸排可以叫 Schnitzel，但传统 Wiener Schnitzel 应区分小牛肉版本。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-innsbruck-0",
            "food-vienna-kasekrainer"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pork"
        },
        {
          "id": "beef",
          "name": "牛肉",
          "en": "beef",
          "category": "meat",
          "icon": "🐄",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "boil",
            "roast"
          ],
          "local": "Rindfleisch",
          "language": "de",
          "regions": [
            "草地畜牧与全国加工链"
          ],
          "uses": [
            "Tafelspitz 清煮牛肉",
            "炖肉与汤"
          ],
          "summary": "清煮牛肉按部位切片，常配辣根；牛肉统计不能自动拆成小牛肉供应量。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-vienna-3",
            "food-vienna-gulasch"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beef"
        },
        {
          "id": "chicken",
          "name": "鸡肉",
          "en": "chicken",
          "category": "meat",
          "icon": "🐔",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "local": "Hendl / Huhn",
          "language": "de",
          "regions": [
            "国内禽养殖与进口供应链"
          ],
          "uses": [
            "Backhendl 炸鸡",
            "烤鸡与鸡汤"
          ],
          "summary": "Hendl 是当地常用词；禽肉统计组还可能包括火鸡等，不等于鸡肉单项。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=chicken"
        },
        {
          "id": "duck-goose",
          "name": "鸭与鹅",
          "en": "duck / goose",
          "category": "meat",
          "icon": "",
          "iconLabel": "鸭·鹅",
          "season": [],
          "cooking": [
            "roast",
            "stew"
          ],
          "local": "Ente / Gans",
          "language": "de",
          "regions": [
            "东部养殖及进口供应链"
          ],
          "uses": [
            "Martinigansl 圣马丁烤鹅",
            "烤鸭"
          ],
          "summary": "节庆菜具有地方传统，原料鹅却可能来自境外，留意养殖国和具体产品标签。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=duck+%2F+goose"
        },
        {
          "id": "carp",
          "name": "鲤鱼",
          "en": "carp",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "fry"
          ],
          "habitat": "freshwater",
          "local": "Karpfen",
          "language": "de",
          "regions": [
            "Waldviertel 等池塘养殖区"
          ],
          "uses": [
            "圣诞鲤鱼",
            "煎烤与裹粉炸"
          ],
          "summary": "内陆池塘的养殖鱼与河湖捕捞不同；整鱼活重不能直接当作净鱼片消费。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=carp"
        },
        {
          "id": "catfish",
          "name": "鲶鱼",
          "en": "catfish",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "stew",
            "fry",
            "boil"
          ],
          "habitat": "freshwater",
          "local": "Wels",
          "language": "de",
          "regions": [
            "国内养殖及跨境供应链"
          ],
          "uses": [
            "煎烤",
            "鱼排与炖鱼"
          ],
          "summary": "奥地利内陆可养殖鲶鱼，市场供应仍可来自其他国家；查养殖地而非餐馆所在地。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=catfish"
        },
        {
          "id": "pikeperch",
          "name": "梭鲈",
          "en": "pike-perch",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "roast"
          ],
          "habitat": "freshwater",
          "local": "Zander",
          "language": "de",
          "regions": [
            "内陆水域、养殖与进口"
          ],
          "uses": [
            "带皮煎鱼",
            "烤鱼与酱汁"
          ],
          "summary": "餐馆写 Zander 不保证捕自本地多瑙河，捕捞区与养殖产地需另查。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pike-perch"
        },
        {
          "id": "trout",
          "name": "鳟鱼",
          "en": "trout",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "roast",
            "fry",
            "smoke"
          ],
          "habitat": "freshwater",
          "local": "Forelle",
          "language": "de",
          "regions": [
            "阿尔卑斯地区冷水养殖及跨境供应"
          ],
          "uses": [
            "煎烤",
            "烟熏与清淡鱼菜"
          ],
          "summary": "鳟鱼是阿尔卑斯冷水养殖的重要食材，可煎烤、烟熏。Saibling 属红点鲑等，是另一类鱼，购买时应分别辨认。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=trout"
        },
        {
          "id": "salmon",
          "name": "三文鱼",
          "en": "salmon",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "roast",
            "smoke"
          ],
          "habitat": "marine",
          "local": "Lachs",
          "language": "de",
          "regions": [
            "主要境外海水养殖与进口"
          ],
          "uses": [
            "烟熏",
            "煎烤与冷食"
          ],
          "summary": "奥地利没有海岸，海水养殖三文鱼多依靠境外供应；奥地利加工不等于奥地利海养。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=salmon"
        },
        {
          "id": "herring",
          "name": "鲱鱼",
          "en": "herring",
          "category": "aquatic",
          "icon": "🐟",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "pickle",
            "smoke"
          ],
          "habitat": "marine",
          "local": "Hering",
          "language": "de",
          "regions": [
            "进口海产与境内腌制加工"
          ],
          "uses": [
            "腌鲱鱼",
            "鱼沙拉与冷盘"
          ],
          "summary": "传统消费与国外捕捞可同时存在，不把内陆国家的海鱼产量写成国内海洋渔获。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=herring"
        },
        {
          "id": "shrimp",
          "name": "虾",
          "en": "shrimp",
          "category": "aquatic",
          "icon": "🦐",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "fry",
            "boil"
          ],
          "habitat": "marine",
          "local": "Garnele",
          "language": "de",
          "regions": [
            "进口海产为主；特定内陆养殖另看标签"
          ],
          "uses": [
            "煎炒",
            "烤虾与海鲜菜"
          ],
          "summary": "海虾供应多来自境外，少数本土设施养殖不能推导为全国主要来源。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=shrimp"
        },
        {
          "id": "mussel",
          "name": "贻贝 / 海贝",
          "en": "mussel / shellfish",
          "category": "aquatic",
          "icon": "",
          "iconLabel": "贻贝",
          "season": [],
          "cooking": [
            "boil",
            "stew"
          ],
          "habitat": "marine",
          "local": "Miesmuschel",
          "language": "de",
          "regions": [
            "进口海产供应链"
          ],
          "uses": [
            "白酒煮贻贝",
            "汤与海鲜菜"
          ],
          "summary": "没有海岸仍有海产消费。鲜贝、冷冻贝肉和带壳活重是不同商品形态。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-aquaculture-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mussel+%2F+shellfish"
        },
        {
          "id": "sunflower",
          "name": "向日葵籽 / 葵花油",
          "en": "sunflower seed / oil",
          "category": "oil",
          "icon": "🌻",
          "iconLabel": "",
          "season": [
            8,
            9,
            10
          ],
          "cooking": [
            "fry",
            "roast"
          ],
          "local": "Sonnenblume / Sonnenblumenöl",
          "language": "de",
          "regions": [
            "东部耕作区与跨境压榨供应链"
          ],
          "uses": [
            "食用籽",
            "煎炒与烘焙"
          ],
          "summary": "国产与进口油籽、成品油可同时存在；压榨地不等于全部籽粒原产地。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sunflower+seed+%2F+oil"
        },
        {
          "id": "rapeseed",
          "name": "油菜籽 / 菜籽油",
          "en": "rapeseed / oil",
          "category": "oil",
          "icon": "",
          "iconLabel": "油菜籽",
          "season": [
            6,
            7
          ],
          "cooking": [
            "fry",
            "roast"
          ],
          "local": "Raps / Rapsöl",
          "language": "de",
          "regions": [
            "下奥地利等耕作区"
          ],
          "uses": [
            "食用油",
            "饼粕与非食用加工"
          ],
          "summary": "油籽与成品油分列，用途还包括饲料和燃料；不能把油菜籽吨数当作食用油吨数。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=rapeseed+%2F+oil"
        },
        {
          "id": "paprika-powder",
          "name": "红椒粉",
          "en": "ground paprika",
          "category": "spice",
          "icon": "",
          "iconLabel": "椒粉",
          "season": [],
          "cooking": [
            "dry",
            "stew"
          ],
          "local": "Paprikapulver",
          "language": "de",
          "regions": [
            "跨境香料与分装供应链"
          ],
          "uses": [
            "Gulasch 炖肉",
            "酱汁与肉类调味"
          ],
          "summary": "与匈牙利饮食交流密切；甜、辣椒粉分别使用，奥地利品牌不证明原料产于奥地利。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=ground+paprika"
        },
        {
          "id": "caraway",
          "name": "葛缕子籽",
          "en": "caraway",
          "category": "spice",
          "icon": "",
          "iconLabel": "葛缕子",
          "season": [
            6,
            7,
            8
          ],
          "cooking": [
            "dry",
            "stew",
            "bake"
          ],
          "local": "Kümmel",
          "language": "de",
          "regions": [
            "Waldviertel 等香料区与进口"
          ],
          "uses": [
            "面包",
            "酸菜",
            "烤猪肉与汤"
          ],
          "summary": "Kümmel 葛缕子与 Kreuzkümmel 孜然不是同一种香料，购买时看当地名称。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=caraway"
        },
        {
          "id": "dill",
          "name": "莳萝",
          "en": "dill",
          "category": "spice",
          "icon": "",
          "iconLabel": "莳萝",
          "season": [
            5,
            6,
            7,
            8,
            9
          ],
          "cooking": [
            "raw",
            "boil",
            "pickle"
          ],
          "local": "Dille / Dill",
          "language": "de",
          "regions": [
            "国内鲜香草与进口供应链"
          ],
          "uses": [
            "黄瓜",
            "Dillsauce 莳萝酱与鱼菜"
          ],
          "summary": "Dille 在奥地利常见，鲜叶、干叶与种籽用途不同。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=dill"
        },
        {
          "id": "horseradish",
          "name": "辣根",
          "en": "horseradish",
          "category": "spice",
          "icon": "",
          "iconLabel": "辣根",
          "season": [
            10,
            11,
            3,
            4
          ],
          "cooking": [
            "raw",
            "pickle"
          ],
          "local": "Kren / Meerrettich",
          "language": "de",
          "regions": [
            "施蒂里亚等根菜区"
          ],
          "uses": [
            "鲜磨辣根",
            "Apfelkren 苹果辣根与熟肉配料"
          ],
          "summary": "Kren 是当地高频词，搭配 Tafelspitz；预制酱和鲜根重量不能直接互换。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "dish",
              "name": "Apfelkren 苹果辣根",
              "description": "鲜辣根磨蓉搭配苹果，常伴清煮牛肉；与奶油辣根酱配方不同。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=horseradish"
        },
        {
          "id": "milk",
          "name": "奶与乳制品",
          "en": "milk / dairy",
          "category": "dairy",
          "icon": "🥛",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "bake",
            "drink"
          ],
          "local": "Milch / Topfen / Käse",
          "language": "de",
          "regions": [
            "阿尔卑斯草地畜牧及全国乳品加工"
          ],
          "uses": [
            "鲜奶",
            "Topfen 凝乳",
            "山地奶酪与甜点"
          ],
          "summary": "Topfen 可制作凝乳饺、蛋糕与馅料；Heumilch、Bergkäse 等标签的生产要求应另看产品说明。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-vienna-topfenstrudel",
            "food-culture-bergkase"
          ],
          "features": [
            {
              "kind": "dish",
              "name": "Topfen 与阿尔卑斯奶酪",
              "description": "Topfen 凝乳用于饺子、卷和蛋糕；Bergkäse 是另一类奶酪风格。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-milk-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=milk+%2F+dairy"
        },
        {
          "id": "egg",
          "name": "鸡蛋",
          "en": "egg",
          "category": "eggs",
          "icon": "🥚",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "boil",
            "fry",
            "bake"
          ],
          "local": "Ei",
          "language": "de",
          "regions": [
            "国内蛋鸡养殖及进口供应链"
          ],
          "uses": [
            "糕点",
            "面糊",
            "煎蛋与家庭菜"
          ],
          "summary": "鸡蛋码可查养殖方式与国家，奥地利 AT 代码与零售品牌不是同一个信息。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [
            "food-vienna-4"
          ],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=egg"
        },
        {
          "id": "poppy-seed",
          "name": "食用罂粟籽",
          "en": "poppy seed",
          "category": "nuts",
          "icon": "",
          "iconLabel": "罂粟籽",
          "season": [
            7,
            8
          ],
          "cooking": [
            "dry",
            "bake",
            "boil"
          ],
          "local": "Mohn",
          "language": "de",
          "regions": [
            "Waldviertel 等籽实产区"
          ],
          "uses": [
            "Mohnnudeln 罂粟籽土豆条",
            "糕点与馅料"
          ],
          "summary": "罂粟籽是地方甜点的重要原料，灰、白、蓝等品种颜色风味有区别。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [
            {
              "kind": "regional",
              "name": "Waldviertel 罂粟籽",
              "description": "Mohnnudeln 可用罂粟籽、糖和黄油裹土豆面条，属于特色甜食用途。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=poppy+seed"
        },
        {
          "id": "walnut",
          "name": "核桃",
          "en": "walnut",
          "category": "nuts",
          "icon": "",
          "iconLabel": "核桃",
          "season": [
            9,
            10
          ],
          "cooking": [
            "raw",
            "bake"
          ],
          "local": "Walnuss",
          "language": "de",
          "regions": [
            "下奥地利、施蒂里亚等果树与进口"
          ],
          "uses": [
            "糕点",
            "面包",
            "沙拉与坚果馅"
          ],
          "summary": "国内果树与进口核桃并存；带壳、果仁与油脂各有重量口径。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=walnut"
        },
        {
          "id": "honey",
          "name": "蜂蜜",
          "en": "honey",
          "category": "sweetener",
          "icon": "🍯",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "raw",
            "bake",
            "drink"
          ],
          "local": "Honig",
          "language": "de",
          "regions": [
            "多地养蜂与进口蜂蜜链"
          ],
          "uses": [
            "面包涂抹",
            "甜点",
            "姜饼与饮品"
          ],
          "summary": "花源、采蜜地与分装地要分别看，奥地利品牌不自动等于全部本土蜜。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=honey"
        },
        {
          "id": "sugar-beet",
          "name": "制糖甜菜",
          "en": "sugar beet",
          "category": "sweetener",
          "icon": "",
          "iconLabel": "糖用甜菜",
          "season": [
            9,
            10,
            11
          ],
          "cooking": [
            "ferment",
            "bake"
          ],
          "local": "Zuckerrübe",
          "language": "de",
          "regions": [
            "下奥地利、上奥地利等产区"
          ],
          "uses": [
            "制糖",
            "糖蜜与加工副产品"
          ],
          "summary": "甜菜根经制糖后才成为食用糖，原根重量与原糖当量不是同一产品。",
          "origin": "domestic",
          "originLabel": "奥地利有国内生产",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-crops-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=sugar+beet"
        },
        {
          "id": "wine",
          "name": "葡萄酒",
          "en": "wine",
          "category": "drink",
          "icon": "🍷",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Wein",
          "language": "de",
          "regions": [
            "下奥地利、布尔根兰、施蒂里亚与维也纳"
          ],
          "uses": [
            "Grüner Veltliner 等酒款",
            "配餐与烹饪"
          ],
          "summary": "白葡萄品种在葡萄园中占重要位置；年份、产区与甜度比只看颜色更有用。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [
            "food-culture-gruner",
            "food-vienna-spritzer"
          ],
          "features": [
            {
              "kind": "regional",
              "name": "多瑙河葡萄酒与维也纳葡萄园",
              "description": "维也纳并非只有咖啡馆，也有葡萄种植；具体酒款读产区、品种与年份。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "sourceIds": [
            "eu-vineyards-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=wine"
        },
        {
          "id": "palinka",
          "name": "水果蒸馏酒",
          "en": "fruit brandy",
          "category": "drink",
          "icon": "🥃",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Obstbrand / Schnaps",
          "language": "de",
          "regions": [
            "各果园区与蒸馏加工点"
          ],
          "uses": [
            "杏",
            "梨",
            "李子等水果蒸馏酒"
          ],
          "summary": "奥地利水果蒸馏酒不统一称 Pálinka；Fruchtlikör 果味利口酒又是另一种产品。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=fruit+brandy"
        },
        {
          "id": "beer",
          "name": "啤酒",
          "en": "beer",
          "category": "drink",
          "icon": "🍺",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "ferment",
            "drink"
          ],
          "local": "Bier",
          "language": "de",
          "regions": [
            "萨尔茨堡、上奥地利等全国酿造网络"
          ],
          "uses": [
            "Märzen 等啤酒",
            "配餐与面糊"
          ],
          "summary": "本地酿造与麦芽、酒花来源分别看，不把酒厂地址当作全部原料产地。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=beer"
        },
        {
          "id": "coffee",
          "name": "咖啡",
          "en": "coffee",
          "category": "drink",
          "icon": "☕",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "roast",
            "drink"
          ],
          "local": "Kaffee",
          "language": "de",
          "regions": [
            "热带豆源、进口与奥地利烘焙链"
          ],
          "uses": [
            "Melange",
            "浓缩咖啡与咖啡馆饮食"
          ],
          "summary": "维也纳咖啡文化是加工和消费传统；咖啡豆并非因此在阿尔卑斯山种植。",
          "origin": "import",
          "originLabel": "主要境外供应",
          "cardIds": [
            "food-culture-melange",
            "food-vienna-coffee-names"
          ],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=coffee"
        },
        {
          "id": "mineral-water",
          "name": "饮用水 / 矿泉水",
          "en": "drinking / mineral water",
          "category": "drink",
          "icon": "💧",
          "iconLabel": "",
          "season": [],
          "cooking": [
            "drink",
            "boil"
          ],
          "local": "Mineralwasser / Leitungswasser",
          "language": "de",
          "regions": [
            "区域水源、维也纳山泉供水与瓶装水贸易"
          ],
          "uses": [
            "饮用",
            "咖啡与烹饪"
          ],
          "summary": "维也纳供水背景与全国瓶装水统计分开。still、prickelnd 分别提示无气或有气。",
          "origin": "mixed",
          "originLabel": "奥地利产区与跨境供应",
          "cardIds": [],
          "features": [],
          "sourceIds": [
            "eu-vineyards-read",
            "at-food-reference"
          ],
          "trade": "全国同年供需表列出相关产品或统计组的产量、进口、出口、国内供给与食用可供量；“最新单项”另标年份。这里不把供给量当作实际摄入，也不从国家统计分摊城市消费。",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=drinking+%2F+mineral+water"
        },
        {
          "id": "pumpkin-seed-oil",
          "name": "南瓜籽与南瓜籽油",
          "local": "Kürbiskern / Kürbiskernöl",
          "en": "pumpkin seed and pumpkin seed oil",
          "category": "oil",
          "origin": "mixed",
          "icon": "",
          "iconLabel": "南瓜籽",
          "season": [
            9,
            10
          ],
          "cooking": [
            "raw"
          ],
          "regions": [
            "施蒂里亚及跨境供应链"
          ],
          "uses": [
            "沙拉",
            "汤出锅点缀",
            "食用籽与烘焙"
          ],
          "summary": "深绿色籽油有烘烤坚果香，常冷拌或出锅加入；种籽、油和南瓜果肉分别核算。",
          "features": [
            {
              "kind": "regional",
              "name": "施蒂里亚南瓜籽油风味",
              "description": "特定地域产品需以认证标签核对；这里介绍风味和用途，不保证每瓶产区。",
              "sourceIds": [
                "at-food-reference"
              ]
            }
          ],
          "originLabel": "产区与跨境加工",
          "trade": "同年供需未取得本单品独立行，相关统计组不擅自拆分。",
          "sourceIds": [
            "at-food-reference"
          ],
          "cardIds": [
            "specialty-at-1"
          ],
          "language": "de",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=pumpkin+seed+and+pumpkin+seed+oil"
        },
        {
          "id": "mustard",
          "name": "芥末籽与芥末酱",
          "local": "Senfkorn / Senf",
          "en": "mustard seed and prepared mustard",
          "category": "spice",
          "origin": "mixed",
          "icon": "",
          "iconLabel": "芥末",
          "season": [],
          "cooking": [
            "raw",
            "pickle"
          ],
          "regions": [
            "国内部分香料种植、进口与酱料加工链"
          ],
          "uses": [
            "香肠蘸酱",
            "腌汁",
            "沙拉酱"
          ],
          "summary": "籽粒与成品酱不是同一产品，süß、mittelscharf、scharf 提示甜味或辣度，配方与原料产地另看标签。",
          "features": [],
          "originLabel": "产区与跨境加工",
          "trade": "同年供需未取得本单品独立行，相关统计组不擅自拆分。",
          "sourceIds": [
            "at-food-reference"
          ],
          "cardIds": [],
          "language": "de",
          "imageUrl": "https://commons.wikimedia.org/w/index.php?title=Special%3AMediaSearch&type=image&search=mustard+seed+and+prepared+mustard"
        }
      ]
    },
    "findings": [
      {
        "title": "维也纳也有葡萄园",
        "text": "Eurostat 葡萄园专题中，2020 年维也纳葡萄园占其农业利用地约11.8%；同年奥地利葡萄园的白葡萄品种占68.4%。这不是全国土地的11.8%，也不是今天酒款销售的占比。",
        "sourceIds": [
          "eu-vineyards-read"
        ]
      },
      {
        "title": "内陆水产与进口海鲜分开看",
        "text": "奥地利没有海岸，国内养殖以淡水供应链认识；超市和餐馆的三文鱼、海虾、海贝仍有跨境来源。养殖产量、食物平衡表水产组与实际摄入不是同一指标。",
        "sourceIds": [
          "eu-aquaculture-read",
          "fao-fish"
        ]
      }
    ],
    "sources": [
      {
        "id": "eu-crops-read",
        "title": "Eurostat · 农作物生产（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Agricultural_production_-_crops",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "6caa320ba94403d02fc877d588f30bdf1526268f73a8cc2d43bff5d28f309a5b",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-milk-read",
        "title": "Eurostat · 奶与乳品生产（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Milk_and_milk_product_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "2ae837c182371e65df2c22e18090ba08c90058b056223a1d406ed85e1dc435f3",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-vineyards-read",
        "title": "Eurostat · 欧盟葡萄园（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Vineyards_in_the_EU_-_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2020",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "998bfca6e6b44f494ff3fbb26a70b1470222da5a15cd27d7ecc34bf1a1614e63",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "eu-aquaculture-read",
        "title": "Eurostat · 水产养殖（已读正文）",
        "publisher": "Eurostat",
        "url": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Aquaculture_statistics",
        "scope": "欧盟与成员国；使用文中明确标年的国家信息",
        "year": "2024",
        "verified": true,
        "accessed": "2026-10-24",
        "sha256": "22c6660a561da50348ccf61138cebe8277351820e0e3f16ea4b67443ef653f13",
        "note": "实际读取文章正文；具体统计年份见引用。收获月份和逐项烹饪方式是编辑导读，不是此文章逐项验证的官方日历。"
      },
      {
        "id": "at-food-reference",
        "title": "奥地利国家旅游局 · 饮食文化入口",
        "publisher": "Austrian National Tourist Office",
        "url": "https://www.austria.info/en-gb/highlights/austrian-cuisine/",
        "scope": "奥地利饮食与区域风味",
        "verified": false,
        "note": "延伸参考入口，未逐页核验菜谱与产地；食材导读不作为批次原产地认证。"
      },
      {
        "id": "at-water-reference",
        "title": "维也纳市政府 · 饮用水入口",
        "publisher": "City of Vienna",
        "url": "https://www.wien.gv.at/english/environment/watersupply/",
        "scope": "维也纳供水背景，非全国用水量",
        "verified": false,
        "note": "官方核查入口，未取得本次可比市级用水量。"
      }
    ],
    "checkedAt": "2026-10-24"
  },
  "hu": {
    "id": "hu",
    "name": "匈牙利",
    "english": "HUNGARY",
    "entity": "Hungary",
    "iso": "HUN",
    "fao": 97,
    "flag": "🇭🇺",
    "icon": "🌶️",
    "language": "hu",
    "languageName": "匈牙利语",
    "intro": "从大平原的谷物与向日葵，到塞格德和考洛乔的红椒、东北果园、托卡伊葡萄园与内陆鱼塘：匈牙利的物产远不止首都市场。布达佩斯是消费与集散中心，食材和能源数字采用标明年份的全国统计。",
    "regions": [
      {
        "title": "匈牙利大平原",
        "products": "小麦、玉米、向日葵、蔬菜与畜牧",
        "text": "谷物既供食用，也进入饲料、淀粉和工业加工；不要把国内供给全部看成人吃掉的量。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      },
      {
        "title": "塞格德与考洛乔",
        "products": "红椒与干燥研磨红椒粉",
        "text": "甜、辣、烟熏等风味不同；FAO Pimento 统计条目不能直接当作这些产区红椒粉。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      },
      {
        "title": "索博尔奇与东北果园区",
        "products": "苹果、酸樱桃、李子与果品加工",
        "text": "鲜食、浓缩果汁、果酱与水果蒸馏酒是不同用途，不能把所有水果产量都算成鲜果食用。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      },
      {
        "title": "托卡伊与埃格尔",
        "products": "葡萄、贵腐甜酒与红白葡萄酒",
        "text": "葡萄种植与酿酒成品分列；产区、品种、年份与酒款共同决定风格。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      },
      {
        "title": "巴拉顿湖及周边",
        "products": "葡萄酒、果品与淡水饮食文化",
        "text": "旅游市场出售的鱼未必捕自湖中；应分清鱼塘养殖、允许的捕捞及境外供应。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      },
      {
        "title": "内陆鱼塘与多瑙河、蒂萨河流域",
        "products": "鲤鱼、鲶鱼等淡水水产",
        "text": "匈牙利没有海岸；鲱鱼、海虾、海贝与三文鱼通过外部海产供应链进入市场。",
        "sourceIds": [
          "hu-tourism"
        ],
        "verified": false
      }
    ],
    "findings": [
      {
        "title": "收成会随天气明显变化",
        "text": "Eurostat 2024 农作物文章指出匈牙利春夏偏暖、偏干；籽粒玉米及玉米穗轴混合物产量较2023年下降约15.1%，大麦约下降30.0%。这是该文明确的产品口径，不替代下面FAO同版供需表。",
        "sourceIds": [
          "eu-crops-read"
        ]
      },
      {
        "title": "白葡萄品种也占重要位置",
        "text": "Eurostat 2020 葡萄园资料中，匈牙利葡萄园的白葡萄品种占65.8%。托卡伊甜酒只是众多酒款之一，品种面积比例不能直接当作全国葡萄酒产量或销量比例。",
        "sourceIds": [
          "eu-vineyards-read"
        ]
      }
    ],
    "sources": [],
    "checkedAt": "2026-10-24"
  }
};

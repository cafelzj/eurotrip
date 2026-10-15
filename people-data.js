const travelPeople = [
  {
    "id": "rubik",
    "name": "鲁比克·厄尔诺",
    "local": "Ernő Rubik",
    "aliases": [
      "鲁比克",
      "鲁比克·厄尔诺"
    ],
    "countries": [
      "hu"
    ],
    "cities": [
      "budapest"
    ],
    "description": "建筑与设计教育者，魔方的发明者。魔方在1974年诞生，与空间结构和学习探索有关。",
    "note": "可从魔方的空间结构联想到布达佩斯的建筑与设计文化。",
    "url": "https://rubiks.com/",
    "source": "Rubik’s · 品牌与魔方资料"
  },
  {
    "id": "liszt",
    "name": "李斯特",
    "local": "Franz Liszt",
    "aliases": [
      "李斯特"
    ],
    "countries": [
      "hu",
      "at"
    ],
    "cities": [
      "budapest",
      "vienna"
    ],
    "description": "作曲家与钢琴家，19世纪欧洲音乐的重要人物。他与匈牙利音乐教育及维也纳的音乐环境都有联系。",
    "note": "布达佩斯的李斯特音乐学院及纪念场所可作为延伸入口。",
    "url": "https://lisztmuseum.hu/en",
    "source": "李斯特纪念博物馆"
  },
  {
    "id": "bartok",
    "name": "巴托克",
    "local": "Béla Bartók",
    "aliases": [
      "巴托克"
    ],
    "countries": [
      "hu"
    ],
    "cities": [
      "budapest"
    ],
    "description": "匈牙利作曲家、钢琴家与民族音乐研究者，其创作与民间音乐采集密切相关。",
    "note": "听民间音乐与现代古典作品时，可以比较旋律和节奏的变化。",
    "url": "https://bartok.zti.hu/",
    "source": "巴托克档案相关入口"
  },
  {
    "id": "mozart",
    "name": "莫扎特",
    "local": "Wolfgang Amadeus Mozart",
    "aliases": [
      "莫扎特"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "salzburg",
      "vienna"
    ],
    "description": "1756年出生于萨尔茨堡，后来在维也纳生活和创作。两座城市分别呈现他的成长与后期创作经历。",
    "note": "从萨尔茨堡出生地走到维也纳，能把分散的音乐故事连起来。",
    "url": "https://mozarteum.at/en/",
    "source": "莫扎特基金会 Mozarteum"
  },
  {
    "id": "schubert",
    "name": "舒伯特",
    "local": "Franz Schubert",
    "aliases": [
      "舒伯特"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "vienna"
    ],
    "description": "出生于维也纳的作曲家，以艺术歌曲、室内乐与交响乐等作品著称。",
    "note": "维也纳的音乐生活不只有莫扎特，舒伯特的歌曲也很值得聆听。",
    "url": "https://www.wienmuseum.at/",
    "source": "维也纳博物馆 · 人物纪念场所入口"
  },
  {
    "id": "klimt",
    "name": "克里姆特",
    "local": "Gustav Klimt",
    "aliases": [
      "克里姆特"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "vienna"
    ],
    "description": "奥地利画家，与维也纳分离派及世纪之交的艺术文化紧密相关。美景宫收藏其代表作《吻》。",
    "note": "作品收藏关系不代表当天一定展出，出发前查馆方安排。",
    "url": "https://www.belvedere.at/en",
    "source": "美景宫 · 艺术收藏"
  },
  {
    "id": "goethe",
    "name": "歌德",
    "local": "Johann Wolfgang von Goethe",
    "aliases": [
      "歌德"
    ],
    "countries": [
      "de"
    ],
    "cities": [],
    "description": "德语文学的重要作家，代表作包括《浮士德》。他的生活与法兰克福、魏玛等城市紧密相关。",
    "note": "这些主要关联城市暂未收录，不能把附近已有城市当作他的主要生活地。",
    "url": "https://www.klassik-stiftung.de/en/",
    "source": "魏玛古典基金会"
  },
  {
    "id": "beethoven",
    "name": "贝多芬",
    "local": "Ludwig van Beethoven",
    "aliases": [
      "贝多芬"
    ],
    "countries": [
      "de",
      "at"
    ],
    "cities": [
      "vienna"
    ],
    "description": "出生于波恩，后来长期在维也纳生活和创作。跨国家的生平比单一国籍标签更能说明他的音乐故事。",
    "note": "在维也纳认识创作经历，在波恩认识早年生活；波恩尚未收录。",
    "url": "https://www.beethoven.de/en",
    "source": "波恩贝多芬之家"
  },
  {
    "id": "einstein",
    "name": "爱因斯坦",
    "local": "Albert Einstein",
    "aliases": [
      "爱因斯坦"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "berlin"
    ],
    "description": "物理学家，以相对论等工作著称，曾在柏林工作。他的生平跨越多个国家。",
    "note": "柏林关联指工作经历，不代表其全部生平或单一国籍。",
    "url": "https://einstein-website.de/",
    "source": "爱因斯坦资料入口"
  },
  {
    "id": "csokonai",
    "name": "米哈伊·乔科瑙伊",
    "local": "Mihály Csokonai Vitéz",
    "aliases": [
      "乔科瑙伊",
      "米哈伊·乔科瑙伊"
    ],
    "countries": [
      "hu"
    ],
    "cities": [
      "debrecen"
    ],
    "description": "出生于德布勒森的匈牙利诗人，其名字可在当地剧院与城市文化中见到。",
    "note": "街名和剧院名是旅行中认识文学人物的线索。",
    "url": "https://visitdebrecen.com/",
    "source": "德布勒森官方旅游入口"
  },
  {
    "id": "kossuth",
    "name": "科苏特",
    "local": "Lajos Kossuth",
    "aliases": [
      "科苏特"
    ],
    "countries": [
      "hu"
    ],
    "cities": [
      "debrecen"
    ],
    "description": "匈牙利历史政治人物，与1848—1849年革命时期有关。德布勒森及改革宗大教堂与这一历史阶段相连。",
    "note": "地标不只有建筑风格，也可能承载重要政治事件。",
    "url": "https://visitdebrecen.com/",
    "source": "德布勒森官方旅游入口"
  },
  {
    "id": "szentgyorgyi",
    "name": "圣捷尔吉",
    "local": "Albert Szent-Györgyi",
    "aliases": [
      "圣捷尔吉"
    ],
    "countries": [
      "hu"
    ],
    "cities": [
      "szeged"
    ],
    "description": "与维生素C研究密切相关的科学家，曾在塞格德工作，1937年获诺贝尔生理学或医学奖。",
    "note": "大学城市的历史，也能从实验室和科学人物读起。",
    "url": "https://www.nobelprize.org/prizes/medicine/1937/szent-gyorgyi/biographical/",
    "source": "诺贝尔奖 · 人物资料"
  },
  {
    "id": "karajan",
    "name": "卡拉扬",
    "local": "Herbert von Karajan",
    "aliases": [
      "卡拉扬",
      "赫伯特·冯·卡拉扬"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "salzburg"
    ],
    "description": "出生于萨尔茨堡的指挥家，与20世纪管弦乐演出和录音历史密切相关。",
    "note": "城市音乐文化既包括作曲家，也包括演奏者、指挥家与音乐节。",
    "url": "https://www.karajan.org/",
    "source": "卡拉扬研究与文化入口"
  },
  {
    "id": "maximilian",
    "name": "马克西米连一世",
    "local": "Maximilian I",
    "aliases": [
      "马克西米连一世"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "innsbruck"
    ],
    "description": "神圣罗马帝国皇帝，与因斯布鲁克的宫廷历史及黄金屋顶密切相关。",
    "note": "看黄金屋顶时，可以把装饰、权力展示与城市历史一起理解。",
    "url": "https://www.innsbruck.info/en/",
    "source": "因斯布鲁克官方旅游入口"
  },
  {
    "id": "zaha",
    "name": "扎哈·哈迪德",
    "local": "Zaha Hadid",
    "aliases": [
      "扎哈·哈迪德"
    ],
    "countries": [
      "at"
    ],
    "cities": [
      "innsbruck"
    ],
    "description": "建筑师，其设计的贝吉瑟尔跳台把体育设施、观景与现代建筑结合起来。",
    "note": "因斯布鲁克关联指建筑作品；她出生于巴格达。",
    "url": "https://www.zaha-hadid.com/",
    "source": "扎哈·哈迪德建筑事务所"
  },
  {
    "id": "marlene",
    "name": "马琳·黛德丽",
    "local": "Marlene Dietrich",
    "aliases": [
      "马琳·黛德丽"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "berlin"
    ],
    "description": "出生于柏林的演员与歌手，其职业生涯跨越德国、美国等地。",
    "note": "电影和流行文化也是认识柏林的入口。",
    "url": "https://www.deutsche-kinemathek.de/en",
    "source": "德国电影资料馆"
  },
  {
    "id": "humboldt",
    "name": "洪堡兄弟",
    "local": "Wilhelm & Alexander von Humboldt",
    "aliases": [
      "洪堡兄弟"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "berlin"
    ],
    "description": "威廉·冯·洪堡与教育、语言研究有关，亚历山大·冯·洪堡以自然科学探索著称。两人的贡献不能混作一人。",
    "note": "柏林洪堡大学的命名与两人相关，大学主楼是理解这段学术历史的地点入口。",
    "url": "https://www.hu-berlin.de/en",
    "source": "柏林洪堡大学"
  },
  {
    "id": "mann",
    "name": "托马斯·曼",
    "local": "Thomas Mann",
    "aliases": [
      "托马斯·曼"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "munich"
    ],
    "description": "德语作家、诺贝尔文学奖得主，曾在慕尼黑生活。他的生平还与吕贝克等城市相连。",
    "note": "慕尼黑不仅有啤酒文化，也有文学与艺术生活。",
    "url": "https://www.nobelprize.org/prizes/literature/1929/mann/biographical/",
    "source": "诺贝尔奖 · 人物资料"
  },
  {
    "id": "kandinsky",
    "name": "康定斯基",
    "local": "Wassily Kandinsky",
    "aliases": [
      "康定斯基"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "munich"
    ],
    "description": "画家，与慕尼黑“蓝骑士”艺术团体及现代抽象艺术发展有关。",
    "note": "看现代艺术时，可以先比较色彩、形状与主题的变化。",
    "url": "https://www.lenbachhaus.de/en/",
    "source": "伦巴赫美术馆"
  },
  {
    "id": "brahms",
    "name": "勃拉姆斯",
    "local": "Johannes Brahms",
    "aliases": [
      "勃拉姆斯"
    ],
    "countries": [
      "de",
      "at"
    ],
    "cities": [
      "hamburg",
      "vienna"
    ],
    "description": "出生于汉堡，后来在维也纳长期生活的作曲家。两座城市分别连接他的成长与成熟创作阶段。",
    "note": "从港口城市走到音乐之都，是一条跨国的音乐探索线。",
    "url": "https://www.hamburg-travel.com/",
    "source": "汉堡官方旅游入口"
  },
  {
    "id": "lessing",
    "name": "莱辛",
    "local": "Gotthold Ephraim Lessing",
    "aliases": [
      "莱辛"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "hamburg"
    ],
    "description": "德国作家与剧作家，曾在汉堡参与戏剧工作，相关评论对戏剧史产生影响。",
    "note": "剧院、文学与港口贸易可以在同一座城市里并存。",
    "url": "https://www.hamburg-travel.com/",
    "source": "汉堡官方旅游入口"
  },
  {
    "id": "boll",
    "name": "海因里希·伯尔",
    "local": "Heinrich Böll",
    "aliases": [
      "海因里希·伯尔"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "cologne"
    ],
    "description": "出生于科隆的作家，1972年获诺贝尔文学奖，作品关注战后德国社会与人的处境。",
    "note": "旅行阅读可以从一位与城市有关的作家开始。",
    "url": "https://www.nobelprize.org/prizes/literature/1972/boll/biographical/",
    "source": "诺贝尔奖 · 人物资料"
  },
  {
    "id": "adenauer",
    "name": "阿登纳",
    "local": "Konrad Adenauer",
    "aliases": [
      "阿登纳",
      "康拉德·阿登纳"
    ],
    "countries": [
      "de"
    ],
    "cities": [
      "cologne"
    ],
    "description": "曾任科隆市长，后来成为德意志联邦共和国首任联邦总理。城市治理经历与其国家政治生涯相连。",
    "note": "在人物资料中区分市长阶段与联邦总理阶段。",
    "url": "https://www.adenauerhaus.de/",
    "source": "阿登纳故居基金会"
  }
];
const travelVenues = [
  {
    "id": "budapest-market",
    "city": "budapest",
    "name": "布达佩斯中央大市场",
    "local": "Nagyvásárcsarnok",
    "lat": 47.4871,
    "lon": 19.0584,
    "group": "food",
    "sub": "market",
    "description": "适合认识食材和市场小吃的市场。摊位、菜单与营业安排需现场核对，不保证每处都供应指定菜。",
    "url": "https://www.budapestinfo.hu/",
    "source": "布达佩斯旅游局 · 市场资料入口",
    "foodQueries": [
      "Langos",
      "Hungarian paprika",
      "Gulyas soup"
    ]
  },
  {
    "id": "vienna-sacher",
    "city": "vienna",
    "name": "维也纳萨赫咖啡馆",
    "local": "Café Sacher Wien",
    "lat": 48.2038,
    "lon": 16.3695,
    "group": "food",
    "sub": "cafe",
    "description": "与萨赫蛋糕传统相关的咖啡馆。菜单、价格、排队及预约以店方最新说明为准。",
    "url": "https://www.sacher.com/en/",
    "source": "Sacher · 官方入口",
    "foodQueries": [
      "Sachertorte"
    ]
  },
  {
    "id": "vienna-central",
    "city": "vienna",
    "name": "维也纳中央咖啡馆",
    "local": "Café Central",
    "lat": 48.2102,
    "lon": 16.365,
    "group": "food",
    "sub": "cafe",
    "description": "维也纳历史咖啡馆文化的代表场所之一。具体饮品、甜点与营业安排请看店方菜单。",
    "url": "https://cafecentral.wien/en/",
    "source": "Café Central · 官方入口",
    "foodQueries": [
      "Wiener Melange"
    ]
  },
  {
    "id": "salzburg-fuerst",
    "city": "salzburg",
    "name": "Fürst 甜品店（老城）",
    "local": "Café Konditorei Fürst",
    "lat": 47.7987,
    "lon": 13.0442,
    "group": "food",
    "sub": "cafe",
    "description": "与莫扎特巧克力球历史相关的老城甜品店。具体门店与产品以店方最新资料为准。",
    "url": "https://www.original-mozartkugel.com/",
    "source": "Fürst · 官方入口",
    "foodQueries": [
      "Mozartkugel"
    ]
  },
  {
    "id": "berlin-curry36",
    "city": "berlin",
    "name": "Curry 36（Mehringdamm）",
    "local": "Curry 36",
    "lat": 52.4934,
    "lon": 13.3888,
    "group": "food",
    "sub": "restaurant",
    "description": "柏林咖喱香肠的小吃店示例；此标记为 Mehringdamm 店附近，营业与供应以店方为准。",
    "url": "https://curry36.de/",
    "source": "Curry 36 · 官方入口",
    "foodQueries": [
      "Currywurst"
    ]
  },
  {
    "id": "munich-hofbraeu",
    "city": "munich",
    "name": "慕尼黑宫廷啤酒屋",
    "local": "Hofbräuhaus München",
    "lat": 48.1375,
    "lon": 11.5797,
    "group": "food",
    "sub": "restaurant",
    "description": "巴伐利亚传统餐饮的探索场所，菜品与供应时段需查当日菜单；不保证所有关联食物随时供应。",
    "url": "https://www.hofbraeuhaus.de/en/",
    "source": "Hofbräuhaus · 官方入口",
    "foodQueries": [
      "Weisswurst",
      "Bavarian pretzel",
      "Schweinshaxe"
    ]
  },
  {
    "id": "hamburg-bruecke10",
    "city": "hamburg",
    "name": "Brücke 10",
    "local": "Brücke 10",
    "lat": 53.5457,
    "lon": 9.9673,
    "group": "food",
    "sub": "restaurant",
    "description": "汉堡港边鱼面包的探索店铺示例；具体位置、营业和鱼类选择以店方为准。",
    "url": "https://www.bruecke10.com/",
    "source": "Brücke 10 · 官方入口",
    "foodQueries": [
      "Fischbrotchen"
    ]
  }
];
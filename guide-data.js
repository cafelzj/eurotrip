const travelCountries = [
  {
    "id": "hu",
    "name": "匈牙利",
    "local": "Magyarország",
    "flag": "🇭🇺",
    "border": "Hungary",
    "capital": "布达佩斯",
    "currency": "匈牙利福林 HUF",
    "language": "匈牙利语",
    "intro": "多瑙河将首都分成布达与佩斯两岸。温泉、咖啡馆和匈牙利平原上的城市，让这里适合慢慢探索。",
    "tips": "匈牙利使用福林，并非欧元区。纸质单程票通常需要打票；手机票的验证方式请按运营商说明操作。",
    "people": "李斯特 · 作曲家；巴托克 · 作曲家与民族音乐学家；鲁比克 · 魔方发明者。",
    "tourism": "https://visithungary.com/"
  },
  {
    "id": "at",
    "name": "奥地利",
    "local": "Österreich",
    "flag": "🇦🇹",
    "border": "Austria",
    "capital": "维也纳",
    "currency": "欧元 EUR",
    "language": "德语",
    "intro": "从维也纳的帝国建筑与咖啡馆，到萨尔茨堡的音乐传统，再到因斯布鲁克的阿尔卑斯山景，城市与自然相距不远。",
    "tips": "地方交通与城际铁路通常采用不同票制。去山区前留意天气、缆车运行时间与回程交通。",
    "people": "莫扎特 · 作曲家；舒伯特 · 作曲家；克里姆特 · 画家。",
    "tourism": "https://www.austria.info/en/"
  },
  {
    "id": "de",
    "name": "德国",
    "local": "Deutschland",
    "flag": "🇩🇪",
    "border": "Germany",
    "capital": "柏林",
    "currency": "欧元 EUR",
    "language": "德语",
    "intro": "柏林的现代历史、慕尼黑的巴伐利亚风情、汉堡的港口与科隆的莱茵河文化，各有鲜明面貌。",
    "tips": "跨城市可用 DB Navigator 查询铁路。地方票请留意分区与生效条件；Deutschland-Ticket 通常不适用于 ICE、IC、EC 等长途列车。",
    "people": "歌德 · 作家；贝多芬 · 作曲家；爱因斯坦 · 物理学家。",
    "tourism": "https://www.germany.travel/en/home.html"
  }
];
const travelCities = [
  {
    "id": "budapest",
    "country": "hu",
    "name": "布达佩斯",
    "local": "Budapest",
    "lat": 47.4979,
    "lon": 19.0402,
    "intro": "匈牙利首都，沿多瑙河展开。布达山坡上的城堡与佩斯的议会大厦隔河相望，温泉浴场也是城市日常的一部分。",
    "features": "古拉什汤、烟囱蛋糕、辣椒粉；温泉浴场与废墟酒吧。",
    "people": "鲁比克在布达佩斯出生；李斯特音乐学院延续了这座城市的音乐传统。",
    "app": "BudapestGO",
    "appurl": "https://bkk.hu/en/tickets-and-passes/budapestgo/",
    "operator": "BKK",
    "mapurl": "https://bkk.hu/en/maps/",
    "tourism": "https://www.budapestinfo.hu/",
    "transit": "地铁、电车、公交由 BKK 统筹。机场 100E 通常需要专用票；请核对当前票种。",
    "places": [
      {
        "name": "匈牙利国会大厦",
        "local": "Országház",
        "lat": 47.507,
        "lon": 19.045,
        "description": "多瑙河东岸的新哥特式地标。参观内部需要按官方安排预约或购票。",
        "category": "landmark"
      },
      {
        "name": "渔人堡",
        "local": "Halászbástya",
        "lat": 47.502,
        "lon": 19.034,
        "description": "布达城堡山的观景平台，能俯瞰多瑙河与议会大厦，紧邻马加什教堂。",
        "category": "landmark"
      },
      {
        "name": "塞切尼温泉",
        "local": "Széchenyi Gyógyfürdő",
        "lat": 47.5187,
        "lon": 19.0825,
        "description": "城市公园内的历史温泉浴场，以室外池和黄色建筑闻名。",
        "category": "other"
      },
      {
        "category": "church",
        "name": "圣斯蒂芬大教堂",
        "local": "Szent István-bazilika",
        "lat": 47.5009,
        "lon": 19.0538,
        "description": "佩斯市中心的重要教堂，穹顶是城市天际线的一部分。"
      },
      {
        "category": "museum",
        "name": "匈牙利国家博物馆",
        "local": "Magyar Nemzeti Múzeum",
        "lat": 47.4912,
        "lon": 19.0626,
        "description": "了解匈牙利历史与文化的重要博物馆。"
      },
      {
        "category": "university",
        "name": "罗兰大学主楼区域",
        "local": "ELTE, Egyetem tér",
        "lat": 47.4903,
        "lon": 19.0586,
        "description": "历史悠久的综合大学；标记为大学广场附近主楼，不代表全部校区。"
      }
    ],
    "river": "多瑙河（Duna）贯穿城市，西岸布达多丘陵，东岸佩斯较平坦。",
    "climate": "夏季常较热，冬季寒冷；春秋适合步行，河边有风，准备可叠穿衣物。",
    "currency": "匈牙利福林 HUF",
    "prices": "相较维也纳、慕尼黑，普通餐饮常较省预算；热门景区和温泉门票会明显抬高支出。"
  },
  {
    "id": "debrecen",
    "country": "hu",
    "name": "德布勒森",
    "local": "Debrecen",
    "lat": 47.5316,
    "lon": 21.6273,
    "intro": "匈牙利东部的重要城市，拥有浓厚的新教传统和大学氛围，也是前往霍尔托巴吉平原的门户之一。",
    "features": "德布勒森香肠（Debreceni）、花车节；大森林公园。",
    "people": "诗人米哈伊·乔科瑙伊出生于这里；科苏特曾在这里发表重要政治演说。",
    "app": "menetrend.app",
    "appurl": "https://menetrend.app/",
    "operator": "DKV",
    "mapurl": "https://www.dkv.hu/",
    "tourism": "https://visitdebrecen.com/",
    "transit": "DKV 运营电车、无轨电车与公交。第三方 menetrend.app 可辅助查询；实时信息以 DKV 为准。",
    "places": [
      {
        "name": "改革宗大教堂",
        "local": "Református Nagytemplom",
        "lat": 47.5325,
        "lon": 21.6244,
        "description": "市中心的黄色双塔教堂，是德布勒森最具辨识度的建筑之一。",
        "category": "church"
      },
      {
        "name": "德里博物馆",
        "local": "Déri Múzeum",
        "lat": 47.533,
        "lon": 21.621,
        "description": "收藏艺术与地方历史文物，因蒙卡奇的绘画作品而受到关注。",
        "category": "museum"
      },
      {
        "name": "大森林公园",
        "local": "Nagyerdő",
        "lat": 47.554,
        "lon": 21.63,
        "description": "城北的绿地与休闲区，适合步行，附近有大学与温泉设施。",
        "category": "other"
      },
      {
        "category": "university",
        "name": "德布勒森大学主楼",
        "local": "Debreceni Egyetem",
        "lat": 47.5541,
        "lon": 21.621,
        "description": "大森林旁的大学主楼，体现城市的学术氛围。"
      }
    ],
    "river": "市区没有像多瑙河那样贯穿中心的大河；主要是匈牙利东部平原城市。",
    "climate": "内陆大陆性特征明显，夏季可炎热，冬季寒冷；郊外活动注意防晒和天气变化。",
    "currency": "匈牙利福林 HUF",
    "prices": "通常比布达佩斯核心旅游区更容易控制住宿和餐饮预算；大型活动期间住宿可能上涨。"
  },
  {
    "id": "szeged",
    "country": "hu",
    "name": "塞格德",
    "local": "Szeged",
    "lat": 46.253,
    "lon": 20.1414,
    "intro": "蒂萨河畔的大学城市，1879 年洪灾后的重建塑造了开阔街道与优雅建筑，也以阳光、辣椒和露天剧场闻名。",
    "features": "塞格德辣椒粉、Pick 萨拉米、鱼汤；新艺术风格建筑。",
    "people": "圣捷尔吉在塞格德开展与维生素 C 有关的研究，后获诺贝尔奖。",
    "app": "menetrend.app",
    "appurl": "https://menetrend.app/",
    "operator": "SZKT",
    "mapurl": "https://szkt.hu/",
    "tourism": "https://szegedtourism.hu/en/",
    "transit": "SZKT 的电车与无轨电车服务覆盖市区；公交及区域线路还需核对相应运营商。",
    "places": [
      {
        "name": "塞格德还愿教堂",
        "local": "Szegedi Dóm",
        "lat": 46.2489,
        "lon": 20.1482,
        "description": "教堂广场上的双塔地标，与洪灾后的重建记忆紧密相连。",
        "category": "church"
      },
      {
        "name": "塞格德新犹太会堂",
        "local": "Új zsinagóga",
        "lat": 46.2534,
        "lon": 20.141,
        "description": "穹顶与彩色玻璃十分醒目，体现多种建筑风格的融合。",
        "category": "church"
      },
      {
        "name": "塞切尼广场",
        "local": "Széchenyi tér",
        "lat": 46.2546,
        "lon": 20.1486,
        "description": "绿树环绕的中心广场，可看到市政厅，是漫步旧城的起点。",
        "category": "landmark"
      },
      {
        "category": "museum",
        "name": "莫拉·费伦茨博物馆",
        "local": "Móra Ferenc Múzeum",
        "lat": 46.2522,
        "lon": 20.1522,
        "description": "河岸附近的博物馆，收藏地方历史、考古和艺术。"
      },
      {
        "category": "university",
        "name": "塞格德大学主楼",
        "local": "Szegedi Tudományegyetem",
        "lat": 46.2493,
        "lon": 20.1462,
        "description": "杜戈尼奇广场的大学主楼，大学设施还分布在城市其他地方。"
      }
    ],
    "river": "蒂萨河（Tisza）沿市区东侧流过，河岸是散步和认识城市的好线索。",
    "climate": "日照较多，夏季偏热；冬季寒冷。暖季游河岸注意防晒，出发前查短期预报。",
    "currency": "匈牙利福林 HUF",
    "prices": "整体更适合学生和日常生活预算，普通餐馆通常较首都旅游区便宜。"
  },
  {
    "id": "vienna",
    "country": "at",
    "name": "维也纳",
    "local": "Wien",
    "lat": 48.2082,
    "lon": 16.3738,
    "intro": "奥地利首都，哈布斯堡王朝的历史、古典音乐和咖啡馆文化交织。环城大道串联歌剧院、博物馆和宏伟建筑。",
    "features": "维也纳炸肉排、萨赫蛋糕、咖啡馆文化；古典音乐演出。",
    "people": "舒伯特出生于维也纳；莫扎特与贝多芬都曾长期在这里生活和创作。",
    "app": "WienMobil",
    "appurl": "https://www.wienerlinien.at/web/wl-en/wienmobil",
    "operator": "Wiener Linien",
    "mapurl": "https://www.wienerlinien.at/web/wl-en/maps",
    "tourism": "https://www.wien.info/en",
    "transit": "U-Bahn、S-Bahn、电车与公交共同覆盖城市。机场位于市区核心票区之外，购票时留意目的地。",
    "places": [
      {
        "name": "圣斯蒂芬大教堂",
        "local": "Stephansdom",
        "lat": 48.2085,
        "lon": 16.3731,
        "description": "老城中心的哥特式教堂，彩色屋顶和南塔是维也纳的象征。",
        "category": "church"
      },
      {
        "name": "美泉宫",
        "local": "Schloss Schönbrunn",
        "lat": 48.1845,
        "lon": 16.3122,
        "description": "哈布斯堡王朝的夏宫，拥有宫殿展室与宽阔花园，位于市中心西南。",
        "category": "landmark"
      },
      {
        "name": "美景宫",
        "local": "Schloss Belvedere",
        "lat": 48.1915,
        "lon": 16.3809,
        "description": "巴洛克宫殿与艺术收藏所在地，上美景宫收藏克里姆特的《吻》。",
        "category": "museum"
      },
      {
        "category": "university",
        "name": "维也纳大学主楼",
        "local": "Universität Wien",
        "lat": 48.2132,
        "lon": 16.3597,
        "description": "环城大道上的大学主楼，大学成立于1365年；部分空间的参观规则需查官网。"
      }
    ],
    "river": "多瑙河（Donau）及多瑙运河（Donaukanal）共同塑造城市；老城并非紧贴主河道。",
    "climate": "四季分明，夏季也可能出现热浪，冬季寒冷且风明显；春秋准备雨具和薄外套。",
    "currency": "欧元 EUR",
    "prices": "住宿、正式餐馆和咖啡馆消费通常高于匈牙利城市；超市采购、午间套餐有助控制预算。"
  },
  {
    "id": "salzburg",
    "country": "at",
    "name": "萨尔茨堡",
    "local": "Salzburg",
    "lat": 47.8095,
    "lon": 13.055,
    "intro": "萨尔察赫河两岸的巴洛克城市，老城与山上的城堡构成经典天际线。莫扎特与《音乐之声》使它广为人知。",
    "features": "莫扎特巧克力球、萨尔茨堡舒芙蕾（Salzburger Nockerl）；音乐节。",
    "people": "莫扎特于 1756 年在这里出生；指挥家赫伯特·冯·卡拉扬也出生于此。",
    "app": "Salzburg Verkehr",
    "appurl": "https://salzburg-verkehr.at/",
    "operator": "Salzburg Verkehr",
    "mapurl": "https://salzburg-verkehr.at/",
    "tourism": "https://www.salzburg.info/en",
    "transit": "城市无轨电车、公交与区域铁路可在交通联盟网站查询。前往周边湖区要核对返程班次。",
    "places": [
      {
        "name": "霍亨萨尔茨堡城堡",
        "local": "Festung Hohensalzburg",
        "lat": 47.795,
        "lon": 13.0473,
        "description": "俯瞰老城的大型城堡，可步行或乘缆车上山，视野覆盖城市与周边山地。",
        "category": "landmark"
      },
      {
        "name": "莫扎特出生地",
        "local": "Mozarts Geburtshaus",
        "lat": 47.8,
        "lon": 13.0434,
        "description": "粮食胡同上的黄色建筑，现为介绍莫扎特童年与家庭的博物馆。",
        "category": "museum"
      },
      {
        "name": "米拉贝尔宫与花园",
        "local": "Schloss Mirabell",
        "lat": 47.8055,
        "lon": 13.0413,
        "description": "河西岸的宫殿与几何花园，从花园可望见老城与城堡。",
        "category": "landmark"
      },
      {
        "category": "church",
        "name": "萨尔茨堡大教堂",
        "local": "Salzburger Dom",
        "lat": 47.7978,
        "lon": 13.0469,
        "description": "老城中心的巴洛克教堂，周围广场适合步行探索。"
      },
      {
        "category": "university",
        "name": "萨尔茨堡大学大学广场区域",
        "local": "Universität Salzburg, Universitätsplatz",
        "lat": 47.7988,
        "lon": 13.0434,
        "description": "巴黎·洛德隆大学在老城有多处设施；此点标示大学广场周边。"
      }
    ],
    "river": "萨尔察赫河（Salzach）把老城与新城分开，沿河可欣赏城堡和教堂天际线。",
    "climate": "受阿尔卑斯山影响，降水较多；夏季也带雨具，冬季注意湿冷与可能的降雪。",
    "currency": "欧元 EUR",
    "prices": "老城餐饮和住宿偏旅游价格；音乐节、假期期间房价可能显著升高。"
  },
  {
    "id": "innsbruck",
    "country": "at",
    "name": "因斯布鲁克",
    "local": "Innsbruck",
    "lat": 47.2692,
    "lon": 11.4041,
    "intro": "蒂罗尔州首府，位于因河河谷。紧凑的老城与阿尔卑斯山紧邻，适合把建筑漫步和山地观景放在同一天。",
    "features": "蒂罗尔培根、奶酪面疙瘩（Käsespätzle）；山地运动与冬奥历史。",
    "people": "马克西米连一世与黄金屋顶的历史密切相关；滑雪运动员安娜·法伊特出生于此。",
    "app": "IVB-Scout",
    "appurl": "https://www.ivb.at/",
    "operator": "IVB",
    "mapurl": "https://www.ivb.at/",
    "tourism": "https://www.innsbruck.info/en/",
    "transit": "市区电车与公交由 IVB 运营。山地缆车独立购票，运行时间及天气可能影响行程。",
    "places": [
      {
        "name": "黄金屋顶",
        "local": "Goldenes Dachl",
        "lat": 47.2686,
        "lon": 11.3933,
        "description": "老城中覆有镀金铜瓦的凸窗，是与马克西米连一世相关的城市地标。",
        "category": "landmark"
      },
      {
        "name": "北链山缆车起点",
        "local": "Congress / Nordkette",
        "lat": 47.2717,
        "lon": 11.3958,
        "description": "从 Congress 站进入北链山交通系统；此标记为市区起点，不是山顶。",
        "category": "other"
      },
      {
        "name": "贝吉瑟尔跳台",
        "local": "Bergisel Sprungschanze",
        "lat": 47.249,
        "lon": 11.3994,
        "description": "扎哈·哈迪德设计的跳台建筑，结合滑雪历史与城市全景。",
        "category": "landmark"
      },
      {
        "category": "church",
        "name": "圣雅各大教堂",
        "local": "Dom zu St. Jakob",
        "lat": 47.2695,
        "lon": 11.3938,
        "description": "老城北部的巴洛克教堂，紧邻宫廷建筑。"
      },
      {
        "category": "museum",
        "name": "蒂罗尔州立博物馆",
        "local": "Tiroler Landesmuseum Ferdinandeum",
        "lat": 47.2666,
        "lon": 11.3979,
        "description": "收藏蒂罗尔地区的艺术与历史；参观前确认整修和开放安排。"
      },
      {
        "category": "university",
        "name": "因斯布鲁克大学主楼",
        "local": "Universität Innsbruck",
        "lat": 47.2631,
        "lon": 11.3841,
        "description": "因河畔的大学主楼区域，大学校区还分布在其他城区。"
      }
    ],
    "river": "因河（Inn）穿过山谷，北侧山脉与老城相邻；河谷地形影响交通走向。",
    "climate": "山地天气变化快，谷底与山上温差明显；即使夏季上山也应备保暖层，关注焚风和缆车运行。",
    "currency": "欧元 EUR",
    "prices": "市中心住宿与山地项目支出较高；缆车、滑雪等活动宜单独列预算。"
  },
  {
    "id": "berlin",
    "country": "de",
    "name": "柏林",
    "local": "Berlin",
    "lat": 52.52,
    "lon": 13.405,
    "intro": "德国首都，历史纪念地、世界级博物馆和多元街区并存。城市分散而广阔，提前把景点按区域串起来能节省时间。",
    "features": "咖喱香肠、柏林甜甜圈；街头艺术与博物馆文化。",
    "people": "马琳·黛德丽出生于柏林；洪堡兄弟与这座城市的学术历史紧密相关。",
    "app": "BVG Fahrinfo / BVG Tickets",
    "appurl": "https://www.bvg.de/en",
    "operator": "BVG / VBB",
    "mapurl": "https://www.bvg.de/en/connections/network-maps-and-routes",
    "tourism": "https://www.visitberlin.de/en",
    "transit": "地铁、电车、公交与 S-Bahn 联网。BER 机场属于 C 区，从市中心出发通常需 ABC 票。",
    "places": [
      {
        "name": "勃兰登堡门",
        "local": "Brandenburger Tor",
        "lat": 52.5163,
        "lon": 13.3777,
        "description": "城市的经典地标，也见证了冷战分隔与德国统一。",
        "category": "landmark"
      },
      {
        "name": "博物馆岛",
        "local": "Museumsinsel",
        "lat": 52.5206,
        "lon": 13.401,
        "description": "施普雷河上的博物馆群；各馆开放及施工状态不同，参观前查官网。",
        "category": "museum"
      },
      {
        "name": "东边画廊",
        "local": "East Side Gallery",
        "lat": 52.505,
        "lon": 13.4397,
        "description": "保留的柏林墙段成为露天艺术长廊，位于施普雷河东侧。",
        "category": "museum"
      },
      {
        "category": "church",
        "name": "柏林大教堂",
        "local": "Berliner Dom",
        "lat": 52.5191,
        "lon": 13.401,
        "description": "博物馆岛旁的穹顶教堂，可与附近博物馆安排在同一区域。"
      },
      {
        "category": "university",
        "name": "柏林洪堡大学主楼",
        "local": "Humboldt-Universität zu Berlin",
        "lat": 52.5187,
        "lon": 13.3939,
        "description": "菩提树下大街上的大学主楼，是城市学术历史的重要地标。"
      }
    ],
    "river": "施普雷河（Spree）穿过中心城区，哈弗尔河（Havel）及众多湖泊分布在更外围。",
    "climate": "冬季寒冷且日照时间短，夏季较暖也有热天；带雨具，按季节安排户外时间。",
    "currency": "欧元 EUR",
    "prices": "选择多、价格差异大，街头小食可相对节省；热门地段住宿和演出是预算大项。"
  },
  {
    "id": "munich",
    "country": "de",
    "name": "慕尼黑",
    "local": "München",
    "lat": 48.1372,
    "lon": 11.5756,
    "intro": "巴伐利亚州首府，老城广场、艺术博物馆和大片城市公园值得慢游。啤酒花园与传统食品也体现南德生活方式。",
    "features": "白香肠、椒盐卷饼、巴伐利亚啤酒；啤酒花园与慕尼黑啤酒节。",
    "people": "托马斯·曼曾在慕尼黑生活；康定斯基与“蓝骑士”艺术团体在此活跃。",
    "app": "MVGO / München Navigator",
    "appurl": "https://www.mvg.de/services/mobile-services.html",
    "operator": "MVG / MVV",
    "mapurl": "https://www.mvv-muenchen.de/en/maps-stations/maps/index.html",
    "tourism": "https://www.munich.travel/en",
    "transit": "U-Bahn、S-Bahn、电车与公交采用交通联盟票制。机场位于城外，购票时核对分区。",
    "places": [
      {
        "name": "玛利亚广场",
        "local": "Marienplatz",
        "lat": 48.1374,
        "lon": 11.5755,
        "description": "新市政厅与钟琴所在的老城核心广场，适合开始步行探索。",
        "category": "landmark"
      },
      {
        "name": "英国花园",
        "local": "Englischer Garten",
        "lat": 48.151,
        "lon": 11.589,
        "description": "巨大的城市公园，包含草地、河流与啤酒花园；标记位于公园南部。",
        "category": "other"
      },
      {
        "name": "宁芬堡宫",
        "local": "Schloss Nymphenburg",
        "lat": 48.1583,
        "lon": 11.5033,
        "description": "巴伐利亚王室的夏宫，位于中心城区西侧，拥有宽阔园林。",
        "category": "landmark"
      },
      {
        "category": "church",
        "name": "圣母教堂",
        "local": "Frauenkirche",
        "lat": 48.1386,
        "lon": 11.573,
        "description": "双塔圆顶是慕尼黑的经典城市符号。"
      },
      {
        "category": "museum",
        "name": "老绘画陈列馆",
        "local": "Alte Pinakothek",
        "lat": 48.1486,
        "lon": 11.5701,
        "description": "艺术区的重要美术馆，以欧洲古典绘画收藏闻名。"
      },
      {
        "category": "university",
        "name": "慕尼黑大学主楼",
        "local": "Ludwig-Maximilians-Universität",
        "lat": 48.1508,
        "lon": 11.5802,
        "description": "路德维希大街上的大学主楼，适合结合周边艺术区探索。"
      }
    ],
    "river": "伊萨尔河（Isar）流经城市东部，是步行、骑行和河边休闲的重要轴线。",
    "climate": "受阿尔卑斯山影响，天气变化较快，可能出现焚风；夏季有阵雨，冬季较冷。",
    "currency": "欧元 EUR",
    "prices": "通常属于德国消费较高的城市；啤酒节和展会期间住宿尤其昂贵。"
  },
  {
    "id": "hamburg",
    "country": "de",
    "name": "汉堡",
    "local": "Hamburg",
    "lat": 53.5511,
    "lon": 9.9937,
    "intro": "德国北部的港口城市。运河、红砖仓库与现代港城相邻，水边散步是理解这座城市的好方式。",
    "features": "鱼面包（Fischbrötchen）、肉桂卷（Franzbrötchen）；港口与红砖建筑。",
    "people": "勃拉姆斯出生于汉堡；作家与剧作家莱辛曾在这里工作。",
    "app": "hvv",
    "appurl": "https://www.hvv.de/en/service/hvv-apps",
    "operator": "hvv",
    "mapurl": "https://www.hvv.de/en/plans",
    "tourism": "https://www.hamburg-travel.com/",
    "transit": "U-Bahn、S-Bahn、公交与部分港口渡轮属于 hvv 网络；观光游船通常独立售票。",
    "places": [
      {
        "name": "易北爱乐厅",
        "local": "Elbphilharmonie",
        "lat": 53.5413,
        "lon": 9.9841,
        "description": "玻璃波浪屋顶与历史仓库结合的音乐厅，是港城的新地标。",
        "category": "landmark"
      },
      {
        "name": "仓库城",
        "local": "Speicherstadt",
        "lat": 53.5438,
        "lon": 9.991,
        "description": "运河边的历史红砖仓库群，与邻近港城形成鲜明对照。",
        "category": "landmark"
      },
      {
        "name": "圣米迦勒教堂",
        "local": "St. Michaelis",
        "lat": 53.5484,
        "lon": 9.9787,
        "description": "昵称“Michel”的巴洛克教堂，塔楼是经典城市观景点。",
        "category": "church"
      },
      {
        "category": "museum",
        "name": "汉堡美术馆",
        "local": "Hamburger Kunsthalle",
        "lat": 53.5555,
        "lon": 10.0036,
        "description": "靠近中央车站，收藏从古典到现代的欧洲艺术。"
      },
      {
        "category": "university",
        "name": "汉堡大学主楼",
        "local": "Universität Hamburg",
        "lat": 53.5622,
        "lon": 9.9895,
        "description": "达姆门附近的大学主楼，校园分布在多个城区。"
      }
    ],
    "river": "易北河（Elbe）连接港口；阿尔斯特河与内、外阿尔斯特湖形成市中心水景。",
    "climate": "海洋性影响明显，常有风和阵雨；防风防水外套比只带伞更实用，夏夜也可能凉。",
    "currency": "欧元 EUR",
    "prices": "中心区住宿和水边餐饮偏高；鱼面包、面包店和超市可作为轻量餐食选择。"
  },
  {
    "id": "cologne",
    "country": "de",
    "name": "科隆",
    "local": "Köln",
    "lat": 50.9375,
    "lon": 6.9603,
    "intro": "莱茵河畔的历史城市，大教堂几乎紧邻中央火车站。罗马遗产、艺术收藏和热闹的啤酒馆共同塑造城市性格。",
    "features": "科隆啤酒（Kölsch）、古龙水（Eau de Cologne）；狂欢节文化。",
    "people": "诺贝尔文学奖得主海因里希·伯尔出生于科隆；康拉德·阿登纳曾任科隆市长。",
    "app": "KVB-App",
    "appurl": "https://www.kvb.koeln/",
    "operator": "KVB",
    "mapurl": "https://www.kvb.koeln/",
    "tourism": "https://www.cologne-tourism.com/",
    "transit": "轻轨 Stadtbahn 与公交构成市区交通。跨城行程要核对区域票制和列车类别。",
    "places": [
      {
        "name": "科隆大教堂",
        "local": "Kölner Dom",
        "lat": 50.9413,
        "lon": 6.9583,
        "description": "拥有高耸双塔的哥特式大教堂，也是 UNESCO 世界遗产。",
        "category": "church"
      },
      {
        "name": "霍亨索伦桥",
        "local": "Hohenzollernbrücke",
        "lat": 50.9414,
        "lon": 6.9657,
        "description": "横跨莱茵河的铁路桥，步行道可欣赏教堂与河岸天际线。",
        "category": "landmark"
      },
      {
        "name": "路德维希博物馆",
        "local": "Museum Ludwig",
        "lat": 50.9408,
        "lon": 6.9603,
        "description": "大教堂附近的现代艺术博物馆，拥有波普艺术与毕加索作品收藏。",
        "category": "museum"
      },
      {
        "category": "university",
        "name": "科隆大学主楼",
        "local": "Universität zu Köln",
        "lat": 50.9281,
        "lon": 6.9285,
        "description": "市中心西南的大学主楼，所在校园适合步行感受大学氛围。"
      }
    ],
    "river": "莱茵河（Rhein）贯穿城市，老城和大教堂在西岸，道依茨位于东岸。",
    "climate": "冬季相对德国东部通常温和，但仍可能低温；全年注意雨天，夏季可能闷热。",
    "currency": "欧元 EUR",
    "prices": "普通消费通常较慕尼黑容易控制；展会和狂欢节期间住宿价格可能上涨。"
  }
];

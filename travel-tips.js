const travelTipData = {
  "shared": [
    {
      "id": "help",
      "category": "日常",
      "title": "紧急求助用 112，普通问询不用占线",
      "body": "匈牙利、奥地利和德国均可拨打 112 联系紧急服务。先说位置和发生了什么；非紧急就医、问路或交通问题请使用相应普通服务。",
      "action": "离线保存住宿地址、保险联系方式和证件备份。",
      "scope": "三国通用",
      "url": "https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/index_en.htm",
      "source": "欧盟 · 紧急求助"
    },
    {
      "id": "bill",
      "category": "餐饮",
      "title": "结账前先看账单，再决定是否给小费",
      "body": "先看是否已有服务费、每项收费是否清楚，再根据当地习惯和服务决定是否留小费。不要把固定百分比当作所有餐馆的统一规则。",
      "action": "有疑问可问：“Is service included?”（已含服务费吗？）",
      "scope": "三国通用",
      "url": "",
      "source": ""
    }
  ],
  "countries": {
    "hu": [
      {
        "id": "money",
        "category": "支付",
        "title": "福林结算，不要默认选择欧元",
        "body": "匈牙利本币是福林（HUF）。部分商户接受欧元并不代表汇率合算；刷卡机或 ATM 若让你选择本币或本国货币，通常选 HUF，并查看发卡行和机器显示的费用。",
        "action": "支付前确认币种与金额，拒绝换汇不等于一定没有其他手续费。",
        "scope": "匈牙利",
        "url": "https://www.mnb.hu/en",
        "source": "匈牙利国家银行"
      },
      {
        "id": "ticket",
        "category": "交通",
        "title": "有票不一定已生效，纸票与手机票规则不同",
        "body": "城市单程纸票通常需要按规则验证；部分手机票需要扫码或出示动态画面。日票、时段票和铁路票的规则可能不同，不能一概认为买完即生效。",
        "action": "上车或进入付费区前，先确认运营商的验证要求。",
        "scope": "匈牙利",
        "url": "https://bkk.hu/en/tickets-and-passes/",
        "source": "BKK · 票务说明（布达佩斯）"
      },
      {
        "id": "airport",
        "category": "交通",
        "title": "机场交通可能需要专用票",
        "body": "不要把市区普通车票、通票与所有机场服务视为同一种票。机场快线和接驳线路的票种、覆盖范围不同。",
        "action": "看清线路编号和票名，再付款；其他城市查当地运营商。",
        "scope": "匈牙利",
        "url": "https://bkk.hu/en/travel-information/",
        "source": "BKK · 出行信息（布达佩斯）"
      },
      {
        "id": "deposit",
        "category": "购物",
        "title": "有些饮料瓶要付押金，别喝完就丢",
        "body": "带退瓶标识的适用饮料包装可能另收押金，通常需要按退瓶系统规则回收。并非所有瓶罐都可退。",
        "action": "保留包装、条码和标识，查看店内 REpont 退瓶说明。",
        "scope": "匈牙利",
        "url": "https://repont.hu/en",
        "source": "REpont · 退瓶系统"
      },
      {
        "id": "hours",
        "category": "购物",
        "title": "周日与节假日不要混为一谈",
        "body": "部分超市周日营业，但不同门店营业时间可能不同；公共节假日还可能另有安排。地图显示的平常时间不一定适用于当天。",
        "action": "抵达较晚或碰上节假日时，先核对具体门店。",
        "scope": "匈牙利",
        "url": "https://visithungary.com/",
        "source": "匈牙利官方旅游入口"
      },
      {
        "id": "food",
        "category": "餐饮",
        "title": "paprika 不一定表示很辣",
        "body": "菜单或包装上的 paprika 可指甜椒或红椒粉。甜味、辣味和具体配料要结合完整标签判断，食物名称不能代替过敏原说明。",
        "action": "不能吃辣或有过敏时，直接向店员确认；不要只凭图片。",
        "scope": "匈牙利",
        "url": "https://visithungary.com/",
        "source": "匈牙利官方旅游入口"
      }
    ],
    "at": [
      {
        "id": "money",
        "category": "支付",
        "title": "用欧元，但仍要准备小额现金",
        "body": "奥地利使用欧元。许多地方可刷卡，但小店、摊位或山区设施的支付方式可能不同；不要把支持银行卡理解为接受所有卡种。",
        "action": "点餐或购买前问是否接受你的卡，不必携带大量现金。",
        "scope": "奥地利",
        "url": "https://www.austria.info/en/",
        "source": "奥地利官方旅游入口"
      },
      {
        "id": "sunday",
        "category": "购物",
        "title": "普通超市周日常关门，节假日也要查",
        "body": "奥地利许多普通商店周日和公共节假日不营业；部分车站、机场或特许门店有例外，不能把某个例外推广到全城。",
        "action": "周六买好次日早餐与水；周日需要采购时查具体门店。",
        "scope": "奥地利",
        "url": "https://www.austria.info/en/",
        "source": "奥地利官方旅游入口"
      },
      {
        "id": "ticket",
        "category": "交通",
        "title": "纸票可能要打票，电子票要核对生效时间",
        "body": "有些票在购买时已设定有效时间，有些纸票要先验证。城市公共交通与 ÖBB 等铁路的票种和使用规则也不同。",
        "action": "不要等查票才找打票机；从购票渠道核对有效区间与开始时间。",
        "scope": "奥地利",
        "url": "https://www.oebb.at/en/",
        "source": "ÖBB · 铁路票务入口"
      },
      {
        "id": "deposit",
        "category": "购物",
        "title": "带押金标志的瓶罐，通常要留着退",
        "body": "奥地利的适用一次性塑料瓶和金属饮料罐有押金制度；需看包装标志，不包括所有饮品包装。",
        "action": "不要压扁需退回的包装，保留可识别的条码与标志。",
        "scope": "奥地利",
        "url": "https://www.recycling-pfand.at/",
        "source": "奥地利 · 一次性包装押金系统"
      },
      {
        "id": "water",
        "category": "餐饮",
        "title": "水和咖啡的名称值得再确认一次",
        "body": "矿泉水可能分带气和不带气；想要自来水可问 Leitungswasser。咖啡馆的水、餐位或其他服务是否收费，以菜单和店家说明为准。",
        "action": "点水说清 still / sparkling；别把桌上的任何物品都当作免费。",
        "scope": "奥地利",
        "url": "https://www.austria.info/en/",
        "source": "奥地利官方旅游入口"
      },
      {
        "id": "mountain",
        "category": "日常",
        "title": "山上比城区冷，缆车也有最后返程",
        "body": "城市天气预报不能代表山顶天气。风、雷雨、降雪或维护可能改变缆车服务，返程时间也未必与城市公交一致。",
        "action": "上山前看运营状态和末班下山时间，带保暖、防雨衣物。",
        "scope": "奥地利",
        "url": "https://www.austria.info/en/",
        "source": "奥地利官方旅游入口"
      }
    ],
    "de": [
      {
        "id": "money",
        "category": "支付",
        "title": "“能刷卡”也可能有卡种差异",
        "body": "德国使用欧元。小店或餐馆可能偏好现金，或仅支持部分银行卡；手机支付通常也取决于店家接受的卡和终端。",
        "action": "坐下点餐前问能否用你的卡付款，备少量现金。",
        "scope": "德国",
        "url": "https://www.germany.travel/en/home.html",
        "source": "德国官方旅游入口"
      },
      {
        "id": "sunday",
        "category": "购物",
        "title": "周日普通商店大多关闭",
        "body": "德国许多普通商店和超市周日关闭；车站、机场、特许营业和个别购物周日可能例外。法定节假日也会影响营业。",
        "action": "周六先买好基本补给；例外门店仍需逐店核对。",
        "scope": "德国",
        "url": "https://www.germany.travel/en/home.html",
        "source": "德国官方旅游入口"
      },
      {
        "id": "ticket",
        "category": "交通",
        "title": "Deutschland-Ticket 不是所有火车都能坐",
        "body": "该票通常适用于符合条件的地方与区域公共交通，不普遍覆盖 ICE、IC、EC 长途列车。具体线路可能有例外，且它通常是订阅产品。",
        "action": "买前核对列车类别、实名要求、订阅及取消条款。",
        "scope": "德国",
        "url": "https://int.bahn.de/en/offers/regional/deutschland-ticket",
        "source": "DB · Deutschland-Ticket"
      },
      {
        "id": "validate",
        "category": "交通",
        "title": "买票之后还要看分区和验证方式",
        "body": "某些纸票需要 Entwerten（打票），某些票已经指定生效时间。机场、跨区或跨城行程可能超出手中票的覆盖范围。",
        "action": "先确认起终点分区和生效时间；各城市规则并不完全一样。",
        "scope": "德国",
        "url": "https://int.bahn.de/en",
        "source": "DB · 铁路与联程查询"
      },
      {
        "id": "deposit",
        "category": "购物",
        "title": "Pfand 是押金，不是商品价格的一部分",
        "body": "一些饮料瓶罐的押金会另计，按包装标志和门店规则退回。可重复用瓶与一次性包装的系统、金额可能不同。",
        "action": "保留包装和可识别条码，退瓶凭条按门店规定使用。",
        "scope": "德国",
        "url": "https://dpg-pfandsystem.de/en/",
        "source": "DPG · 德国一次性包装押金系统"
      },
      {
        "id": "water",
        "category": "餐饮",
        "title": "矿泉水常带气，想喝不带气要说清楚",
        "body": "点水可区分 still（不带气）与 mit Kohlensäure / sparkling（带气）。餐馆供应的瓶装水通常收费，自来水是否供应或收费由店家说明。",
        "action": "不要把“Mineralwasser”直接理解为不带气的水。",
        "scope": "德国",
        "url": "https://www.germany.travel/en/home.html",
        "source": "德国官方旅游入口"
      }
    ]
  },
  "cities": {
    "budapest": {
      "id": "city-budapest",
      "category": "交通",
      "title": "100E 与其他机场接驳的票种要分清",
      "body": "100E 机场快线与 200E 等常规接驳并非同一票务规则；不要只凭目的地都是机场就购买同一种票。",
      "action": "在 BudapestGO 或 BKK 官网核对当前票种，再选择路线。",
      "url": "https://bkk.hu/en/travel-information/",
      "source": "BKK · 机场与出行信息",
      "scope": "本城提醒"
    },
    "debrecen": {
      "id": "city-debrecen",
      "category": "交通",
      "title": "本地交通查 DKV，不要套用首都车票",
      "body": "德布勒森的电车、无轨电车和公交有自己的票务规则，布达佩斯的普通市区票不能当作本地票使用。",
      "action": "查看 DKV 的票种、验证说明和当日班次。",
      "url": "https://www.dkv.hu/",
      "source": "DKV",
      "scope": "本城提醒"
    },
    "szeged": {
      "id": "city-szeged",
      "category": "交通",
      "title": "电车和公交，先看清运营与票种",
      "body": "塞格德不同交通服务的票务覆盖和验证方式需按本地规定核对，不要假设任意车票可跨服务通用。",
      "action": "查看 SZKT 与具体公交服务的票务说明。",
      "url": "https://szkt.hu/",
      "source": "SZKT",
      "scope": "本城提醒"
    },
    "vienna": {
      "id": "city-vienna",
      "category": "交通",
      "title": "维也纳机场在市区核心票区之外",
      "body": "只覆盖维也纳市区核心区的票，通常不能直接覆盖完整机场行程；CAT、铁路和巴士也有各自票务产品。",
      "action": "按具体路线查询完整区间，别只凭“机场火车”三个字买票。",
      "url": "https://www.wienerlinien.at/web/wl-en",
      "source": "Wiener Linien",
      "scope": "本城提醒"
    },
    "salzburg": {
      "id": "city-salzburg",
      "category": "交通",
      "title": "老城逛完，上山和返程交通要另核对",
      "body": "城堡缆车、城市公交和周边湖区线路的运营时段及票制不一定相同。",
      "action": "规划周边行程前同时确认返程班次。",
      "url": "https://salzburg-verkehr.at/",
      "source": "Salzburg Verkehr",
      "scope": "本城提醒"
    },
    "innsbruck": {
      "id": "city-innsbruck",
      "category": "交通",
      "title": "北链山的市区起点，不是最后一段缆车",
      "body": "上山可能包含不同区段，票的覆盖和末班返程须看实际目的地；不要把市内公交票当作全程山地缆车票。",
      "action": "核对要到哪一站、当天运营情况及下山时间。",
      "url": "https://nordkette.com/en/",
      "source": "Nordkette",
      "scope": "本城提醒"
    },
    "berlin": {
      "id": "city-berlin",
      "category": "交通",
      "title": "去 BER 机场要注意 C 区",
      "body": "从柏林市中心往返 BER，通常需要覆盖 ABC 的票；AB 市区票通常不够，实际票种以你的起终点为准。",
      "action": "购票时输入 BER 及实际出发站确认分区。",
      "url": "https://www.bvg.de/en",
      "source": "BVG",
      "scope": "本城提醒"
    },
    "munich": {
      "id": "city-munich",
      "category": "交通",
      "title": "机场较远，先核对 MVV 分区",
      "body": "慕尼黑机场不在市中心核心范围内，市区票未必覆盖机场；不要拿柏林的 ABC 规则来套用慕尼黑。",
      "action": "按机场和具体起点查询 MVV 区间或合适的机场票。",
      "url": "https://www.mvv-muenchen.de/en/",
      "source": "MVV",
      "scope": "本城提醒"
    },
    "hamburg": {
      "id": "city-hamburg",
      "category": "交通",
      "title": "港口渡轮与观光游船不是一回事",
      "body": "部分港口渡轮在 hvv 公共交通体系内，观光游船通常另售票；相似的码头或航线景观不代表票可通用。",
      "action": "上船前看运营商、线路编号及是否接受所持车票。",
      "url": "https://www.hvv.de/en",
      "source": "hvv",
      "scope": "本城提醒"
    },
    "cologne": {
      "id": "city-cologne",
      "category": "交通",
      "title": "中央站和 Messe/Deutz 都可能是你的车站",
      "body": "莱茵河两岸都有重要车站。列车写 Köln 不代表必停大教堂旁的 Köln Hbf；展会出行更要看完整站名。",
      "action": "出发前核对 Köln Hbf 还是 Köln Messe/Deutz，并留换乘时间。",
      "url": "https://int.bahn.de/en",
      "source": "DB",
      "scope": "本城提醒"
    }
  }
};

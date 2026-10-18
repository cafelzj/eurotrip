const produceEnergy = {
  "id": "budapest-energy",
  "title": "城市的灯光，从哪里来",
  "checkedDate": "2026-10-18",
  "snapshotYear": 2024,
  "scope": "匈牙利全国能源统计；布达佩斯仅作城市背景，不把全国量标成城市量。",
  "intro": "布达佩斯依靠全国电力网络、跨境能源贸易和城市供热供水设施。这里分别观察电力供给和燃料消费：发电量、一次能源消费、进口体积是不同指标，不能直接混算。",
  "sources": [
    {
      "id": "energy-owid",
      "title": "Our World in Data · Energy Data（已读取 Hungary 行）",
      "url": "https://raw.githubusercontent.com/owid/energy-data/e7897aed55b514b8d16e0a3d8f1518789ac3de31/owid-energy-data.csv",
      "accessed": "2026-10-18",
      "verified": true,
      "kind": "dataset",
      "upstream": "电力：Ember；化石燃料消费：Energy Institute Statistical Review of World Energy 2025。",
      "version": "e7897aed55b514b8d16e0a3d8f1518789ac3de31",
      "license": "OWID 汇编 CC BY；上游数据适用其原始许可。",
      "sha256": "266f2e2baad7975351bc9bb4aa061d22b1da9fe4c47d51d2ac6071e01e171f76",
      "note": ""
    },
    {
      "id": "energy-codebook",
      "title": "OWID Energy Codebook · 口径、单位与上游来源（已读取）",
      "url": "https://raw.githubusercontent.com/owid/energy-data/7ae9b4864980edf1094c1e3b84aff11a7a40cea3/owid-energy-codebook.csv",
      "accessed": "2026-10-18",
      "verified": true,
      "kind": "metadata",
      "version": "7ae9b4864980edf1094c1e3b84aff11a7a40cea3",
      "note": ""
    },
    {
      "id": "energy-ember",
      "title": "Ember · Yearly Electricity Data（上游发布入口）",
      "url": "https://ember-energy.org/data/yearly-electricity-data/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "已通过 OWID 数据及 codebook 核查数值；本次未直接读取此网页。"
    },
    {
      "id": "energy-ei",
      "title": "Energy Institute · Statistical Review of World Energy（上游发布入口）",
      "url": "https://www.energyinst.org/statistical-review/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "本次使用 OWID 转录的 2025 版燃料消费数据，未直接读取上游报告。"
    },
    {
      "id": "energy-mekh",
      "title": "MEKH · 匈牙利能源与公共事业监管局",
      "url": "https://www.mekh.hu/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "供天然气、石油、供热和能源平衡后续核查；本次未取得原始统计表。"
    },
    {
      "id": "energy-mavir",
      "title": "MAVIR · 匈牙利电网与电力系统数据",
      "url": "https://www.mavir.hu/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "供电力跨境进口、出口和负荷数据后续核查；本次未读取。"
    },
    {
      "id": "energy-eurostat",
      "title": "Eurostat · Energy database",
      "url": "https://ec.europa.eu/eurostat/web/energy/database",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "本次未读取官方原表；未据此生成数值。"
    },
    {
      "id": "energy-water",
      "title": "Fővárosi Vízművek · 布达佩斯自来水公司",
      "url": "https://www.vizmuvek.hu/en/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "本次未读取官方原表；供水背景保留官方核查入口，不提供未核实的取水量。"
    },
    {
      "id": "energy-paks",
      "title": "MVM Paks Nuclear Power Plant · 核电站官方入口",
      "url": "https://atomeromu.mvm.hu/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "用于了解 Paks 电站，未直接读取网页。"
    },
    {
      "id": "energy-mol",
      "title": "MOL Group · 油气与炼化业务官方入口",
      "url": "https://molgroup.info/",
      "accessed": null,
      "verified": false,
      "kind": "reference",
      "note": "用于了解区域炼化与供应链，不能代替国家进口统计。"
    }
  ],
  "electricity": {
    "year": 2024,
    "geo": "匈牙利全国",
    "unit": "TWh",
    "generation": 38.0,
    "demand": 48.73,
    "netImports": 10.73,
    "netImportShare": 22.019,
    "imports": null,
    "exports": null,
    "sourceIds": [
      "energy-owid",
      "energy-codebook"
    ],
    "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
    "mix": [
      {
        "id": "nuclear",
        "label": "核电",
        "value": 16.02,
        "share": 42.158,
        "color": "#745f9b",
        "column": "nuclear_electricity"
      },
      {
        "id": "solar",
        "label": "太阳能",
        "value": 9.2,
        "share": 24.211,
        "color": "#d8a83b",
        "column": "solar_electricity"
      },
      {
        "id": "gas",
        "label": "天然气",
        "value": 7.13,
        "share": 18.763,
        "color": "#bc7253",
        "column": "gas_electricity"
      },
      {
        "id": "coal",
        "label": "煤",
        "value": 2.44,
        "share": 6.421,
        "color": "#697584",
        "column": "coal_electricity"
      },
      {
        "id": "bioenergy",
        "label": "生物能源",
        "value": 1.83,
        "share": 4.816,
        "color": "#7e965f",
        "column": "biofuel_electricity"
      },
      {
        "id": "wind",
        "label": "风电",
        "value": 0.69,
        "share": 1.816,
        "color": "#64a4ad",
        "column": "wind_electricity"
      },
      {
        "id": "oil",
        "label": "石油",
        "value": 0.45,
        "share": 1.184,
        "color": "#a28175",
        "column": "oil_electricity"
      },
      {
        "id": "hydro",
        "label": "水电",
        "value": 0.23,
        "share": 0.605,
        "color": "#5385ab",
        "column": "hydro_electricity"
      },
      {
        "id": "other-renewables",
        "label": "其他可再生能源（不含生物能源）",
        "value": 0.01,
        "share": 0.026,
        "color": "#a1bba5",
        "column": "other_renewable_exc_biofuel_electricity"
      }
    ]
  },
  "latestElectricity": {
    "year": 2025,
    "geo": "匈牙利全国",
    "unit": "TWh",
    "generation": 40.24,
    "demand": 48.9,
    "netImports": 8.66,
    "netImportShare": 17.71,
    "imports": null,
    "exports": null,
    "sourceIds": [
      "energy-owid",
      "energy-codebook"
    ],
    "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。"
  },
  "electricityTrend": [
    {
      "year": 2020,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 34.92,
      "demand": 46.6,
      "netImports": 11.68,
      "netImportShare": 25.064,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 2.46,
      "nuclear": 16.06,
      "gas": 9.09
    },
    {
      "year": 2021,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 36.1,
      "demand": 48.85,
      "netImports": 12.75,
      "netImportShare": 26.1,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 3.8,
      "nuclear": 15.99,
      "gas": 9.65
    },
    {
      "year": 2022,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 35.78,
      "demand": 47.93,
      "netImports": 12.15,
      "netImportShare": 25.349,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 4.73,
      "nuclear": 15.81,
      "gas": 8.87
    },
    {
      "year": 2023,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 35.54,
      "demand": 46.64,
      "netImports": 11.1,
      "netImportShare": 23.799,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 6.93,
      "nuclear": 15.92,
      "gas": 7.28
    },
    {
      "year": 2024,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 38.0,
      "demand": 48.73,
      "netImports": 10.73,
      "netImportShare": 22.019,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 9.2,
      "nuclear": 16.02,
      "gas": 7.13
    },
    {
      "year": 2025,
      "geo": "匈牙利全国",
      "unit": "TWh",
      "generation": 40.24,
      "demand": 48.9,
      "netImports": 8.66,
      "netImportShare": 17.71,
      "imports": null,
      "exports": null,
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "definition": "净进口 = 进口 − 出口；本数据的电力需求 = 国内发电 + 净进口。全国电力需求不等同布达佩斯居民电表售电量。",
      "solar": 10.98,
      "nuclear": 16.1,
      "gas": 8.15
    }
  ],
  "primaryEnergy": {
    "year": 2024,
    "geo": "匈牙利全国",
    "unit": "TWh",
    "consumption": 260.792,
    "sourceIds": [
      "energy-owid",
      "energy-codebook"
    ],
    "definition": "OWID 一次能源消费总量；使用来源给出的能量折算口径。不可直接用发电量或不同方法的分项占比重建此总量。"
  },
  "fuelConsumption": {
    "year": 2024,
    "geo": "匈牙利全国",
    "unit": "TWh",
    "items": [
      {
        "id": "gas",
        "label": "天然气",
        "value": 82.37,
        "column": "gas_consumption",
        "definition": "天然气的一次能源消费，按能量折算；不是天然气发电量，也不是进口体积。"
      },
      {
        "id": "oil",
        "label": "石油",
        "value": 95.424,
        "column": "oil_consumption",
        "definition": "石油的一次能源消费，按能量折算；不是原油进口吨数，也不是炼厂产量。"
      },
      {
        "id": "coal",
        "label": "煤",
        "value": 8.792,
        "column": "coal_consumption",
        "definition": "煤的一次能源消费，按能量折算；不等同燃煤发电量。"
      }
    ],
    "sourceIds": [
      "energy-owid",
      "energy-codebook"
    ],
    "definition": "一次能源消费，不是终端用电量；气、油、煤的体积与重量不能由 TWh 无条件换算。"
  },
  "charts": [
    {
      "id": "energy-electricity-supply",
      "title": "电力供给：国内发电与跨境净进口",
      "description": "两项分别展示国内发电与净进口；二者相加为本数据口径的全国电力需求。净进口不是进口总量，不代表天然气或石油进口。",
      "scope": "匈牙利全国",
      "unit": "TWh",
      "years": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "series": [
        {
          "name": "国内发电",
          "values": [
            34.92,
            36.1,
            35.78,
            35.54,
            38.0,
            40.24
          ],
          "color": "#6f8469"
        },
        {
          "name": "跨境净进口",
          "values": [
            11.68,
            12.75,
            12.15,
            11.1,
            10.73,
            8.66
          ],
          "color": "#c6a263"
        }
      ],
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "type": "bar"
    },
    {
      "id": "energy-fuel-consumption",
      "title": "天然气、石油与煤：一次能源消费",
      "description": "全国燃料消费按能量折算。天然气 2024 为 82.370 TWh；其中只有部分用于发电。此图不能解读为进口量，也不能与发电量堆叠。2025 燃料消费在本次版本中缺失。",
      "scope": "匈牙利全国",
      "unit": "TWh",
      "years": [
        2020,
        2021,
        2022,
        2023,
        2024
      ],
      "series": [
        {
          "name": "天然气",
          "values": [
            101.93,
            108.104,
            91.91,
            82.148,
            82.37
          ],
          "color": "#bc7253"
        },
        {
          "name": "石油",
          "values": [
            89.379,
            97.098,
            96.338,
            94.094,
            95.424
          ],
          "color": "#697584"
        },
        {
          "name": "煤",
          "values": [
            19.595,
            15.938,
            14.501,
            10.506,
            8.792
          ],
          "color": "#a18b6c"
        }
      ],
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "type": "bar"
    }
  ],
  "facts": [
    {
      "title": "2024：核电与太阳能合计约三分之二",
      "text": "匈牙利全国发电 38.00 TWh，其中核电 16.02 TWh（42.16%）、太阳能 9.20 TWh（24.21%）。这描述本国发电构成，不表示布达佩斯每个插座实际电流的来源比例。",
      "scope": "匈牙利全国 · 2024",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "verified": true
    },
    {
      "title": "2025：净进口占需求 17.71%",
      "text": "本次版本最新电力年为 2025：全国发电 40.24 TWh、需求 48.90 TWh、净进口 8.66 TWh。净进口占需求从 2020 的 25.064% 变为 2025 的 17.710%；这不是天然气或石油的进口依赖率。",
      "scope": "匈牙利全国 · 2020—2025",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "verified": true
    },
    {
      "title": "同样写 TWh，含义可能不同",
      "text": "2024 天然气一次能源消费为 82.370 TWh，而天然气发电量为 7.130 TWh。前者包含燃料用于供热、工业、发电等用途的能量，后者只计产出的电，不能拿两者直接当“损失率”。",
      "scope": "匈牙利全国 · 2024",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "verified": true
    },
    {
      "title": "油气进口量不能用消费量代替",
      "text": "判断进口依赖还需要同年的国内开采、进口、出口、库存变化及统计调整。仅有消费数据不能推出进口吨数、立方米、来源国或布达佩斯市的用量。",
      "scope": "统计口径",
      "sourceIds": [
        "energy-codebook",
        "energy-mekh",
        "energy-eurostat"
      ],
      "verified": true
    },
    {
      "title": "核电站、炼厂与城市消费是不同地点",
      "text": "Paks 核电站位于布达佩斯以外；MOL 的油气与炼化供应链也服务更广区域。国家供电、区域加工、城市消费不能因企业总部或旅游目的地而归到同一地理范围。",
      "scope": "区域背景 · 官方入口待核查",
      "sourceIds": [
        "energy-paks",
        "energy-mol"
      ],
      "verified": false
    },
    {
      "title": "首都是消费中心，不是主要油气产区",
      "text": "布达佩斯不是匈牙利主要油气开采产区。城市由全国与跨境电网、燃气管网和区域供热系统供给；企业总部在城里，不代表其石油、天然气或发电站也在市区。此处为地理背景，未取得市级能源平衡表。",
      "scope": "布达佩斯城市背景 · 官方入口待核查",
      "sourceIds": [
        "energy-mekh",
        "energy-mavir",
        "energy-mol"
      ],
      "verified": false
    },
    {
      "title": "采暖、热电联产和发电要分开",
      "text": "天然气可用于楼宇采暖、热电联产和工业过程。热电联产同时产出电与热，区域供热输送的是热能；不能把所有供热都记成电力，也不能把城市温泉理解为全城已由地热供暖。",
      "scope": "能源用途与城市背景",
      "sourceIds": [
        "energy-mekh"
      ],
      "verified": false
    }
  ],
  "water": [
    {
      "title": "饮用水：先分清水源与水处理",
      "text": "布达佩斯供水背景常涉及多瑙河沿岸的河岸过滤井：河水通过河岸沉积层渗入并被抽取，经供水系统处理与监测后送往城市。这不等于直接喝河水。圣安德烈岛、切佩尔岛等取水区域属于城市周边水源系统，不能据此估算全城年用水量。此段为背景导读，具体水源占比和当年供水量待水务公司官方资料核验。",
      "scope": "布达佩斯及周边水源区 · 背景待核查",
      "sourceIds": [
        "energy-water"
      ],
      "verified": false
    },
    {
      "title": "温泉水、河流水与食用淡水鱼分开看",
      "text": "温泉用于浴场与可能的热利用，饮用水受供水水质标准管理，淡水鱼则属于养殖或捕捞食物供应链。温泉数量不能代表饮用水供应量，也不能代表城市已经靠地热供暖。",
      "scope": "城市背景与概念说明",
      "sourceIds": [
        "energy-water",
        "energy-mekh"
      ],
      "verified": false
    },
    {
      "title": "全国水电占比较小",
      "text": "2024 匈牙利全国水电发电量为 0.230 TWh，占全国发电约 0.61%。即使布达佩斯有多瑙河流经，也不能从河流景观推断本市主要依靠水电。",
      "scope": "匈牙利全国 · 2024",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "verified": true
    }
  ],
  "gaps": [
    {
      "topic": "电力总进口 / 总出口",
      "reason": "已核查的是进口减出口后的净进口；原数据未提供本页可用的总进口与总出口，二者保留为空。",
      "sourceIds": [
        "energy-mavir",
        "energy-eurostat"
      ]
    },
    {
      "topic": "天然气开采、进口、出口与来源国",
      "reason": "本次读取的 OWID Hungary 天然气产量最新非空值停在 2016，不能与 2024 消费拼成依赖率。MEKH / Eurostat 当年原始表本次未能读取，因此不写未核实进口量。",
      "sourceIds": [
        "energy-mekh",
        "energy-eurostat",
        "energy-owid"
      ]
    },
    {
      "topic": "石油与成品油进出口、炼厂加工量",
      "reason": "原油、成品油、炼厂产出和一次能源消费属于不同统计项；本次仅核查消费，不把消费量当作进口或产量。",
      "sourceIds": [
        "energy-mekh",
        "energy-eurostat",
        "energy-mol"
      ]
    },
    {
      "topic": "布达佩斯市级能源与供水消费",
      "reason": "全国统计不能按游客人数或城市人口直接分摊成“实测城市消费”；目前没有取得可比年份的市级原始表。",
      "sourceIds": [
        "energy-mekh",
        "energy-water"
      ]
    },
    {
      "topic": "2025 燃料消费",
      "reason": "本次固定版本的气、油、煤及一次能源消费在 2025 行为空，不将其当零，也不外推。",
      "sourceIds": [
        "energy-owid"
      ]
    }
  ],
  "methodology": [
    "电力与燃料消费数值来自实际下载的 OWID energy-data 固定版本及 codebook，仅提取 Hungary；能源净进口比例另取自世界银行 / IEA 指标，各图分别标注来源。",
    "电力结构主图统一展示 2024；趋势延伸到数据中最新的 2025。燃料消费最新非空年为 2024。不同年份在标题和数据中明确区分。",
    "TWh 是能量单位，1 TWh = 10 亿 kWh；不是装机容量（GW），也不是天然气体积或石油吨数。",
    "发电结构的百分比以同年全国发电量为分母。净进口占比以同年全国电力需求为分母。",
    "发电分项采用互斥分类，其他可再生能源明确剔除生物能源，避免把 biofuel 和 other_renewable_electricity 重复计入。",
    "源数据保留至 0.001 TWh；展示可四舍五入到 0.01 TWh，百分比亦会有舍入差。null 表示未取得或未提供，绝不是零。",
    "全国一次能源总量与分项能源占比可能来自不同上游及折算方法；本页不跨口径相减推算进口或自给率。",
    "按相邻国家入境管道或跨境电网统计的供给来源，不一定等于油气最初开采国或电力最初发电国；本页没有把过境国当原产国。",
    "verified=true 表示本次读取了对应数据或定义；官方参考入口和未直接读取的城市背景标为 verified=false，不伪称本次已查阅。"
  ]
};

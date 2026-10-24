const produceEnergy = {
  "id": "hu-energy",
  "title": "匈牙利的水与能源",
  "checkedDate": "2026-10-24",
  "snapshotYear": 2024,
  "scope": "匈牙利全国",
  "intro": "分别看全国发电、燃料消费，以及 Eurostat 的电、气、油年度报告进出口；各图保留原有单位和核算体系。全国量不分摊为城市用量。",
  "sources": [
    {
      "id": "energy-owid",
      "title": "Our World in Data · Energy Data（已读 Hungary 行）",
      "url": "https://raw.githubusercontent.com/owid/energy-data/e7897aed55b514b8d16e0a3d8f1518789ac3de31/owid-energy-data.csv",
      "accessed": "2026-10-24",
      "verified": true,
      "kind": "dataset",
      "upstream": "电力：Ember；化石燃料消费：Energy Institute Statistical Review of World Energy 2025。",
      "version": "e7897aed55b514b8d16e0a3d8f1518789ac3de31",
      "license": "OWID 汇编 CC BY；上游数据适用其原始许可。",
      "sha256": "266f2e2baad7975351bc9bb4aa061d22b1da9fe4c47d51d2ac6071e01e171f76",
      "note": "",
      "scope": "匈牙利全国"
    },
    {
      "id": "energy-codebook",
      "title": "OWID Energy Codebook · 口径、单位与上游来源（已读取）",
      "url": "https://raw.githubusercontent.com/owid/energy-data/7ae9b4864980edf1094c1e3b84aff11a7a40cea3/owid-energy-codebook.csv",
      "accessed": "2026-10-24",
      "verified": true,
      "kind": "metadata",
      "version": "7ae9b4864980edf1094c1e3b84aff11a7a40cea3",
      "note": "",
      "sha256": "3cc9b7db0d921496e2988568ce3aee5ed41f50431dd234a0663b5f0a4b2e32bb",
      "scope": "指标单位、定义与上游来源"
    },
    {
      "id": "eurostat-electricity",
      "title": "Eurostat · 电力年度商品平衡（已读）",
      "publisher": "Eurostat",
      "url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_cb_e?geo=DE&geo=AT&geo=HU&time=2024&unit=GWH&siec=E7000&nrg_bal=IMP&nrg_bal=EXP&nrg_bal=GEP",
      "scope": "匈牙利全国",
      "year": 2024,
      "accessed": "2026-10-24",
      "verified": true,
      "sha256": "41ff86f62fb79e78724b693232ec72f5ffe3d8f28cbad7f5eb961556fabce5b5",
      "snapshotUrl": "data/snapshots/eurostat-electricity-2024.json",
      "datasetUpdated": "2026-10-22T23:00:00+0200",
      "dataset": "NRG_CB_E",
      "unit": "GWH",
      "siec": "E7000",
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 GEP 是毛发电；与 OWID / Ember 的覆盖与修订不同，独立列示，不混算差额。"
    },
    {
      "id": "eurostat-gas",
      "title": "Eurostat · 天然气年度商品平衡（已读）",
      "publisher": "Eurostat",
      "url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_cb_gas?geo=DE&geo=AT&geo=HU&time=2024&unit=TJ_GCV&siec=G3000&nrg_bal=IPRD&nrg_bal=IMP&nrg_bal=EXP&nrg_bal=IC_CAL&nrg_bal=IC_OBS",
      "scope": "匈牙利全国",
      "year": 2024,
      "accessed": "2026-10-24",
      "verified": true,
      "sha256": "3a9a98a9d7099e00e2879d8aa2d7d1c848a1ca912311540835dfa9df9c3acf22",
      "snapshotUrl": "data/snapshots/eurostat-gas-2024.json",
      "datasetUpdated": "2026-10-09T23:00:00+0200",
      "dataset": "NRG_CB_GAS",
      "unit": "TJ_GCV",
      "siec": "G3000",
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 本版三国 EXP 列均明确报0；这不是对所有过境、输气合同或市场毛流量的结论，不据此计算进口依赖率。TJ_GCV 为总热值能量单位，与其他燃料口径不能无条件混算。"
    },
    {
      "id": "eurostat-oil",
      "title": "Eurostat · 石油与石油产品（不含生物燃料部分）年度商品平衡（已读）",
      "publisher": "Eurostat",
      "url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_cb_oil?geo=DE&geo=AT&geo=HU&time=2024&unit=THS_T&siec=O4000XBIO&nrg_bal=IPRD&nrg_bal=IMP&nrg_bal=EXP&nrg_bal=FC",
      "scope": "匈牙利全国",
      "year": 2024,
      "accessed": "2026-10-24",
      "verified": true,
      "sha256": "e29a12bebe918c2e93009aa38a7dc0aeece51bf99823ea363cffedd1962e187f",
      "snapshotUrl": "data/snapshots/eurostat-oil-2024.json",
      "datasetUpdated": "2026-10-09T23:00:00+0200",
      "dataset": "NRG_CB_OIL",
      "unit": "THS_T",
      "siec": "O4000XBIO",
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 O4000XBIO 是石油与石油产品合计（排除生物燃料部分），不是只有原油；原生生产与成品油贸易的产品形态不相同。"
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
    "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
    "mix": [
      {
        "id": "nuclear",
        "label": "核电",
        "value": 16.02,
        "share": 42.1578947368421,
        "color": "#745f9b",
        "column": "nuclear_electricity"
      },
      {
        "id": "solar",
        "label": "太阳能",
        "value": 9.2,
        "share": 24.210526315789473,
        "color": "#d8a83b",
        "column": "solar_electricity"
      },
      {
        "id": "gas",
        "label": "天然气",
        "value": 7.13,
        "share": 18.763157894736842,
        "color": "#bc7253",
        "column": "gas_electricity"
      },
      {
        "id": "coal",
        "label": "煤",
        "value": 2.44,
        "share": 6.421052631578947,
        "color": "#697584",
        "column": "coal_electricity"
      },
      {
        "id": "bioenergy",
        "label": "生物能源",
        "value": 1.83,
        "share": 4.815789473684211,
        "color": "#7e965f",
        "column": "biofuel_electricity"
      },
      {
        "id": "wind",
        "label": "风电",
        "value": 0.69,
        "share": 1.8157894736842106,
        "color": "#64a4ad",
        "column": "wind_electricity"
      },
      {
        "id": "oil",
        "label": "石油",
        "value": 0.45,
        "share": 1.1842105263157896,
        "color": "#a28175",
        "column": "oil_electricity"
      },
      {
        "id": "hydro",
        "label": "水电",
        "value": 0.23,
        "share": 0.6052631578947368,
        "color": "#5385ab",
        "column": "hydro_electricity"
      },
      {
        "id": "other-renewables",
        "label": "其他可再生能源（不含生物能源）",
        "value": 0.01,
        "share": 0.02631578947368421,
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
    "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。"
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
      "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
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
    ]
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
        "column": "gas_consumption"
      },
      {
        "id": "oil",
        "label": "石油",
        "value": 95.424,
        "column": "oil_consumption"
      },
      {
        "id": "coal",
        "label": "煤",
        "value": 8.792,
        "column": "coal_consumption"
      }
    ],
    "sourceIds": [
      "energy-owid",
      "energy-codebook"
    ]
  },
  "trade": [
    {
      "id": "electricity",
      "name": "电力",
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "GWh",
      "values": {
        "IMP": 22716.0,
        "EXP": 11988.0,
        "GEP": 37987.362
      },
      "flags": {
        "IMP": null,
        "EXP": null,
        "GEP": null
      },
      "sourceIds": [
        "eurostat-electricity"
      ],
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 GEP 是毛发电；与 OWID / Ember 的覆盖与修订不同，独立列示，不混算差额。"
    },
    {
      "id": "gas",
      "name": "天然气",
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "TJ（总热值）",
      "values": {
        "IPRD": 60882.0,
        "IMP": 216743.0,
        "EXP": 0.0,
        "IC_CAL": 330676.0,
        "IC_OBS": 335093.0
      },
      "flags": {
        "IPRD": null,
        "IMP": null,
        "EXP": null,
        "IC_CAL": null,
        "IC_OBS": null
      },
      "sourceIds": [
        "eurostat-gas"
      ],
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 本版三国 EXP 列均明确报0；这不是对所有过境、输气合同或市场毛流量的结论，不据此计算进口依赖率。TJ_GCV 为总热值能量单位，与其他燃料口径不能无条件混算。"
    },
    {
      "id": "oil",
      "name": "石油与石油产品（不含生物燃料部分）",
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "千吨",
      "values": {
        "IPRD": 1269.0,
        "IMP": 10141.0,
        "EXP": 3789.0,
        "FC": 7169.7
      },
      "flags": {
        "IPRD": null,
        "IMP": null,
        "EXP": null,
        "FC": null
      },
      "sourceIds": [
        "eurostat-oil"
      ],
      "note": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 O4000XBIO 是石油与石油产品合计（排除生物燃料部分），不是只有原油；原生生产与成品油贸易的产品形态不相同。"
    }
  ],
  "charts": [
    {
      "id": "energy-electricity-supply",
      "title": "电力供给：发电、需求与跨境净进口",
      "description": "OWID / Ember 同一体系；净进口可以为负，负值表示净出口。不是毛进口或毛出口。",
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
          ]
        },
        {
          "name": "电力需求",
          "values": [
            46.6,
            48.85,
            47.93,
            46.64,
            48.73,
            48.9
          ]
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
          ]
        }
      ],
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ]
    },
    {
      "id": "energy-fuel-consumption",
      "title": "天然气、石油与煤：一次能源消费",
      "description": "全国燃料消费按能量折算，不是进口吨数、体积或终端售电量；本固定版本2025消费为空，保留缺失。",
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
          ]
        },
        {
          "name": "石油",
          "values": [
            89.379,
            97.098,
            96.338,
            94.094,
            95.424
          ]
        },
        {
          "name": "煤",
          "values": [
            19.595,
            15.938,
            14.501,
            10.506,
            8.792
          ]
        }
      ],
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ]
    },
    {
      "id": "energy-electricity-reported-trade",
      "title": "电力：报告进口与出口",
      "description": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 GEP 是毛发电；与 OWID / Ember 的覆盖与修订不同，独立列示，不混算差额。",
      "scope": "匈牙利全国",
      "unit": "GWh",
      "years": [
        2024
      ],
      "series": [
        {
          "name": "报告进口",
          "values": [
            22716.0
          ],
          "color": "#c16b32"
        },
        {
          "name": "报告出口",
          "values": [
            11988.0
          ],
          "color": "#5679b1"
        }
      ],
      "sourceIds": [
        "eurostat-electricity"
      ],
      "section": "energy"
    },
    {
      "id": "energy-gas-reported-trade",
      "title": "天然气：报告进口与出口",
      "description": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 本版三国 EXP 列均明确报0；这不是对所有过境、输气合同或市场毛流量的结论，不据此计算进口依赖率。TJ_GCV 为总热值能量单位，与其他燃料口径不能无条件混算。",
      "scope": "匈牙利全国",
      "unit": "TJ（总热值）",
      "years": [
        2024
      ],
      "series": [
        {
          "name": "报告进口",
          "values": [
            216743.0
          ],
          "color": "#c16b32"
        },
        {
          "name": "报告出口",
          "values": [
            0.0
          ],
          "color": "#5679b1"
        }
      ],
      "sourceIds": [
        "eurostat-gas"
      ],
      "section": "energy"
    },
    {
      "id": "energy-oil-reported-trade",
      "title": "石油与石油产品（不含生物燃料部分）：报告进口与出口",
      "description": "Eurostat 年度商品平衡表；保留报告值和缺失，不拿消费量代替进口。 O4000XBIO 是石油与石油产品合计（排除生物燃料部分），不是只有原油；原生生产与成品油贸易的产品形态不相同。",
      "scope": "匈牙利全国",
      "unit": "千吨",
      "years": [
        2024
      ],
      "series": [
        {
          "name": "报告进口",
          "values": [
            10141.0
          ],
          "color": "#c16b32"
        },
        {
          "name": "报告出口",
          "values": [
            3789.0
          ],
          "color": "#5679b1"
        }
      ],
      "sourceIds": [
        "eurostat-oil"
      ],
      "section": "energy"
    }
  ],
  "facts": [
    {
      "title": "2024：核电在本国发电中占比最高",
      "text": "匈牙利全国发电 38.00 TWh，其中核电 16.02 TWh，约占 42.2%。这是国内发电结构，不是所有消费电量的电源追踪。",
      "scope": "匈牙利全国 · 2024",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ],
      "verified": true
    },
    {
      "title": "进口、出口和净进口各说什么",
      "text": "一个国家可以同时大量进口和出口电力；跨境时段、调度与统计范围影响结果。净进口是进口减出口，不能用净额替代毛流量。油、气、煤的消费也不等于进口。",
      "scope": "统计口径",
      "sourceIds": [
        "energy-codebook",
        "eurostat-electricity"
      ],
      "verified": true
    }
  ],
  "water": [
    {
      "title": "多瑙河、蒂萨河与内陆鱼塘",
      "text": "匈牙利没有海岸，淡水养殖、河湖水域与进口海产是不同链条；多瑙河流经布达佩斯不代表全国主要依靠水电。",
      "scope": "地理与城市背景；非市级数量统计",
      "sourceIds": [
        "eu-aquaculture-read"
      ],
      "verified": false
    },
    {
      "title": "布达佩斯水源与温泉分开看",
      "text": "首都周边的河岸过滤供水、城市自来水处理和浴场温泉是不同系统；本专题没有取得可比市级用水量，不用全国数字分摊。",
      "scope": "地理与城市背景；非市级数量统计",
      "sourceIds": [
        "budapest-water"
      ],
      "verified": false
    }
  ],
  "gaps": [
    {
      "topic": "实际消费与城市用量",
      "reason": "目前仍缺同年、同口径的逐产品实际摄入及市级能源用量，不用食物可供量或全国分摊值代替。",
      "sourceIds": [
        "energy-codebook"
      ]
    },
    {
      "topic": "贸易来源国与实时价格",
      "reason": "本次是年度全国总量，不包含完整的来源国分解、合同、过境毛流量或今天的零售价。",
      "sourceIds": [
        "eurostat-gas",
        "eurostat-oil"
      ]
    }
  ]
};

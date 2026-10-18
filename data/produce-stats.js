const produceStats = {
  "id": "budapest",
  "updatedAt": "2026-10-18",
  "intro": "布达佩斯的日常，由周边田野、匈牙利全国供应链和跨境贸易共同塑造。认识市场里的食材，也追踪支撑这座城市的水、电与燃料。",
  "scopeNote": "城市讲购买与生活，产区讲种养与加工，数字采用标明年份的匈牙利全国统计。本专题未取得可比的布达佩斯逐食材产量、进口量及实测消费量，不按人口分摊全国量。",
  "supplyIntro": "产量覆盖2020–2024，食物可供量与谷物贸易覆盖2020–2023。默认展示各图最新可用年；切换年份或选择一个指标查看历年变化。数量与金额、产量与食用量分开核查。",
  "sources": [
    {
      "id": "fao-crops",
      "title": "FAOSTAT · 作物与奶类产量",
      "publisher": "Our World in Data；原始机构见各指标",
      "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
      "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
      "accessed": "2026-10-18",
      "year": "2020–2024",
      "scope": "匈牙利全国",
      "verified": true,
      "note": "实际读取固定版本的数值与元数据。单位由元数据明确为吨；只提取 Hungary。产量是农业生产量，不能当作城市销售量或食用消费量。上游 FAO QCL 版本 2026-02-25。",
      "variables": [
        {
          "id": 1199532,
          "label": "小麦",
          "name": "Wheat | 00000015 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199532.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199532.metadata.json",
          "dataSha256": "ec07199d5173f6a3fc1477663e5343b34f1053c9bfde1c7d0f0369545dcfca92",
          "metadataSha256": "3ba20d2c40721fa3b8111c935330fcdd2825601a335ff20a000dd3f61b7c82f8",
          "definition": "Item: Wheat\n\nDescription: Wheat\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1198621,
          "label": "玉米",
          "name": "Maize | 00000056 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198621.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198621.metadata.json",
          "dataSha256": "043cd06fc51056abf4d2dab3fd0a6d4992e7a8e33257d89a8c385e3b4dab75b5",
          "metadataSha256": "26fe5119325e120e83c5e4feb1cb13d152ceb68e34e7edaf75c89e579843e2d7",
          "definition": "Item: Maize (corn)\n\nDescription: Maize (corn) This class includes: -  maize harvested for their dry grains only\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1197641,
          "label": "大麦",
          "name": "Barley | 00000044 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1197641.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1197641.metadata.json",
          "dataSha256": "3f17d0a4e033445c3867ef22c3eed25791acaa569e15a4222e2363078ba9351e",
          "metadataSha256": "ab9f4b158079f08fb53e0e74658b2f3f9699473b1c6c171f1e23e5ffcc883d46",
          "definition": "Item: Barley\n\nDescription: Barley\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199410,
          "label": "葵花籽",
          "name": "Sunflower seed | 00000267 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199410.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199410.metadata.json",
          "dataSha256": "61a3dc74ed3ddd3397a78479baf654ced881ed04fce6ec92726bcd317417569a",
          "metadataSha256": "4822b32571bfa1bd30ef4dd53b9d9d405b99336c15224d84424587b51334caf1",
          "definition": "Item: Sunflower seed\n\nDescription: Sunflower seed This subclass is defined through the following headings/subheadings of the HS 2007: 1206.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199201,
          "label": "油菜籽",
          "name": "Rapeseed | 00000270 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199201.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199201.metadata.json",
          "dataSha256": "eb62f67ebacded256b2921c46ebd8b61fd4fc1d83e28b6940364c56bca432f31",
          "metadataSha256": "83fd827d5308e7c11f3671e2ee9a5d92d6c914e75533661cb9d97f9b22b3ca86",
          "definition": "Item: Rape or colza seed\n\nDescription: Rape or colza seed This subclass is defined through the following headings/subheadings of the HS 2007: 1205.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199386,
          "label": "制糖甜菜",
          "name": "Sugar beet | 00000157 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199386.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199386.metadata.json",
          "dataSha256": "a767a1dfd119f8aac2ebf5174d6aff2a7e6c7c19c481ccb1985671c512968af7",
          "metadataSha256": "c9be019c3013e567a64d95d3a454cd1ff2af8142362de2dd883d92aa642616ca",
          "definition": "Item: Sugar beet\n\nDescription: Sugar beet This subclass is defined through the following headings/subheadings of the HS 2007: 1212.91.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199243,
          "label": "稻米（FAO Rice）",
          "name": "Rice | 00000027 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199243.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199243.metadata.json",
          "dataSha256": "bb5dfdafede4d9406b9f77c93238433b60be655fb6042fbf1a73e5352fd7b29a",
          "metadataSha256": "644981b9915556228301bb8b398d17da7d680139c7cd7e7ea6fa8742310d4efc",
          "definition": "Item: Rice\n\nDescription: Rice\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1197505,
          "label": "苹果",
          "name": "Apples | 00000515 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1197505.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1197505.metadata.json",
          "dataSha256": "b543209dbbbda35f165b140b902612eef4254ced8d48a9dac3eeb0329cb9aca6",
          "metadataSha256": "f7c2eea9e01118afe3442868e84ddc5f05c22eeb3ec7d82a8c141e1272e6d219",
          "definition": "Item: Apples\n\nDescription: Apples This subclass is defined through the following headings/subheadings of the HS 2007: 0808.10.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1198454,
          "label": "葡萄",
          "name": "Grapes | 00000560 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198454.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198454.metadata.json",
          "dataSha256": "e79ef18289c1c2dc018c94b8cfb55ad1ef8d77552a71e494b56790f848e139ac",
          "metadataSha256": "e7622e5d981d35a09af4404e5df1338b365a5cb1e7296f06d972a8a510ea2085",
          "definition": "Item: Grapes\n\nDescription: Grapes This subclass is defined through the following headings/subheadings of the HS 2007: 0806.10.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199148,
          "label": "土豆",
          "name": "Potatoes | 00000116 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199148.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199148.metadata.json",
          "dataSha256": "7f76b52b0063f82a12ddd33b7055613e49f1229854644a2f572612526ba338a3",
          "metadataSha256": "85c44f4d3e176a04d6cb4136f376f4d0bf9719e5688010723aa626ebd2412374",
          "definition": "Item: Potatoes\n\nDescription: Potatoes This subclass is defined through the following headings/subheadings of the HS 2007: 0701.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1199460,
          "label": "番茄",
          "name": "Tomatoes | 00000388 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199460.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199460.metadata.json",
          "dataSha256": "2e40e799bf9b83e64a89f8c69dd2d01252bc0a9bf0e0405daeb517dcd7887ad8",
          "metadataSha256": "82186976a9ca63db519b510f49009963341bb00bbf4fd9d105449cdf7d4ca9fb",
          "definition": "Item: Tomatoes\n\nDescription: Tomatoes This subclass is defined through the following headings/subheadings of the HS 2007: 0702.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1198790,
          "label": "奶类生产总量",
          "name": "Milk | 00001780 || Production | 005510 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198790.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198790.metadata.json",
          "dataSha256": "6a2386e48e949898d8ae662420e1028b1b846c4aaccec82fe604204ddf6aefd9",
          "metadataSha256": "c94c8d1dcdd774e8299f81e7af6fb0d4b54bf4ed6e7b35e847554aa5f98cd949",
          "definition": "Milk represents the raw equivalents of all dairy products including cheese, yoghurt, cream and milk consumed as the final product.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Production: Crops and livestock products",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-12-31",
              "urlMain": "http://www.fao.org/faostat/en/#data/QCL",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "fao-fbs",
      "title": "FAOSTAT · 食物可供量与谷物进出口",
      "publisher": "Our World in Data；原始机构见各指标",
      "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
      "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
      "accessed": "2026-10-18",
      "year": "2020–2023",
      "scope": "匈牙利全国",
      "verified": true,
      "note": "实际读取 FAO Food Balances 的 OWID 整理数据与定义，使用同一新版序列2020–2023。人均量是供应链末端可供人类消费量，尚未扣除消费者浪费；谷物进出口是食物平衡表口径，包含相应加工品折算，不是布达佩斯海关或门店销售统计。",
      "variables": [
        {
          "id": 1201072,
          "label": "水果（不含葡萄酒）",
          "name": "Fruit | 00002919 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201072.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201072.metadata.json",
          "dataSha256": "7a7121b68163d78aaa1b798b9fc554ac3b52e344bdb760de0403b75e7f234175",
          "metadataSha256": "1ed1e187878ef37562ae7eaed30fffb3eba4e71bf5deaa0199cb9f94fdcd2edb",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1203862,
          "label": "蔬菜",
          "name": "Vegetables | 00002918 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1203862.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1203862.metadata.json",
          "dataSha256": "58c88ab9f4f2a329f7cd1fc345baca7599f823578b004b994f910347c0ea5a35",
          "metadataSha256": "b690823a2c29b6ff061e22cd536f10db4e7087e20beefb927988bd49d9ea1b08",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201769,
          "label": "奶类（不含黄油）",
          "name": "Milk - Excluding Butter | 00002848 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201769.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201769.metadata.json",
          "dataSha256": "adb94adf8fb2355d796f029e25c01b1794e7ed0871425f981d0c9e48c00fb4f6",
          "metadataSha256": "c41896316e7e01de33c661d852fd83a26b02f5c4691ab5c0b763f4e3c1414b16",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201693,
          "label": "肉类合计",
          "name": "Meat, total | 00002943 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201693.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201693.metadata.json",
          "dataSha256": "c0ee2e17320e90c4d49da37b5246f6eadbe6378747f06cf435b9e3df8a55f474",
          "metadataSha256": "86cded8edd76cbc7dab3fc6b38272cce10d7ee08684ff82a631b5bb9fe52dc65",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1200910,
          "label": "蛋类",
          "name": "Eggs | 00002949 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200910.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200910.metadata.json",
          "dataSha256": "4e6b493f5ab03da0f1022684405e5085088c87f5027331e0fa951e0aaab53f16",
          "metadataSha256": "dbff9d6baef769f177283c1a95a9ba0dae926feb799eb8c32a9b3f89015525ca",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201006,
          "label": "鱼与海产合计",
          "name": "Fish and seafood | 00002960 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201006.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201006.metadata.json",
          "dataSha256": "8ba4fe9b47c6bac1094baef16c3944f10c7b6eb35012f0b7646078d8d51093db",
          "metadataSha256": "67bb2c5ea68f400f5ae5a9bedf24f6bebf601f584a4fe5abb36eebd95f2393ac",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201581,
          "label": "猪肉",
          "name": "Meat, pig | 00002733 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201581.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201581.metadata.json",
          "dataSha256": "3c5828685f46117edd51cd060633ab9559a530efe3f7a95d7e7868e4eb053fc5",
          "metadataSha256": "dd9555a0fd03b4b9df016f3c6755c9b183015fefb45f7e80b9cd79084a90b4d2",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201620,
          "label": "禽肉",
          "name": "Meat, poultry | 00002734 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201620.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201620.metadata.json",
          "dataSha256": "ab0a02e12e923952efe45cef1644f5e43cecafd6cce264d8e6e49ce68a0c61a8",
          "metadataSha256": "2513a40da626aa893b09e78ce2e80c596236bcbafa14d93505a23e481b9e12cb",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1201508,
          "label": "牛与水牛肉",
          "name": "Meat, beef and buffalo | 00002731 || Food available for consumption | 0645pc || kilograms per year per capita",
          "unit": "kilograms per year per capita",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201508.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1201508.metadata.json",
          "dataSha256": "17b16cacc3cb2501b5ffe9ff8c8136ec26f6c4c546507f71a8097d6cccf96865",
          "metadataSha256": "f4952c3db3c830be16628f497d3154bbe9cdb7f12aef2edc61880c1457ed7e22",
          "definition": "Quantity that is available for consumption at the end of the supply chain. It does not account for consumer waste, so the quantity that is actually consumed may be lower.",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1200372,
          "label": "谷物进口",
          "name": "Cereals - Excluding Beer | 00002905 || Imports | 005611 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200372.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200372.metadata.json",
          "dataSha256": "0174ca90004a7d833edd53c305bb6827eed8e32eec34d962e04459ec8553afc9",
          "metadataSha256": "558211e5883c77ac4e39bf7cdd467d3b390daf91e3375a80afb462d11450433a",
          "definition": "Item: Cereals - Excluding Beer\n\n\nMetric: Import quantity",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        },
        {
          "id": 1200352,
          "label": "谷物出口",
          "name": "Cereals - Excluding Beer | 00002905 || Exports | 005911 || tonnes",
          "unit": "tonnes",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200352.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1200352.metadata.json",
          "dataSha256": "69c092cfcb99f2f7b86b8b73c620ccd32775927bb1cae0f42822cfcaa8c8f340",
          "metadataSha256": "00fcdf26ddb36134a602b1396a928b7fd5973543526c010c5866ae2e522198fc",
          "definition": "Item: Cereals - Excluding Beer\n\n\nMetric: Export quantity",
          "datasetVersion": "2026-02-25",
          "upstream": [
            {
              "title": "Food Balances: Food Balances (-2013, old methodology and population)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2023-03-10",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBSH",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            },
            {
              "title": "Food Balances: Food Balances (2010-)",
              "producer": "Food and Agriculture Organization of the United Nations",
              "datePublished": "2025-10-28",
              "urlMain": "http://www.fao.org/faostat/en/#data/FBS",
              "license": {
                "url": "http://www.fao.org/contact-us/terms/db-terms-of-use/en",
                "name": "CC BY-NC-SA 3.0 IGO"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "fao-fish",
      "title": "FAO / 世界银行 · 水产养殖与捕捞",
      "publisher": "Our World in Data；原始机构见各指标",
      "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
      "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
      "accessed": "2026-10-18",
      "year": "2020–2024",
      "scope": "匈牙利全国",
      "verified": true,
      "note": "实际读取世界银行 WDI 指标 ER.FSH.AQUA.MT 与 ER.FSH.CAPT.MT 及定义。吨数为生产指标；养殖包括养殖水生生物，捕捞包括商业及其他用途，不能与零售去骨鱼肉重量直接比较。",
      "variables": [
        {
          "id": 1293862,
          "label": "水产养殖",
          "name": "Aquaculture production (metric tons)",
          "unit": "metric tons",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293862.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293862.metadata.json",
          "dataSha256": "afec1b3a28bd4e15d7f7a1ecdc31b941019fbcb26e1bae9facd16b02a9d3e51f",
          "metadataSha256": "93be1f07b5f9c197a3dc2c2aa8cb5e63be440c61550281ec8a6ee5c82d2bb365",
          "definition": "Aquaculture is understood to mean the farming of aquatic organisms including fish, molluscs, crustaceans and aquatic plants. Aquaculture production specifically refers to output from aquaculture activities, which are designated for final harvest for consumption.\n\n### Aggregation method:\nSum\n\n### Statistical concept and methodology:\nMethodology: Aquaculture production specifically refers to output from aquaculture activities, which are designated for final harvest for consumption. At this time, harvest for ornamental purposes is not included.\n\n### Development relevance:\nAquaculture is understood to mean the farming of aquatic organisms including fish, molluscs, crustaceans and aquatic plants. Farming implies some form of intervention in the rearing process to enhance production, such as regular stocking, feeding, protection from predators, etc. Farming also implies individual or corporate ownership of the stock being cultivated. For statistical purposes, aquatic organisms which are harvested by an individual of corporate body which has owned them throughout their rearing period contribute to aquaculture while aquatic organisms which are exploitable by public as a common property resource, with or without appropriate licences, are the harvest of fisheries.",
          "datasetVersion": "2026-07-27",
          "upstream": [
            {
              "title": "World Development Indicators",
              "producer": "Food and Agriculture Organization of the United Nations (FAO), via World Bank",
              "datePublished": "2026-07-15",
              "urlMain": "https://data.worldbank.org/indicator/ER.FSH.AQUA.MT",
              "license": {
                "url": "https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators",
                "name": "CC BY 4.0"
              }
            }
          ]
        },
        {
          "id": 1293865,
          "label": "捕捞",
          "name": "Capture fisheries production (metric tons)",
          "unit": "metric tons",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293865.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293865.metadata.json",
          "dataSha256": "d36c6fecc81c05ec26b0d7cbd3a493c5ef917ec9b8b04979d08ec129422c5ca3",
          "metadataSha256": "afbc5227c8b66cda47761c5d6feca737e12ba312b4ba97d03842eb6c8ff1ca02",
          "definition": "Capture fisheries production measures the volume of fish catches landed by a country for all commercial, industrial, recreational and subsistence purposes.\n\n### Aggregation method:\nSum\n\n### Statistical concept and methodology:\nMethodology: Information on capture production is collected annually from relevant national offices concerned with fishery statistics, by means of a system of standardized forms, which list for each country the relative species items and fishing areas breakdown.\n\n\n\n\n\n\n\n\nIn the case of some \"aquatic products\", data are also obtained from trade associations or other specialized international organizations to which data are also submitted. In this way the statistics are reviewed by subject matter specialists.\n\n\n\n\n\n\n\n\nData concerning the nominal catch of certain major groups are generally reviewed in collaboration with the regional agency concerned. For example, for ISSCAAP group 36 (Tunas, bonitos and billfishes) data provided by the national correspondents are often replaced by the \"best scientific estimates\" produced by regional bodies collecting tuna catch statistics (i.e. ICCAT, IOTC, SPC and IATTC.)\n\n\n\n\n\n\n\n\nSee https://www.fao.org/fishery/en/collection/capture",
          "datasetVersion": "2026-07-27",
          "upstream": [
            {
              "title": "World Development Indicators",
              "producer": "Food and Agriculture Organization of the United Nations (FAO), via World Bank",
              "datePublished": "2026-07-15",
              "urlMain": "https://data.worldbank.org/indicator/ER.FSH.CAPT.MT",
              "license": {
                "url": "https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators",
                "name": "CC BY 4.0"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "energy-imports",
      "title": "IEA / 世界银行 · 能源净进口比例",
      "publisher": "Our World in Data；原始机构见各指标",
      "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
      "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
      "accessed": "2026-10-18",
      "year": "2020–2023",
      "scope": "匈牙利全国",
      "verified": true,
      "note": "实际读取 WDI 指标 EG.IMP.CONS.ZS 及定义。净进口＝总进口−总出口；分母为转化前的一次能源使用。该比率不是电力净进口占需求，也不是天然气进口依赖率。",
      "variables": [
        {
          "id": 1293792,
          "label": "能源净进口 / 能源使用",
          "name": "Energy imports, net (% of energy use)",
          "unit": "% of energy use",
          "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293792.data.json",
          "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1293792.metadata.json",
          "dataSha256": "62668d138841cdcff9d86623215b92f2306a268d29be832065d528606c393f97",
          "metadataSha256": "c3f8d494ad4db72f48d849d70c918c9738837f8b9eed26eff180860e76e0d821",
          "definition": "Net energy imports are estimated as gross imports less gross exports, both measured in tons of oil equivalents (toe). A negative value indicates that the country is a net exporter. Energy use refers to use of primary energy before transformation to other end-use fuels, which is equal to indigenous production plus imports and stock changes, minus exports and fuels supplied to ships and aircraft engaged in international transport.\n\n### Aggregation method:\nWeighted average\n\n### Statistical concept and methodology:\nMethodology: Energy data are compiled by the International Energy Agency (IEA). IEA data for economies that are not members of the Organisation for Economic Co-operation and Development (OECD) are based on national energy data adjusted to conform to annual questionnaires completed by OECD member governments.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nA negative value in energy imports indicates that the country is a net exporter. Energy use refers to use of primary energy before transformation to other end-use fuels, which is equal to indigenous production plus imports and stock changes, minus exports and fuels supplied to ships and aircraft engaged in international transport.\n\n### Development relevance:\nModern energy services are crucial to a country's economic development. Access to modern energy is essential for the provision of clean water, sanitation and healthcare and for the provision of reliable and efficient lighting, heating, cooking, mechanical power, and transport and telecommunications services.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nGovernments in many countries are increasingly aware of the urgent need to make better use of the world's energy resources. Improved energy efficiency is often the most economic and readily available means of improving energy security and reducing greenhouse gas emissions.\n\n### Limitations and exceptions:\nThe IEA makes these estimates in consultation with national statistical offices, oil companies, electric utilities, and national energy experts. The IEA occasionally revises its time series to reflect political changes, and energy statistics undergo continual changes in coverage or methodology as more detailed energy accounts become available. Breaks in series are therefore unavoidable.",
          "datasetVersion": "2026-07-27",
          "upstream": [
            {
              "title": "World Development Indicators",
              "producer": "IEA Energy Statistics Data Browser, IEA, via World Bank",
              "datePublished": "2026-07-15",
              "urlMain": "https://data.worldbank.org/indicator/EG.IMP.CONS.ZS",
              "license": {
                "url": "https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators",
                "name": "CC BY 4.0"
              }
            }
          ]
        }
      ]
    }
  ],
  "charts": [
    {
      "id": "field-crops",
      "title": "主粮、油料与糖料：农业收获量",
      "description": "籽粒、油籽、甜菜根分别统计原产品重量。甜菜根不是食糖，葵花籽不是葵花油，稻米的农业口径也不等同零售精米；这些作物还可用于饲料与工业。",
      "scope": "匈牙利全国",
      "unit": "吨",
      "years": [
        2020,
        2021,
        2022,
        2023,
        2024
      ],
      "section": "supply",
      "sourceIds": [
        "fao-crops"
      ],
      "type": "bar",
      "series": [
        {
          "name": "小麦",
          "variableId": 1199532,
          "values": [
            5121480,
            5290140,
            4354710,
            5941990,
            5272960
          ]
        },
        {
          "name": "玉米",
          "variableId": 1198621,
          "values": [
            8365430,
            6424630,
            2765600,
            6242410,
            5297730
          ]
        },
        {
          "name": "大麦",
          "variableId": 1197641,
          "values": [
            1483950,
            1711630,
            1590740,
            2219720,
            1554570
          ]
        },
        {
          "name": "葵花籽",
          "variableId": 1199410,
          "values": [
            1697960,
            1757710,
            1286200,
            1970150,
            1798950
          ]
        },
        {
          "name": "油菜籽",
          "variableId": 1199201,
          "values": [
            876900,
            734020,
            505050,
            626410,
            450360
          ]
        },
        {
          "name": "制糖甜菜",
          "variableId": 1199386,
          "values": [
            780460,
            678010,
            470220,
            875970,
            856310
          ]
        },
        {
          "name": "稻米（FAO Rice）",
          "variableId": 1199243,
          "values": [
            11740,
            9520,
            10150,
            8330,
            8560
          ]
        }
      ]
    },
    {
      "id": "horticulture",
      "title": "苹果、葡萄与菜蔬：全国生产量",
      "description": "展示已核查的四种园艺作物，不代表全部水果蔬菜。全国果园和农田供给城市；当年产量受天气、种植面积和单产等因素影响。",
      "scope": "匈牙利全国",
      "unit": "吨",
      "years": [
        2020,
        2021,
        2022,
        2023,
        2024
      ],
      "section": "supply",
      "sourceIds": [
        "fao-crops"
      ],
      "type": "bar",
      "series": [
        {
          "name": "苹果",
          "variableId": 1197505,
          "values": [
            398710,
            514520,
            350100,
            486300,
            376680
          ]
        },
        {
          "name": "葡萄",
          "variableId": 1198454,
          "values": [
            435050,
            437750,
            414550,
            410980,
            378830
          ]
        },
        {
          "name": "土豆",
          "variableId": 1199148,
          "values": [
            270090,
            239840,
            199210,
            209950,
            234350
          ]
        },
        {
          "name": "番茄",
          "variableId": 1199460,
          "values": [
            154140,
            171770,
            137860,
            177390,
            183510
          ]
        }
      ]
    },
    {
      "id": "cereal-trade",
      "title": "粮食出口国，也会进口粮食",
      "description": "谷物合计，不含啤酒。进口、出口是两个总流量；出口−进口为净出口，不能把净出口当出口总量，也不能用进口÷产量当全部食物的进口依赖率。",
      "scope": "匈牙利全国",
      "unit": "吨",
      "years": [
        2020,
        2021,
        2022,
        2023
      ],
      "section": "supply",
      "sourceIds": [
        "fao-fbs"
      ],
      "type": "bar",
      "series": [
        {
          "name": "谷物进口",
          "variableId": 1200372,
          "values": [
            1095000,
            1485000,
            3043000,
            2085000
          ]
        },
        {
          "name": "谷物出口",
          "variableId": 1200352,
          "values": [
            8725000,
            7511000,
            5466000,
            6228000
          ]
        }
      ]
    },
    {
      "id": "food-availability",
      "title": "每人一年，平均有多少食物可供消费？",
      "description": "可供量是全国食物平衡表指标，包含尚未扣除的消费者浪费，不是实际摄入或布达佩斯人均消费调查。奶类覆盖乳品折算，鱼类合计淡水与海产；各项并非同一种可食部重量。",
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "years": [
        2020,
        2021,
        2022,
        2023
      ],
      "section": "supply",
      "sourceIds": [
        "fao-fbs"
      ],
      "type": "bar",
      "series": [
        {
          "name": "水果（不含葡萄酒）",
          "variableId": 1201072,
          "values": [
            79.700005,
            80.16002,
            88.66002,
            81.25996
          ]
        },
        {
          "name": "蔬菜",
          "variableId": 1203862,
          "values": [
            85.86001,
            88.750015,
            78.140015,
            98.31995
          ]
        },
        {
          "name": "奶类（不含黄油）",
          "variableId": 1201769,
          "values": [
            192.26001,
            195.07004,
            188.55003,
            188.99991
          ]
        },
        {
          "name": "肉类合计",
          "variableId": 1201693,
          "values": [
            81.43001,
            81.65002,
            78.77001,
            76.32996
          ]
        },
        {
          "name": "蛋类",
          "variableId": 1200910,
          "values": [
            14.550002,
            13.850002,
            13.790002,
            14.299993
          ]
        },
        {
          "name": "鱼与海产合计",
          "variableId": 1201006,
          "values": [
            6.4300003,
            6.450001,
            6.460001,
            6.4599967
          ]
        }
      ]
    },
    {
      "id": "meat-availability",
      "title": "肉类可供量：猪、禽、牛的差别",
      "description": "猪肉包含相应加工制品的平衡表归类；禽肉不只鸡肉。三项并未穷尽全部肉类，不与“肉类合计”重复相加；不是每人实际吃掉的肉量。",
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "years": [
        2020,
        2021,
        2022,
        2023
      ],
      "section": "supply",
      "sourceIds": [
        "fao-fbs"
      ],
      "type": "bar",
      "series": [
        {
          "name": "猪肉",
          "variableId": 1201581,
          "values": [
            47.870003,
            50.010006,
            48.500008,
            47.209976
          ]
        },
        {
          "name": "禽肉",
          "variableId": 1201620,
          "values": [
            27.480001,
            25.340004,
            24.210003,
            24.079987
          ]
        },
        {
          "name": "牛与水牛肉",
          "variableId": 1201508,
          "values": [
            5.7700005,
            5.7400007,
            5.590001,
            4.4299974
          ]
        }
      ]
    },
    {
      "id": "inland-fish",
      "title": "淡水背景：养殖与捕捞的生产量",
      "description": "匈牙利是内陆国家。这里是全国养殖和捕捞数据，不是多瑙河市区渔获，也不包含进口海鲜的城市消费量；养殖并非仅鲤鱼。",
      "scope": "匈牙利全国",
      "unit": "吨",
      "years": [
        2020,
        2021,
        2022,
        2023,
        2024
      ],
      "section": "supply",
      "sourceIds": [
        "fao-fish"
      ],
      "type": "bar",
      "series": [
        {
          "name": "水产养殖",
          "variableId": 1293862,
          "values": [
            18435.87,
            18024.758,
            18557.111,
            17785.023,
            19434.732
          ]
        },
        {
          "name": "捕捞",
          "variableId": 1293865,
          "values": [
            5483.12,
            4600.536,
            4596.812,
            4601.538,
            4744.284
          ]
        }
      ]
    },
    {
      "id": "energy-net-imports",
      "title": "能源供给，对外依赖到什么程度？",
      "description": "净能源进口占一次能源使用的比例。正数表示净进口，负数表示净出口；这是全国全部能源口径，不能替代气、油或电力的单项依赖率。",
      "scope": "匈牙利全国",
      "unit": "%",
      "years": [
        2020,
        2021,
        2022,
        2023
      ],
      "section": "energy",
      "sourceIds": [
        "energy-imports"
      ],
      "type": "bar",
      "series": [
        {
          "name": "能源净进口 / 能源使用",
          "variableId": 1293792,
          "values": [
            56.406876,
            53.96491,
            64.44472,
            62.50981
          ]
        }
      ]
    }
  ],
  "itemMetrics": [
    {
      "itemId": "wheat",
      "label": "小麦 · 全国生产量",
      "value": 5272960,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199532,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "maize",
      "label": "玉米 · 全国生产量",
      "value": 5297730,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1198621,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "barley",
      "label": "大麦 · 全国生产量",
      "value": 1554570,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1197641,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "sunflower",
      "label": "葵花籽 · 全国生产量",
      "value": 1798950,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199410,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "rapeseed",
      "label": "油菜籽 · 全国生产量",
      "value": 450360,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199201,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "sugar-beet",
      "label": "制糖甜菜 · 全国生产量",
      "value": 856310,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199386,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "rice",
      "label": "稻米（FAO Rice） · 全国生产量",
      "value": 8560,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199243,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "apple",
      "label": "苹果 · 全国生产量",
      "value": 376680,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1197505,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "grape",
      "label": "葡萄 · 全国生产量",
      "value": 378830,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1198454,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "potato",
      "label": "土豆 · 全国生产量",
      "value": 234350,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199148,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "tomato",
      "label": "番茄 · 全国生产量",
      "value": 183510,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1199460,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "milk",
      "label": "奶类生产总量 · 全国生产量",
      "value": 2098020,
      "year": 2024,
      "scope": "匈牙利全国",
      "unit": "吨",
      "variableId": 1198790,
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "itemId": "milk",
      "label": "奶类（不含黄油） · 全国人均可供量",
      "value": 188.99991,
      "year": 2023,
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "variableId": 1201769,
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "itemId": "egg",
      "label": "蛋类 · 全国人均可供量",
      "value": 14.299993,
      "year": 2023,
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "variableId": 1200910,
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "itemId": "pork",
      "label": "猪肉 · 全国人均可供量",
      "value": 47.209976,
      "year": 2023,
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "variableId": 1201581,
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "itemId": "chicken",
      "label": "禽肉 · 全国人均可供量",
      "value": 24.079987,
      "year": 2023,
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "variableId": 1201620,
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "itemId": "beef",
      "label": "牛与水牛肉 · 全国人均可供量",
      "value": 4.4299974,
      "year": 2023,
      "scope": "匈牙利全国",
      "unit": "千克 / 人 / 年",
      "variableId": 1201508,
      "sourceIds": [
        "fao-fbs"
      ]
    }
  ],
  "highlights": [
    {
      "label": "全国小麦产量",
      "value": 527.296,
      "unit": "万吨",
      "year": 2024,
      "scope": "匈牙利全国",
      "note": "农业生产口径，非城市消费。",
      "sourceIds": [
        "fao-crops"
      ]
    },
    {
      "label": "谷物净出口",
      "value": 414.3,
      "unit": "万吨",
      "year": 2023,
      "scope": "匈牙利全国",
      "note": "谷物出口总量减进口总量。",
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "label": "电力净进口 / 需求",
      "value": 17.71,
      "unit": "%",
      "year": 2025,
      "scope": "匈牙利全国",
      "note": "电力口径，来自 Ember / OWID。",
      "sourceIds": [
        "energy-owid",
        "energy-codebook"
      ]
    },
    {
      "label": "能源净进口 / 能源使用",
      "value": 62.50981,
      "unit": "%",
      "year": 2023,
      "scope": "匈牙利全国",
      "note": "一次能源口径，区别于电力。",
      "sourceIds": [
        "energy-imports"
      ]
    }
  ],
  "context": [
    {
      "title": "在城市购买，不等于城市生产",
      "text": "布达佩斯是消费与集散市场。苹果果园、红椒产区、谷物田、鱼塘、酒庄与加工厂分布在全国各地；买菜时以摊位或包装的原产国、产地和当季批次为准。",
      "sourceIds": [
        "ksh-agriculture",
        "hu-tourism"
      ]
    },
    {
      "title": "谷物可用于面包，也可用于饲料和工业",
      "text": "玉米、小麦和大麦不只供人直接食用：它们也进入饲料、淀粉、酿造与发酵链。国内供给量包含多种用途，不能直接除以人口当作吃饭数量。",
      "sourceIds": [
        "fao-fbs"
      ]
    },
    {
      "title": "海鲜与淡水鱼，是两条供应链",
      "text": "鲤鱼、鲶鱼等有国内淡水养殖背景；三文鱼、鲱鱼、海虾和海贝通过外部供应链进入市场。匈牙利没有海岸，不代表当地没有海产消费，也不能把海鲜进口写成零。",
      "sourceIds": [
        "fao-fish",
        "eu-fishery-hu"
      ]
    }
  ],
  "notes": [
    "图表只展示本次已读取数值与单位定义的指标；没有取得逐品类进口量的食材，会在详情中说明，不用谷物或全国总量替代。",
    "2024粮食产量与2023谷物贸易不是同一年、同一商品分组，不能直接拼成自给率。进口可以发生在丰收或净出口年份。",
    "食物可供量不等于购买量、实际吃下去的重量或营养摄入。奶类包括乳品折算，鱼肉统计与零售去骨净肉重量也可能不同。",
    "收获月份是一般性产区参考，未逐一核对每个产区的官方日历；天气、品种、温室、储藏和进口都会改变上市时间。",
    "数据有年份且可能被原机构修订；本页固定所读版本并提供元数据、原始链接和下载，不把资料图谱当作实时库存或价格。"
  ],
  "energyContext": [
    {
      "title": "全国能源净进口：2023 年约 62.51%",
      "text": "世界银行 / IEA 指标中，2023 年匈牙利能源净进口占能源使用62.51%。这是总进口减总出口后，占转化前一次能源使用的比例；不能理解为天然气62.51%来自进口，也不等同2025电力净进口占需求17.71%。",
      "scope": "匈牙利全国 · 2023",
      "sourceIds": [
        "energy-imports"
      ]
    }
  ]
};

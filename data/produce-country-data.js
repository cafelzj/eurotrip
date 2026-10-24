const produceCountryData = {
  "de": {
    "stats": {
      "id": "de",
      "updatedAt": "2026-10-24",
      "intro": "从北海与波罗的海沿岸，到北德平原、莱茵河谷和阿尔卑斯山前：谷物、土豆、乳品、啤酒与葡萄酒连接着不同产区。既有大型农业和食品加工业，也通过贸易取得咖啡、热带水果和部分水产。",
      "supplyIntro": "按与食材图鉴一致的12类查看。默认是2010–2023同版食物平衡表，可逐产品查看产量、进口、出口、国内供给、食用可供总量与估算人均量；更新的2023/2024单项另列，年份与口径分别标明。",
      "sources": [
        {
          "id": "fao-crops",
          "title": "FAOSTAT · 农业、畜产与葡萄酒产量",
          "publisher": "Our World in Data；原始机构见各指标",
          "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
          "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
          "accessed": "2026-10-24",
          "year": "2020–2024",
          "scope": "德国全国",
          "verified": true,
          "note": "实际读取固定版本的数值与元数据。单位由元数据明确为吨；只提取 Germany。产量是农业生产量，不能当作城市销售量或食用消费量。上游 FAO QCL 版本 2026-02-25。",
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
            },
            {
              "id": 1199257,
              "label": "黑麦",
              "name": "Rye | 00000071 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199257.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199257.metadata.json",
              "dataSha256": "5a3c2a06e101fe4d6fddec490bb4d9b5794feddc2deddeabba2751199a5d7c2f",
              "metadataSha256": "54f93ec28a03df61a9c244247f57afaea5a1cba28f78930934b33284ae2265f4",
              "definition": "Item: Rye\n\nDescription: Rye\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198719,
              "label": "猪肉",
              "name": "Meat, pig | 00001035 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198719.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198719.metadata.json",
              "dataSha256": "2f1bf4b68d15218c2adfa01d209278098bddc2482aa4f2a375865ad69ad9d8f1",
              "metadataSha256": "f89b9e0ec67e34f9620c9315014af14102fd2a78f72988d3a0ba49116fe6abb5",
              "definition": "Item: Meat of pig with the bone, fresh or chilled\n\nDescription: Meat, with the bone in, of domestic or wild pigs (e.g. wild boars), whether fresh or chilled. (Unofficial definition)\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198671,
              "label": "鸡肉",
              "name": "Meat, chicken | 00001058 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198671.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198671.metadata.json",
              "dataSha256": "c300c4fcef446bbc6a9e73ef8d964d07dd1ba3a2eef4bdc63eade42ad3624f06",
              "metadataSha256": "8616581abbcaa7d9b4b430d245639a4d4b7d0fa58efa1ac75eb4694a85fdb5b6",
              "definition": "Item: Meat of chickens, fresh or chilled\n\nDescription: Meat of chickens, fresh or chilled This subclass includes: -  meat of chickens, Gallus domesticus, birds of subclass 02151, fresh or chilled This subclass does not include: -  meat of chickens, frozen, cf. 21141 - edible offal of chicken, cf. 21160\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198653,
              "label": "牛与水牛肉",
              "name": "Meat, beef and buffalo | 00001806 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198653.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198653.metadata.json",
              "dataSha256": "25cc809a8092905b0c38fb03ad3677699b9368ee7cf9cc906088b881695cddfa",
              "metadataSha256": "e51f63723203b28a5fa14c1ba4606bac9403fed437cc8a3bf4665d390cdfe99c",
              "definition": "Item: Beef and Buffalo Meat, primary\n\nDescription: The term \"LIVESTOCK\" is used in a broad sense to cover all grown animals regardless of age, location or purpose of breeding. Non-domesticated animals are excluded under this definition unless they are kept or raised in captivity. Domestic animals included are large and small quadrupeds, poultry, insects (bees) and larvae of insects (silkworms). Figures on livestock numbers should refer to live animals enumerated on a given day or on several consecutive days. The FAO practice is that figures for an indicated year relate to animals reported by countries for any day between October of the previous year and September of the year indicated. Statistics on live animals by age, sex and utilization generally are not included in the list that follows, even though such breakdowns are extremely desirable in terms of national statistics. For each animal species FAO proposes that information be maintained on changes in national herds during the year according to the following equation: initial herd + animals born + imports of live animals - exports of live animals - natural losses - slaughter = closing herd.FAO defines meat as the flesh of animals used for food. In production data, meat is normally reported inclusive of bone and exclusive of meat that is unfit for human consumption. As reported by individual countries, meat production data may refer either to commercial production (meat entering marketing channels), inspected production (from animals slaughtered under sanitary inspection), or total production (the total of the above- mentioned categories plus slaughter for personal consumption). All FAO annual production data refer to total production.Country statistics on meat production adhere to one or more of the following concepts: 1. Live weight: the weight of the animal immediately before slaughter. 2. Killed weight: the live weight less the uncollected blood lost during slaughter. 3. Dressed carcass weight: weight minus all parts - edible and inedible - that are removed in dressing the carcass. The concept varies widely from country to country and according to the various species of livestock. Edible parts generally include edible offals (head or head meat, tongue, brains, heart, liver, spleen, stomach or tripes and, in a few countries, other parts such as feet, throat and lungs. Slaughter fats (the unrendered fats that fall in the course of dressing the carcasses) are recorded as either edible or inedible according to country practice. Inedible parts generally include hides and skins (except in the case of pigs), as well as hoofs and stomach contents.Among individual countries, one of the following three concepts issued to measure production:A. Production from all animals, of both indigenous and foreign origin, that are slaughtered within national boundaries. B. Production from the slaughter of indigenous animals plus exports of live indigenous animals during the reference period. Derived from meat production as follows: production from slaughtered animals plus the meat equivalent of all animals exported alive, minus the meat equivalent of all animals imported alive. As imports/exports of live animals are recorded by FAO in numbers, not weight, animal type and size are of significance. C. The biological production concept covers indigenous animals that are either slaughtered or exported live, plus net additions to the stock during the reference period. Derived from indigenous productions follows: indigenous production plus (or minus) the meat equivalent of the change in the stock numbers during the reference period. Production is expressed in terms of live weight. Changes in the total live weight of all animals are not taken into account.FAO uses the first concept of meat production in the construction of its food balance sheets and for related indicators. The second concept, indigenous meat production, in measuring the output of the national livestock sector, is useful mainly in the construction of index numbers of agricultural production. The third concept, biological production, would be the most complete as it also reflects changes in the livestock herd, but it is not used because of difficulties in obtaining information from national reporting offices. The prices applied to indigenous meat production are derived from prices of live animals. This covers not only the value of meat, but also the value of offals, fats, hides and skins.Beef and Veal, Dried, Salted, Smok Meat of bovine animals, whether salted, in brine, dried or smoked. Includes edible flours and meals.Beef and Veal Preparations nes Meat and offal (o/t liver) that are boiled, steamed, grilled, fried, roasted or otherwise cooked. Includes prepared meals that contain more than 20% of meat and offal by weight.BUFFALO MEAT Fresh, chilled or frozen, with bone in or boneless.OFFALS OF BUFFALO, EDIBLE Fresh, chilled or frozen.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1199551,
              "label": "葡萄酒",
              "name": "Wine | 00000564 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199551.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199551.metadata.json",
              "dataSha256": "0f7b1752d9d3e7e838ed41cc6dcdcb1f4ba4d8cf2c2d63f07ab8839d8033823c",
              "metadataSha256": "1025f3c58bcc2bcadfaacd373c0e4fab2e9cd93ae3a112b6ed44a4dd307f18cc",
              "definition": "Item: Wine\n\nDescription: Wines of fresh grapes of all qualities, including sparkling, fortified and dessert wines (Unofficial definition)\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
          "accessed": "2026-10-24",
          "year": "2020–2023",
          "scope": "德国全国",
          "verified": true,
          "note": "实际读取 FAO Food Balances 的 OWID 整理数据与定义，使用同一新版序列2020–2023。人均量是供应链末端可供人类消费量，尚未扣除消费者浪费；谷物进出口是食物平衡表口径，包含相应加工品折算，不是城市海关或门店销售统计。",
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
          "accessed": "2026-10-24",
          "year": "2020–2024",
          "scope": "德国全国",
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
          "accessed": "2026-10-24",
          "year": "2020–2023",
          "scope": "德国全国",
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
          "id": "energy-net-imports",
          "title": "能源供给，对外依赖到什么程度？",
          "description": "净能源进口占一次能源使用的比例。正数表示净进口，负数表示净出口；这是全国全部能源口径，不能替代气、油或电力的单项依赖率。",
          "scope": "德国全国",
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
                65.3856,
                65.404564,
                71.75341,
                70.48743
              ]
            }
          ]
        }
      ],
      "itemMetrics": [
        {
          "itemId": "wheat",
          "label": "小麦 · 全国生产量",
          "value": 18526700,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199532,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "maize",
          "label": "玉米 · 全国生产量",
          "value": 5010500,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198621,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "barley",
          "label": "大麦 · 全国生产量",
          "value": 10610000,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1197641,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "sunflower",
          "label": "葵花籽 · 全国生产量",
          "value": 134200,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199410,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "rapeseed",
          "label": "油菜籽 · 全国生产量",
          "value": 3631700,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199201,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "sugar-beet",
          "label": "制糖甜菜 · 全国生产量",
          "value": 36682200,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199386,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "rice",
          "label": "稻米（FAO Rice） · 全国生产量",
          "value": 0,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199243,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "apple",
          "label": "苹果 · 全国生产量",
          "value": 871990,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1197505,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "grape",
          "label": "葡萄 · 全国生产量",
          "value": 1059770,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198454,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "potato",
          "label": "土豆 · 全国生产量",
          "value": 12703300,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199148,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "tomato",
          "label": "番茄 · 全国生产量",
          "value": 108030,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199460,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "milk",
          "label": "奶类生产总量 · 全国生产量",
          "value": 33801092,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198790,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "rye",
          "label": "黑麦 · 全国生产量",
          "value": 2584400,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199257,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "pork",
          "label": "猪肉 · 全国生产量",
          "value": 4289110,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198719,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "chicken",
          "label": "鸡肉 · 全国生产量",
          "value": 1114000,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198671,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "beef",
          "label": "牛与水牛肉 · 全国生产量",
          "value": 1015350,
          "year": 2024,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1198653,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "wine",
          "label": "葡萄酒 · 全国生产量",
          "value": 472195.5,
          "year": 2023,
          "scope": "德国全国",
          "unit": "吨",
          "variableId": 1199551,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "milk",
          "label": "奶类（不含黄油） · 全国人均可供量",
          "value": 226.57999,
          "year": 2023,
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201769,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "egg",
          "label": "蛋类 · 全国人均可供量",
          "value": 15.899999,
          "year": 2023,
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1200910,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "pork",
          "label": "猪肉 · 全国人均可供量",
          "value": 38.669994,
          "year": 2023,
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201581,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "chicken",
          "label": "禽肉 · 全国人均可供量",
          "value": 16.769999,
          "year": 2023,
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201620,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "beef",
          "label": "牛与水牛肉 · 全国人均可供量",
          "value": 13.549999,
          "year": 2023,
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201508,
          "sourceIds": [
            "fao-fbs"
          ]
        }
      ],
      "latestSeries": [
        {
          "id": "latest-1199532",
          "itemId": "wheat",
          "name": "小麦",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            22172100,
            21459200,
            22587300,
            21535900,
            18526700
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199532
        },
        {
          "id": "latest-1198621",
          "itemId": "maize",
          "name": "玉米",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            4020000,
            4462400,
            3837400,
            4498900,
            5010500
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198621
        },
        {
          "id": "latest-1197641",
          "itemId": "barley",
          "name": "大麦",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            10769200,
            10411100,
            11207100,
            10999900,
            10610000
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1197641
        },
        {
          "id": "latest-1199410",
          "itemId": "sunflower",
          "name": "葵花籽",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            58000,
            99700,
            161200,
            170100,
            134200
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199410
        },
        {
          "id": "latest-1199201",
          "itemId": "rapeseed",
          "name": "油菜籽",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            3527300,
            3504600,
            4294900,
            4218000,
            3631700
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199201
        },
        {
          "id": "latest-1199386",
          "itemId": "sugar-beet",
          "name": "制糖甜菜",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            28618100,
            31945400,
            28201400,
            31558200,
            36682200
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199386
        },
        {
          "id": "latest-1199243",
          "itemId": "rice",
          "name": "稻米（FAO Rice）",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            0,
            0,
            0,
            0,
            0
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199243
        },
        {
          "id": "latest-1197505",
          "itemId": "apple",
          "name": "苹果",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            1023320,
            1004630,
            1070980,
            941210,
            871990
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1197505
        },
        {
          "id": "latest-1198454",
          "itemId": "grape",
          "name": "葡萄",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            1149540,
            1151470,
            1223320,
            1174050,
            1059770
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198454
        },
        {
          "id": "latest-1199148",
          "itemId": "potato",
          "name": "土豆",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            11715100,
            11312100,
            10683400,
            11607300,
            12703300
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199148
        },
        {
          "id": "latest-1199460",
          "itemId": "tomato",
          "name": "番茄",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            102120,
            101770,
            102180,
            101060,
            108030
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199460
        },
        {
          "id": "latest-1198790",
          "itemId": "milk",
          "name": "奶类生产总量",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            33188890,
            32530842,
            32422536,
            34036256,
            33801092
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198790
        },
        {
          "id": "latest-1199257",
          "itemId": "rye",
          "name": "黑麦",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            3513400,
            3325600,
            3132300,
            3124200,
            2584400
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199257
        },
        {
          "id": "latest-1198719",
          "itemId": "pork",
          "name": "猪肉",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            5118000,
            4971150,
            4491710,
            4209580,
            4289110
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198719
        },
        {
          "id": "latest-1198671",
          "itemId": "chicken",
          "name": "鸡肉",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            1066000,
            1080000,
            1076000,
            1086000,
            1114000
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198671
        },
        {
          "id": "latest-1198653",
          "itemId": "beef",
          "name": "牛与水牛肉",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            1092030,
            1080430,
            994910,
            1004600,
            1015350
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198653
        },
        {
          "id": "latest-1199551",
          "itemId": "wine",
          "name": "葡萄酒",
          "kind": "production",
          "scope": "德国全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            472612.34,
            452693.12,
            482458.66,
            472195.5,
            null
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199551
        },
        {
          "id": "latest-1201769",
          "itemId": "milk",
          "name": "奶类（不含黄油）",
          "kind": "perCapitaPublished",
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            214.84,
            208.92,
            217.03,
            226.57999,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201769
        },
        {
          "id": "latest-1200910",
          "itemId": "egg",
          "name": "蛋类",
          "kind": "perCapitaPublished",
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            16.47,
            15.9,
            15.52,
            15.899999,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1200910
        },
        {
          "id": "latest-1201581",
          "itemId": "pork",
          "name": "猪肉",
          "kind": "perCapitaPublished",
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            43.9,
            41.68,
            38.72,
            38.669994,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201581
        },
        {
          "id": "latest-1201620",
          "itemId": "chicken",
          "name": "禽肉",
          "kind": "perCapitaPublished",
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            18.05,
            17.09,
            16.63,
            16.769999,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201620
        },
        {
          "id": "latest-1201508",
          "itemId": "beef",
          "name": "牛与水牛肉",
          "kind": "perCapitaPublished",
          "scope": "德国全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            14.68,
            14.9,
            13.93,
            13.549999,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201508
        }
      ],
      "context": [
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
      "notes": [
        "同年供需现已扩展到53个产品/统计组；统计组与含制品条目不等于每种生鲜食材，未取得单项时不擅自拆分。",
        "不同年份的农业产量与谷物贸易不是同一年、同一商品分组，不能直接拼成自给率。进口可以发生在丰收或净出口年份。",
        "食物可供量不等于购买量、实际吃下去的重量或营养摄入。奶类包括乳品折算，鱼肉统计与零售去骨净肉重量也可能不同。",
        "收获月份是一般性产区参考，未逐一核对每个产区的官方日历；天气、品种、温室、储藏和进口都会改变上市时间。",
        "数据有年份且可能被原机构修订；本页固定所读版本并提供元数据、原始链接和下载，不把资料图谱当作实时库存或价格。"
      ],
      "energyContext": []
    },
    "supply": {
      "id": "de-fbs",
      "checkedAt": "2026-10-24",
      "scope": "德国全国",
      "years": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023
      ],
      "defaultYear": 2023,
      "population": [
        80830920.0,
        80857872.0,
        80916392.0,
        81041584.0,
        81376080.0,
        82077552.0,
        82760096.0,
        83104008.0,
        83368512.0,
        83559192.0,
        83628712.0,
        83697080.0,
        84086232.0,
        84548232.0
      ],
      "metrics": [
        {
          "id": "production",
          "name": "产量",
          "unit": "千吨",
          "definition": "同版FAO食物平衡表的生产量；具体原产品和制品折算范围见产品名称。"
        },
        {
          "id": "imports",
          "name": "进口量",
          "unit": "千吨",
          "definition": "进口总量，未扣出口；不是净进口。"
        },
        {
          "id": "exports",
          "name": "出口量",
          "unit": "千吨",
          "definition": "出口总量，未扣进口；不与净出口混用。"
        },
        {
          "id": "domestic",
          "name": "国内供给量",
          "unit": "千吨",
          "definition": "由生产、贸易及库存变动等共同决定，供食用、饲料、加工、种子等用途，不能全部当作人吃掉的数量。"
        },
        {
          "id": "food",
          "name": "食用可供总量",
          "unit": "千吨",
          "definition": "FAO Food项：供人食用的供给端数量，未扣消费者浪费，不是实测摄入。"
        },
        {
          "id": "perCapita",
          "name": "人均食用可供量（估算）",
          "unit": "千克 / 人 / 年",
          "definition": "由同版Food总量（千吨）×1,000,000÷同版FAO人口推算；总量有取整，结果为近似参考，不是实测人均消费。"
        }
      ],
      "products": [
        {
          "id": "2511",
          "code": 2511,
          "name": "小麦及制品",
          "originalName": "Wheat and products",
          "category": "grain",
          "itemId": "wheat",
          "scope": "德国全国",
          "values": {
            "production": [
              24107.0,
              22783.0,
              22409.0,
              25019.0,
              27785.0,
              26550.0,
              24464.0,
              24482.0,
              20264.0,
              23499.0,
              22172.0,
              21459.0,
              22587.0,
              21536.0
            ],
            "imports": [
              6909.0,
              7784.0,
              7237.0,
              7876.0,
              8650.0,
              9070.0,
              9028.0,
              9578.0,
              9245.0,
              8635.0,
              9794.0,
              9988.0,
              10478.0,
              11472.0
            ],
            "exports": [
              12353.0,
              9717.0,
              10652.0,
              12114.0,
              14994.0,
              15078.0,
              14453.0,
              12599.0,
              10168.0,
              10620.0,
              14449.0,
              12380.0,
              12081.0,
              12694.0
            ],
            "domestic": [
              17912.0,
              19188.0,
              17622.0,
              17795.0,
              19217.0,
              19209.0,
              19320.0,
              20368.0,
              18055.0,
              21844.0,
              17978.0,
              18346.0,
              19537.0,
              20387.0
            ],
            "food": [
              7236.0,
              7204.0,
              6712.0,
              6900.0,
              6974.0,
              7087.0,
              7293.0,
              7251.0,
              7172.0,
              6140.0,
              6006.0,
              6158.0,
              6280.0,
              6360.0
            ],
            "perCapita": [
              89.52019845870862,
              89.09460293488802,
              82.94981812832188,
              85.14147502348918,
              85.70085951547432,
              86.34516779935151,
              88.12217907528769,
              87.25210942894596,
              86.02768392939531,
              73.48084457303034,
              71.81743992422125,
              73.57484872829494,
              74.68523503348325,
              75.22333524372219
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2513",
          "code": 2513,
          "name": "大麦及制品",
          "originalName": "Barley and products",
          "category": "grain",
          "itemId": "barley",
          "scope": "德国全国",
          "values": {
            "production": [
              10412.0,
              8734.0,
              10391.0,
              10344.0,
              11563.0,
              11630.0,
              10731.0,
              10853.0,
              9584.0,
              11592.0,
              10769.0,
              10411.0,
              11207.0,
              11000.0
            ],
            "imports": [
              1609.0,
              1781.0,
              1798.0,
              1458.0,
              1556.0,
              1743.0,
              1634.0,
              1612.0,
              1671.0,
              1636.0,
              1769.0,
              1802.0,
              1828.0,
              1917.0
            ],
            "exports": [
              2194.0,
              2794.0,
              2188.0,
              3528.0,
              1723.0,
              3569.0,
              3771.0,
              3287.0,
              2745.0,
              2632.0,
              3236.0,
              3952.0,
              3990.0,
              4493.0
            ],
            "domestic": [
              9868.0,
              8463.0,
              8666.0,
              8915.0,
              9355.0,
              9449.0,
              9219.0,
              9323.0,
              10788.0,
              10541.0,
              9881.0,
              7942.0,
              9116.0,
              8152.0
            ],
            "food": [
              29.0,
              23.0,
              26.0,
              26.0,
              17.0,
              21.0,
              25.0,
              20.0,
              21.0,
              21.0,
              17.0,
              89.0,
              103.0,
              39.0
            ],
            "perCapita": [
              0.35877359802412245,
              0.2844497317465886,
              0.321319319329018,
              0.32082294936387223,
              0.20890659761443411,
              0.25585558399694963,
              0.3020779482904418,
              0.2406622794895765,
              0.2518936646008507,
              0.251318849516879,
              0.2032794669849752,
              1.0633584827571045,
              1.2249329949759196,
              0.46127516894735304
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2514",
          "code": 2514,
          "name": "玉米及制品",
          "originalName": "Maize and products",
          "category": "grain",
          "itemId": "maize",
          "scope": "德国全国",
          "values": {
            "production": [
              4073.0,
              5184.0,
              5515.0,
              4387.0,
              5142.0,
              3973.0,
              4018.0,
              4548.0,
              3344.0,
              3665.0,
              4020.0,
              4462.0,
              3837.0,
              4499.0
            ],
            "imports": [
              2286.0,
              2600.0,
              2770.0,
              2676.0,
              3949.0,
              3408.0,
              3053.0,
              3381.0,
              4715.0,
              5659.0,
              5022.0,
              4184.0,
              4563.0,
              3855.0
            ],
            "exports": [
              849.0,
              953.0,
              1281.0,
              1088.0,
              800.0,
              773.0,
              766.0,
              832.0,
              826.0,
              820.0,
              983.0,
              1473.0,
              1275.0,
              1054.0
            ],
            "domestic": [
              5348.0,
              6351.0,
              7564.0,
              8140.0,
              8218.0,
              7779.0,
              6389.0,
              6951.0,
              7370.0,
              8611.0,
              8006.0,
              6994.0,
              7404.0,
              7274.0
            ],
            "food": [
              736.0,
              813.0,
              1045.0,
              1003.0,
              1035.0,
              984.0,
              849.0,
              901.0,
              894.0,
              572.0,
              676.0,
              388.0,
              438.0,
              420.0
            ],
            "perCapita": [
              9.105426487784625,
              10.05467964825985,
              12.914564949954762,
              12.376362238921688,
              12.718725207702313,
              11.988661650142783,
              10.258567123943404,
              10.841835691005421,
              10.723473150150502,
              6.845446758269276,
              8.083348216579013,
              4.6357650708961415,
              5.208938366984978,
              4.967578742509955
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2515",
          "code": 2515,
          "name": "黑麦及制品",
          "originalName": "Rye and products",
          "category": "grain",
          "itemId": "rye",
          "scope": "德国全国",
          "values": {
            "production": [
              2903.0,
              2521.0,
              3878.0,
              4689.0,
              3854.0,
              3488.0,
              3174.0,
              2737.0,
              2201.0,
              3238.0,
              3513.0,
              3326.0,
              3132.0,
              3124.0
            ],
            "imports": [
              324.0,
              268.0,
              367.0,
              520.0,
              618.0,
              418.0,
              293.0,
              317.0,
              527.0,
              482.0,
              912.0,
              763.0,
              355.0,
              494.0
            ],
            "exports": [
              384.0,
              258.0,
              244.0,
              459.0,
              278.0,
              243.0,
              230.0,
              208.0,
              182.0,
              290.0,
              302.0,
              417.0,
              365.0,
              308.0
            ],
            "domestic": [
              3077.0,
              2619.0,
              3545.0,
              4954.0,
              3607.0,
              4115.0,
              3032.0,
              3204.0,
              2435.0,
              3306.0,
              4264.0,
              3703.0,
              3162.0,
              3213.0
            ],
            "food": [
              847.0,
              825.0,
              793.0,
              786.0,
              789.0,
              801.0,
              781.0,
              769.0,
              689.0,
              690.0,
              556.0,
              655.0,
              620.0,
              597.0
            ],
            "perCapita": [
              10.478663362980404,
              10.203088203953723,
              9.80023923953505,
              9.698724546153985,
              9.69572385398756,
              9.759062989597936,
              9.436915104593401,
              9.253464646374216,
              8.264511186189818,
              8.257619341268882,
              6.648434331979189,
              7.825840519167455,
              7.373383076554078,
              7.061058355424866
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2516",
          "code": 2516,
          "name": "燕麦",
          "originalName": "Oats",
          "category": "grain",
          "itemId": "oats",
          "scope": "德国全国",
          "values": {
            "production": [
              600.0,
              627.0,
              757.0,
              628.0,
              627.0,
              566.0,
              536.0,
              577.0,
              578.0,
              519.0,
              722.0,
              767.0,
              755.0,
              452.0
            ],
            "imports": [
              266.0,
              309.0,
              290.0,
              323.0,
              363.0,
              459.0,
              497.0,
              535.0,
              588.0,
              504.0,
              671.0,
              645.0,
              530.0,
              527.0
            ],
            "exports": [
              122.0,
              136.0,
              146.0,
              177.0,
              204.0,
              214.0,
              230.0,
              227.0,
              249.0,
              253.0,
              270.0,
              277.0,
              258.0,
              244.0
            ],
            "domestic": [
              829.0,
              626.0,
              803.0,
              818.0,
              774.0,
              756.0,
              664.0,
              628.0,
              693.0,
              723.0,
              1087.0,
              1147.0,
              998.0,
              839.0
            ],
            "food": [
              204.0,
              169.0,
              193.0,
              127.0,
              124.0,
              106.0,
              87.0,
              101.0,
              206.0,
              353.0,
              576.0,
              605.0,
              534.0,
              441.0
            ],
            "perCapita": [
              2.5237866895489995,
              2.0900871593553685,
              2.3851780242500187,
              1.567096714200453,
              1.5237893002464606,
              1.2914615192226981,
              1.0512312600507374,
              1.2153445114223613,
              2.47095690037025,
              4.224550184736109,
              6.88758664607916,
              7.228448113124138,
              6.350623488515932,
              5.215957679635453
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2807",
          "code": 2807,
          "name": "大米及制品（碾米口径）",
          "originalName": "Rice and products",
          "category": "grain",
          "itemId": "rice",
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              619.0,
              774.0,
              700.0,
              705.0,
              739.0,
              839.0,
              881.0,
              809.0,
              777.0,
              732.0,
              828.0,
              767.0,
              797.0,
              774.0
            ],
            "exports": [
              154.0,
              220.0,
              190.0,
              175.0,
              228.0,
              286.0,
              322.0,
              293.0,
              245.0,
              200.0,
              234.0,
              177.0,
              140.0,
              162.0
            ],
            "domestic": [
              463.0,
              544.0,
              506.0,
              514.0,
              508.0,
              533.0,
              523.0,
              502.0,
              502.0,
              605.0,
              619.0,
              656.0,
              694.0,
              613.0
            ],
            "food": [
              417.0,
              482.0,
              486.0,
              495.0,
              503.0,
              543.0,
              551.0,
              505.0,
              492.0,
              601.0,
              616.0,
              653.0,
              648.0,
              597.0
            ],
            "perCapita": [
              5.158916909519278,
              5.961076987037205,
              6.006199584380876,
              6.107975382119876,
              6.181177564709433,
              6.61569438620684,
              6.657797980321337,
              6.076722557111807,
              5.901508713505645,
              7.192506121887823,
              7.365891274279102,
              7.801944822925722,
              7.70637457033394,
              7.061058355424866
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2617",
          "code": 2617,
          "name": "苹果及制品",
          "originalName": "Apples and products",
          "category": "fruit",
          "itemId": "apple",
          "scope": "德国全国",
          "values": {
            "production": [
              835.0,
              898.0,
              972.0,
              804.0,
              1116.0,
              973.0,
              1033.0,
              597.0,
              1199.0,
              991.0,
              1023.0,
              1005.0,
              1071.0,
              941.0
            ],
            "imports": [
              1468.0,
              1323.0,
              1326.0,
              1350.0,
              1235.0,
              1182.0,
              1091.0,
              1329.0,
              1290.0,
              1169.0,
              1167.0,
              1193.0,
              1060.0,
              962.0
            ],
            "exports": [
              673.0,
              579.0,
              674.0,
              608.0,
              597.0,
              648.0,
              621.0,
              620.0,
              586.0,
              568.0,
              467.0,
              479.0,
              511.0,
              470.0
            ],
            "domestic": [
              1811.0,
              1690.0,
              1742.0,
              1757.0,
              1774.0,
              1646.0,
              1559.0,
              1410.0,
              1740.0,
              1660.0,
              1703.0,
              1673.0,
              1674.0,
              1479.0
            ],
            "food": [
              1721.0,
              1600.0,
              1632.0,
              1652.0,
              1647.0,
              1643.0,
              1586.0,
              1385.0,
              1620.0,
              1553.0,
              1597.0,
              1572.0,
              1569.0,
              1384.0
            ],
            "perCapita": [
              21.291357317224648,
              19.787807425849643,
              20.168966505575284,
              20.38459662881219,
              20.23936272182194,
              20.01765354795182,
              19.163825039545628,
              16.66586285465317,
              19.4317969834942,
              18.58562729998634,
              19.09631228088267,
              18.782017246001892,
              18.659416205021532,
              16.36935471341376
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2620",
          "code": 2620,
          "name": "葡萄及制品（不含葡萄酒）",
          "originalName": "Grapes and products (excl wine)",
          "category": "fruit",
          "itemId": "grape",
          "scope": "德国全国",
          "values": {
            "production": [
              953.0,
              1250.0,
              1227.0,
              1140.0,
              1245.0,
              1199.0,
              1226.0,
              1014.0,
              1404.0,
              1125.0,
              1150.0,
              1151.0,
              1223.0,
              1174.0
            ],
            "imports": [
              789.0,
              853.0,
              807.0,
              807.0,
              787.0,
              828.0,
              817.0,
              818.0,
              771.0,
              760.0,
              817.0,
              790.0,
              739.0,
              738.0
            ],
            "exports": [
              104.0,
              110.0,
              103.0,
              91.0,
              82.0,
              93.0,
              97.0,
              89.0,
              82.0,
              81.0,
              90.0,
              87.0,
              77.0,
              77.0
            ],
            "domestic": [
              1637.0,
              1993.0,
              1931.0,
              1855.0,
              1979.0,
              1934.0,
              1946.0,
              1743.0,
              2092.0,
              1803.0,
              1876.0,
              1855.0,
              1885.0,
              1836.0
            ],
            "food": [
              723.0,
              776.0,
              736.0,
              731.0,
              651.0,
              1102.0,
              1105.0,
              835.0,
              1170.0,
              1161.0,
              1183.0,
              1191.0,
              1178.0,
              1143.0
            ],
            "perCapita": [
              8.944596943842777,
              9.597086601537077,
              9.095808424082971,
              9.020060614807331,
              7.999893826293918,
              13.42632636022088,
              13.351845314437528,
              10.047650168689819,
              14.034075599190256,
              13.894342109004596,
              14.145859379013276,
              14.229887111951815,
              14.009427845452748,
              13.518910720687808
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2615",
          "code": 2615,
          "name": "香蕉",
          "originalName": "Bananas",
          "category": "fruit",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1234.0,
              1288.0,
              1199.0,
              1344.0,
              1388.0,
              1389.0,
              1391.0,
              1417.0,
              1256.0,
              1303.0,
              1323.0,
              1414.0,
              1283.0,
              1363.0
            ],
            "exports": [
              384.0,
              367.0,
              276.0,
              305.0,
              368.0,
              370.0,
              357.0,
              343.0,
              247.0,
              284.0,
              301.0,
              340.0,
              309.0,
              348.0
            ],
            "domestic": [
              849.0,
              921.0,
              922.0,
              1039.0,
              1020.0,
              1018.0,
              1034.0,
              1074.0,
              1009.0,
              1019.0,
              1022.0,
              1074.0,
              974.0,
              1015.0
            ],
            "food": [
              847.0,
              854.0,
              903.0,
              980.0,
              968.0,
              966.0,
              982.0,
              1021.0,
              962.0,
              970.0,
              972.0,
              1021.0,
              926.0,
              963.0
            ],
            "perCapita": [
              10.478663362980404,
              10.561742213547248,
              11.159667129003973,
              12.092557322176724,
              11.89538744063366,
              11.769356863859683,
              11.865621808848553,
              12.28580936794288,
              11.539128826000876,
              11.608537334827268,
              11.622802465258582,
              12.198752931404536,
              11.012504401433995,
              11.389948402469255
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2611",
          "code": 2611,
          "name": "橙与柑橘",
          "originalName": "Oranges, Mandarines",
          "category": "fruit",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1532.0,
              2579.0,
              2568.0,
              2533.0,
              2528.0,
              2669.0,
              2636.0,
              2527.0,
              2573.0,
              2469.0,
              2655.0,
              2563.0,
              2251.0,
              2137.0
            ],
            "exports": [
              676.0,
              683.0,
              671.0,
              708.0,
              712.0,
              727.0,
              640.0,
              644.0,
              712.0,
              683.0,
              636.0,
              572.0,
              514.0,
              426.0
            ],
            "domestic": [
              856.0,
              1896.0,
              1897.0,
              1825.0,
              1827.0,
              1893.0,
              1936.0,
              1856.0,
              1761.0,
              1786.0,
              2018.0,
              1954.0,
              1737.0,
              1711.0
            ],
            "food": [
              656.0,
              1808.0,
              1794.0,
              1714.0,
              1743.0,
              1795.0,
              1835.0,
              1762.0,
              1665.0,
              1691.0,
              1865.0,
              1805.0,
              1582.0,
              1564.0
            ],
            "perCapita": [
              8.115706217373253,
              22.360222391210097,
              22.171033033702244,
              21.149635969602965,
              21.41907056717404,
              21.869560632120216,
              22.172521404518427,
              21.20234682303169,
              19.971569121924595,
              20.237151168240114,
              22.30095328982228,
              21.56586585816375,
              18.81401939856218,
              18.49831703163231
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2612",
          "code": 2612,
          "name": "柠檬、青柠及制品",
          "originalName": "Lemons, Limes and products",
          "category": "fruit",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              138.0,
              149.0,
              149.0,
              152.0,
              152.0,
              170.0,
              179.0,
              193.0,
              199.0,
              213.0,
              261.0,
              246.0,
              223.0,
              230.0
            ],
            "exports": [
              21.0,
              24.0,
              18.0,
              22.0,
              21.0,
              27.0,
              21.0,
              19.0,
              21.0,
              17.0,
              22.0,
              23.0,
              21.0,
              18.0
            ],
            "domestic": [
              117.0,
              125.0,
              131.0,
              129.0,
              131.0,
              144.0,
              157.0,
              174.0,
              178.0,
              195.0,
              238.0,
              223.0,
              202.0,
              211.0
            ],
            "food": [
              116.0,
              120.0,
              122.0,
              125.0,
              125.0,
              137.0,
              150.0,
              166.0,
              170.0,
              187.0,
              228.0,
              213.0,
              193.0,
              203.0
            ],
            "perCapita": [
              1.4350943920964898,
              1.4840855569387232,
              1.5077291137746232,
              1.5424180257878475,
              1.536077923635545,
              1.6691530955991476,
              1.8124676897426508,
              1.9974969197634849,
              2.0391391896259345,
              2.237934517126494,
              2.7263363807396677,
              2.5448916497445313,
              2.295262796411189,
              2.400996392213145
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2625",
          "code": 2625,
          "name": "其他水果（统计组）",
          "originalName": "Fruits, other",
          "category": "fruit",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              389.0,
              423.0,
              371.0,
              391.0,
              463.0,
              442.0,
              388.0,
              337.0,
              450.0,
              338.0,
              329.0,
              296.0,
              313.0,
              300.0
            ],
            "imports": [
              1375.0,
              1486.0,
              1461.0,
              1492.0,
              1522.0,
              1595.0,
              1650.0,
              1771.0,
              1719.0,
              1780.0,
              1729.0,
              1707.0,
              1667.0,
              1701.0
            ],
            "exports": [
              219.0,
              241.0,
              230.0,
              233.0,
              246.0,
              269.0,
              270.0,
              298.0,
              292.0,
              288.0,
              274.0,
              275.0,
              269.0,
              274.0
            ],
            "domestic": [
              1545.0,
              1669.0,
              1602.0,
              1649.0,
              1736.0,
              1763.0,
              1753.0,
              1788.0,
              1860.0,
              1808.0,
              1765.0,
              1715.0,
              1694.0,
              1710.0
            ],
            "food": [
              1384.0,
              1477.0,
              1438.0,
              1493.0,
              1611.0,
              1613.0,
              1607.0,
              1642.0,
              1698.0,
              1647.0,
              1608.0,
              1562.0,
              1544.0,
              1551.0
            ],
            "perCapita": [
              17.12216067811674,
              18.266619729987454,
              17.771430045966458,
              18.422640900010048,
              19.796972279814902,
              19.65214557081332,
              19.4175705161096,
              19.75837314609423,
              20.367402023440217,
              19.71057834068094,
              19.227846053637656,
              18.66253876479323,
              18.362102371289513,
              18.344558641983195
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2601",
          "code": 2601,
          "name": "番茄及制品",
          "originalName": "Tomatoes and products",
          "category": "vegetable",
          "itemId": "tomato",
          "scope": "德国全国",
          "values": {
            "production": [
              73.0,
              77.0,
              61.0,
              69.0,
              84.0,
              81.0,
              85.0,
              97.0,
              103.0,
              107.0,
              102.0,
              102.0,
              102.0,
              101.0
            ],
            "imports": [
              3522.0,
              3585.0,
              3620.0,
              3640.0,
              3630.0,
              3829.0,
              3934.0,
              4071.0,
              3909.0,
              4004.0,
              4202.0,
              4356.0,
              4418.0,
              4232.0
            ],
            "exports": [
              213.0,
              262.0,
              307.0,
              319.0,
              237.0,
              240.0,
              253.0,
              245.0,
              195.0,
              206.0,
              247.0,
              215.0,
              226.0,
              227.0
            ],
            "domestic": [
              3383.0,
              3400.0,
              3374.0,
              3390.0,
              3482.0,
              3713.0,
              3791.0,
              3907.0,
              3838.0,
              3902.0,
              4052.0,
              4238.0,
              4290.0,
              4102.0
            ],
            "food": [
              3270.0,
              3282.0,
              3258.0,
              3269.0,
              3359.0,
              3588.0,
              3667.0,
              3782.0,
              3711.0,
              3779.0,
              3926.0,
              4110.0,
              4178.0,
              3988.0
            ],
            "perCapita": [
              40.45481605306484,
              40.58973998227408,
              40.26378239899772,
              40.337316210403785,
              41.27748596393437,
              43.71475406576454,
              44.308793455242004,
              45.50923705147891,
              44.513209015893196,
              45.22542534877551,
              46.94559925782428,
              49.10565577676067,
              49.687087893295065,
              47.16834291697548
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2602",
          "code": 2602,
          "name": "洋葱",
          "originalName": "Onions",
          "category": "vegetable",
          "itemId": "onion",
          "scope": "德国全国",
          "values": {
            "production": [
              387.0,
              506.0,
              485.0,
              406.0,
              500.0,
              455.0,
              523.0,
              541.0,
              410.0,
              607.0,
              630.0,
              739.0,
              638.0,
              760.0
            ],
            "imports": [
              238.0,
              278.0,
              232.0,
              237.0,
              249.0,
              236.0,
              248.0,
              237.0,
              248.0,
              283.0,
              249.0,
              240.0,
              213.0,
              259.0
            ],
            "exports": [
              83.0,
              84.0,
              76.0,
              78.0,
              79.0,
              93.0,
              83.0,
              89.0,
              79.0,
              57.0,
              63.0,
              52.0,
              63.0,
              77.0
            ],
            "domestic": [
              542.0,
              700.0,
              641.0,
              565.0,
              671.0,
              599.0,
              688.0,
              689.0,
              579.0,
              833.0,
              816.0,
              927.0,
              788.0,
              941.0
            ],
            "food": [
              480.0,
              622.0,
              569.0,
              501.0,
              596.0,
              530.0,
              611.0,
              611.0,
              513.0,
              744.0,
              728.0,
              829.0,
              703.0,
              840.0
            ],
            "perCapita": [
              5.938321622468234,
              7.692510136799049,
              7.031949719161972,
              6.182011447357692,
              7.3240195398942785,
              6.45730759611349,
              7.382785056218398,
              7.352232638406561,
              6.153402378106497,
              8.903867811455141,
              8.705144233238938,
              9.904766092198198,
              8.360465004544382,
              9.93515748501991
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2605",
          "code": 2605,
          "name": "其他蔬菜（统计组）",
          "originalName": "Vegetables, other",
          "category": "vegetable",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              2890.0,
              3011.0,
              3275.0,
              2941.0,
              3178.0,
              2918.0,
              3137.0,
              3388.0,
              3010.0,
              2727.0,
              2705.0,
              2943.0,
              2622.0,
              2653.0
            ],
            "imports": [
              9532.0,
              9139.0,
              10000.0,
              10049.0,
              10107.0,
              10504.0,
              10686.0,
              11116.0,
              11230.0,
              11009.0,
              11576.0,
              11080.0,
              11254.0,
              10458.0
            ],
            "exports": [
              2371.0,
              1934.0,
              2451.0,
              2457.0,
              2321.0,
              2333.0,
              2380.0,
              2484.0,
              2600.0,
              2559.0,
              2486.0,
              2378.0,
              2368.0,
              2262.0
            ],
            "domestic": [
              10072.0,
              10237.0,
              10840.0,
              10549.0,
              10792.0,
              10814.0,
              11008.0,
              11499.0,
              11287.0,
              10812.0,
              11333.0,
              11414.0,
              11282.0,
              10788.0
            ],
            "food": [
              9348.0,
              9510.0,
              10076.0,
              9822.0,
              10031.0,
              10077.0,
              10227.0,
              10665.0,
              10514.0,
              10027.0,
              10530.0,
              10589.0,
              10527.0,
              10032.0
            ],
            "perCapita": [
              115.64881359756885,
              117.61378038739382,
              124.5235946753533,
              121.1970387943059,
              123.26718121590521,
              122.77412952082197,
              123.57404708665393,
              128.33316053781667,
              126.11476141015928,
              119.99876686217837,
              125.91369337363464,
              126.51576375185371,
              125.19290910787868,
              118.65416653538065
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2531",
          "code": 2531,
          "name": "土豆及制品",
          "originalName": "Potatoes and products",
          "category": "vegetable",
          "itemId": "potato",
          "scope": "德国全国",
          "values": {
            "production": [
              10202.0,
              11837.0,
              10666.0,
              9670.0,
              11607.0,
              10370.0,
              10772.0,
              11720.0,
              8921.0,
              10602.0,
              11715.0,
              11312.0,
              10683.0,
              11607.0
            ],
            "imports": [
              1279.0,
              1384.0,
              1576.0,
              1774.0,
              1309.0,
              1250.0,
              1442.0,
              1526.0,
              1689.0,
              1853.0,
              1763.0,
              1814.0,
              1837.0,
              1855.0
            ],
            "exports": [
              4201.0,
              3552.0,
              4646.0,
              4414.0,
              3875.0,
              4500.0,
              4290.0,
              4584.0,
              4457.0,
              4150.0,
              4477.0,
              4877.0,
              4958.0,
              4941.0
            ],
            "domestic": [
              7456.0,
              9320.0,
              8147.0,
              8211.0,
              7926.0,
              8874.0,
              9178.0,
              8902.0,
              6200.0,
              8818.0,
              9189.0,
              8241.0,
              7654.0,
              8677.0
            ],
            "food": [
              5269.0,
              5729.0,
              5495.0,
              5085.0,
              5162.0,
              5423.0,
              5355.0,
              5454.0,
              4895.0,
              5587.0,
              5646.0,
              5171.0,
              5170.0,
              6059.0
            ],
            "perCapita": [
              65.18545130996901,
              70.85271796418289,
              67.90960229665208,
              62.74556528904963,
              63.433873934453466,
              66.07165866740274,
              64.70509652381264,
              65.62860361680751,
              58.71521372481735,
              66.86278153575252,
              67.51269827042177,
              61.78232263299986,
              61.48450081578159,
              71.66323714492339
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2546",
          "code": 2546,
          "name": "干豆",
          "originalName": "Beans",
          "category": "vegetable",
          "itemId": "dry-bean",
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              18.0,
              22.0,
              19.0,
              24.0,
              21.0,
              20.0,
              21.0,
              19.0,
              20.0,
              19.0,
              23.0,
              19.0,
              17.0,
              14.0
            ],
            "exports": [
              4.0,
              7.0,
              7.0,
              8.0,
              7.0,
              5.0,
              4.0,
              5.0,
              5.0,
              3.0,
              5.0,
              4.0,
              3.0,
              3.0
            ],
            "domestic": [
              14.0,
              14.0,
              12.0,
              17.0,
              14.0,
              15.0,
              15.0,
              14.0,
              15.0,
              15.0,
              18.0,
              15.0,
              13.0,
              11.0
            ],
            "food": [
              5.0,
              8.0,
              8.0,
              8.0,
              8.0,
              8.0,
              8.0,
              8.0,
              8.0,
              8.0,
              10.0,
              8.0,
              7.0,
              6.0
            ],
            "perCapita": [
              0.061857516900710764,
              0.09893903712924822,
              0.09886748287046708,
              0.09871475365042223,
              0.09830898711267488,
              0.09746879390359986,
              0.09666494345294138,
              0.09626491179583059,
              0.09595949127651457,
              0.09574051410166819,
              0.11957615704998542,
              0.09558278496693075,
              0.0832478734449654,
              0.07096541060728508
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2547",
          "code": 2547,
          "name": "干豌豆",
          "originalName": "Peas",
          "category": "vegetable",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              177.0,
              155.0,
              139.0,
              130.0,
              155.0,
              277.0,
              290.0,
              298.0,
              197.0,
              228.0,
              298.0,
              299.0,
              323.0,
              266.0
            ],
            "imports": [
              51.0,
              103.0,
              62.0,
              95.0,
              114.0,
              90.0,
              70.0,
              96.0,
              199.0,
              130.0,
              139.0,
              161.0,
              170.0,
              183.0
            ],
            "exports": [
              20.0,
              16.0,
              22.0,
              18.0,
              20.0,
              29.0,
              75.0,
              53.0,
              25.0,
              26.0,
              35.0,
              43.0,
              31.0,
              27.0
            ],
            "domestic": [
              208.0,
              241.0,
              180.0,
              207.0,
              262.0,
              253.0,
              263.0,
              297.0,
              329.0,
              290.0,
              376.0,
              409.0,
              457.0,
              427.0
            ],
            "food": [
              30.0,
              49.0,
              30.0,
              30.0,
              31.0,
              31.0,
              31.0,
              32.0,
              32.0,
              15.0,
              15.0,
              20.0,
              17.0,
              17.0
            ],
            "perCapita": [
              0.3711451014042646,
              0.6060016024166454,
              0.3707530607642516,
              0.37018032618908336,
              0.38094732506161516,
              0.37769157637644946,
              0.3745766558801478,
              0.38505964718332236,
              0.3838379651060583,
              0.17951346394062787,
              0.17936423557497813,
              0.23895696241732686,
              0.2021734069377731,
              0.20106866338730772
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2549",
          "code": 2549,
          "name": "其他豆类及制品（统计组）",
          "originalName": "Pulses, Other and products",
          "category": "vegetable",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              102.0,
              105.0,
              107.0,
              106.0,
              152.0,
              196.0,
              227.0,
              266.0,
              208.0,
              196.0,
              419.0,
              436.0,
              453.0,
              373.0
            ],
            "imports": [
              36.0,
              58.0,
              39.0,
              32.0,
              37.0,
              44.0,
              57.0,
              64.0,
              86.0,
              101.0,
              90.0,
              92.0,
              76.0,
              88.0
            ],
            "exports": [
              10.0,
              30.0,
              12.0,
              16.0,
              27.0,
              35.0,
              31.0,
              36.0,
              54.0,
              74.0,
              79.0,
              81.0,
              74.0,
              71.0
            ],
            "domestic": [
              128.0,
              131.0,
              136.0,
              124.0,
              150.0,
              189.0,
              221.0,
              259.0,
              235.0,
              211.0,
              404.0,
              422.0,
              436.0,
              366.0
            ],
            "food": [
              26.0,
              27.0,
              24.0,
              20.0,
              22.0,
              24.0,
              24.0,
              26.0,
              28.0,
              23.0,
              36.0,
              37.0,
              38.0,
              39.0
            ],
            "perCapita": [
              0.321659087883696,
              0.3339192503112127,
              0.2966024486114013,
              0.2467868841260556,
              0.2703497145598559,
              0.2924063817107996,
              0.2899948303588241,
              0.3128609633364494,
              0.335858219467801,
              0.27525397804229607,
              0.4304741653799475,
              0.4420703804720547,
              0.4519170272726693,
              0.46127516894735304
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2733",
          "code": 2733,
          "name": "猪肉及制品",
          "originalName": "Pigmeat",
          "category": "meat",
          "itemId": "pork",
          "scope": "德国全国",
          "values": {
            "production": [
              5488.0,
              5616.0,
              5474.0,
              5507.0,
              5528.0,
              5570.0,
              5590.0,
              5506.0,
              5370.0,
              5232.0,
              5118.0,
              4971.0,
              4492.0,
              4210.0
            ],
            "imports": [
              1252.0,
              1268.0,
              1218.0,
              1187.0,
              1221.0,
              1170.0,
              1171.0,
              1191.0,
              1215.0,
              1175.0,
              1058.0,
              1026.0,
              1006.0,
              961.0
            ],
            "exports": [
              2240.0,
              2450.0,
              2351.0,
              2407.0,
              2446.0,
              2498.0,
              2583.0,
              2563.0,
              2519.0,
              2517.0,
              2431.0,
              2371.0,
              2109.0,
              1828.0
            ],
            "domestic": [
              4500.0,
              4433.0,
              4342.0,
              4286.0,
              4062.0,
              4231.0,
              3784.0,
              3691.0,
              3780.0,
              3884.0,
              3669.0,
              3489.0,
              3256.0,
              3270.0
            ],
            "food": [
              4500.0,
              4433.0,
              4342.0,
              4286.0,
              4062.0,
              4232.0,
              3784.0,
              3691.0,
              3780.0,
              3884.0,
              3672.0,
              3489.0,
              3256.0,
              3270.0
            ],
            "perCapita": [
              55.67176521063969,
              54.82459394924467,
              53.66032632794601,
              52.88642926821371,
              49.91638820646067,
              51.56099197500432,
              45.72251825324127,
              44.41422367980134,
              45.34085962815313,
              46.482019596359905,
              43.908364868754646,
              41.686042093702675,
              38.722153705258194,
              38.67614878097037
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2731",
          "code": 2731,
          "name": "牛肉及制品（FAO Bovine Meat）",
          "originalName": "Bovine Meat",
          "category": "meat",
          "itemId": "beef",
          "scope": "德国全国",
          "values": {
            "production": [
              1205.0,
              1170.0,
              1146.0,
              1117.0,
              1143.0,
              1132.0,
              1155.0,
              1137.0,
              1123.0,
              1107.0,
              1092.0,
              1080.0,
              995.0,
              1005.0
            ],
            "imports": [
              375.0,
              437.0,
              410.0,
              388.0,
              402.0,
              445.0,
              459.0,
              497.0,
              492.0,
              486.0,
              471.0,
              463.0,
              463.0,
              429.0
            ],
            "exports": [
              529.0,
              494.0,
              446.0,
              410.0,
              435.0,
              412.0,
              403.0,
              388.0,
              375.0,
              373.0,
              321.0,
              350.0,
              349.0,
              345.0
            ],
            "domestic": [
              1050.0,
              1113.0,
              1110.0,
              1094.0,
              1111.0,
              1168.0,
              1208.0,
              1241.0,
              1239.0,
              1209.0,
              1231.0,
              1250.0,
              1175.0,
              1150.0
            ],
            "food": [
              1045.0,
              1108.0,
              1105.0,
              1089.0,
              1106.0,
              1163.0,
              1203.0,
              1236.0,
              1234.0,
              1204.0,
              1228.0,
              1247.0,
              1171.0,
              1146.0
            ],
            "perCapita": [
              12.928221032248551,
              13.70305664240088,
              13.656071071483266,
              13.437545840663727,
              13.591217468327303,
              14.169525913735828,
              14.53599087173606,
              14.872928872455827,
              14.801751529402372,
              14.408947372301062,
              14.683952085738209,
              14.89896660672033,
              13.926179972007784,
              13.554393425991451
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2734",
          "code": 2734,
          "name": "禽肉及制品（含鸡鸭等）",
          "originalName": "Poultry Meat",
          "category": "meat",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              1380.0,
              1423.0,
              1428.0,
              1457.0,
              1550.0,
              1544.0,
              1527.0,
              1514.0,
              1571.0,
              1544.0,
              1572.0,
              1546.0,
              1508.0,
              1531.0
            ],
            "imports": [
              675.0,
              715.0,
              743.0,
              722.0,
              733.0,
              750.0,
              817.0,
              842.0,
              871.0,
              831.0,
              767.0,
              768.0,
              789.0,
              777.0
            ],
            "exports": [
              543.0,
              585.0,
              647.0,
              620.0,
              651.0,
              623.0,
              618.0,
              646.0,
              641.0,
              644.0,
              575.0,
              586.0,
              664.0,
              607.0
            ],
            "domestic": [
              1512.0,
              1554.0,
              1524.0,
              1558.0,
              1588.0,
              1608.0,
              1611.0,
              1557.0,
              1666.0,
              1538.0,
              1603.0,
              1528.0,
              1484.0,
              1508.0
            ],
            "food": [
              1451.0,
              1469.0,
              1442.0,
              1458.0,
              1442.0,
              1450.0,
              1474.0,
              1492.0,
              1509.0,
              1445.0,
              1509.0,
              1431.0,
              1398.0,
              1418.0
            ],
            "perCapita": [
              17.951051404586266,
              18.167680692858205,
              17.82086378740169,
              17.990763852789453,
              17.720194927059648,
              17.666218895027473,
              17.810515831204448,
              17.953406049922407,
              18.10035904203256,
              17.293130359613816,
              18.044042098842798,
              17.097370660959736,
              16.62578958229452,
              16.771492040188374
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2732",
          "code": 2732,
          "name": "羊与山羊肉",
          "originalName": "Mutton & Goat Meat",
          "category": "meat",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              39.0,
              40.0,
              37.0,
              34.0,
              31.0,
              33.0,
              32.0,
              32.0,
              34.0,
              35.0,
              40.0,
              34.0,
              32.0,
              31.0
            ],
            "imports": [
              33.0,
              40.0,
              32.0,
              34.0,
              33.0,
              37.0,
              40.0,
              43.0,
              46.0,
              43.0,
              47.0,
              32.0,
              39.0,
              39.0
            ],
            "exports": [
              8.0,
              7.0,
              7.0,
              7.0,
              6.0,
              6.0,
              6.0,
              7.0,
              6.0,
              6.0,
              5.0,
              5.0,
              5.0,
              5.0
            ],
            "domestic": [
              64.0,
              73.0,
              62.0,
              60.0,
              66.0,
              66.0,
              66.0,
              68.0,
              68.0,
              70.0,
              79.0,
              58.0,
              64.0,
              63.0
            ],
            "food": [
              64.0,
              73.0,
              62.0,
              60.0,
              66.0,
              66.0,
              66.0,
              68.0,
              68.0,
              70.0,
              79.0,
              58.0,
              64.0,
              63.0
            ],
            "perCapita": [
              0.7917762163290978,
              0.90281871380439,
              0.7662229922461199,
              0.7403606523781667,
              0.8110491436795677,
              0.8041175497046988,
              0.7974857834867664,
              0.8182517502645601,
              0.8156556758503738,
              0.8377294983895966,
              0.9446516406948848,
              0.692975191010248,
              0.7611234143539694,
              0.7451368113764933
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2761",
          "code": 2761,
          "name": "淡水鱼（统计组）",
          "originalName": "Freshwater Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              52.0,
              35.0,
              37.0,
              38.0,
              38.0,
              42.0,
              42.0,
              38.0,
              38.0,
              37.0,
              37.0,
              37.0,
              37.0,
              37.0
            ],
            "imports": [
              417.0,
              432.0,
              406.0,
              446.0,
              493.0,
              476.0,
              507.0,
              477.0,
              465.0,
              480.0,
              480.0,
              480.0,
              480.0,
              480.0
            ],
            "exports": [
              119.0,
              126.0,
              113.0,
              127.0,
              144.0,
              146.0,
              159.0,
              150.0,
              132.0,
              123.0,
              123.0,
              123.0,
              123.0,
              123.0
            ],
            "domestic": [
              350.0,
              342.0,
              330.0,
              357.0,
              388.0,
              372.0,
              390.0,
              365.0,
              371.0,
              394.0,
              394.0,
              394.0,
              394.0,
              394.0
            ],
            "food": [
              350.0,
              341.0,
              329.0,
              357.0,
              387.0,
              372.0,
              389.0,
              365.0,
              371.0,
              394.0,
              394.0,
              394.0,
              394.0,
              394.0
            ],
            "perCapita": [
              4.330026183049754,
              4.217276457634205,
              4.065925233047959,
              4.405145881650092,
              4.755697251575647,
              4.5322989165173935,
              4.700332875399274,
              4.392086600684771,
              4.450121407948363,
              4.715220319507158,
              4.711300587769426,
              4.707452159621339,
              4.685666019616624,
              4.66006196321172
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2762",
          "code": 2762,
          "name": "底栖海鱼（统计组）",
          "originalName": "Demersal Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              75.0,
              63.0,
              60.0,
              67.0,
              76.0,
              82.0,
              65.0,
              88.0,
              101.0,
              87.0,
              87.0,
              87.0,
              87.0,
              87.0
            ],
            "imports": [
              750.0,
              800.0,
              778.0,
              739.0,
              771.0,
              757.0,
              765.0,
              761.0,
              790.0,
              787.0,
              787.0,
              787.0,
              787.0,
              787.0
            ],
            "exports": [
              398.0,
              430.0,
              458.0,
              491.0,
              503.0,
              500.0,
              487.0,
              535.0,
              562.0,
              537.0,
              537.0,
              537.0,
              537.0,
              537.0
            ],
            "domestic": [
              433.0,
              413.0,
              387.0,
              337.0,
              340.0,
              337.0,
              338.0,
              327.0,
              329.0,
              337.0,
              337.0,
              337.0,
              337.0,
              337.0
            ],
            "food": [
              433.0,
              413.0,
              387.0,
              337.0,
              340.0,
              337.0,
              338.0,
              327.0,
              329.0,
              337.0,
              337.0,
              337.0,
              337.0,
              337.0
            ],
            "perCapita": [
              5.3568609636015525,
              5.10772779179744,
              4.782714483858845,
              4.1583589975240365,
              4.178131952288682,
              4.105872943189143,
              4.084093860886774,
              3.9348282696545755,
              3.9463340787466614,
              4.033069156532773,
              4.029716492584509,
              4.026424816731958,
              4.00779047870762,
              3.985890562442512
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2763",
          "code": 2763,
          "name": "中上层海鱼（统计组）",
          "originalName": "Pelagic Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              132.0,
              135.0,
              120.0,
              133.0,
              132.0,
              140.0,
              153.0,
              131.0,
              140.0,
              109.0,
              109.0,
              109.0,
              109.0,
              109.0
            ],
            "imports": [
              1529.0,
              1250.0,
              1576.0,
              1244.0,
              1482.0,
              1115.0,
              1126.0,
              796.0,
              921.0,
              824.0,
              824.0,
              824.0,
              824.0,
              824.0
            ],
            "exports": [
              1389.0,
              1292.0,
              1492.0,
              1179.0,
              1381.0,
              1082.0,
              1145.0,
              708.0,
              741.0,
              723.0,
              723.0,
              723.0,
              723.0,
              723.0
            ],
            "domestic": [
              229.0,
              255.0,
              260.0,
              214.0,
              183.0,
              200.0,
              234.0,
              219.0,
              279.0,
              251.0,
              251.0,
              251.0,
              251.0,
              251.0
            ],
            "food": [
              212.0,
              236.0,
              250.0,
              210.0,
              179.0,
              194.0,
              229.0,
              206.0,
              227.0,
              207.0,
              207.0,
              207.0,
              207.0,
              207.0
            ],
            "perCapita": [
              2.6227587165901367,
              2.9187015953128226,
              3.0896088397020964,
              2.5912622833235837,
              2.1996635866461003,
              2.3636182521622966,
              2.767034006340447,
              2.478821478742638,
              2.722850564971101,
              2.4772858023806643,
              2.475226450934698,
              2.473204561019333,
              2.4617585433011198,
              2.4483066659513355
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2764",
          "code": 2764,
          "name": "其他海鱼（统计组）",
          "originalName": "Marine Fish, Other",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              62.0,
              70.0,
              50.0,
              40.0,
              44.0,
              46.0,
              45.0,
              42.0,
              40.0,
              41.0,
              41.0,
              41.0,
              41.0,
              41.0
            ],
            "exports": [
              26.0,
              22.0,
              9.0,
              11.0,
              12.0,
              13.0,
              13.0,
              12.0,
              11.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0
            ],
            "domestic": [
              37.0,
              48.0,
              41.0,
              30.0,
              32.0,
              33.0,
              32.0,
              30.0,
              29.0,
              31.0,
              31.0,
              31.0,
              31.0,
              31.0
            ],
            "food": [
              37.0,
              48.0,
              41.0,
              30.0,
              32.0,
              33.0,
              32.0,
              30.0,
              29.0,
              31.0,
              31.0,
              31.0,
              31.0,
              31.0
            ],
            "perCapita": [
              0.4577456250652597,
              0.5936342227754893,
              0.5066958497111438,
              0.37018032618908336,
              0.39323594845069954,
              0.4020587748523494,
              0.38665977381176553,
              0.36099341923436473,
              0.3478531558773653,
              0.37099449214396424,
              0.3706860868549548,
              0.37038329174685664,
              0.36866915382770393,
              0.36665462147097294
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2765",
          "code": 2765,
          "name": "甲壳类（含虾蟹）",
          "originalName": "Crustaceans",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              19.0,
              18.0,
              17.0,
              17.0,
              17.0,
              15.0,
              9.0,
              10.0,
              19.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0
            ],
            "imports": [
              112.0,
              111.0,
              99.0,
              89.0,
              93.0,
              89.0,
              90.0,
              101.0,
              105.0,
              110.0,
              110.0,
              110.0,
              110.0,
              110.0
            ],
            "exports": [
              32.0,
              37.0,
              35.0,
              37.0,
              35.0,
              35.0,
              32.0,
              37.0,
              53.0,
              39.0,
              39.0,
              39.0,
              39.0,
              39.0
            ],
            "domestic": [
              99.0,
              93.0,
              81.0,
              69.0,
              74.0,
              69.0,
              68.0,
              74.0,
              70.0,
              81.0,
              81.0,
              81.0,
              81.0,
              81.0
            ],
            "food": [
              97.0,
              92.0,
              80.0,
              68.0,
              73.0,
              68.0,
              67.0,
              73.0,
              69.0,
              79.0,
              79.0,
              79.0,
              79.0,
              79.0
            ],
            "perCapita": [
              1.2000358278737888,
              1.1377989269863544,
              0.9886748287046708,
              0.839075406028589,
              0.8970695074031583,
              0.8284847481805988,
              0.809568901418384,
              0.8784173201369542,
              0.8276506122599382,
              0.9454375767539734,
              0.9446516406948848,
              0.9438800015484411,
              0.939511714593181,
              0.9343779063292535
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2766",
          "code": 2766,
          "name": "头足类（含鱿鱼等）",
          "originalName": "Cephalopods",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              12.0,
              14.0,
              22.0,
              23.0,
              23.0,
              23.0,
              23.0,
              25.0,
              24.0,
              25.0,
              25.0,
              25.0,
              25.0,
              25.0
            ],
            "exports": [
              1.0,
              2.0,
              5.0,
              5.0,
              4.0,
              4.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0
            ],
            "domestic": [
              11.0,
              12.0,
              17.0,
              18.0,
              19.0,
              19.0,
              20.0,
              22.0,
              20.0,
              22.0,
              22.0,
              22.0,
              22.0,
              22.0
            ],
            "food": [
              11.0,
              12.0,
              17.0,
              18.0,
              19.0,
              19.0,
              20.0,
              22.0,
              20.0,
              22.0,
              22.0,
              22.0,
              22.0,
              22.0
            ],
            "perCapita": [
              0.1360865371815637,
              0.14840855569387232,
              0.21009340109974256,
              0.22210819571345003,
              0.23348384439260284,
              0.23148838552104967,
              0.24166235863235344,
              0.26472850743853416,
              0.2398987281912864,
              0.2632864137795875,
              0.2630675455099679,
              0.26285265865905955,
              0.26163617368417696,
              0.2602065055600453
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2767",
          "code": 2767,
          "name": "其他软体动物（含贝类）",
          "originalName": "Molluscs, Other",
          "category": "aquatic",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              5.0,
              21.0,
              7.0,
              5.0,
              5.0,
              13.0,
              45.0,
              17.0,
              16.0,
              22.0,
              22.0,
              22.0,
              22.0,
              22.0
            ],
            "imports": [
              56.0,
              63.0,
              53.0,
              44.0,
              54.0,
              53.0,
              51.0,
              51.0,
              47.0,
              46.0,
              46.0,
              46.0,
              46.0,
              46.0
            ],
            "exports": [
              24.0,
              32.0,
              24.0,
              20.0,
              20.0,
              29.0,
              40.0,
              36.0,
              30.0,
              42.0,
              42.0,
              42.0,
              42.0,
              42.0
            ],
            "domestic": [
              37.0,
              52.0,
              37.0,
              29.0,
              40.0,
              37.0,
              55.0,
              32.0,
              32.0,
              26.0,
              26.0,
              26.0,
              26.0,
              26.0
            ],
            "food": [
              37.0,
              52.0,
              37.0,
              29.0,
              40.0,
              37.0,
              55.0,
              32.0,
              32.0,
              26.0,
              26.0,
              26.0,
              26.0,
              26.0
            ],
            "perCapita": [
              0.4577456250652597,
              0.6431037413401134,
              0.4572621082759103,
              0.3578409819827806,
              0.4915449355633744,
              0.45079317180414935,
              0.664571486238972,
              0.38505964718332236,
              0.3838379651060583,
              0.31115667083042164,
              0.31089800832996206,
              0.3106440511425249,
              0.30920638708130005,
              0.30751677929823534
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2557",
          "code": 2557,
          "name": "葵花籽",
          "originalName": "Sunflower seed",
          "category": "oil",
          "itemId": "sunflower",
          "scope": "德国全国",
          "values": {
            "production": [
              47.0,
              53.0,
              63.0,
              46.0,
              46.0,
              35.0,
              36.0,
              40.0,
              31.0,
              46.0,
              58.0,
              100.0,
              161.0,
              170.0
            ],
            "imports": [
              479.0,
              361.0,
              531.0,
              502.0,
              470.0,
              423.0,
              357.0,
              388.0,
              447.0,
              448.0,
              389.0,
              310.0,
              346.0,
              290.0
            ],
            "exports": [
              85.0,
              61.0,
              34.0,
              35.0,
              33.0,
              34.0,
              41.0,
              46.0,
              24.0,
              21.0,
              26.0,
              24.0,
              23.0,
              60.0
            ],
            "domestic": [
              392.0,
              372.0,
              475.0,
              419.0,
              482.0,
              383.0,
              351.0,
              382.0,
              454.0,
              462.0,
              413.0,
              379.0,
              522.0,
              409.0
            ],
            "food": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "perCapita": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2573",
          "code": 2573,
          "name": "葵花籽油",
          "originalName": "Sunflowerseed Oil",
          "category": "oil",
          "itemId": "sunflower",
          "scope": "德国全国",
          "values": {
            "production": [
              128.0,
              119.0,
              163.0,
              138.0,
              120.0,
              125.0,
              70.0,
              95.0,
              95.0,
              99.0,
              75.0,
              55.0,
              90.0,
              83.0
            ],
            "imports": [
              268.0,
              315.0,
              249.0,
              256.0,
              339.0,
              307.0,
              367.0,
              391.0,
              420.0,
              513.0,
              495.0,
              473.0,
              461.0,
              345.0
            ],
            "exports": [
              83.0,
              121.0,
              150.0,
              124.0,
              147.0,
              144.0,
              147.0,
              159.0,
              159.0,
              220.0,
              196.0,
              193.0,
              142.0,
              134.0
            ],
            "domestic": [
              255.0,
              255.0,
              270.0,
              265.0,
              267.0,
              287.0,
              285.0,
              316.0,
              346.0,
              393.0,
              383.0,
              336.0,
              405.0,
              284.0
            ],
            "food": [
              240.0,
              240.0,
              255.0,
              250.0,
              252.0,
              272.0,
              272.0,
              303.0,
              335.0,
              382.0,
              373.0,
              327.0,
              395.0,
              275.0
            ],
            "perCapita": [
              2.969160811234117,
              2.9681711138774465,
              3.1514010164961386,
              3.084836051575695,
              3.0967330940492586,
              3.3139389927223952,
              3.286608077400007,
              3.6460335342670835,
              4.018303697204048,
              4.571609548354656,
              4.460190657964456,
              3.906946335523294,
              4.697558572965905,
              3.252581319500566
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2558",
          "code": 2558,
          "name": "油菜籽与芥籽",
          "originalName": "Rape and Mustardseed",
          "category": "oil",
          "itemId": "rapeseed",
          "scope": "德国全国",
          "values": {
            "production": [
              5707.0,
              3881.0,
              4832.0,
              5796.0,
              6256.0,
              5025.0,
              4588.0,
              4277.0,
              3679.0,
              2830.0,
              3527.0,
              3505.0,
              4295.0,
              4218.0
            ],
            "imports": [
              2383.0,
              3206.0,
              4216.0,
              4651.0,
              4530.0,
              4837.0,
              5548.0,
              6117.0,
              5807.0,
              5738.0,
              5926.0,
              5374.0,
              5473.0,
              6655.0
            ],
            "exports": [
              314.0,
              266.0,
              191.0,
              163.0,
              229.0,
              178.0,
              171.0,
              199.0,
              183.0,
              142.0,
              114.0,
              165.0,
              133.0,
              133.0
            ],
            "domestic": [
              8746.0,
              7799.0,
              7673.0,
              8440.0,
              9398.0,
              10964.0,
              8526.0,
              9025.0,
              8494.0,
              9402.0,
              9273.0,
              9825.0,
              9166.0,
              10262.0
            ],
            "food": [
              44.0,
              31.0,
              27.0,
              23.0,
              27.0,
              28.0,
              28.0,
              27.0,
              26.0,
              6.0,
              3.0,
              5.0,
              10.0,
              1.0
            ],
            "perCapita": [
              0.5443461487262548,
              0.38338876887583684,
              0.3336777546878264,
              0.28380491674496394,
              0.3317928315052777,
              0.3411407786625995,
              0.3383273020852948,
              0.32489407731092823,
              0.31186834664867236,
              0.07180538557625114,
              0.035872847114995624,
              0.059739240604331716,
              0.11892553349280771,
              0.011827568434547514
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2574",
          "code": 2574,
          "name": "菜籽油与芥籽油",
          "originalName": "Rape and Mustard Oil",
          "category": "oil",
          "itemId": "rapeseed",
          "scope": "德国全国",
          "values": {
            "production": [
              2889.0,
              2688.0,
              3216.0,
              3139.0,
              3541.0,
              4147.0,
              3215.0,
              3349.0,
              3146.0,
              3852.0,
              3781.0,
              4013.0,
              3722.0,
              4182.0
            ],
            "imports": [
              376.0,
              525.0,
              215.0,
              186.0,
              271.0,
              303.0,
              279.0,
              231.0,
              201.0,
              259.0,
              265.0,
              278.0,
              376.0,
              446.0
            ],
            "exports": [
              518.0,
              476.0,
              803.0,
              1158.0,
              869.0,
              996.0,
              1141.0,
              1128.0,
              899.0,
              875.0,
              1089.0,
              1239.0,
              1068.0,
              1335.0
            ],
            "domestic": [
              2747.0,
              2737.0,
              2627.0,
              2167.0,
              2874.0,
              3297.0,
              2392.0,
              2476.0,
              2473.0,
              3213.0,
              2988.0,
              3047.0,
              3026.0,
              3299.0
            ],
            "food": [
              395.0,
              385.0,
              410.0,
              415.0,
              417.0,
              419.0,
              422.0,
              425.0,
              428.0,
              449.0,
              432.0,
              436.0,
              443.0,
              473.0
            ],
            "perCapita": [
              4.8867438351561505,
              4.76144116184507,
              5.066958497111438,
              5.120827845615653,
              5.124355953248178,
              5.104928080701042,
              5.099075767142658,
              5.1140734391535005,
              5.1338327832935295,
              5.373436353956127,
              5.16568998455937,
              5.209261780697726,
              5.268401133731381,
              5.594439869540974
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2571",
          "code": 2571,
          "name": "大豆油",
          "originalName": "Soyabean Oil",
          "category": "oil",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              579.0,
              562.0,
              603.0,
              630.0,
              642.0,
              684.0,
              670.0,
              616.0,
              645.0,
              624.0,
              666.0,
              646.0,
              618.0,
              607.0
            ],
            "imports": [
              69.0,
              68.0,
              70.0,
              105.0,
              102.0,
              96.0,
              97.0,
              84.0,
              62.0,
              94.0,
              107.0,
              109.0,
              136.0,
              136.0
            ],
            "exports": [
              271.0,
              339.0,
              428.0,
              322.0,
              382.0,
              478.0,
              343.0,
              260.0,
              253.0,
              169.0,
              197.0,
              191.0,
              143.0,
              83.0
            ],
            "domestic": [
              458.0,
              491.0,
              445.0,
              453.0,
              369.0,
              303.0,
              424.0,
              441.0,
              453.0,
              559.0,
              571.0,
              567.0,
              604.0,
              659.0
            ],
            "food": [
              430.0,
              430.0,
              430.0,
              430.0,
              350.0,
              289.0,
              397.0,
              412.0,
              423.0,
              445.0,
              507.0,
              502.0,
              528.0,
              578.0
            ],
            "perCapita": [
              5.319746453461126,
              5.317973245697091,
              5.3141272042876055,
              5.305918008710195,
              4.301018186179526,
              3.5210601797675447,
              4.7969978188522155,
              4.957642957485276,
              5.073858101245707,
              5.325566096905293,
              6.0625111624342605,
              5.997819756674905,
              6.279268168420248,
              6.836334555168463
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2580",
          "code": 2580,
          "name": "橄榄油",
          "originalName": "Olive Oil",
          "category": "oil",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              60.0,
              67.0,
              68.0,
              67.0,
              72.0,
              71.0,
              73.0,
              68.0,
              70.0,
              73.0,
              86.0,
              87.0,
              83.0,
              68.0
            ],
            "exports": [
              6.0,
              6.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              6.0,
              7.0,
              7.0,
              7.0,
              7.0,
              6.0,
              6.0
            ],
            "domestic": [
              54.0,
              61.0,
              62.0,
              63.0,
              63.0,
              64.0,
              64.0,
              65.0,
              65.0,
              66.0,
              78.0,
              80.0,
              77.0,
              62.0
            ],
            "food": [
              53.0,
              59.0,
              60.0,
              62.0,
              61.0,
              61.0,
              62.0,
              62.0,
              62.0,
              63.0,
              75.0,
              77.0,
              75.0,
              60.0
            ],
            "perCapita": [
              0.6556896791475342,
              0.7296753988282056,
              0.7415061215285031,
              0.7650393407907723,
              0.749606026734146,
              0.7431995535149489,
              0.7491533117602956,
              0.7460530664176871,
              0.7436860573929879,
              0.753956548550637,
              0.8968211778748906,
              0.9199843053067084,
              0.8919415011960579,
              0.7096541060728508
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2640",
          "code": 2640,
          "name": "胡椒（FAO Pepper）",
          "originalName": "Pepper",
          "category": "spice",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              29.0,
              25.0,
              28.0,
              31.0,
              26.0,
              29.0,
              29.0,
              33.0,
              31.0,
              34.0,
              33.0,
              33.0,
              27.0,
              21.0
            ],
            "exports": [
              11.0,
              11.0,
              11.0,
              13.0,
              12.0,
              14.0,
              15.0,
              15.0,
              15.0,
              14.0,
              14.0,
              16.0,
              13.0,
              13.0
            ],
            "domestic": [
              18.0,
              14.0,
              17.0,
              17.0,
              16.0,
              17.0,
              15.0,
              17.0,
              16.0,
              20.0,
              19.0,
              17.0,
              14.0,
              8.0
            ],
            "food": [
              18.0,
              14.0,
              17.0,
              17.0,
              16.0,
              17.0,
              15.0,
              17.0,
              16.0,
              20.0,
              19.0,
              17.0,
              14.0,
              8.0
            ],
            "perCapita": [
              0.22268706084255876,
              0.17314331497618438,
              0.21009340109974256,
              0.20976885150714725,
              0.19661797422534977,
              0.2071211870451497,
              0.1812467689742651,
              0.20456293756614002,
              0.19191898255302914,
              0.2393512852541705,
              0.22719469839497228,
              0.20311341805472782,
              0.1664957468899308,
              0.09462054747638012
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2641",
          "code": 2641,
          "name": "Pimento（FAO香料条目）",
          "originalName": "Pimento",
          "category": "spice",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              20.0,
              20.0,
              19.0,
              20.0,
              21.0,
              20.0,
              23.0,
              24.0,
              24.0,
              23.0,
              26.0,
              26.0,
              25.0,
              24.0
            ],
            "exports": [
              5.0,
              5.0,
              4.0,
              5.0,
              5.0,
              6.0,
              6.0,
              8.0,
              7.0,
              7.0,
              8.0,
              8.0,
              7.0,
              8.0
            ],
            "domestic": [
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              16.0,
              15.0,
              18.0,
              17.0,
              17.0,
              15.0
            ],
            "food": [
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              15.0,
              16.0,
              15.0,
              18.0,
              17.0,
              17.0,
              15.0
            ],
            "perCapita": [
              0.1855725507021323,
              0.1855106946173404,
              0.1853765303821258,
              0.18509016309454168,
              0.1843293508362654,
              0.18275398856924974,
              0.1812467689742651,
              0.18049670961718237,
              0.19191898255302914,
              0.17951346394062787,
              0.21523708268997374,
              0.20311341805472782,
              0.2021734069377731,
              0.1774135265182127
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2642",
          "code": 2642,
          "name": "丁香",
          "originalName": "Cloves",
          "category": "spice",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              1.0,
              1.0,
              1.0,
              null
            ],
            "domestic": [
              null,
              null,
              1.0,
              null,
              null,
              null,
              null,
              null,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              null
            ],
            "food": [
              null,
              null,
              1.0,
              null,
              null,
              null,
              null,
              null,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              null
            ],
            "perCapita": [
              null,
              null,
              0.012358435358808385,
              null,
              null,
              null,
              null,
              null,
              0.011994936409564321,
              0.011967564262708523,
              0.011957615704998542,
              0.011947848120866343,
              0.011892553349280771,
              null
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2023
            ],
            "domestic": [
              2010,
              2011,
              2013,
              2014,
              2015,
              2016,
              2017,
              2023
            ],
            "food": [
              2010,
              2011,
              2013,
              2014,
              2015,
              2016,
              2017,
              2023
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2645",
          "code": 2645,
          "name": "其他香料（统计组）",
          "originalName": "Spices, Other",
          "category": "spice",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              45.0,
              50.0,
              49.0,
              51.0,
              57.0,
              56.0,
              65.0,
              73.0,
              77.0,
              78.0,
              86.0,
              95.0,
              93.0,
              81.0
            ],
            "exports": [
              15.0,
              17.0,
              17.0,
              18.0,
              18.0,
              20.0,
              21.0,
              24.0,
              24.0,
              25.0,
              28.0,
              32.0,
              31.0,
              33.0
            ],
            "domestic": [
              31.0,
              33.0,
              32.0,
              34.0,
              33.0,
              33.0,
              34.0,
              34.0,
              35.0,
              37.0,
              40.0,
              46.0,
              57.0,
              48.0
            ],
            "food": [
              31.0,
              33.0,
              32.0,
              34.0,
              33.0,
              33.0,
              34.0,
              34.0,
              35.0,
              37.0,
              40.0,
              46.0,
              57.0,
              48.0
            ],
            "perCapita": [
              0.38351660478440674,
              0.4081235281581489,
              0.3954699314818683,
              0.4195377030142945,
              0.40552457183978385,
              0.4020587748523494,
              0.4108260096750009,
              0.40912587513228005,
              0.41982277433475124,
              0.4427998777202154,
              0.4783046281999417,
              0.5496010135598518,
              0.677875540909004,
              0.5677232848582806
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2848",
          "code": 2848,
          "name": "奶类与乳品（不含黄油，乳品折算）",
          "originalName": "Milk - Excluding Butter",
          "category": "dairy",
          "itemId": "milk",
          "scope": "德国全国",
          "values": {
            "production": [
              29640.0,
              30349.0,
              30698.0,
              31345.0,
              32419.0,
              32708.0,
              32700.0,
              32626.0,
              33110.0,
              33103.0,
              33189.0,
              32531.0,
              32423.0,
              34036.0
            ],
            "imports": [
              16467.0,
              18511.0,
              20309.0,
              20337.0,
              20767.0,
              20379.0,
              20834.0,
              21721.0,
              20175.0,
              19802.0,
              19046.0,
              19489.0,
              19200.0,
              18671.0
            ],
            "exports": [
              16042.0,
              16381.0,
              17892.0,
              17973.0,
              18012.0,
              17316.0,
              17666.0,
              17340.0,
              16608.0,
              15048.0,
              14971.0,
              15230.0,
              14437.0,
              14863.0
            ],
            "domestic": [
              30066.0,
              32479.0,
              33115.0,
              33709.0,
              35033.0,
              35506.0,
              35447.0,
              36766.0,
              36482.0,
              37627.0,
              37179.0,
              36794.0,
              37182.0,
              37835.0
            ],
            "food": [
              12298.0,
              12537.0,
              11917.0,
              12109.0,
              13221.0,
              13454.0,
              14146.0,
              14996.0,
              14902.0,
              17615.0,
              17967.0,
              17486.0,
              18249.0,
              19157.0
            ],
            "perCapita": [
              152.1447485689882,
              155.04983856117312,
              147.27547417091952,
              149.41711899412036,
              162.46788982708432,
              163.91814414737905,
              170.9277862606636,
              180.44857716128445,
              178.7485423753275,
              210.80864448761065,
              214.8424813717088,
              208.9200722414689,
              217.0272060710248,
              226.58072850062672
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2740",
          "code": 2740,
          "name": "黄油与酥油",
          "originalName": "Butter, Ghee",
          "category": "dairy",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              404.0,
              425.0,
              448.0,
              424.0,
              441.0,
              462.0,
              457.0,
              436.0,
              484.0,
              491.0,
              497.0,
              462.0,
              459.0,
              469.0
            ],
            "imports": [
              144.0,
              135.0,
              136.0,
              142.0,
              132.0,
              150.0,
              147.0,
              166.0,
              166.0,
              166.0,
              192.0,
              204.0,
              144.0,
              153.0
            ],
            "exports": [
              112.0,
              108.0,
              119.0,
              142.0,
              150.0,
              156.0,
              151.0,
              149.0,
              143.0,
              159.0,
              156.0,
              156.0,
              145.0,
              153.0
            ],
            "domestic": [
              436.0,
              452.0,
              464.0,
              425.0,
              424.0,
              457.0,
              453.0,
              453.0,
              507.0,
              498.0,
              534.0,
              510.0,
              458.0,
              468.0
            ],
            "food": [
              436.0,
              452.0,
              464.0,
              427.0,
              425.0,
              457.0,
              454.0,
              453.0,
              509.0,
              499.0,
              534.0,
              514.0,
              464.0,
              469.0
            ],
            "perCapita": [
              5.393975473741979,
              5.590055597802524,
              5.734314006487091,
              5.268899976091286,
              5.222664940360853,
              5.567904851743141,
              5.4857355409544235,
              5.451000630438907,
              6.1054226324682395,
              5.9718145670915534,
              6.385366786469222,
              6.1411939341253,
              5.518144754066278,
              5.547129595802784
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2743",
          "code": 2743,
          "name": "奶油",
          "originalName": "Cream",
          "category": "dairy",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              556.0,
              547.0,
              542.0,
              550.0,
              567.0,
              566.0,
              588.0,
              578.0,
              621.0,
              554.0,
              530.0,
              544.0,
              525.0,
              521.0
            ],
            "imports": [
              172.0,
              178.0,
              191.0,
              176.0,
              192.0,
              199.0,
              183.0,
              189.0,
              171.0,
              176.0,
              194.0,
              200.0,
              193.0,
              160.0
            ],
            "exports": [
              180.0,
              172.0,
              173.0,
              181.0,
              181.0,
              159.0,
              176.0,
              197.0,
              210.0,
              211.0,
              221.0,
              238.0,
              228.0,
              243.0
            ],
            "domestic": [
              548.0,
              553.0,
              560.0,
              545.0,
              578.0,
              607.0,
              595.0,
              570.0,
              582.0,
              520.0,
              503.0,
              506.0,
              490.0,
              438.0
            ],
            "food": [
              526.0,
              531.0,
              538.0,
              523.0,
              555.0,
              584.0,
              572.0,
              547.0,
              558.0,
              520.0,
              503.0,
              506.0,
              490.0,
              438.0
            ],
            "perCapita": [
              6.507410777954773,
              6.567078589453851,
              6.648838223038911,
              6.453477019896353,
              6.82018598094182,
              7.11522195496279,
              6.911543456885308,
              6.582113344039917,
              6.693174516536891,
              6.223133416608433,
              6.014680699614266,
              6.045611149158369,
              5.827351141147578,
              5.180474974331811
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2744",
          "code": 2744,
          "name": "蛋类",
          "originalName": "Eggs",
          "category": "eggs",
          "itemId": "egg",
          "scope": "德国全国",
          "values": {
            "production": [
              662.0,
              782.0,
              759.0,
              781.0,
              787.0,
              801.0,
              818.0,
              826.0,
              846.0,
              938.0,
              967.0,
              981.0,
              977.0,
              967.0
            ],
            "imports": [
              758.0,
              698.0,
              671.0,
              646.0,
              662.0,
              674.0,
              720.0,
              711.0,
              721.0,
              716.0,
              692.0,
              644.0,
              633.0,
              658.0
            ],
            "exports": [
              207.0,
              245.0,
              240.0,
              226.0,
              246.0,
              249.0,
              263.0,
              256.0,
              244.0,
              245.0,
              210.0,
              227.0,
              247.0,
              219.0
            ],
            "domestic": [
              1213.0,
              1235.0,
              1190.0,
              1201.0,
              1209.0,
              1227.0,
              1276.0,
              1281.0,
              1323.0,
              1409.0,
              1449.0,
              1399.0,
              1363.0,
              1407.0
            ],
            "food": [
              1147.0,
              1162.0,
              1112.0,
              1119.0,
              1126.0,
              1143.0,
              1194.0,
              1191.0,
              1236.0,
              1451.0,
              1378.0,
              1331.0,
              1305.0,
              1345.0
            ],
            "perCapita": [
              14.19011437702305,
              14.370895143023304,
              13.742580118994924,
              13.80772616685281,
              13.836989936108989,
              13.92585392897683,
              14.427242810351501,
              14.331438743604279,
              14.825741402221501,
              17.364935745190067,
              16.47759444148799,
              15.902585848873104,
              15.519782120811406,
              15.908079544466405
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2551",
          "code": 2551,
          "name": "坚果及制品（统计组）",
          "originalName": "Nuts and products",
          "category": "nuts",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              12.0,
              15.0,
              16.0,
              17.0,
              18.0,
              18.0,
              18.0,
              18.0,
              18.0,
              18.0,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1985.0,
              2018.0,
              1953.0,
              2142.0,
              2343.0,
              2543.0,
              2583.0,
              2821.0,
              2809.0,
              3074.0,
              3293.0,
              3301.0,
              3205.0,
              3178.0
            ],
            "exports": [
              390.0,
              387.0,
              416.0,
              468.0,
              598.0,
              681.0,
              734.0,
              818.0,
              821.0,
              939.0,
              1010.0,
              996.0,
              925.0,
              1079.0
            ],
            "domestic": [
              1606.0,
              1646.0,
              1553.0,
              1691.0,
              1777.0,
              1878.0,
              1904.0,
              2004.0,
              1994.0,
              2142.0,
              2269.0,
              2288.0,
              2279.0,
              2096.0
            ],
            "food": [
              1570.0,
              1609.0,
              1518.0,
              1651.0,
              1775.0,
              1876.0,
              1902.0,
              2002.0,
              1991.0,
              2140.0,
              2267.0,
              2286.0,
              2277.0,
              2095.0
            ],
            "perCapita": [
              19.42326030682318,
              19.899113842620046,
              18.76010487467113,
              20.372257284605887,
              21.812306515624737,
              22.856432170394164,
              22.98209030593681,
              24.090294176906607,
              23.881918391442564,
              25.61058752219624,
              27.107914803231694,
              27.31278080430046,
              27.079343976312316,
              24.77875587037704
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2537",
          "code": 2537,
          "name": "制糖甜菜",
          "originalName": "Sugar beet",
          "category": "sweetener",
          "itemId": "sugar-beet",
          "scope": "德国全国",
          "values": {
            "production": [
              23432.0,
              29578.0,
              27687.0,
              22829.0,
              29748.0,
              22572.0,
              27066.0,
              34060.0,
              26191.0,
              29728.0,
              28618.0,
              31945.0,
              28201.0,
              31558.0
            ],
            "imports": [
              255.0,
              266.0,
              280.0,
              274.0,
              286.0,
              171.0,
              2.0,
              17.0,
              23.0,
              37.0,
              47.0,
              50.0,
              65.0,
              97.0
            ],
            "exports": [
              1.0,
              25.0,
              46.0,
              25.0,
              38.0,
              32.0,
              74.0,
              150.0,
              193.0,
              286.0,
              350.0,
              469.0,
              418.0,
              345.0
            ],
            "domestic": [
              23685.0,
              29818.0,
              27921.0,
              23077.0,
              28447.0,
              21689.0,
              25368.0,
              33336.0,
              26086.0,
              28744.0,
              27943.0,
              31159.0,
              27849.0,
              31311.0
            ],
            "food": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "perCapita": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2542",
          "code": 2542,
          "name": "糖（原糖当量）",
          "originalName": "Sugar (Raw Equivalent)",
          "category": "sweetener",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              7281.0,
              9545.0,
              9049.0,
              7227.0,
              4564.0,
              3206.0,
              3745.0,
              5356.0,
              4195.0,
              4615.0,
              4489.0,
              5005.0,
              4264.0,
              4555.0
            ],
            "imports": [
              719.0,
              826.0,
              897.0,
              832.0,
              911.0,
              980.0,
              912.0,
              884.0,
              807.0,
              832.0,
              897.0,
              751.0,
              689.0,
              793.0
            ],
            "exports": [
              1439.0,
              1343.0,
              1357.0,
              1216.0,
              1482.0,
              1281.0,
              1516.0,
              1780.0,
              2284.0,
              1956.0,
              1705.0,
              2234.0,
              2069.0,
              1571.0
            ],
            "domestic": [
              7235.0,
              8184.0,
              7926.0,
              7089.0,
              3550.0,
              3507.0,
              3516.0,
              3509.0,
              3563.0,
              3491.0,
              3465.0,
              3720.0,
              3674.0,
              3361.0
            ],
            "food": [
              3190.0,
              3068.0,
              2891.0,
              2938.0,
              2961.0,
              2998.0,
              3007.0,
              3019.0,
              3050.0,
              2981.0,
              2940.0,
              3136.0,
              3063.0,
              2757.0
            ],
            "perCapita": [
              39.46509578265347,
              37.94312073906669,
              35.728236622315045,
              36.252993278117565,
              36.38661385507879,
              36.526430515374045,
              36.33393562037434,
              36.32797108895157,
              36.58455604917118,
              35.67530906713411,
              35.15539017269571,
              37.468451707036856,
              36.42689090884701,
              32.608606174047495
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2745",
          "code": 2745,
          "name": "蜂蜜",
          "originalName": "Honey",
          "category": "sweetener",
          "itemId": "honey",
          "scope": "德国全国",
          "values": {
            "production": [
              23.0,
              26.0,
              16.0,
              19.0,
              20.0,
              23.0,
              22.0,
              20.0,
              20.0,
              24.0,
              29.0,
              20.0,
              35.0,
              35.0
            ],
            "imports": [
              90.0,
              77.0,
              84.0,
              88.0,
              84.0,
              90.0,
              84.0,
              93.0,
              86.0,
              82.0,
              88.0,
              79.0,
              75.0,
              65.0
            ],
            "exports": [
              21.0,
              19.0,
              21.0,
              21.0,
              23.0,
              24.0,
              24.0,
              24.0,
              23.0,
              25.0,
              29.0,
              30.0,
              27.0,
              19.0
            ],
            "domestic": [
              92.0,
              84.0,
              79.0,
              86.0,
              85.0,
              85.0,
              86.0,
              86.0,
              86.0,
              82.0,
              89.0,
              69.0,
              90.0,
              81.0
            ],
            "food": [
              92.0,
              84.0,
              79.0,
              86.0,
              84.0,
              84.0,
              84.0,
              85.0,
              85.0,
              81.0,
              88.0,
              69.0,
              89.0,
              80.0
            ],
            "perCapita": [
              1.138178310973078,
              1.0388598898571062,
              0.9763163933458625,
              1.061183601742039,
              1.0322443646830863,
              1.0234223359877985,
              1.0149819062558845,
              1.0228146878307,
              1.0195695948129673,
              0.9693727052793905,
              1.0522701820398717,
              0.8244015203397776,
              1.0584372480859887,
              0.9462054747638011
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2655",
          "code": 2655,
          "name": "葡萄酒",
          "originalName": "Wine",
          "category": "drink",
          "itemId": "wine",
          "scope": "德国全国",
          "values": {
            "production": [
              691.0,
              913.0,
              901.0,
              841.0,
              920.0,
              572.0,
              579.0,
              627.0,
              633.0,
              438.0,
              473.0,
              453.0,
              482.0,
              472.0
            ],
            "imports": [
              1456.0,
              1638.0,
              1557.0,
              1533.0,
              1553.0,
              1546.0,
              1494.0,
              1543.0,
              1490.0,
              1495.0,
              1450.0,
              1490.0,
              1378.0,
              1389.0
            ],
            "exports": [
              420.0,
              449.0,
              428.0,
              433.0,
              418.0,
              389.0,
              386.0,
              413.0,
              404.0,
              413.0,
              390.0,
              401.0,
              381.0,
              357.0
            ],
            "domestic": [
              1731.0,
              2101.0,
              2035.0,
              1946.0,
              2057.0,
              2076.0,
              1725.0,
              1756.0,
              1719.0,
              1520.0,
              1533.0,
              1542.0,
              1480.0,
              1504.0
            ],
            "food": [
              1677.0,
              2046.0,
              1985.0,
              1896.0,
              2009.0,
              2036.0,
              1682.0,
              1719.0,
              1682.0,
              1490.0,
              1507.0,
              1502.0,
              1441.0,
              1464.0
            ],
            "perCapita": [
              20.747011168498393,
              25.303658745805233,
              24.531494187234646,
              23.39539661515007,
              24.68784438867048,
              24.80580804846616,
              20.323804360980926,
              20.6849229221291,
              20.175483040887187,
              17.831670751435702,
              18.0201268674328,
              17.945667877541247,
              17.137169376313594,
              17.31556018817756
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2656",
          "code": 2656,
          "name": "啤酒",
          "originalName": "Beer",
          "category": "drink",
          "itemId": "beer",
          "scope": "德国全国",
          "values": {
            "production": [
              8899.0,
              8945.0,
              8850.0,
              8650.0,
              8723.0,
              8721.0,
              8678.0,
              8481.0,
              8657.0,
              8041.0,
              8703.0,
              8544.0,
              8781.0,
              8489.0
            ],
            "imports": [
              692.0,
              764.0,
              728.0,
              632.0,
              670.0,
              658.0,
              729.0,
              678.0,
              720.0,
              731.0,
              683.0,
              651.0,
              653.0,
              558.0
            ],
            "exports": [
              1514.0,
              1596.0,
              1573.0,
              1509.0,
              1548.0,
              1590.0,
              1653.0,
              1578.0,
              1585.0,
              1593.0,
              1513.0,
              1580.0,
              1498.0,
              1440.0
            ],
            "domestic": [
              8076.0,
              8113.0,
              8005.0,
              7773.0,
              8025.0,
              8069.0,
              8120.0,
              8178.0,
              7923.0,
              7178.0,
              7873.0,
              7615.0,
              7936.0,
              7606.0
            ],
            "food": [
              8076.0,
              8113.0,
              8005.0,
              7773.0,
              8025.0,
              8069.0,
              8120.0,
              8178.0,
              7923.0,
              7178.0,
              7873.0,
              7615.0,
              7936.0,
              7606.0
            ],
            "perCapita": [
              99.91226129802803,
              100.33655102869885,
              98.92927504726113,
              95.9137225155915,
              98.61620269740199,
              98.3094622510184,
              98.1149176047355,
              98.40680608328782,
              95.03588117297811,
              85.90317627772178,
              94.14230844545352,
              90.98286344039721,
              94.3793033798922,
              89.9604855131684
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2658",
          "code": 2658,
          "name": "其他酒精饮料（统计组）",
          "originalName": "Beverages, Alcoholic",
          "category": "drink",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              602.0,
              549.0,
              640.0,
              813.0,
              543.0,
              511.0,
              582.0,
              561.0,
              633.0,
              882.0,
              576.0,
              433.0,
              651.0,
              357.0
            ],
            "imports": [
              266.0,
              292.0,
              298.0,
              310.0,
              293.0,
              294.0,
              314.0,
              318.0,
              320.0,
              329.0,
              316.0,
              360.0,
              394.0,
              372.0
            ],
            "exports": [
              224.0,
              232.0,
              246.0,
              246.0,
              233.0,
              222.0,
              241.0,
              249.0,
              246.0,
              228.0,
              201.0,
              252.0,
              296.0,
              282.0
            ],
            "domestic": [
              644.0,
              609.0,
              693.0,
              878.0,
              741.0,
              620.0,
              655.0,
              630.0,
              708.0,
              683.0,
              597.0,
              541.0,
              575.0,
              547.0
            ],
            "food": [
              644.0,
              609.0,
              693.0,
              878.0,
              741.0,
              620.0,
              655.0,
              630.0,
              708.0,
              683.0,
              597.0,
              541.0,
              575.0,
              547.0
            ],
            "perCapita": [
              7.967248176811547,
              7.531734201464021,
              8.564395703654212,
              10.83394421313384,
              9.10586993131151,
              7.553831527528989,
              7.9144422452095755,
              7.5808618039216595,
              8.492414977971539,
              8.173846391429922,
              7.138696575884129,
              6.463785833388692,
              6.8382181758364435,
              6.46967993369749
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2630",
          "code": 2630,
          "name": "咖啡及制品",
          "originalName": "Coffee and products",
          "category": "drink",
          "itemId": "coffee",
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1318.0,
              1339.0,
              1400.0,
              1348.0,
              1396.0,
              1360.0,
              1430.0,
              1392.0,
              1421.0,
              1438.0,
              1434.0,
              1420.0,
              1476.0,
              1305.0
            ],
            "exports": [
              789.0,
              805.0,
              849.0,
              850.0,
              860.0,
              829.0,
              886.0,
              908.0,
              920.0,
              913.0,
              900.0,
              912.0,
              889.0,
              856.0
            ],
            "domestic": [
              483.0,
              489.0,
              581.0,
              559.0,
              540.0,
              562.0,
              571.0,
              514.0,
              502.0,
              525.0,
              535.0,
              508.0,
              587.0,
              449.0
            ],
            "food": [
              483.0,
              489.0,
              581.0,
              559.0,
              540.0,
              562.0,
              571.0,
              514.0,
              502.0,
              525.0,
              535.0,
              508.0,
              587.0,
              449.0
            ],
            "perCapita": [
              5.97543613260866,
              6.047648644525298,
              7.180250943467672,
              6.897693411323253,
              6.635856630105554,
              6.84718277172789,
              6.899460338953691,
              6.185020582882116,
              6.021458077601289,
              6.282971237921975,
              6.3973244021742195,
              6.069506845400102,
              6.980928816027813,
              5.310578227111834
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2635",
          "code": 2635,
          "name": "茶（含马黛茶）",
          "originalName": "Tea (including mate)",
          "category": "drink",
          "itemId": null,
          "scope": "德国全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              4.0,
              null,
              null,
              null,
              null
            ],
            "imports": [
              69.0,
              84.0,
              85.0,
              98.0,
              84.0,
              67.0,
              68.0,
              63.0,
              63.0,
              61.0,
              54.0,
              60.0,
              64.0,
              60.0
            ],
            "exports": [
              36.0,
              39.0,
              38.0,
              40.0,
              40.0,
              39.0,
              39.0,
              39.0,
              38.0,
              37.0,
              35.0,
              37.0,
              39.0,
              34.0
            ],
            "domestic": [
              33.0,
              45.0,
              47.0,
              59.0,
              47.0,
              25.0,
              26.0,
              26.0,
              27.0,
              28.0,
              18.0,
              23.0,
              25.0,
              27.0
            ],
            "food": [
              33.0,
              45.0,
              47.0,
              59.0,
              47.0,
              30.0,
              30.0,
              31.0,
              31.0,
              28.0,
              21.0,
              26.0,
              30.0,
              27.0
            ],
            "perCapita": [
              0.4082596115446911,
              0.5565320838520212,
              0.5808464618639941,
              0.728021308171864,
              0.5775652992869649,
              0.3655079771384995,
              0.3624935379485302,
              0.37302653320884355,
              0.37184302869649394,
              0.33509179935583866,
              0.2511099298049694,
              0.3106440511425249,
              0.35677660047842313,
              0.31934434773278286
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        }
      ],
      "notes": [
        "同年供需表全部来自同一份FAO FBS公开副本，2010–2023；不把2024年农业产量与2023年贸易拼成供需平衡。",
        "总量单位为千吨，源数多已取整；人均量根据同版Food和人口估算，只显示近似值，不是FAO逐项公布的人均值或实测摄入。",
        "奶类为乳品折算，鱼类也不等同零售净鱼肉。制糖甜菜、糖、油籽与成品油必须分别看，不能按相同重量含义直接相加。",
        "国内供给还受库存变动及调整影响，不一定等于产量加进口减出口；食用可供量也只是国内供给的一种用途。",
        "副本中的国内供给负值原样保留并标记，属于需回溯核查的统计平衡，不表示消费者吃了负数量；不据此推算进口依赖率。",
        "副本转换脚本将未记录值填成0，无法区分真实零与缺值；本页将这些零值标为未确认，不擅自当作零产量或零进口。",
        "部分行是统计组或含制品，不能据此分配到某一种生鲜食材；禽肉不等于鸡肉，坚果合计不等于核桃，Pimento条目不等于匈牙利红椒粉单品。",
        "本专题仍未取得可比的国家或城市逐产品实测消费及摄入数据。食用可供量是消费参考，不能更名为实际消费量。"
      ],
      "sources": [
        {
          "id": "fao-supply-complete",
          "title": "FAOSTAT完整食物平衡表 · AgriFoodPy公开整理副本",
          "publisher": "FAO；公开整理：FixOurFood / AgriFoodPy",
          "url": "https://github.com/FixOurFood/agrifoodpy-data/tree/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food",
          "version": "3251e9fe9a8fb24a471e13c98f058f897c1f0135",
          "accessed": "2026-10-24",
          "year": "2010–2023",
          "scope": "德国全国",
          "verified": true,
          "note": "已读取固定版本食物平衡表、人口及转换方法；核对 Germany / FAO代码79、千吨单位与字段。原副本缺失填0，本站将这些0保留为未确认；未直接读取FAO实时API。人均量由Food与同版人口推算，不是实测摄入。",
          "variables": [
            {
              "id": "balance",
              "label": "完整食物平衡表（千吨）",
              "unit": "1000 t",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/data/FAOSTAT_FBS.nc",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "1666b8d6ab076ecd46d6f9072588d3026b4d3db1dcdd1751d3c03370d734e031"
            },
            {
              "id": "population",
              "label": "同版FAO人口（人）",
              "unit": "persons",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/population/data/Population_FAOSTAT_FBS.nc",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "d8fcdfc437b344d83dba6c30ff86b6abf65bfee35a0ec49b316ca20e3856536a"
            },
            {
              "id": "notebook",
              "label": "字段、单位与整理方法",
              "unit": "方法说明",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "90fb5a9cae1303a508e4b06b4cfddf6a554c987f65d5e72bce509b0bc74146c4"
            }
          ]
        }
      ]
    },
    "energy": {
      "id": "de-energy",
      "title": "德国的水与能源",
      "checkedDate": "2026-10-24",
      "snapshotYear": 2024,
      "scope": "德国全国",
      "intro": "分别看全国发电、燃料消费，以及 Eurostat 的电、气、油年度报告进出口；各图保留原有单位和核算体系。全国量不分摊为城市用量。",
      "sources": [
        {
          "id": "energy-owid",
          "title": "Our World in Data · Energy Data（已读 Germany 行）",
          "url": "https://raw.githubusercontent.com/owid/energy-data/e7897aed55b514b8d16e0a3d8f1518789ac3de31/owid-energy-data.csv",
          "accessed": "2026-10-24",
          "verified": true,
          "kind": "dataset",
          "upstream": "电力：Ember；化石燃料消费：Energy Institute Statistical Review of World Energy 2025。",
          "version": "e7897aed55b514b8d16e0a3d8f1518789ac3de31",
          "license": "OWID 汇编 CC BY；上游数据适用其原始许可。",
          "sha256": "266f2e2baad7975351bc9bb4aa061d22b1da9fe4c47d51d2ac6071e01e171f76",
          "note": "",
          "scope": "德国全国"
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
          "scope": "德国全国",
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
          "scope": "德国全国",
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
          "scope": "德国全国",
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
        "geo": "德国全国",
        "unit": "TWh",
        "generation": 495.99,
        "demand": 522.26,
        "netImports": 26.27,
        "netImportShare": 5.03,
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
            "value": 0.0,
            "share": 0.0,
            "color": "#745f9b",
            "column": "nuclear_electricity"
          },
          {
            "id": "solar",
            "label": "太阳能",
            "value": 74.13,
            "share": 14.945865844069436,
            "color": "#d8a83b",
            "column": "solar_electricity"
          },
          {
            "id": "gas",
            "label": "天然气",
            "value": 78.41,
            "share": 15.808786467469101,
            "color": "#bc7253",
            "column": "gas_electricity"
          },
          {
            "id": "coal",
            "label": "煤",
            "value": 106.33,
            "share": 21.43793221637533,
            "color": "#697584",
            "column": "coal_electricity"
          },
          {
            "id": "bioenergy",
            "label": "生物能源",
            "value": 51.08,
            "share": 10.298594729732454,
            "color": "#7e965f",
            "column": "biofuel_electricity"
          },
          {
            "id": "wind",
            "label": "风电",
            "value": 141.6,
            "share": 28.54896268069921,
            "color": "#64a4ad",
            "column": "wind_electricity"
          },
          {
            "id": "oil",
            "label": "石油",
            "value": 20.39,
            "share": 4.110969979233452,
            "color": "#a28175",
            "column": "oil_electricity"
          },
          {
            "id": "hydro",
            "label": "水电",
            "value": 23.83,
            "share": 4.804532349442528,
            "color": "#5385ab",
            "column": "hydro_electricity"
          },
          {
            "id": "other-renewables",
            "label": "其他可再生能源（不含生物能源）",
            "value": 0.22,
            "share": 0.04435573297848747,
            "color": "#a1bba5",
            "column": "other_renewable_exc_biofuel_electricity"
          }
        ]
      },
      "latestElectricity": {
        "year": 2025,
        "geo": "德国全国",
        "unit": "TWh",
        "generation": 500.47,
        "demand": 520.27,
        "netImports": 19.8,
        "netImportShare": 3.806,
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
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 566.75,
          "demand": 547.72,
          "netImports": -19.03,
          "netImportShare": -3.474,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 49.5,
          "nuclear": 64.38,
          "gas": 95.0
        },
        {
          "year": 2021,
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 578.83,
          "demand": 560.25,
          "netImports": -18.58,
          "netImportShare": -3.316,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 49.34,
          "nuclear": 69.13,
          "gas": 90.31
        },
        {
          "year": 2022,
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 566.88,
          "demand": 539.62,
          "netImports": -27.26,
          "netImportShare": -5.052,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 60.3,
          "nuclear": 34.71,
          "gas": 79.05
        },
        {
          "year": 2023,
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 506.72,
          "demand": 515.94,
          "netImports": 9.22,
          "netImportShare": 1.787,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 63.87,
          "nuclear": 7.22,
          "gas": 76.66
        },
        {
          "year": 2024,
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 495.99,
          "demand": 522.26,
          "netImports": 26.27,
          "netImportShare": 5.03,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 74.13,
          "nuclear": 0.0,
          "gas": 78.41
        },
        {
          "year": 2025,
          "geo": "德国全国",
          "unit": "TWh",
          "generation": 500.47,
          "demand": 520.27,
          "netImports": 19.8,
          "netImportShare": 3.806,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 89.62,
          "nuclear": 0.0,
          "gas": 82.67
        }
      ],
      "primaryEnergy": {
        "year": 2024,
        "geo": "德国全国",
        "unit": "TWh",
        "consumption": 3195.441,
        "sourceIds": [
          "energy-owid",
          "energy-codebook"
        ]
      },
      "fuelConsumption": {
        "year": 2024,
        "geo": "德国全国",
        "unit": "TWh",
        "items": [
          {
            "id": "gas",
            "label": "天然气",
            "value": 785.71,
            "column": "gas_consumption"
          },
          {
            "id": "oil",
            "label": "石油",
            "value": 1176.547,
            "column": "oil_consumption"
          },
          {
            "id": "coal",
            "label": "煤",
            "value": 438.235,
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
          "scope": "德国全国",
          "unit": "GWh",
          "values": {
            "IMP": 81658.0,
            "EXP": 55389.0,
            "GEP": 514009.0
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
          "scope": "德国全国",
          "unit": "TJ（总热值）",
          "values": {
            "IPRD": 141618.114,
            "IMP": 2762678.208,
            "EXP": 0.0,
            "IC_CAL": 3062787.238,
            "IC_OBS": 3132607.704
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
          "scope": "德国全国",
          "unit": "千吨",
          "values": {
            "IPRD": 2918.0,
            "IMP": 117787.0,
            "EXP": 28981.0,
            "FC": 90263.0
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
          "scope": "德国全国",
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
                566.75,
                578.83,
                566.88,
                506.72,
                495.99,
                500.47
              ]
            },
            {
              "name": "电力需求",
              "values": [
                547.72,
                560.25,
                539.62,
                515.94,
                522.26,
                520.27
              ]
            },
            {
              "name": "跨境净进口",
              "values": [
                -19.03,
                -18.58,
                -27.26,
                9.22,
                26.27,
                19.8
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
          "scope": "德国全国",
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
                871.075,
                917.38,
                755.813,
                727.971,
                785.71
              ]
            },
            {
              "name": "石油",
              "values": [
                1223.238,
                1209.752,
                1241.977,
                1165.512,
                1176.547
              ]
            },
            {
              "name": "煤",
              "values": [
                514.867,
                621.935,
                641.76,
                487.423,
                438.235
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
          "scope": "德国全国",
          "unit": "GWh",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                81658.0
              ],
              "color": "#c16b32"
            },
            {
              "name": "报告出口",
              "values": [
                55389.0
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
          "scope": "德国全国",
          "unit": "TJ（总热值）",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                2762678.208
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
          "scope": "德国全国",
          "unit": "千吨",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                117787.0
              ],
              "color": "#c16b32"
            },
            {
              "name": "报告出口",
              "values": [
                28981.0
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
          "title": "2024：风电在本国发电中占比最高",
          "text": "德国全国发电 495.99 TWh，其中风电 141.60 TWh，约占 28.5%。这是国内发电结构，不是所有消费电量的电源追踪。",
          "scope": "德国全国 · 2024",
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
          "title": "北海、波罗的海与内陆水系",
          "text": "德国有海岸和海洋渔业，也有鲤鱼、鳟鱼等内陆养殖。河流、海洋、饮用水与水电是不同资源用途，不能把有河流推断成主要依靠水电。",
          "scope": "地理与城市背景；非市级数量统计",
          "sourceIds": [
            "eu-aquaculture-read"
          ],
          "verified": false
        },
        {
          "title": "柏林供水是城市背景",
          "text": "柏林的供水依靠其区域水源和水处理系统；全国粮食、能源或饮用水总量不能按人口比例包装成城市实测用量。可沿官方水务入口查水质和本地信息。",
          "scope": "地理与城市背景；非市级数量统计",
          "sourceIds": [
            "de-water-reference"
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
    }
  },
  "at": {
    "stats": {
      "id": "at",
      "updatedAt": "2026-10-24",
      "intro": "阿尔卑斯山地与东部平原，塑造了奥地利的乳品、谷物、糖料、果园和葡萄园。施蒂里亚南瓜籽油、瓦豪杏、山地奶酪与多瑙河葡萄酒各有地方风格；海鲜、咖啡和热带作物则连接境外供应链。",
      "supplyIntro": "按与食材图鉴一致的12类查看。默认是2010–2023同版食物平衡表，可逐产品查看产量、进口、出口、国内供给、食用可供总量与估算人均量；更新的2023/2024单项另列，年份与口径分别标明。",
      "sources": [
        {
          "id": "fao-crops",
          "title": "FAOSTAT · 农业、畜产与葡萄酒产量",
          "publisher": "Our World in Data；原始机构见各指标",
          "url": "https://github.com/owid/owid-grapher-svgs/tree/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables",
          "version": "d3f4efb3873ab6ebd5624d66b66d401ab63abb79",
          "accessed": "2026-10-24",
          "year": "2020–2024",
          "scope": "奥地利全国",
          "verified": true,
          "note": "实际读取固定版本的数值与元数据。单位由元数据明确为吨；只提取 Austria。产量是农业生产量，不能当作城市销售量或食用消费量。上游 FAO QCL 版本 2026-02-25。",
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
            },
            {
              "id": 1199257,
              "label": "黑麦",
              "name": "Rye | 00000071 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199257.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199257.metadata.json",
              "dataSha256": "5a3c2a06e101fe4d6fddec490bb4d9b5794feddc2deddeabba2751199a5d7c2f",
              "metadataSha256": "54f93ec28a03df61a9c244247f57afaea5a1cba28f78930934b33284ae2265f4",
              "definition": "Item: Rye\n\nDescription: Rye\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198719,
              "label": "猪肉",
              "name": "Meat, pig | 00001035 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198719.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198719.metadata.json",
              "dataSha256": "2f1bf4b68d15218c2adfa01d209278098bddc2482aa4f2a375865ad69ad9d8f1",
              "metadataSha256": "f89b9e0ec67e34f9620c9315014af14102fd2a78f72988d3a0ba49116fe6abb5",
              "definition": "Item: Meat of pig with the bone, fresh or chilled\n\nDescription: Meat, with the bone in, of domestic or wild pigs (e.g. wild boars), whether fresh or chilled. (Unofficial definition)\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198671,
              "label": "鸡肉",
              "name": "Meat, chicken | 00001058 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198671.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198671.metadata.json",
              "dataSha256": "c300c4fcef446bbc6a9e73ef8d964d07dd1ba3a2eef4bdc63eade42ad3624f06",
              "metadataSha256": "8616581abbcaa7d9b4b430d245639a4d4b7d0fa58efa1ac75eb4694a85fdb5b6",
              "definition": "Item: Meat of chickens, fresh or chilled\n\nDescription: Meat of chickens, fresh or chilled This subclass includes: -  meat of chickens, Gallus domesticus, birds of subclass 02151, fresh or chilled This subclass does not include: -  meat of chickens, frozen, cf. 21141 - edible offal of chicken, cf. 21160\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1198653,
              "label": "牛与水牛肉",
              "name": "Meat, beef and buffalo | 00001806 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198653.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1198653.metadata.json",
              "dataSha256": "25cc809a8092905b0c38fb03ad3677699b9368ee7cf9cc906088b881695cddfa",
              "metadataSha256": "e51f63723203b28a5fa14c1ba4606bac9403fed437cc8a3bf4665d390cdfe99c",
              "definition": "Item: Beef and Buffalo Meat, primary\n\nDescription: The term \"LIVESTOCK\" is used in a broad sense to cover all grown animals regardless of age, location or purpose of breeding. Non-domesticated animals are excluded under this definition unless they are kept or raised in captivity. Domestic animals included are large and small quadrupeds, poultry, insects (bees) and larvae of insects (silkworms). Figures on livestock numbers should refer to live animals enumerated on a given day or on several consecutive days. The FAO practice is that figures for an indicated year relate to animals reported by countries for any day between October of the previous year and September of the year indicated. Statistics on live animals by age, sex and utilization generally are not included in the list that follows, even though such breakdowns are extremely desirable in terms of national statistics. For each animal species FAO proposes that information be maintained on changes in national herds during the year according to the following equation: initial herd + animals born + imports of live animals - exports of live animals - natural losses - slaughter = closing herd.FAO defines meat as the flesh of animals used for food. In production data, meat is normally reported inclusive of bone and exclusive of meat that is unfit for human consumption. As reported by individual countries, meat production data may refer either to commercial production (meat entering marketing channels), inspected production (from animals slaughtered under sanitary inspection), or total production (the total of the above- mentioned categories plus slaughter for personal consumption). All FAO annual production data refer to total production.Country statistics on meat production adhere to one or more of the following concepts: 1. Live weight: the weight of the animal immediately before slaughter. 2. Killed weight: the live weight less the uncollected blood lost during slaughter. 3. Dressed carcass weight: weight minus all parts - edible and inedible - that are removed in dressing the carcass. The concept varies widely from country to country and according to the various species of livestock. Edible parts generally include edible offals (head or head meat, tongue, brains, heart, liver, spleen, stomach or tripes and, in a few countries, other parts such as feet, throat and lungs. Slaughter fats (the unrendered fats that fall in the course of dressing the carcasses) are recorded as either edible or inedible according to country practice. Inedible parts generally include hides and skins (except in the case of pigs), as well as hoofs and stomach contents.Among individual countries, one of the following three concepts issued to measure production:A. Production from all animals, of both indigenous and foreign origin, that are slaughtered within national boundaries. B. Production from the slaughter of indigenous animals plus exports of live indigenous animals during the reference period. Derived from meat production as follows: production from slaughtered animals plus the meat equivalent of all animals exported alive, minus the meat equivalent of all animals imported alive. As imports/exports of live animals are recorded by FAO in numbers, not weight, animal type and size are of significance. C. The biological production concept covers indigenous animals that are either slaughtered or exported live, plus net additions to the stock during the reference period. Derived from indigenous productions follows: indigenous production plus (or minus) the meat equivalent of the change in the stock numbers during the reference period. Production is expressed in terms of live weight. Changes in the total live weight of all animals are not taken into account.FAO uses the first concept of meat production in the construction of its food balance sheets and for related indicators. The second concept, indigenous meat production, in measuring the output of the national livestock sector, is useful mainly in the construction of index numbers of agricultural production. The third concept, biological production, would be the most complete as it also reflects changes in the livestock herd, but it is not used because of difficulties in obtaining information from national reporting offices. The prices applied to indigenous meat production are derived from prices of live animals. This covers not only the value of meat, but also the value of offals, fats, hides and skins.Beef and Veal, Dried, Salted, Smok Meat of bovine animals, whether salted, in brine, dried or smoked. Includes edible flours and meals.Beef and Veal Preparations nes Meat and offal (o/t liver) that are boiled, steamed, grilled, fried, roasted or otherwise cooked. Includes prepared meals that contain more than 20% of meat and offal by weight.BUFFALO MEAT Fresh, chilled or frozen, with bone in or boneless.OFFALS OF BUFFALO, EDIBLE Fresh, chilled or frozen.\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
              "id": 1199551,
              "label": "葡萄酒",
              "name": "Wine | 00000564 || Production | 005510 || tonnes",
              "unit": "tonnes",
              "url": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199551.data.json",
              "metadataUrl": "https://raw.githubusercontent.com/owid/owid-grapher-svgs/d3f4efb3873ab6ebd5624d66b66d401ab63abb79/variables/1199551.metadata.json",
              "dataSha256": "0f7b1752d9d3e7e838ed41cc6dcdcb1f4ba4d8cf2c2d63f07ab8839d8033823c",
              "metadataSha256": "1025f3c58bcc2bcadfaacd373c0e4fab2e9cd93ae3a112b6ed44a4dd307f18cc",
              "definition": "Item: Wine\n\nDescription: Wines of fresh grapes of all qualities, including sparkling, fortified and dessert wines (Unofficial definition)\n\nMetric: Production\n\nDescription: Amount produced in the year.",
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
          "accessed": "2026-10-24",
          "year": "2020–2023",
          "scope": "奥地利全国",
          "verified": true,
          "note": "实际读取 FAO Food Balances 的 OWID 整理数据与定义，使用同一新版序列2020–2023。人均量是供应链末端可供人类消费量，尚未扣除消费者浪费；谷物进出口是食物平衡表口径，包含相应加工品折算，不是城市海关或门店销售统计。",
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
          "accessed": "2026-10-24",
          "year": "2020–2024",
          "scope": "奥地利全国",
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
          "accessed": "2026-10-24",
          "year": "2020–2023",
          "scope": "奥地利全国",
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
          "id": "energy-net-imports",
          "title": "能源供给，对外依赖到什么程度？",
          "description": "净能源进口占一次能源使用的比例。正数表示净进口，负数表示净出口；这是全国全部能源口径，不能替代气、油或电力的单项依赖率。",
          "scope": "奥地利全国",
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
                59.766876,
                53.15293,
                76.81119,
                63.966198
              ]
            }
          ]
        }
      ],
      "itemMetrics": [
        {
          "itemId": "wheat",
          "label": "小麦 · 全国生产量",
          "value": 1576010,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199532,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "maize",
          "label": "玉米 · 全国生产量",
          "value": 2059360,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198621,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "barley",
          "label": "大麦 · 全国生产量",
          "value": 720290,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1197641,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "sunflower",
          "label": "葵花籽 · 全国生产量",
          "value": 53480,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199410,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "rapeseed",
          "label": "油菜籽 · 全国生产量",
          "value": 71490,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199201,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "sugar-beet",
          "label": "制糖甜菜 · 全国生产量",
          "value": 3434890,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199386,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "apple",
          "label": "苹果 · 全国生产量",
          "value": 175560,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1197505,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "grape",
          "label": "葡萄 · 全国生产量",
          "value": 249420,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198454,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "potato",
          "label": "土豆 · 全国生产量",
          "value": 693640,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199148,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "tomato",
          "label": "番茄 · 全国生产量",
          "value": 58100,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199460,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "milk",
          "label": "奶类生产总量 · 全国生产量",
          "value": 4058480,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198790,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "rye",
          "label": "黑麦 · 全国生产量",
          "value": 128620,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199257,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "pork",
          "label": "猪肉 · 全国生产量",
          "value": 457840,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198719,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "chicken",
          "label": "鸡肉 · 全国生产量",
          "value": 127924,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198671,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "beef",
          "label": "牛与水牛肉 · 全国生产量",
          "value": 203470,
          "year": 2024,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1198653,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "wine",
          "label": "葡萄酒 · 全国生产量",
          "value": 233072,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "吨",
          "variableId": 1199551,
          "sourceIds": [
            "fao-crops"
          ]
        },
        {
          "itemId": "milk",
          "label": "奶类（不含黄油） · 全国人均可供量",
          "value": 216.3199,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201769,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "egg",
          "label": "蛋类 · 全国人均可供量",
          "value": 15.119993,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1200910,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "pork",
          "label": "猪肉 · 全国人均可供量",
          "value": 40.85998,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201581,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "chicken",
          "label": "禽肉 · 全国人均可供量",
          "value": 17.539993,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201620,
          "sourceIds": [
            "fao-fbs"
          ]
        },
        {
          "itemId": "beef",
          "label": "牛与水牛肉 · 全国人均可供量",
          "value": 13.849994,
          "year": 2023,
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "variableId": 1201508,
          "sourceIds": [
            "fao-fbs"
          ]
        }
      ],
      "latestSeries": [
        {
          "id": "latest-1199532",
          "itemId": "wheat",
          "name": "小麦",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            1652740,
            1547600,
            1712530,
            1744820,
            1576010
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199532
        },
        {
          "id": "latest-1198621",
          "itemId": "maize",
          "name": "玉米",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            2411930,
            2434900,
            2113960,
            2105060,
            2059360
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198621
        },
        {
          "id": "latest-1197641",
          "itemId": "barley",
          "name": "大麦",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            864860,
            742530,
            767120,
            772120,
            720290
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1197641
        },
        {
          "id": "latest-1199410",
          "itemId": "sunflower",
          "name": "葵花籽",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            56800,
            75220,
            57000,
            65530,
            53480
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199410
        },
        {
          "id": "latest-1199201",
          "itemId": "rapeseed",
          "name": "油菜籽",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            100280,
            86870,
            92030,
            86680,
            71490
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199201
        },
        {
          "id": "latest-1199386",
          "itemId": "sugar-beet",
          "name": "制糖甜菜",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            2091690,
            3017450,
            2709530,
            2675690,
            3434890
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199386
        },
        {
          "id": "latest-1199243",
          "itemId": "rice",
          "name": "稻米（FAO Rice）",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            null,
            null,
            null,
            null,
            null
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199243
        },
        {
          "id": "latest-1197505",
          "itemId": "apple",
          "name": "苹果",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            258220,
            206290,
            260610,
            191910,
            175560
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1197505
        },
        {
          "id": "latest-1198454",
          "itemId": "grape",
          "name": "葡萄",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            319790,
            328040,
            336990,
            310760,
            249420
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198454
        },
        {
          "id": "latest-1199148",
          "itemId": "potato",
          "name": "土豆",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            885890,
            769690,
            686220,
            594040,
            693640
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199148
        },
        {
          "id": "latest-1199460",
          "itemId": "tomato",
          "name": "番茄",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            58670,
            59770,
            56980,
            56950,
            58100
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199460
        },
        {
          "id": "latest-1198790",
          "itemId": "milk",
          "name": "奶类生产总量",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            3852260,
            3867490,
            3980300,
            3716970,
            4058480
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198790
        },
        {
          "id": "latest-1199257",
          "itemId": "rye",
          "name": "黑麦",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            217930,
            152440,
            169590,
            176720,
            128620
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199257
        },
        {
          "id": "latest-1198719",
          "itemId": "pork",
          "name": "猪肉",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            503170,
            502120,
            477660,
            454260,
            457840
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198719
        },
        {
          "id": "latest-1198671",
          "itemId": "chicken",
          "name": "鸡肉",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            125000,
            129390,
            128404,
            127924,
            null
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198671
        },
        {
          "id": "latest-1198653",
          "itemId": "beef",
          "name": "牛与水牛肉",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            218360,
            213740,
            210120,
            204580,
            203470
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1198653
        },
        {
          "id": "latest-1199551",
          "itemId": "wine",
          "name": "葡萄酒",
          "kind": "production",
          "scope": "奥地利全国",
          "unit": "吨",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            239800,
            246000,
            252744,
            233072,
            null
          ],
          "sourceIds": [
            "fao-crops"
          ],
          "variableId": 1199551
        },
        {
          "id": "latest-1201769",
          "itemId": "milk",
          "name": "奶类（不含黄油）",
          "kind": "perCapitaPublished",
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            217.0102,
            222.36017,
            212.25005,
            216.3199,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201769
        },
        {
          "id": "latest-1200910",
          "itemId": "egg",
          "name": "蛋类",
          "kind": "perCapitaPublished",
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            14.220014,
            14.180011,
            14.750003,
            15.119993,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1200910
        },
        {
          "id": "latest-1201581",
          "itemId": "pork",
          "name": "猪肉",
          "kind": "perCapitaPublished",
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            45.450043,
            43.330032,
            42.230007,
            40.85998,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201581
        },
        {
          "id": "latest-1201620",
          "itemId": "chicken",
          "name": "禽肉",
          "kind": "perCapitaPublished",
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            15.950014,
            16.420012,
            18.080004,
            17.539993,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201620
        },
        {
          "id": "latest-1201508",
          "itemId": "beef",
          "name": "牛与水牛肉",
          "kind": "perCapitaPublished",
          "scope": "奥地利全国",
          "unit": "千克 / 人 / 年",
          "years": [
            2020,
            2021,
            2022,
            2023,
            2024
          ],
          "values": [
            15.010014,
            14.12001,
            14.280003,
            13.849994,
            null
          ],
          "sourceIds": [
            "fao-fbs"
          ],
          "variableId": 1201508
        }
      ],
      "context": [
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
      "notes": [
        "同年供需现已扩展到53个产品/统计组；统计组与含制品条目不等于每种生鲜食材，未取得单项时不擅自拆分。",
        "不同年份的农业产量与谷物贸易不是同一年、同一商品分组，不能直接拼成自给率。进口可以发生在丰收或净出口年份。",
        "食物可供量不等于购买量、实际吃下去的重量或营养摄入。奶类包括乳品折算，鱼肉统计与零售去骨净肉重量也可能不同。",
        "收获月份是一般性产区参考，未逐一核对每个产区的官方日历；天气、品种、温室、储藏和进口都会改变上市时间。",
        "数据有年份且可能被原机构修订；本页固定所读版本并提供元数据、原始链接和下载，不把资料图谱当作实时库存或价格。"
      ],
      "energyContext": []
    },
    "supply": {
      "id": "at-fbs",
      "checkedAt": "2026-10-24",
      "scope": "奥地利全国",
      "years": [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023
      ],
      "defaultYear": 2023,
      "population": [
        8365090.0,
        8393270.0,
        8431600.0,
        8481410.0,
        8547820.0,
        8644040.0,
        8737920.0,
        8798780.0,
        8841650.0,
        8880880.0,
        8921410.0,
        8967060.0,
        9064680.0,
        9130430.0
      ],
      "metrics": [
        {
          "id": "production",
          "name": "产量",
          "unit": "千吨",
          "definition": "同版FAO食物平衡表的生产量；具体原产品和制品折算范围见产品名称。"
        },
        {
          "id": "imports",
          "name": "进口量",
          "unit": "千吨",
          "definition": "进口总量，未扣出口；不是净进口。"
        },
        {
          "id": "exports",
          "name": "出口量",
          "unit": "千吨",
          "definition": "出口总量，未扣进口；不与净出口混用。"
        },
        {
          "id": "domestic",
          "name": "国内供给量",
          "unit": "千吨",
          "definition": "由生产、贸易及库存变动等共同决定，供食用、饲料、加工、种子等用途，不能全部当作人吃掉的数量。"
        },
        {
          "id": "food",
          "name": "食用可供总量",
          "unit": "千吨",
          "definition": "FAO Food项：供人食用的供给端数量，未扣消费者浪费，不是实测摄入。"
        },
        {
          "id": "perCapita",
          "name": "人均食用可供量（估算）",
          "unit": "千克 / 人 / 年",
          "definition": "由同版Food总量（千吨）×1,000,000÷同版FAO人口推算；总量有取整，结果为近似参考，不是实测人均消费。"
        }
      ],
      "products": [
        {
          "id": "2511",
          "code": 2511,
          "name": "小麦及制品",
          "originalName": "Wheat and products",
          "category": "grain",
          "itemId": "wheat",
          "scope": "奥地利全国",
          "values": {
            "production": [
              1518.0,
              1782.0,
              1275.0,
              1598.0,
              1804.0,
              1726.0,
              1970.0,
              1437.0,
              1371.0,
              1664.0,
              1653.0,
              1548.0,
              1713.0,
              1745.0
            ],
            "imports": [
              1134.0,
              1201.0,
              1109.0,
              1217.0,
              1468.0,
              1530.0,
              1585.0,
              1714.0,
              1562.0,
              1570.0,
              1847.0,
              1903.0,
              1996.0,
              2018.0
            ],
            "exports": [
              1171.0,
              1112.0,
              1070.0,
              1098.0,
              1440.0,
              1402.0,
              1331.0,
              1342.0,
              1244.0,
              1271.0,
              1266.0,
              1397.0,
              1725.0,
              1365.0
            ],
            "domestic": [
              1375.0,
              1595.0,
              1461.0,
              1628.0,
              1556.0,
              1493.0,
              1612.0,
              1677.0,
              1620.0,
              1908.0,
              2250.0,
              1991.0,
              2041.0,
              2336.0
            ],
            "food": [
              668.0,
              684.0,
              684.0,
              686.0,
              751.0,
              739.0,
              746.0,
              762.0,
              757.0,
              695.0,
              713.0,
              768.0,
              797.0,
              854.0
            ],
            "perCapita": [
              79.85568595197422,
              81.49386353590437,
              81.12339295032972,
              80.88277774568144,
              87.85865869894312,
              85.49243177958455,
              85.37500915549695,
              86.60291540418103,
              85.61750352027053,
              78.25801046743115,
              79.92010231566535,
              85.64680062361576,
              87.92367739401722,
              93.53338232700979
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2513",
          "code": 2513,
          "name": "大麦及制品",
          "originalName": "Barley and products",
          "category": "grain",
          "itemId": "barley",
          "scope": "奥地利全国",
          "values": {
            "production": [
              778.0,
              859.0,
              662.0,
              734.0,
              846.0,
              840.0,
              860.0,
              782.0,
              695.0,
              828.0,
              865.0,
              743.0,
              767.0,
              772.0
            ],
            "imports": [
              199.0,
              260.0,
              219.0,
              272.0,
              276.0,
              274.0,
              274.0,
              284.0,
              274.0,
              346.0,
              387.0,
              297.0,
              246.0,
              356.0
            ],
            "exports": [
              150.0,
              148.0,
              180.0,
              179.0,
              146.0,
              213.0,
              224.0,
              236.0,
              203.0,
              163.0,
              167.0,
              189.0,
              156.0,
              139.0
            ],
            "domestic": [
              958.0,
              943.0,
              755.0,
              890.0,
              929.0,
              919.0,
              909.0,
              905.0,
              851.0,
              992.0,
              1063.0,
              880.0,
              861.0,
              930.0
            ],
            "food": [
              3.0,
              2.0,
              3.0,
              3.0,
              5.0,
              5.0,
              4.0,
              3.0,
              3.0,
              9.0,
              5.0,
              6.0,
              3.0,
              4.0
            ],
            "perCapita": [
              0.3586333201435968,
              0.23828615068977885,
              0.3558043550453058,
              0.3537147714825719,
              0.5849444653724576,
              0.5784332326088264,
              0.45777484801875046,
              0.34095635985898043,
              0.3393031843603852,
              1.013413085189756,
              0.560449525355297,
              0.6691156298719981,
              0.3309548709937913,
              0.43809546757381634
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2514",
          "code": 2514,
          "name": "玉米及制品",
          "originalName": "Maize and products",
          "category": "grain",
          "itemId": "maize",
          "scope": "奥地利全国",
          "values": {
            "production": [
              1956.0,
              2453.0,
              2351.0,
              1639.0,
              2334.0,
              1638.0,
              2180.0,
              2076.0,
              2130.0,
              2299.0,
              2412.0,
              2435.0,
              2114.0,
              2105.0
            ],
            "imports": [
              702.0,
              906.0,
              729.0,
              1059.0,
              1081.0,
              1176.0,
              1110.0,
              1224.0,
              1140.0,
              1303.0,
              1185.0,
              1266.0,
              1278.0,
              1117.0
            ],
            "exports": [
              356.0,
              397.0,
              577.0,
              450.0,
              433.0,
              328.0,
              494.0,
              546.0,
              455.0,
              489.0,
              615.0,
              605.0,
              553.0,
              609.0
            ],
            "domestic": [
              2302.0,
              2358.0,
              2103.0,
              2247.0,
              2577.0,
              2152.0,
              2406.0,
              2267.0,
              2372.0,
              3131.0,
              2921.0,
              3064.0,
              2874.0,
              2644.0
            ],
            "food": [
              95.0,
              100.0,
              98.0,
              99.0,
              93.0,
              94.0,
              93.0,
              95.0,
              99.0,
              99.0,
              109.0,
              113.0,
              103.0,
              98.0
            ],
            "perCapita": [
              11.356721804547231,
              11.914307534488941,
              11.622942264813322,
              11.672587458924871,
              10.879967055927711,
              10.874544773045937,
              10.643265216435948,
              10.79695139553438,
              11.197005083892712,
              11.147543937087315,
              12.217799652745475,
              12.601677695922632,
              11.362783904120167,
              10.7333389555585
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2515",
          "code": 2515,
          "name": "黑麦及制品",
          "originalName": "Rye and products",
          "category": "grain",
          "itemId": "rye",
          "scope": "奥地利全国",
          "values": {
            "production": [
              161.0,
              202.0,
              205.0,
              235.0,
              233.0,
              171.0,
              188.0,
              129.0,
              177.0,
              200.0,
              218.0,
              152.0,
              170.0,
              177.0
            ],
            "imports": [
              61.0,
              44.0,
              45.0,
              45.0,
              37.0,
              20.0,
              20.0,
              40.0,
              24.0,
              18.0,
              10.0,
              17.0,
              17.0,
              17.0
            ],
            "exports": [
              20.0,
              25.0,
              30.0,
              24.0,
              27.0,
              28.0,
              24.0,
              23.0,
              19.0,
              24.0,
              21.0,
              34.0,
              17.0,
              27.0
            ],
            "domestic": [
              211.0,
              220.0,
              220.0,
              237.0,
              225.0,
              172.0,
              184.0,
              146.0,
              182.0,
              176.0,
              204.0,
              157.0,
              166.0,
              156.0
            ],
            "food": [
              106.0,
              107.0,
              105.0,
              103.0,
              102.0,
              93.0,
              93.0,
              92.0,
              100.0,
              103.0,
              88.0,
              89.0,
              81.0,
              84.0
            ],
            "perCapita": [
              12.671710645073754,
              12.748309061903168,
              12.453152426585701,
              12.144207154234968,
              11.932867093598134,
              10.75885812652417,
              10.643265216435948,
              10.4559950356754,
              11.310106145346174,
              11.597949752727207,
              9.863911646253227,
              9.925215176434639,
              8.935781516832364,
              9.200004819050143
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2516",
          "code": 2516,
          "name": "燕麦",
          "originalName": "Oats",
          "category": "grain",
          "itemId": "oats",
          "scope": "奥地利全国",
          "values": {
            "production": [
              98.0,
              110.0,
              93.0,
              87.0,
              106.0,
              96.0,
              95.0,
              77.0,
              75.0,
              77.0,
              84.0,
              89.0,
              85.0,
              60.0
            ],
            "imports": [
              15.0,
              15.0,
              16.0,
              18.0,
              15.0,
              22.0,
              20.0,
              21.0,
              24.0,
              24.0,
              27.0,
              29.0,
              29.0,
              26.0
            ],
            "exports": [
              15.0,
              17.0,
              22.0,
              11.0,
              15.0,
              21.0,
              24.0,
              15.0,
              13.0,
              18.0,
              16.0,
              20.0,
              26.0,
              27.0
            ],
            "domestic": [
              100.0,
              108.0,
              99.0,
              94.0,
              104.0,
              96.0,
              95.0,
              82.0,
              82.0,
              84.0,
              89.0,
              96.0,
              90.0,
              69.0
            ],
            "food": [
              14.0,
              15.0,
              17.0,
              19.0,
              16.0,
              17.0,
              18.0,
              18.0,
              18.0,
              18.0,
              23.0,
              30.0,
              28.0,
              21.0
            ],
            "perCapita": [
              1.6736221606701183,
              1.7871461301733413,
              2.016224678590066,
              2.240193552722955,
              1.871822289191864,
              1.9666729908700098,
              2.0599868160843773,
              2.0457381591538826,
              2.0358191061623114,
              2.026826170379512,
              2.5780678166343662,
              3.3455781493599908,
              3.088912129275385,
              2.300001204762536
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2807",
          "code": 2807,
          "name": "大米及制品（碾米口径）",
          "originalName": "Rice and products",
          "category": "grain",
          "itemId": "rice",
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              65.0,
              65.0,
              68.0,
              63.0,
              69.0,
              77.0,
              86.0,
              82.0,
              85.0,
              92.0,
              107.0,
              102.0,
              105.0,
              105.0
            ],
            "exports": [
              7.0,
              7.0,
              6.0,
              6.0,
              9.0,
              9.0,
              7.0,
              6.0,
              6.0,
              7.0,
              6.0,
              7.0,
              7.0,
              11.0
            ],
            "domestic": [
              61.0,
              59.0,
              59.0,
              59.0,
              59.0,
              65.0,
              72.0,
              73.0,
              76.0,
              79.0,
              96.0,
              90.0,
              94.0,
              89.0
            ],
            "food": [
              49.0,
              49.0,
              51.0,
              50.0,
              51.0,
              55.0,
              62.0,
              62.0,
              65.0,
              67.0,
              84.0,
              77.0,
              81.0,
              77.0
            ],
            "perCapita": [
              5.8576775623454145,
              5.838010691899582,
              6.048674035770198,
              5.895246191376198,
              5.966433546799067,
              6.362765558697091,
              7.095510144290632,
              7.046431437085596,
              7.351568994475013,
              7.544297411968183,
              9.415552025968989,
              8.586983916690643,
              8.935781516832364,
              8.433337750795964
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2617",
          "code": 2617,
          "name": "苹果及制品",
          "originalName": "Apples and products",
          "category": "fruit",
          "itemId": "apple",
          "scope": "奥地利全国",
          "values": {
            "production": [
              271.0,
              303.0,
              262.0,
              235.0,
              310.0,
              288.0,
              102.0,
              185.0,
              388.0,
              239.0,
              258.0,
              206.0,
              261.0,
              192.0
            ],
            "imports": [
              398.0,
              373.0,
              488.0,
              427.0,
              484.0,
              493.0,
              501.0,
              444.0,
              565.0,
              460.0,
              596.0,
              755.0,
              890.0,
              615.0
            ],
            "exports": [
              454.0,
              435.0,
              398.0,
              396.0,
              466.0,
              492.0,
              465.0,
              419.0,
              442.0,
              522.0,
              590.0,
              615.0,
              597.0,
              542.0
            ],
            "domestic": [
              262.0,
              272.0,
              417.0,
              296.0,
              333.0,
              302.0,
              202.0,
              223.0,
              343.0,
              231.0,
              279.0,
              252.0,
              413.0,
              268.0
            ],
            "food": [
              225.0,
              226.0,
              371.0,
              254.0,
              293.0,
              262.0,
              180.0,
              184.0,
              275.0,
              186.0,
              211.0,
              191.0,
              336.0,
              224.0
            ],
            "perCapita": [
              26.89749901076976,
              26.926335027945008,
              44.001138573936146,
              29.947850652191086,
              34.277745670826015,
              30.309901388702507,
              20.59986816084377,
              20.9119900713508,
              31.10279189970198,
              20.943870427254957,
              23.650969969993533,
              21.30018088425861,
              37.06694555130463,
              24.533346184133716
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2620",
          "code": 2620,
          "name": "葡萄及制品（不含葡萄酒）",
          "originalName": "Grapes and products (excl wine)",
          "category": "fruit",
          "itemId": "grape",
          "scope": "奥地利全国",
          "values": {
            "production": [
              232.0,
              375.0,
              287.0,
              319.0,
              266.0,
              302.0,
              260.0,
              331.0,
              367.0,
              310.0,
              320.0,
              328.0,
              337.0,
              311.0
            ],
            "imports": [
              103.0,
              104.0,
              106.0,
              101.0,
              98.0,
              112.0,
              107.0,
              111.0,
              101.0,
              116.0,
              105.0,
              109.0,
              103.0,
              100.0
            ],
            "exports": [
              39.0,
              41.0,
              37.0,
              29.0,
              28.0,
              29.0,
              30.0,
              36.0,
              39.0,
              41.0,
              38.0,
              42.0,
              40.0,
              37.0
            ],
            "domestic": [
              296.0,
              441.0,
              355.0,
              389.0,
              332.0,
              372.0,
              331.0,
              402.0,
              431.0,
              382.0,
              386.0,
              396.0,
              400.0,
              374.0
            ],
            "food": [
              40.0,
              38.0,
              40.0,
              38.0,
              38.0,
              39.0,
              45.0,
              39.0,
              36.0,
              45.0,
              45.0,
              45.0,
              41.0,
              43.0
            ],
            "perCapita": [
              4.781777601914624,
              4.527436863105798,
              4.7440580672707435,
              4.48038710544591,
              4.445577936830677,
              4.511779214348846,
              5.149967040210942,
              4.432432678166746,
              4.071638212324623,
              5.06706542594878,
              5.0440457281976725,
              5.018367224039986,
              4.523049903581814,
              4.709526276418526
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2615",
          "code": 2615,
          "name": "香蕉",
          "originalName": "Bananas",
          "category": "fruit",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              126.0,
              127.0,
              120.0,
              120.0,
              123.0,
              128.0,
              126.0,
              129.0,
              128.0,
              140.0,
              146.0,
              141.0,
              154.0,
              149.0
            ],
            "exports": [
              17.0,
              21.0,
              18.0,
              22.0,
              21.0,
              22.0,
              17.0,
              17.0,
              15.0,
              13.0,
              11.0,
              8.0,
              8.0,
              6.0
            ],
            "domestic": [
              109.0,
              105.0,
              102.0,
              99.0,
              102.0,
              106.0,
              110.0,
              111.0,
              114.0,
              127.0,
              135.0,
              133.0,
              146.0,
              143.0
            ],
            "food": [
              103.0,
              99.0,
              96.0,
              93.0,
              96.0,
              100.0,
              103.0,
              105.0,
              107.0,
              122.0,
              126.0,
              132.0,
              152.0,
              137.0
            ],
            "perCapita": [
              12.313077324930155,
              11.795164459144052,
              11.385739361449785,
              10.965157915959729,
              11.230933735151185,
              11.568664652176528,
              11.787702336482825,
              11.933472595064316,
              12.101813575520406,
              13.737377377016692,
              14.123328038953483,
              14.72054385718396,
              16.768380130352092,
              15.00476976440321
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2611",
          "code": 2611,
          "name": "橙与柑橘",
          "originalName": "Oranges, Mandarines",
          "category": "fruit",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              182.0,
              270.0,
              296.0,
              316.0,
              277.0,
              285.0,
              296.0,
              300.0,
              300.0,
              286.0,
              281.0,
              288.0,
              299.0,
              283.0
            ],
            "exports": [
              94.0,
              83.0,
              83.0,
              91.0,
              74.0,
              63.0,
              77.0,
              73.0,
              60.0,
              64.0,
              66.0,
              83.0,
              77.0,
              75.0
            ],
            "domestic": [
              97.0,
              186.0,
              209.0,
              200.0,
              214.0,
              197.0,
              208.0,
              227.0,
              231.0,
              219.0,
              211.0,
              216.0,
              222.0,
              205.0
            ],
            "food": [
              91.0,
              181.0,
              204.0,
              195.0,
              209.0,
              192.0,
              202.0,
              222.0,
              226.0,
              215.0,
              206.0,
              211.0,
              217.0,
              200.0
            ],
            "perCapita": [
              10.878544044355769,
              21.564896637424983,
              24.19469614308079,
              22.99146014636717,
              24.450678652568726,
              22.211836132178934,
              23.1176298249469,
              25.230770629564553,
              25.560839888482352,
              24.20931259064417,
              23.090520444638237,
              23.53056631716527,
              23.939069001884235,
              21.904773378690816
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2612",
          "code": 2612,
          "name": "柠檬、青柠及制品",
          "originalName": "Lemons, Limes and products",
          "category": "fruit",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              45.0,
              44.0,
              38.0,
              42.0,
              38.0,
              42.0,
              52.0,
              54.0,
              58.0,
              44.0,
              42.0,
              37.0,
              36.0,
              41.0
            ],
            "exports": [
              18.0,
              15.0,
              9.0,
              9.0,
              10.0,
              10.0,
              10.0,
              8.0,
              8.0,
              8.0,
              7.0,
              5.0,
              4.0,
              4.0
            ],
            "domestic": [
              28.0,
              29.0,
              29.0,
              33.0,
              28.0,
              32.0,
              31.0,
              34.0,
              43.0,
              36.0,
              35.0,
              31.0,
              32.0,
              36.0
            ],
            "food": [
              26.0,
              27.0,
              27.0,
              31.0,
              26.0,
              30.0,
              29.0,
              32.0,
              41.0,
              34.0,
              33.0,
              30.0,
              30.0,
              34.0
            ],
            "perCapita": [
              3.1081554412445054,
              3.216863034312014,
              3.202239195407752,
              3.6550526386532427,
              3.0417112199367793,
              3.4705993956529584,
              3.318867648135941,
              3.6368678384957915,
              4.637143519591931,
              3.828449432939078,
              3.69896686734496,
              3.3455781493599908,
              3.309548709937913,
              3.723811474377439
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2625",
          "code": 2625,
          "name": "其他水果（统计组）",
          "originalName": "Fruits, other",
          "category": "fruit",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              86.0,
              135.0,
              98.0,
              115.0,
              104.0,
              105.0,
              55.0,
              87.0,
              163.0,
              88.0,
              120.0,
              91.0,
              93.0,
              68.0
            ],
            "imports": [
              473.0,
              475.0,
              473.0,
              501.0,
              483.0,
              503.0,
              501.0,
              559.0,
              559.0,
              550.0,
              541.0,
              519.0,
              506.0,
              559.0
            ],
            "exports": [
              260.0,
              248.0,
              248.0,
              247.0,
              225.0,
              240.0,
              250.0,
              271.0,
              286.0,
              276.0,
              293.0,
              272.0,
              252.0,
              271.0
            ],
            "domestic": [
              310.0,
              360.0,
              331.0,
              360.0,
              340.0,
              350.0,
              295.0,
              343.0,
              415.0,
              340.0,
              357.0,
              325.0,
              336.0,
              341.0
            ],
            "food": [
              261.0,
              269.0,
              256.0,
              286.0,
              278.0,
              286.0,
              245.0,
              282.0,
              314.0,
              282.0,
              280.0,
              269.0,
              279.0,
              284.0
            ],
            "perCapita": [
              31.20109885249292,
              32.049487267775255,
              30.361971630532757,
              33.720808214671855,
              32.52291227470864,
              33.08638090522487,
              28.038709441148466,
              32.049897826744164,
              35.51373329638699,
              31.753610002612355,
              31.38517341989663,
              29.998684072594585,
              30.77880300242259,
              31.10477819774096
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2601",
          "code": 2601,
          "name": "番茄及制品",
          "originalName": "Tomatoes and products",
          "category": "vegetable",
          "itemId": "tomato",
          "scope": "奥地利全国",
          "values": {
            "production": [
              44.0,
              50.0,
              52.0,
              53.0,
              57.0,
              56.0,
              55.0,
              54.0,
              58.0,
              58.0,
              59.0,
              60.0,
              57.0,
              57.0
            ],
            "imports": [
              317.0,
              322.0,
              336.0,
              312.0,
              351.0,
              341.0,
              358.0,
              366.0,
              396.0,
              436.0,
              532.0,
              562.0,
              575.0,
              858.0
            ],
            "exports": [
              34.0,
              28.0,
              27.0,
              33.0,
              28.0,
              25.0,
              30.0,
              38.0,
              46.0,
              59.0,
              101.0,
              175.0,
              125.0,
              371.0
            ],
            "domestic": [
              333.0,
              347.0,
              355.0,
              336.0,
              372.0,
              359.0,
              372.0,
              374.0,
              393.0,
              421.0,
              477.0,
              433.0,
              490.0,
              526.0
            ],
            "food": [
              314.0,
              330.0,
              340.0,
              323.0,
              356.0,
              343.0,
              356.0,
              358.0,
              376.0,
              405.0,
              461.0,
              416.0,
              472.0,
              505.0
            ],
            "perCapita": [
              37.5369541750298,
              39.31721486381351,
              40.32449357180132,
              38.08329039629024,
              41.648045934518976,
              39.680519756965495,
              40.74196147366879,
              40.68745894317167,
              42.525999106501615,
              45.60358883353902,
              51.673446237758384,
              46.39201700445854,
              52.0702330363565,
              55.30955278119431
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2602",
          "code": 2602,
          "name": "洋葱",
          "originalName": "Onions",
          "category": "vegetable",
          "itemId": "onion",
          "scope": "奥地利全国",
          "values": {
            "production": [
              154.0,
              200.0,
              135.0,
              144.0,
              206.0,
              168.0,
              163.0,
              145.0,
              132.0,
              142.0,
              155.0,
              169.0,
              175.0,
              160.0
            ],
            "imports": [
              26.0,
              20.0,
              15.0,
              16.0,
              13.0,
              14.0,
              11.0,
              9.0,
              11.0,
              16.0,
              12.0,
              13.0,
              9.0,
              11.0
            ],
            "exports": [
              40.0,
              56.0,
              68.0,
              59.0,
              44.0,
              47.0,
              42.0,
              35.0,
              51.0,
              47.0,
              57.0,
              66.0,
              76.0,
              77.0
            ],
            "domestic": [
              139.0,
              164.0,
              82.0,
              101.0,
              176.0,
              134.0,
              132.0,
              119.0,
              92.0,
              111.0,
              110.0,
              115.0,
              107.0,
              93.0
            ],
            "food": [
              122.0,
              142.0,
              67.0,
              85.0,
              152.0,
              115.0,
              114.0,
              102.0,
              77.0,
              94.0,
              84.0,
              93.0,
              83.0,
              71.0
            ],
            "perCapita": [
              14.584421685839603,
              16.918316698974298,
              7.946297262678495,
              10.021918525339537,
              17.78231174732271,
              13.303964350003008,
              13.046583168534388,
              11.592516235205336,
              8.708781731916554,
              10.584536667537451,
              9.415552025968989,
              10.371292263015972,
              9.156418097494893,
              7.77619454943524
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2605",
          "code": 2605,
          "name": "其他蔬菜（统计组）",
          "originalName": "Vegetables, other",
          "category": "vegetable",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              393.0,
              454.0,
              430.0,
              399.0,
              435.0,
              348.0,
              407.0,
              410.0,
              374.0,
              505.0,
              379.0,
              388.0,
              383.0,
              375.0
            ],
            "imports": [
              801.0,
              726.0,
              857.0,
              830.0,
              793.0,
              843.0,
              854.0,
              906.0,
              941.0,
              980.0,
              964.0,
              971.0,
              999.0,
              1129.0
            ],
            "exports": [
              279.0,
              293.0,
              285.0,
              255.0,
              242.0,
              256.0,
              277.0,
              272.0,
              297.0,
              296.0,
              301.0,
              301.0,
              293.0,
              327.0
            ],
            "domestic": [
              913.0,
              947.0,
              983.0,
              935.0,
              936.0,
              864.0,
              941.0,
              967.0,
              939.0,
              1109.0,
              989.0,
              987.0,
              1013.0,
              1113.0
            ],
            "food": [
              839.0,
              866.0,
              909.0,
              866.0,
              851.0,
              783.0,
              856.0,
              882.0,
              859.0,
              973.0,
              921.0,
              923.0,
              959.0,
              1050.0
            ],
            "perCapita": [
              100.29778520015924,
              103.17790324867424,
              107.80871957872765,
              102.10566403463575,
              99.55754800639227,
              90.58264422654221,
              97.9638174760126,
              100.24116979854026,
              97.15381178852364,
              109.56121465440361,
              103.23480257044571,
              102.9322877286424,
              105.79524042768195,
              115.00006023812679
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2531",
          "code": 2531,
          "name": "土豆及制品",
          "originalName": "Potatoes and products",
          "category": "vegetable",
          "itemId": "potato",
          "scope": "奥地利全国",
          "values": {
            "production": [
              672.0,
              816.0,
              665.0,
              604.0,
              751.0,
              536.0,
              767.0,
              653.0,
              698.0,
              751.0,
              886.0,
              770.0,
              686.0,
              594.0
            ],
            "imports": [
              184.0,
              194.0,
              180.0,
              202.0,
              238.0,
              281.0,
              270.0,
              268.0,
              317.0,
              296.0,
              281.0,
              270.0,
              268.0,
              267.0
            ],
            "exports": [
              141.0,
              141.0,
              147.0,
              104.0,
              144.0,
              117.0,
              126.0,
              145.0,
              139.0,
              146.0,
              141.0,
              169.0,
              148.0,
              132.0
            ],
            "domestic": [
              728.0,
              835.0,
              717.0,
              710.0,
              836.0,
              718.0,
              843.0,
              739.0,
              826.0,
              987.0,
              1053.0,
              914.0,
              806.0,
              729.0
            ],
            "food": [
              482.0,
              493.0,
              466.0,
              495.0,
              503.0,
              481.0,
              498.0,
              494.0,
              507.0,
              497.0,
              496.0,
              456.0,
              409.0,
              388.0
            ],
            "perCapita": [
              57.62042010307122,
              58.73753614503048,
              55.26827648370416,
              58.36293729462436,
              58.845413216469225,
              55.6452769769691,
              56.992968578334434,
              56.14414725677878,
              57.342238156905104,
              55.96292259325652,
              55.59659291524546,
              50.85278787027186,
              45.12018074548688,
              42.49526035466019
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2546",
          "code": 2546,
          "name": "干豆",
          "originalName": "Beans",
          "category": "vegetable",
          "itemId": "dry-bean",
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              1.0,
              2.0,
              2.0
            ],
            "food": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              2.0,
              1.0
            ],
            "perCapita": [
              0.11954444004786559,
              0.11914307534488942,
              0.11860145168176858,
              0.11790492382752396,
              0.1169888930744915,
              0.11568664652176529,
              0.11444371200468761,
              0.11365211995299349,
              0.11310106145346174,
              0.11260145390997288,
              0.1120899050710594,
              0.11151927164533303,
              0.22063658066252753,
              0.10952386689345409
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2547",
          "code": 2547,
          "name": "干豌豆",
          "originalName": "Peas",
          "category": "vegetable",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              31.0,
              36.0,
              15.0,
              18.0,
              17.0,
              19.0,
              19.0,
              15.0,
              17.0,
              13.0,
              13.0,
              13.0,
              14.0,
              15.0
            ],
            "imports": [
              4.0,
              1.0,
              2.0,
              4.0,
              3.0,
              4.0,
              3.0,
              7.0,
              7.0,
              8.0,
              6.0,
              7.0,
              9.0,
              9.0
            ],
            "exports": [
              4.0,
              3.0,
              3.0,
              2.0,
              2.0,
              6.0,
              7.0,
              4.0,
              3.0,
              3.0,
              3.0,
              4.0,
              4.0,
              4.0
            ],
            "domestic": [
              31.0,
              34.0,
              17.0,
              18.0,
              19.0,
              18.0,
              18.0,
              17.0,
              21.0,
              20.0,
              16.0,
              16.0,
              20.0,
              19.0
            ],
            "food": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              3.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "perCapita": [
              0.11954444004786559,
              0.11914307534488942,
              0.11860145168176858,
              0.11790492382752396,
              0.1169888930744915,
              0.11568664652176529,
              0.11444371200468761,
              0.11365211995299349,
              0.11310106145346174,
              0.3378043617299187,
              0.2241798101421188,
              0.22303854329066605,
              0.22063658066252753,
              0.21904773378690817
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2549",
          "code": 2549,
          "name": "其他豆类及制品（统计组）",
          "originalName": "Pulses, Other and products",
          "category": "vegetable",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              30.0,
              34.0,
              28.0,
              26.0,
              36.0,
              39.0,
              43.0,
              37.0,
              32.0,
              28.0,
              32.0,
              34.0,
              32.0,
              34.0
            ],
            "imports": [
              3.0,
              3.0,
              4.0,
              5.0,
              4.0,
              6.0,
              11.0,
              13.0,
              13.0,
              13.0,
              16.0,
              16.0,
              14.0,
              15.0
            ],
            "exports": [
              1.0,
              2.0,
              2.0,
              2.0,
              1.0,
              3.0,
              3.0,
              3.0,
              4.0,
              2.0,
              3.0,
              2.0,
              3.0,
              3.0
            ],
            "domestic": [
              34.0,
              37.0,
              33.0,
              32.0,
              39.0,
              43.0,
              50.0,
              46.0,
              41.0,
              40.0,
              46.0,
              47.0,
              44.0,
              46.0
            ],
            "food": [
              5.0,
              6.0,
              3.0,
              4.0,
              4.0,
              4.0,
              4.0,
              5.0,
              6.0,
              9.0,
              12.0,
              12.0,
              12.0,
              12.0
            ],
            "perCapita": [
              0.597722200239328,
              0.7148584520693365,
              0.3558043550453058,
              0.47161969531009584,
              0.467955572297966,
              0.46274658608706115,
              0.45777484801875046,
              0.5682605997649675,
              0.6786063687207704,
              1.013413085189756,
              1.3450788608527127,
              1.3382312597439963,
              1.3238194839751651,
              1.3142864027214491
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2733",
          "code": 2733,
          "name": "猪肉及制品",
          "originalName": "Pigmeat",
          "category": "meat",
          "itemId": "pork",
          "scope": "奥地利全国",
          "values": {
            "production": [
              546.0,
              544.0,
              530.0,
              529.0,
              527.0,
              529.0,
              515.0,
              508.0,
              510.0,
              502.0,
              503.0,
              502.0,
              478.0,
              454.0
            ],
            "imports": [
              195.0,
              212.0,
              160.0,
              199.0,
              233.0,
              214.0,
              210.0,
              203.0,
              195.0,
              199.0,
              176.0,
              186.0,
              190.0,
              199.0
            ],
            "exports": [
              287.0,
              312.0,
              283.0,
              282.0,
              304.0,
              281.0,
              292.0,
              279.0,
              273.0,
              283.0,
              274.0,
              299.0,
              285.0,
              280.0
            ],
            "domestic": [
              565.0,
              550.0,
              408.0,
              446.0,
              408.0,
              458.0,
              429.0,
              429.0,
              429.0,
              418.0,
              406.0,
              389.0,
              383.0,
              373.0
            ],
            "food": [
              565.0,
              550.0,
              408.0,
              446.0,
              408.0,
              459.0,
              431.0,
              432.0,
              429.0,
              418.0,
              406.0,
              389.0,
              383.0,
              373.0
            ],
            "perCapita": [
              67.54260862704406,
              65.52869143968918,
              48.38939228616158,
              52.58559602707569,
              47.731468374392534,
              53.10017075349027,
              49.32523987402036,
              49.097715819693185,
              48.52035536353509,
              47.067407734368665,
              45.50850145885011,
              43.38099667003455,
              42.25190519687402,
              40.85240235125838
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2731",
          "code": 2731,
          "name": "牛肉及制品（FAO Bovine Meat）",
          "originalName": "Bovine Meat",
          "category": "meat",
          "itemId": "beef",
          "scope": "奥地利全国",
          "values": {
            "production": [
              227.0,
              222.0,
              222.0,
              229.0,
              223.0,
              230.0,
              228.0,
              227.0,
              234.0,
              230.0,
              218.0,
              214.0,
              210.0,
              205.0
            ],
            "imports": [
              44.0,
              45.0,
              45.0,
              42.0,
              50.0,
              51.0,
              58.0,
              62.0,
              57.0,
              64.0,
              59.0,
              55.0,
              60.0,
              60.0
            ],
            "exports": [
              125.0,
              122.0,
              119.0,
              125.0,
              134.0,
              135.0,
              126.0,
              130.0,
              122.0,
              129.0,
              123.0,
              123.0,
              122.0,
              121.0
            ],
            "domestic": [
              146.0,
              146.0,
              147.0,
              146.0,
              120.0,
              123.0,
              140.0,
              136.0,
              149.0,
              144.0,
              134.0,
              127.0,
              129.0,
              126.0
            ],
            "food": [
              146.0,
              146.0,
              147.0,
              146.0,
              120.0,
              123.0,
              140.0,
              136.0,
              149.0,
              144.0,
              134.0,
              127.0,
              129.0,
              126.0
            ],
            "perCapita": [
              17.45348824698838,
              17.394889000353857,
              17.43441339721998,
              17.2141188788185,
              14.03866716893898,
              14.22945752217713,
              16.022119680656267,
              15.456688313607113,
              16.8520581565658,
              16.214609363036097,
              15.02004727952196,
              14.162947498957294,
              14.231059452733025,
              13.800007228575215
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2734",
          "code": 2734,
          "name": "禽肉及制品（含鸡鸭等）",
          "originalName": "Poultry Meat",
          "category": "meat",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              134.0,
              138.0,
              134.0,
              130.0,
              135.0,
              137.0,
              147.0,
              148.0,
              152.0,
              132.0,
              143.0,
              151.0,
              152.0,
              149.0
            ],
            "imports": [
              100.0,
              99.0,
              108.0,
              105.0,
              112.0,
              109.0,
              111.0,
              110.0,
              114.0,
              113.0,
              100.0,
              109.0,
              121.0,
              122.0
            ],
            "exports": [
              67.0,
              66.0,
              68.0,
              67.0,
              72.0,
              71.0,
              73.0,
              78.0,
              83.0,
              87.0,
              83.0,
              92.0,
              82.0,
              85.0
            ],
            "domestic": [
              169.0,
              169.0,
              172.0,
              175.0,
              175.0,
              174.0,
              193.0,
              172.0,
              183.0,
              158.0,
              157.0,
              164.0,
              183.0,
              178.0
            ],
            "food": [
              158.0,
              157.0,
              160.0,
              159.0,
              164.0,
              164.0,
              159.0,
              161.0,
              165.0,
              139.0,
              142.0,
              147.0,
              164.0,
              160.0
            ],
            "perCapita": [
              18.888021527562763,
              18.70546282914764,
              18.976232269082974,
              18.74688288857631,
              19.186178464216606,
              18.972610029569505,
              18.196550208745332,
              18.29799131243195,
              18.661675139821188,
              15.65160209348623,
              15.916766520090434,
              16.393332931863956,
              18.092199614327257,
              17.523818702952653
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2732",
          "code": 2732,
          "name": "羊与山羊肉",
          "originalName": "Mutton & Goat Meat",
          "category": "meat",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              7.0,
              7.0,
              7.0,
              8.0,
              8.0,
              7.0,
              7.0,
              7.0,
              7.0,
              8.0,
              7.0,
              7.0,
              7.0,
              8.0
            ],
            "imports": [
              3.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              3.0,
              3.0,
              3.0,
              3.0,
              2.0,
              1.0,
              2.0,
              2.0
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              9.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              9.0,
              9.0,
              9.0,
              9.0
            ],
            "food": [
              9.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              10.0,
              9.0,
              9.0,
              9.0,
              9.0
            ],
            "perCapita": [
              1.0758999604307904,
              1.1914307534488942,
              1.1860145168176859,
              1.1790492382752396,
              1.1698889307449152,
              1.1568664652176528,
              1.1444371200468761,
              1.136521199529935,
              1.1310106145346175,
              1.126014539099729,
              1.0088091456395345,
              1.0036734448079974,
              0.9928646129813739,
              0.9857148020410867
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2761",
          "code": 2761,
          "name": "淡水鱼（统计组）",
          "originalName": "Freshwater Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              3.0,
              3.0,
              3.0,
              4.0,
              4.0,
              4.0,
              4.0,
              4.0,
              4.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0
            ],
            "imports": [
              35.0,
              39.0,
              42.0,
              43.0,
              44.0,
              42.0,
              44.0,
              43.0,
              45.0,
              47.0,
              42.0,
              45.0,
              45.0,
              45.0
            ],
            "exports": [
              5.0,
              8.0,
              11.0,
              12.0,
              10.0,
              9.0,
              11.0,
              11.0,
              12.0,
              13.0,
              12.0,
              13.0,
              13.0,
              13.0
            ],
            "domestic": [
              33.0,
              35.0,
              35.0,
              35.0,
              37.0,
              37.0,
              36.0,
              37.0,
              38.0,
              38.0,
              34.0,
              37.0,
              37.0,
              37.0
            ],
            "food": [
              33.0,
              35.0,
              35.0,
              35.0,
              37.0,
              37.0,
              36.0,
              36.0,
              38.0,
              38.0,
              34.0,
              37.0,
              37.0,
              37.0
            ],
            "perCapita": [
              3.9449665215795644,
              4.170007637071129,
              4.151050808861901,
              4.126672333963339,
              4.328589043756185,
              4.280405921305316,
              4.119973632168755,
              4.091476318307765,
              4.297840335231546,
              4.27885524857897,
              3.8110567724160194,
              4.126213050877322,
              4.081776742256759,
              4.052383075057802
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2762",
          "code": 2762,
          "name": "底栖海鱼（统计组）",
          "originalName": "Demersal Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              24.0,
              27.0,
              27.0,
              27.0,
              28.0,
              28.0,
              27.0,
              27.0,
              27.0,
              27.0,
              26.0,
              28.0,
              28.0,
              28.0
            ],
            "exports": [
              2.0,
              3.0,
              3.0,
              2.0,
              2.0,
              3.0,
              2.0,
              2.0,
              2.0,
              2.0,
              3.0,
              6.0,
              6.0,
              6.0
            ],
            "domestic": [
              22.0,
              24.0,
              24.0,
              25.0,
              26.0,
              25.0,
              25.0,
              25.0,
              25.0,
              25.0,
              23.0,
              22.0,
              22.0,
              22.0
            ],
            "food": [
              22.0,
              24.0,
              24.0,
              25.0,
              26.0,
              25.0,
              25.0,
              25.0,
              25.0,
              25.0,
              23.0,
              22.0,
              22.0,
              22.0
            ],
            "perCapita": [
              2.629977681053043,
              2.859433808277346,
              2.846434840362446,
              2.947623095688099,
              3.0417112199367793,
              2.892166163044132,
              2.8610928001171905,
              2.8413029988248373,
              2.8275265363365434,
              2.8150363477493223,
              2.5780678166343662,
              2.4534239761973264,
              2.4270023872878026,
              2.40952507165599
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2763",
          "code": 2763,
          "name": "中上层海鱼（统计组）",
          "originalName": "Pelagic Fish",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              67.0,
              77.0,
              71.0,
              72.0,
              66.0,
              64.0,
              60.0,
              64.0,
              65.0,
              67.0,
              67.0,
              74.0,
              74.0,
              74.0
            ],
            "exports": [
              5.0,
              6.0,
              8.0,
              11.0,
              4.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              4.0,
              4.0,
              4.0
            ],
            "domestic": [
              62.0,
              71.0,
              63.0,
              61.0,
              62.0,
              61.0,
              58.0,
              61.0,
              62.0,
              64.0,
              63.0,
              70.0,
              70.0,
              70.0
            ],
            "food": [
              33.0,
              38.0,
              36.0,
              37.0,
              33.0,
              34.0,
              33.0,
              35.0,
              33.0,
              33.0,
              32.0,
              40.0,
              40.0,
              40.0
            ],
            "perCapita": [
              3.9449665215795644,
              4.527436863105798,
              4.269652260543669,
              4.362482181618387,
              3.8606334714582196,
              3.9333459817400196,
              3.7766424961546914,
              3.9778241983547717,
              3.7323350279642376,
              3.715847979029105,
              3.5868769622739007,
              4.460770865813322,
              4.412731613250551,
              4.380954675738163
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2764",
          "code": 2764,
          "name": "其他海鱼（统计组）",
          "originalName": "Marine Fish, Other",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              8.0,
              9.0,
              8.0,
              8.0,
              9.0,
              8.0,
              10.0,
              7.0,
              8.0,
              8.0,
              7.0,
              6.0,
              6.0,
              6.0
            ],
            "exports": [
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0
            ],
            "domestic": [
              7.0,
              6.0,
              7.0,
              6.0,
              7.0,
              7.0,
              9.0,
              6.0,
              7.0,
              7.0,
              6.0,
              5.0,
              5.0,
              5.0
            ],
            "food": [
              7.0,
              6.0,
              7.0,
              6.0,
              7.0,
              7.0,
              9.0,
              6.0,
              7.0,
              7.0,
              6.0,
              5.0,
              5.0,
              5.0
            ],
            "perCapita": [
              0.8368110803350591,
              0.7148584520693365,
              0.83021016177238,
              0.7074295429651438,
              0.8189222515214406,
              0.809806525652357,
              1.0299934080421886,
              0.6819127197179609,
              0.7917074301742322,
              0.7882101773698102,
              0.6725394304263563,
              0.5575963582266652,
              0.5515914516563188,
              0.5476193344672704
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2765",
          "code": 2765,
          "name": "甲壳类（含虾蟹）",
          "originalName": "Crustaceans",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              12.0,
              11.0,
              11.0,
              11.0,
              13.0,
              14.0,
              15.0,
              17.0,
              17.0,
              20.0,
              17.0,
              18.0,
              18.0,
              18.0
            ],
            "exports": [
              1.0,
              2.0,
              2.0,
              2.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0
            ],
            "domestic": [
              11.0,
              10.0,
              9.0,
              9.0,
              11.0,
              12.0,
              14.0,
              15.0,
              15.0,
              18.0,
              16.0,
              17.0,
              17.0,
              17.0
            ],
            "food": [
              11.0,
              10.0,
              9.0,
              9.0,
              11.0,
              12.0,
              14.0,
              15.0,
              15.0,
              18.0,
              16.0,
              17.0,
              17.0,
              17.0
            ],
            "perCapita": [
              1.3149888405265215,
              1.1914307534488942,
              1.0674130651359173,
              1.0611443144477157,
              1.2868778238194065,
              1.3882397582611834,
              1.6022119680656266,
              1.7047817992949021,
              1.6965159218019261,
              2.026826170379512,
              1.7934384811369504,
              1.8958276179706615,
              1.8754109356314839,
              1.8619057371887195
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2766",
          "code": 2766,
          "name": "头足类（含鱿鱼等）",
          "originalName": "Cephalopods",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              3.0,
              3.0,
              3.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "food": [
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "perCapita": [
              0.11954444004786559,
              0.11914307534488942,
              0.23720290336353717,
              0.23580984765504792,
              0.233977786148983,
              0.23137329304353058,
              0.22888742400937523,
              0.22730423990598697,
              0.2262021229069235,
              0.22520290781994576,
              0.2241798101421188,
              0.22303854329066605,
              0.22063658066252753,
              0.21904773378690817
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2767",
          "code": 2767,
          "name": "其他软体动物（含贝类）",
          "originalName": "Molluscs, Other",
          "category": "aquatic",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              6.0,
              6.0,
              4.0,
              5.0,
              5.0,
              5.0,
              6.0,
              5.0,
              5.0,
              5.0,
              4.0,
              5.0,
              5.0,
              5.0
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              6.0,
              6.0,
              4.0,
              4.0,
              4.0,
              5.0,
              5.0,
              5.0,
              4.0,
              5.0,
              4.0,
              5.0,
              5.0,
              5.0
            ],
            "food": [
              6.0,
              6.0,
              4.0,
              4.0,
              4.0,
              5.0,
              5.0,
              5.0,
              4.0,
              5.0,
              4.0,
              5.0,
              5.0,
              5.0
            ],
            "perCapita": [
              0.7172666402871936,
              0.7148584520693365,
              0.47440580672707433,
              0.47161969531009584,
              0.467955572297966,
              0.5784332326088264,
              0.5722185600234381,
              0.5682605997649675,
              0.452404245813847,
              0.5630072695498645,
              0.4483596202842376,
              0.5575963582266652,
              0.5515914516563188,
              0.5476193344672704
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2557",
          "code": 2557,
          "name": "葵花籽",
          "originalName": "Sunflower seed",
          "category": "oil",
          "itemId": "sunflower",
          "scope": "奥地利全国",
          "values": {
            "production": [
              66.0,
              74.0,
              53.0,
              51.0,
              58.0,
              38.0,
              60.0,
              51.0,
              60.0,
              65.0,
              57.0,
              75.0,
              57.0,
              66.0
            ],
            "imports": [
              97.0,
              108.0,
              98.0,
              142.0,
              119.0,
              123.0,
              135.0,
              147.0,
              170.0,
              157.0,
              156.0,
              164.0,
              157.0,
              146.0
            ],
            "exports": [
              50.0,
              39.0,
              45.0,
              54.0,
              51.0,
              54.0,
              54.0,
              54.0,
              70.0,
              76.0,
              65.0,
              69.0,
              65.0,
              62.0
            ],
            "domestic": [
              114.0,
              116.0,
              130.0,
              141.0,
              126.0,
              107.0,
              138.0,
              145.0,
              151.0,
              145.0,
              153.0,
              161.0,
              143.0,
              167.0
            ],
            "food": [
              5.0,
              5.0,
              5.0,
              8.0,
              null,
              8.0,
              8.0,
              2.0,
              8.0,
              9.0,
              7.0,
              9.0,
              9.0,
              8.0
            ],
            "perCapita": [
              0.597722200239328,
              0.5957153767244471,
              0.5930072584088429,
              0.9432393906201917,
              null,
              0.9254931721741223,
              0.9155496960375009,
              0.22730423990598697,
              0.904808491627694,
              1.013413085189756,
              0.7846293354974158,
              1.0036734448079974,
              0.9928646129813739,
              0.8761909351476327
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": [
              2014
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2573",
          "code": 2573,
          "name": "葵花籽油",
          "originalName": "Sunflowerseed Oil",
          "category": "oil",
          "itemId": "sunflower",
          "scope": "奥地利全国",
          "values": {
            "production": [
              39.0,
              45.0,
              48.0,
              45.0,
              49.0,
              39.0,
              52.0,
              54.0,
              57.0,
              72.0,
              71.0,
              65.0,
              81.0,
              64.0
            ],
            "imports": [
              50.0,
              63.0,
              72.0,
              70.0,
              62.0,
              51.0,
              43.0,
              46.0,
              65.0,
              69.0,
              76.0,
              106.0,
              73.0,
              71.0
            ],
            "exports": [
              53.0,
              68.0,
              54.0,
              51.0,
              44.0,
              39.0,
              38.0,
              36.0,
              47.0,
              55.0,
              41.0,
              51.0,
              46.0,
              44.0
            ],
            "domestic": [
              43.0,
              39.0,
              56.0,
              54.0,
              45.0,
              50.0,
              49.0,
              51.0,
              60.0,
              87.0,
              78.0,
              83.0,
              103.0,
              95.0
            ],
            "food": [
              21.0,
              17.0,
              31.0,
              31.0,
              21.0,
              22.0,
              22.0,
              22.0,
              22.0,
              52.0,
              44.0,
              47.0,
              55.0,
              52.0
            ],
            "perCapita": [
              2.5104332410051775,
              2.02543228086312,
              3.6766450021348263,
              3.6550526386532427,
              2.4567667545643217,
              2.5451062234788364,
              2.5177616641031277,
              2.5003466389658566,
              2.4882233519761585,
              5.85527560331859,
              4.931955823126613,
              5.241405767330653,
              6.067505968219507,
              5.695241078459612
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2558",
          "code": 2558,
          "name": "油菜籽与芥籽",
          "originalName": "Rape and Mustardseed",
          "category": "oil",
          "itemId": "rapeseed",
          "scope": "奥地利全国",
          "values": {
            "production": [
              171.0,
              180.0,
              149.0,
              197.0,
              198.0,
              112.0,
              142.0,
              117.0,
              121.0,
              107.0,
              100.0,
              87.0,
              92.0,
              87.0
            ],
            "imports": [
              307.0,
              255.0,
              222.0,
              254.0,
              246.0,
              266.0,
              309.0,
              275.0,
              292.0,
              307.0,
              335.0,
              344.0,
              260.0,
              334.0
            ],
            "exports": [
              78.0,
              65.0,
              71.0,
              85.0,
              52.0,
              65.0,
              40.0,
              85.0,
              55.0,
              96.0,
              87.0,
              60.0,
              26.0,
              35.0
            ],
            "domestic": [
              400.0,
              370.0,
              323.0,
              366.0,
              392.0,
              314.0,
              363.0,
              354.0,
              357.0,
              343.0,
              355.0,
              369.0,
              320.0,
              365.0
            ],
            "food": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              1.0,
              null,
              1.0,
              1.0,
              null,
              1.0
            ],
            "perCapita": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              0.11310106145346174,
              null,
              0.1120899050710594,
              0.11151927164533303,
              null,
              0.10952386689345409
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2019,
              2022
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2574",
          "code": 2574,
          "name": "菜籽油与芥籽油",
          "originalName": "Rape and Mustard Oil",
          "category": "oil",
          "itemId": "rapeseed",
          "scope": "奥地利全国",
          "values": {
            "production": [
              156.0,
              137.0,
              130.0,
              145.0,
              151.0,
              146.0,
              150.0,
              153.0,
              143.0,
              140.0,
              145.0,
              150.0,
              136.0,
              134.0
            ],
            "imports": [
              170.0,
              150.0,
              131.0,
              139.0,
              169.0,
              164.0,
              124.0,
              130.0,
              117.0,
              118.0,
              136.0,
              155.0,
              113.0,
              137.0
            ],
            "exports": [
              46.0,
              39.0,
              27.0,
              57.0,
              25.0,
              25.0,
              60.0,
              66.0,
              75.0,
              84.0,
              99.0,
              93.0,
              64.0,
              75.0
            ],
            "domestic": [
              262.0,
              242.0,
              233.0,
              229.0,
              276.0,
              270.0,
              224.0,
              227.0,
              210.0,
              177.0,
              181.0,
              210.0,
              183.0,
              196.0
            ],
            "food": [
              78.0,
              78.0,
              79.0,
              79.0,
              80.0,
              80.0,
              81.0,
              82.0,
              83.0,
              68.0,
              74.0,
              75.0,
              74.0,
              76.0
            ],
            "perCapita": [
              9.324466323733516,
              9.293159876901374,
              9.369514682859718,
              9.314488982374392,
              9.359111445959321,
              9.254931721741222,
              9.269940672379697,
              9.319473836145466,
              9.387388100637324,
              7.656898865878156,
              8.294652975258396,
              8.363945373399977,
              8.163553484513518,
              8.32381388390251
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2571",
          "code": 2571,
          "name": "大豆油",
          "originalName": "Soyabean Oil",
          "category": "oil",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              3.0,
              6.0,
              7.0,
              8.0,
              9.0,
              13.0,
              13.0,
              12.0,
              24.0,
              27.0,
              30.0,
              30.0,
              32.0,
              35.0
            ],
            "imports": [
              13.0,
              27.0,
              7.0,
              4.0,
              4.0,
              11.0,
              16.0,
              14.0,
              9.0,
              16.0,
              12.0,
              11.0,
              10.0,
              2.0
            ],
            "exports": [
              4.0,
              2.0,
              5.0,
              5.0,
              4.0,
              10.0,
              18.0,
              9.0,
              8.0,
              9.0,
              8.0,
              7.0,
              6.0,
              6.0
            ],
            "domestic": [
              12.0,
              26.0,
              11.0,
              10.0,
              9.0,
              14.0,
              11.0,
              15.0,
              17.0,
              33.0,
              34.0,
              33.0,
              35.0,
              32.0
            ],
            "food": [
              9.0,
              9.0,
              9.0,
              9.0,
              8.0,
              10.0,
              9.0,
              10.0,
              10.0,
              23.0,
              22.0,
              21.0,
              23.0,
              22.0
            ],
            "perCapita": [
              1.0758999604307904,
              1.0722876781040047,
              1.0674130651359173,
              1.0611443144477157,
              0.935911144595932,
              1.1568664652176528,
              1.0299934080421886,
              1.136521199529935,
              1.1310106145346175,
              2.5898334399293765,
              2.4659779115633067,
              2.3419047045519936,
              2.5373206776190664,
              2.40952507165599
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2580",
          "code": 2580,
          "name": "橄榄油",
          "originalName": "Olive Oil",
          "category": "oil",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              10.0,
              10.0,
              10.0,
              9.0,
              11.0,
              11.0,
              11.0,
              11.0,
              11.0,
              12.0,
              11.0,
              12.0,
              11.0,
              10.0
            ],
            "exports": [
              1.0,
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              4.0,
              3.0,
              2.0,
              2.0,
              1.0,
              1.0
            ],
            "domestic": [
              8.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              8.0,
              9.0,
              10.0,
              9.0,
              9.0
            ],
            "food": [
              8.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              8.0,
              9.0,
              10.0,
              9.0,
              9.0
            ],
            "perCapita": [
              0.9563555203829247,
              1.0722876781040047,
              1.0674130651359173,
              1.0611443144477157,
              1.0529000376704236,
              1.0411798186958876,
              1.0299934080421886,
              1.0228690795769413,
              1.0179095530811557,
              0.900811631279783,
              1.0088091456395345,
              1.1151927164533304,
              0.9928646129813739,
              0.9857148020410867
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2640",
          "code": 2640,
          "name": "胡椒（FAO Pepper）",
          "originalName": "Pepper",
          "category": "spice",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              2.0,
              2.0,
              2.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              4.0,
              4.0,
              4.0,
              4.0,
              4.0,
              4.0
            ],
            "exports": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "domestic": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "food": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "perCapita": [
              0.11954444004786559,
              0.11914307534488942,
              0.11860145168176858,
              0.11790492382752396,
              0.1169888930744915,
              0.11568664652176529,
              0.11444371200468761,
              0.11365211995299349,
              0.2262021229069235,
              0.22520290781994576,
              0.2241798101421188,
              0.22303854329066605,
              0.22063658066252753,
              0.21904773378690817
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2641",
          "code": 2641,
          "name": "Pimento（FAO香料条目）",
          "originalName": "Pimento",
          "category": "spice",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              3.0,
              4.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              4.0,
              4.0,
              4.0,
              4.0,
              5.0,
              5.0
            ],
            "exports": [
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "domestic": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              3.0,
              3.0,
              3.0,
              3.0
            ],
            "food": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              3.0,
              3.0,
              3.0,
              3.0
            ],
            "perCapita": [
              0.23908888009573118,
              0.23828615068977885,
              0.23720290336353717,
              0.23580984765504792,
              0.233977786148983,
              0.23137329304353058,
              0.22888742400937523,
              0.22730423990598697,
              0.2262021229069235,
              0.22520290781994576,
              0.33626971521317817,
              0.33455781493599906,
              0.3309548709937913,
              0.3285716006803623
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2642",
          "code": 2642,
          "name": "丁香",
          "originalName": "Cloves",
          "category": "spice",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "exports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "food": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "perCapita": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "exports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "food": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2645",
          "code": 2645,
          "name": "其他香料（统计组）",
          "originalName": "Spices, Other",
          "category": "spice",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              8.0,
              8.0,
              8.0,
              9.0,
              9.0,
              9.0,
              11.0,
              12.0,
              12.0,
              13.0,
              13.0,
              13.0,
              13.0,
              12.0
            ],
            "exports": [
              4.0,
              3.0,
              3.0,
              4.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              6.0,
              6.0,
              6.0,
              6.0,
              5.0
            ],
            "domestic": [
              4.0,
              4.0,
              5.0,
              5.0,
              4.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              6.0,
              7.0,
              6.0
            ],
            "food": [
              4.0,
              4.0,
              5.0,
              5.0,
              4.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              5.0,
              6.0,
              7.0,
              6.0
            ],
            "perCapita": [
              0.47817776019146235,
              0.4765723013795577,
              0.5930072584088429,
              0.5895246191376198,
              0.467955572297966,
              0.5784332326088264,
              0.5722185600234381,
              0.5682605997649675,
              0.5655053072673087,
              0.5630072695498645,
              0.560449525355297,
              0.6691156298719981,
              0.7722280323188463,
              0.6571432013607246
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2848",
          "code": 2848,
          "name": "奶类与乳品（不含黄油，乳品折算）",
          "originalName": "Milk - Excluding Butter",
          "category": "dairy",
          "itemId": "milk",
          "scope": "奥地利全国",
          "values": {
            "production": [
              3286.0,
              3337.0,
              3413.0,
              3425.0,
              3525.0,
              3569.0,
              3660.0,
              3748.0,
              3860.0,
              3820.0,
              3852.0,
              3867.0,
              3980.0,
              3717.0
            ],
            "imports": [
              1550.0,
              1559.0,
              1673.0,
              1674.0,
              1971.0,
              2350.0,
              2479.0,
              2355.0,
              2500.0,
              1984.0,
              2008.0,
              1975.0,
              1994.0,
              2039.0
            ],
            "exports": [
              1978.0,
              2019.0,
              2171.0,
              2165.0,
              2426.0,
              2791.0,
              2846.0,
              2803.0,
              2898.0,
              2046.0,
              2093.0,
              2158.0,
              2322.0,
              2338.0
            ],
            "domestic": [
              2795.0,
              2819.0,
              2890.0,
              2897.0,
              3091.0,
              3130.0,
              3278.0,
              3281.0,
              3532.0,
              3415.0,
              3583.0,
              3684.0,
              3652.0,
              3426.0
            ],
            "food": [
              1374.0,
              1405.0,
              1469.0,
              1456.0,
              1644.0,
              1655.0,
              1754.0,
              1703.0,
              1776.0,
              1788.0,
              1936.0,
              1994.0,
              1924.0,
              1975.0
            ],
            "perCapita": [
              164.25406062576732,
              167.39602085956963,
              174.22553252051804,
              171.6695690928749,
              192.32974021446404,
              191.46139999352155,
              200.73427085622208,
              193.5495602799479,
              200.86748514134806,
              201.33139959103153,
              217.006056217571,
              222.36942766079406,
              212.25239059735148,
              216.3096371145718
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2740",
          "code": 2740,
          "name": "黄油与酥油",
          "originalName": "Butter, Ghee",
          "category": "dairy",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              34.0,
              35.0,
              36.0,
              35.0,
              34.0,
              35.0,
              35.0,
              37.0,
              38.0,
              36.0,
              38.0,
              36.0,
              34.0,
              34.0
            ],
            "imports": [
              14.0,
              13.0,
              14.0,
              14.0,
              16.0,
              16.0,
              17.0,
              18.0,
              17.0,
              19.0,
              18.0,
              19.0,
              20.0,
              21.0
            ],
            "exports": [
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              4.0,
              5.0,
              4.0,
              4.0,
              4.0,
              4.0,
              5.0,
              5.0,
              4.0
            ],
            "domestic": [
              46.0,
              47.0,
              47.0,
              47.0,
              48.0,
              46.0,
              48.0,
              51.0,
              52.0,
              48.0,
              51.0,
              50.0,
              50.0,
              51.0
            ],
            "food": [
              46.0,
              47.0,
              47.0,
              47.0,
              48.0,
              46.0,
              48.0,
              51.0,
              52.0,
              48.0,
              51.0,
              50.0,
              50.0,
              51.0
            ],
            "perCapita": [
              5.499044242201817,
              5.5997245412098025,
              5.574268229043123,
              5.5415314198936265,
              5.615466867575592,
              5.321585740001203,
              5.4932981762250055,
              5.796258117602668,
              5.88125519558001,
              5.404869787678699,
              5.716585158624029,
              5.575963582266652,
              5.515914516563188,
              5.585717211566158
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2743",
          "code": 2743,
          "name": "奶油",
          "originalName": "Cream",
          "category": "dairy",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              64.0,
              65.0,
              65.0,
              73.0,
              73.0,
              74.0,
              79.0,
              81.0,
              82.0,
              77.0,
              76.0,
              74.0,
              76.0,
              78.0
            ],
            "imports": [
              10.0,
              12.0,
              12.0,
              13.0,
              12.0,
              11.0,
              7.0,
              8.0,
              10.0,
              10.0,
              8.0,
              6.0,
              6.0,
              8.0
            ],
            "exports": [
              15.0,
              10.0,
              13.0,
              16.0,
              16.0,
              15.0,
              17.0,
              14.0,
              15.0,
              12.0,
              12.0,
              13.0,
              18.0,
              18.0
            ],
            "domestic": [
              58.0,
              67.0,
              64.0,
              70.0,
              69.0,
              69.0,
              69.0,
              75.0,
              76.0,
              74.0,
              72.0,
              66.0,
              63.0,
              68.0
            ],
            "food": [
              56.0,
              65.0,
              61.0,
              67.0,
              66.0,
              67.0,
              66.0,
              72.0,
              74.0,
              74.0,
              72.0,
              66.0,
              63.0,
              68.0
            ],
            "perCapita": [
              6.694488642680473,
              7.744299897417812,
              7.234688552587883,
              7.899629896444106,
              7.721266942916439,
              7.751005316958274,
              7.553284992309383,
              8.18295263661553,
              8.369478547556168,
              8.332507589337993,
              8.070473165116276,
              7.36027192859198,
              6.950052290869617,
              7.447622948754878
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2744",
          "code": 2744,
          "name": "蛋类",
          "originalName": "Eggs",
          "category": "eggs",
          "itemId": "egg",
          "scope": "奥地利全国",
          "values": {
            "production": [
              95.0,
              103.0,
              107.0,
              107.0,
              110.0,
              111.0,
              121.0,
              125.0,
              128.0,
              130.0,
              135.0,
              139.0,
              143.0,
              141.0
            ],
            "imports": [
              53.0,
              43.0,
              43.0,
              43.0,
              40.0,
              41.0,
              41.0,
              55.0,
              64.0,
              62.0,
              50.0,
              36.0,
              44.0,
              42.0
            ],
            "exports": [
              21.0,
              18.0,
              17.0,
              12.0,
              16.0,
              23.0,
              28.0,
              32.0,
              36.0,
              41.0,
              39.0,
              29.0,
              35.0,
              24.0
            ],
            "domestic": [
              127.0,
              127.0,
              133.0,
              136.0,
              136.0,
              129.0,
              134.0,
              148.0,
              156.0,
              150.0,
              146.0,
              146.0,
              153.0,
              158.0
            ],
            "food": [
              113.0,
              112.0,
              117.0,
              120.0,
              120.0,
              116.0,
              122.0,
              134.0,
              138.0,
              132.0,
              127.0,
              127.0,
              134.0,
              138.0
            ],
            "perCapita": [
              13.508521725408812,
              13.344024438627615,
              13.876369846766924,
              14.148590859302875,
              14.03866716893898,
              13.419650996524773,
              13.962132864571888,
              15.229384073701127,
              15.60794648057772,
              14.86339191611642,
              14.235417944024544,
              14.162947498957294,
              14.782650904389344,
              15.114293631296665
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2551",
          "code": 2551,
          "name": "坚果及制品（统计组）",
          "originalName": "Nuts and products",
          "category": "nuts",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              3.0,
              4.0,
              3.0,
              3.0,
              3.0,
              5.0,
              1.0,
              3.0,
              6.0,
              3.0,
              3.0,
              3.0,
              5.0,
              2.0
            ],
            "imports": [
              102.0,
              100.0,
              105.0,
              120.0,
              131.0,
              144.0,
              146.0,
              139.0,
              141.0,
              165.0,
              185.0,
              164.0,
              152.0,
              147.0
            ],
            "exports": [
              45.0,
              41.0,
              38.0,
              44.0,
              59.0,
              89.0,
              82.0,
              72.0,
              73.0,
              73.0,
              68.0,
              73.0,
              66.0,
              59.0
            ],
            "domestic": [
              60.0,
              63.0,
              69.0,
              72.0,
              82.0,
              60.0,
              65.0,
              69.0,
              74.0,
              95.0,
              120.0,
              93.0,
              91.0,
              90.0
            ],
            "food": [
              60.0,
              62.0,
              69.0,
              72.0,
              82.0,
              62.0,
              65.0,
              69.0,
              73.0,
              95.0,
              119.0,
              93.0,
              90.0,
              90.0
            ],
            "perCapita": [
              7.172666402871935,
              7.386870671383144,
              8.183500166042032,
              8.489154515581726,
              9.593089232108303,
              7.172572084349448,
              7.438841280304695,
              7.84199627675655,
              8.256377486102707,
              10.697138121447423,
              13.338698703456068,
              10.371292263015972,
              9.928646129813739,
              9.857148020410868
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2537",
          "code": 2537,
          "name": "制糖甜菜",
          "originalName": "Sugar beet",
          "category": "sweetener",
          "itemId": "sugar-beet",
          "scope": "奥地利全国",
          "values": {
            "production": [
              3132.0,
              3456.0,
              3114.0,
              3466.0,
              4244.0,
              2853.0,
              3534.0,
              2994.0,
              2150.0,
              1965.0,
              2092.0,
              3017.0,
              2710.0,
              2676.0
            ],
            "imports": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              95.0,
              1.0,
              50.0,
              28.0,
              null,
              3.0
            ],
            "exports": [
              124.0,
              228.0,
              139.0,
              65.0,
              34.0,
              314.0,
              163.0,
              73.0,
              30.0,
              11.0,
              null,
              null,
              null,
              null
            ],
            "domestic": [
              3175.0,
              3414.0,
              3143.0,
              3587.0,
              3575.0,
              2926.0,
              3584.0,
              3520.0,
              2116.0,
              2004.0,
              2165.0,
              3037.0,
              2739.0,
              2696.0
            ],
            "food": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "perCapita": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2022
            ],
            "exports": [
              2020,
              2021,
              2022,
              2023
            ],
            "domestic": [],
            "food": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2542",
          "code": 2542,
          "name": "糖（原糖当量）",
          "originalName": "Sugar (Raw Equivalent)",
          "category": "sweetener",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              465.0,
              544.0,
              464.0,
              522.0,
              514.0,
              426.0,
              521.0,
              516.0,
              353.0,
              340.0,
              369.0,
              518.0,
              467.0,
              460.0
            ],
            "imports": [
              253.0,
              237.0,
              225.0,
              213.0,
              219.0,
              219.0,
              222.0,
              211.0,
              208.0,
              219.0,
              352.0,
              322.0,
              272.0,
              302.0
            ],
            "exports": [
              266.0,
              203.0,
              238.0,
              213.0,
              365.0,
              272.0,
              269.0,
              263.0,
              149.0,
              105.0,
              123.0,
              175.0,
              194.0,
              166.0
            ],
            "domestic": [
              615.0,
              663.0,
              639.0,
              609.0,
              731.0,
              656.0,
              658.0,
              660.0,
              678.0,
              698.0,
              670.0,
              583.0,
              725.0,
              606.0
            ],
            "food": [
              348.0,
              352.0,
              349.0,
              339.0,
              343.0,
              364.0,
              381.0,
              374.0,
              370.0,
              322.0,
              296.0,
              286.0,
              294.0,
              297.0
            ],
            "perCapita": [
              41.601465136657225,
              41.938362521401075,
              41.391906636937236,
              39.96976917753062,
              40.12719032455059,
              42.10993933392256,
              43.60305427378598,
              42.505892862419564,
              41.847392737780844,
              36.25766815901127,
              33.178611901033584,
              31.894511690565245,
              32.43357735739155,
              32.52858846735587
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2745",
          "code": 2745,
          "name": "蜂蜜",
          "originalName": "Honey",
          "category": "sweetener",
          "itemId": "honey",
          "scope": "奥地利全国",
          "values": {
            "production": [
              5.0,
              6.0,
              5.0,
              5.0,
              4.0,
              5.0,
              5.0,
              6.0,
              4.0,
              4.0,
              4.0,
              4.0,
              4.0,
              6.0
            ],
            "imports": [
              7.0,
              6.0,
              9.0,
              9.0,
              8.0,
              7.0,
              7.0,
              8.0,
              7.0,
              7.0,
              7.0,
              7.0,
              7.0,
              6.0
            ],
            "exports": [
              2.0,
              2.0,
              3.0,
              2.0,
              2.0,
              3.0,
              3.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              1.0,
              1.0
            ],
            "domestic": [
              10.0,
              10.0,
              10.0,
              10.0,
              11.0,
              10.0,
              10.0,
              11.0,
              9.0,
              9.0,
              9.0,
              9.0,
              9.0,
              11.0
            ],
            "food": [
              10.0,
              10.0,
              10.0,
              10.0,
              11.0,
              10.0,
              10.0,
              11.0,
              9.0,
              8.0,
              9.0,
              10.0,
              9.0,
              11.0
            ],
            "perCapita": [
              1.195444400478656,
              1.1914307534488942,
              1.1860145168176859,
              1.1790492382752396,
              1.2868778238194065,
              1.1568664652176528,
              1.1444371200468761,
              1.2501733194829283,
              1.0179095530811557,
              0.900811631279783,
              1.0088091456395345,
              1.1151927164533304,
              0.9928646129813739,
              1.204762535827995
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2655",
          "code": 2655,
          "name": "葡萄酒",
          "originalName": "Wine",
          "category": "drink",
          "itemId": "wine",
          "scope": "奥地利全国",
          "values": {
            "production": [
              174.0,
              281.0,
              215.0,
              239.0,
              200.0,
              227.0,
              195.0,
              249.0,
              247.0,
              232.0,
              240.0,
              246.0,
              253.0,
              233.0
            ],
            "imports": [
              88.0,
              96.0,
              93.0,
              91.0,
              89.0,
              81.0,
              92.0,
              94.0,
              79.0,
              83.0,
              83.0,
              80.0,
              84.0,
              97.0
            ],
            "exports": [
              69.0,
              51.0,
              52.0,
              50.0,
              52.0,
              50.0,
              50.0,
              51.0,
              55.0,
              67.0,
              73.0,
              81.0,
              76.0,
              74.0
            ],
            "domestic": [
              267.0,
              272.0,
              262.0,
              283.0,
              284.0,
              283.0,
              237.0,
              293.0,
              272.0,
              254.0,
              253.0,
              244.0,
              248.0,
              257.0
            ],
            "food": [
              262.0,
              265.0,
              255.0,
              274.0,
              276.0,
              275.0,
              230.0,
              285.0,
              264.0,
              239.0,
              237.0,
              243.0,
              245.0,
              245.0
            ],
            "perCapita": [
              31.320643292540787,
              31.572914966395697,
              30.243370178850988,
              32.30594912874157,
              32.288934488559654,
              31.813827793485455,
              26.322053761078152,
              32.39085418660314,
              29.8586802237139,
              26.91174748448352,
              26.565307501841076,
              27.099183009815928,
              27.02798113115962,
              26.83334738889625
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2656",
          "code": 2656,
          "name": "啤酒",
          "originalName": "Beer",
          "category": "drink",
          "itemId": "beer",
          "scope": "奥地利全国",
          "values": {
            "production": [
              875.0,
              897.0,
              893.0,
              907.0,
              921.0,
              911.0,
              929.0,
              968.0,
              980.0,
              998.0,
              956.0,
              985.0,
              1029.0,
              1011.0
            ],
            "imports": [
              61.0,
              67.0,
              69.0,
              60.0,
              66.0,
              66.0,
              74.0,
              69.0,
              87.0,
              83.0,
              63.0,
              65.0,
              75.0,
              79.0
            ],
            "exports": [
              72.0,
              73.0,
              72.0,
              85.0,
              89.0,
              90.0,
              109.0,
              117.0,
              126.0,
              100.0,
              80.0,
              93.0,
              89.0,
              89.0
            ],
            "domestic": [
              876.0,
              903.0,
              874.0,
              908.0,
              897.0,
              887.0,
              894.0,
              919.0,
              940.0,
              953.0,
              926.0,
              953.0,
              953.0,
              944.0
            ],
            "food": [
              876.0,
              903.0,
              874.0,
              908.0,
              897.0,
              887.0,
              894.0,
              919.0,
              940.0,
              953.0,
              926.0,
              953.0,
              953.0,
              944.0
            ],
            "perCapita": [
              104.72092948193026,
              107.58619703643514,
              103.65766876986574,
              107.05767083539176,
              104.93903708781889,
              102.6140554648058,
              102.31267853219073,
              104.44629823680101,
              106.31499776625404,
              107.30918557620416,
              103.795252095801,
              106.27786587800237,
              105.13333068569436,
              103.39053034742066
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2658",
          "code": 2658,
          "name": "其他酒精饮料（统计组）",
          "originalName": "Beverages, Alcoholic",
          "category": "drink",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              19.0,
              24.0,
              20.0,
              23.0,
              20.0,
              20.0,
              17.0,
              20.0,
              20.0,
              33.0,
              28.0,
              11.0,
              15.0,
              53.0
            ],
            "imports": [
              29.0,
              29.0,
              32.0,
              35.0,
              33.0,
              26.0,
              27.0,
              27.0,
              28.0,
              29.0,
              29.0,
              37.0,
              46.0,
              42.0
            ],
            "exports": [
              12.0,
              13.0,
              10.0,
              11.0,
              14.0,
              16.0,
              23.0,
              26.0,
              30.0,
              33.0,
              34.0,
              29.0,
              38.0,
              97.0
            ],
            "domestic": [
              36.0,
              40.0,
              42.0,
              47.0,
              39.0,
              29.0,
              22.0,
              20.0,
              18.0,
              17.0,
              20.0,
              19.0,
              18.0,
              17.0
            ],
            "food": [
              36.0,
              40.0,
              42.0,
              47.0,
              39.0,
              29.0,
              22.0,
              20.0,
              18.0,
              17.0,
              20.0,
              19.0,
              18.0,
              17.0
            ],
            "perCapita": [
              4.303599841723162,
              4.765723013795577,
              4.98126097063428,
              5.5415314198936265,
              4.562566829905169,
              3.354912749131193,
              2.5177616641031277,
              2.27304239905987,
              2.0358191061623114,
              1.914224716469539,
              2.241798101421188,
              2.1188661612613275,
              1.9857292259627477,
              1.8619057371887195
            ]
          },
          "ambiguousZeroYears": {
            "production": [],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2630",
          "code": 2630,
          "name": "咖啡及制品",
          "originalName": "Coffee and products",
          "category": "drink",
          "itemId": "coffee",
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              117.0,
              144.0,
              149.0,
              171.0,
              154.0,
              143.0,
              148.0,
              138.0,
              137.0,
              129.0,
              123.0,
              130.0,
              129.0,
              119.0
            ],
            "exports": [
              47.0,
              43.0,
              38.0,
              50.0,
              47.0,
              51.0,
              45.0,
              49.0,
              44.0,
              45.0,
              44.0,
              54.0,
              67.0,
              62.0
            ],
            "domestic": [
              104.0,
              107.0,
              106.0,
              109.0,
              112.0,
              106.0,
              106.0,
              90.0,
              93.0,
              84.0,
              79.0,
              76.0,
              62.0,
              57.0
            ],
            "food": [
              104.0,
              107.0,
              106.0,
              108.0,
              112.0,
              106.0,
              106.0,
              90.0,
              93.0,
              84.0,
              79.0,
              75.0,
              62.0,
              56.0
            ],
            "perCapita": [
              12.432621764978022,
              12.748309061903168,
              12.57175387826747,
              12.733731773372588,
              13.10275602434305,
              12.26278453130712,
              12.131033472496886,
              10.228690795769413,
              10.518398715171942,
              9.458522128437723,
              8.855102500613691,
              8.363945373399977,
              6.839734000538353,
              6.133336546033429
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        },
        {
          "id": "2635",
          "code": 2635,
          "name": "茶（含马黛茶）",
          "originalName": "Tea (including mate)",
          "category": "drink",
          "itemId": null,
          "scope": "奥地利全国",
          "values": {
            "production": [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            "imports": [
              4.0,
              4.0,
              5.0,
              6.0,
              9.0,
              5.0,
              5.0,
              5.0,
              6.0,
              6.0,
              5.0,
              7.0,
              6.0,
              5.0
            ],
            "exports": [
              3.0,
              2.0,
              2.0,
              2.0,
              4.0,
              2.0,
              2.0,
              1.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0,
              2.0
            ],
            "domestic": [
              1.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              5.0,
              4.0,
              3.0
            ],
            "food": [
              1.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              3.0,
              5.0,
              4.0,
              3.0
            ],
            "perCapita": [
              0.11954444004786559,
              0.35742922603466826,
              0.3558043550453058,
              0.3537147714825719,
              0.3509666792234745,
              0.34705993956529585,
              0.34333113601406284,
              0.34095635985898043,
              0.3393031843603852,
              0.3378043617299187,
              0.33626971521317817,
              0.5575963582266652,
              0.44127316132505506,
              0.3285716006803623
            ]
          },
          "ambiguousZeroYears": {
            "production": [
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ],
            "imports": [],
            "exports": [],
            "domestic": [],
            "food": []
          },
          "sourceIds": [
            "fao-supply-complete"
          ]
        }
      ],
      "notes": [
        "同年供需表全部来自同一份FAO FBS公开副本，2010–2023；不把2024年农业产量与2023年贸易拼成供需平衡。",
        "总量单位为千吨，源数多已取整；人均量根据同版Food和人口估算，只显示近似值，不是FAO逐项公布的人均值或实测摄入。",
        "奶类为乳品折算，鱼类也不等同零售净鱼肉。制糖甜菜、糖、油籽与成品油必须分别看，不能按相同重量含义直接相加。",
        "国内供给还受库存变动及调整影响，不一定等于产量加进口减出口；食用可供量也只是国内供给的一种用途。",
        "副本中的国内供给负值原样保留并标记，属于需回溯核查的统计平衡，不表示消费者吃了负数量；不据此推算进口依赖率。",
        "副本转换脚本将未记录值填成0，无法区分真实零与缺值；本页将这些零值标为未确认，不擅自当作零产量或零进口。",
        "部分行是统计组或含制品，不能据此分配到某一种生鲜食材；禽肉不等于鸡肉，坚果合计不等于核桃，Pimento条目不等于匈牙利红椒粉单品。",
        "本专题仍未取得可比的国家或城市逐产品实测消费及摄入数据。食用可供量是消费参考，不能更名为实际消费量。"
      ],
      "sources": [
        {
          "id": "fao-supply-complete",
          "title": "FAOSTAT完整食物平衡表 · AgriFoodPy公开整理副本",
          "publisher": "FAO；公开整理：FixOurFood / AgriFoodPy",
          "url": "https://github.com/FixOurFood/agrifoodpy-data/tree/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food",
          "version": "3251e9fe9a8fb24a471e13c98f058f897c1f0135",
          "accessed": "2026-10-24",
          "year": "2010–2023",
          "scope": "奥地利全国",
          "verified": true,
          "note": "已读取固定版本食物平衡表、人口及转换方法；核对 Austria / FAO代码11、千吨单位与字段。原副本缺失填0，本站将这些0保留为未确认；未直接读取FAO实时API。人均量由Food与同版人口推算，不是实测摄入。",
          "variables": [
            {
              "id": "balance",
              "label": "完整食物平衡表（千吨）",
              "unit": "1000 t",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/data/FAOSTAT_FBS.nc",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "1666b8d6ab076ecd46d6f9072588d3026b4d3db1dcdd1751d3c03370d734e031"
            },
            {
              "id": "population",
              "label": "同版FAO人口（人）",
              "unit": "persons",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/population/data/Population_FAOSTAT_FBS.nc",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "d8fcdfc437b344d83dba6c30ff86b6abf65bfee35a0ec49b316ca20e3856536a"
            },
            {
              "id": "notebook",
              "label": "字段、单位与整理方法",
              "unit": "方法说明",
              "url": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "metadataUrl": "https://raw.githubusercontent.com/FixOurFood/agrifoodpy-data/3251e9fe9a8fb24a471e13c98f058f897c1f0135/agrifoodpy_data/food/FAOSTAT/Reading_FAOSTAT_data_FBS.ipynb",
              "sha256": "90fb5a9cae1303a508e4b06b4cfddf6a554c987f65d5e72bce509b0bc74146c4"
            }
          ]
        }
      ]
    },
    "energy": {
      "id": "at-energy",
      "title": "奥地利的水与能源",
      "checkedDate": "2026-10-24",
      "snapshotYear": 2024,
      "scope": "奥地利全国",
      "intro": "分别看全国发电、燃料消费，以及 Eurostat 的电、气、油年度报告进出口；各图保留原有单位和核算体系。全国量不分摊为城市用量。",
      "sources": [
        {
          "id": "energy-owid",
          "title": "Our World in Data · Energy Data（已读 Austria 行）",
          "url": "https://raw.githubusercontent.com/owid/energy-data/e7897aed55b514b8d16e0a3d8f1518789ac3de31/owid-energy-data.csv",
          "accessed": "2026-10-24",
          "verified": true,
          "kind": "dataset",
          "upstream": "电力：Ember；化石燃料消费：Energy Institute Statistical Review of World Energy 2025。",
          "version": "e7897aed55b514b8d16e0a3d8f1518789ac3de31",
          "license": "OWID 汇编 CC BY；上游数据适用其原始许可。",
          "sha256": "266f2e2baad7975351bc9bb4aa061d22b1da9fe4c47d51d2ac6071e01e171f76",
          "note": "",
          "scope": "奥地利全国"
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
          "scope": "奥地利全国",
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
          "scope": "奥地利全国",
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
          "scope": "奥地利全国",
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
        "geo": "奥地利全国",
        "unit": "TWh",
        "generation": 78.47,
        "demand": 71.69,
        "netImports": -6.78,
        "netImportShare": -9.457,
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
            "value": 0.0,
            "share": 0.0,
            "color": "#745f9b",
            "column": "nuclear_electricity"
          },
          {
            "id": "solar",
            "label": "太阳能",
            "value": 8.14,
            "share": 10.373391104880847,
            "color": "#d8a83b",
            "column": "solar_electricity"
          },
          {
            "id": "gas",
            "label": "天然气",
            "value": 7.54,
            "share": 9.608767681916657,
            "color": "#bc7253",
            "column": "gas_electricity"
          },
          {
            "id": "coal",
            "label": "煤",
            "value": 0.0,
            "share": 0.0,
            "color": "#697584",
            "column": "coal_electricity"
          },
          {
            "id": "bioenergy",
            "label": "生物能源",
            "value": 4.67,
            "share": 5.951318975404614,
            "color": "#7e965f",
            "column": "biofuel_electricity"
          },
          {
            "id": "wind",
            "label": "风电",
            "value": 9.14,
            "share": 11.647763476487832,
            "color": "#64a4ad",
            "column": "wind_electricity"
          },
          {
            "id": "oil",
            "label": "石油",
            "value": 3.27,
            "share": 4.167197655154836,
            "color": "#a28175",
            "column": "oil_electricity"
          },
          {
            "id": "hydro",
            "label": "水电",
            "value": 45.71,
            "share": 58.25156110615522,
            "color": "#5385ab",
            "column": "hydro_electricity"
          },
          {
            "id": "other-renewables",
            "label": "其他可再生能源（不含生物能源）",
            "value": 0.0,
            "share": 0.0,
            "color": "#a1bba5",
            "column": "other_renewable_exc_biofuel_electricity"
          }
        ]
      },
      "latestElectricity": {
        "year": 2025,
        "geo": "奥地利全国",
        "unit": "TWh",
        "generation": 73.22,
        "demand": 75.84,
        "netImports": 2.62,
        "netImportShare": 3.455,
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
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 69.03,
          "demand": 71.23,
          "netImports": 2.2,
          "netImportShare": 3.089,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 2.04,
          "nuclear": 0.0,
          "gas": 9.95
        },
        {
          "year": 2021,
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 66.67,
          "demand": 74.21,
          "netImports": 7.54,
          "netImportShare": 10.16,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 2.78,
          "nuclear": 0.0,
          "gas": 10.62
        },
        {
          "year": 2022,
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 64.47,
          "demand": 73.17,
          "netImports": 8.7,
          "netImportShare": 11.89,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 3.79,
          "nuclear": 0.0,
          "gas": 10.85
        },
        {
          "year": 2023,
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 70.98,
          "demand": 70.91,
          "netImports": -0.07,
          "netImportShare": -0.099,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 6.89,
          "nuclear": 0.0,
          "gas": 7.5
        },
        {
          "year": 2024,
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 78.47,
          "demand": 71.69,
          "netImports": -6.78,
          "netImportShare": -9.457,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 8.14,
          "nuclear": 0.0,
          "gas": 7.54
        },
        {
          "year": 2025,
          "geo": "奥地利全国",
          "unit": "TWh",
          "generation": 73.22,
          "demand": 75.84,
          "netImports": 2.62,
          "netImportShare": 3.455,
          "imports": null,
          "exports": null,
          "sourceIds": [
            "energy-owid",
            "energy-codebook"
          ],
          "definition": "OWID / Ember 电力需求 = 国内发电 + 跨境净进口；不能与 Eurostat 不同核算范围的毛发电量强行拼成同一平衡。",
          "solar": 10.31,
          "nuclear": 0.0,
          "gas": 8.74
        }
      ],
      "primaryEnergy": {
        "year": 2024,
        "geo": "奥地利全国",
        "unit": "TWh",
        "consumption": 412.337,
        "sourceIds": [
          "energy-owid",
          "energy-codebook"
        ]
      },
      "fuelConsumption": {
        "year": 2024,
        "geo": "奥地利全国",
        "unit": "TWh",
        "items": [
          {
            "id": "gas",
            "label": "天然气",
            "value": 68.219,
            "column": "gas_consumption"
          },
          {
            "id": "oil",
            "label": "石油",
            "value": 131.877,
            "column": "oil_consumption"
          },
          {
            "id": "coal",
            "label": "煤",
            "value": 27.965,
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
          "scope": "奥地利全国",
          "unit": "GWh",
          "values": {
            "IMP": 18922.952,
            "EXP": 25702.784,
            "GEP": 82406.73
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
          "scope": "奥地利全国",
          "unit": "TJ（总热值）",
          "values": {
            "IPRD": 21448.437,
            "IMP": 209736.493,
            "EXP": 0.0,
            "IC_CAL": 271926.397,
            "IC_OBS": 271926.398
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
          "scope": "奥地利全国",
          "unit": "千吨",
          "values": {
            "IPRD": 462.53,
            "IMP": 12923.369,
            "EXP": 2358.183,
            "FC": 9969.611
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
          "scope": "奥地利全国",
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
                69.03,
                66.67,
                64.47,
                70.98,
                78.47,
                73.22
              ]
            },
            {
              "name": "电力需求",
              "values": [
                71.23,
                74.21,
                73.17,
                70.91,
                71.69,
                75.84
              ]
            },
            {
              "name": "跨境净进口",
              "values": [
                2.2,
                7.54,
                8.7,
                -0.07,
                -6.78,
                2.62
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
          "scope": "奥地利全国",
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
                85.272,
                90.154,
                79.128,
                68.813,
                68.219
              ]
            },
            {
              "name": "石油",
              "values": [
                133.029,
                140.215,
                135.031,
                134.105,
                131.877
              ]
            },
            {
              "name": "煤",
              "values": [
                29.032,
                30.162,
                28.861,
                27.945,
                27.965
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
          "scope": "奥地利全国",
          "unit": "GWh",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                18922.952
              ],
              "color": "#c16b32"
            },
            {
              "name": "报告出口",
              "values": [
                25702.784
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
          "scope": "奥地利全国",
          "unit": "TJ（总热值）",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                209736.493
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
          "scope": "奥地利全国",
          "unit": "千吨",
          "years": [
            2024
          ],
          "series": [
            {
              "name": "报告进口",
              "values": [
                12923.369
              ],
              "color": "#c16b32"
            },
            {
              "name": "报告出口",
              "values": [
                2358.183
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
          "title": "2024：水电在本国发电中占比最高",
          "text": "奥地利全国发电 78.47 TWh，其中水电 45.71 TWh，约占 58.3%。这是国内发电结构，不是所有消费电量的电源追踪。",
          "scope": "奥地利全国 · 2024",
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
          "title": "阿尔卑斯山与水电",
          "text": "奥地利有山地水系和显著水电生产。水电随来水变化；2024净出口、2025净进口这样的年度差异，应查看下面同一体系的年度曲线。",
          "scope": "地理与城市背景；非市级数量统计",
          "sourceIds": [
            "energy-owid"
          ],
          "verified": false
        },
        {
          "title": "维也纳饮用水与山泉供水",
          "text": "维也纳的山泉输水是理解城市供水的地方线索；不据此估算全国或全城当年用水量。饮用水、河流发电、温泉和瓶装水各有用途。",
          "scope": "地理与城市背景；非市级数量统计",
          "sourceIds": [
            "at-water-reference"
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
    }
  }
};

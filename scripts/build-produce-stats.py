#!/usr/bin/env python3
"""Rebuild the Hungary statistics from a pinned, public OWID data snapshot.

Uses Python's standard HTTPS stack (including the configured proxy and CA trust).
Never extrapolates a missing observation or apportions national data to Budapest.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
from datetime import date
import hashlib
import json
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
COMMIT = "d3f4efb3873ab6ebd5624d66b66d401ab63abb79"
BASE = f"https://raw.githubusercontent.com/owid/owid-grapher-svgs/{COMMIT}/variables/"
YEARS = list(range(2020, 2025))
CROPS = [
    (1199532, "小麦", "wheat"), (1198621, "玉米", "maize"),
    (1197641, "大麦", "barley"), (1199410, "葵花籽", "sunflower"),
    (1199201, "油菜籽", "rapeseed"), (1199386, "制糖甜菜", "sugar-beet"),
    (1199243, "稻米（FAO Rice）", "rice"), (1197505, "苹果", "apple"),
    (1198454, "葡萄", "grape"), (1199148, "土豆", "potato"),
    (1199460, "番茄", "tomato"), (1198790, "奶类生产总量", "milk"),
]
SUPPLY = [
    (1201072, "水果（不含葡萄酒）", None), (1203862, "蔬菜", None),
    (1201769, "奶类（不含黄油）", "milk"), (1201693, "肉类合计", None),
    (1200910, "蛋类", "egg"), (1201006, "鱼与海产合计", None),
    (1201581, "猪肉", "pork"), (1201620, "禽肉", "chicken"),
    (1201508, "牛与水牛肉", "beef"),
]
TRADE = [(1200372, "谷物进口", None), (1200352, "谷物出口", None)]
FISH = [(1293862, "水产养殖", None), (1293865, "捕捞", None)]
ENERGY = [(1293792, "能源净进口 / 能源使用", None)]
ALL = CROPS + SUPPLY + TRADE + FISH + ENERGY


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cache-dir", type=Path, default=Path("/tmp/eurotrip-produce-sources"))
    parser.add_argument("--checked-date", default=date.today().isoformat())
    args = parser.parse_args()
    cache = args.cache_dir / COMMIT
    cache.mkdir(parents=True, exist_ok=True)

    def read_variable(spec):
        variable, label, item = spec
        payload = {}
        for suffix in ("metadata", "data"):
            path = cache / f"{variable}.{suffix}.json"
            if not path.exists():
                with urllib.request.urlopen(BASE + path.name, timeout=45) as response:
                    path.write_bytes(response.read())
            raw = path.read_bytes()
            payload[suffix] = json.loads(raw)
            payload[suffix + "Sha256"] = hashlib.sha256(raw).hexdigest()
        meta, data = payload["metadata"], payload["data"]
        assert meta["id"] == variable and not meta.get("nonRedistributable"), variable
        entity = next(e for e in meta["dimensions"]["entities"]["values"] if e["name"] == "Hungary")
        assert entity["code"] == "HUN", variable
        assert len(data["years"]) == len(data["values"]) == len(data["entities"]), variable
        observations = {year: value for year, value, code in zip(data["years"], data["values"], data["entities"]) if code == entity["id"]}
        assert observations, variable
        origins = meta.get("origins", [])
        return variable, {
            "label": label, "itemId": item, "observations": observations,
            "source": {
                "id": variable, "label": label, "name": meta["name"], "unit": meta["unit"],
                "url": BASE + f"{variable}.data.json", "metadataUrl": BASE + f"{variable}.metadata.json",
                "dataSha256": payload["dataSha256"], "metadataSha256": payload["metadataSha256"],
                "definition": meta.get("descriptionShort") or meta.get("descriptionFromProducer", ""),
                "datasetVersion": meta.get("datasetVersion"),
                "upstream": [{k: origin[k] for k in ("title", "producer", "datePublished", "urlMain", "license") if k in origin} for origin in origins],
            },
        }

    with ThreadPoolExecutor(max_workers=6) as pool:
        records = dict(pool.map(read_variable, ALL))

    def source(source_id, title, specs, note, year):
        return {"id": source_id, "title": title, "publisher": "Our World in Data；原始机构见各指标",
                "url": f"https://github.com/owid/owid-grapher-svgs/tree/{COMMIT}/variables",
                "version": COMMIT, "accessed": args.checked_date, "year": year, "scope": "匈牙利全国",
                "verified": True, "note": note,
                "variables": [records[spec[0]]["source"] for spec in specs]}

    sources = [
        source("fao-crops", "FAOSTAT · 作物与奶类产量", CROPS,
               "实际读取固定版本的数值与元数据。单位由元数据明确为吨；只提取 Hungary。产量是农业生产量，不能当作城市销售量或食用消费量。上游 FAO QCL 版本 2026-02-25。", "2020–2024"),
        source("fao-fbs", "FAOSTAT · 食物可供量与谷物进出口", SUPPLY + TRADE,
               "实际读取 FAO Food Balances 的 OWID 整理数据与定义，使用同一新版序列2020–2023。人均量是供应链末端可供人类消费量，尚未扣除消费者浪费；谷物进出口是食物平衡表口径，包含相应加工品折算，不是布达佩斯海关或门店销售统计。", "2020–2023"),
        source("fao-fish", "FAO / 世界银行 · 水产养殖与捕捞", FISH,
               "实际读取世界银行 WDI 指标 ER.FSH.AQUA.MT 与 ER.FSH.CAPT.MT 及定义。吨数为生产指标；养殖包括养殖水生生物，捕捞包括商业及其他用途，不能与零售去骨鱼肉重量直接比较。", "2020–2024"),
        source("energy-imports", "IEA / 世界银行 · 能源净进口比例", ENERGY,
               "实际读取 WDI 指标 EG.IMP.CONS.ZS 及定义。净进口＝总进口−总出口；分母为转化前的一次能源使用。该比率不是电力净进口占需求，也不是天然气进口依赖率。", "2020–2023"),
    ]

    def chart(chart_id, title, specs, years, unit, source_id, description, section="supply"):
        return {"id": chart_id, "title": title, "description": description, "scope": "匈牙利全国",
                "unit": unit, "years": years, "section": section, "sourceIds": [source_id], "type": "bar",
                "series": [{"name": spec[1], "variableId": spec[0], "values": [records[spec[0]]["observations"].get(y) for y in years]} for spec in specs]}

    charts = [
        chart("field-crops", "主粮、油料与糖料：农业收获量", CROPS[:7], YEARS, "吨", "fao-crops",
              "籽粒、油籽、甜菜根分别统计原产品重量。甜菜根不是食糖，葵花籽不是葵花油，稻米的农业口径也不等同零售精米；这些作物还可用于饲料与工业。"),
        chart("horticulture", "苹果、葡萄与菜蔬：全国生产量", CROPS[7:11], YEARS, "吨", "fao-crops",
              "展示已核查的四种园艺作物，不代表全部水果蔬菜。全国果园和农田供给城市；当年产量受天气、种植面积和单产等因素影响。"),
        chart("cereal-trade", "粮食出口国，也会进口粮食", TRADE, YEARS[:-1], "吨", "fao-fbs",
              "谷物合计，不含啤酒。进口、出口是两个总流量；出口−进口为净出口，不能把净出口当出口总量，也不能用进口÷产量当全部食物的进口依赖率。"),
        chart("food-availability", "每人一年，平均有多少食物可供消费？", SUPPLY[:6], YEARS[:-1], "千克 / 人 / 年", "fao-fbs",
              "可供量是全国食物平衡表指标，包含尚未扣除的消费者浪费，不是实际摄入或布达佩斯人均消费调查。奶类覆盖乳品折算，鱼类合计淡水与海产；各项并非同一种可食部重量。"),
        chart("meat-availability", "肉类可供量：猪、禽、牛的差别", SUPPLY[6:], YEARS[:-1], "千克 / 人 / 年", "fao-fbs",
              "猪肉包含相应加工制品的平衡表归类；禽肉不只鸡肉。三项并未穷尽全部肉类，不与“肉类合计”重复相加；不是每人实际吃掉的肉量。"),
        chart("inland-fish", "淡水背景：养殖与捕捞的生产量", FISH, YEARS, "吨", "fao-fish",
              "匈牙利是内陆国家。这里是全国养殖和捕捞数据，不是多瑙河市区渔获，也不包含进口海鲜的城市消费量；养殖并非仅鲤鱼。"),
        chart("energy-net-imports", "能源供给，对外依赖到什么程度？", ENERGY, YEARS[:-1], "%", "energy-imports",
              "净能源进口占一次能源使用的比例。正数表示净进口，负数表示净出口；这是全国全部能源口径，不能替代气、油或电力的单项依赖率。", "energy"),
    ]
    item_metrics = []
    for spec in CROPS + [s for s in SUPPLY if s[2]]:
        variable, label, item = spec
        record = records[variable]
        year = max(record["observations"])
        is_crop = spec in CROPS
        item_metrics.append({"itemId": item, "label": label + (" · 全国生产量" if is_crop else " · 全国人均可供量"),
                             "value": record["observations"][year], "year": year, "scope": "匈牙利全国",
                             "unit": "吨" if is_crop else "千克 / 人 / 年", "variableId": variable,
                             "sourceIds": ["fao-crops" if is_crop else "fao-fbs"]})

    energy_source = (ROOT / "data/produce-energy.js").read_text().split(" = ", 1)[1].rstrip().removesuffix(";")
    latest_electricity = json.loads(energy_source)["latestElectricity"]
    stats = {
        "id": "budapest", "updatedAt": args.checked_date,
        "intro": "布达佩斯的日常，由周边田野、匈牙利全国供应链和跨境贸易共同塑造。认识市场里的食材，也追踪支撑这座城市的水、电与燃料。",
        "scopeNote": "城市讲购买与生活，产区讲种养与加工，数字采用标明年份的匈牙利全国统计。本专题未取得可比的布达佩斯逐食材产量、进口量及实测消费量，不按人口分摊全国量。",
        "supplyIntro": "产量覆盖2020–2024，食物可供量与谷物贸易覆盖2020–2023。默认展示各图最新可用年；切换年份或选择一个指标查看历年变化。数量与金额、产量与食用量分开核查。",
        "sources": sources, "charts": charts, "itemMetrics": item_metrics,
        "highlights": [
            {"label": "全国小麦产量", "value": records[1199532]["observations"][2024] / 10000, "unit": "万吨", "year": 2024, "scope": "匈牙利全国", "note": "农业生产口径，非城市消费。", "sourceIds": ["fao-crops"]},
            {"label": "谷物净出口", "value": (records[1200352]["observations"][2023] - records[1200372]["observations"][2023]) / 10000, "unit": "万吨", "year": 2023, "scope": "匈牙利全国", "note": "谷物出口总量减进口总量。", "sourceIds": ["fao-fbs"]},
            {"label": "电力净进口 / 需求", "value": latest_electricity["netImportShare"], "unit": "%", "year": latest_electricity["year"], "scope": "匈牙利全国", "note": "电力口径，来自 Ember / OWID。", "sourceIds": latest_electricity["sourceIds"]},
            {"label": "能源净进口 / 能源使用", "value": records[1293792]["observations"][2023], "unit": "%", "year": 2023, "scope": "匈牙利全国", "note": "一次能源口径，区别于电力。", "sourceIds": ["energy-imports"]},
        ],
        "context": [
            {"title": "在城市购买，不等于城市生产", "text": "布达佩斯是消费与集散市场。苹果果园、红椒产区、谷物田、鱼塘、酒庄与加工厂分布在全国各地；买菜时以摊位或包装的原产国、产地和当季批次为准。", "sourceIds": ["ksh-agriculture", "hu-tourism"]},
            {"title": "谷物可用于面包，也可用于饲料和工业", "text": "玉米、小麦和大麦不只供人直接食用：它们也进入饲料、淀粉、酿造与发酵链。国内供给量包含多种用途，不能直接除以人口当作吃饭数量。", "sourceIds": ["fao-fbs"]},
            {"title": "海鲜与淡水鱼，是两条供应链", "text": "鲤鱼、鲶鱼等有国内淡水养殖背景；三文鱼、鲱鱼、海虾和海贝通过外部供应链进入市场。匈牙利没有海岸，不代表当地没有海产消费，也不能把海鲜进口写成零。", "sourceIds": ["fao-fish", "eu-fishery-hu"]},
        ],
        "notes": [
            "图表只展示本次已读取数值与单位定义的指标；没有取得逐品类进口量的食材，会在详情中说明，不用谷物或全国总量替代。",
            "2024粮食产量与2023谷物贸易不是同一年、同一商品分组，不能直接拼成自给率。进口可以发生在丰收或净出口年份。",
            "食物可供量不等于购买量、实际吃下去的重量或营养摄入。奶类包括乳品折算，鱼肉统计与零售去骨净肉重量也可能不同。",
            "收获月份是一般性产区参考，未逐一核对每个产区的官方日历；天气、品种、温室、储藏和进口都会改变上市时间。",
            "数据有年份且可能被原机构修订；本页固定所读版本并提供元数据、原始链接和下载，不把资料图谱当作实时库存或价格。",
        ],
        "energyContext": [{"title": "全国能源净进口：2023 年约 62.51%", "text": "世界银行 / IEA 指标中，2023 年匈牙利能源净进口占能源使用62.51%。这是总进口减总出口后，占转化前一次能源使用的比例；不能理解为天然气62.51%来自进口，也不等同2025电力净进口占需求17.71%。", "scope": "匈牙利全国 · 2023", "sourceIds": ["energy-imports"]}],
    }
    target = ROOT / "data/produce-stats.js"
    target.write_text("const produceStats = " + json.dumps(stats, ensure_ascii=False, indent=2) + ";\n")
    print(f"Wrote {target.relative_to(ROOT)}: {len(charts)} charts, {len(records)} verified variables, Hungary only.")


if __name__ == "__main__":
    main()

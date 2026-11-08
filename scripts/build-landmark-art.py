"""Export generated art sheets to JPEG and map each scene to its exact card.

Original image generation is performed with the image tool, not this script.
Usage: python scripts/build-landmark-art.py --sources /tmp/eurotrip-art-batch
"""
import argparse
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def export(source, target, width, quality):
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        return
    # Only web-format conversion and proportional scaling; preserve original art.
    subprocess.run(["magick", str(source), "-resize", f"{width}x", "-strip",
                    "-quality", str(quality), str(target)], check=True)
    if target.stat().st_size > 650_000:
        subprocess.run(["magick", str(source), "-resize", f"{width}x", "-strip",
                        "-quality", "68", str(target)], check=True)


def build(sources, partial):
    plan = json.loads((ROOT / "docs/landmark-art-prompts.json").read_text())
    catalog_path = ROOT / "data/landmark-art.js"
    text = catalog_path.read_text()
    catalog = json.loads(re.search(r"const landmarkArt = ([\s\S]*?);\n", text)[1])
    missing = [job["id"] for job in plan["jobs"]
               if not (sources / (job["id"] + ".json")).exists()]
    if missing and not partial:
        raise SystemExit("Missing generation records: " + ", ".join(missing))
    for job in plan["jobs"]:
        record = sources / (job["id"] + ".json")
        if not record.exists():
            continue
        source = Path(json.loads(record.read_text())["source"])
        width, height = map(int, subprocess.check_output(
            ["magick", "identify", "-format", "%w %h", str(source)], text=True).split())
        if width * 2 != height * 3:
            raise ValueError("Art sheet must have a 3:2 ratio: " + job["id"])
        job["sourceFile"] = source.name
        job["sourceDimensions"] = [width, height]
        full = "assets/landmarks/" + job["id"] + ".jpg"
        thumb = "assets/landmarks/" + job["id"] + "-960.jpg"
        export(source, ROOT / full, width, 78)
        export(source, ROOT / thumb, 960, 80)
        for scene in job["panels"]:
            catalog[scene["id"]] = dict(
                src=full, thumbnail=thumb, width=width, height=height,
                thumbnailWidth=960, columns=2, rows=2, panel=scene["panel"],
                style=scene["style"], styleReason=scene["styleReason"],
                alt=scene["alt"], kind="ai-illustration", credit="AI 生成 · Eurotrip",
                generatedAt=plan["date"])
    for alias, source_id in plan["aliases"].items():
        if source_id in catalog:
            catalog[alias] = {**catalog[source_id], "aliasOf": source_id}
    old_reasons = {
        "place-budapest-0": "用多瑙河的蓝绿与新哥特式建筑的暖石色组织水彩画面。",
        "place-vienna-0": "以油画的笔触和暖光表现维也纳历史建筑与彩色瓦屋顶。",
        "place-berlin-0": "借鉴现代主义旅行海报，以几何色块概括古典城门。",
        "place-belgrade-fortress": "以塞尔维亚河岸城市的暖石色与绿荫组织风景油画。",
        "place-bled-island": "从斯洛文尼亚湖泊与山地景色取色，使用轻盈水彩。",
        "place-krakow-wawel": "借鉴波兰旅行海报与装饰艺术的层次和配色。",
        "venue-suzhou-humble-administrator": "从江南文人画与吴门山水取意，描绘园林意境。",
        "venue-wuxi-yuantouzhu": "结合太湖春景与当代水粉，以樱花粉和湖水青绿取色。",
        "venue-xuzhou-han-culture": "结合汉俑与画像石文化线索，采用克制的展览海报构图。",
    }
    for card_id, reason in old_reasons.items():
        catalog[card_id]["styleReason"] = reason
    if not partial and len(catalog) != plan["targetCount"]:
        raise ValueError("Unexpected illustrated-card coverage")
    if not partial:
        plan["coverage"] = dict(cards=len(catalog), distinctScenes=len(catalog)-len(plan["aliases"]),
                                newSheets=len(plan["jobs"]))
        (ROOT / "docs/landmark-art-prompts.json").write_text(
            json.dumps(plan, ensure_ascii=False, indent=2) + "\n")
    catalog_path.write_text(
        "/* Curated AI travel illustrations. Interpretive artwork, not documentary photographs. */\n"
        + "const landmarkArt = " + json.dumps(catalog, ensure_ascii=False, indent=2) + ";\n")
    print(f"Illustrated {len(catalog)} / {plan['targetCount']} cards; "
          f"{len(plan['jobs']) - len(missing)} / {len(plan['jobs'])} new sheets.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sources", required=True, type=Path)
    parser.add_argument("--partial", action="store_true", help="Preview completed batches only")
    options = parser.parse_args()
    build(options.sources, options.partial)

"""Build county selectors and conservative card attribution from saved DataV boundaries.

Use --fetch-missing to save missing originals locally. Geometry is not food evidence:
cards are assigned only by explicit locality/district names already in the catalog.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import html
import json
import math
from pathlib import Path
import time
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
args_parser = argparse.ArgumentParser(description=__doc__)
args_parser.add_argument('--source-dir', type=Path, default=ROOT / 'research/.local/flavor-county-boundaries')
args_parser.add_argument('--fetch-missing', action='store_true')
args = args_parser.parse_args()
args.source_dir.mkdir(parents=True, exist_ok=True)
queue = json.loads((ROOT / 'research/flavors/queue.json').read_text())
raw = (ROOT / 'data/flavors.js').read_text()
catalog = json.loads(raw[raw.index('{'):raw.rfind(';')])
places = queue['places']
sources = {s['adcode']: s for s in queue['boundarySources']}
out = ROOT / 'assets/maps/flavors/counties'
out.mkdir(parents=True, exist_ok=True)


def acquire(source):
    code = source['adcode']
    target = args.source_dir / f'{code}.json'
    if not target.exists():
        if not args.fetch_missing:
            raise FileNotFoundError(target)
        for attempt in range(3):
            try:
                with urlopen(Request(source['url'], headers={'User-Agent': 'Eurotrip/1.0'}), timeout=35) as response:
                    raw = response.read()
                value = json.loads(raw)
                assert value['type'] == 'FeatureCollection' and value['features']
                target.write_bytes(raw)
                break
            except Exception:
                if attempt == 2:
                    raise
                time.sleep(1)
    return code, json.loads(target.read_bytes()), hashlib.sha256(target.read_bytes()).hexdigest()


with ThreadPoolExecutor(max_workers=8) as pool:
    boundaries = {code: (body, sha) for code, body, sha in pool.map(acquire, sources.values())}

registry, evidence = {}, []
for city in [p for p in places if p['level'] == 'city']:
    counties = [p for p in places if p.get('parentAdcode') == city['adcode']]
    entry = dict(province=city['province'], city=city['city'], adcode=city['adcode'],
                 regions=[dict(name=c['name'], adcode=c['adcode']) for c in counties])
    registry[str(city['adcode'])] = entry
    if city['adcode'] not in boundaries:
        continue  # Municipal districts already have a province-level selector; direct counties have no invented children.
    body, sha = boundaries[city['adcode']]
    expected = {c['adcode']: c for c in counties}
    features = [f for f in body['features'] if f['properties']['adcode'] in expected]
    assert {f['properties']['adcode'] for f in features} == set(expected), city['city']
    polygons = lambda g: g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    coordinates = [xy for f in features for poly in polygons(f['geometry']) for ring in poly for xy in ring]
    xmin, xmax = min(p[0] for p in coordinates), max(p[0] for p in coordinates)
    ymin, ymax = min(p[1] for p in coordinates), max(p[1] for p in coordinates)
    cosine = math.cos(math.radians((ymin + ymax) / 2))
    width, height = (xmax - xmin) * cosine, ymax - ymin
    scale = min(570 / width, 410 / height)
    tx, ty = (720 - width * scale) / 2, (520 - height * scale) / 2
    xy = lambda p: (tx + (p[0] - xmin) * cosine * scale, ty + (ymax - p[1]) * scale)
    def shape(geometry):
        paths = []
        for poly in polygons(geometry):
            for ring in poly:
                points = []
                for p in ring:
                    point = tuple(round(v, 1) for v in xy(p))
                    if not points or point != points[-1]:
                        points.append(point)
                if points:
                    paths.append('M' + 'L'.join(f'{x:g},{y:g}' for x, y in points) + 'Z')
        return ''.join(paths)
    code = city['adcode']
    markup = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" role="group" aria-labelledby="flavorCountyTitle-{code}"><title id="flavorCountyTitle-{code}">{html.escape(city["city"])}县区风物地图</title>']
    labels, occupied = [], []
    for feature in features:
        properties = feature['properties']
        county_code = properties['adcode']
        name = html.escape(expected[county_code]['name'])
        x, y = xy(properties.get('centroid') or properties['center'])
        label_width = min(len(name), 12) * 15 + 8
        lx, ly = x, y
        for radius in [0, 24, 46, 68, 92, 116, 140]:
            found = False
            for angle in range(0, 360, 45):
                cx, cy = x + radius * math.cos(math.radians(angle)), y + radius * math.sin(math.radians(angle))
                if not (label_width / 2 + 5 < cx < 715 - label_width / 2 and 16 < cy < 504):
                    continue
                if all(abs(cx - ox) > (label_width + ow) / 2 or abs(cy - oy) > 20 for ox, oy, ow in occupied):
                    lx, ly, found = cx, cy, True
                    break
            if found:
                break
        occupied.append((lx, ly, label_width))
        href = '#flavors/' + city['province']
        markup.append(f'<a href="{href}" data-flavor-county="{county_code}" aria-label="{name}"><title>{name}</title><path class="flavor-region-shape" d="{shape(feature["geometry"])}"/></a>')
        leader = f'<path class="flavor-region-leader" d="M{x:.1f},{y:.1f}L{lx:.1f},{ly:.1f}"/>' if abs(lx-x) + abs(ly-y) > 2 else ''
        labels.append(f'<a href="{href}" data-flavor-county-label="{county_code}" tabindex="-1"><title>{name}</title>{leader}<text class="flavor-region-name" x="{lx:.1f}" y="{ly:.1f}">{name}</text></a>')
    markup.append('<g class="flavor-map-labels" aria-hidden="true">' + ''.join(labels) + '</g></svg>')
    path = out / f'{code}.svg'
    path.write_text(''.join(markup))
    entry['map'] = path.relative_to(ROOT).as_posix()
    evidence.append(dict(adcode=code, city=city['city'], url=sources[code]['url'], checked='2026-11-15',
                         evidenceSha256=sha, previousQueueSha256=sources[code]['evidenceSha256'],
                         features=len(features), svgSha256=hashlib.sha256(path.read_bytes()).hexdigest()))

attribution = {}
for item in catalog['items']:
    county_names = [p for p in places if p['level'] == 'county' and p['province'] == item['province'] and p['city'] == item['city']]
    codes = [p['adcode'] for p in county_names if p['name'] in item.get('locality', '') or item.get('district') == p['name'] or p['name'] in item.get('districts', [])]
    if codes:
        attribution[item['id']] = codes
result = dict(cities=registry, itemCounties=attribution)
(ROOT / 'data/flavor-counties.js').write_text('/* Explicit county names from existing card locality; boundaries are selectors, not food evidence. */\nwindow.flavorCounties=' + json.dumps(result, ensure_ascii=False, separators=(',', ':')) + ';\n')
(ROOT / 'research/flavors/county-maps.json').write_text(json.dumps(dict(checked='2026-11-15', sources=evidence,
    attributionMethod='仅匹配同省同市卡片中明确出现的现有县名、district、districts；不由菜名、地图形状或父级产品推定县域。',
    attributedItems=len(attribution), unspecifiedItems=len(catalog['items'])-len(attribution)), ensure_ascii=False, indent=2) + '\n')
print(f'{len(evidence)} county maps; {sum(len(c["regions"]) for c in registry.values())} counties; {len(attribution)} explicitly attributed cards')

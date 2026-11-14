"""Refresh derived counts and county entry references without changing research status evidence."""
import collections
import json
import pathlib

root = pathlib.Path(__file__).resolve().parents[1]
def read_catalog():
    text = (root / 'data/flavors.js').read_text()
    return json.loads(text[text.index('{'):text.rfind(';')])
def save(path, value):
    (root / path).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')

def refresh():
    data = read_catalog()
    coverage = json.loads((root / 'docs/flavor-city-coverage.json').read_text())
    for row in coverage['cities'] + coverage['countyAreas']:
        items = [i for i in data['items'] if i['province'] == row['province'] and i['city'] == row['city']]
        row.update(count=len(items), types=dict(collections.Counter(i['type'] for i in items)),
                   sourceBackedCount=sum(i.get('verificationStatus') != 'pending' for i in items),
                   pendingCount=sum(i.get('verificationStatus') == 'pending' for i in items))
    coverage['pendingCities'] = [dict(province=r['province'], city=r['city'], count=r['count'],
                                     remainingToTarget=coverage['minimumPerCity']-r['sourceBackedCount'])
                                 for r in coverage['cities'] if r['sourceBackedCount'] < coverage['minimumPerCity']]
    coverage.update(totalItems=len(data['items']), remainingItems=max(0, data['targetItems'] - len(data['items'])),
                    sourceBackedItems=sum(i.get('verificationStatus') != 'pending' for i in data['items']),
                    pendingItems=sum(i.get('verificationStatus') == 'pending' for i in data['items']))
    save('docs/flavor-city-coverage.json', coverage)
    queue = json.loads((root / 'docs/flavor-research-queue.json').read_text())
    for place in queue['places']:
        items = [i for i in data['items'] if i['province'] == place['province'] and i['city'] == place['city'] and i.get('verificationStatus') != 'pending']
        if place['level'] == 'county':
            items = [i for i in items if place['name'] in i.get('locality', '') or i.get('district') == place['name'] or place['name'] in i.get('districts', [])]
        place['entryIds'] = [i['id'] for i in items]
        # Having local entries is not evidence that every research topic was searched.
        place['status'] = 'has-sourced-entries' if items else 'search-leads-pending-review' if place.get('searchEvidence') else 'not-started'
    queue.update(totalItems=len(data['items']), remainingItems=max(0, data['targetItems'] - len(data['items'])))
    if not any(t['topic'] == 'crafts' for t in queue['queryTemplates']):
        queue['queryTemplates'].append({'topic': 'crafts', 'queries': ['{city} {name} 地方物品 传统工艺 特产']})
    save('docs/flavor-research-queue.json', queue)
    print(f"{len(data['items'])} entries; {coverage['sourceBackedItems']} source-backed; {coverage['pendingItems']} pending; {len(coverage['pendingCities'])} city targets unfinished")

if __name__ == '__main__':
    refresh()

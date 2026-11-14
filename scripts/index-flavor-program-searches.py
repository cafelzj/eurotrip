"""Index preserved geography searches without treating snippets as verified foods."""
import collections
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PROGRAM = ROOT / 'research/flavors/program-4000'
RAW = ROOT / 'research/.local/program-4000/geo-search'


def main():
    progress = json.loads((PROGRAM / 'progress.json').read_text())
    queue_path = ROOT / 'research/flavors/queue.json'
    queue = json.loads(queue_path.read_text())
    places = {p['level'] + ':' + str(p['adcode']): p for p in queue['places']}
    index = []
    records_by_place = collections.defaultdict(list)
    for path in sorted(RAW.glob('*.json')):
        record = json.loads(path.read_text())
        response = record.get('response', {})
        body = '\n'.join(x.get('text', '') for x in response.get('content', []))
        links = []
        for title, url in re.findall(r'^([^\n]+?) \((https?://[^\s]+)\)\s*$', body, re.M):
            if url not in [x['url'] for x in links]:
                links.append(dict(title=title.strip(), url=url))
        ident = path.stem
        entry = dict(id=ident, batchId=record['batchId'], queries=record['queries'],
                     recordedAt=record['recordedAt'], status=record['status'], resultLinks=links,
                     responseSha256=hashlib.sha256(path.read_bytes()).hexdigest(),
                     responseFile=path.relative_to(ROOT).as_posix(),
                     scope='同批最多两个地区、四个查询共享结果集合；链接出现不等于逐条正文核实。')
        index.append(entry)
        for query in record['queries']:
            evidence = dict(query=query['q'], program='4000', recordId=ident, checkedAt=record['recordedAt'],
                            status='search-only-combined-keywords' if record['status'] == 'searched' else 'search-error',
                            logFile='research/flavors/program-4000/external-searches.json')
            records_by_place[query['placeId']].append(evidence)
            place = places.get(query['placeId'])
            if place is not None and not any(e.get('recordId') == ident and e.get('query') == query['q'] for e in place.setdefault('searchEvidence', [])):
                place['searchEvidence'].append(evidence)
    for unit in progress['units']:
        evidence = records_by_place[unit['placeId']]
        successful = [e for e in evidence if e['status'] != 'search-error']
        unit['externalStage'] = dict(status='combined-queries-searched' if len(successful) >= 2 else 'partial-or-error' if evidence else 'not-started-in-this-program',
                                     searchRecordIds=list(dict.fromkeys(e['recordId'] for e in evidence)),
                                     queries=[e['query'] for e in evidence],
                                     scope='已执行两组组合关键词查询；不是每个品类的穷尽检索，候选仍需正文与地域核对。')
    summary = dict(units=len(progress['units']), unitsWithTwoSuccessfulQueries=sum(u['externalStage']['status'] == 'combined-queries-searched' for u in progress['units']),
                   queryCount=sum(len(e['queries']) for e in index), searchBatches=len(index),
                   failedBatches=sum(e['status'] != 'searched' for e in index))
    progress['externalSearchSummary'] = summary
    (PROGRAM / 'external-searches.json').write_text(json.dumps(dict(summary=summary, batches=index), ensure_ascii=False, indent=2) + '\n')
    (PROGRAM / 'progress.json').write_text(json.dumps(progress, ensure_ascii=False, indent=2) + '\n')
    queue_path.write_text(json.dumps(queue, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == '__main__':
    main()

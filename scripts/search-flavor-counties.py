"""Search county topics, preserving previous evidence and each run's response bytes.

Search results are leads, not article reviews. Full responses are local-only;
versioned run journals contain queries, links, counts and response fingerprints.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import urllib.parse
import urllib.request
import uuid

ROOT = Path(__file__).resolve().parents[1]
TOPICS = [('local-dishes', '特色菜'), ('local-dishes', '小众菜'), ('local-dishes', '当地菜'),
          ('local-dishes', '小吃'), ('dairy', '乳品'), ('drinks', '饮品'), ('drinks', '奶茶'),
          ('alcohol', '酒'), ('tea', '茶'), ('staples', '面食'), ('seasoning', '调味品'),
          ('ingredients', '特产'), ('crafts', '地方物品 传统工艺 特产')]


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(path)


def search(place, topic, word, city, archive_dir, checked_at, opener=urllib.request.urlopen):
    name = place['name']
    term = name[:-1] if name.endswith(('县', '市', '区')) else name
    query = city + ' ' + term + ' ' + word if term != city else city + ' ' + word
    url = 'https://newssearch.chinadaily.com.cn/rest/search?' + urllib.parse.urlencode(
        dict(keywords=query, sort='relevance', page=0, curType='story'))
    evidence = dict(topic=topic, query=query, url=url, checkedAt=checked_at)
    try:
        with opener(url, timeout=15) as response:
            raw = response.read()
        digest = hashlib.sha256(raw).hexdigest()
        archive_dir.mkdir(parents=True, exist_ok=True)
        response_path = archive_dir / (digest + '.json')
        temporary = response_path.with_suffix('.' + uuid.uuid4().hex + '.tmp')
        temporary.write_bytes(raw)
        temporary.replace(response_path)
        evidence.update(evidenceSha256=digest, responseStorage='local-only', responseFile=str(response_path))
        payload = json.loads(raw)
        hits = [a for a in payload.get('content', []) if all(t in a.get('plainText', '') for t in query.split())]
        links = []
        for hit in hits:
            link = hit.get('url') or hit.get('htmlUrl') or hit.get('sourceUrl')
            if isinstance(link, str) and link.startswith(('https://', 'http://')) and link not in links:
                links.append(link)
        evidence.update(candidateCount=len(hits), resultUrls=links, status='search-only-not-article-review')
    except Exception as error:
        evidence.update(status='search-error', error=str(error))
    return evidence


def run(province, city, place_name, queue_path, archive_dir, records_dir, opener=urllib.request.urlopen):
    queue = json.loads(queue_path.read_text())
    jobs = [p for p in queue['places'] if p['province'] == province and p['city'] == city
            and (not place_name or p['name'] == place_name)]
    if not jobs:
        raise ValueError('No matching research places; queue unchanged')
    now = datetime.now(timezone.utc)
    run_id = now.strftime('%Y%m%dT%H%M%SZ') + '-' + uuid.uuid4().hex[:8]
    journal_path = records_dir / (run_id + '.json')
    journal = dict(runId=run_id, checkedAt=now.isoformat(), province=province, city=city, places=[])
    responses = archive_dir / run_id
    for place in jobs:
        with ThreadPoolExecutor(max_workers=2) as pool:
            evidence = list(pool.map(lambda t: search(place, *t, city, responses, now.isoformat(), opener), TOPICS))
        for item in evidence:
            item.update(runId=run_id, journalFile=str(journal_path))
            for key in ('responseFile', 'journalFile'):
                if key in item:
                    path = Path(item[key])
                    if path.is_relative_to(ROOT):
                        item[key] = path.relative_to(ROOT).as_posix()
        journal['places'].append(dict(adcode=place['adcode'], name=place['name'], searchEvidence=evidence))
        save(journal_path, journal)
        place.setdefault('searchEvidence', []).extend(evidence)
        if place['status'] == 'not-started' and any(e['status'] != 'search-error' for e in evidence):
            place['status'] = 'search-leads-pending-review'
        save(queue_path, queue)
        print(place['name'], len(evidence), 'queries; previous evidence retained', flush=True)
    return journal_path


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--province', required=True)
    p.add_argument('--city', required=True)
    p.add_argument('--place')
    p.add_argument('--queue', type=Path, default=ROOT / 'research/flavors/queue.json')
    p.add_argument('--archive-dir', type=Path, default=ROOT / 'research/.local/search-responses')
    p.add_argument('--records-dir', type=Path, default=ROOT / 'research/flavors/search-runs')
    a = p.parse_args()
    run(a.province, a.city, a.place, a.queue, a.archive_dir, a.records_dir)


if __name__ == '__main__':
    main()

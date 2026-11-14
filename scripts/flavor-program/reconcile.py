"""Index the completed first cross-review without changing initial memory drafts."""
import collections
import hashlib
import json
from pathlib import Path
import re
import unicodedata

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / 'research/flavors/program-4000'
LOCAL = ROOT / 'research/.local/program-4000'


def load(path):
    return json.loads(path.read_text())


def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def key(name):
    return re.sub(r'[\s·、,，。:：\-]', '', unicodedata.normalize('NFKC', name))


def reconcile():
    raw = (ROOT / 'data/flavors.js').read_text()
    data = json.loads(raw[raw.index('{'):raw.rfind(';')])
    batch = load(PUBLIC / 'adoption.json')
    decisions = batch['decisions']
    adoptions = {(x['origin'], x['inputId']): x for x in decisions}
    items = {i['id']: i for i in data['items']}
    lookup = collections.defaultdict(list)
    for item in data['items']:
        for name in [item['name']] + item.get('aliases', []):
            lookup[(item['province'], item['city'], key(name))].append(item['id'])
    primary = load(LOCAL / 'classified-primary.json')['items']
    web = {x['candidateId']: x for x in load(LOCAL / 'memory-cross-review.json')['items']}
    initial = load(PUBLIC / 'knowledge-candidates.json')['candidates']
    primary_by_name = collections.defaultdict(list)
    for source in primary:
        primary_by_name[(source['province'], source['city'], key(source['name']))].append(source)
    rows = []
    for candidate in initial:
        candidate_id = candidate['id']
        matches = list(dict.fromkeys(lookup.get((candidate['province'], candidate['city'], key(candidate['name'])), [])))
        direct = adoptions.get(('memory-web', candidate_id))
        primary_matches = primary_by_name.get((candidate['province'], candidate['city'], key(candidate['name'])), [])
        read_web = web.get(candidate_id, {})
        row = dict(candidateId=candidate_id, name=candidate['name'], province=candidate['province'],
                   city=candidate['city'], locality=candidate['locality'], placeId=candidate['placeId'],
                   initialType=candidate['type'], itemIds=matches,
                   primaryRecordIds=[x['id'] for x in primary_matches],
                   readWebSourceIds=[s['pageId'] for s in read_web.get('sources', [])])
        if candidate['status'] == 'rejected-as-food-lead' or read_web.get('finalDecision') == 'hold':
            row.update(status='held-or-rejected', itemIds=[],
                       reason=read_web.get('holdReason', candidate.get('reason', '非食物、药用/观赏用途未明确，或名称和食品身份需进一步确认。')))
        elif direct:
            row.update(status='cross-reviewed-adopted' if direct['action'] == 'new' else 'cross-reviewed-merged',
                       itemIds=[direct['itemId']], finalType=direct['finalType'],
                       sourceIds=direct['sourceIds'], reason=read_web['reviewScope'])
        elif any(x['reviewStatus'] != 'hold' for x in primary_matches) and matches:
            row.update(status='cross-reviewed-primary-match',
                       finalTypes=sorted({items[i]['type'] for i in matches}),
                       reason='初始名称与公告产品段吻合；采用地域仍以公告保护范围为限。')
        elif matches:
            row.update(status='retained-existing-evidence',
                       reason='已收录同名地方条目并保留原有证据；不能据此伪称本轮新增了独立来源。')
        else:
            row.update(status='pending-more-evidence',
                       reason='本轮尚未形成名称、地域和食品身份足够明确的采用依据；保留初始稿继续查证。')
        rows.append(row)
    # External-only discoveries stay external-only; do not backfill the initial recall.
    initial_names = collections.defaultdict(list)
    for x in initial:
        initial_names[(x['province'], x['city'], key(x['name']))].append(x['id'])
    external = []
    for x in primary:
        decision = adoptions.get(('primary', x['id']))
        external.append(dict(recordId=x['id'], name=x['name'], province=x['province'], city=x['city'],
                             locality=x['locality'], placeIds=x['placeIds'], type=x['type'],
                             knowledgeCandidateIds=initial_names.get((x['province'], x['city'], key(x['name'])), []),
                             status='adopted-source-facts' if decision else 'held',
                             reason=x['reviewNote'], itemId=decision['itemId'] if decision else None,
                             sourceIds=decision['sourceIds'] if decision else [], sectionSha256=x['sectionSha256']))
    counts = dict(collections.Counter(x['status'] for x in rows))
    save(PUBLIC / 'cross-review.json', dict(date='2026-11-14', knowledgeDraftSha256=hashlib.sha256((PUBLIC / 'knowledge-candidates.json').read_bytes()).hexdigest(),
         scope='第一轮名称、地域、类别与可用产品段交叉审阅；未声称逐县逐品类穷尽或每篇全文逐页人工阅读。',
         knowledgeCounts=counts, knowledge=rows, externalPrimary=external,
         webReads=dict(attempted=747, readable=549, failedOrInsufficient=198,
                       method='下载及正文提取；正文名称与地域语境匹配，审核范围限于记录明确列出的事实。')))
    progress = load(PUBLIC / 'progress.json')
    by_candidate = {r['candidateId']: r for r in rows}
    for unit in progress['units']:
        candidates = [by_candidate[i] for i in unit['knowledgeStage']['candidateIds']]
        local = [i['id'] for i in data['items'] if i['province'] == unit['province']
                 and (unit['level'] == 'province' or i['city'] == unit['city'])
                 and (unit['level'] != 'county' or unit['name'] in i.get('locality', '')
                      or i.get('district') == unit['name'] or unit['name'] in i.get('districts', []))]
        pending = [r['candidateId'] for r in candidates if r['status'] == 'pending-more-evidence']
        unit['crossReviewStage'] = dict(status='first-review-recorded' if candidates or local else 'search-results-await-further-reading',
                                       adoptedIds=local, pendingIds=pending,
                                       rejectedIds=[r['candidateId'] for r in candidates if r['status'] == 'held-or-rejected'],
                                       candidateOutcomeCounts=dict(collections.Counter(r['status'] for r in candidates)),
                                       scope='登记第一轮判断及当前地方收录，不据此完成全部品类和后续扩写任务。')
    progress.update(currentItems=len(data['items']), stage='first-cross-review-integrated-continuing-research',
                    explanation=dict(minCharacters=300, maxCharacters=500, counting='正文Unicode字符数，含标点；不含摘要、来源、备注',
                                     display='inline-details', noSeparatePage=True,
                                     expandedCount=batch['explanationCounts']['300-500-characters'],
                                     remainingCount=batch['explanationCounts']['needs-expansion']),
                    crossReviewCounts=counts)
    save(PUBLIC / 'progress.json', progress)
    print(counts)


if __name__ == '__main__':
    reconcile()

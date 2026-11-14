"""Apply the reviewed 2026-11-14 batch, retaining drafts and source fingerprints.

Requires the preserved local research inputs; refuses to run over an applied batch.
This is an explicit editorial import, not a search-results-to-catalog crawler.
"""
import collections
import hashlib
import json
from pathlib import Path
import re
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[2]
LOCAL = ROOT / 'research/.local/program-4000'
PUBLIC = ROOT / 'research/flavors/program-4000'


def read(path):
    return json.loads(path.read_text())


def digest(raw):
    return hashlib.sha256(raw).hexdigest()


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def apply():
    assert not (PUBLIC / 'adoption.json').exists(), 'Batch already applied; do not duplicate it.'
    raw = (ROOT / 'data/flavors.js').read_text()
    data = json.loads(raw[raw.index('{'):raw.rfind(';')])
    assert len(data['items']) == 2112, 'Review the import against a changed baseline first.'
    baseline_ids = [i['id'] for i in data['items']]
    baseline_sha = digest(raw.encode())
    audit = read(ROOT / 'research/flavors/sources.json')
    provinces = {p['id']: p['name'] for p in data['provinces']}
    primary = {x['id']: x for x in read(LOCAL / 'primary-reading-drafts.json')['items']}
    memory = {x['candidateId']: x for x in read(LOCAL / 'memory-cross-review.json')['items']}
    pdfs = {x['id']: x for x in read(LOCAL / 'github-gi/pdf-index.json')['results']}
    pages = {x['id']: x for x in read(LOCAL / 'memory-web-page-index.json')['records']}
    plan = read(LOCAL / 'adoption-plan.json')['decisions']
    source_notes, sources = {}, {}
    verified_directs = set()

    def register(x, origin):
        if origin == 'primary':
            meta = pdfs[x['pdfId']]
            ident = 'program-gi-' + meta['id'][:16]
            url, sha = meta['mirrorUrl'], meta['pdfSha256']
            label = Path(meta['repositoryPath']).stem
            scope = meta['scope']
            method = 'programmatic-pdf-text-extraction-and-product-section-check'
            publisher = '国家知识产权局／原国家质检总局（公告镜像）'
            # The mirror filenames contain a 464/646 transcription error.
            # Actual complete extracted text was compared with the official PDFs.
            direct = None
            if label == '2025年第640号_附件2':
                direct = read(LOCAL / 'official-direct/640-annex2.pdf.json')
                url, sha = direct['url'], direct['sha256']
                official_text = LOCAL / 'official-direct/640-annex2.txt'
                label = '2025年第640号 · 地理标志产品保护要求'
            elif label == '2025年第464号_附件2':
                direct = read(LOCAL / 'official-direct/646-annex2.json')
                url, sha = direct['url'], direct['pdfSha256']
                official_text = LOCAL / 'official-direct/646-annex2.txt'
                label = '2025年第646号 · 地理标志产品保护要求'
            if direct:
                normalize = lambda t: re.sub(r'\s+', '', t)
                if ident not in verified_directs:
                    assert normalize(official_text.read_text()) == normalize((ROOT / meta['textFile']).read_text())
                    verified_directs.add(ident)
                publisher = '国家知识产权局'
                scope = '已读取原站PDF；与固定版本镜像PDF的全文提取结果去除空白后相同，不声称两者PDF字节相同。'
            title = '地理标志公告 · ' + label
            fact = dict(name=x['name'], province=x['province'], city=x['city'], locality=x['locality'],
                        type=x['type'], sectionSha256=x['sectionSha256'],
                        headingOffset=x['headingOffset'], scope=x['scope'],
                        variety=x.get('variety', ''), sensory=x.get('sensory', ''),
                        reviewScope='核对公告中的产品名称、保护地域、分类及提取到的原料、感官、生产信息；不证明任意商家的产品获标、当前许可或实际批次品质。')
            provenance = dict(repositoryCommit=meta['repositoryCommit'], mirrorUrl=meta['mirrorUrl'],
                              mirrorPdfSha256=meta['pdfSha256'], textSha256=meta['textSha256'], scope=scope)
        else:
            meta = pages[x['pageId']]
            assert meta.get('read') and meta['responseSha256'] == x['responseSha256']
            ident = 'program-web-' + meta['id']
            url, sha, title = meta['url'], meta['responseSha256'], meta['title']
            publisher = urlparse(url).hostname
            method = 'programmatic-body-name-and-locality-cross-check'
            fact = dict(name=x['itemName'], province=x['province'], city=x['city'],
                        nameInReadBody=True, localityInContext=True,
                        reviewScope='只核对可读正文中的名称及相邻地域语境；不据此认定完整配方、具体年份、现售或品牌授权。')
            provenance = dict(textSha256=meta['textSha256'], textLength=meta['textLength'],
                              scope='实际下载并提取正文；未用搜索摘要代替正文，不声明逐页人工阅读全文。')
        if ident not in source_notes:
            source_notes[ident] = dict(id=ident, title=title, url=url, checked='2026-11-14',
                                      responseSha256=sha, readMethod=method, provenance=provenance, facts=[])
            sources[ident] = dict(id=ident, url=url, title=title, read=True, evidenceSha256=sha,
                                  readMethod=method, reviewScope=fact['reviewScope'], supportsItems=[])
            data['sources'][ident] = dict(name=title, url=url, publisher=publisher,
                                         kind='government' if origin == 'primary' else 'reference', checked='2026-11-14')
        if fact not in source_notes[ident]['facts']:
            source_notes[ident]['facts'].append(fact)
        return ident

    by_id = {i['id']: i for i in data['items']}
    planned_ids, adopted = {}, []
    category_kinds = dict(dairy='地方乳制品', drinks='地方饮品', alcohol='地方酒', tea='茶或代用茶',
                          dishes='地方菜肴与小吃', staples='地方面食与点心', ingredients='地方食材',
                          seasoning='地方调味品', crafts='地方物品与工艺')
    for decision in plan:
        origin = decision['origin']
        x = (primary if origin == 'primary' else memory)[decision['inputId']]
        assert x.get('reviewStatus') != 'hold' and x.get('finalDecision') != 'hold'
        if decision['action'].startswith('hold'):
            continue
        if decision['action'] == 'new':
            ident = 'program-' + digest((x['province'] + '|' + x['city'] + '|' + x['name']).encode())[:18]
            assert ident not in by_id
            planned_ids[decision['plannedId']] = ident
            typ = x.get('type', x.get('initialType'))
            kind = x.get('kind', category_kinds[typ])
            place = provinces[x['province']] + ('·' + x['city'] if x['city'] != provinces[x['province']] else '')
            locality = x.get('locality', '')
            if locality and locality not in (x['city'], x['city'] + '相关产区'):
                place += '·' + locality
            if origin == 'primary':
                detail = x['draftDetail']
                description = f"{x['name']}，与{place}相联系的{kind}。公告载有其名称及产区，展开可看原料、品质或生产记录。"
                note = '说明依据地理标志公告的具体产品段整理；保护要求描述的是规定条件，不代表所有同名产品的实际品质或认证状态。'
            else:
                description = f"{x['name']}，收录为{place}相关的{kind}。已核对正文中的名称与地域关联，更多做法和风味资料仍待补充。"
                detail = f"{x['name']}的地方关联记录在{place}，本目录将它归入{category_kinds[typ]}。\n\n已读资料支持其名称与当地的关联；目前保留这一范围内的信息。具体原料、工序、风味和历史尚待逐项补充，不把名称吻合当作完整配方已经核实。"
                note = '名称与地域已作正文对照；分类结合常识修订。详细说明待补证扩写。'
            item = dict(id=ident, province=x['province'], city=x['city'], type=typ, name=x['name'],
                        kind=kind, description=description, detail=detail, sources=[], originNote=note,
                        researchBatch='program-4000', verificationScope='product-name-and-locality-with-recorded-source-facts')
            if locality:
                item['locality'] = locality
            if x['province'] in ('beijing', 'shanghai'):
                districts = [p['name'] for p in read(PUBLIC / 'progress.json')['units']
                             if p['province'] == x['province'] and p['level'] == 'county'
                             and p['name'] in locality]
                if len(districts) == 1:
                    item['district'] = districts[0]
            data['items'].append(item)
            by_id[ident] = item
        else:
            ident = planned_ids.get(decision['existingId'], decision['existingId'])
            item = by_id[ident]
            if x['name'] != item['name']:
                item['aliases'] = list(dict.fromkeys(item.get('aliases', []) + [x['name']]))
            if origin == 'primary' and len(x['draftDetail']) > len(item['detail']) and 300 <= len(x['draftDetail']) <= 500:
                # Preserve earlier editorial/brand context alongside the new technical account.
                item.setdefault('previousDetail', item['detail'])
                item['detail'] = x['draftDetail']
                item['originNote'] = '补充说明依据公告规定的产品特征；不据此推定所有商家获标。' + item.get('originNote', '')
        if origin == 'primary':
            refs = [register(x, origin)]
        else:
            refs = [register({**s, 'itemName': x['name'], 'province': x['province'], 'city': x['city']}, origin)
                    for s in x['sources']]
        item['sources'] = list(dict.fromkeys(item['sources'] + refs))
        for ref in refs:
            if item['name'] not in sources[ref]['supportsItems']:
                sources[ref]['supportsItems'].append(item['name'])
        adopted.append({**decision, 'itemId': ident, 'sourceIds': refs, 'finalType': item['type'],
                        'explanationLength': len(item['detail'])})

    for ident, note in source_notes.items():
        path = PUBLIC / 'readings' / (ident + '.json')
        save(path, note)
        sources[ident].update(evidenceFile=path.relative_to(ROOT).as_posix(),
                              evidenceKind='editorial-reading-notes', readingNotesSha256=digest(path.read_bytes()))
        audit['sources'].append(sources[ident])
    for item in data['items']:
        item['explanationStatus'] = '300-500-characters' if 300 <= len(item['detail']) <= 500 else 'needs-expansion'
    data.update(targetItems=4001, reviewed='2026-11-14')
    (ROOT / 'data/flavors.js').write_text('/* Regional foods, local products and crafts. Editorial text with sources per item. */\nwindow.flavorCatalog=' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    save(ROOT / 'research/flavors/sources.json', audit)
    save(PUBLIC / 'adoption.json', dict(date='2026-11-14', targetItems=4001, baselineItems=2112,
         baselineCatalogSha256=baseline_sha, baselineItemIds=baseline_ids,
         totalItems=len(data['items']), newItems=sum(x['action'] == 'new' for x in adopted),
         aliasOrSourceMerges=sum(x['action'] == 'merge' for x in adopted),
         sourceBackedItems=sum(x.get('verificationStatus') != 'pending' for x in data['items']),
         pendingItems=sum(x.get('verificationStatus') == 'pending' for x in data['items']),
         explanationCounts=dict(collections.Counter(x['explanationStatus'] for x in data['items'])),
         countingMethod='detail正文Unicode字符数；包含标点，不含摘要、来源、备注。未达标的保留补写状态。',
         decisions=adopted))
    print(len(data['items']), 'items;', len(sources), 'new source records;', len(adopted), 'adoptions/merges')


if __name__ == '__main__':
    apply()

"""Check research references and preservation fingerprints without network or writes."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import subprocess
import tarfile
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]


def digest(raw):
    return hashlib.sha256(raw).hexdigest()


def check(local_archives=False):
    def read(path):
        return json.loads((ROOT / path).read_text())
    notes = 0
    for source in read('research/flavors/sources.json')['sources']:
        if source.get('evidenceFile'):
            assert digest((ROOT / source['evidenceFile']).read_bytes()) == source['readingNotesSha256'], source['id']
            notes += 1
    for item in read('research/path-migrations.json')['files']:
        assert (ROOT / item['path']).is_file(), item['path']
        if item['path'].startswith('research/flavors/reading-notes/'):
            assert digest((ROOT / item['path']).read_bytes()) == item['previousSha256'], item['path']
    for name in ['research/flavors/index.json', 'research/china/index.json']:
        if not (ROOT / name).is_file():
            continue
        for record in read(name)['records']:
            assert (ROOT / record['path']).is_file(), name + ' -> ' + record['path']
            assert digest((ROOT / record['path']).read_bytes()) == record['sha256'], 'Stale research inventory: ' + record['path']
    china_migrations = ROOT / 'research/china/path-migrations.json'
    if china_migrations.is_file():
        for item in json.loads(china_migrations.read_text())['files']:
            assert (ROOT / item['path']).is_file(), item['path']
            assert read(item['previousPath'])['movedTo'] == item['path'], item['previousPath']
    paths = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode().split('\0')
    paths = sorted({p for p in paths if p and (ROOT / p).is_file()})
    for name in paths:
        if name.endswith('.json'):
            document = read(name)
            if name.startswith('research/') and not name.startswith('research/archives/') and '/working-notes/' not in name:
                def references(value):
                    if isinstance(value, dict):
                        for key, item in value.items():
                            if key in ('coverageFile', 'claimsReview', 'searchLog', 'logFile', 'evidenceFile', 'journalFile') and isinstance(item, str):
                                assert (ROOT / item).is_file(), name + ' -> ' + item
                            references(item)
                    elif isinstance(value, list):
                        for item in value:
                            references(item)
                references(document)
        if name.endswith('.md'):
            for link in re.findall(r'\[[^\]]*\]\(([^\s)]+)\)', (ROOT / name).read_text()):
                if link.startswith(('#', '/', 'http:', 'https:', 'mailto:')):
                    continue
                target = urllib.parse.unquote(link.split('#')[0])
                assert (ROOT / name).parent.joinpath(target).exists(), name + ' -> ' + link
    html = (ROOT / 'index.html').read_text()
    entry_paths = re.findall(r'(?:src|href)="([^"?#]+)', html)
    for path in entry_paths:
        if not path.startswith(('http:', 'https:', '//', '#')):
            assert (ROOT / path).exists(), 'Entry dependency: ' + path
    data_paths = list((ROOT / 'data').glob('*.js'))
    for path in data_paths:
        assert path.relative_to(ROOT).as_posix() in entry_paths, 'Unclassified runtime data: ' + str(path)
    country = (ROOT / 'data/produce-country-data.js').read_text()
    snapshots = set(re.findall(r'"snapshotUrl": "([^"]+)"', country))
    assert len(snapshots) == 3
    for path in snapshots:
        assert (ROOT / path).is_file(), path
    for index_path in sorted((ROOT / 'research/archives').glob('*.json')):
        index = json.loads(index_path.read_text())
        assert len(index['files']) == index['fileCount']
        assert sum(item['bytes'] for item in index['files']) == index['totalUncompressedBytes']
        if local_archives:
            archive = ROOT / index['archive']
            assert digest(archive.read_bytes()) == index['archiveSha256'], str(archive)
            with tarfile.open(archive, 'r:gz') as saved:
                assert sorted(saved.getnames()) == sorted(e['member'] for e in index['files'])
                for item in index['files']:
                    with saved.extractfile(item['member']) as f:
                        raw = f.read()
                    assert len(raw) == item['bytes'] and digest(raw) == item['sha256'], item['member']
            subprocess.check_call(['git', 'check-ignore', '-q', str(archive.relative_to(ROOT))], cwd=ROOT)
    print(f'PASS research paths, JSON, Markdown links, {notes} preserved reading notes, {len(data_paths)} runtime data files, three public downloads'
          + (' and local archive bytes' if local_archives else ' (local archive contents not checked)'))


if __name__ == '__main__':
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--local-archives', action='store_true')
    check(p.parse_args().local_archives)

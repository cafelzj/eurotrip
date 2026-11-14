"""Offline persistence tests: old evidence, repeated searches and local originals."""
import contextlib
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tarfile
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


def module(filename):
    spec = importlib.util.spec_from_file_location(filename, ROOT / 'scripts' / filename)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


search = module('search-flavor-counties.py')
archive = module('archive-research.py')
refresh = module('refresh-flavor-coverage.py')


class Persistence(unittest.TestCase):
    def test_repeated_search_keeps_history_and_changed_originals(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            queue = root / 'queue.json'
            old = {'query': 'previous', 'status': 'search-only-not-comprehensive'}
            place = dict(adcode=320281, province='jiangsu', city='无锡', name='江阴市',
                         status='has-sourced-entries', entryIds=['existing'], reviewedTopics=['tea'], searchEvidence=[old])
            queue.write_text(json.dumps(dict(places=[place])))
            first = b'{"content": []}'
            second = json.dumps({'content': [{'plainText': '无锡 江阴 茶', 'url': 'https://example.com/tea'}]}).encode()
            for raw in [first, second]:
                with contextlib.redirect_stdout(io.StringIO()):
                    search.run('jiangsu', '无锡', '江阴市', queue, root / 'raw', root / 'runs', lambda *a, **k: io.BytesIO(raw))
            current = json.loads(queue.read_text())['places'][0]
            self.assertEqual(current['searchEvidence'][0], old)
            self.assertEqual(len(current['searchEvidence']), 1 + 2 * len(search.TOPICS))
            self.assertEqual(current['reviewedTopics'], ['tea'])
            self.assertEqual(current['entryIds'], ['existing'])
            self.assertEqual(current['status'], 'has-sourced-entries')
            self.assertEqual(len(list((root / 'runs').glob('*.json'))), 2)
            files = list((root / 'raw').rglob('*.json'))
            self.assertEqual({p.read_bytes() for p in files}, {first, second})
            for p in files:
                self.assertEqual(p.stem, hashlib.sha256(p.read_bytes()).hexdigest())
            self.assertTrue(any(e.get('resultUrls') == ['https://example.com/tea'] for e in current['searchEvidence']))

    def test_all_errors_do_not_mark_place_searched(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            queue = root / 'queue.json'
            queue.write_text(json.dumps({'places': [dict(adcode=1, province='x', city='c', name='n', status='not-started', reviewedTopics=[])]}))
            def fail(*args, **kwargs):
                raise OSError('offline fixture')
            with contextlib.redirect_stdout(io.StringIO()):
                search.run('x', 'c', None, queue, root / 'raw', root / 'runs', fail)
            place = json.loads(queue.read_text())['places'][0]
            self.assertEqual(place['status'], 'not-started')
            self.assertEqual(place['reviewedTopics'], [])
            self.assertTrue(all(e['status'] == 'search-error' for e in place['searchEvidence']))

    def test_invalid_response_is_preserved_with_error_fingerprint(self):
        with tempfile.TemporaryDirectory() as tmp:
            raw = b'<html>upstream error</html>'
            result = search.search({'name': 'n'}, 'tea', '茶', 'c', Path(tmp), 'fixture', lambda *a, **k: io.BytesIO(raw))
            self.assertEqual(result['status'], 'search-error')
            self.assertEqual(Path(result['responseFile']).read_bytes(), raw)
            self.assertEqual(result['evidenceSha256'], hashlib.sha256(raw).hexdigest())

    def test_refresh_keeps_failed_searches_without_claiming_success(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / 'data').mkdir()
            (root / 'research/flavors').mkdir(parents=True)
            (root / 'data/flavors.js').write_text('window.flavorCatalog={"items":[],"targetItems":2000};')
            coverage = dict(cities=[], countyAreas=[], minimumPerCity=11)
            (root / 'research/flavors/coverage.json').write_text(json.dumps(coverage))
            place = dict(province='x', city='c', name='n', level='county', reviewedTopics=[],
                         entryIds=[], status='not-started', searchEvidence=[dict(status='search-error', query='failed query')])
            queue_path = root / 'research/flavors/queue.json'
            queue_path.write_text(json.dumps(dict(places=[place], queryTemplates=[])))
            original_root = refresh.root
            try:
                refresh.root = root
                with contextlib.redirect_stdout(io.StringIO()):
                    refresh.refresh()
            finally:
                refresh.root = original_root
            current = json.loads(queue_path.read_text())['places'][0]
            self.assertEqual(current['searchEvidence'], place['searchEvidence'])
            self.assertEqual(current['status'], 'not-started')
            self.assertEqual(current['reviewedTopics'], [])

    def test_archive_preserves_every_byte_and_refuses_overwrite(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            source = root / 'source'
            (source / 'nested').mkdir(parents=True)
            (source / 'nested/original.html').write_bytes(b'original\x00bytes')
            (source / 'notes.json').write_bytes(b'{"candidate": true}\n')
            result = archive.archive('fixture', [source], root / 'saved', root / 'indexes')
            self.assertEqual(result['fileCount'], 2)
            saved = Path(result['archive'])
            before = saved.read_bytes()
            with tarfile.open(saved, 'r:gz') as package:
                self.assertEqual(package.extractfile('source/nested/original.html').read(), b'original\x00bytes')
            self.assertTrue((source / 'notes.json').exists())
            with self.assertRaises(FileExistsError):
                archive.archive('fixture', [source], root / 'saved', root / 'indexes')
            self.assertEqual(saved.read_bytes(), before)


if __name__ == '__main__':
    unittest.main()

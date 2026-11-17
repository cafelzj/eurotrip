"""Ensure failed sources cannot trigger hundreds of queued requests."""
import gzip
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from urllib.error import HTTPError, URLError

spec = importlib.util.spec_from_file_location('photo_sources', Path(__file__).resolve().parents[1] / 'scripts/china-enrichment/fetch_photo_sources.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class FetchTests(unittest.TestCase):
    def test_rate_limit_stops_source_but_keeps_other_source(self):
        calls = []
        def fetch(url):
            calls.append(url)
            if 'limited.test' in url:
                raise HTTPError(url, 429, 'Limited', {'Retry-After': '90'}, io.BytesIO(b'rate limited body'))
            return b'other source'
        with tempfile.TemporaryDirectory() as folder:
            jobs = [{'url': 'https://limited.test/' + str(i)} for i in range(790)] + [{'url': 'https://other.test/photo'}]
            result = module.fetch_jobs(jobs, folder, fetch=fetch)
            self.assertEqual(len(calls), 2)
            self.assertEqual(result['records'][1]['status'], 'not-started-source-paused')
            first = result['records'][0]
            self.assertEqual(first['retryAfter'], '90')
            self.assertEqual(gzip.decompress(Path(first['responseFile']).read_bytes()), b'rate limited body')
            self.assertEqual(result['records'][-1]['status'], 'saved')
            # Restarting the command must not immediately hit the limited host again.
            again = module.fetch_jobs(jobs, folder, fetch=fetch)
            self.assertEqual(again['networkRequests'], 0)
            self.assertEqual(len(calls), 2)

    def test_duplicate_and_cross_run_cache_do_not_request_again(self):
        with tempfile.TemporaryDirectory() as folder:
            calls = []
            def fetch(url):
                calls.append(url)
                return b'unabridged original response'
            jobs = [{'url': 'https://source.test/a'}] * 2
            first = module.fetch_jobs(jobs, folder, fetch=fetch)
            self.assertEqual(len(calls), 1)
            second = module.fetch_jobs(jobs, folder, fetch=fetch)
            self.assertEqual(len(calls), 1)
            self.assertEqual(second['networkRequests'], 0)
            self.assertEqual(first['records'][0]['responseFile'], second['records'][0]['responseFile'])

    def test_budget_defers_without_attempting(self):
        with tempfile.TemporaryDirectory() as folder:
            result = module.fetch_jobs([{'url': 'https://source.test/' + str(i)} for i in range(8)], folder, 2, fetch=lambda _: b'body')
            self.assertEqual(result['networkRequests'], 2)
            self.assertEqual(sum(r['status'] == 'not-started-budget' for r in result['records']), 6)

    def test_corrupt_cache_is_not_adopted_as_a_response(self):
        with tempfile.TemporaryDirectory() as folder:
            jobs = [{'url': 'https://source.test/a'}]
            first = module.fetch_jobs(jobs, folder, fetch=lambda _: b'original')
            Path(first['records'][0]['responseFile']).write_bytes(gzip.compress(b'changed'))
            second = module.fetch_jobs(jobs, folder, fetch=lambda _: b'new response')
            self.assertEqual(second['networkRequests'], 1)
            self.assertEqual(second['records'][0]['status'], 'saved')
            self.assertIn('hash mismatch', second['records'][0]['cacheIssue'])

    def test_repeated_network_failure_pauses_source(self):
        def fail(_):
            raise URLError('offline')
        with tempfile.TemporaryDirectory() as folder:
            result = module.fetch_jobs([{'url': 'https://source.test/' + str(i)} for i in range(50)], folder, fetch=fail)
            self.assertEqual(result['networkRequests'], 3)
            self.assertEqual(result['records'][3]['status'], 'not-started-source-paused')


unittest.main()

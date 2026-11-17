"""Bounded, cache-first source fetching. Saves evidence; never approves photographs."""
import argparse
import gzip
import hashlib
import json
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
from uuid import uuid4
from email.utils import parsedate_to_datetime


def digest(raw):
    return hashlib.sha256(raw).hexdigest()


def request(url):
    with urlopen(Request(url, headers={'User-Agent': 'EurotripPhotoResearch/1.0'}), timeout=20) as response:
        return response.read()


def retry_time(value):
    try:
        return time.time() + max(0, int(value))
    except (ValueError, TypeError):
        try:
            return max(time.time(), parsedate_to_datetime(value).timestamp())
        except (ValueError, TypeError, OverflowError):
            return time.time() + 300


def fetch_jobs(jobs, output, max_requests=12, cache_logs=(), fetch=request):
    """One request at a time: no queued requests survive a source circuit breaker."""
    if not 1 <= max_requests <= 50:
        raise ValueError('Use a pilot of 1–50 requests, then review actual useful results.')
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    journal = output / 'requests.jsonl'
    cache, paused, failures, results = {}, {}, {}, []
    for path in [*cache_logs, journal]:
        path = Path(path)
        if not path.exists():
            continue
        for line in path.read_text().splitlines():
            row = json.loads(line)
            if row.get('deferUntilEpoch', 0) > time.time():
                paused[urlsplit(row['url']).netloc] = 'Previous source pause is still active; use a different source.'
            if row.get('responseFile') and row.get('status') in ('saved', 'cache-reused', 'saved-candidates-not-approved', 'response-saved'):
                cache[row['url']] = row
    requests = 0
    for job in jobs:
        url = job['url']
        host = urlsplit(url).netloc
        if urlsplit(url).scheme != 'https' or not host:
            raise ValueError('Only explicit public HTTPS source URLs are supported.')
        row = dict(job)
        row.pop('status', None)
        prior = cache.get(url)
        if prior:
            path = Path(prior['responseFile'])
            try:
                compressed = path.read_bytes()
                raw = gzip.decompress(compressed)
                if digest(raw) == prior['responseSha256']:
                    row.update(status='cache-reused', responseFile=str(path), responseSha256=digest(raw), compressedSha256=digest(compressed))
                else:
                    row['cacheIssue'] = 'Source response hash mismatch; not reused.'
            except (OSError, EOFError):
                row['cacheIssue'] = 'Cached response unreadable; not reused.'
        if row.get('status') != 'cache-reused':
            if host in paused:
                row.update(status='not-started-source-paused', reason=paused[host])
            elif requests >= max_requests:
                row.update(status='not-started-budget', reason='Review this pilot before sending more requests.')
            else:
                requests += 1
                raw = None
                try:
                    raw = fetch(url)
                    row['status'] = 'saved'
                    failures[host] = 0
                except HTTPError as error:
                    raw = error.read()
                    row.update(status='http-error', httpStatus=error.code, error=str(error), retryAfter=(error.headers or {}).get('Retry-After'))
                    failures[host] = failures.get(host, 0) + 1
                    if error.code == 429:
                        paused[host] = 'HTTP429: stop this source; retain Retry-After and change source.'
                        row['deferUntilEpoch'] = retry_time(row['retryAfter'])
                except (URLError, TimeoutError, OSError) as error:
                    row.update(status='request-error', error=str(error))
                    failures[host] = failures.get(host, 0) + 1
                if failures.get(host, 0) >= 3:
                    paused[host] = paused.get(host, 'Three consecutive failures: source paused for this run.')
                    row.setdefault('deferUntilEpoch', time.time() + 300)
                if raw is not None:
                    path = output / (uuid4().hex + '.response.gz')
                    compressed = gzip.compress(raw, mtime=0)
                    path.write_bytes(compressed)
                    row.update(responseFile=str(path), responseSha256=digest(raw), compressedSha256=digest(compressed))
                if row['status'] == 'saved':
                    cache[url] = row
        with journal.open('a') as stream:
            stream.write(json.dumps(row, ensure_ascii=False) + '\n')
        results.append(row)
    return dict(networkRequests=requests, pausedSources=paused, records=results)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--plan', required=True, type=Path, help='JSON with jobs: [{url, query, itemIds}].')
    parser.add_argument('--output', required=True, type=Path, help='New batch directory under research/.local/.')
    parser.add_argument('--max-requests', type=int, default=12)
    parser.add_argument('--cache-log', type=Path, action='append', default=[])
    args = parser.parse_args()
    private_root = Path(__file__).resolve().parents[2] / 'research/.local'
    if not args.output.resolve().is_relative_to(private_root.resolve()):
        parser.error('--output must be inside research/.local/ so original responses are not published.')
    report = fetch_jobs(json.loads(args.plan.read_text())['jobs'], args.output, args.max_requests, args.cache_log)
    print(json.dumps(dict(networkRequests=report['networkRequests'], pausedSources=report['pausedSources'], statuses={s: sum(r['status'] == s for r in report['records']) for s in {r['status'] for r in report['records']}}), ensure_ascii=False))

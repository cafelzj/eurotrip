"""Preserve research originals locally and write a versioned, byte-verifiable inventory.

Full web pages and search responses stay outside Git publication. The archive is a
local preservation copy, not an off-machine backup. Sources are never deleted.
"""
import argparse
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import tarfile

ROOT = Path(__file__).resolve().parents[1]


def archive(batch, sources, archive_dir, index_dir):
    if Path(batch).name != batch or batch in ('.', '..'):
        raise ValueError('batch must be a single directory name')
    roots = [p.resolve(strict=True) for p in sources]
    if len({p.name for p in roots}) != len(roots) or not all(p.is_dir() for p in roots):
        raise ValueError('source directories must have distinct names')
    target = archive_dir / (batch + '.tar.gz')
    index_path = index_dir / (batch + '.json')
    if target.exists() or index_path.exists():
        raise FileExistsError('Archive already exists; use a new batch name')
    target.parent.mkdir(parents=True, exist_ok=True)
    index_path.parent.mkdir(parents=True, exist_ok=True)
    entries = []
    created = False
    try:
        with target.open('xb') as archive_file, tarfile.open(fileobj=archive_file, mode='w:gz') as out:
            created = True
            for source in roots:
                if target.resolve().is_relative_to(source):
                    raise ValueError('archive must be outside the input directories')
                for path in sorted(source.rglob('*')):
                    if path.is_symlink():
                        raise ValueError('Symlinks need separate review: ' + str(path))
                    if not path.is_file():
                        continue
                    member = (Path(source.name) / path.relative_to(source)).as_posix()
                    raw = path.read_bytes()
                    out.add(path, arcname=member, recursive=False)
                    entries.append(dict(member=member, bytes=len(raw), sha256=hashlib.sha256(raw).hexdigest()))
        with tarfile.open(target, 'r:gz') as saved:
            for entry in entries:
                with saved.extractfile(entry['member']) as f:
                    raw = f.read()
                if len(raw) != entry['bytes'] or hashlib.sha256(raw).hexdigest() != entry['sha256']:
                    raise ValueError('Archive mismatch: ' + entry['member'])
        def location(p):
            return p.relative_to(ROOT).as_posix() if p.is_relative_to(ROOT) else str(p)
        index = dict(batch=batch, createdAt=datetime.now(timezone.utc).isoformat(),
                     archive=location(target.resolve()), archiveSha256=hashlib.sha256(target.read_bytes()).hexdigest(),
                     originalDirectories=[str(p) for p in roots], fileCount=len(entries),
                     totalUncompressedBytes=sum(e['bytes'] for e in entries),
                     storage='local-only-not-off-machine-backup', originalsRetained=True, files=entries)
        index_path.write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n')
    except BaseException:
        if created:
            target.unlink(missing_ok=True)
        raise
    return index


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--batch', required=True)
    p.add_argument('--source', type=Path, action='append', required=True)
    p.add_argument('--archive-dir', type=Path, default=ROOT / 'research/.local/archives')
    p.add_argument('--index-dir', type=Path, default=ROOT / 'research/archives')
    a = p.parse_args()
    result = archive(a.batch, a.source, a.archive_dir, a.index_dir)
    print(f"Preserved and verified {result['fileCount']} files; originals retained; {result['archive']}")


if __name__ == '__main__':
    main()

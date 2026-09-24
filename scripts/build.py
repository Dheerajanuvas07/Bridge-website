"""Dependency-free static production build; only public files enter dist."""
from pathlib import Path
import shutil
ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ['index.html', 'book.html', 'captains.html', 'legal', 'styles.css', 'css', 'js', 'hero-support.png', 'CNAME', 'robots.txt', 'sitemap.xml', 'THIRD_PARTY_NOTICES.md']
out = ROOT / 'dist'
# Only remove our generated output, never repository source.
if out.exists():
    shutil.rmtree(out)
out.mkdir()
for name in PUBLIC:
    source = ROOT / name
    if source.is_dir():
        shutil.copytree(source, out / name)
    else:
        shutil.copy2(source, out / name)
print(f'Built {len(list(out.rglob("*")))} public files/directories in dist/')

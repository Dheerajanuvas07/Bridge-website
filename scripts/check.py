"""Check page structure, local links and fragments, and required public assets."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import sys
ROOT = Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.links, self.h1, self.labels, self.fields = path, set(), [], 0, set(), []
        self.duplicates=[]
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:
            if a['id'] in self.ids: self.duplicates.append(a['id'])
            self.ids.add(a['id'])
        if tag=='h1': self.h1+=1
        if tag=='label' and a.get('for'): self.labels.add(a['for'])
        if tag in ['input','textarea','select'] and a.get('type')!='hidden': self.fields.append(a.get('id'))
        for key in ['href','src']:
            if a.get(key): self.links.append(a[key])
pages={p.resolve():Page(p) for p in [*ROOT.glob('*.html'),*ROOT.glob('legal/*.html')]}
errors=[]
for path,page in pages.items():
    if page.h1 != 1: errors.append(f'{path.name}: expected one h1, got {page.h1}')
    if page.duplicates: errors.append(f'{path.name}: duplicate IDs {page.duplicates}')
    for field in page.fields:
        if field not in page.labels: errors.append(f'{path.name}: unlabeled field {field}')
    for link in page.links:
        parts=urlsplit(link)
        if parts.scheme or parts.netloc: continue
        target=(path.parent/unquote(parts.path)).resolve() if parts.path else path
        if not target.exists(): errors.append(f'{path.name}: missing {link}')
        if parts.fragment and target in pages and unquote(parts.fragment) not in pages[target].ids:
            errors.append(f'{path.name}: missing fragment {link}')
if errors:
    print('\n'.join(errors)); sys.exit(1)
print(f'PASS: {len(pages)} pages; local assets, links, fragments, headings, IDs, and field labels.')

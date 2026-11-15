"""Refresh interactive provinces in the retained DataV SVG without changing geometry."""
import json
from pathlib import Path
from xml.etree import ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
NS='http://www.w3.org/2000/svg'; ET.register_namespace('',NS)
source=(ROOT/'data/flavors.js').read_text();catalog=json.loads(source[source.index('{'):source.rfind(';')])
by_name={p['name']:p['id'] for p in catalog['provinces']}
short=lambda name:name.replace('：待收录','').replace('壮族自治区','').replace('回族自治区','').replace('维吾尔自治区','').replace('自治区','').replace('特别行政区','').removesuffix('省').removesuffix('市')
path=ROOT/'assets/maps/china-provinces.svg';tree=ET.parse(path);root=tree.getroot()
root.find(f'{{{NS}}}title').text='全国省份地图'
root.find(f'{{{NS}}}desc').text='深色区域有已收录卡片，灰色省份待收录；行政边界沿用原DataV地图。'
main=next(n for n in root if n.get('clip-path')=='url(#provinceMainClip)')
for child in main:
 title=child.find(f'{{{NS}}}title');shape=child.find(f'{{{NS}}}path')
 if title is None or shape is None:continue
 name=short(title.text or '');slug=by_name.get(name)
 if slug:
  child.tag=f'{{{NS}}}a';child.attrib.clear();child.attrib.update(href='#card-manager/china?province='+slug,**{'data-map-province':slug,'aria-label':name+'，查看卡片'})
  title.text=name;shape.set('class','province-shape province-covered')
 elif name and name!='海域界线':
  child.set('data-pending-province',name)
for text in root.iter(f'{{{NS}}}text'):
 if short(text.text or '') in by_name:text.set('class','province-name-covered')
tree.write(path,encoding='unicode')
print('Refreshed',len(by_name),'covered provinces; retained original administrative paths')

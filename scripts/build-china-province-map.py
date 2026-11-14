import json,math,pathlib,html,argparse
parser=argparse.ArgumentParser(description="Project the published DataV provincial geometry into a local SVG; retain all regions and the sea inset.")
parser.add_argument("source",type=pathlib.Path,help="Local copy of https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")
parser.add_argument("--output",type=pathlib.Path,default=pathlib.Path(__file__).resolve().parents[1]/"assets/maps/china-provinces.svg")
args=parser.parse_args()
src=json.loads(args.source.read_text())
active={110000:'beijing',370000:'shandong',340000:'anhui',320000:'jiangsu',330000:'zhejiang',310000:'shanghai',140000:'shanxi'}
def xy(lon,lat):return ((lon-72)*12.6,10+(54-lat)*15.5)
def small(lon,lat):return (713+(lon-105)*5.3,410+(25-lat)*6.7)
def path(geometry,projection):
 polygons=geometry['coordinates']if geometry['type']=='MultiPolygon'else[geometry['coordinates']]
 return ''.join('M'+'L'.join(f'{x:.1f},{y:.1f}'for x,y in map(lambda p:projection(*p[:2]),ring))+'Z'for poly in polygons for ring in poly)
parts=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 585" aria-labelledby="provinceMapTitle provinceMapDesc" role="group"><title id="provinceMapTitle">中国分省风物地图</title><desc id="provinceMapDesc">深绿色区域已收录：北京、山东、安徽、江苏、浙江、上海、山西。可点击省份或使用旁边的省市按钮浏览。浅灰区域待补充。</desc><defs><clipPath id="provinceMainClip"><rect width="860" height="570"/></clipPath><clipPath id="provinceSeaClip"><rect x="710" y="408" width="125" height="164"/></clipPath></defs><g clip-path="url(#provinceMainClip)">']
labels=[]
for feature in src['features']:
 p=feature['properties'];code=p['adcode'];name=p['name'];slug=active.get(code);geometry=feature['geometry'];d=path(geometry,xy)
 if slug:parts.append(f'<a href="#flavors/{slug}" data-map-province="{slug}" aria-label="{name}，查看当地风物"><title>{name}</title><path class="province-shape province-covered" d="{d}"/></a>')
 else:parts.append(f'<g><title>{html.escape(name or "海域界线")}{"：待收录"if name else ""}</title><path class="province-shape {"province-sea"if not name else ""}" d="{d}"/></g>')
 if name and p.get('center'):
  short=name.replace('壮族自治区','').replace('回族自治区','').replace('维吾尔自治区','').replace('自治区','').replace('特别行政区','').removesuffix('省').removesuffix('市');x,y=xy(*p['center']);labels.append((short,x,y,slug))
parts.append('</g><g class="province-labels" aria-hidden="true">')
for name,x,y,slug in labels:
 if name in ['北京','天津','上海','香港','澳门']:continue
 parts.append(f'<text x="{x:.1f}" y="{y:.1f}" class="{"province-name-covered"if slug else ""}">{name}</text>')
# Small municipalities have callouts, keeping their shape at the published coordinates.
for code,slug,label,dx,dy in[(110000,'beijing','北京',17,-15),(310000,'shanghai','上海',33,6)]:
 p=next(f['properties']for f in src['features']if f['properties']['adcode']==code);x,y=xy(*p['center']);parts.append(f'<g><path class="province-callout" d="M{x:.1f},{y:.1f}l{dx},{dy}"/><text x="{x+dx+3:.1f}" y="{y+dy+3:.1f}" class="province-name-covered">{label}</text></g>')
parts.append('</g><rect class="province-sea-box" x="710" y="408" width="125" height="164" rx="2"/><g clip-path="url(#provinceSeaClip)" aria-hidden="true">')
for f in src['features']:
 p=f['properties']
 if p['adcode']in[460000,710000,'100000_JD']:parts.append('<path class="province-shape province-sea-inset" d="'+path(f['geometry'],small)+'"/>')
parts.append('</g><text x="772" y="585" class="province-sea-label">南海诸岛</text></svg>')
args.output.parent.mkdir(parents=True,exist_ok=True)
args.output.write_text(''.join(parts))
print('map',len(''.join(parts)),'bytes')

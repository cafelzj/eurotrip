"""Project DataV province/city boundaries into local, accessible SVG selectors."""
import argparse,json,math,pathlib,html
p=argparse.ArgumentParser();p.add_argument('source_dir',type=pathlib.Path);p.add_argument('--output',type=pathlib.Path,default=pathlib.Path(__file__).resolve().parents[1]/'assets/maps/flavors');args=p.parse_args();args.output.mkdir(parents=True,exist_ok=True)
provinces={110000:('beijing','北京'),370000:('shandong','山东'),340000:('anhui','安徽'),320000:('jiangsu','江苏'),330000:('zhejiang','浙江'),310000:('shanghai','上海'),140000:('shanxi','山西'),410000:('henan','河南'),130000:('hebei','河北'),430000:('hunan','湖南'),420000:('hubei','湖北'),350000:('fujian','福建'),210000:('liaoning','辽宁'),220000:('jilin','吉林'),230000:('heilongjiang','黑龙江')}
# Dense central districts need leader labels; their true boundaries stay in place.
provinces.update({360000:('jiangxi','江西'),450000:('guangxi','广西'),440000:('guangdong','广东')})
provinces.update({610000:('shaanxi','陕西'),620000:('gansu','甘肃'),510000:('sichuan','四川'),500000:('chongqing','重庆'),530000:('yunnan','云南'),520000:('guizhou','贵州')})
label_positions={'beijing':{'东城区':(450,350),'西城区':(105,385),'石景山区':(95,330)},'shanghai':{'杨浦区':(490,180),'虹口区':(490,220),'黄浦区':(490,260),'徐汇区':(490,300),'普陀区':(80,170),'静安区':(80,210),'长宁区':(80,250)}}
registry={}
for code,(slug,name)in provinces.items():
 data=json.loads((args.source_dir/(str(code)+'.json')).read_text());features=data['features'];rings=[]
 def polys(geometry):return geometry['coordinates']if geometry['type']=='MultiPolygon'else[geometry['coordinates']]
 coords=[xy for f in features for poly in polys(f['geometry'])for ring in poly for xy in ring]
 xmin=min(c[0]for c in coords);xmax=max(c[0]for c in coords);ymin=min(c[1]for c in coords);ymax=max(c[1]for c in coords);cos=math.cos(math.radians((ymin+ymax)/2));spanx=(xmax-xmin)*cos;spany=ymax-ymin;scale=min(510/spanx,380/spany);tx=(600-spanx*scale)/2;ty=(470-spany*scale)/2
 def xy(pt):return (tx+(pt[0]-xmin)*cos*scale,ty+(ymax-pt[1])*scale)
 def path(geometry):
  paths=[]
  for poly in polys(geometry):
   for ring in poly:
    points=[]
    for pt in ring:
     x,y=xy(pt);v=(round(x,1),round(y,1))
     if not points or points[-1]!=v:points.append(v)
    if points:paths.append('M'+'L'.join(f'{x:g},{y:g}'for x,y in points)+'Z')
  return ''.join(paths)
 out=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 470" role="group" aria-labelledby="flavorProvinceTitle-{slug}"><title id="flavorProvinceTitle-{slug}">{name}{"各区县"if code==500000 else"各区"if code in [110000,310000]else"各市"}风物地图</title>'];labels=[]
 registry[slug]={'level':'district'if code in [110000,310000,500000]else'city','regions':[]}
 for f in features:
  prop=f['properties'];raw=prop['name'];region=raw if code in [110000,310000,500000]else raw.removesuffix('市');region={'湘西土家族苗族自治州':'湘西州','恩施土家族苗族自治州':'恩施州','神农架林区':'神农架','延边朝鲜族自治州':'延边州','大兴安岭地区':'大兴安岭','阿坝藏族羌族自治州':'阿坝州','甘孜藏族自治州':'甘孜州','凉山彝族自治州':'凉山州','楚雄彝族自治州':'楚雄州','红河哈尼族彝族自治州':'红河州','文山壮族苗族自治州':'文山州','西双版纳傣族自治州':'西双版纳州','大理白族自治州':'大理州','德宏傣族景颇族自治州':'德宏州','怒江傈僳族自治州':'怒江州','迪庆藏族自治州':'迪庆州','黔西南布依族苗族自治州':'黔西南州','黔东南苗族侗族自治州':'黔东南州','黔南布依族苗族自治州':'黔南州','临夏回族自治州':'临夏州','甘南藏族自治州':'甘南州'}.get(region,region);label={'湘西土家族苗族自治州':'湘西州','恩施土家族苗族自治州':'恩施州','神农架林区':'神农架','延边朝鲜族自治州':'延边州','大兴安岭地区':'大兴安岭','阿坝藏族羌族自治州':'阿坝州','甘孜藏族自治州':'甘孜州','凉山彝族自治州':'凉山州','楚雄彝族自治州':'楚雄州','红河哈尼族彝族自治州':'红河州','文山壮族苗族自治州':'文山州','西双版纳傣族自治州':'西双版纳州','大理白族自治州':'大理州','德宏傣族景颇族自治州':'德宏州','怒江傈僳族自治州':'怒江州','迪庆藏族自治州':'迪庆州','黔西南布依族苗族自治州':'黔西南州','黔东南苗族侗族自治州':'黔东南州','黔南布依族苗族自治州':'黔南州','临夏回族自治州':'临夏州','甘南藏族自治州':'甘南州'}.get(raw,raw.removesuffix('市'));pos=prop.get('centroid')or prop.get('center');x,y=xy(pos)
  lx,ly=label_positions.get(slug,{}).get(raw,(x,y));leader=''
  if (lx,ly)!=(x,y):
   end=lx-33 if lx>x else lx+33
   leader=f'<path class="flavor-region-leader" d="M{x:.1f},{y:.1f}L{end:.1f},{ly-4:.1f}"/>'
  out.append(f'<a href="#flavors/{slug}" data-flavor-region="{html.escape(region)}" data-flavor-adcode="{prop["adcode"]}" aria-label="{raw}"><title>{raw}</title><path class="flavor-region-shape" d="{path(f["geometry"])}"/></a>')
  labels.append(f'<a href="#flavors/{slug}" data-flavor-label="{html.escape(region)}" tabindex="-1"><title>{raw}</title>{leader}<text class="flavor-region-name" x="{lx:.1f}" y="{ly:.1f}">{label}</text></a>')
  registry[slug]['regions'].append({'name':region,'adcode':prop['adcode']})
  if prop.get('level') == 'city' and prop.get('childrenNum') == 0:
   registry[slug]['regions'][-1].update(adminLevel='city',hasCountyDivisions=False)
 out.append('<g class="flavor-map-labels" aria-hidden="true">'+''.join(labels)+'</g></svg>');target=args.output/(slug+'.svg');target.write_text(''.join(out));print(name,len(features),target.stat().st_size)
(pathlib.Path(__file__).resolve().parents[1]/'data/flavor-map-regions.js').write_text('/* City/district names from the same DataV boundaries as the local SVG maps. */\nwindow.flavorMapRegions='+json.dumps(registry,ensure_ascii=False,indent=2)+';\n')

/* One canonical registry for the flavor overview, Chinese destinations and manager. */
window.ChinaCollection=(()=>{
 const catalog=window.flavorCatalog,regions=window.flavorCounties;
 const destinationsById=new Map(travelCities.map(c=>[c.id,c]));
 const citiesByCode=new Map(travelCities.filter(c=>c.country==='cn').map(c=>[String(c.adcode),c]));
 const admin=new Map(Object.values(regions.cities).map(c=>[c.province+'|'+c.city,c]));
 const countyNames=new Map(Object.values(regions.cities).flatMap(c=>c.regions.map(r=>[r.adcode,r.name])));
 const rootCity=city=>city?.parentCity?destinationsById.get(city.parentCity):city;
 const unique=values=>[...new Set(values.filter(Boolean))];
 function locations(n){
  const list=[n.city,...(n.cities||[])].filter(Boolean).map(id=>destinationsById.get(id)).filter(c=>c?.country==='cn');
  return unique(list.map(c=>rootCity(c)?.id)).map(id=>destinationsById.get(id));
 }
 function provinceIds(n){return unique([n.province,...locations(n).map(c=>c.provinceId)]);}
 function cityNames(n){return unique([n.cityName,...locations(n).map(c=>c.name)]).filter(c=>c!=='全省');}
 function countyCodes(n){
  if(n.countyCodes)return n.countyCodes;
  return unique([n.city,...(n.cities||[])].map(id=>destinationsById.get(id)).filter(c=>c?.parentCity).map(c=>Number(c.adcode)));
 }
 function inProvince(n,province){return province==='all'||provinceIds(n).includes(province);}
 function inCity(n,city){return city==='all'||cityNames(n).includes(city);}
 function inCounty(n,county){return county==='all'||(county==='unspecified'?!countyCodes(n).length:countyCodes(n).includes(Number(county)));}
 function label(n){
  const ps=provinceIds(n).map(id=>catalog.provinces.find(p=>p.id===id)?.name).filter(Boolean),cs=cityNames(n),counties=countyCodes(n).map(code=>countyNames.get(code)).filter(Boolean);
  const wholeCity=cs.length===1&&provinceIds(n).some(p=>admin.get(p+'|'+cs[0])?.hasCountyDivisions===false);
  return [ps.join(' / ')||'中国',cs.filter(c=>!ps.includes(c)).join(' / '),counties.length>2?counties.length+'个县区':counties.join('、')||(wholeCity?'全市范围':'县区待明确')].filter(Boolean).join(' · ');
 }
 function integrate(store){
  const {nodes,edges,add,connect,aliases}=store;
  const legacy=new Map([...nodes.values()].filter(n=>store.countryIds(n).includes('cn')).map(n=>[n.id,n]));
  const oldEdges=[...edges.entries()].flatMap(([id,list])=>list.map(e=>[id,e.to,e.label]));
  for(const item of catalog.items){
   if(nodes.has(item.id))throw new Error('Flavor ID conflicts with an existing card: '+item.id);
   const parent=admin.get(item.province+'|'+item.city),city=parent?citiesByCode.get(String(parent.adcode)):null;
   const codes=regions.itemCounties[item.id]||[],owners=unique([city?.id,...codes.map(code=>citiesByCode.get(String(code))?.id)]);
   const sources=item.sources.map(id=>{const s=catalog.sources[id];return [s.url,s.name];});
   add({...item,id:item.id,flavorId:item.id,flavorType:item.type,type:item.type==='crafts'?'specialty':'food',category:'food',subcategory:item.type,
    country:'cn',city:city?.id,cities:owners,cityName:item.city,countyCodes:[...codes],sourceIds:[...item.sources],sources,
    details:item.detail,note:item.originNote||'',reading:[{title:item.type==='crafts'?'特色与来源':'风味与来源',text:item.detail}],point:undefined,searchKind:undefined});
  }
  for(const [oldId,newId]of Object.entries(window.chinaCardMerges.aliases)){
   const old=legacy.get(oldId),node=nodes.get(newId);if(!old||!node)throw new Error('Missing reviewed merge: '+oldId);
   for(const key of ['subtitle','local','shopping','translations'])if(node[key]==null&&old[key]!=null)node[key]=old[key];
   node.legacyIds=unique([...(node.legacyIds||[]),oldId]);
   node.aliases=unique([...(node.aliases||[]),old.name,...(old.aliases||[])]);
   node.legacyRecords=[...(node.legacyRecords||[]),old];
   node.reading.push({title:'原城市卡片：'+old.name,text:old.description},...(old.reading||[]));
   for(const text of [old.note,old.details].filter(Boolean))if(!node.reading.some(section=>section.text.includes(text)))node.reading.push({title:'原卡片资料备注',text});
   node.sources=[...new Map([...node.sources,...old.sources].map(source=>[source[0],source])).values()];
   nodes.delete(oldId);edges.delete(oldId);aliases.set(oldId,newId);
  }
  for(const n of legacy.values())if(!aliases.has(n.id)){
   if(window.chinaCardMerges.legacyKinds[n.id])n.subcategory=window.chinaCardMerges.legacyKinds[n.id];
   n.category=CardTaxonomy.secondary(n)?.category||n.category;
   const owners=[n.city,...(n.cities||[])].map(id=>destinationsById.get(id)).filter(Boolean);
   const codes=owners.filter(c=>c.parentCity).map(c=>Number(c.adcode));
   for(const parent of unique(owners.map(c=>rootCity(c)?.id)).map(id=>destinationsById.get(id))){
    const districtText=[n.locality,n.point?.address].filter(Boolean).join(' '),area=Object.values(regions.cities).find(c=>c.province===parent.provinceId&&c.city===parent.name);
    for(const district of area?.regions||[])if(districtText.includes(district.name))codes.push(district.adcode);
   }
   n.countyCodes=unique(codes);const roots=owners.map(rootCity);n.province=roots[0]?.provinceId;n.cityName=roots[0]?.name||'全省';
  }
  // Reviewed enrichment is additive: preserve original summaries and evidence.
  for(const [id,entry]of Object.entries(window.chinaCardReading||{})){
   const n=nodes.get(id);if(!n||!store.countryIds(n).includes('cn'))throw Error('中国补充资料引用未知卡片：'+id);
   n.originalDescription=n.description;n.description=entry.summary;
   n.details=entry.text;n.enrichment={batch:entry.batch,characters:[...entry.text].length,sourceIds:entry.sourceIds};
   n.originalReading=n.reading||[];n.reading=[{title:'地方风味与制作',text:entry.text}];
   n.sources=[...new Map([...(n.sources||[]),...entry.sources].map(source=>[source[0],source])).values()];
  }
  // Rewire both directions through the canonical identity; duplicate references collapse.
  for(const id of edges.keys())edges.set(id,[]);
  for(const [from,to,label]of oldEdges){const a=aliases.get(from)||from,b=aliases.get(to)||to;if(a!==b&&nodes.has(a)&&nodes.has(b)){const list=edges.get(a);if(!list.some(e=>e.to===b&&e.label===label))list.push({to:b,label});}}
  for(const n of nodes.values())if(n.flavorId)Object.freeze(n.sourceIds);
 }
 return {integrate,locations,provinceIds,cityNames,countyCodes,inProvince,inCity,inCounty,label,
  records:()=>[...CardStore.nodes.values()].filter(n=>CardTaxonomy.isChina(n)&&!n.live&&!n.collectionHidden),
  flavors:()=>[...CardStore.nodes.values()].filter(n=>n.flavorId)};
})();

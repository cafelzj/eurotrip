/* Runtime registry and dynamic POI state. Curated content lives in data/. */
window.CardStore=(()=>{
 const nodes=new Map(),edges=new Map(),types=cardCategories.types;
 const subcategories=new Map(cardCategories.secondary.map(s=>[s.id,s]));
 const country=id=>travelCountries.find(c=>c.id===id),city=id=>travelCities.find(c=>c.id===id);
 const unique=values=>[...new Set(values.filter(v=>typeof v==='string'&&v))];
 const cityIds=n=>unique([n.city,...(n.cities||[])]);
 const countryIds=n=>unique([n.country,...(n.countries||[]),...cityIds(n).map(id=>city(id)?.country)]);
 const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function searchText(n){return normalize([n.id,n.name,n.subtitle,n.local,n.description,n.note,n.details,n.aliases?.join(' '),...countryIds(n).map(id=>{const c=country(id);return c?c.name+' '+c.local:id;}),...cityIds(n).map(id=>{const c=city(id);return c?[c.name,c.local,c.adminName].join(' '):id;}),cardCategories.primary.find(p=>p.id===n.category)?.name,subcategories.get(n.subcategory)?.name,...(n.sources||[]).flat()].join(' '));}
 const foodKey=(id,i)=>`food-${id}-${i}`,sightKey=(id,i)=>`place-${id}-${i}`;
 const poiKey=(id,p)=>p.knowledgeId||`poi-${id}-${p.id}`;
 const coords=p=>`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=16/${p.lat}/${p.lon}`;
 function add(card){const node={...card};if(node.point)node.point={...node.point,knowledgeId:node.id};
  if(!node.subcategory){const p=node.point;node.subcategory=node.live&&node.parentCard&&p?.group==='food'?'chain-dining':cardCategories.pointKinds[p?.category]||cardCategories.pointKinds[p?.sub]||cardCategories.pointGroups[p?.group]||cardCategories.typeDefaults[node.type];}
  const sub=subcategories.get(node.subcategory);if(!sub||!types[node.type]||node.category&&node.category!==sub.category)throw Error('卡片分类无效：'+node.id);
  node.category=sub.category;nodes.set(node.id,node);if(!edges.has(node.id))edges.set(node.id,[]);return node;
 }
 function connect(a,b,forward,backward){if(!nodes.has(a)||!nodes.has(b)||a===b)return;for(const [from,to,label]of[[a,b,forward],[b,a,backward]]){const list=edges.get(from);if(!list.some(e=>e.to===to&&e.label===label))list.push({to,label});}}
 for(const card of [...travelCards,...capitalCards,...chinaCards,...heritageCards,...knowledgeCards,...sloveniaCards,...polandCards])add(card);
 for(const relation of [...cardRelations,...capitalRelations,...chinaRelations,...heritageRelations,...knowledgeRelations,...sloveniaRelations,...polandRelations])connect(...relation);
 function linkLive(n){if(n.parentCard)connect(n.id,n.parentCard,'连锁来源品牌','按此连锁搜索到的门店');for(const food of Array.isArray(n.fromFoodIds)?n.fromFoodIds:[])connect(n.id,food,'购买探索来源（库存未确认）','探索过的超市（不保证有货）');}
 function registerLive(scopeId,points,foodContext){const c=city(scopeId),nation=country(c?.country||scopeId);if(!nation)return;for(const p of points){if(!/^osm-(node|way|relation)-\d+$/.test(p.id)||!Number.isFinite(p.lat)||!Number.isFinite(p.lon))continue;const id=poiKey(scopeId,p),food=nodes.get(foodContext);const fromFoodIds=[...new Set([...(nodes.get(id)?.fromFoodIds||[]),...(food?.shopping&&countryIds(food).includes(nation.id)?[food.id]:[])])];add({id,type:'place',live:true,fromFoodIds,parentCard:p.parentCard,country:nation.id,...(c?{city:c.id}:{}),name:p.name,description:p.address||'来自 OpenStreetMap 的即时地点。',note:'即时地点数据可能过时或不完整；营业时间标签不代表实时营业。',point:{...p,knowledgeId:id},sources:[[p.osm?'https://www.openstreetmap.org/'+p.osm:coords(p),'OpenStreetMap 地点资料'],...(p.website&&/^https?:\/\//i.test(p.website)?[[p.website,'地点网站（OSM 标签）']]:[])]});linkLive(nodes.get(id));}const live=[...nodes.values()].filter(n=>n.live);if(live.length>900){const active=new Set(points.map(p=>poiKey(scopeId,p)));const drop=new Set(live.filter(n=>!active.has(n.id)).slice(0,live.length-900).map(n=>n.id));prune(n=>!drop.has(n.id));}}
 function prune(keep){for(const [id,n]of nodes)if(!keep(n)){nodes.delete(id);edges.delete(id);}for(const [id,list]of edges)edges.set(id,list.filter(e=>nodes.has(e.to)));}
 function saveLive(n){let saved=[];try{saved=JSON.parse(sessionStorage.getItem('eurotrip-live-cards')||'[]');}catch{}saved=[...saved.filter(x=>x.id!==n.id),n].slice(-20);sessionStorage.setItem('eurotrip-live-cards',JSON.stringify(saved));}
 try{for(const n of JSON.parse(sessionStorage.getItem('eurotrip-live-cards')||'[]'))if(n?.live&&n.type==='place'&&country(n.country)&&(!n.city||city(n.city)?.country===n.country)&&Number.isFinite(n.point?.lat)&&Math.abs(n.point.lat)<=90&&Number.isFinite(n.point?.lon)&&Math.abs(n.point.lon)<=180&&Array.isArray(n.sources)&&n.sources.every(s=>Array.isArray(s)&&typeof s[0]==='string')&&typeof n.name==='string'&&n.id===poiKey(n.city||n.country,{id:n.point.id})){add(n);linkLive(n);}}catch{}
 return {add,connect,nodes,edges,types,countryIds,cityIds,normalize,searchText,prune,linkLive,registerLive,saveLive,poiKey,foodKey,sightKey};
})();

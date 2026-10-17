/* Typed card directory and explicit, bidirectional relationships. */
window.CardGraph=(()=>{
 const nodes=new Map(),edges=new Map();
 const types={brand:['企业 / 品牌','▦'],food:['美食','♧'],place:['地点','⌖'],person:['人物','♙'],fact:['冷知识','✦'],specialty:['特产','◇'],tip:['实用提醒','☑']};
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const url=id=>'#card/'+encodeURIComponent(id);
 const link=(id,label,cls='card-link')=>nodes.has(id)?`<a class="${cls}" href="${url(id)}">${h(label||nodes.get(id).name)} <span>↗</span></a>`:'';
 function add(node){nodes.set(node.id,node);if(!edges.has(node.id))edges.set(node.id,[]);return node;}
 function connect(a,b,forward,backward){if(!nodes.has(a)||!nodes.has(b)||a===b)return;for(const [from,to,label]of[[a,b,forward],[b,a,backward]]){const list=edges.get(from);if(!list.some(e=>e.to===to&&e.label===label))list.push({to,label});}}
 const country=id=>travelCountries.find(c=>c.id===id),city=id=>travelCities.find(c=>c.id===id);
 const foodKey=(id,i)=>`food-${id}-${i}`;
 const sightKey=(id,i)=>`place-${id}-${i}`;
 const poiKey=(id,p)=>p.knowledgeId||`poi-${id}-${p.id}`;
 const coords=p=>`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=16/${p.lat}/${p.lon}`;
 for(const c of travelCities){

  poiCityInfo[c.id].food.forEach((f,i)=>{add({id:foodKey(c.id,i),type:'food',country:c.country,city:c.id,name:f.name,description:f.description,note:f.comparison,foodType:f.type,query:f.imageQuery,foodIndex:i,sources:[[f.imageUrl,'Commons 图片参考搜索'],[c.tourism,'城市旅游与饮食资料入口']]});});
  c.places.forEach((p,i)=>{add({id:sightKey(c.id,i),type:'place',country:c.country,city:c.id,name:p.name,local:p.local,description:p.description,note:'坐标为地标参考位置，不保证是入口。开放、预约及展陈以场所最新信息为准。',point:{...p,id:sightKey(c.id,i),knowledgeId:sightKey(c.id,i),sightIndex:i},sources:[[c.tourism,'城市官方旅游资料入口'],[coords(p),'OpenStreetMap 位置']]});});
  for(const p of poiCityInfo[c.id].pois){const id=poiKey(c.id,p);add({id,type:'place',country:c.country,city:c.id,name:p.name,local:p.local,description:p.description,note:p.source,point:{...p,knowledgeId:id},sources:[[c.tourism,'城市官方旅游入口'],[coords(p),'OpenStreetMap 位置']]});}
 }
 for(const b of travelBrands){add({id:'brand-'+b.id,type:'brand',country:b.country,name:b.name,aliases:b.aliases,description:b.description,note:`领域：${b.kind}\n品牌起源：${b.origin}\n地理联系：${b.base}\n企业/品牌的历史起源、销售市场、当前所有权与总部是不同维度；此卡不代表可参观办公或生产场所。`,brand:b,sources:[[b.url,'企业 / 品牌官方入口'],...(b.otherSources||[])]});}
 connect('brand-hofer','brand-aldi','所属 ALDI Süd 体系（非 Nord）','奥地利市场的 HOFER 品牌');
  for(const p of everydayProducts){const b=travelBrands.find(b=>b.id===p.brand);add({id:'food-product-'+p.id,type:'food',country:p.country,name:p.name,description:p.description,note:`口味比较：${p.comparison}\n购买线索：${p.buying}\n保存与包装：${p.storage}`,query:p.id,foodType:p.foodType,shopping:true,product:p,sources:[[b.url,'品牌 / 产品资料入口'],[p.image,'Commons 图片参考搜索']]});connect('brand-'+p.brand,'food-product-'+p.id,'认识具体产品','对应企业 / 品牌');}
 for(const v of brandVisitPlaces){const c=city(v.city),i=c.places.findIndex(p=>p.brandId===v.brand);if(i>=0){connect('brand-'+v.brand,sightKey(v.city,i),'公众体验场所（非总部办公参观）','相关企业 / 品牌');nodes.get(sightKey(v.city,i)).sources.unshift([v.url,'访客场所官方入口']);}}
 for(const n of nodes.values())if(n.type==='food'&&n.query==='Pick salami')connect('brand-pick',n.id,'相关产品与饮食文化','对应品牌');
 for(const p of travelPeople){add({...p,id:'person-'+p.id,type:'person',sources:[[p.url,p.source]]});}
 for(const v of travelVenues){const c=city(v.city),id='venue-'+v.id;add({id,type:'place',country:c.country,city:c.id,name:v.name,local:v.local,description:v.description,note:'餐饮探索示例，不是实时菜单、推荐排名或供应保证。坐标为参考位置。',point:{...v,knowledgeId:id,source:v.source,website:v.url},sources:[[v.url,v.source],[coords(v),'OpenStreetMap 位置']]});for(const [i,f]of poiCityInfo[c.id].food.entries())if(v.foodQueries.includes(f.imageQuery))connect(foodKey(c.id,i),id,v.sub==='market'?'市场探索（供应需确认）':'相关餐饮场所（菜单需确认）','关联风味（不保证供应）');}
 for(const c of travelCountries){
  countryKnowledge[c.id].facts.forEach((f,i)=>{add({id:`fact-${c.id}-${i}`,type:'fact',country:c.id,name:f.title,description:f.body,note:f.prompt,sources:[[c.tourism,'国家官方旅游入口']]});});
  countryKnowledge[c.id].specialties.forEach((s,i)=>{add({id:`specialty-${c.id}-${i}`,type:'specialty',country:c.id,name:s.name,description:s.description,note:`产区：${s.region}\n挑选提示：${s.tip}`,sources:[[s.image,'Commons 外观参考搜索'],[c.tourism,'国家旅游与特产资料入口']]});});
  for(const t of travelTipData.countries[c.id]){const id=`tip-${c.id}-${t.id}`;add({id,type:'tip',country:c.id,name:t.title,description:t.body,note:t.action,sources:t.url?[[t.url,t.source]]:[]});}
 }
 for(const t of travelTipData.shared){const id='tip-common-'+t.id;add({id,type:'tip',name:t.title,description:t.body,note:t.action,sources:t.url?[[t.url,t.source]]:[]});}
 for(const c of travelCities){const t=travelTipData.cities[c.id],id='tip-'+t.id;add({id,type:'tip',country:c.country,city:c.id,name:t.title,description:t.body,note:t.action,sources:[[t.url,t.source]]});}
 const factCities={'fact-hu-1':['budapest'],'fact-hu-2':['budapest'],'fact-at-0':['salzburg','vienna'],'fact-at-2':['vienna'],'fact-at-3':['innsbruck'],'fact-de-2':['cologne','munich']};for(const [id,cities]of Object.entries(factCities))nodes.get(id).cities=cities;
 const explicit=[
 ['fact-hu-2','person-rubik','认识发明者','相关冷知识'],['fact-hu-3','specialty-hu-0','认识这种调味料','相关冷知识'],
 ['fact-at-0','person-mozart','认识故事中的人物','相关冷知识'],['fact-at-3','place-innsbruck-1','进入山地的起点','相关冷知识'],

 ['person-mozart','place-salzburg-1','人物出生地纪念馆','与这里有关的人物'],['person-klimt','place-vienna-2','作品收藏地（展出需查）','收藏作品的艺术家'],['person-kossuth','place-debrecen-0','历史事件关联地','历史人物关联'],['person-maximilian','place-innsbruck-0','宫廷历史关联建筑','与这里有关的人物'],['person-zaha','place-innsbruck-2','设计的建筑','建筑设计者'],['person-humboldt','place-berlin-4','命名相关的大学','大学命名相关人物']
 ];
 explicit.forEach(e=>connect(...e));
 for(const n of nodes.values())if(n.type==='food'){
  if(n.query==='Mozartkugel')connect(n.id,'person-mozart','名称所纪念的人物（非发明者）','以人物命名的甜品');
  if(n.shopping)connect(n.id,'tip-'+n.country+'-money','支付与币种提醒','日常购买线索');else connect(n.id,'tip-common-bill','点餐与结账提醒','可了解的美食');
  if(n.query==='Wiener Melange')connect(n.id,'fact-at-2','背后的咖啡馆文化','用一道风味认识文化');
 }
 connect('food-product-ritter-chocolate','food-product-milka-chocolate','可比较的巧克力（起源见品牌卡）','可比较的巧克力（起源见品牌卡）');connect('food-product-manner-wafer','food-salzburg-1','比较口感与包装','比较日常威化');connect('brand-manner','specialty-at-2','威化品类中的品牌示例','可以了解的一种品牌');
  const placeSources={
 'place-budapest-0':['https://www.parlament.hu/web/visitors/','匈牙利国会 · 访客入口'],
 'place-vienna-0':['https://www.stephanskirche.at/','圣斯蒂芬大教堂 · 官方入口'],
 'place-vienna-1':['https://www.schoenbrunn.at/en/','美泉宫 · 官方入口'],
 'place-vienna-2':['https://www.belvedere.at/en','美景宫 · 官方入口'],
 'place-salzburg-1':['https://mozarteum.at/en/','莫扎特基金会 · 纪念馆入口'],
 'place-berlin-1':['https://www.smb.museum/en/','柏林国立博物馆 · 官方入口'],
 'place-munich-2':['https://www.schloss-nymphenburg.de/englisch/palace/index.htm','宁芬堡宫 · 官方入口'],
 'place-hamburg-0':['https://www.elbphilharmonie.de/en/','易北爱乐厅 · 官方入口'],
 'place-cologne-0':['https://www.koelner-dom.de/en/','科隆大教堂 · 官方入口'],
 'place-cologne-2':['https://www.museum-ludwig.de/en/','路德维希博物馆 · 官方入口']
 };for(const [id,source] of Object.entries(placeSources))if(nodes.has(id))nodes.get(id).sources.unshift(source);
  const foodNodes=[...nodes.values()].filter(n=>n.type==='food');for(let i=0;i<foodNodes.length;i++)for(let j=i+1;j<foodNodes.length;j++)if(norm(foodNodes[i].query)===norm(foodNodes[j].query))connect(foodNodes[i].id,foodNodes[j].id,'同名风味的城市版本','同名风味的城市版本');
 // Facts explicitly reference selected foods rather than inferred nearby venues.
 for(const n of foodNodes){if(n.query==='Hungarian paprika'){connect('fact-hu-3',n.id,'看看相关食材','相关冷知识');connect('specialty-hu-0',n.id,'认识这种食材','可以了解的伴手礼');}if(n.query==='Tokaji Aszu')connect('specialty-hu-1',n.id,'认识相关酒类','产区与挑选提示');if(n.query==='Mozartkugel')connect('specialty-at-0',n.id,'认识这种甜品','挑选与产地提示');if(['Weisswurst','Fischbrotchen','Kolsch beer'].includes(n.query))connect('fact-de-3',n.id,'认识一种地区风味','相关冷知识');}

 let recent=[];try{recent=JSON.parse(sessionStorage.getItem('eurotrip-card-trail')||'[]').filter(id=>typeof id==='string');}catch{}
 function sourceLinks(n){return (n.sources||[]).filter(([u])=>/^https?:\/\//i.test(u)).map(([u,label])=>`<a href="${h(u)}" target="_blank" rel="noopener noreferrer">${h(label)} ↗</a>`).join('');}
 function actions(n){const H=KnowledgeHub,binding=H.mapBinding(n);if(binding.mode==='none')return '';return `<a class="entity-primary" href="${H.mapUrl(n)}">${binding.mode==='fixed'?'在地图上定位':'动态搜索门店'} →</a>${binding.mode==='fixed'?`<button class="entity-secondary" data-map-card="${h(n.id)}">${h(window.FloatingMap?.pinLabel(n.id)||'⌖')} · 小地图定位</button>`:''}`;}
 function mini(id,label){const n=nodes.get(id);return n?`<a href="${url(id)}" class="entity-mini" data-card-theme="${window.KnowledgeHub?.category(n)||n.type}"><small>${h(label||types[n.type][0])}</small><b>${h(n.name)}</b><span>↗</span></a>`:'';}
 function renderDetail(id){const n=nodes.get(id);if(!n)return `<section class="entity-missing"><h1>这张卡片暂未收录</h1><p>该卡片已合并到国家知识，或不在当前收录范围。动态地点可回到地图重新搜索。</p><a href="#guide/hu">回到国家知识 →</a></section>`;
  if(n.live)linkLive(n);
  const destination=KnowledgeHub.destinationFor(n);
  const trail=recent.filter(x=>x!==id&&nodes.has(x)).slice(-6).reverse();recent=[...recent.filter(x=>x!==id),id].slice(-12);try{sessionStorage.setItem('eurotrip-card-trail',JSON.stringify(recent));if(n.live)saveLive(n);}catch{}
  const related=edges.get(id)||[],groups=Object.keys(types).map(type=>[type,related.filter(e=>nodes.get(e.to)?.type===type)]).filter(([,es])=>es.length);
  return `<div class="entity-breadcrumb"><a href="${window.KnowledgeHub?.returnUrl(n)||'#guide/hu'}">国家知识</a><span>/ ${h(types[n.type][0])}</span><span>/</span><a href="#guide/${destination.country.id}">${h(destination.country.name)}</a>${destination.city?`<span>/</span><a href="#guide/${destination.country.id}/${destination.city.id}">${h(destination.city.name)}</a>`:''}</div><article class="entity-detail" data-card-theme="${window.KnowledgeHub?.category(n)||n.type}" data-entity-id="${h(id)}"><div class="entity-kind">${window.KnowledgeHub?.iconForNode(n)||types[n.type][1]} ${types[n.type][0]}卡片</div><h1>${h(n.name)}</h1>${n.local?`<div class="entity-local">${h(n.local)}</div>`:''}<p class="entity-description">${h(n.description)}</p><div class="entity-actions">${actions(n)}</div><div class="entity-note"><h2>${n.type==='food'?'怎么比较、怎么选':'延伸理解'}</h2><p>${h(n.note||'沿着下方的关联卡片，继续认识相关城市与文化。').replace(/\n/g,'<br>')}</p></div>${n.shopping?'<p class="entity-caveat">地图提供附近超市线索，不代表具体商品的实时库存。冷藏食品、液体或易碎包装是否适合携带，请按包装及目的地规定判断。</p>':n.type==='food'?'<p class="entity-caveat">餐饮场所关联是探索线索，不保证当前供应这道菜。可以打开关联的地点卡片，再查看其地图位置。</p>':''}${n.point?`<div class="entity-coordinates">参考坐标 ${n.point.lat.toFixed(4)}° N · ${n.point.lon.toFixed(4)}° E</div>`:''}<section class="entity-sources"><h2>资料与官方入口</h2><div>${sourceLinks(n)||'<p>目前未收录独立来源链接，请沿关联卡片继续查阅。</p>'}</div><small>来源包含官方专题、机构/旅游入口和外部参考；并非所有链接都直接对应具体场所，开放与菜单请以最新资料为准。</small></section></article><section class="entity-relations"><div class="entity-section-title"><h2>从这张卡片，继续走</h2><span>${related.length} 条关联 · 可双向探索</span></div>${groups.map(([type,es])=>`<div class="relation-group"><h3>${types[type][1]} ${types[type][0]} <small>${es.length}</small></h3><div class="entity-mini-grid">${es.slice(0,6).map(e=>mini(e.to,e.label)).join('')}</div>${es.length>6?`<details class="entity-more"><summary>展开另外 ${es.length-6} 条关联</summary><div class="entity-mini-grid">${es.slice(6).map(e=>mini(e.to,e.label)).join('')}</div></details>`:''}</div>`).join('')}</section>${trail.length?`<section class="entity-trail"><h2>刚刚看过</h2><div class="entity-mini-grid">${trail.map(id=>mini(id)).join('')}</div></section>`:''}`;
 }
 function linkLive(n){if(n.parentCard)connect(n.id,n.parentCard,'连锁来源品牌','按此连锁搜索到的门店');for(const food of Array.isArray(n.fromFoodIds)?n.fromFoodIds:[])connect(n.id,food,'购买探索来源（库存未确认）','探索过的超市（不保证有货）');}
 function registerLive(scopeId,points,foodContext){const c=city(scopeId),nation=country(c?.country||scopeId);if(!nation)return;for(const p of points){if(!/^osm-(node|way|relation)-\d+$/.test(p.id)||!Number.isFinite(p.lat)||!Number.isFinite(p.lon))continue;const id=poiKey(scopeId,p),food=nodes.get(foodContext);const fromFoodIds=[...new Set([...(nodes.get(id)?.fromFoodIds||[]),...(food?.shopping&&food.country===nation.id?[food.id]:[])])];add({id,type:'place',live:true,fromFoodIds,parentCard:p.parentCard,country:nation.id,...(c?{city:c.id}:{}),name:p.name,description:p.address||'来自 OpenStreetMap 的即时地点。',note:'即时地点数据可能过时或不完整；营业时间标签不代表实时营业。',point:{...p,knowledgeId:id},sources:[[p.osm?'https://www.openstreetmap.org/'+p.osm:coords(p),'OpenStreetMap 地点资料'],...(p.website&&/^https?:\/\//i.test(p.website)?[[p.website,'地点网站（OSM 标签）']]:[])]});linkLive(nodes.get(id));}const live=[...nodes.values()].filter(n=>n.live);if(live.length>900){const active=new Set(points.map(p=>poiKey(scopeId,p)));const drop=new Set(live.filter(n=>!active.has(n.id)).slice(0,live.length-900).map(n=>n.id));prune(n=>!drop.has(n.id));}}
 function prune(keep){for(const [id,n]of nodes)if(!keep(n)){nodes.delete(id);edges.delete(id);}for(const [id,list]of edges)edges.set(id,list.filter(e=>nodes.has(e.to)));}
 function saveLive(n){let saved=[];try{saved=JSON.parse(sessionStorage.getItem('eurotrip-live-cards')||'[]');}catch{}saved=[...saved.filter(x=>x.id!==n.id),n].slice(-20);sessionStorage.setItem('eurotrip-live-cards',JSON.stringify(saved));}
 try{for(const n of JSON.parse(sessionStorage.getItem('eurotrip-live-cards')||'[]'))if(n?.live&&n.type==='place'&&country(n.country)&&(!n.city||city(n.city)?.country===n.country)&&Number.isFinite(n.point?.lat)&&Math.abs(n.point.lat)<=90&&Number.isFinite(n.point?.lon)&&Math.abs(n.point.lon)<=180&&Array.isArray(n.sources)&&n.sources.every(s=>Array.isArray(s)&&typeof s[0]==='string')&&typeof n.name==='string'&&n.id===poiKey(n.city||n.country,{id:n.point.id})){add(n);linkLive(n);}}catch{}
 return {add,connect,nodes,edges,types,link,url,renderDetail,prune,linkLive,registerLive,poiKey,foodKey,sightKey};
})();

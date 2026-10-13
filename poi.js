/* City POIs: curated travel hubs + bounded, on-demand OpenStreetMap queries. */
window.CityExplorer = (() => {
 const ENDPOINT='https://overpass-api.de/api/interpreter';
 const cache=new Map(), LIMIT=600, TTL=10*60*1000;
 const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const labels={landmarks:'景点',food:'美食',supermarkets:'超市',transport:'交通',shopping:'商圈'};
 const glyphs={food:'餐',supermarkets:'购',transport:'站',shopping:'逛'};
 const defaults=()=>({groups:{landmarks:true,food:false,supermarkets:false,transport:false,shopping:false},subs:{food:{restaurant:true,cafe:true,market:true},transport:{airport:true,station:true},shopping:{street:true,mall:true}}});
 const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function mount({map,city,landmarks}) {
  const info=poiCityInfo[city.id],profile=poiCountryProfiles[city.country];
  const key='eurotrip-layers-'+city.id;
  let filters=defaults(),destroyed=false,remote=[],controller,timer,loading=false,scopeDirty=false,loadedAt='',state='开启栏目后，可即时搜索当前地图范围内的地点。',truncated=false;
  let searchCenter=map.getCenter();
  try {const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){for(const group in filters.groups)if(typeof saved.groups?.[group]==='boolean')filters.groups[group]=saved.groups[group];for(const group in filters.subs)for(const sub in filters.subs[group])if(typeof saved.subs?.[group]?.[sub]==='boolean')filters.subs[group][sub]=saved.subs[group][sub];}}catch{}
  filters.subs.supermarkets=Object.fromEntries([...profile.brands,'其他超市'].map(b=>[b,true]));
  try{const saved=JSON.parse(localStorage.getItem(key)||'null');for(const b in filters.subs.supermarkets)if(typeof saved?.subs?.supermarkets?.[b]==='boolean')filters.subs.supermarkets[b]=saved.subs.supermarkets[b];}catch{}
  const panel=document.querySelector('#cityExplorer');
  const field=(group,sub,label)=>`<label class="sub-filter"><input type="checkbox" data-poi-group="${group}" data-poi-sub="${escape(sub)}" ${filters.subs[group][sub]?'checked':''}>${escape(label)}<span data-sub-count="${group}:${escape(sub)}"></span></label>`;
  const parent=(group,title)=>`<label class="layer-parent"><input type="checkbox" data-poi-group="${group}" ${filters.groups[group]?'checked':''}><span class="layer-dot ${group}"></span><b>${title}</b><span data-group-count="${group}"></span></label>`;
  panel.innerHTML=`<div class="explorer-heading"><div><span class="guide-kicker">A CITY, MANY WAYS TO EXPLORE</span><h2>按你的兴趣，打开这座城市</h2></div><span>每个栏目、每个品牌，都可以独立显示</span></div><div class="explorer-columns"><article class="layer-card">${parent('food','当地美食')}<div class="food-notes">${info.food.map(f=>`<p><b>${escape(f.name)}</b><span>${escape(f.description)}</span></p>`).join('')}</div><div class="sub-filter-row">${field('food','restaurant','餐馆')}${field('food','cafe','咖啡 / 甜品')}${field('food','market','食品市场')}</div><small>搜索附近餐馆与咖啡店；是否供应这些菜品请看菜单。</small></article><article class="layer-card">${parent('supermarkets','超市与品牌')}<p class="layer-description">${escape(profile.brandNote)}</p><div class="brand-grid">${[...profile.brands,'其他超市'].map(b=>field('supermarkets',b,b)).join('')}</div><small>品牌已合并大小写和常见别名；仅表示检索分类，不保证每个品牌都在本城有店。</small></article><article class="layer-card">${parent('transport','机场与火车站')}<p class="layer-description">先认识重要枢纽，再查当前视野中的车站与机场。机场可能位于市中心地图范围之外。</p><div class="sub-filter-row">${field('transport','airport','机场')}${field('transport','station','火车站')}</div><div class="curated-links">${info.pois.filter(p=>p.group==='transport').map(p=>`<button data-curated="${p.id}">${escape(p.name)} <span>⌖</span></button>`).join('')}</div></article><article class="layer-card">${parent('shopping','热门商圈')}<p class="layer-description">主要商业街和购物中心。地图搜索会补充附近商场，不将普通步行街自动当成热门商圈。</p><div class="sub-filter-row">${field('shopping','street','商业街 / 市场')}${field('shopping','mall','购物中心')}</div><div class="curated-links">${info.pois.filter(p=>p.group==='shopping').map(p=>`<button data-curated="${p.id}">${escape(p.name)} <span>⌖</span></button>`).join('')}</div></article></div><div class="explorer-toolbar">${parent('landmarks','精选景点')}<button id="searchPois" class="poi-search">⌕ 搜索当前地图范围</button><label class="auto-search"><input id="autoPois" type="checkbox">移动地图后自动搜索</label><span id="poiScope"></span><a id="externalPoiSearch" target="_blank" rel="noopener noreferrer">外部地图搜索 ↗</a></div><div class="poi-status" role="status" aria-live="polite" id="poiStatus"></div>`;
  const column=document.querySelector('.sights-column');
  const landmarkList=document.createElement('div');landmarkList.className='landmark-list';while(column.firstChild)landmarkList.append(column.firstChild);column.append(landmarkList);
  const results=document.createElement('div');results.className='poi-results';results.id='poiResults';column.append(results);
  const cluster=L.markerClusterGroup({maxClusterRadius:48,animate:false,animateAddingMarkers:false,showCoverageOnHover:false,disableClusteringAtZoom:18,spiderfyOnMaxZoom:true,iconCreateFunction:group=>L.divIcon({html:`<span>${group.getChildCount()}</span>`,className:'poi-cluster',iconSize:[38,38]})}).addTo(map);
  const curated=info.pois.map(p=>({...p}));let pointsById=new Map();
  const persist=()=>{try{localStorage.setItem(key,JSON.stringify(filters));}catch{}};
  const enabled=p=>!!filters.groups[p.group]&&!!filters.subs[p.group]?.[p.sub];
  function allPoints(){
   const points=[...curated];
   for(const p of remote){if(!curated.some(c=>c.group===p.group&&L.latLng(c.lat,c.lon).distanceTo([p.lat,p.lon])<180&&((c.sub==='airport'&&p.sub==='airport')||normalize(c.local).includes(normalize(p.name))||normalize(p.name).includes(normalize(c.local)))))points.push(p);}
   return points;
  }
  const osmLink=p=>p.osm?`https://www.openstreetmap.org/${p.osm}`:`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=16/${p.lat}/${p.lon}`;
  const tagText=p=>[p.address,p.cuisine&&'菜系标签：'+p.cuisine,p.hours&&'营业时间标签：'+p.hours].filter(Boolean).map(t=>`<p>${escape(t)}</p>`).join('');
  const categoryText=p=>p.group==='supermarkets'?p.sub:({restaurant:'餐馆',cafe:'咖啡 / 甜品',market:'食品市场',airport:'机场',station:'火车站',street:'商业街 / 市场',mall:'购物中心'}[p.sub]);
  function popup(p){return `<div class="poi-popup"><small>${escape(categoryText(p))} · ${escape(p.source)}</small><h3>${escape(p.name)}</h3>${p.local?`<p>${escape(p.local)}</p>`:''}${p.description?`<p>${escape(p.description)}</p>`:''}${tagText(p)}<a href="${osmLink(p)}" target="_blank" rel="noopener noreferrer">地图与路线 ↗</a>${p.website?` · <a href="${escape(p.website)}" target="_blank" rel="noopener noreferrer">网站 ↗</a>`:''}</div>`;}
  function render(){
   if(destroyed)return;
   const all=allPoints(),selected=all.filter(enabled),bounds=map.getBounds();pointsById=new Map(all.map(p=>[p.id,p]));cluster.clearLayers();
   for(const p of selected){const marker=L.marker([p.lat,p.lon],{title:p.name,alt:p.name,keyboard:true,icon:L.divIcon({className:'poi-marker-wrap',html:`<span class="poi-marker ${p.group}">${glyphs[p.group]}</span>`,iconSize:[28,28],iconAnchor:[14,14]})});marker.bindPopup(popup(p));marker.poiId=p.id;cluster.addLayer(marker);}
   landmarks.forEach(m=>{if(filters.groups.landmarks){if(!map.hasLayer(m))m.addTo(map);}else if(map.hasLayer(m))map.removeLayer(m);});landmarkList.hidden=!filters.groups.landmarks;
   const visible=selected.filter(p=>bounds.contains([p.lat,p.lon])).sort((a,b)=>searchCenter.distanceTo([a.lat,a.lon])-searchCenter.distanceTo([b.lat,b.lon]));
   results.innerHTML=`<div class="section-heading"><h3>当前视野中的地点</h3><span>${visible.length} 个</span></div>${visible.length?visible.slice(0,30).map(p=>`<article class="poi-result"><button data-focus-poi="${escape(p.id)}"><span class="layer-dot ${p.group}"></span><div><b>${escape(p.name)}</b><small>${escape(categoryText(p))} · ${p.source==='OpenStreetMap'?'即时检索数据':'精选'}</small></div><span>⌖</span></button>${p.description?`<p>${escape(p.description)}</p>`:''}${p.address?`<p>${escape(p.address)}</p>`:''}<a href="${osmLink(p)}" target="_blank" rel="noopener noreferrer">地图与路线 ↗</a></article>`).join(''):'<p class="poi-empty">当前范围没有已载入且启用的地点。可开启栏目并搜索，或移动地图查看其他区域。</p>'}${visible.length>30?'<p class="poi-empty">列表展示离地图中心最近的 30 个，地图显示全部已载入的选中地点。</p>':''}`;
   panel.querySelectorAll('[data-group-count]').forEach(e=>{const group=e.dataset.groupCount;e.textContent=group==='landmarks'?landmarks.length:all.filter(p=>p.group===group).length;});
   panel.querySelectorAll('[data-sub-count]').forEach(e=>{const [group,...parts]=e.dataset.subCount.split(':');const sub=parts.join(':');const count=all.filter(p=>p.group===group&&p.sub===sub).length;e.textContent=count||'';});
   panel.querySelectorAll('.layer-card').forEach(card=>card.classList.toggle('layer-disabled',!filters.groups[card.querySelector('[data-poi-group]').dataset.poiGroup]));
   updateStatus();
  }
  function scope(){const b=map.getBounds();const width=L.latLng(b.getCenter().lat,b.getWest()).distanceTo([b.getCenter().lat,b.getEast()])/1000;const height=L.latLng(b.getSouth(),b.getCenter().lng).distanceTo([b.getNorth(),b.getCenter().lng])/1000;return {bounds:b,width,height,valid:map.getZoom()>=13&&width<=15&&height<=15};}
  function updateStatus(){if(destroyed)return;const center=map.getCenter();const term=filters.groups.supermarkets?'supermarket':filters.groups.food?'restaurant':filters.groups.transport?'railway station':'shopping';panel.querySelector('#externalPoiSearch').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(term+' near '+center.lat.toFixed(5)+','+center.lng.toFixed(5));const s=scope();panel.querySelector('#poiScope').textContent=`约 ${s.width.toFixed(1)} × ${s.height.toFixed(1)} km`;
   panel.querySelector('#searchPois').disabled=loading||!s.valid;
   panel.querySelector('#poiStatus').textContent=loading?'正在搜索当前范围…':(!s.valid?'请放大到街区或城区范围再搜索（缩放 ≥ 13，范围每边 ≤ 15 km），避免一次加载全城门店。 ':state)+(scopeDirty?' 地图范围已改变，点击搜索更新结果。':'')+(loadedAt?' 最近获取：'+loadedAt+'。':'')+(truncated?' 查询达到 600 个地点上限，结果并不完整，请进一步缩小范围。':'');
  }
  function makeQuery(){const b=map.getBounds();const bbox=[b.getSouth(),b.getWest(),b.getNorth(),b.getEast()].map(n=>n.toFixed(5)).join(',');const parts=[];
   if(filters.groups.food){parts.push(`nwr[amenity~"^(restaurant|cafe|marketplace)$"](${bbox});`);}
   if(filters.groups.supermarkets)parts.push(`nwr[shop="supermarket"](${bbox});`);
   if(filters.groups.transport){parts.push(`nwr[railway="station"][station!="subway"](${bbox});`,`nwr[aeroway="aerodrome"](${bbox});`);}
   if(filters.groups.shopping)parts.push(`nwr[shop="mall"](${bbox});`);
   return parts.length?`[out:json][timeout:20];(${parts.join('')});out tags center ${LIMIT+1};`:'';
  }
  function classify(el){const t=el.tags||{},lat=el.lat??el.center?.lat,lon=el.lon??el.center?.lon;if(!Number.isFinite(lat)||!Number.isFinite(lon)||lat< -90||lat>90||lon< -180||lon>180)return null;
   let group,sub;
   if(t.shop==='supermarket'){group='supermarkets';const name=normalize([t.brand,t.name,t.operator].filter(Boolean).join(' '));sub=profile.brands.find(b=>{const term=normalize(b);return term==='spar'?/\b(spar|interspar|eurospar)\b/.test(name):new RegExp('\\b'+term+'\\b').test(name);})||'其他超市';}
   else if(t.shop==='mall'){group='shopping';sub='mall';}
   else if(t.aeroway==='aerodrome'){group='transport';sub='airport';}
   else if(t.railway==='station'&&t.station!=='subway'){group='transport';sub='station';}
   else if(['restaurant','cafe','marketplace'].includes(t.amenity)){group='food';sub={restaurant:'restaurant',cafe:'cafe',marketplace:'market'}[t.amenity];}else return null;
   const name=t['name:zh']||t.name||t.brand||t.operator||categoryText({group,sub})+'（未标名称）';const website=t.website||t['contact:website'];
   return {id:`osm-${el.type}-${el.id}`,osm:`${el.type}/${el.id}`,lat,lon,group,sub,name,source:'OpenStreetMap',address:[t['addr:street'],t['addr:housenumber'],t['addr:city']].filter(Boolean).join(' '),cuisine:t.cuisine,hours:t.opening_hours,website:website&&/^https?:\/\//i.test(website)?website:null};
  }
  async function search(){
   if(destroyed||!scope().valid)return;
   cancel();const query=makeQuery();if(!query){state='请先开启美食、超市、交通或商圈栏目。';updateStatus();return;}
   const memo=cache.get(query);if(memo&&Date.now()-memo.time<TTL){remote=memo.points;truncated=memo.truncated;loadedAt=memo.at;scopeDirty=false;state='使用 10 分钟内的缓存结果；数量仅指已载入地点，并非全城总数。';searchCenter=map.getCenter();render();return;}
   const request=new AbortController();controller=request;loading=true;scopeDirty=false;updateStatus();const startBounds=map.getBounds().toBBoxString();const center=map.getCenter();const timeout=setTimeout(()=>request.abort(),25000);
   try{
    const response=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body:new URLSearchParams({data:query}),signal:request.signal});
    if(!response.ok)throw Error(response.status===429?'请求较多，请稍后重试。':'地点服务暂时不可用（'+response.status+'）。');
    const body=await response.json();if(!Array.isArray(body.elements))throw Error('地点服务返回格式异常。');if(body.remark)throw Error('查询未完整完成，请缩小范围后重试。');
    if(destroyed||controller!==request)return;
    const unique=new Map();for(const el of body.elements.slice(0,LIMIT)){const p=classify(el);if(p)unique.set(p.id,p);}remote=[...unique.values()];truncated=body.elements.length>LIMIT;loadedAt=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});scopeDirty=startBounds!==map.getBounds().toBBoxString();searchCenter=center;
    cache.set(query,{points:remote,truncated,time:Date.now(),at:loadedAt});if(cache.size>24)cache.delete(cache.keys().next().value);
    state=remote.length?'已获取 OpenStreetMap 地点；品牌数量是载入数，不代表城市门店总量。':'查询完成，此范围暂无匹配的 OpenStreetMap 地点；不表示现实中没有门店。';
   }catch(e){if(destroyed||controller!==request)return;state=e.name==='AbortError'?'查询超时或已取消，请缩小范围后重试。':(e.message==='Failed to fetch'?'无法连接地点服务，请检查网络或稍后重试。':e.message);state+=' 已有地点保留；可使用外部地图继续搜索。';scopeDirty=true;
   }finally{clearTimeout(timeout);if(!destroyed&&controller===request){controller=null;loading=false;render();}}
  }
  function cancel(){clearTimeout(timer);if(controller){controller.abort();controller=null;}loading=false;}
  function focus(p){if(!p)return;filters.groups[p.group]=true;filters.subs[p.group][p.sub]=true;panel.querySelectorAll('[data-poi-group]').forEach(input=>{input.checked=input.dataset.poiSub?filters.subs[input.dataset.poiGroup]?.[input.dataset.poiSub]:filters.groups[input.dataset.poiGroup];});persist();render();map.setView([p.lat,p.lon],16);L.popup().setLatLng([p.lat,p.lon]).setContent(popup(p)).openOn(map);}
  function onChange(e){const input=e.target.closest('[data-poi-group]');if(!input)return;const group=input.dataset.poiGroup,sub=input.dataset.poiSub;cancel();if(sub){filters.subs[group][sub]=input.checked;if(input.checked){filters.groups[group]=true;panel.querySelector(`input[data-poi-group="${group}"]:not([data-poi-sub])`).checked=true;}}else filters.groups[group]=input.checked;persist();render();if(group!=='landmarks'&&input.checked)timer=setTimeout(search,650);}
  function onPanelClick(e){if(e.target.closest('#searchPois')){clearTimeout(timer);search();return;}const button=e.target.closest('[data-curated]');if(button)focus(curated.find(p=>p.id===button.dataset.curated));}
  function onResultClick(e){const b=e.target.closest('[data-focus-poi]');if(b)focus(pointsById.get(b.dataset.focusPoi));}
  function onMove(){if(destroyed)return;scopeDirty=true;searchCenter=map.getCenter();render();clearTimeout(timer);if(panel.querySelector('#autoPois').checked)timer=setTimeout(search,900);}
  panel.addEventListener('change',onChange);panel.addEventListener('click',onPanelClick);results.addEventListener('click',onResultClick);map.on('moveend',onMove);
  const auto=panel.querySelector('#autoPois');auto.onchange=()=>{if(auto.checked)search();else clearTimeout(timer);};
  document.querySelector('#fitMap').onclick=()=>{const points=allPoints().filter(enabled).map(p=>[p.lat,p.lon]);if(filters.groups.landmarks)landmarks.forEach(m=>points.push(m.getLatLng()));if(points.length)map.fitBounds(L.latLngBounds(points),{padding:[40,40],maxZoom:15});};
  render();
  return {destroy(){destroyed=true;cancel();map.off('moveend',onMove);panel.removeEventListener('change',onChange);panel.removeEventListener('click',onPanelClick);results.removeEventListener('click',onResultClick);if(map.hasLayer(cluster))map.removeLayer(cluster);}};
 }
 return {mount};
})();

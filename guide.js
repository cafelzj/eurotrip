(()=>{
 let map,explorer;
 const guide=document.querySelector('#travelGuide'),countries=travelCountries,cities=travelCities,H=KnowledgeHub;
 const europe=countries.filter(c=>!H.isChina(c)),chinaCities=cities.filter(c=>H.isChina(countries.find(n=>n.id===c.country)));
 const countryButton=document.querySelector('#travelMode'),countryMenu=document.querySelector('#countryMenu'),chinaButton=document.querySelector('#chinaMode'),chinaMenu=document.querySelector('#chinaMenu');
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const link=(url,label)=>`<a href="${h(url)}" target="_blank" rel="noopener noreferrer">${h(label)} ↗</a>`;
 let lastChina=chinaCities[0].id;
 try{const saved=sessionStorage.getItem('eurotrip-china-city');if(chinaCities.some(c=>c.id===saved))lastChina=saved;}catch{}
 H.finalize();
 function setMode(mode){
  const travel=mode!=='words';guide.hidden=!travel;document.querySelector('#vocabulary').hidden=travel;
  for(const [id,selected]of [['travelMode',mode==='europe'],['wordsMode',mode==='words'],['chinaMode',mode==='china']]){const button=document.getElementById(id);button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected);}
 }
 function navigate(hash){if(location.hash===hash)route();else location.hash=hash;}
 function disposeMap(){explorer?.destroy();explorer=null;if(map){map.stop();map.remove();map=null;}}
 function destinationHeader(country,city){
  const n=city||country,chinese=H.isChina(country);
  return `<div class="breadcrumbs"><a href="${H.guideUrl(country,chinese?city:null)}">${chinese?'中国城市':country.flag+' '+h(country.name)+' · 欧洲国家'}</a><span>/ ${city?h(city.name):'国家概览'}</span></div><div class="destination-hero ${city?'city-hero':'country-intro'}"><div><div class="guide-kicker">${city?'CITY':'COUNTRY'} FIELD NOTES · ${h(n.local.toUpperCase())}</div><h1>${city?'':country.flag+' '}${h(n.name)}<small>${h(n.local)}</small></h1><p>${h(n.intro)}</p>${link(n.tourism,'官方旅行指南')}</div></div>`;
 }
 function destinationPage(country,city,zone){guide.innerHTML=destinationHeader(country,city)+H.cityPicker(country,city)+H.render(country,city,zone);H.bind(guide);}
 function mapPage(country,city,params){
  H.rememberDestination(country,city);const scope=city||country;
  guide.innerHTML=`<div class="breadcrumbs"><a href="${H.guideUrl(country,city)}">← ${h(scope.name)} · ${H.sectionName(country)}</a></div><div class="city-hero map-destination-heading"><h1>${h(scope.name)}<small>卡片地图</small></h1></div><div class="card-map-workspace"><section id="cityExplorer" aria-label="卡片地图图层"></section><div class="map-panel"><div id="travelMap" aria-label="${h(scope.name)}卡片地图"></div><div class="map-caption"><span id="mapNotice">© ${TravelMaps.provider(country,city).name} · 参考位置</span><button id="fitMap">显示全部地点</button></div></div></div><div class="sights-column"></div>`;
  guide.classList.add('map-focused');
  if(!window.L){document.querySelector('#travelMap').textContent='地图未能加载，请从目的地卡片继续浏览。';return;}
  const center=city||cities.find(c=>c.country===country.id);
  map=TravelMaps.create('travelMap',{country,city,center:[center.lat,center.lon],zoom:city?13:7,onTileError:()=>{const notice=document.querySelector('#mapNotice');if(notice)notice.textContent='底图暂不可用，卡片地点仍可查看。';}});
  const border=countryBorders.features.find(f=>f.properties.name===country.border);if(border){const layer=L.geoJSON(border,{style:{color:'#879f78',weight:1.5,fillOpacity:city?0:.2},interactive:false}).addTo(map);if(!city)map.fitBounds(layer.getBounds(),{padding:[20,20]});}
  explorer=CityExplorer.mount({map,country,city});const fixed=CardGraph.nodes.get(params.get('focus')),search=CardGraph.nodes.get(params.get('search')||params.get('food'));const inScope=n=>n&&H.scoped(country,city).some(x=>x.id===n.id);
  if(inScope(fixed)&&H.mapBinding(fixed).mode==='fixed')explorer.focusNode(fixed.id);
  if((inScope(search)||search?.shopping&&search.country===country.id)&&H.mapBinding(search).mode==='dynamic')explorer.searchCard(search);
  requestAnimationFrame(()=>map?.invalidateSize());
 }
 function renderRoute(){
  disposeMap();guide.classList.remove('map-focused');const [path,query='']=location.hash.slice(1).split('?'),parts=path.split('/'),params=new URLSearchParams(query);
  if(parts[0]==='words'){setMode('words');return;}
  if(parts[0]==='cards'){navigate('#guide/'+H.lastCountry());return;}
  if(parts[0]==='card'){
   let id;try{id=decodeURIComponent(parts.slice(1).join('/'));}catch{id='';}
   const n=CardGraph.nodes.get(id),destination=n?H.destinationFor(n):null;setMode(H.isChina(destination?.country)?'china':'europe');guide.innerHTML=CardGraph.renderDetail(id);return;
  }
  if(parts[0]==='china'){
   const city=chinaCities.find(c=>c.id===parts[1]);if(!city){navigate('#china/'+lastChina);return;}
   lastChina=city.id;try{sessionStorage.setItem('eurotrip-china-city',lastChina);}catch{}
   setMode('china');destinationPage(countries.find(c=>c.id===city.country),city,params.get('zone')||'all');return;
  }
  if(parts[0]==='map'){
   const city=cities.find(c=>c.id===parts[1]),country=countries.find(c=>c.id===(city?.country||parts[1]));
   if(!country){navigate('#guide/'+H.lastCountry());return;}
   if(H.isChina(country)&&!city){navigate('#map/'+lastChina);return;}
   setMode(H.isChina(country)?'china':'europe');mapPage(country,city,params);return;
  }
  const country=countries.find(c=>c.id===parts[1])||europe[0],city=parts[2]?cities.find(c=>c.id===parts[2]&&c.country===country.id):null;
  if(H.isChina(country)){navigate(H.guideUrl(country,city)+(query?'?'+query:''));return;}
  if(parts[2]&&!city){navigate(H.guideUrl(country));return;}
  setMode('europe');destinationPage(country,city,params.get('zone')||'all');
 }
 function syncMenus(){
  const parts=location.hash.slice(1).split('?')[0].split('/');let country,city;
  if(parts[0]==='china')city=cities.find(c=>c.id===parts[1]);
  if(parts[0]==='guide'){country=countries.find(c=>c.id===parts[1]);city=cities.find(c=>c.id===parts[2]);}
  if(parts[0]==='map'){city=cities.find(c=>c.id===parts[1]);country=countries.find(c=>c.id===parts[1]);}
  if(parts[0]==='card')try{const n=CardGraph.nodes.get(decodeURIComponent(parts[1]));if(n)({country,city}=H.destinationFor(n));}catch{}
  country=country||countries.find(c=>c.id===city?.country);
  const selected=europe.find(c=>c.id===country?.id)||europe.find(c=>c.id===H.lastCountry())||europe[0];
  const currentChina=chinaCities.find(c=>c.id===city?.id)||chinaCities.find(c=>c.id===lastChina);
  countryButton.textContent='◎ 欧洲国家'+(country&&!H.isChina(country)?' · '+selected.name:'')+' ▾';
  chinaButton.textContent='⌂ 中国城市'+(H.isChina(country)?' · '+currentChina.name:'')+' ▾';
  countryMenu.innerHTML=europe.map(c=>`<button type="button" role="menuitemradio" tabindex="-1" aria-checked="${c.id===selected.id}" data-nav-country="${c.id}"><span>${c.flag}</span><span><b>${h(c.name)}</b><small>${h(c.local)}</small></span><i>${c.id===selected.id?'✓':''}</i></button>`).join('');
  chinaMenu.innerHTML=chinaCities.map(c=>`<button type="button" role="menuitemradio" tabindex="-1" aria-checked="${c.id===currentChina.id}" data-nav-city="${c.id}"><span>🏯</span><span><b>${h(c.name)}</b><small>${h(c.province)} · ${h(c.local)}</small></span><i>${c.id===currentChina.id?'✓':''}</i></button>`).join('');
 }
 const menus=[[countryButton,countryMenu,'data-nav-country',id=>'#guide/'+id],[chinaButton,chinaMenu,'data-nav-city',id=>'#china/'+id]];
 function closeMenus(focusButton){for(const [button,menu]of menus){menu.hidden=true;button.setAttribute('aria-expanded','false');}focusButton?.focus();}
 function openMenu(button,menu){closeMenus();menu.hidden=false;button.setAttribute('aria-expanded','true');(menu.querySelector('[aria-checked=true]')||menu.querySelector('button'))?.focus();}
 for(const [button,menu,attribute,url]of menus){
  button.onclick=()=>menu.hidden?openMenu(button,menu):closeMenus(button);
  button.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();openMenu(button,menu);}});
  menu.onclick=e=>{const option=e.target.closest('['+attribute+']');if(option){closeMenus(button);navigate(url(option.getAttribute(attribute)));}};
  menu.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeMenus(button);return;}if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const options=[...menu.querySelectorAll('button')],at=options.indexOf(document.activeElement),next=e.key==='Home'?0:e.key==='End'?options.length-1:(at+(e.key==='ArrowDown'?1:-1)+options.length)%options.length;options[next].focus();});
 }
 function route(){closeMenus();renderRoute();syncMenus();window.FloatingMap?.sync();}
 for(const event of ['click','focusin'])document.addEventListener(event,e=>{if(!e.target.closest('.country-mode-control'))closeMenus();});
 document.querySelector('#wordsMode').onclick=()=>navigate('#words');
 document.querySelector('#saved').addEventListener('click',()=>navigate('#words'));
 window.addEventListener('hashchange',()=>{route();window.scrollTo({top:0,behavior:'instant'});});route();
})();

(()=>{
 let map,explorer;
 const guide=document.querySelector('#travelGuide'),countries=travelCountries,cities=travelCities,H=KnowledgeHub;
 const europe=countries.filter(c=>!H.isChina(c)),chinaCities=ChinaRegions.destinations;
 const countryButton=document.querySelector('#travelMode'),countryMenu=document.querySelector('#countryMenu'),chinaButton=document.querySelector('#chinaMode'),chinaMenu=document.querySelector('#chinaMenu');
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const link=(url,label)=>`<a href="${h(url)}" target="_blank" rel="noopener noreferrer">${h(label)} ↗</a>`;
 let lastChina=chinaCities[0].id;
 try{const saved=sessionStorage.getItem('eurotrip-china-city');if(chinaCities.some(c=>c.id===saved))lastChina=saved;}catch{}
 H.finalize();
 function setMode(mode){
  const travel=mode!=='words';guide.hidden=!travel;document.querySelector('#vocabulary').hidden=travel;
  for(const [id,selected]of [['travelMode',mode==='europe'],['wordsMode',mode==='words'],['chinaMode',mode==='china'],['produceMode',mode==='produce'],['planMode',mode==='plan']]){const button=document.getElementById(id);button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',selected);}
 }
 function navigate(hash){if(location.hash===hash)route();else location.hash=hash;}
 function disposeMap(){explorer?.destroy();explorer=null;if(map){map.stop();map.remove();map=null;}}
 function destinationHeader(country,city){
  const n=city||country,chinese=H.isChina(country);
  return `<div class="breadcrumbs"><a href="${H.guideUrl(country,chinese?city:null)}">${chinese?'中国城市':'欧洲国家 · '+h(country.name)}</a>${chinese?ChinaRegions.breadcrumbs(city):`<span>/ ${city?h(city.name):'国家概览'}</span>`}</div><div class="destination-hero ${chinese?'':'destination-intro-merged '}${city?'city-hero':'country-intro'}"><div><div class="guide-kicker">${city?'CITY':'COUNTRY'} FIELD NOTES · ${h(n.local.toUpperCase())}</div><h1>${city?'':country.flag+' '}${h(n.name)}${n.local!==n.name?`<small>${h(n.local)}</small>`:''}</h1><p>${h(n.intro)}</p><div class="destination-header-actions">${n.tourism?link(n.tourism,'官方旅行指南'):''}${chinese?'':`<a class="destination-overview ${city?'':'active'}" href="${H.guideUrl(country)}" ${city?'':'aria-current="page"'}>国家概览${city?' →':' · 当前'}</a><span>选择下方城市，查看本城关联内容</span>`}</div></div></div>`;
 }
 function destinationPage(country,city,zone){const header=destinationHeader(country,city);guide.innerHTML=(H.isChina(country)?header:header.slice(0,header.indexOf('<div class="destination-hero')))+H.cityPicker(country,city)+H.render(country,city,zone);H.bind(guide);}
 function switchDestination(country,city,zone){
  const top=window.scrollY;
  H.dispose();
  const header=destinationHeader(country,city),wrapper=document.createElement('div');
  wrapper.innerHTML=header.slice(0,header.indexOf('<div class="destination-hero'));
  guide.querySelector('.breadcrumbs').replaceWith(wrapper.firstElementChild);
  wrapper.innerHTML=H.cityPicker(country,city);guide.querySelector('.destination-picker').replaceWith(wrapper.firstElementChild);
  wrapper.innerHTML=H.render(country,city,zone);guide.querySelector('.knowledge-hub').replaceWith(wrapper.firstElementChild);
  H.bind(guide);syncMenus();window.FloatingMap?.sync();window.scrollTo({top,behavior:'instant'});
 }
 guide.addEventListener('click',event=>{
  const button=event.target.closest('[data-guide-city]');if(!button)return;
  const context=H.mapContext();if(!context||H.isChina(context.country))return;
  const city=button.dataset.guideCity?cities.find(c=>c.country===context.country.id&&c.id===button.dataset.guideCity):null;
  if(button.dataset.guideCity&&!city)return;if(context.city?.id===city?.id)return;
  const query=new URLSearchParams();if(context.zone!=='all')query.set('zone',context.zone);if(context.q)query.set('q',context.q);if(context.kind!=='all')query.set('kind',context.kind);if(context.view==='waterfall')query.set('view','waterfall');
  const url=H.guideUrl(context.country,city)+(query.size?'?'+query:'');if(location.hash===url)return;
  const arrow=button.closest('.destination-stepper'),label=button.getAttribute('aria-label');
  history.pushState(null,'',url);switchDestination(context.country,city,context.zone);
  (arrow?guide.querySelector(`.destination-stepper [aria-label="${label}"]`):guide.querySelector(`.destination-switcher [data-guide-city="${city?.id||''}"]`))?.focus({preventScroll:true});
 });
 function mapPage(country,city,params){
  H.rememberDestination(country,city);const scope=city||country;
  guide.innerHTML=`<div class="breadcrumbs"><a href="${H.guideUrl(country,city)}">← ${h(scope.name)} · ${H.sectionName(country)}</a></div><div class="city-hero map-destination-heading"><h1>${h(scope.name)}<small>卡片地图</small></h1>${H.isChina(country)?`<p class="china-location">${h(ChinaRegions.label(city))}</p>`:''}</div><div class="card-map-workspace"><section id="cityExplorer" aria-label="卡片地图图层"></section><div class="map-panel"><div id="travelMap" aria-label="${h(scope.name)}卡片地图"></div><div class="map-caption"><span id="mapNotice">© ${TravelMaps.provider(country,city).name} · 参考位置</span><button id="fitMap">显示全部地点</button></div></div></div><div class="sights-column"></div>`;
  guide.classList.add('map-focused');
  if(!window.L){document.querySelector('#travelMap').textContent='地图未能加载，请从目的地卡片继续浏览。';return;}
  const center=city||cities.find(c=>c.country===country.id);
  map=TravelMaps.create('travelMap',{country,city,center:[center.lat,center.lon],zoom:city?13:7,onTileError:()=>{const notice=document.querySelector('#mapNotice');if(notice)notice.textContent='底图暂不可用，卡片地点仍可查看。';}});
  const border=countryBorders.features.find(f=>f.properties.name===country.border);if(border){const layer=L.geoJSON(border,{style:{color:'#879f78',weight:1.5,fillOpacity:city?0:.2},interactive:false}).addTo(map);if(!city)map.fitBounds(layer.getBounds(),{padding:[20,20]});}
  explorer=CityExplorer.mount({map,country,city});const fixed=CardGraph.nodes.get(params.get('focus')),search=CardGraph.nodes.get(params.get('search')||params.get('food'));const inScope=n=>n&&H.scoped(country,city).some(x=>x.id===n.id);
  if(inScope(fixed)&&H.mapBinding(fixed).mode==='fixed')explorer.focusNode(fixed.id);
  if((inScope(search)||search?.shopping&&H.countryIds(search).includes(country.id))&&H.mapBinding(search).mode==='dynamic')explorer.searchCard(search);
  requestAnimationFrame(()=>map?.invalidateSize());
 }
 function renderRoute(){
  H.dispose();ChinaFlavorUI.dispose();CardManager.dispose?.();disposeMap();guide.classList.remove('map-focused');const [path,query='']=location.hash.slice(1).split('?'),parts=path.split('/'),params=new URLSearchParams(query);
  if(parts[0]==='words'){setMode('words');guide.replaceChildren();return;}
  if(parts[0]==='plan'){setMode('plan');guide.innerHTML=PlanPage.render(params);PlanPage.bind(guide,params);return;}
  if(parts[0]==='flavors'){
   const next=new URLSearchParams(params);next.set('primary','food');
   if(parts[1]&&parts[1]!=='all')next.set('province',parts[1]);
   const type=next.get('type');if(type&&type!=='all')next.set('secondary',type==='milktea'?'drinks':type);
   next.delete('type');
   if(next.has('county')&&!next.has('city')){const parent=Object.values(flavorCounties.cities).find(c=>c.province===parts[1]&&c.regions.some(r=>String(r.adcode)===next.get('county')));if(parent)next.set('city',parent.city);}
   // Retain older ingredient links as an exact ingredient filter in the unified browser.
   history.replaceState(null,'','#card-manager/china?'+next);renderRoute();return;
  }
  if(parts[0]==='produce'){
   const country=parts[1]==='budapest'?'hu':produceCountries[parts[1]]?parts[1]:ProducePage.lastCountry();
   if(parts[1]!==country||parts.length!==2){navigate('#produce/'+country+(query?'?'+query:''));return;}
   setMode('produce');guide.innerHTML=ProducePage.render(country);ProducePage.bind(guide);return;
  }
  if(parts[0]==='card-manager'){const region=parts[1]==='china'?'china':'europe';setMode(region);guide.innerHTML=CardManager.render(region);CardManager.bind(guide,params,region);return;}
  if(parts[0]==='cards'){navigate('#guide/'+H.lastCountry());return;}
  if(parts[0]==='card'){
   let id;try{id=decodeURIComponent(parts.slice(1).join('/'));}catch{id='';}
   const canonical=CardStore.resolveId(id);if(canonical!==id){id=canonical;history.replaceState(null,'','#card/'+encodeURIComponent(id)+(query?'?'+query:''));}const n=CardGraph.nodes.get(id),destination=n?H.destinationFor(n):null;setMode(H.isChina(destination?.country)?'china':'europe');guide.innerHTML=CardGraph.renderDetail(id);return;
  }
  if(parts[0]==='china'){
   const city=ChinaRegions.resolve(parts.slice(1));if(!city){navigate(ChinaRegions.url(ChinaRegions.get(lastChina)));return;}
   const canonical=ChinaRegions.url(city);if('#'+path!==canonical){navigate(canonical+(query?'?'+query:''));return;}
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
 let chinaMenuPath={province:null,city:null},chinaMenuContext=null;
 function positionChinaMenu(){
  if(chinaMenu.hidden)return;chinaMenu.style.translate='0px';const box=chinaMenu.getBoundingClientRect();
  chinaMenu.style.translate=(Math.max(12,Math.min(box.x,innerWidth-box.width-12))-box.x)+'px';
 }
 window.addEventListener('resize',positionChinaMenu);
 function drawChinaMenu(focusSelector){
  const {selected,managing,overview}=chinaMenuContext,province=ChinaRegions.provinces.find(p=>p.id===chinaMenuPath.province),city=ChinaRegions.get(chinaMenuPath.city);
  const option=(attribute,id,name,caption,icon='🏯',branch=false)=>`<button type="button" role="menuitem" tabindex="-1" ${attribute}="${h(id)}" ${branch?'aria-haspopup="menu"':''} ${!branch&&selected?.id===id&&!managing?'aria-current="page"':''} class="${!managing&&selected&&(id===selected.id||id===selected.provinceId||id===selected.parentCity)?'is-selected':''}"><span>${icon}</span><span><b>${h(name)}</b><small>${h(caption)}</small></span><i>${branch?'›':selected?.id===id&&!managing?'✓':'↗'}</i></button>`;
  let content='';
  if(!province){
   content='<div class="china-menu-path" role="presentation">省份 → 城市 → 县区</div>'+ChinaRegions.provinces.map(p=>option('data-nav-province',p.id,p.name,'选择城市 / 地区','▧',true)).join('');
  }else if(!city){
   content=`<button type="button" role="menuitem" tabindex="-1" class="china-menu-back" data-nav-back="provinces">← 返回省份</button><div class="china-menu-path" role="presentation">${h(province.name)} · 城市 / 地区</div>`+option('data-nav-province-overview',province.id,province.name+'总览','查看本省全部已收录卡片','▦')+ChinaRegions.prefectures(province.id).map(c=>{
    const children=ChinaRegions.counties(c);return option(children.length?'data-nav-city-branch':'data-nav-city',c.id,c.adminName,children.length?'选择县区 · '+children.length+' 个县级单位':'县级城市 · 查看卡片','🏯',!!children.length);
   }).join('');
  }else{
   content=`<button type="button" role="menuitem" tabindex="-1" class="china-menu-back" data-nav-back="cities">← 返回${h(province.name)}城市清单</button><div class="china-menu-path" role="presentation">${h(province.name)} · ${h(city.adminName)} · 县区</div>`+option('data-nav-city',city.id,city.adminName+'总览','查看全市及下辖县区卡片','▦')+ChinaRegions.counties(city).map(c=>option('data-nav-city',c.id,c.adminName,c.level==='county-city'?'县级市':'县 / 区')).join('');
  }
  chinaMenu.innerHTML=overview+content;chinaMenu.setAttribute('aria-label',city?city.adminName+'县区菜单':province?province.name+'城市菜单':'中国省市县菜单');chinaMenu.scrollTop=0;
  if(focusSelector)(chinaMenu.querySelector(focusSelector)||chinaMenu.querySelector('button'))?.focus();
  positionChinaMenu();
 }
 function syncMenus(){
  const parts=location.hash.slice(1).split('?')[0].split('/'),managing=parts[0]==='card-manager',managingChina=managing&&parts[1]==='china',managingEurope=managing&&!managingChina;let country,city;
  if(parts[0]==='china')city=ChinaRegions.resolve(parts.slice(1));
  if(parts[0]==='guide'){country=countries.find(c=>c.id===parts[1]);city=cities.find(c=>c.id===parts[2]);}
  if(parts[0]==='map'){city=cities.find(c=>c.id===parts[1]);country=countries.find(c=>c.id===parts[1]);}
  if(parts[0]==='card')try{const n=CardGraph.nodes.get(decodeURIComponent(parts[1]));if(n)({country,city}=H.destinationFor(n));}catch{}
  country=country||countries.find(c=>c.id===city?.country);
  const selected=europe.find(c=>c.id===country?.id)||europe.find(c=>c.id===H.lastCountry())||europe[0];
  const currentChina=chinaCities.find(c=>c.id===city?.id)||chinaCities.find(c=>c.id===lastChina);
  countryButton.innerHTML='◎ 欧洲国家'+(managingEurope?'<span class="mode-location"> · 卡片管理</span>':country&&!H.isChina(country)?`<span class="mode-location"> · ${h(selected.name)}</span>`:'')+' ▾';
  chinaButton.innerHTML='⌂ 中国城市'+(managingChina?'<span class="mode-location"> · 总览</span>':H.isChina(country)?`<span class="mode-location"> · ${h(currentChina.name)}</span>`:'')+' ▾';
  const managerOption=region=>{const active=region==='china'?managingChina:managingEurope;return `<button type="button" role="menuitem" tabindex="-1" class="country-menu-manager" data-nav-manager="${region}" ${active?'aria-current="page"':''}><span>▦</span><span><b>${region==='china'?'总览':'卡片管理'}</b><small>${region==='china'?'省市县 · 三种浏览方式':'表格 · 搜索与筛选'}</small></span><i>${active?'✓':'↗'}</i></button>`;};
  countryMenu.innerHTML=europe.map(c=>`<button type="button" role="menuitemradio" tabindex="-1" aria-checked="${!managingEurope&&c.id===selected.id}" data-nav-country="${c.id}"><span>${c.flag}</span><span><b>${h(c.name)}</b><small>${h(c.local)}</small></span><i>${!managingEurope&&c.id===selected.id?'✓':''}</i></button>`).join('')+managerOption('europe');
  chinaMenuContext={selected:currentChina,managing:managingChina,overview:managerOption('china')};chinaMenuPath={province:null,city:null};drawChinaMenu();
 }
 const menus=[[countryButton,countryMenu,'data-nav-country',id=>'#guide/'+id],[chinaButton,chinaMenu,'data-nav-city',id=>ChinaRegions.url(ChinaRegions.get(id))]];
 function closeMenus(focusButton){for(const [button,menu]of menus){menu.hidden=true;button.setAttribute('aria-expanded','false');}focusButton?.focus();}
 function openMenu(button,menu){closeMenus();if(menu===chinaMenu){chinaMenuPath={province:null,city:null};drawChinaMenu();}menu.hidden=false;positionChinaMenu();button.setAttribute('aria-expanded','true');(menu.querySelector('[aria-current=page]')||menu.querySelector('[aria-checked=true]')||menu.querySelector('.is-selected')||menu.querySelector('button'))?.focus();}
 for(const [button,menu,attribute,url]of menus){
  button.onclick=()=>menu.hidden?openMenu(button,menu):closeMenus(button);
  button.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();openMenu(button,menu);}});
  menu.onclick=e=>{
   if(menu===chinaMenu){
    const province=e.target.closest('[data-nav-province]'),city=e.target.closest('[data-nav-city-branch]'),back=e.target.closest('[data-nav-back]'),overview=e.target.closest('[data-nav-province-overview]');
    if(province){chinaMenuPath={province:province.dataset.navProvince,city:null};drawChinaMenu('[data-nav-back]');return;}
    if(city){chinaMenuPath.city=city.dataset.navCityBranch;drawChinaMenu('[data-nav-back]');return;}
    if(back){const old={...chinaMenuPath};chinaMenuPath=back.dataset.navBack==='provinces'?{province:null,city:null}:{province:old.province,city:null};drawChinaMenu(old.city?'[data-nav-city-branch="'+old.city+'"]':'[data-nav-province="'+old.province+'"]');return;}
    if(overview){closeMenus(button);navigate('#card-manager/china?province='+encodeURIComponent(overview.dataset.navProvinceOverview));return;}
   }
   const manager=e.target.closest('[data-nav-manager]');if(manager){closeMenus(button);navigate(CardManager.returnUrl(manager.dataset.navManager==='china'?'card-manager-china':'card-manager'));return;}const option=e.target.closest('['+attribute+']');if(option){closeMenus(button);navigate(url(option.getAttribute(attribute)));}};
  menu.addEventListener('keydown',e=>{
   if(menu===chinaMenu&&e.key==='ArrowRight'&&document.activeElement.matches('[data-nav-province],[data-nav-city-branch]')){e.preventDefault();document.activeElement.click();return;}
   if(menu===chinaMenu&&e.key==='ArrowLeft'&&chinaMenuPath.province){e.preventDefault();menu.querySelector('[data-nav-back]')?.click();return;}
   if(e.key==='Escape'){e.preventDefault();closeMenus(button);return;}if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const options=[...menu.querySelectorAll('button')],at=options.indexOf(document.activeElement),next=e.key==='Home'?0:e.key==='End'?options.length-1:(at+(e.key==='ArrowDown'?1:-1)+options.length)%options.length;options[next].focus();});
 }
 function route(){closeMenus();renderRoute();syncMenus();window.FloatingMap?.sync();}
 for(const event of ['click','focusin'])document.addEventListener(event,e=>{if(!e.composedPath().some(node=>node.classList?.contains('country-mode-control')))closeMenus();});
 document.querySelector('#wordsMode').onclick=()=>navigate('#words');
 document.querySelector('#produceMode').onclick=()=>navigate('#produce/'+ProducePage.lastCountry());
 document.querySelector('#planMode').onclick=()=>navigate('#plan');
 window.addEventListener('hashchange',()=>{
  const parts=location.hash.slice(1).split('?')[0].split('/'),context=H.mapContext();
  if(parts[0]==='guide'&&parts[1]===context?.country.id&&guide.querySelector('.destination-feature')&&(!parts[2]||cities.some(c=>c.id===parts[2]&&c.country===parts[1]))){
   const params=new URLSearchParams(location.hash.split('?')[1]||'');switchDestination(context.country,cities.find(c=>c.id===parts[2]),params.get('zone')||'all');
  }else{route();window.scrollTo({top:0,behavior:'instant'});}
 });route();
})();

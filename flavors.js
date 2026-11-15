/* Shared Chinese flavor cards and administrative atlas; no standalone flavor page. */
window.ChinaFlavorUI=(()=>{
 let regionRecords=null,regionUrl=null;
 const data={...window.flavorCatalog,get items(){return regionRecords||(window.ChinaCollection?ChinaCollection.flavors():window.flavorCatalog.items);}};
 const foodCity=item=>item.cityName||item.city;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const provinces=new Map(data.provinces.map(p=>[p.id,p]));
 const regions=window.flavorMapRegions||{};
 const counties=window.flavorCounties||{cities:{},itemCounties:{}};
 const countyCodes=new Map(Object.values(counties.cities).flatMap(city=>city.regions.map(county=>[String(county.adcode),{...county,city:city.city,province:city.province}])));
 let countyRequest=null,nationalRequest=null,nationalMarkup=null;
 const assigned=item=>item.countyCodes||counties.itemCounties[item.id]||[];
 const inDistrict=(item,name)=>item.district===name||item.districts?.includes(name)||assigned(item).some(code=>countyCodes.get(String(code))?.name===name);
 const countyCity=state=>Object.values(counties.cities).find(city=>city.province===state.province&&city.city===state.city);
 const countyMatches=(item,code)=>code==='all'||(code==='unspecified'?!assigned(item).length:assigned(item).includes(Number(code)));
 function locationLabel(item){const direct=Object.values(counties.cities).find(city=>city.province===item.province&&city.city===foodCity(item)&&!city.regions.length);if(direct)return provinces.get(item.province).name+' · '+foodCity(item)+(direct.hasCountyDivisions===false?'（全市）':'（县级）');const names=assigned(item).map(code=>countyCodes.get(String(code))?.name).filter(Boolean);return [provinces.get(item.province).name,...(foodCity(item)===provinces.get(item.province).name?[]:[foodCity(item)]),names.length>2?names.length+'个县区':names.join('、')||'县区待明确'].join(' · ');}
 let active=null,mapRequest=null;const provinceMarkup=new Map();
 const scope=state=>data.items.filter(item=>state.province==='all'||item.province===state.province);
 const cities=state=>[...new Set(scope(state).map(item=>foodCity(item)))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 const districtMode=state=>regions[state.province]?.level==='district';
 const cityOptions=state=>regions[state.province]?.regions.map(r=>r.name)||cities(state);
 function url(state){return regionUrl(state);}
 function matches(item,state){
  return (state.city==='all'||foodCity(item)===state.city)&&(state.district==='all'||inDistrict(item,state.district))&&countyMatches(item,state.county||'all');
 }
 function atlas(state,p){
  const district=districtMode(state),unit=district?(p?.id==='chongqing'?'区县':'区'):'城市';
  const picker=p?`<div class="flavor-city-picker"><div class="flavor-city-list"><h2>${unit}清单</h2><nav aria-label="选择${h(p.name)}${unit}">${['all',...cityOptions(state)].map(city=>`<a class="ui-choice" data-flavor-city="${h(city)}" href="${h(url({...state,city:district?'all':city,district:district?city:'all',county:'all'}))}">${city==='all'?'全部'+unit:h(city)}<small></small></a>`).join('')}</nav></div><figure><h2>${h(p.name)} · ${unit}地图</h2><div class="flavor-map flavor-province-map" id="flavorProvinceMap" data-province="${p.id}" aria-busy="true"><p>正在加载${h(p.name)}地图…</p></div></figure></div>`:'';
  return `<section class="flavor-atlas" aria-label="按省份和城市选择风物"><div class="flavor-provinces"><h2>省份清单</h2><nav aria-label="选择风物省市">${[{id:'all',name:'全部已收录省市'},...data.provinces].map(region=>{const count=data.items.filter(i=>region.id==='all'||i.province===region.id).length;return `<a class="ui-choice" href="${h(url({...state,province:region.id,city:'all',district:'all',county:'all'}))}" ${state.province===region.id?'aria-current="page"':''}>${h(region.name)}<small>${count}</small></a>`;}).join('')}</nav></div><div class="flavor-location-pickers">${picker}${p&&!district?'<section id="flavorCountyPicker" class="flavor-county-picker" aria-label="选择县区"></section>':''}</div></section>`;
 }
 function syncProvinceMap(root){
  const host=root.querySelector('#flavorProvinceMap');if(!active||!host)return;
  const province=host.dataset.province,district=regions[province]?.level==='district';
  const list=data.items.filter(i=>i.province===province&&matches(i,{...active,city:'all',district:'all',county:'all'}));
  root.querySelectorAll('[data-flavor-city]').forEach(a=>{
   const city=a.dataset.flavorCity,current=(district?active.district:active.city)===city,count=city==='all'?list.length:list.filter(i=>district?inDistrict(i,city):foodCity(i)===city).length;
   a.setAttribute('href',url({...active,city:district?'all':city,district:district?city:'all',county:'all'}));if(current)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');a.querySelector('small').textContent=count;
  });
  host.querySelectorAll('[data-flavor-region]').forEach(a=>{
   const region=a.dataset.flavorRegion,count=list.filter(i=>district?inDistrict(i,region):foodCity(i)===region).length;
   const labelLink=host.querySelector('[data-flavor-label="'+CSS.escape(region)+'"]'),current=province===active.province&&(district?active.district:active.city)===region;
   for(const link of [a,labelLink]){
    link.setAttribute('href',url({...active,province,city:district?'all':region,district:district?region:'all',county:'all'}));
    link.classList.toggle('has-foods',count>0);link.classList.toggle('is-current',current);if(current)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');
    link.setAttribute('aria-label',region+'，'+count+'项已收录');link.querySelector('title').textContent=region+' · '+count+'项已收录';
   }
   const label=labelLink.querySelector('text');if(!label.dataset.label)label.dataset.label=label.textContent;label.textContent=label.dataset.label;
  });
 }
 function syncCountyPicker(root){
  const panel=root.querySelector('#flavorCountyPicker');if(!panel||!active)return;
  const city=countyCity(active),key=city?.adcode||'none';
  panel.hidden=!city;
  if(panel.dataset.city!==String(key)){
   countyRequest?.abort();panel.dataset.city=String(key);
   if(!city){panel.replaceChildren();return;}
   if(!city.regions.length){panel.innerHTML='<div class="flavor-county-prompt"><h2>'+h(city.city)+(city.hasCountyDivisions===false?' · 全市范围':' · 县级范围')+'</h2></div>';return;}
   panel.innerHTML='<div class="flavor-county-list"><h2>'+h(city.city)+' · 县区清单</h2><nav aria-label="选择'+h(city.city)+'县区">'+[{adcode:'all',name:'全部县区'},...city.regions,{adcode:'unspecified',name:'县区待明确'}].map(county=>'<a class="ui-choice" data-flavor-county-choice="'+county.adcode+'" href="'+h(url({...active,county:String(county.adcode)}))+'">'+h(county.name)+'<small></small></a>').join('')+'</nav></div><figure><h2>'+h(city.city)+' · 县区地图</h2><div class="flavor-map flavor-province-map flavor-county-map" id="flavorCountyMap" aria-busy="true"><p>正在加载县区地图…</p></div></figure>';
   loadCountyMap(root,city);
  }
  if(!city?.regions.length)return;
  const list=scope(active).filter(item=>matches(item,{...active,county:'all'}));
  panel.querySelectorAll('[data-flavor-county-choice]').forEach(link=>{
   const code=link.dataset.flavorCountyChoice;link.href=url({...active,county:code});
   if(active.county===code)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');
   link.querySelector('small').textContent=list.filter(item=>countyMatches(item,code)).length;
  });
  panel.querySelectorAll('[data-flavor-county],[data-flavor-county-label]').forEach(link=>{
   const code=link.dataset.flavorCounty||link.dataset.flavorCountyLabel,county=countyCodes.get(code),count=list.filter(item=>countyMatches(item,code)).length;
   link.setAttribute('href',url({...active,county:code}));link.classList.toggle('has-foods',count>0);link.classList.toggle('is-current',active.county===code);
   if(active.county===code)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');
   link.setAttribute('aria-label',county.name+'，'+count+'项已收录');link.querySelector('title').textContent=county.name+' · '+count+'项已收录';
  });
 }
 async function loadCountyMap(root,city){
  const host=root.querySelector('#flavorCountyMap'),request=new AbortController();countyRequest=request;
  try{let markup=provinceMarkup.get('county:'+city.adcode);if(!markup){const response=await fetch(city.map,{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');markup=await response.text();provinceMarkup.set('county:'+city.adcode,markup);}if(request.signal.aborted||!host.isConnected)return;host.innerHTML=markup;fitMap(host);syncCountyPicker(root);}
  catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>县区地图暂未加载，仍可用县区清单筛选。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 async function loadMap(root){
  mapRequest?.abort();const host=root.querySelector('#flavorProvinceMap');if(!host)return;
  const request=new AbortController();mapRequest=request;const province=host.dataset.province;
  try{let markup=provinceMarkup.get(province);if(!markup){const response=await fetch('assets/maps/flavors/'+province+'.svg',{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');markup=await response.text();provinceMarkup.set(province,markup);}if(request.signal.aborted||!host.isConnected)return;host.innerHTML=markup;fitMap(host);syncProvinceMap(root);}
  catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>地图暂未加载，仍可用城市清单筛选。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 function dispose(){nationalRequest?.abort();nationalRequest=null;regionRecords=null;regionUrl=null;countyRequest?.abort();countyRequest=null;mapRequest?.abort();mapRequest=null;active=null;}
 function fitMap(host){const svg=host.querySelector('svg');if(!svg)return;const box=svg.getBBox();if(box.width&&box.height)svg.setAttribute('viewBox',`${box.x-18} ${box.y-18} ${box.width+36} ${box.height+36}`);}
 async function loadNationalMap(root){
  const host=root.querySelector('[data-china-national-map]'),request=new AbortController();nationalRequest=request;
  try{
   if(!nationalMarkup){const response=await fetch('assets/maps/china-provinces.svg?v=southwest-1000-20261115',{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');nationalMarkup=await response.text();}
   if(request.signal.aborted||!host.isConnected)return;host.innerHTML=nationalMarkup;
   for(const link of host.querySelectorAll('[data-map-province]')){const id=link.dataset.mapProvince;link.setAttribute('href',url({...active,province:id,city:'all',county:'all',district:'all'}));link.classList.toggle('is-current',active.province===id);}
   for(const label of host.querySelectorAll('.province-labels text')){
    const province=data.provinces.find(p=>p.name===label.textContent);if(!province)continue;
    const link=document.createElementNS('http://www.w3.org/2000/svg','a');link.setAttribute('href',url({...active,province:province.id,city:'all',county:'all',district:'all'}));link.setAttribute('data-map-province-label',province.id);link.setAttribute('tabindex','-1');label.replaceWith(link);link.append(label);
   }
   const pending=[...host.querySelectorAll('[data-pending-province]')].map(n=>n.dataset.pendingProvince);
   root.querySelector('[data-china-pending-provinces]').innerHTML=pending.map(name=>`<span class="china-pending-province">${h(name)} <small>待收录</small></span>`).join('');
  }catch(error){if(error.name!=='AbortError'&&host.isConnected){host.innerHTML='<p>全国地图暂未加载，可使用省份按钮筛选。</p>';}}
 }
 function regionPicker(root,state,items,href){
  dispose();regionRecords=items;regionUrl=href;active={...state};
  root.innerHTML=`<section class="china-national-region"><details class="china-national-atlas" ${state.province==='all'?'open':''}><summary>全国地图${provinces.get(state.province)?' · '+h(provinces.get(state.province).name):''}</summary><div data-china-national-map class="china-national-map" aria-label="全国省份地图"><p>正在加载全国地图…</p></div></details><div data-china-province-choices class="china-province-filters"></div><div data-china-pending-provinces class="china-pending-provinces"></div></section>`+atlas(active,provinces.get(active.province));
  root.querySelector('[data-china-province-choices]').append(root.querySelector('.flavor-provinces'));root.querySelector('.flavor-provinces h2').textContent='省份筛选';
  if(state.province==='all')root.querySelector('.flavor-atlas').hidden=true;
  if(state.province!=='all'){
   const link=document.createElement('a');link.className='china-region-overview-link';link.href=ChinaRegions.selectionUrl(state);link.textContent=(state.county!=='all'&&state.county!=='unspecified'?'县区':state.city!=='all'||state.district!=='all'?'本市':'本省')+'总览 →';root.querySelector('.flavor-atlas').prepend(link);
  }
  syncProvinceMap(root);syncCountyPicker(root);loadMap(root);loadNationalMap(root);
  return {destroy:dispose};
 }
 return {dispose,regionPicker};
})();

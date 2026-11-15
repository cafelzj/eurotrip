/* Shared Chinese flavor cards and administrative atlas; no standalone flavor page. */
window.ChinaFlavorUI=(()=>{
 let regionRecords=null,regionUrl=null;
 const data={...window.flavorCatalog,get items(){return regionRecords||(window.ChinaCollection?ChinaCollection.flavors():window.flavorCatalog.items);}};
 const flavorType=item=>item.flavorType||item.type,foodCity=item=>item.cityName||item.city,sourceIds=item=>item.sourceIds||item.sources;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const provinces=new Map(data.provinces.map(p=>[p.id,p]));
 const types=new Map(data.categories.map(c=>[c.id,c]));
 const regions=window.flavorMapRegions||{};
 const counties=window.flavorCounties||{cities:{},itemCounties:{}};
 const countyCodes=new Map(Object.values(counties.cities).flatMap(city=>city.regions.map(county=>[String(county.adcode),{...county,city:city.city,province:city.province}])));
 let countyRequest=null;
 const assigned=item=>item.countyCodes||counties.itemCounties[item.id]||[];
 const inDistrict=(item,name)=>item.district===name||item.districts?.includes(name)||assigned(item).some(code=>countyCodes.get(String(code))?.name===name);
 const countyCity=state=>Object.values(counties.cities).find(city=>city.province===state.province&&city.city===state.city);
 const countyMatches=(item,code)=>code==='all'||(code==='unspecified'?!assigned(item).length:assigned(item).includes(Number(code)));
 function locationLabel(item){const direct=Object.values(counties.cities).find(city=>city.province===item.province&&city.city===foodCity(item)&&!city.regions.length);if(direct)return provinces.get(item.province).name+' · '+foodCity(item)+'（县级）';const names=assigned(item).map(code=>countyCodes.get(String(code))?.name).filter(Boolean);return [provinces.get(item.province).name,...(foodCity(item)===provinces.get(item.province).name?[]:[foodCity(item)]),names.length>2?names.length+'个县区':names.join('、')||'县区待明确'].join(' · ');}
 let active=null,mapRequest=null;const provinceMarkup=new Map();
 const scope=state=>data.items.filter(item=>state.province==='all'||item.province===state.province);
 const cities=state=>[...new Set(scope(state).map(item=>foodCity(item)))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 const districtMode=state=>regions[state.province]?.level==='district';
 const cityOptions=state=>regions[state.province]?.regions.map(r=>r.name)||cities(state);
 function url(state){return regionUrl(state);}
 function matches(item,state){
  return (state.city==='all'||foodCity(item)===state.city)&&(state.district==='all'||inDistrict(item,state.district))&&countyMatches(item,state.county||'all');
 }
 function card(item){
  const type=types.get(flavorType(item)),province=provinces.get(item.province);
  return `<article class="flavor-card ui-card" data-flavor-id="${h(item.id)}" data-knowledge-card="${h(item.id)}" style="--flavor-accent:${type.color}"><div class="flavor-card-header ui-card-header"><h3 class="ui-card-heading ui-card-title">${h(item.name)}</h3><div class="ui-card-meta"><span>${h(type.name)}</span><small>${h(locationLabel(item))}</small></div></div><div class="flavor-card-tags"><span>${h(item.kind)}</span>${item.locality?`<span class="flavor-locality">${h(item.locality)}</span>`:''}${(item.proteins||[]).map(p=>`<span>${h(p)}</span>`).join('')}</div>${window.CardImages?.inline?.(item)||''}${item.verificationStatus==='pending'?`<p class="flavor-verification-note"><strong>待核实</strong> · ${h(item.verificationNote)}</p>`:''}<p>${h(item.description)}</p><details><summary>${flavorType(item)==='crafts'?'特色与来源':'风味与来源'}</summary><div class="flavor-card-reading">${item.detail.split(/\n\s*\n/).filter(Boolean).map(paragraph=>`<p>${h(paragraph)}</p>`).join('')}${item.originNote?`<p class="flavor-origin-note">${h(item.originNote)}</p>`:''}${item.legacyRecords?.length?`<details class="flavor-legacy-reading"><summary>原城市卡片补充资料</summary>${item.legacyRecords.map(old=>`<h4>${h(old.name)}</h4><p>${h(old.description)}</p>${(old.reading?.length?old.reading:[{title:old.name,text:[old.description,old.note,old.details].filter(Boolean).join('\n\n')}]).map(section=>`<h4>${h(section.title)}</h4><p>${h(section.text).replace(/\n/g,'<br>')}</p>`).join('')}<div class="manager-source-links">${old.sources.map(([url,title])=>`<a href="${h(url)}" target="_blank" rel="noopener noreferrer">${h(title)} ↗</a>`).join('')}</div>`).join('')}</details>`:''}<div class="flavor-sources"><span>${item.verificationStatus==='pending'&&!sourceIds(item).length?(item.leadOrigin==='web-search'?'来源：网络检索线索，尚未完成正文核实':'来源：用户提供线索，尚未独立核实'):'资料来源'}</span>${sourceIds(item).map(id=>{const s=data.sources[id];return `<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`;}).join('')}${(item.candidateSources||[]).map(s=>`<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`).join('')}</div></div></details></article>`;
 }
 function atlas(state,p){
  const district=districtMode(state),unit=district?'区':'城市';
  const picker=p?`<div class="flavor-city-picker"><div class="flavor-city-list"><h2>${unit}清单</h2><nav aria-label="选择${h(p.name)}${unit}">${['all',...cityOptions(state)].map(city=>`<a class="ui-choice" data-flavor-city="${h(city)}" href="${h(url({...state,city:district?'all':city,district:district?city:'all',county:'all'}))}">${city==='all'?'全部'+unit:h(city)}<small></small></a>`).join('')}</nav><p class="flavor-city-note">清单和地图都可选择${unit}，数字随卡片类别和搜索更新。<span id="flavorMapScope"></span></p></div><figure><h2>${h(p.name)} · ${unit}地图</h2><div class="flavor-map flavor-province-map" id="flavorProvinceMap" data-province="${p.id}" aria-busy="true"><p>正在加载${h(p.name)}地图…</p></div><figcaption><a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">地图来源：DataV 地理小工具 ↗</a></figcaption></figure></div>`:'';
  return `<section class="flavor-atlas" aria-label="按省份和城市选择风物"><div class="flavor-provinces"><h2>省份清单</h2><nav aria-label="选择风物省市">${[{id:'all',name:'全部已收录省市'},...data.provinces].map(region=>{const count=data.items.filter(i=>region.id==='all'||i.province===region.id).length;return `<a class="ui-choice" href="${h(url({...state,province:region.id,city:'all',district:'all',county:'all'}))}" ${state.province===region.id?'aria-current="page"':''}>${h(region.name)}<small>${count}</small></a>`;}).join('')}</nav></div><div class="flavor-location-pickers">${picker}${p&&!district?'<section id="flavorCountyPicker" class="flavor-county-picker" aria-label="选择县区"></section>':''}</div><div class="flavor-province-intro"><h2>${h(p?.name||'各地风物')}</h2><p>${h(p?.summary||'从上方清单选择省市，再通过城市清单或省内地图筛选。')}</p></div></section>`;
 }
 function syncProvinceMap(root){
  const host=root.querySelector('#flavorProvinceMap');if(!active||!host)return;
  const province=host.dataset.province,district=regions[province]?.level==='district';
  const list=data.items.filter(i=>i.province===province&&matches(i,{...active,city:'all',district:'all',county:'all'}));
  const unmapped=list.filter(i=>district?(!i.district&&!i.districts?.length&&!assigned(i).length):foodCity(i)==='全省').length;
  root.querySelector('#flavorMapScope').textContent=unmapped?' 另有 '+unmapped+' 项按'+(district?'全市':'全省')+'收录，未指定'+(district?'区':'城市')+'。':'';
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
  if(panel.dataset.city!==String(key)){
   countyRequest?.abort();panel.dataset.city=String(key);
   if(!city){panel.innerHTML='<div class="flavor-county-prompt"><h2>县区清单与地图</h2><p>选择左侧城市，即可查看对应的县、县级市和区。</p></div>';return;}
   if(!city.regions.length){panel.innerHTML='<div class="flavor-county-prompt"><h2>'+h(city.city)+' · 县级范围</h2><p>这里已是省直管县级单位，可直接查看本地食单。</p></div>';return;}
   panel.innerHTML='<div class="flavor-county-list"><h2>'+h(city.city)+' · 县区清单</h2><nav aria-label="选择'+h(city.city)+'县区">'+[{adcode:'all',name:'全部县区'},...city.regions,{adcode:'unspecified',name:'县区待明确'}].map(county=>'<a class="ui-choice" data-flavor-county-choice="'+county.adcode+'" href="'+h(url({...active,county:String(county.adcode)}))+'">'+h(county.name)+'<small></small></a>').join('')+'</nav><p class="flavor-city-note" id="flavorCountyScope"></p></div><figure><h2>'+h(city.city)+' · 县区地图</h2><div class="flavor-map flavor-province-map flavor-county-map" id="flavorCountyMap" aria-busy="true"><p>正在加载县区地图…</p></div><figcaption><a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">地图来源：DataV 地理小工具 ↗</a></figcaption></figure>';
   loadCountyMap(root,city);
  }
  if(!city?.regions.length)return;
  const list=scope(active).filter(item=>matches(item,{...active,county:'all'}));
  panel.querySelector('#flavorCountyScope').textContent='数字随类别和搜索更新。跨县区条目会在相关县区显示；未明确县区 '+list.filter(i=>!assigned(i).length).length+' 项，不自动分配到各县。';
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
  try{let markup=provinceMarkup.get('county:'+city.adcode);if(!markup){const response=await fetch(city.map,{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');markup=await response.text();provinceMarkup.set('county:'+city.adcode,markup);}if(request.signal.aborted||!host.isConnected)return;host.innerHTML=markup;syncCountyPicker(root);}
  catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>县区地图暂未加载，仍可用县区清单筛选。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 async function loadMap(root){
  mapRequest?.abort();const host=root.querySelector('#flavorProvinceMap');if(!host)return;
  const request=new AbortController();mapRequest=request;const province=host.dataset.province;
  try{let markup=provinceMarkup.get(province);if(!markup){const response=await fetch('assets/maps/flavors/'+province+'.svg',{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');markup=await response.text();provinceMarkup.set(province,markup);}if(request.signal.aborted||!host.isConnected)return;host.innerHTML=markup;syncProvinceMap(root);}
  catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>地图暂未加载，仍可用城市清单筛选。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 function dispose(){regionRecords=null;regionUrl=null;countyRequest?.abort();countyRequest=null;mapRequest?.abort();mapRequest=null;active=null;}
 function regionPicker(root,state,items,href){
  mapRequest?.abort();countyRequest?.abort();regionRecords=items;regionUrl=href;
  active={...state};
  root.innerHTML=atlas(active,provinces.get(active.province));syncProvinceMap(root);syncCountyPicker(root);loadMap(root);
  return {destroy:dispose};
 }
 return {dispose,card,regionPicker};
})();

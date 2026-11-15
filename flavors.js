/* A local, sourced provincial food catalog. No external map or search requests. */
window.FlavorPage=(()=>{
 const data=window.flavorCatalog;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const provinces=new Map(data.provinces.map(p=>[p.id,p]));
 const types=new Map(data.categories.map(c=>[c.id,c]));
 const regions=window.flavorMapRegions||{};
 const counties=window.flavorCounties||{cities:{},itemCounties:{}};
 const countyCodes=new Map(Object.values(counties.cities).flatMap(city=>city.regions.map(county=>[String(county.adcode),{...county,city:city.city,province:city.province}])));
 let countyRequest=null;
 const assigned=item=>counties.itemCounties[item.id]||[];
 const inDistrict=(item,name)=>item.district===name||item.districts?.includes(name)||assigned(item).some(code=>countyCodes.get(String(code))?.name===name);
 const countyCity=state=>Object.values(counties.cities).find(city=>city.province===state.province&&city.city===state.city);
 const countyMatches=(item,code)=>code==='all'||(code==='unspecified'?!assigned(item).length:assigned(item).includes(Number(code)));
 function locationLabel(item){const direct=Object.values(counties.cities).find(city=>city.province===item.province&&city.city===item.city&&!city.regions.length);if(direct)return provinces.get(item.province).name+' · '+item.city+'（县级）';const names=assigned(item).map(code=>countyCodes.get(String(code))?.name).filter(Boolean);return [provinces.get(item.province).name,...(item.city===provinces.get(item.province).name?[]:[item.city]),names.length>2?names.length+'个县区':names.join('、')||'县区待明确'].join(' · ');}
 let active=null,mapRequest=null;const provinceMarkup=new Map();
 const scope=state=>data.items.filter(item=>state.province==='all'||item.province===state.province);
 const cities=state=>[...new Set(scope(state).map(item=>item.city))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 const districtMode=state=>regions[state.province]?.level==='district';
 const hasIngredientFilter=state=>['dishes','staples','ingredients'].includes(state.type);
 const cityOptions=state=>regions[state.province]?.regions.map(r=>r.name)||cities(state);
 function parse(province,params){
  const state={province:provinces.has(province)?province:'all',type:params.get('type')==='milktea'?'drinks':types.has(params.get('type'))?params.get('type'):'all',city:params.get('city')||'all',district:params.get('district')||'all',county:params.get('county')||'all',protein:data.proteins.includes(params.get('protein'))?params.get('protein'):'all',q:(params.get('q')||'').slice(0,160),review:['pending','sourced'].includes(params.get('review'))?params.get('review'):'all',limit:24};
  if(!hasIngredientFilter(state))state.protein='all';
  if(!cities(state).includes(state.city)&&!cityOptions(state).includes(state.city))state.city='all';
  if(!districtMode(state)||!cityOptions(state).includes(state.district))state.district='all';
  const county=countyCodes.get(state.county);
  if(state.city==='all'&&county?.province===state.province&&!districtMode(state))state.city=county.city;
  if(districtMode(state)||state.city==='all'||state.county!=='unspecified'&&(!county||county.province!==state.province||county.city!==state.city))state.county='all';
  return state;
 }
 function url(state){
  const params=new URLSearchParams();
  for(const key of ['type','city','district','county','protein','review'])if(state[key]&&state[key]!=='all')params.set(key,state[key]);
  if(state.q.trim())params.set('q',state.q.trim());
  return '#flavors'+(state.province==='all'?'':'/'+state.province)+(params.size?'?'+params:'');
 }
 function matches(item,state,ignoreType=false){
  const q=state.q.trim().toLocaleLowerCase();
  return (state.review==='all'||(item.verificationStatus==='pending'?'pending':'sourced')===state.review)&&(state.city==='all'||item.city===state.city)&&(state.district==='all'||inDistrict(item,state.district))&&countyMatches(item,state.county||'all')&&(ignoreType||state.type==='all'||item.type===state.type)&&(ignoreType||state.protein==='all'||item.proteins?.includes(state.protein))&&(!q||[item.name,item.city,item.district,item.locality,provinces.get(item.province).name,item.description,item.detail,item.kind,item.brand,item.company,item.verificationNote,...(item.aliases||[]),...(item.productTypes||[]),...(item.proteins||[])].join(' ').toLocaleLowerCase().includes(q));
 }
 function card(item){
  const type=types.get(item.type),province=provinces.get(item.province);
  return `<article class="flavor-card ui-card" data-flavor-id="${h(item.id)}" style="--flavor-accent:${type.color}"><div class="flavor-card-header ui-card-header"><h3 class="ui-card-heading ui-card-title">${h(item.name)}</h3><div class="ui-card-meta"><span>${h(type.name)}</span><small>${h(locationLabel(item))}</small></div></div><div class="flavor-card-tags"><span>${h(item.kind)}</span>${item.locality?`<span class="flavor-locality">${h(item.locality)}</span>`:''}${(item.proteins||[]).map(p=>`<span>${h(p)}</span>`).join('')}</div>${window.CardImages?.inline?.(item)||''}${item.verificationStatus==='pending'?`<p class="flavor-verification-note"><strong>待核实</strong> · ${h(item.verificationNote)}</p>`:''}<p>${h(item.description)}</p><details><summary>${item.type==='crafts'?'特色与来源':'风味与来源'}</summary><div class="flavor-card-reading">${item.detail.split(/\n\s*\n/).filter(Boolean).map(paragraph=>`<p>${h(paragraph)}</p>`).join('')}${item.originNote?`<p class="flavor-origin-note">${h(item.originNote)}</p>`:''}<div class="flavor-sources"><span>${item.verificationStatus==='pending'&&!item.sources.length?(item.leadOrigin==='web-search'?'来源：网络检索线索，尚未完成正文核实':'来源：用户提供线索，尚未独立核实'):'资料来源'}</span>${item.sources.map(id=>{const s=data.sources[id];return `<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`;}).join('')}${(item.candidateSources||[]).map(s=>`<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`).join('')}</div></div></details></article>`;
 }
 function atlas(state,p){
  const district=districtMode(state),unit=district?'区':'城市';
  const picker=p?`<div class="flavor-city-picker"><div class="flavor-city-list"><h2>${unit}清单</h2><nav aria-label="选择${h(p.name)}${unit}">${['all',...cityOptions(state)].map(city=>`<a class="ui-choice" data-flavor-city="${h(city)}" href="${h(url({...state,city:district?'all':city,district:district?city:'all',county:'all'}))}">${city==='all'?'全部'+unit:h(city)}<small></small></a>`).join('')}</nav><p class="flavor-city-note">清单和地图都可选择${unit}，数字随风物类别和搜索更新。<span id="flavorMapScope"></span></p></div><figure><h2>${h(p.name)} · ${unit}地图</h2><div class="flavor-map flavor-province-map" id="flavorProvinceMap" data-province="${p.id}" aria-busy="true"><p>正在加载${h(p.name)}地图…</p></div><figcaption><a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">地图来源：DataV 地理小工具 ↗</a></figcaption></figure></div>`:'';
  return `<section class="flavor-atlas" aria-label="按省份和城市选择风物"><div class="flavor-provinces"><h2>省份清单</h2><nav aria-label="选择风物省市">${[{id:'all',name:'全部已收录省市'},...data.provinces].map(region=>{const count=data.items.filter(i=>region.id==='all'||i.province===region.id).length;return `<a class="ui-choice" href="${h(url({...state,province:region.id,city:'all',district:'all',county:'all'}))}" ${state.province===region.id?'aria-current="page"':''}>${h(region.name)}<small>${count}</small></a>`;}).join('')}</nav></div><div class="flavor-location-pickers">${picker}${p&&!district?'<section id="flavorCountyPicker" class="flavor-county-picker" aria-label="选择县区"></section>':''}</div><div class="flavor-province-intro"><h2>${h(p?.name||'各地风物')}</h2><p>${h(p?.summary||'从上方清单选择省市，再通过城市清单或省内地图筛选。')}</p></div></section>`;
 }
 function render(province,params=new URLSearchParams()){
  active=parse(province,params);const state=active,p=provinces.get(state.province);
  return `<section class="flavor-page" aria-labelledby="flavorTitle"><header class="flavor-heading"><div><h1 id="flavorTitle">风物食单</h1><p>从地方美食到物产手作，沿着地图认识一方水土。</p></div><span>${data.provinces.length} 省市 · ${data.items.length} 项风物 · ${data.items.filter(i=>i.verificationStatus==='pending').length} 项待核实</span></header>${atlas(state,p)}<section class="flavor-browser" aria-label="查找地方风物"><div class="flavor-categories ui-tabs" role="group" aria-label="风物类别">${[{id:'all',name:'全部',color:'#285744'},...data.categories].map(c=>`<button type="button" data-flavor-type="${c.id}" aria-pressed="${state.type===c.id}">${h(c.name)} <small></small></button>`).join('')}</div><p id="flavorTypeNote" class="flavor-type-note" hidden>面条、包饺、饼馍，以及用米粉、杂粮、淀粉成形的地方主食和点心。</p><div class="flavor-filter-row"><label class="flavor-search ui-search"><span aria-hidden="true">⌕</span><input id="flavorSearch" type="search" maxlength="160" value="${h(state.q)}" aria-label="搜索风物名称、品牌或城市" placeholder="搜索名称、品牌、城市或食材…"></label><label class="flavor-review">资料状态<select class="ui-select" id="flavorReview"><option value="all">全部资料</option><option value="sourced" ${state.review==='sourced'?'selected':''}>有来源资料</option><option value="pending" ${state.review==='pending'?'selected':''}>待核实线索</option></select></label><button class="ui-button" type="button" data-flavor-reset>重置筛选</button></div><fieldset class="flavor-proteins" ${hasIngredientFilter(state)?'':'hidden'}><legend>按主要食材</legend>${['all',...data.proteins].map(p=>`<label><input type="radio" name="flavorProtein" value="${h(p)}" ${state.protein===p?'checked':''}>${p==='all'?'全部食材':h(p)}</label>`).join('')}</fieldset><div class="flavor-results-heading"><h2>${h(p?.name||'已收录地区')} · 地方食单</h2><span id="flavorResultCount" role="status" aria-live="polite"></span></div><div id="flavorResults" class="flavor-grid"></div><div class="flavor-load"><button type="button" id="flavorMore" hidden>再看 24 项</button></div></section><p class="flavor-editorial-note">资料整理：${h(data.reviewed)} · 待核实条目仅为线索；其名称、分类与归属可能需要修正。每项可展开查看说明与来源。饮料和乳制品分列，代用茶单独注明；菜名相同也可能有地方做法之别。</p></section>`;
 }
 function draw(root){
  if(!active)return;
  const list=scope(active),found=list.filter(item=>matches(item,active)),counts=list.filter(item=>matches(item,active,true));
  const pending=active.type!=='all'&&!list.some(item=>item.type===active.type);
  root.querySelector('#flavorResults').innerHTML=found.length?found.slice(0,active.limit).map(card).join(''):`<div class="flavor-empty"><p>${pending?'本省市这一品类的资料还在核对，暂未收录。':'没有符合筛选条件的条目。'}</p><button class="ui-button" type="button" data-flavor-reset>清除筛选，查看地方食单</button></div>`;
  root.querySelector('#flavorResultCount').textContent=`${found.length} 项${found.length>active.limit?' · 已显示 '+active.limit+' 项':''}`;
  root.querySelector('#flavorMore').hidden=found.length<=active.limit;
  root.querySelector('.flavor-proteins').hidden=!hasIngredientFilter(active);
  root.querySelector('#flavorTypeNote').hidden=active.type!=='staples';
  root.querySelectorAll('[data-flavor-type]').forEach(button=>{
   button.setAttribute('aria-pressed',String(button.dataset.flavorType===active.type));
   const type=button.dataset.flavorType;
   button.querySelector('small').textContent=type!=='all'&&!list.some(i=>i.type===type)?'待补充':counts.filter(i=>type==='all'||i.type===type).length;
  });
  root.querySelectorAll('[name="flavorProtein"]').forEach(radio=>radio.checked=radio.value===active.protein);
  syncProvinceMap(root);syncCountyPicker(root);
  root.querySelectorAll('.flavor-provinces nav a').forEach(a=>{const province=a.getAttribute('href').split('?')[0].split('/')[1]||'all';a.setAttribute('href',url({...active,province,city:'all',district:'all',county:'all'}));});
 }
 function update(root,push=false){
  active.limit=24;const next=url(active);if(next!==location.hash)history[push?'pushState':'replaceState'](null,'',next);draw(root);
 }
 function syncProvinceMap(root){
  const host=root.querySelector('#flavorProvinceMap');if(!active||!host)return;
  const province=host.dataset.province,district=regions[province]?.level==='district';
  const list=data.items.filter(i=>i.province===province&&matches(i,{...active,city:'all',district:'all',county:'all'}));
  const unmapped=list.filter(i=>district?(!i.district&&!i.districts?.length&&!assigned(i).length):i.city==='全省').length;
  root.querySelector('#flavorMapScope').textContent=unmapped?' 另有 '+unmapped+' 项按'+(district?'全市':'全省')+'收录，未指定'+(district?'区':'城市')+'。':'';
  root.querySelectorAll('[data-flavor-city]').forEach(a=>{
   const city=a.dataset.flavorCity,current=(district?active.district:active.city)===city,count=city==='all'?list.length:list.filter(i=>district?inDistrict(i,city):i.city===city).length;
   a.setAttribute('href',url({...active,city:district?'all':city,district:district?city:'all',county:'all'}));if(current)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');a.querySelector('small').textContent=count;
  });
  host.querySelectorAll('[data-flavor-region]').forEach(a=>{
   const region=a.dataset.flavorRegion,count=list.filter(i=>district?inDistrict(i,region):i.city===region).length;
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
 function bind(root){
  draw(root);loadMap(root);
  root.querySelector('#flavorSearch').oninput=event=>{active.q=event.target.value;update(root);};
  root.querySelector('#flavorReview').onchange=event=>{active.review=event.target.value;update(root,true);};
  root.querySelector('.flavor-proteins').onchange=event=>{if(event.target.name==='flavorProtein'){active.protein=event.target.value;update(root,true);}};
  root.querySelector('.flavor-browser').onclick=event=>{
   const type=event.target.closest('[data-flavor-type]');
   if(type){active.type=type.dataset.flavorType;if(!hasIngredientFilter(active))active.protein='all';update(root,true);return;}
   if(event.target.closest('[data-flavor-reset]')){active={...active,type:'all',review:'all',protein:'all',city:'all',district:'all',county:'all',q:'',limit:24};root.querySelector('#flavorSearch').value='';root.querySelector('#flavorReview').value='all';update(root,true);return;}
   if(event.target.closest('#flavorMore')){active.limit+=24;draw(root);}
  };
 }
 function dispose(){countyRequest?.abort();countyRequest=null;mapRequest?.abort();mapRequest=null;active=null;}
 return {render,bind,dispose};
})();

/* A local, sourced provincial food catalog. No external map or search requests. */
window.FlavorPage=(()=>{
 const data=window.flavorCatalog;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const provinces=new Map(data.provinces.map(p=>[p.id,p]));
 const types=new Map(data.categories.map(c=>[c.id,c]));
 const regions=window.flavorMapRegions||{};
 let active=null,mapRequest=null;const provinceMarkup=new Map();
 const scope=state=>data.items.filter(item=>state.province==='all'||item.province===state.province);
 const cities=state=>[...new Set(scope(state).map(item=>item.city))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 const districtMode=state=>regions[state.province]?.level==='district';
 const hasIngredientFilter=state=>['dishes','staples','ingredients'].includes(state.type);
 const cityOptions=state=>regions[state.province]?.regions.map(r=>r.name)||cities(state);
 function parse(province,params){
  const state={province:provinces.has(province)?province:'all',type:params.get('type')==='milktea'?'drinks':types.has(params.get('type'))?params.get('type'):'all',city:params.get('city')||'all',district:params.get('district')||'all',protein:data.proteins.includes(params.get('protein'))?params.get('protein'):'all',q:(params.get('q')||'').slice(0,160),limit:24};
  if(!hasIngredientFilter(state))state.protein='all';
  if(!cities(state).includes(state.city)&&!cityOptions(state).includes(state.city))state.city='all';
  if(!districtMode(state)||!cityOptions(state).includes(state.district))state.district='all';
  return state;
 }
 function url(state){
  const params=new URLSearchParams();
  for(const key of ['type','city','district','protein'])if(state[key]&&state[key]!=='all')params.set(key,state[key]);
  if(state.q.trim())params.set('q',state.q.trim());
  return '#flavors'+(state.province==='all'?'':'/'+state.province)+(params.size?'?'+params:'');
 }
 function matches(item,state,ignoreType=false){
  const q=state.q.trim().toLocaleLowerCase();
  return (state.city==='all'||item.city===state.city)&&(state.district==='all'||item.district===state.district||item.districts?.includes(state.district))&&(ignoreType||state.type==='all'||item.type===state.type)&&(ignoreType||state.protein==='all'||item.proteins?.includes(state.protein))&&(!q||[item.name,item.city,item.district,item.locality,provinces.get(item.province).name,item.description,item.detail,item.kind,item.brand,...(item.proteins||[])].join(' ').toLocaleLowerCase().includes(q));
 }
 function card(item){
  const type=types.get(item.type),province=provinces.get(item.province);
  return `<article class="flavor-card" data-flavor-id="${h(item.id)}" style="--flavor-accent:${type.color}"><div class="flavor-card-header"><h3>${h(item.name)}</h3><div><span>${h(type.name)}</span><small>${h(province.name===item.city?item.city:province.name+' · '+item.city)}</small></div></div><div class="flavor-card-tags"><span>${h(item.kind)}</span>${(item.proteins||[]).map(p=>`<span>${h(p)}</span>`).join('')}</div><p>${h(item.description)}</p><details><summary>风味与来源</summary><div class="flavor-card-reading"><p>${h(item.detail)}</p>${item.originNote?`<p class="flavor-origin-note">${h(item.originNote)}</p>`:''}<div class="flavor-sources"><span>资料来源</span>${item.sources.map(id=>{const s=data.sources[id];return `<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`;}).join('')}</div></div></details></article>`;
 }
 function atlas(state,p){
  const district=districtMode(state),unit=district?'区':'城市';
  const picker=p?`<div class="flavor-city-picker"><div class="flavor-city-list"><h2>${unit}清单</h2><nav aria-label="选择${h(p.name)}${unit}">${['all',...cityOptions(state)].map(city=>`<a data-flavor-city="${h(city)}" href="${h(url({...state,city:district?'all':city,district:district?city:'all'}))}">${city==='all'?'全部'+unit:h(city)}<small></small></a>`).join('')}</nav><p class="flavor-city-note">清单和地图都可选择${unit}，数字随食品类别和搜索更新。<span id="flavorMapScope"></span></p></div><figure><h2>${h(p.name)} · ${unit}地图</h2><div class="flavor-map flavor-province-map" id="flavorProvinceMap" data-province="${p.id}" aria-busy="true"><p>正在加载${h(p.name)}地图…</p></div><figcaption><a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">地图来源：DataV 地理小工具 ↗</a></figcaption></figure></div>`:'';
  return `<section class="flavor-atlas" aria-label="按省份和城市选择风物"><div class="flavor-provinces"><h2>省份清单</h2><nav aria-label="选择风物省市">${[{id:'all',name:'全部七省市'},...data.provinces].map(region=>{const count=data.items.filter(i=>region.id==='all'||i.province===region.id).length;return `<a href="${h(url({...state,province:region.id,city:'all',district:'all'}))}" ${state.province===region.id?'aria-current="page"':''}>${h(region.name)}<small>${count}</small></a>`;}).join('')}</nav></div>${picker}<div class="flavor-province-intro"><h2>${h(p?.name||'七省市风物')}</h2><p>${h(p?.summary||'从上方清单选择省市，再通过城市清单或省内地图筛选。')}</p></div></section>`;
 }
 function cityControl(state){
  const district=districtMode(state),selected=district?state.district:state.city;
  return `<label class="flavor-city">${district?'区':'城市'}<select id="flavorCity"><option value="all">${district?'全部区':'全部城市'}</option>${cityOptions(state).map(city=>`<option value="${h(city)}" ${selected===city?'selected':''}>${h(city)}</option>`).join('')}</select></label>`;
 }
 function render(province,params=new URLSearchParams()){
  active=parse(province,params);const state=active,p=provinces.get(state.province);
  return `<section class="flavor-page" aria-labelledby="flavorTitle"><header class="flavor-heading"><div><h1 id="flavorTitle">风物食单</h1><p>从地方品牌到家常名菜，沿着地图认识一方水土。</p></div><span>${data.provinces.length} 省市 · ${data.items.length} 项风物</span></header>${atlas(state,p)}<section class="flavor-browser" aria-label="查找地方食品"><div class="flavor-categories" role="group" aria-label="食品类别">${[{id:'all',name:'全部',color:'#285744'},...data.categories].map(c=>`<button type="button" data-flavor-type="${c.id}" aria-pressed="${state.type===c.id}">${h(c.name)} <small></small></button>`).join('')}</div><p id="flavorTypeNote" class="flavor-type-note" hidden>面条、包饺、饼馍，以及用米粉、杂粮、淀粉成形的地方主食和点心。</p><div class="flavor-filter-row"><label class="flavor-search"><span aria-hidden="true">⌕</span><input id="flavorSearch" type="search" maxlength="160" value="${h(state.q)}" aria-label="搜索风物名称、品牌或城市" placeholder="搜索名称、品牌、城市或食材…"></label>${cityControl(state)}<button type="button" data-flavor-reset>重置筛选</button></div><fieldset class="flavor-proteins" ${hasIngredientFilter(state)?'':'hidden'}><legend>按主要食材</legend>${['all',...data.proteins].map(p=>`<label><input type="radio" name="flavorProtein" value="${h(p)}" ${state.protein===p?'checked':''}>${p==='all'?'全部食材':h(p)}</label>`).join('')}</fieldset><div class="flavor-results-heading"><h2>${h(p?.name||'七省市')} · 地方食单</h2><span id="flavorResultCount" role="status" aria-live="polite"></span></div><div id="flavorResults" class="flavor-grid"></div><div class="flavor-load"><button type="button" id="flavorMore" hidden>再看 24 项</button></div></section><p class="flavor-editorial-note">资料核对：${h(data.reviewed)} · 每项可展开查看风味、产地说明与来源。饮料和乳制品分列，代用茶单独注明；菜名相同也可能有地方做法之别。</p></section>`;
 }
 function draw(root){
  if(!active)return;
  const list=scope(active),found=list.filter(item=>matches(item,active)),counts=list.filter(item=>matches(item,active,true));
  const pending=active.type!=='all'&&!list.some(item=>item.type===active.type);
  root.querySelector('#flavorResults').innerHTML=found.length?found.slice(0,active.limit).map(card).join(''):`<div class="flavor-empty"><p>${pending?'本省市这一品类的资料还在核对，暂未收录。':'没有符合筛选条件的条目。'}</p><button type="button" data-flavor-reset>清除筛选，查看地方食单</button></div>`;
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
  syncProvinceMap(root);
  root.querySelectorAll('.flavor-provinces nav a').forEach(a=>{const province=a.getAttribute('href').split('?')[0].split('/')[1]||'all';a.setAttribute('href',url({...active,province,city:'all',district:'all'}));});
 }
 function update(root,push=false){
  active.limit=24;const next=url(active);if(next!==location.hash)history[push?'pushState':'replaceState'](null,'',next);draw(root);
 }
 function syncProvinceMap(root){
  const host=root.querySelector('#flavorProvinceMap');if(!active||!host)return;
  const province=host.dataset.province,district=regions[province]?.level==='district';
  const list=data.items.filter(i=>i.province===province&&matches(i,{...active,city:'all',district:'all'}));
  const unmapped=list.filter(i=>district?(!i.district&&!i.districts?.length):i.city==='全省').length;
  root.querySelector('#flavorMapScope').textContent=unmapped?' 另有 '+unmapped+' 项按'+(district?'全市':'全省')+'收录，未指定'+(district?'区':'城市')+'。':'';
  root.querySelectorAll('[data-flavor-city]').forEach(a=>{
   const city=a.dataset.flavorCity,current=(district?active.district:active.city)===city,count=city==='all'?list.length:list.filter(i=>district?(i.district===city||i.districts?.includes(city)):i.city===city).length;
   a.setAttribute('href',url({...active,city:district?'all':city,district:district?city:'all'}));if(current)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');a.querySelector('small').textContent=count;
  });
  host.querySelectorAll('[data-flavor-region]').forEach(a=>{
   const region=a.dataset.flavorRegion,count=list.filter(i=>district?(i.district===region||i.districts?.includes(region)):i.city===region).length;
   const labelLink=host.querySelector('[data-flavor-label="'+CSS.escape(region)+'"]'),current=province===active.province&&(district?active.district:active.city)===region;
   for(const link of [a,labelLink]){
    link.setAttribute('href',url({...active,province,city:district?'all':region,district:district?region:'all'}));
    link.classList.toggle('has-foods',count>0);link.classList.toggle('is-current',current);if(current)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');
    link.setAttribute('aria-label',region+'，'+count+'项已收录');link.querySelector('title').textContent=region+' · '+count+'项已收录';
   }
   const label=labelLink.querySelector('text');if(!label.dataset.label)label.dataset.label=label.textContent;label.textContent=label.dataset.label;
  });
 }
 async function loadMap(root){
  mapRequest?.abort();const host=root.querySelector('#flavorProvinceMap');if(!host)return;
  const request=new AbortController();mapRequest=request;const province=host.dataset.province;
  try{let markup=provinceMarkup.get(province);if(!markup){const response=await fetch('assets/maps/flavors/'+province+'.svg',{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');markup=await response.text();provinceMarkup.set(province,markup);}if(request.signal.aborted||!host.isConnected)return;host.innerHTML=markup;syncProvinceMap(root);}
  catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>地图暂未加载，仍可用城市清单和城市选择框筛选。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 function bind(root){
  draw(root);loadMap(root);
  root.querySelector('#flavorSearch').oninput=event=>{active.q=event.target.value;update(root);};
  root.querySelector('#flavorCity').onchange=event=>{if(districtMode(active)){active.district=event.target.value;active.city='all';}else{active.city=event.target.value;active.district='all';}update(root,true);};
  root.querySelector('.flavor-proteins').onchange=event=>{if(event.target.name==='flavorProtein'){active.protein=event.target.value;update(root,true);}};
  root.querySelector('.flavor-browser').onclick=event=>{
   const type=event.target.closest('[data-flavor-type]');
   if(type){active.type=type.dataset.flavorType;if(!hasIngredientFilter(active))active.protein='all';update(root,true);return;}
   if(event.target.closest('[data-flavor-reset]')){active={...active,type:'all',protein:'all',city:'all',district:'all',q:'',limit:24};root.querySelector('#flavorSearch').value='';root.querySelector('#flavorCity').value='all';update(root,true);return;}
   if(event.target.closest('#flavorMore')){active.limit+=24;draw(root);}
  };
 }
 function dispose(){mapRequest?.abort();mapRequest=null;active=null;}
 return {render,bind,dispose};
})();

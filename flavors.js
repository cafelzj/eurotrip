/* A local, sourced provincial food catalog. No external map or search requests. */
window.FlavorPage=(()=>{
 const data=window.flavorCatalog;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const provinces=new Map(data.provinces.map(p=>[p.id,p]));
 const types=new Map(data.categories.map(c=>[c.id,c]));
 let active=null,mapRequest=null,mapMarkup='';
 const scope=state=>data.items.filter(item=>state.province==='all'||item.province===state.province);
 const cities=state=>[...new Set(scope(state).map(item=>item.city))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 function parse(province,params){
  const state={province:provinces.has(province)?province:'all',type:types.has(params.get('type'))?params.get('type'):'all',city:params.get('city')||'all',protein:data.proteins.includes(params.get('protein'))?params.get('protein'):'all',q:(params.get('q')||'').slice(0,160),limit:24};
  if(state.type!=='dishes')state.protein='all';
  if(!cities(state).includes(state.city))state.city='all';
  return state;
 }
 function url(state){
  const params=new URLSearchParams();
  for(const key of ['type','city','protein'])if(state[key]&&state[key]!=='all')params.set(key,state[key]);
  if(state.q.trim())params.set('q',state.q.trim());
  return '#flavors'+(state.province==='all'?'':'/'+state.province)+(params.size?'?'+params:'');
 }
 function matches(item,state,ignoreType=false){
  const q=state.q.trim().toLocaleLowerCase();
  return (state.city==='all'||item.city===state.city)&&(ignoreType||state.type==='all'||item.type===state.type)&&(ignoreType||state.protein==='all'||item.proteins?.includes(state.protein))&&(!q||[item.name,item.city,provinces.get(item.province).name,item.description,item.detail,item.kind,item.brand,...(item.proteins||[])].join(' ').toLocaleLowerCase().includes(q));
 }
 function card(item){
  const type=types.get(item.type),province=provinces.get(item.province);
  return `<article class="flavor-card" data-flavor-id="${h(item.id)}" style="--flavor-accent:${type.color}"><div class="flavor-card-header"><h3>${h(item.name)}</h3><div><span>${h(type.name)}</span><small>${h(province.name===item.city?item.city:province.name+' · '+item.city)}</small></div></div><div class="flavor-card-tags"><span>${h(item.kind)}</span>${(item.proteins||[]).map(p=>`<span>${h(p)}</span>`).join('')}</div><p>${h(item.description)}</p><details><summary>风味与来源</summary><div class="flavor-card-reading"><p>${h(item.detail)}</p>${item.originNote?`<p class="flavor-origin-note">${h(item.originNote)}</p>`:''}<div class="flavor-sources"><span>资料来源</span>${item.sources.map(id=>{const s=data.sources[id];return `<a href="${h(s.url)}" target="_blank" rel="noopener noreferrer">${h(s.name)} ↗</a>`;}).join('')}</div></div></details></article>`;
 }
 function render(province,params=new URLSearchParams()){
  active=parse(province,params);const state=active,p=provinces.get(state.province),list=scope(state);
  return `<section class="flavor-page" aria-labelledby="flavorTitle"><header class="flavor-heading"><div><h1 id="flavorTitle">风物食单</h1><p>从地方品牌到家常名菜，沿着地图认识一方水土。</p></div><span>${data.provinces.length} 省市 · ${data.items.length} 项风物</span></header><section class="flavor-atlas" aria-label="中国分省风物地图"><figure><div class="flavor-map" id="flavorMap" aria-busy="true"><p>正在加载分省地图…</p></div><figcaption><span><i></i> 已收录 <i></i> 待补充</span><a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">地图来源：DataV 地理小工具 ↗</a></figcaption></figure><div class="flavor-provinces"><h2>先从这七省市出发</h2><nav aria-label="选择风物省市">${[{id:'all',name:'全部七省市'},...data.provinces].map(region=>{const count=data.items.filter(i=>region.id==='all'||i.province===region.id).length;return `<a href="${h(url({...state,province:region.id,city:'all'}))}" ${state.province===region.id?'aria-current="page"':''}>${h(region.name)}<small>${count}</small></a>`;}).join('')}</nav><div class="flavor-province-intro"><h2>${h(p?.name||'七省市风物')}</h2><p>${h(p?.summary||'北京、山东、安徽、江苏、浙江、上海、山西。按城市查找地方味道，也可以跨省比较同一类食品。')}</p><small>地方品牌与原产地分别注明；当前为首批选录，仍会继续扩充城市。</small></div></div></section><section class="flavor-browser" aria-label="查找地方食品"><div class="flavor-categories" role="group" aria-label="食品类别">${[{id:'all',name:'全部',color:'#285744'},...data.categories].map(c=>`<button type="button" data-flavor-type="${c.id}" aria-pressed="${state.type===c.id}">${h(c.name)} <small></small></button>`).join('')}</div><div class="flavor-filter-row"><label class="flavor-search"><span aria-hidden="true">⌕</span><input id="flavorSearch" type="search" maxlength="160" value="${h(state.q)}" aria-label="搜索风物名称、品牌或城市" placeholder="搜索名称、品牌、城市或食材…"></label><label class="flavor-city">城市<select id="flavorCity"><option value="all">全部城市</option>${cities(state).map(city=>`<option value="${h(city)}" ${state.city===city?'selected':''}>${h(city)}</option>`).join('')}</select></label><button type="button" data-flavor-reset>重置筛选</button></div><fieldset class="flavor-proteins" ${state.type==='dishes'?'':'hidden'}><legend>按主要食材</legend>${['all',...data.proteins].map(p=>`<label><input type="radio" name="flavorProtein" value="${h(p)}" ${state.protein===p?'checked':''}>${p==='all'?'全部食材':h(p)}</label>`).join('')}</fieldset><div class="flavor-results-heading"><h2>${h(p?.name||'七省市')} · 地方食单</h2><span id="flavorResultCount" role="status" aria-live="polite"></span></div><div id="flavorResults" class="flavor-grid"></div><div class="flavor-load"><button type="button" id="flavorMore" hidden>再看 24 项</button></div></section><p class="flavor-editorial-note">资料核对：${h(data.reviewed)} · 每项可展开查看风味、产地说明与来源。饮料和乳制品分列，代用茶单独注明；菜名相同也可能有地方做法之别。</p></section>`;
 }
 function draw(root){
  if(!active)return;
  const list=scope(active),found=list.filter(item=>matches(item,active)),counts=list.filter(item=>matches(item,active,true));
  const pending=active.type!=='all'&&!list.some(item=>item.type===active.type);
  root.querySelector('#flavorResults').innerHTML=found.length?found.slice(0,active.limit).map(card).join(''):`<div class="flavor-empty"><p>${pending?'本省市这一品类的资料还在核对，暂未收录。':'没有符合筛选条件的条目。'}</p><button type="button" data-flavor-reset>清除筛选，查看地方食单</button></div>`;
  root.querySelector('#flavorResultCount').textContent=`${found.length} 项${found.length>active.limit?' · 已显示 '+active.limit+' 项':''}`;
  root.querySelector('#flavorMore').hidden=found.length<=active.limit;
  root.querySelector('.flavor-proteins').hidden=active.type!=='dishes';
  root.querySelectorAll('[data-flavor-type]').forEach(button=>{
   button.setAttribute('aria-pressed',String(button.dataset.flavorType===active.type));
   const type=button.dataset.flavorType;
   button.querySelector('small').textContent=type!=='all'&&!list.some(i=>i.type===type)?'待补充':counts.filter(i=>type==='all'||i.type===type).length;
  });
  root.querySelectorAll('[name="flavorProtein"]').forEach(radio=>radio.checked=radio.value===active.protein);
  root.querySelectorAll('.flavor-provinces nav a,[data-map-province]').forEach(a=>{const province=a.dataset.mapProvince||a.getAttribute('href').split('?')[0].split('/')[1]||'all';a.setAttribute('href',url({...active,province,city:'all'}));});
 }
 function update(root,push=false){
  active.limit=24;const next=url(active);if(next!==location.hash)history[push?'pushState':'replaceState'](null,'',next);draw(root);
 }
 async function loadMap(root){
  const host=root.querySelector('#flavorMap');mapRequest?.abort();const request=new AbortController();mapRequest=request;
  try{
   if(!mapMarkup){const response=await fetch('assets/maps/china-provinces.svg',{signal:request.signal});if(!response.ok)throw new Error('Map unavailable');mapMarkup=await response.text();}
   if(request.signal.aborted||!host.isConnected)return;
   host.innerHTML=mapMarkup;
   host.querySelectorAll('[data-map-province]').forEach(a=>{
    const province=a.dataset.mapProvince;a.setAttribute('href',url({...active,province,city:'all'}));
    if(province===active.province)a.setAttribute('aria-current','page');
   });
  }catch(error){if(error.name!=='AbortError'&&host.isConnected)host.innerHTML='<p>地图暂未加载，请用省市按钮继续浏览。</p>';}
  finally{if(host.isConnected)host.setAttribute('aria-busy','false');}
 }
 function bind(root){
  draw(root);loadMap(root);
  root.querySelector('#flavorSearch').oninput=event=>{active.q=event.target.value;update(root);};
  root.querySelector('#flavorCity').onchange=event=>{active.city=event.target.value;update(root,true);};
  root.querySelector('.flavor-proteins').onchange=event=>{if(event.target.name==='flavorProtein'){active.protein=event.target.value;update(root,true);}};
  root.querySelector('.flavor-browser').onclick=event=>{
   const type=event.target.closest('[data-flavor-type]');
   if(type){active.type=type.dataset.flavorType;if(active.type!=='dishes')active.protein='all';update(root,true);return;}
   if(event.target.closest('[data-flavor-reset]')){active={...active,type:'all',protein:'all',city:'all',q:'',limit:24};root.querySelector('#flavorSearch').value='';root.querySelector('#flavorCity').value='all';update(root,true);return;}
   if(event.target.closest('#flavorMore')){active.limit+=24;draw(root);}
  };
 }
 function dispose(){mapRequest?.abort();mapRequest=null;active=null;}
 return {render,bind,dispose};
})();

/* One destination, one collection: country and explicitly associated city cards. */
window.KnowledgeHub=(()=>{
 const G=CardGraph,h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const norm=G.normalize;
 const isChina=country=>country?.section==='china';
 const sectionName=country=>isChina(country)?'中国城市':'欧洲国家';
 const guideUrl=(country,city)=>isChina(country)?ChinaRegions.url(city||ChinaRegions.prefectures()[0]):'#guide/'+country.id+(city?'/'+city.id:'');
 const topics=cardCategories.primary.map(t=>[t.id,t.icon,t.name,t.description]);
 const subcategories=new Map(cardCategories.secondary.map(s=>[s.id,s])),subcategoriesByName=new Map(cardCategories.secondary.map(s=>[s.name,s]));
 const countryIds=G.countryIds,cityIds=G.cityIds;
 function category(n){return n.category;}
 function mapBinding(n){return n?.point?{mode:'fixed',point:n.point}:n?.searchKind?{mode:'dynamic',kind:n.searchKind}:{mode:'none'};}
 function mappedPoints(n){return mapBinding(n).mode==='fixed'?[n]:[];}
 function destinationFor(n){
  const fallback=active?.country||travelCountries.find(c=>c.id===last()),ids=countryIds(n),owners=cityIds(n);
  const ownCity=travelCities.find(c=>c.id===n.city),sharedCity=active?.city&&owners.includes(active.city.id)?active.city:null;
  const city=(n.point&&ownCity)||sharedCity||(owners.length===1?travelCities.find(c=>c.id===owners[0]):null);
  const country=travelCountries.find(c=>c.id===(city?.country||(ids.includes(fallback.id)?fallback.id:ids[0]||fallback.id)));
  return {country,city};
 }
 function mapUrl(n){const binding=mapBinding(n);if(binding.mode==='none')return '';const {country,city}=destinationFor(n);return '#map/'+(city?.id||country.id)+'?'+(binding.mode==='fixed'?'focus=':'search=')+encodeURIComponent(n.id);}
 function rememberDestination(country,city){if(active?.country.id!==country.id||active?.city?.id!==city?.id)active={country,city,zone:'all',q:'',kind:'all',view:preferredView,feedLimit:24,at:'',limits:{},openGroups:{}};if(!isChina(country)){lastCountry=country.id;try{sessionStorage.setItem('eurotrip-country',country.id);}catch{}}}
 function scoped(country,city){return [...G.nodes.values()].filter(n=>!n.collectionHidden&&category(n)&&(city?cityIds(n).some(id=>isChina(country)?ChinaRegions.contains(city,id):id===city.id)||n.type==='tip'&&!cityIds(n).length&&(countryIds(n).includes(country.id)):countryIds(n).includes(country.id)));}
 function finalize(){const reachable=new Set(travelCountries.flatMap(c=>scoped(c,null).map(n=>n.id)));G.prune(n=>reachable.has(n.id));for(const n of G.nodes.values())if(n.live)G.linkLive(n);}
 function subtype(n){return subcategories.get(n.subcategory)?.name||'其他地点';}
 function subtypeDescription(name){return subcategoriesByName.get(name)?.description||'';}
 function iconForSub(name){return subcategoriesByName.get(name)?.icon||'📍';}
 function iconForNode(n){return subcategories.get(n?.subcategory)?.icon||'📍';}
 let active,feedController,preferredView='groups',lastCountry='hu';
 try{lastCountry=sessionStorage.getItem('eurotrip-country')||'hu';}catch{}
 try{if(localStorage.getItem('eurotrip-card-view')==='waterfall')preferredView='waterfall';}catch{}
 function dispose(){feedController?.destroy();feedController=null;}
 function resetBrowse(){active.limits={};active.openGroups={};active.feedLimit=24;active.at='';}
 function last(){return travelCountries.some(c=>c.id===lastCountry&&!isChina(c))?lastCountry:'hu';}
 function cityPicker(country,city){
 if(isChina(country))return ChinaRegions.picker(city);
 const list=travelCities.filter(c=>c.country===country.id);
 return `<section class="destination-picker" aria-label="选择国家概览或城市"><div class="destination-picker-heading"><h2>选择目的地</h2><span>选择城市后，下方卡片只展示城市关联内容</span></div><div class="destination-cities"><a href="${guideUrl(country)}" class="destination-overview ${city?'':'active'}" ${city?'':'aria-current="page"'}><small>${country.flag} COUNTRY</small><b>国家概览</b><span>看全国文化与实用信息 →</span></a>${list.map(c=>`<a href="${guideUrl(country,c)}" class="${city?.id===c.id?'active':''}" ${city?.id===c.id?'aria-current="page"':''}><small>${h(c.local)}</small><b>${h(c.name)}</b><span>${h(c.intro.slice(0,65))}${c.intro.length>65?'…':''}</span></a>`).join('')}</div></section>`;
 }
 function render(country,city,zone){
 if(location.hash.startsWith('#map/'))return '';
 const params=new URLSearchParams(location.hash.split('?')[1]||'');
 let kind=cardCategories.subcategoryAliases[params.get('kind')]||params.get('kind')||'all';
 // Keep bookmarks to the removed category usable after cards have moved.
 if(zone==='essential'){if(kind==='all')kind='日常 / 应急';zone=subcategoriesByName.get(kind)?.category||'facts';}
 zone=zone==='specialties'?'food':zone==='map'?'transport':zone==='shopping'?'brands':zone;
 if(!topics.some(t=>t[0]===zone))zone='all';
 const requestedView=params.get('view'),view=['groups','waterfall'].includes(requestedView)?requestedView:preferredView;
 const shown=Number(params.get('shown'));
 active={country,city,zone,q:params.get('q')||'',kind,view,feedLimit:Number.isInteger(shown)&&shown>0?Math.min(1000,Math.max(24,shown)):24,at:params.get('at')||'',limits:{},openGroups:{}};
 rememberDestination(country,city);
 return `<section class="knowledge-hub" data-scope="${city?.id||country.id}"><div class="hub-heading"><div><div class="guide-kicker">${city?'CITY COLLECTION':'COUNTRY COLLECTION'}</div><h2>${h(city?.name||country.name)}，从这几件事认识。</h2><p>${isChina(country)?'沿着风味、风景与人物，探索当地日常；地图和卡片随目的地一起切换。':city?'只看本城明确关联的风味、人物和地点；全国通用的实用提醒会单独标注。':'从出发前的准备，到当地人的日常选择。点开卡片，继续探索关联知识与地图。'}</p></div><a href="#words">${isChina(country)?'✦ 欧洲旅行词典':'文 学几句当地语言'} ↗</a></div><div class="hub-tabs" role="group" aria-label="卡片一级分类"><button data-hub-topic="all">全部主题<small></small></button>${topics.map(([id,icon,name])=>`<button data-hub-topic="${id}">${icon} ${name}<small></small></button>`).join('')}</div><div class="hub-tools"><label class="hub-search">⌕ <input id="hubSearch" type="search" value="${h(active.q)}" aria-label="搜索当前国家或城市的卡片" placeholder="在${h(city?.name||country.name)}找美食、品牌、人物…"></label><label class="hub-kind-label">卡片二级分类<select id="hubKind"></select></label><button id="hubReset">重置筛选</button><span id="hubCount" role="status" aria-live="polite"></span></div><div class="hub-browse-bar"><div class="hub-view-switch" role="group" aria-label="卡片浏览方式"><button type="button" data-hub-view="groups">▤ 分类浏览</button><button type="button" data-hub-view="waterfall">▥ 瀑布流</button></div><p id="hubViewDescription"></p></div><div id="hubSections"></div></section>`;
 }
 function currentUrl(){if(!active)return '#guide/'+last();const p=new URLSearchParams();if(active.zone!=='all')p.set('zone',active.zone);if(active.q)p.set('q',active.q);if(active.kind!=='all')p.set('kind',active.kind);if(active.view==='waterfall'){p.set('view','waterfall');if(active.feedLimit>24)p.set('shown',active.feedLimit);if(active.at)p.set('at',active.at);}return guideUrl(active.country,active.city)+(p.size?'?'+p:'');}
 function returnUrl(n){const managerUrl=window.CardManager?.returnUrl(new URLSearchParams(location.hash.split('?')[1]||'').get('from'));if(managerUrl)return managerUrl;if(active&&(!n||scoped(active.country,active.city).some(card=>card.id===n.id)))return currentUrl();if(!n)return '#guide/'+last();const {country,city}=destinationFor(n);return guideUrl(country,city);}
 function draw(root){const all=scoped(active.country,active.city),query=norm(active.q.trim());const searched=all.filter(n=>!query||G.searchText(n).includes(query));const inTopic=searched.filter(n=>active.zone==='all'||category(n)===active.zone);const kinds=[...new Set(inTopic.map(subtype))];if(!kinds.includes(active.kind))active.kind='all';const select=root.querySelector('#hubKind');select.innerHTML='<option value="all">全部二级分类</option>'+kinds.map(k=>`<option value="${h(k)}">${h(k)}</option>`).join('');select.value=active.kind;
 const filtered=inTopic.filter(n=>active.kind==='all'||subtype(n)===active.kind);root.querySelector('#hubCount').textContent=filtered.length+' 张关联卡片';root.querySelectorAll('[data-hub-topic]').forEach(b=>{const selected=b.dataset.hubTopic===active.zone;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',selected);const count=b.querySelector('small');if(count)count.textContent=b.dataset.hubTopic==='all'?searched.length:searched.filter(n=>category(n)===b.dataset.hubTopic).length;});
 dispose();
 const sections=root.querySelector('#hubSections');
 root.querySelector('.knowledge-hub').dataset.view=active.view;
 root.querySelectorAll('[data-hub-view]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.hubView===active.view));
 root.querySelector('#hubViewDescription').textContent=active.view==='waterfall'?'向下滚动，继续发现关联卡片':'按二级分类展开，逐类浏览';
 if(active.at&&!filtered.some(n=>n.id===active.at))active.at='';
 if(active.view==='waterfall'){
  const buckets=topics.map(([id])=>filtered.filter(n=>category(n)===id).sort((a,b)=>id==='brands'?brandPriority(a)-brandPriority(b):0));
  const items=Array.from({length:Math.max(0,...buckets.map(list=>list.length))},(_,i)=>buckets.map(list=>list[i]).filter(Boolean)).flat();
  const state=active,feed=CardFeed.mount({root:sections,items,renderCard:card,initialCount:active.feedLimit,onCount:count=>{if(active===state&&location.hash.split('?')[0]===guideUrl(state.country,state.city)){active.feedLimit=count;history.replaceState(null,'',currentUrl());}}});
  feedController=feed;
  if(active.at)requestAnimationFrame(()=>{if(feedController===feed){const element=feed.reveal(state.at);element?.scrollIntoView({block:'center'});}});
 }else{
 sections.innerHTML=topics.filter(t=>active.zone==='all'||t[0]===active.zone).map(([id,icon,name,description])=>{const items=filtered.filter(n=>category(n)===id).sort((a,b)=>id==='brands'?brandPriority(a)-brandPriority(b):0);const groups=[...new Set(items.map(subtype))];return `<section class="hub-section" data-hub-section="${id}"><div class="hub-section-heading"><div><span>${icon}</span><h3>${name}<small>${items.length} 张 · ${groups.length} 个二级分类</small></h3><p>${description}</p></div>${active.zone==='all'?`<button data-hub-topic="${id}">专注看这一类 →</button>`:''}</div>${groups.map((sub,i)=>{const key=id+'|'+sub,list=items.filter(n=>subtype(n)===sub),limit=active.limits[key]||3,open=active.openGroups[key]??(!!query||i<(active.zone==='all'?1:2));return `<details class="hub-subgroup" data-hub-subgroup="${h(key)}" data-card-theme="${id}" ${open?'open':''}><summary><b><span aria-hidden="true">${iconForSub(sub)}</span> ${h(sub)}</b><span>${list.length} 张</span><small>展开 / 收起</small></summary><div class="hub-subgroup-body"><p class="hub-subgroup-description">${h(subtypeDescription(sub))}</p><div class="hub-card-grid">${list.slice(0,limit).map(n=>card(n)).join('')}</div>${list.length>limit?`<button class="hub-more" data-hub-more="${h(key)}">再看 ${Math.min(6,list.length-limit)} 张 · 还有 ${list.length-limit} 张 ↓</button>`:''}</div></details>`;}).join('')||`<p class="hub-empty">${query||active.kind!=='all'?'当前筛选没有匹配卡片，可尝试其他关键词或重置筛选。':'暂未收录'+(active.city?'本城':'该国')+'的这类卡片。'}${active.city&&!isChina(active.country)?` <a href="${guideUrl(active.country)}?zone=${id}">看看国家相关内容 →</a>`:''}</p>`}</section>`;}).join('');
 }
 active.mapNodes=filtered;active.mapUniverse=searched;history.replaceState(null,'',currentUrl());window.FloatingMap?.sync();}
 function brandPriority(n){const k=subtype(n);return k==='超市'?0:k==='银行'?1:k==='药妆 / 日用'?2:3;}
 function card(n){const owners=cityIds(n),countries=countryIds(n),broad=active.city&&n.type==='tip'&&!owners.length;
 const labels=owners.map(id=>travelCities.find(c=>c.id===id)?.name).filter(Boolean);
 const location=broad?'本城同样适用 · 全国 / 通用':active.city&&owners.includes(active.city.id)?active.city.name:labels.length?labels.slice(0,2).join(' / ')+(labels.length>2?' 等'+labels.length+'城':''):countries.map(id=>travelCountries.find(c=>c.id===id)?.name).filter(Boolean).join(' / ');
 const points=mappedPoints(n),pin=window.FloatingMap?.pinLabel(points[0]?.id);return `<article class="hub-card" data-card-theme="${category(n)}" data-knowledge-card="${h(n.id)}" id="knowledge-${h(n.id)}"><div class="hub-card-meta"><span><i aria-hidden="true">${iconForNode(n)}</i> ${h(subtype(n))}</span><small>${h(location)}</small></div><a class="hub-card-title" href="${G.url(n.id)}"><h4>${h(n.name)}</h4></a>${n.subtitle||n.local?`<div class="hub-local">${h(n.subtitle||n.local)}</div>`:''}<p>${h(n.description)}</p><div class="hub-card-bottom"><span>详情与关联 ↗</span>${mapBinding(n).mode==='dynamic'?`<a class="card-pin-action" href="${mapUrl(n)}">⌕ 动态搜索</a>`:points.length?`<button class="card-pin-action" data-map-card="${h(n.id)}"><b>${h(pin||'⌖')}</b> 地图定位</button>`:''}</div></article>`;}
 function bind(root){
  if(!root.querySelector('.knowledge-hub'))return;
  ChinaRegions.bind(root);draw(root);
  root.querySelector('#hubSearch').oninput=e=>{active.q=e.target.value;resetBrowse();draw(root);};
  root.querySelector('#hubKind').onchange=e=>{active.kind=e.target.value;resetBrowse();draw(root);};
  root.querySelector('#hubReset').onclick=()=>{active.zone='all';active.q='';active.kind='all';resetBrowse();root.querySelector('#hubSearch').value='';draw(root);};
  const hub=root.querySelector('.knowledge-hub');
  hub.addEventListener('toggle',e=>{if(e.target.matches('[data-hub-subgroup]'))active.openGroups[e.target.dataset.hubSubgroup]=e.target.open;},true);
  hub.onclick=e=>{
   const tile=e.target.closest('[data-knowledge-card]');
   if(tile){
    const link=e.target.closest('a'),interactive=e.target.closest('a,button,input,select');
    if(active.view==='waterfall'&&(!interactive||link?.getAttribute('href')?.startsWith('#card/'))){active.at=tile.dataset.knowledgeCard;history.replaceState(null,'',currentUrl());}
    if(!interactive){location.hash=G.url(tile.dataset.knowledgeCard);return;}
   }
   const view=e.target.closest('[data-hub-view]');
   if(view){active.view=view.dataset.hubView;preferredView=active.view;try{localStorage.setItem('eurotrip-card-view',preferredView);}catch{}resetBrowse();draw(root);return;}
   const tab=e.target.closest('[data-hub-topic]');
   if(tab){active.zone=tab.dataset.hubTopic;active.kind='all';resetBrowse();draw(root);root.querySelector(`[data-hub-topic="${active.zone}"]`)?.focus({preventScroll:true});}
   const more=e.target.closest('[data-hub-more]');
   if(more){const id=more.dataset.hubMore;active.limits[id]=(active.limits[id]||3)+6;active.openGroups[id]=true;draw(root);}
  };
 }
 function reveal(id){if(!active)return false;const n=G.nodes.get(id);if(!n||!scoped(active.country,active.city).some(x=>x.id===id))return false;active.zone=category(n);active.q='';active.kind='all';const key=active.zone+'|'+subtype(n),peers=scoped(active.country,active.city).filter(x=>category(x)===active.zone&&subtype(x)===subtype(n));active.openGroups[key]=true;active.limits[key]=Math.max(3,peers.findIndex(x=>x.id===id)+1);if(active.view==='waterfall')active.at=id;const root=document.querySelector('#travelGuide');root.querySelector('#hubSearch').value='';draw(root);const el=feedController?.reveal(id)||root.querySelector('[data-knowledge-card="'+CSS.escape(id)+'"]');el?.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});el?.classList.add('map-card-highlight');return !!el;}
 return {render,bind,dispose,cityPicker,countryIds,cityIds,isChina,sectionName,guideUrl,lastCountry:last,returnUrl,scoped,category,subtype,mappedPoints,mapBinding,mapUrl,destinationFor,rememberDestination,finalize,topics,iconForSub,iconForNode,mapContext:()=>active,reveal};
})();

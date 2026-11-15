/* Chinese collection: canonical cards, shared regional atlas and three views. */
window.ChinaCardManager=(()=>{
 const G=CardGraph,C=ChinaCollection,T=window.chinaCardCategories;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const path='#card-manager/china';let controller=null;
 const definition=n=>CardTaxonomy.secondary(n);
 function render(scope=null){return `<section class="card-manager china-manager" data-manager-region="china" data-china-level="${scope?(scope.city?(scope.city.parentCity||scope.city.level==='county-city'?'county':'city'):'province'):'national'}"><div class="manager-heading"><h1 data-china-page-title>${h(scope?.city?(scope.city.parentCity||scope.city.level==='county-city'?scope.city.adminName:scope.city.name+'总览'):scope?ChinaRegions.provinceName(ChinaRegions.provinces.find(p=>p.id===scope.provinceId))+'总览':'全国总览')}</h1><a href="https://github.com/cafelzj/eurotrip/blob/main/docs/china-collection.md" target="_blank" rel="noopener noreferrer">收录与资料说明 ↗</a></div><div data-china-geography></div><section class="china-taxonomy" aria-labelledby="chinaPrimaryHeading"><h2 id="chinaPrimaryHeading">卡片一级分类</h2><div class="hub-tabs ui-tabs china-primary-grid" data-china-primary-list role="group" aria-label="卡片一级分类"></div></section><section class="china-taxonomy" aria-labelledby="chinaSecondaryHeading"><h2 id="chinaSecondaryHeading">卡片二级分类</h2><div class="hub-tabs ui-tabs china-secondary-grid" data-china-secondary-list role="group" aria-label="卡片二级分类"></div><button class="ui-button china-category-more" type="button" data-china-expand hidden>展开全部二级分类</button></section><div class="china-manager-tools"><label class="ui-search"><span aria-hidden="true">⌕</span><input data-manager-search type="search" maxlength="300" aria-label="搜索中国城市卡片" placeholder="搜索名称、品牌、地区、说明或来源…"></label><label class="china-review-label">资料状态<select class="ui-select" data-china-review><option value="all">全部资料</option><option value="sourced">有来源资料</option><option value="pending">待核实线索</option></select></label><button class="ui-button" data-manager-reset>重置筛选</button><button class="ui-button" data-manager-export>↓ 导出 CSV</button></div><div data-china-protein-filter hidden></div><div class="china-browser-bar"><p data-manager-count role="status" aria-live="polite"></p><div class="hub-view-switch" role="group" aria-label="卡片浏览方式"><button type="button" data-china-view="waterfall">▥ 瀑布流</button><button type="button" data-china-view="groups">▤ 分类浏览</button><button type="button" data-china-view="table">▦ 表格</button></div></div><div data-china-results></div><div class="manager-pagination" data-china-pagination hidden><label>每页<select data-manager-size><option value="25">25 张</option><option value="50">50 张</option><option value="100">100 张</option></select></label><span data-manager-page></span><button data-manager-prev>上一页</button><button data-manager-next>下一页</button></div></section>`;}
 function detailUrl(n){return G.url(n.id)+'?from='+(controller?.regional?'china-collection':'card-manager-china');}
 function card(n){
  const main=CardTaxonomy.primary(n),sub=definition(n),binding=KnowledgeHub.mapBinding(n);
  return `<article class="hub-card ui-card ${n.flavorId?'flavor-card':''}" data-manager-card="${h(n.id)}" data-knowledge-card="${h(n.id)}" ${n.flavorId?`data-flavor-id="${h(n.id)}"`:''} data-card-theme="${n.category}"><div class="ui-card-header"><div class="ui-card-heading"><h3 class="ui-card-title"><a class="hub-card-title" href="${detailUrl(n)}">${h(n.name)}</a></h3>${n.subtitle||n.local?`<div class="hub-local">${h(n.subtitle||n.local)}</div>`:''}</div><div class="ui-card-meta"><span>${h(sub?.icon)} ${h(sub?.name||main?.name)}</span><small>${h(C.label(n).replace(/ · 县区待明确$/,''))}</small></div></div>${CardImages.inline(n,{showCredit:false})||CardArt.render(n)}${n.verificationStatus==='pending'?`<p class="flavor-verification-note"><strong>待核实</strong> · ${h(n.verificationNote)}</p>`:''}<p>${h(n.description)}</p><div class="hub-card-bottom"><a class="hub-detail-action" href="${detailUrl(n)}">查看详情 →</a>${binding.mode==='none'?'':`<a href="${KnowledgeHub.mapUrl(n)}">${binding.mode==='fixed'?'地图定位':'动态搜索'} ↗</a>`}</div></article>`;
 }
 function sources(n){return (n.sources||[]).filter(([url])=>/^https?:\/\//.test(url)).map(([url,title])=>`<a href="${h(url)}" target="_blank" rel="noopener noreferrer">${h(title)} ↗</a>`).join('');}
 function bind(root,params=new URLSearchParams(),scope=null){
  dispose();const all=C.records().sort((a,b)=>Number(!!b.flavorId)-Number(!!a.flavorId)),index=new Map(all.map(n=>[n.id,G.searchText(n)]));
  let preferred='waterfall';try{preferred=localStorage.getItem('eurotrip-china-manager-view')||preferred;}catch{}
  const state={province:params.get('province')||'all',city:params.get('city')||'all',county:params.get('county')||'all',district:params.get('district')||'all',
   primary:params.get('primary')||params.get('zone')||'',secondary:params.get('secondary')||params.get('kind')||'',q:(params.get('q')||'').slice(0,300),protein:flavorCatalog.proteins.includes(params.get('protein'))?params.get('protein'):'all',review:params.get('review')||'all',view:params.get('view')||preferred,
   page:Math.max(1,Number(params.get('page'))||1),size:[25,50,100].includes(Number(params.get('size')))?Number(params.get('size')):25,shown:Math.min(1000,Math.max(24,Number(params.get('shown'))||24)),expanded:false,groups:{}};
  if(scope){
   const node=scope.city,parent=ChinaRegions.parent(node)||node;state.province=scope.provinceId;
   state.city=parent?.name||'all';state.county=node?.parentCity?String(node.adcode):'all';
   state.district=flavorMapRegions[state.province]?.level==='district'&&node?.parentCity?node.adminName:'all';
  }
  const namedSecondary=state.secondary;state.secondary=T.subcategoryNameAliases[state.secondary]||T.secondary.find(c=>c.name===state.secondary)?.id||state.secondary;
  if(namedSecondary!==state.secondary)state.primary=T.secondary.find(c=>c.id===state.secondary)?.category||state.primary;
  const oldCity=ChinaRegions.get(state.city);
  if(oldCity){state.province=oldCity.provinceId;state.city=(ChinaRegions.parent(oldCity)||oldCity).name;if(oldCity.parentCity)state.county=String(oldCity.adcode);}
  if(!flavorCatalog.provinces.some(p=>p.id===state.province))state.province='all';
  if(!Object.values(flavorCounties.cities).some(c=>c.province===state.province&&c.city===state.city))state.city='all';
  const metro=flavorMapRegions[state.province]?.level==='district';
  if(metro){if(!flavorMapRegions[state.province].regions.some(r=>r.name===state.district))state.district='all';state.city='all';state.county='all';}
  else{state.district='all';const city=Object.values(flavorCounties.cities).find(c=>c.province===state.province&&c.city===state.city);if(state.city==='all'||state.county!=='unspecified'&&!city?.regions.some(r=>String(r.adcode)===state.county))state.county='all';}
  if(!T.primary.some(c=>c.id===state.primary))state.primary='';
  const previousSecondary=state.secondary;
  state.secondary=T.subcategoryAliases[state.secondary]||state.secondary;
  if(previousSecondary!==state.secondary)state.primary=T.secondary.find(c=>c.id===state.secondary)?.category||state.primary;
  if(!T.secondary.some(c=>c.id===state.secondary))state.secondary='';
  if(state.secondary){const sub=T.secondary.find(c=>c.id===state.secondary);if(state.primary&&sub.category!==state.primary)state.secondary='';}
  if(!['waterfall','groups','table'].includes(state.view))state.view='waterfall';
  if(!['all','sourced','pending'].includes(state.review))state.review='all';
  const el=key=>root.querySelector('[data-'+key+']');let feed=null,picker=null,filtered=[];
  function url(override={}){const current={...state,...override},query=new URLSearchParams();for(const key of ['province','city','county','district','primary','secondary','q','protein','review'])if(current[key]&&current[key]!=='all')query.set(key,current[key]);query.set('view',current.view);if(current.view==='table'){if(current.page>1)query.set('page',current.page);if(current.size!==25)query.set('size',current.size);}else if(current.view==='waterfall'&&current.shown>24)query.set('shown',current.shown);if(scope)for(const key of ['province','city','county','district'])query.delete(key);return (scope?(scope.city&&flavorMapRegions[current.province]?.level==='district'&&current.district==='all'?ChinaRegions.url(ChinaRegions.parent(scope.city)||scope.city):ChinaRegions.selectionUrl(current)):path)+'?'+query;}
  function save(){history.replaceState(null,'',url());try{sessionStorage.setItem(scope?'eurotrip-china-collection-return':'eurotrip-card-manager-china-url',url());localStorage.setItem('eurotrip-china-manager-view',state.view);}catch{}}
  function geographically(n){const district=metro&&state.district!=='all'?flavorMapRegions[state.province].regions.find(r=>r.name===state.district)?.adcode:null;return C.inProvince(n,state.province)&&C.inCity(n,state.city)&&C.inCounty(n,district||state.county);}
  function termsMatch(n){return (state.protein==='all'||n.proteins?.includes(state.protein))&&state.q.trim().split(/\s+/).filter(Boolean).every(term=>index.get(n.id).includes(G.normalize(term)))&&(state.review==='all'||(n.verificationStatus==='pending'?'pending':'sourced')===state.review);}
  function choice(c,kind,count){return `<button type="button" class="ui-choice china-category-card" data-china-${kind}="${h(c.id)}" aria-pressed="${state[kind]===c.id}"><span class="china-category-icon" aria-hidden="true">${h(c.icon||'◈')}</span><span>${h(c.name)}</span><small>${count} 张</small></button>`;}
  function row(n){const p=CardTaxonomy.primary(n),s=definition(n);return `<tr data-manager-card="${h(n.id)}"><th scope="row"><a class="manager-card-link" href="${detailUrl(n)}">${h(n.name)}</a><div class="manager-row-actions"><a href="${detailUrl(n)}">查看详情 ↗</a>${KnowledgeHub.mapBinding(n).mode==='none'?'':`<a href="${KnowledgeHub.mapUrl(n)}">查看地图 ↗</a>`}</div></th><td>${h(C.label(n))}</td><td>${h(p?.name)}<small>${h(s?.name)}</small></td><td>${n.verificationStatus==='pending'?`<span class="china-pending">待核实</span><p>${h(n.verificationNote)}</p>`:'有来源资料'}<p class="manager-summary">${h(n.description)}</p></td></tr>`;}
  function waterfallOrder(items){const weave=buckets=>Array.from({length:Math.max(0,...buckets.map(b=>b.length))},(_,i)=>buckets.map(b=>b[i]).filter(Boolean)).flat();return weave(T.primary.map(primary=>weave(T.secondary.filter(s=>s.category===primary.id).map(sub=>items.filter(n=>n.subcategory===sub.id)))));}
  function draw(){
   feed?.destroy();feed=null;
   const searched=all.filter(termsMatch),geographic=searched.filter(geographically),nonGeo=searched.filter(n=>(!state.primary||n.category===state.primary)&&(!state.secondary||n.subcategory===state.secondary));
   filtered=geographic.filter(n=>(!state.primary||n.category===state.primary)&&(!state.secondary||n.subcategory===state.secondary));
   el('china-primary-list').innerHTML=choice({id:'',name:'全部分类',icon:'◈'},'primary',geographic.length)+T.primary.map(c=>choice(c,'primary',geographic.filter(n=>n.category===c.id).length)).join('');
   const relevant=T.secondary.filter(c=>(!state.primary||c.category===state.primary)&&all.some(n=>n.subcategory===c.id));
   const visible=state.expanded||state.primary?relevant:relevant.slice(0,12),secondaryPeers=geographic.filter(n=>!state.primary||n.category===state.primary);
   if(state.secondary&&!visible.some(c=>c.id===state.secondary))visible.push(T.secondary.find(c=>c.id===state.secondary));
   el('china-secondary-list').innerHTML=choice({id:'',name:'全部二级分类',icon:'◈'},'secondary',secondaryPeers.length)+visible.map(c=>choice(c,'secondary',secondaryPeers.filter(n=>n.subcategory===c.id).length)).join('');
   el('china-expand').hidden=!!state.primary||state.expanded||relevant.length<=12;
   if(scope){
    el('china-geography').innerHTML=ChinaRegions.picker(scope);
    ChinaRegions.bind(el('china-geography'),hash=>{const query=new URLSearchParams(url().split('?')[1]);for(const key of ['page','shown'])query.delete(key);location.hash=hash+(query.size?'?'+query:'');});
   }else picker=ChinaFlavorUI.regionPicker(el('china-geography'),state,nonGeo,geo=>url({province:geo.province,city:geo.city,county:geo.county,district:geo.district,page:1,shown:24}));
   const country=travelCountries.find(c=>c.id==='cn'),selected=ChinaRegions.destinations.find(c=>c.provinceId===state.province&&!c.parentCity&&c.name===state.city);KnowledgeHub.rememberDestination(country,selected||null);
   el('manager-count').textContent=`${filtered.length} 张匹配 · 共 ${all.length} 张卡片${filtered.some(n=>n.verificationStatus==='pending')?' · 含待核实线索':''}`;
   el('manager-export').disabled=!filtered.length;
   el('china-protein-filter').hidden=state.protein==='all';el('china-protein-filter').innerHTML=state.protein==='all'?'':`<button class="ui-button" data-china-clear-protein>主要食材：${h(state.protein)} · 清除 ×</button>`;
   root.querySelectorAll('[data-china-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.chinaView===state.view)));
   const results=el('china-results');el('china-pagination').hidden=state.view!=='table';
   if(state.view==='waterfall')feed=CardFeed.mount({root:results,items:waterfallOrder(filtered),renderCard:card,initialCount:state.shown,onCount:count=>{state.shown=count;save();}});
   else if(state.view==='groups')results.innerHTML=T.primary.map(p=>{const subs=T.secondary.filter(s=>s.category===p.id&&filtered.some(n=>n.subcategory===s.id));return subs.length?`<section class="china-group"><h2>${h(p.icon)} ${h(p.name)}</h2>${subs.map(sub=>{const nodes=filtered.filter(n=>n.subcategory===sub.id),limit=state.groups[sub.id]||3;return `<details class="hub-subgroup" data-card-theme="${p.id}" open><summary><b>${h(sub.icon)} ${h(sub.name)}</b><span>${nodes.length} 张</span><small>展开 / 收起</small></summary><div class="hub-subgroup-body"><div class="hub-card-grid">${nodes.slice(0,limit).map(card).join('')}</div>${nodes.length>limit?`<button class="ui-button" data-china-more="${sub.id}">再看 ${Math.min(6,nodes.length-limit)} 张</button>`:''}</div></details>`;}).join('')}</section>`:'';}).join('')||'<p class="china-empty">没有符合筛选条件的卡片。</p>';
   else{
    const pages=Math.max(1,Math.ceil(filtered.length/state.size));state.page=Math.min(state.page,pages);
    results.innerHTML=`<p class="manager-table-hint">↔ 表格可左右滚动；点击名称或“查看详情”阅读完整内容和来源。</p><div class="manager-table-scroll" tabindex="0" role="region" aria-label="中国城市卡片表"><table><thead><tr>${['卡片名称','地区','分类','内容与资料状态'].map(t=>'<th scope="col">'+t+'</th>').join('')}</tr></thead><tbody>${filtered.slice((state.page-1)*state.size,state.page*state.size).map(row).join('')||'<tr><td colspan="4">没有符合条件的卡片。</td></tr>'}</tbody></table></div>`;
    el('manager-page').textContent=`第 ${state.page} / ${pages} 页`;el('manager-prev').disabled=state.page===1;el('manager-next').disabled=state.page===pages;el('manager-size').value=state.size;
   }
   save();
  }
  function resetPage(){state.page=1;state.shown=24;state.groups={};}
  function csv(){const cell=value=>{let s=String(value??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};const rows=[['卡片ID','旧ID','名称','省市县','一级分类','二级分类','简介','详细说明','资料状态','待核说明','来源'],...filtered.map(n=>[n.id,n.legacyIds?.join(' / '),n.name,C.label(n),CardTaxonomy.primary(n)?.name,definition(n)?.name,n.description,(n.reading||[]).map(r=>r.title+'\n'+r.text).join('\n\n'),n.verificationStatus==='pending'?'待核实':'有来源资料',n.verificationNote,(n.sources||[]).map(([url,title])=>title+' '+url).join('\n')])];const url=URL.createObjectURL(new Blob(['\ufeff'+rows.map(row=>row.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'})),link=document.createElement('a');link.href=url;link.download='eurotrip-china-cards.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  el('manager-search').value=state.q;el('china-review').value=state.review;
  el('manager-search').oninput=event=>{state.q=event.target.value;resetPage();draw();};
  el('china-review').onchange=event=>{state.review=event.target.value;resetPage();draw();};
  el('manager-reset').onclick=()=>{Object.assign(state,{...(scope?{}:{province:'all',city:'all',county:'all',district:'all'}),primary:'',secondary:'',q:'',protein:'all',review:'all'});el('manager-search').value='';el('china-review').value='all';resetPage();draw();};
  el('manager-export').onclick=csv;
  el('manager-size').onchange=event=>{state.size=Number(event.target.value);state.page=1;draw();};
  el('manager-prev').onclick=()=>{state.page--;draw();};el('manager-next').onclick=()=>{state.page++;draw();};
  const click=event=>{if(event.target.closest('[data-china-clear-protein]')){state.protein='all';resetPage();draw();return;}const button=event.target.closest('[data-china-primary],[data-china-secondary],[data-china-view],[data-china-expand],[data-china-more]');if(!button)return;
   if(button.hasAttribute('data-china-primary')){state.primary=button.dataset.chinaPrimary;state.secondary='';resetPage();}
   if(button.hasAttribute('data-china-secondary')){state.secondary=button.dataset.chinaSecondary;if(state.secondary)state.primary=T.secondary.find(c=>c.id===state.secondary).category;resetPage();}
   if(button.dataset.chinaView){state.view=button.dataset.chinaView;resetPage();}
   if(button.hasAttribute('data-china-expand'))state.expanded=true;
   if(button.dataset.chinaMore)state.groups[button.dataset.chinaMore]=(state.groups[button.dataset.chinaMore]||3)+6;
   const marker=button.hasAttribute('data-china-primary')?'[data-china-primary="'+CSS.escape(state.primary)+'"]':button.hasAttribute('data-china-secondary')?'[data-china-secondary="'+CSS.escape(state.secondary)+'"]':null;
   draw();if(marker)root.querySelector(marker)?.focus({preventScroll:true});
  };
  root.addEventListener('click',click);controller={regional:!!scope,destroy(){feed?.destroy();picker?.destroy();root.removeEventListener('click',click);}};draw();
 }
 function dispose(){controller?.destroy();controller=null;}
 return {render,bind,dispose,card};
})();

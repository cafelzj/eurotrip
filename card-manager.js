/* One searchable table over the same curated card registry used by collections and maps. */
window.CardManager=(()=>{
 const G=CardGraph,H=KnowledgeHub;
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const scopes={
  europe:{path:'#card-manager',source:'card-manager',storage:'eurotrip-card-manager-url',label:'欧洲国家'},
  china:{path:'#card-manager/china',source:'card-manager-china',storage:'eurotrip-card-manager-china-url',label:'中国城市'}
 };
 const scope=region=>scopes[region==='china'?'china':'europe'];
 function returnUrl(source){const config=Object.values(scopes).find(s=>s.source===source);if(!config)return null;try{const saved=sessionStorage.getItem(config.storage);if(saved?.split('?')[0]===config.path)return saved;}catch{}return config.path;}
 function collectionUrl(region){if(region!=='china')return '#guide/'+H.lastCountry();let city;try{city=ChinaRegions.get(sessionStorage.getItem('eurotrip-china-city'));}catch{}return ChinaRegions.url(city||ChinaRegions.destinations[0]);}
 const countries=n=>G.countryIds(n).map(id=>travelCountries.find(c=>c.id===id)).filter(Boolean);
 const cities=n=>G.cityIds(n).map(id=>travelCities.find(c=>c.id===id)).filter(Boolean);
 const primary=n=>cardCategories.primary.find(c=>c.id===n.category);
 const secondary=n=>cardCategories.secondary.find(c=>c.id===n.subcategory);
 function render(region='europe'){const config=scope(region);return `<section class="card-manager" data-manager-region="${region==='china'?'china':'europe'}"><div class="manager-heading"><div><div class="guide-kicker">YOUR CARD COLLECTION</div><h1>${config.label} · 卡片管理</h1><p>集中查看${config.label}已收录卡片的归属、分类与内容。搜索涵盖名称、副标题、国家、城市、分类、简介、详情和来源。</p></div><a href="${collectionUrl(region)}">返回${config.label} ↗</a></div><div class="manager-filters"><label class="manager-search">搜索全部字段<input data-manager-search type="search" placeholder="${region==='china'?'试试：苏州、园林、徐州、地铁…':'试试：世界遗产、维也纳、票区、UNESCO…'}"></label><label>国家<select data-manager-country></select></label><label>城市<select data-manager-city></select></label><label>卡片一级分类<select data-manager-primary></select></label><label>卡片二级分类<select data-manager-secondary></select></label></div><div class="manager-toolbar"><p data-manager-count role="status" aria-live="polite"></p><button data-manager-reset>重置筛选</button><button data-manager-export>↓ 导出筛选结果 CSV</button></div><p class="manager-table-hint">↔ 可左右滑动表格；展开内容可查看完整简介、详情和来源。每张卡片只显示一行，归属可有多个。</p><div class="manager-table-scroll" tabindex="0" role="region" aria-label="卡片信息表"><table><caption class="visually-hidden">卡片名称、副标题、国家、城市、一级分类、二级分类和完整内容</caption><thead><tr><th scope="col">卡片名称</th><th scope="col">副标题 / 当地名称</th><th scope="col">国家</th><th scope="col">城市</th><th scope="col">一级分类</th><th scope="col">二级分类</th><th scope="col">简介与详情</th><th scope="col">操作</th></tr></thead><tbody data-manager-rows></tbody></table></div><div class="manager-pagination"><label>每页<select data-manager-size><option value="25">25 张</option><option value="50">50 张</option><option value="100">100 张</option></select></label><span data-manager-page></span><button data-manager-prev>上一页</button><button data-manager-next>下一页</button></div></section>`;}
 function bind(root,params=new URLSearchParams(),region='europe'){
  const config=scope(region),countryOptions=travelCountries.filter(c=>H.isChina(c)===(region==='china')),countryIds=new Set(countryOptions.map(c=>c.id));
  const all=[...G.nodes.values()].filter(n=>!n.live&&!n.collectionHidden&&G.countryIds(n).some(id=>countryIds.has(id))).sort((a,b)=>a.name.localeCompare(b.name,'zh-CN')||a.id.localeCompare(b.id));
  const index=new Map(all.map(n=>[n.id,G.searchText(n)]));
  const state={q:params.get('q')||'',country:params.get('country')||'',city:params.get('city')||'',primary:params.get('primary')||'',secondary:params.get('secondary')||'',page:Math.max(1,parseInt(params.get('page'),10)||1),size:[25,50,100].includes(Number(params.get('size')))?Number(params.get('size')):25};
  const input=name=>root.querySelector('[data-manager-'+name+']');let filtered=[];
  const options=(rows,value,placeholder)=>`<option value="">${h(placeholder)}</option>`+rows.map(n=>`<option value="${h(n.id)}" ${n.id===value?'selected':''}>${h((n.flag||n.icon||'')+' '+n.name)}</option>`).join('');
  function url(){const p=new URLSearchParams();for(const key of ['q','country','city','primary','secondary'])if(state[key])p.set(key,state[key]);if(state.page>1)p.set('page',state.page);if(state.size!==25)p.set('size',state.size);return config.path+(p.size?'?'+p:'');}
  function row(n){
   const countryLinks=countries(n).map(c=>`<a href="${H.guideUrl(c)}">${c.flag} ${h(c.name)}</a>`).join('');
   const cityLinks=cities(n).map(c=>`<a href="${H.guideUrl(travelCountries.find(n=>n.id===c.country),c)}">${h(c.name)}</a>`).join('');
   const sourceLinks=(n.sources||[]).filter(([u])=>/^https?:\/\//i.test(u)).map(([u,label])=>`<a href="${h(u)}" target="_blank" rel="noopener noreferrer">${h(label)} ↗</a>`).join('');
   const binding=H.mapBinding(n),local=n.local&&n.local!==n.subtitle?n.local:'';
   return `<tr data-manager-card="${h(n.id)}"><th scope="row"><a class="manager-card-link" href="${G.url(n.id)}?from=${config.source}">${h(n.name)}</a><small>${h(n.id)}</small></th><td>${h(n.subtitle||n.local||'—')}${n.subtitle&&local?`<small>${h(local)}</small>`:''}</td><td><div class="manager-owner-links">${countryLinks||'—'}</div></td><td><div class="manager-owner-links">${cityLinks||'—'}</div></td><td>${h(primary(n)?.icon)} ${h(primary(n)?.name)}</td><td>${h(secondary(n)?.icon)} ${h(secondary(n)?.name)}</td><td><p class="manager-summary">${h(n.description)}</p><details><summary>展开内容与来源</summary><p>${h(n.description)}</p>${n.note?`<p>${h(n.note)}</p>`:''}${n.details?`<p>${h(n.details)}</p>`:''}<div class="manager-source-links">${sourceLinks}</div></details></td><td class="manager-actions"><a href="${G.url(n.id)}?from=${config.source}">查看详情 ↗</a>${binding.mode==='none'?'':`<a href="${H.mapUrl(n)}">${binding.mode==='fixed'?'地图定位':'动态搜索'} ↗</a>`}</td></tr>`;
  }
  function draw(){
   if(!countryOptions.some(c=>c.id===state.country))state.country='';
   const cityOptions=travelCities.filter(c=>countryIds.has(c.country)&&(!state.country||c.country===state.country));
   if(!cityOptions.some(c=>c.id===state.city))state.city='';
   if(!cardCategories.primary.some(c=>c.id===state.primary))state.primary='';
   const secondaryOptions=cardCategories.secondary.filter(c=>!state.primary||c.category===state.primary);
   if(!secondaryOptions.some(c=>c.id===state.secondary))state.secondary='';
   input('country').innerHTML=options(countryOptions,state.country,'全部国家');input('city').innerHTML=options(cityOptions,state.city,'全部城市');
   input('primary').innerHTML=options(cardCategories.primary,state.primary,'全部一级分类');input('secondary').innerHTML=options(secondaryOptions,state.secondary,'全部二级分类');
   const selectedCity=travelCities.find(c=>c.id===state.city),selectedCountry=travelCountries.find(c=>c.id===(selectedCity?.country||state.country));
   if(selectedCountry)H.rememberDestination(selectedCountry,selectedCity||null);
   const terms=G.normalize(state.q.trim()).split(/\s+/).filter(Boolean);
   filtered=all.filter(n=>(!state.country||G.countryIds(n).includes(state.country))&&(!state.city||G.cityIds(n).includes(state.city))&&(!state.primary||n.category===state.primary)&&(!state.secondary||n.subcategory===state.secondary)&&terms.every(term=>index.get(n.id).includes(term)));
   const pages=Math.max(1,Math.ceil(filtered.length/state.size));state.page=Math.min(state.page,pages);
   const start=(state.page-1)*state.size,visible=filtered.slice(start,start+state.size);
   input('rows').innerHTML=visible.map(row).join('')||'<tr><td colspan="8" class="manager-empty">没有符合条件的卡片。试试其他关键词，或重置筛选。</td></tr>';
   input('count').textContent=`${filtered.length} 张匹配 · 共 ${all.length} 张已收录卡片${filtered.length?' · 显示 '+(start+1)+'–'+(start+visible.length):''}`;
   input('page').textContent=`第 ${state.page} / ${pages} 页`;input('prev').disabled=state.page===1;input('next').disabled=state.page===pages;input('export').disabled=!filtered.length;input('size').value=state.size;
   history.replaceState(null,'',url());try{sessionStorage.setItem(config.storage,url());}catch{}
  }
  function csv(){
   const cell=value=>{let text=String(value??'');if(/^[=+@\-\t\r]/.test(text))text="'"+text;return '"'+text.replace(/"/g,'""')+'"';};
   const header=['卡片 ID','卡片名称','副标题','当地名称','国家','城市','一级分类','二级分类','简介','详情','来源'];
   const rows=filtered.map(n=>[n.id,n.name,n.subtitle||'',n.local||'',countries(n).map(c=>c.name).join(' / '),cities(n).map(c=>c.name).join(' / '),primary(n)?.name,secondary(n)?.name,n.description,[n.note,n.details].filter(Boolean).join('\n'),(n.sources||[]).map(([u,l])=>l+' '+u).join('\n')]);
   const data='\ufeff'+[header,...rows].map(r=>r.map(cell).join(',')).join('\r\n');
   const address=URL.createObjectURL(new Blob([data],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=address;a.download='eurotrip-'+region+'-cards.csv';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(address),1000);
  }
  input('search').value=state.q;
  input('search').addEventListener('input',e=>{state.q=e.target.value;state.page=1;draw();});
  for(const name of ['country','city','primary','secondary','size'])input(name).addEventListener('change',e=>{state[name]=name==='size'?Number(e.target.value):e.target.value;if(name==='country')state.city='';if(name==='primary')state.secondary='';state.page=1;draw();});
  input('reset').onclick=()=>{Object.assign(state,{q:'',country:'',city:'',primary:'',secondary:'',page:1});input('search').value='';draw();};
  input('prev').onclick=()=>{state.page--;draw();};input('next').onclick=()=>{state.page++;draw();};input('export').onclick=csv;
  draw();
 }
 return {render,bind,returnUrl};
})();

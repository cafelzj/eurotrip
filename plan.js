/* Read-only product inventory. Content lives in data/plan.js. */
window.PlanPage=(()=>{
 const data=projectPlan,views={features:['已实现','现在就能使用的功能','每项都附有体验入口；展开可查看当前范围与限制。'],roadmap:['计划实现','接下来，按价值逐步完善','优先完善内容，再扩展个人使用能力。以下均为待办建议，不代表已经上线或确定排期。'],benchmarks:['类似产品对标','产品、开源项目与知识素材','记录值得参考的做法和可继续阅读的资料，附本站现状、卡片用途与复用说明；各项分别注明核对范围。']};
 const priorities={first:'优先完善',next:'随后迭代',later:'待评估'},areas=new Map(data.areas.map(a=>[a.id,a]));
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const normalize=s=>CardStore.normalize(s);
 function state(params){return {view:views[params.get('view')]?params.get('view'):'features',area:areas.has(params.get('area'))?params.get('area'):'all',q:(params.get('q')||'').slice(0,300),item:params.get('item')||''};}
 function url(s){const p=new URLSearchParams();if(s.view!=='features')p.set('view',s.view);if(s.area!=='all')p.set('area',s.area);if(s.q)p.set('q',s.q);if(s.item)p.set('item',s.item);return '#plan'+(p.size?'?'+p.toString():'');}
 function matches(n,s){return (s.area==='all'||n.area===s.area)&&normalize(s.q).split(/\s+/).filter(Boolean).every(term=>normalize(JSON.stringify(n)+' '+areas.get(n.area).name+' '+(priorities[n.priority]||'')).includes(term));}
 const links=items=>(items||[]).map(([u,label])=>`<a href="${h(u)}"${u.startsWith('https://')?' target="_blank" rel="noopener noreferrer"':''}>${h(label)} ↗</a>`).join('');
 function jump(view,id,label){return `<a href="${h(url({view,area:'all',q:'',item:id}))}">${h(label)} ↗</a>`;}
 function card(n,view){
  const a=areas.get(n.area),resource=n.kind==='resource',status=view==='features'?'已实现':view==='roadmap'?priorities[n.priority]:resource?'资料参考':'设计参考';
  const body=view==='benchmarks'?`<div class="plan-good"><h4>${resource?'适合找什么':'做得好的地方'}</h4><ul>${n.strengths.map(x=>`<li>${h(x)}</li>`).join('')}</ul></div><dl class="plan-comparison"><div><dt>本站现状</dt><dd>${h(n.ours)}</dd></div><div><dt>${resource?'如何用于卡片':'建议借鉴'}</dt><dd>${h(n.adopt)}</dd></div></dl><p class="plan-license"><b>复用说明</b> ${h(n.license)}</p>${n.review?`<p class="plan-license"><b>核对范围</b> ${h(n.review)}</p>`:''}<div class="plan-links">${links([...(n.repo?[['https://github.com/'+n.repo,'GitHub 仓库'],['https://github.com/'+n.repo+'#readme','README']]:n.url?[[n.url,'资料入口']]:[]),...(n.links||[])])}</div><div class="plan-related">${(n.roadmap||[]).map(id=>{const p=data.roadmap.find(p=>p.id===id);return jump('roadmap',id,p.name);}).join('')}</div>`:
   `<ul>${n.details.map(x=>`<li>${h(x)}</li>`).join('')}</ul>${view==='roadmap'?`<dl class="plan-comparison"><div><dt>完成标准</dt><dd>${h(n.acceptance)}</dd></div><div><dt>依赖与边界</dt><dd>${h(n.dependency)}</dd></div></dl>`:''}<div class="plan-links">${links(n.links)}</div>${n.benchmarks?.length?`<div class="plan-related"><span>参考项目</span>${n.benchmarks.map(id=>{const p=data.benchmarks.find(p=>p.id===id);return jump('benchmarks',id,p.name);}).join('')}</div>`:''}`;
  return `<details class="plan-card" data-plan-id="${h(n.id)}" data-plan-priority="${h(n.priority||'')}"><summary><div class="plan-card-meta"><span>${h(a.icon)} ${h(a.name)}</span><span class="plan-badge ${view==='roadmap'?'plan-priority-'+n.priority:''}">${h(status)}</span></div><h3>${h(n.name)}</h3>${n.repo?`<small class="plan-repo">${h(n.repo)}</small>`:''}<p>${h(n.summary)}</p><span class="plan-expand">展开详情 <span aria-hidden="true">＋</span></span></summary><div class="plan-card-body">${body}</div></details>`;
 }
 function metrics(){
  const cards=[...CardStore.nodes.values()].filter(n=>!n.live),europe=travelCountries.filter(c=>c.id!=='cn'),europeCities=travelCities.filter(c=>europe.some(n=>n.id===c.country)),china=travelCities.filter(c=>c.country==='cn');
  const foods=Object.values(produceCountries).reduce((sum,c)=>sum+(c.food||produceFood).items.length,0);
  return [[cards.length,'张知识卡片','欧洲与中国的静态卡片，去重统计'],[europe.length+' 国 / '+europeCities.length+' 城','欧洲目的地',china.filter(c=>!c.parentCity).length+' 个中国地级市 · '+china.filter(c=>c.parentCity).length+' 个县级目的地'],[words.length,'个旅行词条',dictionaryLanguages.length+' 种可配置展示语言'],[foods,'项三国食材','产区、用途、供需与能源数据']];
 }
 function render(params=new URLSearchParams()){
  const s=state(params);
  return `<section class="plan-page" aria-labelledby="planTitle"><header class="plan-heading"><div><div class="guide-kicker">PROJECT NOTEBOOK</div><h1 id="planTitle">方案</h1><p>已实现什么，接下来做什么，可以向谁学习。</p></div><div class="plan-updated">内容整理于 <time datetime="${data.updated}">${data.updated}</time><span>功能清单与计划分开维护</span></div></header><div class="plan-metrics">${metrics().map(([value,label,note])=>`<div><strong>${h(value)}</strong><b>${h(label)}</b><small>${h(note)}</small></div>`).join('')}</div><nav class="plan-tabs" aria-label="方案内容"></nav><div class="plan-toolbar"><label class="plan-search"><span>搜索方案</span><input type="search" id="planSearch" maxlength="300" placeholder="历史、图片、离线、地图、词源…" value="${h(s.q)}"></label><label><span>主题</span><select id="planArea"><option value="all">全部主题</option>${data.areas.map(a=>`<option value="${a.id}"${s.area===a.id?' selected':''}>${h(a.icon+' '+a.name)}</option>`).join('')}</select></label><button type="button" id="planReset">重置筛选</button></div><div class="plan-section-heading"><h2 id="planSectionTitle"></h2><p id="planSectionDescription"></p><p id="planCount" role="status" aria-live="polite"></p></div><div class="plan-results"></div><section class="plan-principles" aria-labelledby="planPrinciples"><h2 id="planPrinciples">保持简单的几个约定</h2><div>${data.principles.map((p,i)=>`<article><span>0${i+1}</span><h3>${h(p.name)}</h3><p>${h(p.text)}</p></article>`).join('')}</div></section><p class="plan-footnote">覆盖数字从当前加载的数据计算，不代表内容完整度。对标资料的核对范围见各项目说明，功能与许可可能继续变化；实际复用前应核对原站或仓库的最新说明。</p></section>`;
 }
 function bind(root,params=new URLSearchParams()){
  let s=state(params);const page=root.querySelector('.plan-page');
  function draw(update=false){
   const counts=Object.fromEntries(Object.keys(views).map(v=>[v,data[v].filter(n=>matches(n,s)).length]));
   page.querySelector('.plan-tabs').innerHTML=Object.entries(views).map(([id,[name]])=>`<a href="${h(url({...s,view:id,item:''}))}"${id===s.view?' aria-current="page"':''}>${name} <span>${counts[id]}</span></a>`).join('');
   const items=data[s.view].filter(n=>matches(n,s));
   page.querySelector('#planSectionTitle').textContent=views[s.view][1];page.querySelector('#planSectionDescription').textContent=views[s.view][2];
   page.querySelector('#planCount').textContent=`显示 ${items.length} / ${data[s.view].length} 项`;
   page.querySelector('.plan-results').innerHTML=items.length?items.map(n=>card(n,s.view)).join(''):'<div class="plan-empty"><b>没有找到符合条件的内容</b><p>试试其他关键词，或重置筛选查看当前部分的全部内容。</p></div>';
   if(update)history.replaceState(null,'',url(s));
  }
  page.querySelector('#planSearch').oninput=e=>{s={...s,q:e.target.value,item:''};draw(true);};
  page.querySelector('#planArea').onchange=e=>{s={...s,area:e.target.value,item:''};draw(true);};
  page.querySelector('#planReset').onclick=()=>{s={...s,q:'',area:'all',item:''};page.querySelector('#planSearch').value='';page.querySelector('#planArea').value='all';draw(true);};
  draw();
  const target=[...page.querySelectorAll('[data-plan-id]')].find(el=>el.dataset.planId===s.item);if(target){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'center'}));}
 }
 return {render,bind};
})();

/* A single product and indicator per trend; the matrix uses one FBS edition/year. */
window.ProduceSupplyView = (() => {
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const valid=value=>typeof value==='number'&&Number.isFinite(value);
 const num=(value,approx=false)=>valid(value)?(approx?'≈ ':'')+new Intl.NumberFormat('zh-CN',{maximumFractionDigits:approx?1:2}).format(value):'—';
 function render(data,categories){
  return `<div class="supply-atlas" data-supply-atlas><div class="supply-coverage"><b>${data.products.length} 个产品 / 统计组 · ${categories.length} 类 · ${data.years[0]}–${data.years.at(-1)}</b><span>🇭🇺 匈牙利全国 · 不分摊为布达佩斯市用量</span></div><div class="supply-categories" role="group" aria-label="供需数据分类">${categories.map(c=>`<button data-supply-category="${h(c.id)}" aria-pressed="false">${h(c.icon)} ${h(c.name)}<small>${data.products.filter(p=>p.category===c.id).length}</small></button>`).join('')}</div><div class="supply-controls"><label>数据视图<select data-supply-view><option value="balance">同年供需表 · 2010–2023</option><option value="latest">最新单项 · 分别标年</option></select></label><label data-supply-year-label>对照年份<select data-supply-year>${data.years.map(y=>`<option value="${y}" ${y===data.defaultYear?'selected':''}>${y} 年</option>`).join('')}</select></label><label class="supply-search">搜索本类产品<input type="search" data-supply-search placeholder="产品名称 / 英文…"></label></div><p class="supply-category-note" data-supply-category-note></p><p class="supply-units" data-supply-units></p><div class="produce-table-wrap supply-matrix" data-supply-table></div><p class="supply-data-note">实测消费量 / 人均实际消费量：本专题尚未取得。下表的 Food 与人均量是供给端消费参考，未扣消费者浪费；— 表示未取得或副本零值未确认，不代表真实零。† 为原表负值，需核查统计平衡，不能解释为负的食用量。</p><div class="supply-trend"><div class="supply-trend-heading"><div><span class="produce-kicker">ONE PRODUCT · ONE INDICATOR</span><h3>一种产品，追踪一个指标</h3></div><button data-supply-save>↓ 保存趋势 SVG</button></div><div class="supply-trend-controls"><label>产品<select data-supply-product></select></label><label data-supply-indicator-label>指标<select data-supply-indicator>${data.metrics.map(m=>`<option value="${h(m.id)}">${h(m.name)}</option>`).join('')}</select></label></div><div data-supply-chart></div><details class="supply-raw"><summary>查看该趋势的逐年数值与来源</summary><div class="produce-table-wrap" data-supply-trend-table></div></details></div><details class="supply-methodology"><summary>数据版本、单位与缺失值怎么处理</summary>${data.notes.map(n=>`<p>${h(n)}</p>`).join('')}<button class="produce-ref" data-produce-source="fao-supply-complete">[fao-supply-complete] 查看数据、人口与转换方法</button></details></div>`;
 }
 function bind(root,{data,categories,latestSeries,items,refs,sources}){
  let category=categories[0].id,view='balance',year=data.defaultYear,query='',productId='',indicator='production';
  const itemById=new Map(items.map(i=>[i.id,i]));
  const latest=latestSeries.filter(s=>s.values.some(valid));
  const metricById=new Map(data.metrics.map(m=>[m.id,m]));
  const input=selector=>root.querySelector(selector);
  const inCategory=()=>view==='balance'?data.products.filter(p=>p.category===category):latest.filter(s=>itemById.get(s.itemId)?.category===category);
  const filtered=()=>inCategory().filter(p=>(p.name+' '+(p.originalName||'')).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  function foodLink(itemId){return itemId?`<button class="supply-food-link" data-produce-food-focus="${h(itemId)}">食材 ↗</button>`:'';}
  function matrix(){
   const rows=filtered();
   if(view==='latest')return `<table><caption>最新单项 · ${h(categories.find(c=>c.id===category).name)}；每行分别标年，不拼成供需平衡。</caption><thead><tr><th scope="col">产品 / 指标范围</th><th scope="col">指标</th><th scope="col">最新数值</th><th scope="col">单位</th><th scope="col">年份</th><th scope="col">来源</th></tr></thead><tbody>${rows.map(s=>{const i=s.values.findLastIndex(valid);return `<tr ${s.id===productId?'class="is-selected"':''}><th scope="row"><button data-supply-select="${h(s.id)}">${h(s.name)}</button>${foodLink(s.itemId)}</th><td>${s.kind==='production'?'农业 / 畜产生产量':'公布的人均食物可供量'}</td><td>${num(s.values[i])}</td><td>${h(s.unit)}</td><td>${s.years[i]}</td><td>${refs(s.sourceIds)}</td></tr>`;}).join('')||'<tr><td colspan="6">本类暂无更新的单项数据；可切换“同年供需表”查看。</td></tr>'}</tbody></table>`;
   const at=data.years.indexOf(year);
   return `<table><caption>${year} 年 · ${h(categories.find(c=>c.id===category).name)} · 同一版 FAO FBS。含制品、统计组与具体食材按名称区分。</caption><thead><tr><th scope="col">产品 / 统计范围</th>${data.metrics.map(m=>`<th scope="col">${h(m.name)}<small>${h(m.unit)}</small></th>`).join('')}</tr></thead><tbody>${rows.map(p=>`<tr ${p.id===productId?'class="is-selected"':''}><th scope="row"><button data-supply-select="${h(p.id)}">${h(p.name)}</button>${foodLink(p.itemId)}</th>${data.metrics.map(m=>`<td title="${h(valid(p.values[m.id][at])?m.definition:'未取得，或副本中的零值无法区分实际零与原表缺失。')}">${num(p.values[m.id][at],m.id==='perCapita')}${p.values[m.id][at]<0?' †':''}</td>`).join('')}</tr>`).join('')||'<tr><td colspan="7">没有符合搜索条件的产品。</td></tr>'}</tbody></table>`;
  }
  function series(){
   if(view==='latest'){
    const row=latest.find(p=>p.id===productId);if(!row)return null;
    return {...row,label:row.kind==='production'?'生产量':'公布的人均食物可供量',definition:row.kind==='production'?'农业或畜产生产口径；对应具体原产品，不是消费量。':'FAO公布的供给端人均量，不是实测消费。奶类含乳品折算，禽肉包含鸡鸭等。',scope:'匈牙利全国'};
   }
   const row=data.products.find(p=>p.id===productId),m=metricById.get(indicator);if(!row)return null;
   return {name:row.name,label:m.name,unit:m.unit,years:data.years,values:row.values[indicator],definition:m.definition,sourceIds:row.sourceIds,scope:data.scope};
  }
  function drawing(s){
   const values=s.values.filter(valid);if(!values.length)return '';
   const min=Math.min(0,...values)*1.08,max=Math.max(0,...values)*1.08||1,x=i=>62+i/(s.years.length-1||1)*770,y=v=>224-(v-min)/(max-min)*160;
   const paths=[];let current=[];
   s.values.forEach((v,i)=>{if(valid(v))current.push(`${x(i)},${y(v)}`);else if(current.length){paths.push(current);current=[];}});if(current.length)paths.push(current);
   return `<line x1="62" x2="832" y1="224" y2="224" stroke="#cbd7c1"/>${[min,(min+max)/2,max].map(t=>`<line x1="62" x2="832" y1="${y(t)}" y2="${y(t)}" stroke="#e2e8da"/><text x="52" y="${y(t)+5}" text-anchor="end" font-size="13" fill="#74866b">${num(t)}</text>`).join('')}${paths.map(points=>`<polyline points="${points.join(' ')}" fill="none" stroke="#547b54" stroke-width="3"/>`).join('')}${s.values.map((v,i)=>valid(v)?`<circle cx="${x(i)}" cy="${y(v)}" r="${s.years[i]===year?5:3}" fill="#597d51"><title>${s.years[i]}：${num(v,indicator==='perCapita'&&view==='balance')} ${h(s.unit)}</title></circle>`:'').join('')}${s.years.map((v,i)=>i%2===0||i===s.years.length-1?`<text x="${x(i)}" y="250" text-anchor="middle" font-size="13" fill="#6e8264">${v}</text>`:'').join('')}`;
  }
  function trend(){
   const s=series(),save=input('[data-supply-save]');save.disabled=!s||!s.values.some(valid);
   if(!s){input('[data-supply-chart]').innerHTML='<p class="produce-empty">本类尚无可用的最新单项趋势，请切换同年供需表。</p>';input('[data-supply-trend-table]').innerHTML='';return;}
   const available=s.values.some(valid),description=`${s.name} · ${s.label}；${s.scope}；${s.unit}；${s.years.map((y,i)=>`${y}: ${num(s.values[i])}`).join('；')}`;
   input('[data-supply-chart]').innerHTML=`<h4>${h(s.name)} · ${h(s.label)}</h4><p class="supply-trend-scope">${h(s.scope)} · ${s.years[0]}–${s.years.at(-1)} · ${h(s.unit)}</p>${available?`<div class="supply-chart-scroll"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 870 270" role="img" aria-label="${h(description)}">${drawing(s)}</svg></div>`:'<p class="produce-empty">该产品、指标在此副本中未取得已确认的非零数据；不画零值曲线。</p>'}<p>${h(s.definition)}</p><div>${refs(s.sourceIds)}</div>`;
   input('[data-supply-trend-table]').innerHTML=`<table><caption>${h(s.name)} · ${h(s.label)} · ${h(s.unit)}</caption><thead><tr><th scope="col">年份</th><th scope="col">数值</th></tr></thead><tbody>${s.years.map((y,i)=>`<tr><th scope="row">${y}</th><td>${num(s.values[i],indicator==='perCapita'&&view==='balance')}</td></tr>`).join('')}</tbody></table>`;
  }
  function update(){
   const rows=inCategory();if(!rows.some(p=>p.id===productId))productId=rows[0]?.id||'';
   root.querySelectorAll('[data-supply-category]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.supplyCategory===category));
   input('[data-supply-year-label]').hidden=view==='latest';input('[data-supply-indicator-label]').hidden=view==='latest';
   input('[data-supply-category-note]').textContent=categories.find(c=>c.id===category).description;
   input('[data-supply-units]').textContent=view==='balance'?`${year} 年同年对照｜总量单位：千吨（1千吨=1000吨）｜人均：千克/人/年，为同表Food÷人口的近似估算。点产品名查看趋势。`:'逐行显示最新有效年份和单位；生产与人均供给分别列出，不能将不同年份拼成供需平衡。';
   input('[data-supply-product]').innerHTML=rows.map(p=>`<option value="${h(p.id)}" ${p.id===productId?'selected':''}>${h(p.name)}${view==='latest'?' · '+(p.kind==='production'?'产量':'人均可供量'):''}</option>`).join('');
   input('[data-supply-table]').innerHTML=matrix();trend();
  }
  function selectCategory(id,product){if(!categories.some(c=>c.id===id))return;category=id;view='balance';query='';input('[data-supply-search]').value='';input('[data-supply-view]').value=view;if(product)productId=product;update();}
  root.addEventListener('supply-focus',event=>selectCategory(event.detail.category,event.detail.product));
  root.addEventListener('input',event=>{if(event.target.matches('[data-supply-search]')){query=event.target.value;input('[data-supply-table]').innerHTML=matrix();}});
  root.addEventListener('change',event=>{
   if(event.target.matches('[data-supply-view]')){view=event.target.value;query='';input('[data-supply-search]').value='';update();}
   if(event.target.matches('[data-supply-year]')){year=Number(event.target.value);input('[data-supply-table]').innerHTML=matrix();trend();}
   if(event.target.matches('[data-supply-product]')){productId=event.target.value;input('[data-supply-table]').innerHTML=matrix();trend();}
   if(event.target.matches('[data-supply-indicator]')){indicator=event.target.value;trend();}
  });
  root.addEventListener('click',event=>{
   const button=event.target.closest('button');if(!button)return;
   if(button.dataset.supplyCategory)selectCategory(button.dataset.supplyCategory);
   if(button.dataset.supplySelect){productId=button.dataset.supplySelect;input('[data-supply-product]').value=productId;input('[data-supply-table]').innerHTML=matrix();trend();input('.supply-trend').scrollIntoView({behavior:'smooth',block:'start'});}
   if(button.hasAttribute('data-supply-save')){
    const s=series();if(!s||!s.values.some(valid))return;
    const selectedSources=sources.filter(source=>s.sourceIds.includes(source.id));
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="460" viewBox="0 0 1000 460"><title>${h(s.name)} · ${h(s.label)}</title><metadata>${h(JSON.stringify({...s,sources:selectedSources}))}</metadata><rect width="1000" height="460" fill="#fffefa"/><g font-family="Arial, sans-serif" fill="#254b3b"><text x="28" y="37" font-size="21">${h(s.name)} · ${h(s.label)}</text><text x="28" y="69" font-size="15">${h(s.scope)} · ${s.years[0]}–${s.years.at(-1)} · ${h(s.unit)}</text><g transform="translate(20 85)">${drawing(s)}</g><text x="28" y="385" font-size="13">来源：${h(s.sourceIds.join(', '))}；FAOSTAT / AgriFoodPy / OWID，各数据版本见下载JSON。</text><text x="28" y="412" font-size="13">Food与人均可供量是供给端参考，不是实际摄入；缺值不画作零。</text><text x="28" y="439" font-size="12">资料整理 ${h(data.checkedAt)} · 所选来源版本 ${h(selectedSources.map(source=>(source.version||'').slice(0,12)).join(', '))}</text></g></svg>`;
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=`hungary-${productId}-${view==='latest'?'latest':indicator}-trend.svg`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }
  });
  update();
 }
 return {render,bind};
})();

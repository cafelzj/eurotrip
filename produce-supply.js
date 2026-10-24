/* Comparable series share years and units; the matrix uses one FBS edition/year. */
window.ProduceSupplyView = (() => {
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const valid=value=>typeof value==='number'&&Number.isFinite(value);
 const num=(value,approx=false)=>valid(value)?(approx?'≈ ':'')+new Intl.NumberFormat('zh-CN',{maximumFractionDigits:approx?1:2}).format(value):'—';
 function render(data,categories){
  return `<div class="supply-atlas" data-supply-atlas><div class="supply-coverage"><b>${data.products.length} 个产品 / 统计组 · ${categories.length} 类 · ${data.years[0]}–${data.years.at(-1)}</b><span>${h(data.scope)} · 不分摊为城市用量</span></div><div class="supply-categories" role="group" aria-label="供需数据分类">${categories.map(c=>`<button data-supply-category="${h(c.id)}" aria-pressed="false">${h(c.icon)} ${h(c.name)}<small>${data.products.filter(p=>p.category===c.id).length}</small></button>`).join('')}</div><div class="supply-controls"><label>数据视图<select data-supply-view><option value="balance">同年供需表 · 2010–2023</option><option value="latest">最新单项 · 分别标年</option></select></label><label data-supply-year-label>对照年份<select data-supply-year>${data.years.map(y=>`<option value="${y}" ${y===data.defaultYear?'selected':''}>${y} 年</option>`).join('')}</select></label><label class="supply-search">搜索本类产品<input type="search" data-supply-search placeholder="产品名称 / 英文…"></label></div><p class="supply-category-note" data-supply-category-note></p><p class="supply-units" data-supply-units></p><div class="produce-table-wrap supply-matrix" data-supply-table></div><p class="supply-data-note">实测消费量 / 人均实际消费量：本专题尚未取得。下表的 Food 与人均量是供给端消费参考，未扣消费者浪费；— 表示未取得或副本零值未确认，不代表真实零。† 为原表负值，需核查统计平衡，不能解释为负的食用量。</p><div class="supply-trend"><div class="supply-trend-heading"><div><span class="produce-kicker">COMPARE · DISCOVER · EXPLORE</span><h3>把产品与指标放在一起看</h3></div><button data-supply-save>↓ 保存对比 SVG</button></div><div class="supply-compare-modes" role="group" aria-label="对比方式"><button data-supply-mode="metrics" aria-pressed="true">一种产品 · 多个指标</button><button data-supply-mode="products" aria-pressed="false">多种产品 · 一个指标</button><button data-supply-mode="countries" aria-pressed="false">三国 · 同产品同指标</button></div><div class="supply-trend-controls"><label data-supply-product-label>产品<select data-supply-product></select></label><label data-supply-indicator-label>比较指标<select data-supply-indicator>${data.metrics.map(m=>`<option value="${h(m.id)}">${h(m.name)}</option>`).join('')}</select></label><label>纵轴<select data-supply-scale><option value="value">原始数值</option><option value="index">变化指数 · 基年 = 100</option></select></label><label data-supply-base-label hidden>对比基年<select data-supply-base></select></label></div><div data-supply-selection></div><p class="supply-compare-status" data-supply-status role="status"></p><div data-supply-chart></div><details class="supply-raw"><summary>查看对比的逐年原值与来源</summary><div class="produce-table-wrap" data-supply-trend-table></div></details></div><details class="supply-methodology"><summary>数据版本、单位与缺失值怎么处理</summary>${data.notes.map(n=>`<p>${h(n)}</p>`).join('')}<button class="produce-ref" data-produce-source="fao-supply-complete">[fao-supply-complete] 查看数据、人口与转换方法</button></details></div>`;
 }
 function bind(root,{data,categories,latestSeries,items,refs,sources,countryData={}}){
  let category=categories[0].id,view='balance',year=data.defaultYear,query='',productId='',indicator='production';
  let mode='metrics',scale='value',baseYear=null,cursorYear=null;
  let selectedMetrics=['production','imports','exports','food'],selectedProducts=[];
  const colors=['#246b61','#c16b32','#5679b1','#9a5c8f','#a17a16','#687844'];
  const selectionLimit=6;
  const itemById=new Map(items.map(i=>[i.id,i]));
  const latest=latestSeries.filter(s=>s.values.some(valid));
  const metricById=new Map(data.metrics.map(m=>[m.id,m]));
  const input=selector=>root.querySelector(selector);
  const inCategory=()=>view==='balance'?data.products.filter(p=>p.category===category):latest.filter(s=>itemById.get(s.itemId)?.category===category);
  const filtered=()=>inCategory().filter(p=>(p.name+' '+(p.originalName||'')).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  function foodLink(itemId){return itemId?`<button class="supply-food-link" data-produce-food-focus="${h(itemId)}">食材 ↗</button>`:'';}
  function matrix(){
   const rows=filtered();
   if(view==='latest')return `<table><caption>最新单项 · ${h(categories.find(c=>c.id===category).name)}；每行分别标年，不拼成供需平衡。</caption><thead><tr><th scope="col">产品 / 指标范围</th><th scope="col">指标</th><th scope="col">最新数值</th><th scope="col">单位</th><th scope="col">年份</th><th scope="col">来源</th></tr></thead><tbody>${rows.map(s=>{const i=s.values.findLastIndex(valid);return `<tr ${(mode==='products'?selectedProducts.includes(s.id):s.id===productId)?'class="is-selected"':''}><th scope="row"><button data-supply-select="${h(s.id)}">${h(s.name)}</button>${foodLink(s.itemId)}</th><td>${s.kind==='production'?'农业 / 畜产生产量':'公布的人均食物可供量'}</td><td>${num(s.values[i])}</td><td>${h(s.unit)}</td><td>${s.years[i]}</td><td>${refs(s.sourceIds)}</td></tr>`;}).join('')||'<tr><td colspan="6">本类暂无更新的单项数据；可切换“同年供需表”查看。</td></tr>'}</tbody></table>`;
   const at=data.years.indexOf(year);
   return `<table><caption>${year} 年 · ${h(categories.find(c=>c.id===category).name)} · 同一版 FAO FBS。含制品、统计组与具体食材按名称区分。</caption><thead><tr><th scope="col">产品 / 统计范围</th>${data.metrics.map(m=>`<th scope="col">${h(m.name)}<small>${h(m.unit)}</small></th>`).join('')}</tr></thead><tbody>${rows.map(p=>`<tr ${(mode==='products'?selectedProducts.includes(p.id):p.id===productId)?'class="is-selected"':''}><th scope="row"><button data-supply-select="${h(p.id)}">${h(p.name)}</button>${foodLink(p.itemId)}</th>${data.metrics.map(m=>`<td title="${h(valid(p.values[m.id][at])?m.definition:'未取得，或副本中的零值无法区分实际零与原表缺失。')}">${num(p.values[m.id][at],m.id==='perCapita')}${p.values[m.id][at]<0?' †':''}</td>`).join('')}</tr>`).join('')||'<tr><td colspan="7">没有符合搜索条件的产品。</td></tr>'}</tbody></table>`;
  }
  function productOptions(){return view==='balance'?data.products:latest;}
  function latestName(row){return row.name+' · '+(row.kind==='production'?'产量':'人均可供量');}
  function controls(){
   root.querySelectorAll('[data-supply-mode]').forEach(b=>{b.hidden=b.dataset.supplyMode==='countries'&&view==='latest';b.setAttribute('aria-pressed',b.dataset.supplyMode===mode);b.textContent=b.dataset.supplyMode==='countries'?'三国 · 同产品同指标':view==='latest'?(b.dataset.supplyMode==='metrics'?'单项趋势':'多项对比'):(b.dataset.supplyMode==='metrics'?'一种产品 · 多个指标':'多种产品 · 一个指标');});
   input('[data-supply-product-label]').hidden=mode==='products';
   input('[data-supply-indicator-label]').hidden=view==='latest'||mode==='metrics';
   // Keep all products available for cross-category comparisons and direct food links.
   input('[data-supply-product]').innerHTML=(view==='balance'?data.products:latest).map(p=>`<option value="${h(p.id)}" ${p.id===productId?'selected':''}>${h(view==='latest'?latestName(p):p.name)}</option>`).join('');
   const selection=input('[data-supply-selection]');
   if(mode==='metrics'&&view==='balance'){
    selection.innerHTML=`<fieldset class="supply-choices"><legend>叠加指标</legend>${data.metrics.map((m,i)=>`<label style="--series-color:${colors[i]}"><input type="checkbox" data-supply-metric="${h(m.id)}" ${selectedMetrics.includes(m.id)?'checked':''}><span>${h(m.name)}</span></label>`).join('')}</fieldset><div class="supply-presets"><span>快速选择</span><button data-supply-preset="trade">产量与贸易</button><button data-supply-preset="supply">供给与食用</button></div>`;
   }else if(mode==='products'){
    selection.innerHTML=`<details class="supply-product-picker"><summary>选择对比产品 <span data-supply-count></span> · 最多 ${selectionLimit} 条曲线</summary><label class="supply-picker-search">搜索全部分类<input type="search" data-supply-compare-search placeholder="中文 / 英文产品名称…"></label>${categories.map(c=>{const options=productOptions().filter(p=>(view==='balance'?p.category:itemById.get(p.itemId)?.category)===c.id);return options.length?`<fieldset class="supply-choices" data-supply-pick-group><legend>${h(c.icon)} ${h(c.name)}</legend>${options.map(p=>`<label data-supply-pick-option data-search="${h((p.name+' '+(p.originalName||'')).toLocaleLowerCase())}"><input type="checkbox" data-supply-compare-product="${h(p.id)}" ${selectedProducts.includes(p.id)?'checked':''}><span>${h(view==='latest'?latestName(p):p.name)}</span></label>`).join('')}</fieldset>`:'';}).join('')}</details>`;
   }else selection.innerHTML='';
   updateChoiceState();
  }
  function updateChoiceState(){
   const count=input('[data-supply-count]');if(count)count.textContent=`已选 ${selectedProducts.length} 个`;
   root.querySelectorAll('[data-supply-compare-product]').forEach(c=>{c.disabled=!c.checked&&selectedProducts.length>=selectionLimit;});
   root.querySelectorAll('[data-supply-metric]').forEach(c=>{c.disabled=c.checked&&selectedMetrics.length===1;});
  }
  function series(){
   if(mode==='countries'&&view==='balance'){
    const metric=metricById.get(indicator);
    return Object.values(countryData).map(({country,supply},i)=>{const row=supply.products.find(p=>p.id===productId);return row?{key:country.id+'-'+productId+'-'+metric.id,country:country.id,name:row.name,label:metric.name,legend:country.name,unit:metric.unit,years:supply.years,values:row.values[metric.id],definition:metric.definition,sourceIds:row.sourceIds,scope:supply.scope,approx:metric.id==='perCapita',color:colors[i]}:null;}).filter(Boolean);
   }
   const selected=mode==='products'?selectedProducts:[productId];
   const result=[];
   for(const id of selected){
    if(view==='latest'){
     const row=latest.find(p=>p.id===id);if(!row)continue;
     result.push({...row,key:row.id,label:row.kind==='production'?'生产量':'公布的人均食物可供量',legend:latestName(row),definition:row.kind==='production'?'农业或畜产生产口径；对应具体原产品，不是消费量。':'FAO公布的供给端人均量，不是实测消费。奶类含乳品折算，禽肉包含鸡鸭等。',scope:row.scope||data.scope});
    }else{
     const row=data.products.find(p=>p.id===id);if(!row)continue;
     for(const metricId of mode==='metrics'?selectedMetrics:[indicator]){
      const m=metricById.get(metricId);
      result.push({key:row.id+'-'+m.id,name:row.name,label:m.name,legend:mode==='metrics'?m.name:row.name,unit:m.unit,years:data.years,values:row.values[m.id],definition:m.definition,sourceIds:row.sourceIds,scope:data.scope,approx:m.id==='perCapita',metric:m.id});
     }
    }
   }
   return result.map((s,i)=>({...s,color:mode==='metrics'&&view==='balance'?colors[data.metrics.findIndex(m=>m.id===s.metric)]:colors[i]}));
  }
  function model(){
   const rows=series(),years=[...new Set(rows.flatMap(s=>s.years))].sort((a,b)=>a-b);
   const mixed=new Set(rows.map(s=>s.unit)).size>1;
   if(mixed)scale='index';
   const bases=years.filter(y=>rows.length&&rows.every(s=>{const v=s.values[s.years.indexOf(y)];return valid(v)&&v>0;}));
   if(!bases.includes(baseYear))baseYear=bases[0]??null;
   return {rows:rows.map(s=>({...s,plotValues:years.map(y=>{const v=s.values[s.years.indexOf(y)];if(!valid(v))return null;if(scale==='value')return v;const base=s.values[s.years.indexOf(baseYear)];return valid(base)&&base>0?v/base*100:null;})})),years,bases,mixed,baseYear,scale};
  }
  const chartBox={left:86,right:866,top:48,bottom:264,width:930,height:310};
  function geometry(m){
   const values=m.rows.flatMap(s=>s.plotValues).filter(valid);
   const low=Math.min(0,...values),high=Math.max(0,...values);
   const rough=((high-low)||1)/4,power=10**Math.floor(Math.log10(rough));
   const step=([1,2,2.5,5,10].find(n=>n*power>=rough)||10)*power;
   const min=Math.floor(low/step)*step,max=Math.ceil(high/step)*step||step;
   return {step,x:i=>chartBox.left+i/(m.years.length-1||1)*(chartBox.right-chartBox.left),y:v=>chartBox.bottom-(v-min)/(max-min)*(chartBox.bottom-chartBox.top),min,max};
  }
  function drawing(m,interactive=false){
   const {x,y,min,max,step}=geometry(m),{left,right,top,bottom}=chartBox;
   const unit=scale==='index'?'指数 · '+baseYear+' = 100':m.rows[0]?.unit||'';
   return `<text x="${left}" y="23" font-size="12" fill="#60745b">${h(unit)}</text>${Array.from({length:Math.round((max-min)/step)+1},(_,i)=>min+step*i).map(t=>`<line x1="${left}" x2="${right}" y1="${y(t)}" y2="${y(t)}" stroke="#e2e8da"/><text x="${left-10}" y="${y(t)+4}" text-anchor="end" font-size="12" fill="#74866b">${num(t)}</text>`).join('')}${scale==='index'&&m.baseYear!==null?`<line x1="${left}" x2="${right}" y1="${y(100)}" y2="${y(100)}" stroke="#99a58c" stroke-dasharray="5 5"/>`:''}${min<0?`<line x1="${left}" x2="${right}" y1="${y(0)}" y2="${y(0)}" stroke="#8d9f86"/>`:''}${m.rows.map(s=>{
    const paths=[];let current=[];
    s.plotValues.forEach((v,i)=>{if(valid(v))current.push(`${x(i)},${y(v)}`);else if(current.length){paths.push(current);current=[];}});if(current.length)paths.push(current);
    return `<g data-supply-line="${h(s.key)}">${paths.map(points=>`<polyline points="${points.join(' ')}" fill="none" stroke="${s.color}" stroke-width="2.8" stroke-linejoin="round"/>`).join('')}${s.plotValues.map((v,i)=>valid(v)?`<circle cx="${x(i)}" cy="${y(v)}" r="${m.years[i]===year?4.5:2.8}" fill="${s.color}" stroke="#fffef9" stroke-width="1"><title>${h(s.legend)} · ${m.years[i]}：${num(s.values[s.years.indexOf(m.years[i])],s.approx)} ${h(s.unit)}${scale==='index'?' · 指数 '+num(v):''}</title></circle>`:'').join('')}</g>`;
   }).join('')}${m.years.map((v,i)=>i%2===0||i===m.years.length-1?`<text x="${x(i)}" y="${bottom+26}" text-anchor="middle" font-size="12" fill="#6e8264">${v}</text>`:'').join('')}${interactive?`<line data-supply-crosshair x1="${right}" x2="${right}" y1="${top}" y2="${bottom}" stroke="#8b9c80" stroke-dasharray="3 4" pointer-events="none"/>`:''}`;
  }
  function readout(m,selectedYear){
   if(!m.years.includes(selectedYear))selectedYear=m.years.at(-1);
   cursorYear=selectedYear;
   const readout=input('[data-supply-readout]');if(!readout)return;
   readout.innerHTML=m.rows.map(s=>{const at=s.years.indexOf(selectedYear),v=s.values[at],pv=s.plotValues[m.years.indexOf(selectedYear)];return `<div style="--series-color:${s.color}"><span>${h(s.legend)}</span><strong>${num(v,s.approx)} <small>${h(s.unit)}</small></strong>${scale==='index'?`<small>指数 ${num(pv)}</small>`:''}</div>`;}).join('');
   input('[data-supply-cursor]').value=m.years.indexOf(selectedYear);
   input('[data-supply-cursor]').setAttribute('aria-valuetext',selectedYear+' 年');
   input('[data-supply-cursor-year]').textContent=selectedYear+' 年';
   const line=input('[data-supply-crosshair]'),x=geometry(m).x(m.years.indexOf(selectedYear));
   if(line){line.setAttribute('x1',x);line.setAttribute('x2',x);}
  }
  function chartTitle(m){if(mode==='countries')return (data.products.find(p=>p.id===productId)?.name||'产品')+' · '+metricById.get(indicator).name+' · 三国对比';return view==='balance'?(mode==='metrics'?(data.products.find(p=>p.id===productId)?.name||'产品')+' · 指标对比':metricById.get(indicator).name+' · 产品对比'):(m.rows.length===1?m.rows[0].name+' · '+m.rows[0].label:'最新单项 · 产品对比');}
  const plotScope=()=>mode==='countries'?'德国 · 奥地利 · 匈牙利（各自全国）':data.scope;
  function trend(){
   const m=model(),save=input('[data-supply-save]'),available=m.rows.some(s=>s.plotValues.some(valid));
   save.disabled=!available;
   input('[data-supply-scale]').value=scale;input('[data-supply-scale] option[value="value"]').disabled=m.mixed;
   input('[data-supply-base-label]').hidden=scale!=='index';
   input('[data-supply-base]').innerHTML=m.bases.map(y=>`<option value="${y}" ${y===baseYear?'selected':''}>${y} 年</option>`).join('');
   input('[data-supply-base]').disabled=!m.bases.length;
   const missing=m.rows.filter(s=>!s.values.some(valid)).map(s=>s.legend);
   input('[data-supply-status]').textContent=[m.mixed?'所选序列单位不同，使用基年 = 100 的指数比较；原值见读数与下表。':scale==='index'?'指数 = 当年原值 ÷ 基年原值 × 100；比较变化幅度，不能据此判断绝对数量。':'同一纵轴比较原始数值；可切换指数，观察变化幅度。',scale==='index'?'基年只列所有所选序列都有正值的共同年份。':'',missing.length?'暂无已确认数值：'+missing.join('、')+'。':'',scale==='index'&&!m.bases.length?'当前选择没有共同有效基年，请调整产品或指标。':''].filter(Boolean).join(' ');
   if(!m.rows.length){input('[data-supply-chart]').innerHTML='<p class="produce-empty">选择至少一个产品开始比较。</p>';input('[data-supply-trend-table]').innerHTML='';return;}
   const years=m.years,description=chartTitle(m)+'；'+plotScope()+'；'+(scale==='index'?'指数，'+baseYear+'年=100':m.rows[0].unit)+'；'+m.rows.map(s=>s.legend).join('、');
   const ids=[...new Set(m.rows.flatMap(s=>s.sourceIds))];
   input('[data-supply-chart]').innerHTML=`<h4>${h(chartTitle(m))}</h4><p class="supply-trend-scope">${h(plotScope())} · ${years[0]}–${years.at(-1)} · ${scale==='index'?(baseYear===null?'无共同有效基年':'指数（'+baseYear+' 年 = 100）'):h(m.rows[0].unit)}${view==='latest'?' · 每条序列的最新有效年份可能不同':''}</p>${available?`<div class="supply-chart-scroll"><svg data-supply-plot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${chartBox.width} ${chartBox.height}" role="img" aria-label="${h(description)}">${drawing(m,true)}</svg></div><p class="supply-mobile-hint">↔ 横向滑动图表，或用下方年份滑块查看读数</p><div class="supply-year-scrub"><label for="supply-cursor">逐年读数 <output id="supply-cursor-year" data-supply-cursor-year></output></label><input id="supply-cursor" type="range" min="0" max="${years.length-1}" step="1" data-supply-cursor aria-label="查看年份"><span>移动到图上，或拖动年份</span></div><div class="supply-readout" data-supply-readout aria-live="off"></div>`:'<p class="produce-empty">当前选择没有可绘制的数据；缺失值不画成零。可调整指标或选择产品。</p>'}<div class="supply-definitions">${[...new Map(m.rows.map(s=>[s.label,s])).values()].map(s=>`<p><b>${h(s.label)}</b> · ${h(s.definition)}</p>`).join('')}</div><div>${refs(ids)}</div>`;
   input('[data-supply-trend-table]').innerHTML=`<table><caption>${h(chartTitle(m))} · 原始数值${scale==='index'?'（图中指数另以基年换算）':''}</caption><thead><tr><th scope="col">年份</th>${m.rows.map(s=>`<th scope="col">${h(s.legend)}<small>${h(s.unit)}</small></th>`).join('')}</tr></thead><tbody>${years.map(y=>`<tr><th scope="row">${y}</th>${m.rows.map(s=>{const v=s.values[s.years.indexOf(y)];return `<td>${num(v,s.approx)}${valid(v)&&v<0?' †':''}</td>`;}).join('')}</tr>`).join('')}</tbody></table>`;
   if(available){
    readout(m,cursorYear??year);
    input('[data-supply-plot]').addEventListener('pointermove',event=>{const box=event.currentTarget.getBoundingClientRect(),svgX=(event.clientX-box.left)/box.width*chartBox.width;if(svgX<chartBox.left||svgX>chartBox.right)return;const at=Math.max(0,Math.min(years.length-1,Math.round((svgX-chartBox.left)/(chartBox.right-chartBox.left)*(years.length-1))));if(cursorYear!==years[at])readout(m,years[at]);});
    input('[data-supply-cursor]').addEventListener('input',event=>readout(m,years[Number(event.target.value)]));
   }
  }
  function update(){
   const rows=inCategory();if(!rows.some(p=>p.id===productId))productId=rows[0]?.id||'';
   if(mode==='products')selectedProducts=rows.slice(0,3).map(p=>p.id);
   root.querySelectorAll('[data-supply-category]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.supplyCategory===category));
   input('[data-supply-year-label]').hidden=view==='latest';
   input('[data-supply-category-note]').textContent=categories.find(c=>c.id===category).description;
   input('[data-supply-units]').textContent=view==='balance'?`${year} 年同年对照｜总量单位：千吨（1千吨=1000吨）｜人均：千克/人/年，为同表Food÷人口的近似估算。点产品名查看指标对比。`:'逐行显示最新有效年份和单位；生产与人均供给分别列出，不能将不同年份拼成供需平衡。';
   input('[data-supply-table]').innerHTML=matrix();controls();trend();
  }
  function focusProduct(id){productId=id;mode='metrics';input('[data-supply-table]').innerHTML=matrix();controls();trend();}
  function selectCategory(id,product){if(!categories.some(c=>c.id===id))return;category=id;view='balance';query='';input('[data-supply-search]').value='';input('[data-supply-view]').value=view;if(product){productId=product;mode='metrics';}update();}
  root.addEventListener('supply-focus',event=>selectCategory(event.detail.category,event.detail.product));
  root.addEventListener('input',event=>{
   if(event.target.matches('[data-supply-search]')){query=event.target.value;input('[data-supply-table]').innerHTML=matrix();}
   if(event.target.matches('[data-supply-compare-search]')){const q=event.target.value.trim().toLocaleLowerCase();root.querySelectorAll('[data-supply-pick-option]').forEach(n=>n.hidden=!n.dataset.search.includes(q));root.querySelectorAll('[data-supply-pick-group]').forEach(n=>n.hidden=![...n.querySelectorAll('[data-supply-pick-option]')].some(o=>!o.hidden));}
  });
  root.addEventListener('change',event=>{
   const target=event.target;
   if(target.matches('[data-supply-view]')){view=target.value;if(view==='latest'&&mode==='countries')mode='metrics';query='';input('[data-supply-search]').value='';update();}
   if(target.matches('[data-supply-year]')){year=Number(target.value);cursorYear=year;input('[data-supply-table]').innerHTML=matrix();trend();}
   if(target.matches('[data-supply-product]')){productId=target.value;input('[data-supply-table]').innerHTML=matrix();trend();}
   if(target.matches('[data-supply-indicator]')){indicator=target.value;trend();}
   if(target.matches('[data-supply-scale]')){scale=target.value;trend();}
   if(target.matches('[data-supply-base]')){baseYear=Number(target.value);trend();}
   if(target.matches('[data-supply-metric]')){selectedMetrics=data.metrics.filter(m=>input(`[data-supply-metric="${m.id}"]`).checked).map(m=>m.id);updateChoiceState();trend();}
   if(target.matches('[data-supply-compare-product]')){selectedProducts=target.checked?[...selectedProducts,target.dataset.supplyCompareProduct]:selectedProducts.filter(id=>id!==target.dataset.supplyCompareProduct);updateChoiceState();input('[data-supply-table]').innerHTML=matrix();trend();}
  });
  root.addEventListener('click',event=>{
   const button=event.target.closest('button');if(!button)return;
   if(button.dataset.supplyCategory)selectCategory(button.dataset.supplyCategory);
   if(button.dataset.supplySelect){focusProduct(button.dataset.supplySelect);input('.supply-trend').scrollIntoView({behavior:'smooth',block:'start'});}
   if(button.dataset.supplyMode){mode=button.dataset.supplyMode;if(mode==='products'&&!selectedProducts.length)selectedProducts=[productId,...inCategory().filter(p=>p.id!==productId).slice(0,2).map(p=>p.id)].filter(Boolean);input('[data-supply-table]').innerHTML=matrix();controls();trend();}
   if(button.dataset.supplyPreset){selectedMetrics=button.dataset.supplyPreset==='trade'?['production','imports','exports']:['domestic','food'];controls();trend();}
   if(button.hasAttribute('data-supply-save')){
    const m=model();if(!m.rows.some(s=>s.plotValues.some(valid)))return;
    const ids=[...new Set(m.rows.flatMap(s=>s.sourceIds))],selectedSources=[...new Map(m.rows.flatMap(row=>(row.country?countryData[row.country].supply.sources:sources).filter(source=>row.sourceIds.includes(source.id))).map(source=>[source.id+'|'+source.scope,source])).values()];
    const legendHeight=m.rows.length*26,height=500+legendHeight;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="${height}" viewBox="0 0 1000 ${height}"><title>${h(chartTitle(m))}</title><metadata>${h(JSON.stringify({title:chartTitle(m),scope:plotScope(),scale:m.scale,baseYear:m.scale==='index'?m.baseYear:null,years:m.years,series:m.rows,sources:selectedSources}))}</metadata><rect width="1000" height="${height}" fill="#fffefa"/><g font-family="Arial, sans-serif" fill="#254b3b"><text x="28" y="37" font-size="21">${h(chartTitle(m))}</text><text x="28" y="69" font-size="14">${h(plotScope())} · ${m.years[0]}–${m.years.at(-1)} · ${scale==='index'?'指数：'+baseYear+' 年 = 100':h(m.rows[0].unit)}</text><g transform="translate(20 85)">${drawing(m)}</g>${m.rows.map((s,i)=>`<rect x="30" y="${405+i*26}" width="15" height="4" fill="${s.color}"/><text x="55" y="${411+i*26}" font-size="13">${h(s.legend)} · 原值单位 ${h(s.unit)}</text>`).join('')}<text x="28" y="${430+legendHeight}" font-size="12">来源：${h(ids.join(', '))}；所选来源版本 ${h(selectedSources.map(s=>(s.version||'').slice(0,12)).join(', '))}</text><text x="28" y="${453+legendHeight}" font-size="12">Food与人均量为供给端参考；缺值断线，不画作零。逐年原值、指数与完整来源见metadata。</text><text x="28" y="${476+legendHeight}" font-size="12">资料整理 ${h(data.checkedAt)}${scale==='index'?' · 指数只比较变化幅度，不代表绝对数量。':''}</text></g></svg>`;
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=`${mode==='countries'?'de-at-hu':data.id}-${mode}-comparison.svg`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }
  });
  update();

 }
 return {render,bind};
})();

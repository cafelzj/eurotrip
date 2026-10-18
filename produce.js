/* The produce atlas has its own data and no additional card/detail routes. */
window.ProducePage = (() => {
  const origins = {local:'布达佩斯及近郊',domestic:'匈牙利产区',import:'主要依靠进口',mixed:'国产与进口并存'};
  const colors = ['#52735b','#ca8c53','#b77668','#829b6a','#628e91','#a49960','#8d7899','#ae835d'];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const words = value => Array.isArray(value) ? value.map(words).join('；') : typeof value === 'object' && value ? value.description || value.text || value.name || [value.topic,value.reason].filter(Boolean).join('：') : String(value ?? '');
  const number = value => typeof value === 'number' && Number.isFinite(value) ? new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(value) : '本专题未取得数据';
  const safeUrl = value => /^https?:\/\//.test(value || '') ? esc(value) : '';
  const normalize = value => words(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const list = value => Array.isArray(value) ? value : value ? [value] : [];
  let state;
  function datasets() {
    return {food:typeof produceFood !== 'undefined' ? produceFood : {items:[],categories:[],methods:[]},energy:typeof produceEnergy !== 'undefined' ? produceEnergy : {},stats:typeof produceStats !== 'undefined' ? produceStats : {}};
  }
  function sourceList(data) {
    const registry = new Map();
    for (const group of [data.stats.sources,data.food.sources,data.energy.sources]) for (const source of list(group)) {
      if (source && source.id) registry.set(source.id,source);
    }
    return [...registry.values()];
  }
  function refs(ids) {
    return list(ids).map(id => `<button class="produce-ref" data-produce-source="${esc(id)}" aria-label="查看来源 ${esc(id)}">[${esc(id)}]</button>`).join(' ');
  }
  function charts(data) {
    const all = [...list(data.stats.charts),...list(data.energy.charts)];
    const electricity = data.energy.electricity;
    if (electricity?.mix?.length && !all.some(c => c.id === 'electricity-mix')) all.push({id:'electricity-mix',section:'energy',title:'电从哪里来？',description:'发电结构反映匈牙利境内的发电，不含进口电力。各分项互斥，不重复计算生物能源。',scope:'匈牙利全国',unit:electricity.unit || 'TWh',years:[electricity.year],series:electricity.mix.map(row => ({name:row.label || row.name,values:[row.value],color:row.color})),sourceIds:electricity.sourceIds});
    return all.filter(c => c && list(c.series).length && list(c.years).length);
  }
  function chartPanel(chart,index) {
    return `<article class="produce-chart" data-produce-chart="${index}"><div class="produce-chart-head"><div><span class="produce-kicker">${esc(chart.scope || '匈牙利全国')} · ${esc(chart.unit)}</span><h3>${esc(chart.title)}</h3></div><span class="produce-chart-icon" aria-hidden="true">▥</span></div><p>${esc(chart.description || '')}</p><div class="produce-chart-controls"><label>展示方式<select data-chart-mode><option value="year">同年比较</option>${chart.years.length > 1 ? '<option value="trend">历年变化</option>' : ''}</select></label><label data-chart-year-label>统计年份<select data-chart-year>${chart.years.map((year,i) => `<option value="${i}" ${i === chart.years.length - 1 ? 'selected' : ''}>${esc(year)} 年</option>`).join('')}</select></label><label data-chart-series-label hidden>指标<select data-chart-series>${chart.series.map((series,i) => `<option value="${i}">${esc(series.name)}</option>`).join('')}</select></label></div><div class="produce-chart-visual"></div><div class="produce-chart-source">${refs(chart.sourceIds)}<span>${esc(chart.note || '')}</span><button data-produce-save-chart>↓ 保存 SVG 图表</button></div><details class="produce-raw"><summary>查看原始数值与统计口径</summary><p>${esc(chart.scope || '匈牙利全国')}；单位：${esc(chart.unit)}。空值表示本专题未取得或尚未核实，不代表零。</p><div class="produce-table-wrap"><table><caption>${esc(chart.title)} · 原始数据</caption><thead><tr><th scope="col">指标</th>${chart.years.map(y => `<th scope="col">${esc(y)}</th>`).join('')}</tr></thead><tbody>${chart.series.map(series => `<tr><th scope="row">${esc(series.name)}</th>${chart.years.map((_,i) => `<td>${number(series.values?.[i])}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details></article>`;
  }
  function factBlocks(items) {
    return list(items).map(item => `<article class="produce-context-card"><span aria-hidden="true">${esc(item.icon || '◈')}</span><h3>${esc(item.title || item.name)}</h3>${item.scope ? `<small>${esc(item.scope)}</small>` : ''}<p>${esc(item.text || item.description || item.note)}</p>${item.verified === false ? '<small>背景导读 · 官方入口未逐项核查</small>' : ''}${refs(item.sourceIds)}</article>`).join('');
  }
  function sourceCard(source) {
    const verified = source.verified === true;
    const versions = source.version || source.commit;
    const variables = list(source.variables);
    return `<details id="produce-source-${esc(source.id)}" data-source-id="${esc(source.id)}"><summary><span class="produce-source-code">${esc(source.id)}</span><span><b>${esc(source.title || source.name)}</b><small>${esc(source.publisher || source.upstream || '')}${source.year ? ` · ${esc(source.year)}` : ''}${source.scope ? ` · ${esc(source.scope)}` : ''}</small><small class="produce-source-status ${verified ? 'is-verified' : ''}">${verified ? '✓ 已读取数值 / 定义' : '参考入口 · 未逐项核查'}</small></span><span aria-hidden="true">↗</span></summary><div><p>${esc(source.note || '请以原始资料中的统计定义和修订说明为准。')}</p>${source.accessed ? `<p>资料核查：${esc(source.accessed)}</p>` : ''}${versions ? `<p>固定版本：<code>${esc(versions)}</code></p>` : ''}${source.sha256 ? `<p>数据 SHA-256：<code>${esc(source.sha256)}</code></p>` : ''}${safeUrl(source.url) ? `<a href="${safeUrl(source.url)}" target="_blank" rel="noopener noreferrer">打开来源${variables.length ? '目录' : ''} ↗</a>` : ''}${variables.length ? `<ul class="produce-source-variables">${variables.map(variable => `<li><b>${esc(variable.label)} · ${esc(variable.unit)}</b><span>指标 ${esc(variable.id)} · ${esc(variable.datasetVersion || '')}</span><a href="${safeUrl(variable.url)}" target="_blank" rel="noopener noreferrer">原始数值 ↗</a> · <a href="${safeUrl(variable.metadataUrl)}" target="_blank" rel="noopener noreferrer">单位与定义 ↗</a></li>`).join('')}</ul>` : ''}</div></details>`;
  }
  function itemStatistics(item) {
    const metrics = list(state.data.stats.itemMetrics).filter(metric => metric.itemId === item.id);
    if (!metrics.length) return '';
    return `<div class="produce-item-statistics">${metrics.map(metric => `<p><b>${esc(metric.label)}：${number(metric.value)} ${esc(metric.unit)}</b><span>${esc(metric.year)} 年 · ${esc(metric.scope)}</span>${refs(metric.sourceIds)}</p>`).join('')}</div>`;
  }
  function render() {
    const data = datasets(),items = list(data.food.items),sources = sourceList(data),allCharts = charts(data);
    state = {data,items,sources,charts:allCharts,filters:{query:'',category:'',origin:'',month:'',method:''},limit:12,seasonLimit:10};
    const isEnergy = c => c.section === 'energy' || list(data.energy.charts).includes(c);
    const foodCharts = allCharts.map((c,i) => ({c,i})).filter(({c}) => !isEnergy(c));
    const energyCharts = allCharts.map((c,i) => ({c,i})).filter(({c}) => isEnergy(c));
    return `<div class="produce-page"><section class="produce-hero"><div class="produce-hero-copy"><div class="produce-kicker">物产图谱 · BUDAPEST FIELD NOTES</div><h1>布达佩斯，<br>从田野到餐桌，<span>从河流到能源。</span></h1><p>${esc(data.stats.intro || data.food.intro || '一座城市的日常，由周边田野、全国供应链和跨境贸易共同塑造。从市场上的一颗苹果，认识它背后的产区、季节与用途。')}</p><div class="produce-hero-links"><a href="#guide/hu/budapest">浏览城市卡片 ↗</a><a href="#map/budapest">打开城市地图 ↗</a></div></div><div class="produce-hero-art" aria-hidden="true"><div class="produce-orbit"></div><span class="produce-art-label">A CITY, FED BY MANY PLACES</span><div class="produce-art-main">🌶️</div><span class="produce-art-seed seed-one">🌾</span><span class="produce-art-seed seed-two">🍎</span><span class="produce-art-seed seed-three">🐟</span><span class="produce-art-seed seed-four">⚡</span><span class="produce-art-city">BUDAPEST<br><small>47.50° N · 19.04° E</small></span></div></section><div class="produce-scope"><b>先分清统计范围</b><span>🏙️ 城市：购买与生活场景</span><span>🌾 产区：种植、养殖与加工</span><span>🇭🇺 全国：产量、贸易与能源数据</span><p>${esc(data.stats.scopeNote || '全国数据不等于布达佩斯市的数据；产区介绍也不表示食材在市内生产。每幅图均标注年份、单位和来源。')}</p></div><nav class="produce-nav" aria-label="物产专题目录">${[['foods','🍎','食材图鉴'],['supply','📊','供给与消费'],['cooking','🍲','烹饪与用途'],['energy','⚡','水与能源'],['sources','↗','数据来源']].map(([id,icon,name]) => `<button data-produce-jump="${id}">${icon} ${name}</button>`).join('')}</nav>${list(data.stats.highlights).length ? `<section class="produce-highlights" aria-label="物产数据速览">${data.stats.highlights.map(item => `<article><span>${esc(item.label)}</span><strong>${number(item.value)}<small>${esc(item.unit)}</small></strong><p>${esc(item.year)} 年 · ${esc(item.scope || '匈牙利全国')}</p><small>${esc(item.note || '')}</small>${refs(item.sourceIds)}</article>`).join('')}</section>` : ''}<section id="produce-foods" class="produce-section"><div class="produce-section-head"><div><span class="produce-kicker">01 / WHAT YOU WILL FIND</span><h2>市场里，读懂当地物产</h2><p>认名称、看产地、选季节，再看看一份食材怎样变成餐桌上的味道。</p></div><span class="produce-section-count">${items.length} 种食材</span></div><p class="produce-origin-note">${esc(data.food.notes?.[0] || '')}</p><div class="produce-filters"><label class="produce-search"><span aria-hidden="true">⌕</span><input type="search" data-produce-filter="query" placeholder="搜索中文、匈牙利语、英语或产区…" aria-label="搜索物产"></label><div class="produce-selects"><label>食材品类<select data-produce-filter="category"><option value="">全部品类</option>${list(data.food.categories).map(category => `<option value="${esc(category.id)}">${esc(category.icon || '')} ${esc(category.name)}</option>`).join('')}</select></label><label>供应来源<select data-produce-filter="origin"><option value="">全部来源</option>${Object.entries(origins).filter(([id]) => items.some(item => item.origin === id)).map(([id,name]) => `<option value="${id}">${name}</option>`).join('')}</select></label><label>收获月份<select data-produce-filter="month"><option value="">不限月份</option>${Array.from({length:12},(_,i) => `<option value="${i + 1}">${i + 1} 月</option>`).join('')}</select></label><label>烹饪方式<select data-produce-filter="method"><option value="">全部方式</option>${list(data.food.methods).map(method => `<option value="${esc(method.id)}">${esc(method.name)}</option>`).join('')}</select></label></div></div><div class="produce-results"><span data-produce-results role="status" aria-live="polite"></span><button data-produce-reset>清除筛选</button></div><div class="produce-food-grid" data-produce-items></div><button class="produce-more" data-produce-more hidden>继续看更多食材 ↓</button><details class="produce-season-panel"><summary><span>🗓️ 跟着收获季节逛市场</span><small>查看食材月份矩阵</small></summary><p>${esc(data.food.seasonNote)} 当前筛选同时作用于此表。</p><div data-produce-seasons></div><button class="produce-more" data-produce-season-more hidden>展开全部有季节资料的食材 ↓</button></details></section><section id="produce-supply" class="produce-section"><div class="produce-section-head"><div><span class="produce-kicker">02 / SUPPLY IS NOT THE SAME AS CONSUMPTION</span><h2>产了多少，进口多少，吃了多少？</h2><p>${esc(data.stats.supplyIntro || '把生产、贸易和食物供给分开看。不同指标的单位、年份与统计范围可能不同，不能直接相加。')}</p></div></div><div class="produce-chart-grid">${foodCharts.map(({c,i}) => chartPanel(c,i)).join('')}</div>${factBlocks(data.stats.context) ? `<div class="produce-context-grid">${factBlocks(data.stats.context)}</div>` : ''}${list(data.stats.notes).length ? `<div class="produce-reading-notes"><b>读数小提示</b>${data.stats.notes.map(note => `<p>${esc(words(note))}${typeof note === 'object' ? refs(note.sourceIds) : ''}</p>`).join('')}</div>` : ''}${!foodCharts.length ? '<p class="produce-empty">本专题未取得可靠的城市食材统计。可先从下方来源查阅全国统计口径。</p>' : ''}</section><section id="produce-cooking" class="produce-section"><div class="produce-section-head"><div><span class="produce-kicker">03 / INGREDIENTS BECOME EVERYDAY LIFE</span><h2>同样的食材，怎样吃出匈牙利味道</h2><p>不只有红椒炖肉：汤、烘焙、腌渍、淡水鱼与甜点，连接起食材的不同用途。</p></div></div><div class="produce-methods">${list(data.food.methods).map(method => `<article><span aria-hidden="true">${esc(method.icon || '🍳')}</span><h3>${esc(method.name)}</h3><p>${esc(method.description)}</p>${list(method.examples).length ? `<small>${esc(words(method.examples))}</small>` : ''}<button data-produce-method="${esc(method.id)}">查看适合的食材 ↗</button>${refs(method.sourceIds)}</article>`).join('')}</div></section><section id="produce-energy" class="produce-section"><div class="produce-section-head"><div><span class="produce-kicker">04 / THE FLOWS THAT KEEP A CITY RUNNING</span><h2>水、电与天然气，也是城市物产的一面</h2><p>${esc(data.energy.intro || '城市用水和全国能源结构采用不同的统计范围。发电量、用电需求和跨境净进口分别列出。')}</p></div></div><div class="produce-context-grid">${factBlocks(data.energy.water)}</div><div class="produce-chart-grid">${energyCharts.map(({c,i}) => chartPanel(c,i)).join('')}</div><div class="produce-context-grid">${factBlocks([...new Map([...list(data.energy.context),...list(data.energy.facts)].map(item => [item.title || item.name,item])).values()])}</div>${list(data.energy.gaps).length ? `<div class="produce-reading-notes"><b>哪些数据还不能回答？</b>${data.energy.gaps.map(gap => `<p>${esc(words(gap))}${refs(gap.sourceIds)}</p>`).join('')}</div>` : ''}</section><section id="produce-sources" class="produce-section produce-sources"><div class="produce-section-head"><div><span class="produce-kicker">05 / KEEP THE SOURCES CLOSE</span><h2>每个数字，都可以回到出处</h2><p>这是带年份的资料图谱。历史数据用来了解结构，不代表今天的市场库存或实时价格。</p></div><div class="produce-downloads"><button data-produce-download="json">↓ 完整资料 JSON</button><button data-produce-download="csv">↓ 统计数据 CSV</button></div></div><div class="produce-source-list">${sources.map(sourceCard).join('')}</div>${data.stats.updatedAt ? `<p class="produce-updated">资料整理日期：${esc(data.stats.updatedAt)}。各条数据的年份见对应图表和来源。</p>` : ''}</section></div>`;
  }
  function matches(item) {
    const f = state.filters,months = list(item.season?.months || item.season),methods = list(item.cooking).map(m => typeof m === 'string' ? m : m.id || m.method);
    const haystack = normalize([item.name,item.hu,item.en,item.summary,item.regions,item.uses,item.notes,item.trade]);
    return (!f.query || haystack.includes(normalize(f.query).trim())) && (!f.category || item.category === f.category) && (!f.origin || item.origin === f.origin) && (!f.month || months.includes(Number(f.month))) && (!f.method || methods.includes(f.method));
  }
  function foodCard(item) {
    const categories = list(state.data.food.categories),category = categories.find(c => c.id === item.category),color = colors[Math.max(0,categories.indexOf(category)) % colors.length];
    const methods = list(item.cooking).map(id => typeof id === 'string' ? list(state.data.food.methods).find(m => m.id === id)?.name || id : id.name || id.method);
    const cardIds = list(item.cardIds).filter(id => window.CardStore?.nodes.has(id));
    return `<details class="produce-food-card" data-produce-food="${esc(item.id)}" style="--produce-accent:${color}"><summary><div class="produce-food-top"><span class="produce-food-icon" aria-hidden="true">${esc(item.icon || category?.icon || '🌱')}</span><span class="produce-origin">${esc(item.originLabel || origins[item.origin] || '供应来源待核实')}</span></div><small class="produce-food-category">${esc(category?.name || item.category)}</small><h3>${esc(item.name)}</h3><div class="produce-food-translations"><span lang="hu">${esc(item.hu || '')}</span><span lang="en">${esc(item.en || '')}</span></div><p>${esc(item.summary || item.description)}</p><div class="produce-food-bottom"><span>${esc(words(item.regions) || '产区资料见详情')}</span><b>用途与来源 <span aria-hidden="true">＋</span></b></div></summary><div class="produce-food-detail"><dl><dt>产区与供应</dt><dd>${esc(item.originNote || item.production || words(item.regions) || '暂无细分产区数据。')}</dd><dt>主要用途</dt><dd>${esc(words(item.uses) || '资料待补充。')}</dd><dt>烹饪方式</dt><dd>${esc(methods.join(' · ') || '资料待补充。')}</dd><dt>贸易与消费</dt><dd>${esc(words(item.trade) || '本专题未取得该食材在布达佩斯市的独立进口量或消费量，不用全国数据替代。')}</dd>${item.notes ? `<dt>补充说明</dt><dd>${esc(words(item.notes))}</dd>` : ''}</dl>${itemStatistics(item)}<div class="produce-food-links">${cardIds.map(id => `<a href="#card/${encodeURIComponent(id)}">${esc(window.CardStore.nodes.get(id).name)} ↗</a>`).join('')}${safeUrl(item.imageUrl) ? `<a href="${safeUrl(item.imageUrl)}" target="_blank" rel="noopener noreferrer">图片搜索 ↗</a>` : ''}</div><div class="produce-food-source">${refs(item.sourceIds)}</div></div></details>`;
  }
  function updateFoods(root) {
    const filtered = state.items.filter(matches);
    root.querySelector('[data-produce-results]').textContent = `找到 ${filtered.length} 种食材${filtered.length > state.limit ? ` · 先展示 ${state.limit} 种` : ''}`;
    root.querySelector('[data-produce-items]').innerHTML = filtered.slice(0,state.limit).map(foodCard).join('') || '<div class="produce-empty">没有符合当前筛选的食材。可以减少筛选条件，或换一种语言搜索。</div>';
    root.querySelector('[data-produce-more]').hidden = filtered.length <= state.limit;
    const seasonal = filtered.filter(item => list(item.season?.months || item.season).length);
    root.querySelector('[data-produce-seasons]').innerHTML = seasonal.length ? `<div class="produce-table-wrap"><table class="produce-season-table"><caption>通常收获季 · 产区季节参考</caption><thead><tr><th scope="col">食材</th>${Array.from({length:12},(_,i) => `<th scope="col">${i + 1}月</th>`).join('')}</tr></thead><tbody>${seasonal.slice(0,state.seasonLimit).map(item => {const months = list(item.season?.months || item.season);return `<tr><th scope="row">${esc(item.icon || '')} ${esc(item.name)}</th>${Array.from({length:12},(_,i) => `<td${months.includes(i + 1) ? ' class="in-season"' : ''}><span class="produce-sr-only">${months.includes(i + 1) ? '通常收获季' : '未标记收获季'}</span>${months.includes(i + 1) ? '<span aria-hidden="true">●</span>' : '<span aria-hidden="true">·</span>'}</td>`).join('')}</tr>`;}).join('')}</tbody></table></div>` : '<p class="produce-empty">当前筛选没有可用的收获月份资料。</p>';
    root.querySelector('[data-produce-season-more]').hidden = seasonal.length <= state.seasonLimit;
  }
  function chartView(panel) {
    const chart = state.charts[Number(panel.dataset.produceChart)],mode = panel.querySelector('[data-chart-mode]').value,yearIndex = Number(panel.querySelector('[data-chart-year]').value),seriesIndex = Number(panel.querySelector('[data-chart-series]').value);
    const rows = mode === 'year' ? chart.series.map((series,i) => ({name:series.name,value:series.values?.[yearIndex],color:series.color || colors[i % colors.length]})) : chart.years.map((year,i) => ({name:`${year} 年`,value:chart.series[seriesIndex].values?.[i],color:chart.series[seriesIndex].color || colors[seriesIndex % colors.length]}));
    const period = mode === 'year' ? chart.years[yearIndex] + ' 年' : chart.series[seriesIndex].name + ' · ' + chart.years[0] + '–' + chart.years.at(-1);
    const finite = rows.filter(row => typeof row.value === 'number' && Number.isFinite(row.value));
    const max = Math.max(0,...finite.map(row => row.value)) || 1,min = Math.min(0,...finite.map(row => row.value)),range = max - min;
    return {chart,mode,rows,period,finite,min,max,position:value => (value - min) / range * 100};
  }
  function drawChart(panel) {
    const view = chartView(panel),{chart,mode,rows,period,finite,min,max,position} = view;
    panel.querySelector('[data-chart-year-label]').hidden = mode !== 'year';
    panel.querySelector('[data-chart-series-label]').hidden = mode !== 'trend';
    panel.querySelector('[data-produce-save-chart]').disabled = !finite.length;
    if (!finite.length) {panel.querySelector('.produce-chart-visual').innerHTML = '<p class="produce-empty">该年份 / 指标暂无已核实数值。</p>';return;}
    const description = `${chart.title}；${chart.scope}；${period}；单位 ${chart.unit}。${rows.map(row => `${row.name}：${number(row.value)}`).join('；')}。`;
    panel.querySelector('.produce-chart-visual').innerHTML = `<p class="produce-chart-period">${esc(period)} · ${esc(chart.scope)} · ${esc(chart.unit)}</p><div class="produce-bars" role="img" aria-label="${esc(description)}">${rows.map(row => {
      const good = typeof row.value === 'number' && Number.isFinite(row.value);
      return `<div class="produce-bar-row"><div class="produce-bar-label"><span>${esc(row.name)}</span><b>${good ? number(row.value) : '未取得'}</b></div><div class="produce-bar-track"><i class="produce-bar-zero" style="left:${position(0)}%"></i>${good ? `<span style="left:${Math.min(position(0),position(row.value))}%;width:${Math.abs(position(row.value) - position(0))}%;background:${esc(row.color)}"></span>` : ''}</div></div>`;
    }).join('')}<div class="produce-bar-scale"><span>${number(min)}</span><span>${number(max)} ${esc(chart.unit)}</span></div></div>`;
  }
  function saveBlob(content,filename,type) {
    const url = URL.createObjectURL(new Blob([content],{type})),a = document.createElement('a');
    a.href = url;a.download = filename;document.body.append(a);a.click();a.remove();setTimeout(() => URL.revokeObjectURL(url),1000);
  }
  function saveChart(panel) {
    const {chart,rows,period,finite,min,max,position} = chartView(panel);
    if (!finite.length) return;
    const wrap = (value,limit=118) => {
      const lines=[];let line='',size=0;
      for (const char of String(value)) {const width=char.charCodeAt(0)>255?2:1;if(size+width>limit){lines.push(line);line='';size=0;}line+=char;size+=width;}
      if(line)lines.push(line);return lines;
    };
    const sources=state.sources.filter(source => list(chart.sourceIds).includes(source.id));
    const notes=[...wrap(chart.description || ''),...sources.flatMap(source => wrap(`来源：${source.title} · ${source.id}${source.version ? ' · '+source.version.slice(0,12) : ''}`)),...sources.flatMap(source => wrap(source.url)),...wrap('资料整理：'+state.data.stats.updatedAt+'。全国统计不能当作布达佩斯市数据；缺失值不代表零。')];
    const bottom=110+rows.length*64,height=bottom+65+notes.length*22;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="${height}" viewBox="0 0 960 ${height}" role="img"><title>${esc(chart.title)} · ${esc(period)}</title><desc>${esc(chart.scope)} · ${esc(chart.unit)}；数值与来源包含于图下和元数据。</desc><metadata>${esc(JSON.stringify({chart,period,rows,sources}))}</metadata><rect width="960" height="${height}" fill="#fffefa"/><g font-family="Arial, 'Noto Sans CJK SC', sans-serif" fill="#254b3b"><text x="30" y="40" font-size="24" font-weight="600">${esc(chart.title)}</text><text x="30" y="74" font-size="16">${esc(period)} · ${esc(chart.scope)} · ${esc(chart.unit)}</text>${rows.map((row,i) => {const y=110+i*64,good=typeof row.value==='number'&&Number.isFinite(row.value);return `<text x="30" y="${y}" font-size="17">${esc(row.name)}</text><text x="925" y="${y}" text-anchor="end" font-size="17">${good?number(row.value):'未取得'}</text><rect x="30" y="${y+12}" width="895" height="16" fill="#edf0e5"/>${good?`<rect x="${30+Math.min(position(0),position(row.value))*8.95}" y="${y+12}" width="${Math.abs(position(row.value)-position(0))*8.95}" height="16" fill="${esc(row.color)}"/>`:''}`;}).join('')}<text x="30" y="${bottom+5}" font-size="13">${number(min)}</text><text x="925" y="${bottom+5}" text-anchor="end" font-size="13">${number(max)} ${esc(chart.unit)}</text>${notes.map((line,i)=>`<text x="30" y="${bottom+46+i*22}" font-size="13" fill="#586e53">${esc(line)}</text>`).join('')}</g></svg>`;
    saveBlob(svg,`budapest-${chart.id}-${period.replace(/[^0-9a-z\u4e00-\u9fff-]/gi,'-')}.svg`,'image/svg+xml;charset=utf-8');
  }
  function download(kind) {
    let content,filename,type;
    if (kind === 'json') {content = JSON.stringify({preparedAt:state.data.stats.updatedAt,scopeNote:state.data.stats.scopeNote,...state.data},null,2);filename = 'budapest-produce-and-energy.json';type = 'application/json;charset=utf-8';}
    else {
      const rows = [['图表','统计范围','指标','年份','数值','单位','来源ID']];
      for (const chart of state.charts) for (const series of chart.series) for (let i = 0;i < chart.years.length;i++) rows.push([chart.title,chart.scope || '匈牙利全国',series.name,chart.years[i],series.values?.[i] ?? '',chart.unit,list(chart.sourceIds).join('；')]);
      for (const source of state.sources) rows.push(['来源',source.scope || '',source.id,source.year || '',source.url || '',source.publisher || '',source.title || source.name]);
      for (const metric of list(state.data.stats.itemMetrics)) rows.push(['食材：'+metric.itemId,metric.scope,metric.label,metric.year,metric.value,metric.unit,list(metric.sourceIds).join('；')]);
      for (const source of state.sources) for (const variable of list(source.variables)) rows.push(['指标来源',source.scope,variable.label,'',variable.url,variable.unit,variable.metadataUrl]);
      content = '\ufeff' + rows.map(row => row.map(value => {const text=String(value);return '"'+(typeof value==='string'&&/^\s*[=+\-@]/.test(text)?"'":'')+text.replace(/"/g,'""')+'"';}).join(',')).join('\r\n');filename = 'budapest-statistics-with-sources.csv';type = 'text/csv;charset=utf-8';
    }
    saveBlob(content,filename,type);
  }
  function bind(root) {
    if (!state) return;
    root = root.querySelector('.produce-page') || root;
    updateFoods(root);
    root.querySelectorAll('[data-produce-chart]').forEach(drawChart);
    root.addEventListener('input',event => {
      const filter = event.target.closest('[data-produce-filter]');
      if (!filter) return;
      state.filters[filter.dataset.produceFilter] = filter.value;state.limit = 12;state.seasonLimit = 10;updateFoods(root);
    });
    root.addEventListener('change',event => {
      const panel = event.target.closest('[data-produce-chart]');if (panel) drawChart(panel);
    });
    root.addEventListener('click',event => {
      const target = event.target.closest('button');if (!target) return;
      if (target.hasAttribute('data-produce-reset')) {
        Object.keys(state.filters).forEach(key => state.filters[key] = '');root.querySelectorAll('[data-produce-filter]').forEach(input => input.value = '');state.limit = 12;state.seasonLimit = 10;updateFoods(root);
      }
      if (target.hasAttribute('data-produce-more')) {state.limit += 24;updateFoods(root);}
      if (target.hasAttribute('data-produce-season-more')) {state.seasonLimit = state.items.length;updateFoods(root);}
      if (target.dataset.produceMethod) {Object.keys(state.filters).forEach(key => state.filters[key] = key === 'method' ? target.dataset.produceMethod : '');root.querySelectorAll('[data-produce-filter]').forEach(input => input.value = state.filters[input.dataset.produceFilter]);state.limit = 12;state.seasonLimit = 10;updateFoods(root);root.querySelector('#produce-foods').scrollIntoView({behavior:'smooth',block:'start'});}
      if (target.dataset.produceJump) root.querySelector('#produce-' + target.dataset.produceJump)?.scrollIntoView({behavior:'smooth',block:'start'});
      if (target.dataset.produceSource) {const detail = [...root.querySelectorAll('[data-source-id]')].find(node => node.dataset.sourceId === target.dataset.produceSource);if (detail) {detail.open = true;detail.scrollIntoView({behavior:'smooth',block:'center'});detail.querySelector('summary').focus({preventScroll:true});}}
      if (target.dataset.produceDownload) download(target.dataset.produceDownload);
      if (target.hasAttribute('data-produce-save-chart')) saveChart(target.closest('[data-produce-chart]'));
    });
  }
  return {render,bind};
})();

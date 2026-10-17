/* Article requests use public card data, not browsing history or private keys. */
window.CardAI=(()=>{
 const typeInstructions={
  place:'介绍位置与城市背景、历史或建筑特色、值得观察的细节和适合怎样参观；区别建筑群、馆舍与具体入口。',
  food:'介绍常见原料、做法、口味与口感、当地名称，以及和相近食物的区别；配方和过敏原因店而异。',
  specialty:'介绍产地与文化联系、风味或工艺、如何比较选择、包装和保存；携带规定须以目的地最新官方信息为准。',
  brand:'区分品牌起源、当前所有权、生产地、总部与经营市场，介绍常见产品及旅行者如何认识这个品牌；不要编造门店或库存。',
  person:'介绍人物的重要经历、作品或贡献及其与当地的确切联系，区分出生地、居住地、工作地与纪念地点。',
  fact:'说明这条知识的历史、地理或文化背景，并给出旅行时可以观察到的线索；区分可靠事实、传说和有争议的说法。',
  tip:'解释规则或习惯的背景、实际操作步骤与常见误区；收费、票区、营业及现行规则需要核对最新官方信息。'
 };
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const short=(value,max)=>String(value||'').slice(0,max);
 function prompt(node){
  const H=KnowledgeHub,{country,city}=H.destinationFor(node),type=CardGraph.types[node.type]?.[0]||'旅行知识';
  const sourceList=(node.sources||[]).filter(([url])=>/^https?:\/\//i.test(url)).slice(0,4).map(([url,label])=>`${label}：${url}`).join('\n');
  const related=(node.live?[]:(CardGraph.edges.get(node.id)||[])).filter(e=>!CardGraph.nodes.get(e.to)?.live).slice(0,4).map(e=>{const other=CardGraph.nodes.get(e.to);return other?`${other.name}（${e.label}）`:'';}).filter(Boolean).join('；');
  return [
   '请用中文为旅行者写一篇约 800 字的介绍，内容具体、易读，有一个标题和几个简短段落。',
   typeInstructions[node.type]||typeInstructions.fact,
   '以下是站内卡片资料与参考入口，不代表已实时核验。若能访问来源，请核对后再写；无法访问时不要声称已查证。资料不足或有争议请说明，不要编造典故、引语、价格、营业时间或交通班次。相关卡片只代表知识联系，不能自动推断地点或供应关系。',
   `主题：${node.name}${node.local?' / '+node.local:''}`,
   `类型：${type}；分类：${H.subtype(node)}`,
   `阅读场景：${country.name}${city?' · '+(H.isChina(country)?ChinaRegions.label(city):city.name):''}`,
   `现有简介：${short(node.description,450)}`,
   node.note?`补充资料：${short(node.note,1000)}`:'',
   related?`延伸线索：${related}`:'',
   sourceList?'参考入口：\n'+sourceList:'尚无独立来源，请明确这一限制。',
   '结尾给出可继续了解的官方入口，并区分已确认事实与需要再次核对的信息。'
  ].filter(Boolean).join('\n\n');
 }
 function chatUrl(node){return 'https://chatgpt.com/?q='+encodeURIComponent(prompt(node));}
 function actions(node){return `<a class="entity-secondary entity-ai-link" href="${h(chatUrl(node))}" target="_blank" rel="noopener noreferrer" data-ai-intro="${h(node.id)}">✦ ChatGPT 生成介绍 ↗</a><button type="button" class="entity-ai-copy" data-ai-copy="${h(node.id)}">复制提示词</button><span class="entity-ai-status" role="status" aria-live="polite"></span>`;}
 document.addEventListener('click',async event=>{
  const button=event.target.closest('[data-ai-copy]');if(!button)return;
  const node=CardGraph.nodes.get(button.dataset.aiCopy),article=button.closest('.entity-detail');if(!node||!article)return;
  const text=prompt(node),status=article.querySelector('.entity-ai-status');button.disabled=true;
  try{
   if(!navigator.clipboard?.writeText)throw Error('clipboard unavailable');
   await navigator.clipboard.writeText(text);
   if(article.isConnected){status.textContent='已复制，可粘贴到其他大模型。';article.querySelector('.entity-ai-copy-fallback')?.remove();}
  }catch{
   if(article.isConnected){
    let panel=article.querySelector('.entity-ai-copy-fallback');
    if(!panel){panel=document.createElement('div');panel.className='entity-ai-copy-fallback';panel.innerHTML='<label>生成介绍的提示词<textarea readonly rows="7" aria-label="生成介绍的提示词"></textarea></label>';article.querySelector('.entity-ai-note').after(panel);}
    const field=panel.querySelector('textarea');field.value=text;field.focus();field.select();status.textContent='请用 Ctrl+C 或 ⌘C 复制已选内容。';
   }
  }finally{button.disabled=false;}
 });
 return {prompt,chatUrl,actions};
})();

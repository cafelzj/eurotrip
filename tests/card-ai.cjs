const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{
 const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const context=await b.newContext(),p=await context.newPage(),errors=[];let modelRequests=0;
  p.on('pageerror',e=>errors.push(e.stack));
  await context.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await context.route('https://chatgpt.com/**',r=>{modelRequests++;return r.fulfill({contentType:'text/html',body:'<title>Model request fixture</title>ChatGPT link opened'});});
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';
  for(const id of ['venue-vienna-musikverein','food-product-turo-rudi','person-vienna-freud','brand-otp','fact-budapest-thermal','specialty-at-2','tip-suzhou-help']){
   await p.goto(base+'/#card/'+id);
   const link=p.locator('[data-ai-intro]');assert.equal(await link.count(),1);assert.equal(await link.getAttribute('target'),'_blank');assert((await link.getAttribute('rel')).includes('noopener'));
   const url=new URL(await link.getAttribute('href')),prompt=url.searchParams.get('q');assert.equal(url.origin,'https://chatgpt.com');
   const name=await p.locator('.entity-detail h1').innerText();assert(prompt.includes(name));assert(prompt.includes('约 800 字'));assert(prompt.includes('不要编造'));assert(prompt.includes('参考入口：'));
   if(id==='tip-suzhou-help'){assert(prompt.includes('江苏省'));assert(prompt.includes('苏州市'));}
  }
  assert.equal(modelRequests,0,'opening card details must not contact the model service');
  await p.goto(base+'/#card/person-vienna-freud');const [popup]=await Promise.all([context.waitForEvent('page'),p.locator('[data-ai-intro]').click()]);await popup.waitForLoadState();assert.equal(modelRequests,1);assert.equal(await p.locator('.entity-detail').getAttribute('data-entity-id'),'person-vienna-freud');await popup.close();
  await p.evaluate(()=>{window.copiedPrompt='';Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{window.copiedPrompt=text;}}});});
  await p.locator('[data-ai-copy]').click();assert((await p.locator('.entity-ai-status').innerText()).includes('已复制'));assert((await p.evaluate(()=>window.copiedPrompt)).includes('西格蒙德·弗洛伊德'));
  await p.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied');}}});});
  await p.locator('[data-ai-copy]').click();const field=p.locator('.entity-ai-copy-fallback textarea');assert(await field.isVisible());assert((await field.inputValue()).includes('弗洛伊德'));assert(await field.evaluate(e=>e.selectionEnd===e.value.length&&e.selectionStart===0));
  const safe=await p.evaluate(()=>{
   const original=CardGraph.nodes.get('person-vienna-freud');CardGraph.add({id:'private-dynamic-test',type:'place',live:true,country:'at',city:'vienna',name:'PRIVATE_VISIT_HISTORY_MARKER',description:'not part of the original card',subcategory:'other-places'});CardGraph.connect(original.id,'private-dynamic-test','曾经浏览过','历史记录');
   localStorage.setItem('unrelated-private-data','PRIVATE_SECRET_SENTINEL');return CardAI.prompt(original);
  });assert(!safe.includes('PRIVATE_VISIT_HISTORY_MARKER'));assert(!safe.includes('PRIVATE_SECRET_SENTINEL'));
  await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.screenshot({path:'/tmp/card-ai-mobile.png',fullPage:true});
  await p.goto(base+'/#card/venue-vienna-musikverein');assert.equal(await p.locator('.entity-actions a[href^="#map/"]').count(),1);assert.equal(await p.locator('.entity-actions [data-map-card]').count(),1);
  await p.setViewportSize({width:1440,height:1000});await p.screenshot({path:'/tmp/card-ai-desktop.png'});
  assert.deepEqual(errors,[]);console.log('PASS all card types, scoped public prompts, no automatic model requests, new-tab ChatGPT handoff, clipboard and denial fallback, no private history, map actions and mobile');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});

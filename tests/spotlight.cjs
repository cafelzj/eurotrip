const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  p.on('pageerror',e=>errors.push(e.message));await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://fonts.googleapis.com/**',r=>r.abort());
  const base=process.env.SITE_URL||'http://127.0.0.1:3020';
  await p.goto(base+'/#plan?view=features&item=visual-effects');const summary=p.locator('[data-plan-id="visual-effects"]>summary');await summary.scrollIntoViewIfNeeded();await summary.hover();await p.waitForSelector('[data-pointer-glow]');
  assert.equal(await p.locator('[data-pointer-glow]').count(),1);assert.equal(await summary.evaluate(e=>getComputedStyle(e,'::before').pointerEvents),'none');assert.equal(await summary.evaluate(e=>getComputedStyle(e,'::before').zIndex),'-1');
  const rect=await summary.boundingBox();await p.mouse.move(rect.x+35,rect.y+40);await p.waitForFunction(()=>document.querySelector('[data-pointer-glow]')?.style.getPropertyValue('--pointer-x')==='35.0px');
  await p.mouse.move(rect.x+130,rect.y+70);await p.waitForFunction(()=>document.querySelector('[data-pointer-glow]')?.style.getPropertyValue('--pointer-x')==='130.0px');
  // A synchronous burst of pointer events is processed in one frame, with no idle animation loop.
  await p.evaluate(()=>{window.originalRAF=requestAnimationFrame;window.glowFrames=0;window.requestAnimationFrame=cb=>{window.glowFrames++;return window.originalRAF(cb);};const el=document.querySelector('[data-plan-id="visual-effects"]>summary'),r=el.getBoundingClientRect();for(let i=0;i<30;i++)el.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,pointerType:'mouse',clientX:r.left+40+i,clientY:r.top+40}));});
  assert.equal(await p.evaluate(()=>window.glowFrames),1);await p.evaluate(()=>new Promise(resolve=>window.originalRAF(()=>window.originalRAF(resolve))));assert.equal(await p.evaluate(()=>window.glowFrames),1);
  await p.evaluate(()=>{window.requestAnimationFrame=window.originalRAF;window.dispatchEvent(new Event('blur'));});assert.equal(await p.locator('[data-pointer-glow]').count(),0);
  await summary.hover();await summary.click();assert(!(await p.locator('[data-plan-id="visual-effects"]').evaluate(e=>e.open)),'the light does not block summary clicks');
  await p.locator('#travelMode').hover();await p.locator('#travelMode').click();await p.locator('#countryMenu button').first().hover();assert.equal(await p.locator('[data-pointer-glow]').count(),0,'dropdown is excluded');await p.keyboard.press('Escape');
  await p.goto(base+'/#guide/hu/budapest?view=waterfall');const card=p.locator('.hub-card').first();const hoverCard=async()=>{await card.scrollIntoViewIfNeeded();await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));await card.hover();};await hoverCard();await p.waitForSelector('.hub-card[data-pointer-glow]');assert((await card.evaluate(e=>getComputedStyle(e,'::before').backgroundImage)).includes('radial-gradient'));
  await p.locator('#hubSearch').focus();assert.equal(await p.locator('[data-pointer-glow]').count(),0,'keyboard focus clears tracking');
  await hoverCard();await p.evaluate(()=>document.dispatchEvent(new Event('scroll')));assert.equal(await p.locator('[data-pointer-glow]').count(),0);
  await hoverCard();await p.locator('#miniMapToggle').click();await p.locator('#miniMapCanvas').hover();assert.equal(await p.locator('[data-pointer-glow]').count(),0,'map canvas is excluded');await p.locator('#miniMapClose').click();
  await hoverCard();await p.evaluate(()=>window.savedGlow=document.querySelector('[data-pointer-glow]'));await p.goto(base+'/#words');await p.locator('#vocabulary:visible').waitFor();assert.equal(await p.locator('[data-pointer-glow]').count(),0);assert(await p.evaluate(()=>!window.savedGlow?.hasAttribute('data-pointer-glow')),'old route target is cleaned');
  const cdp=await p.context().newCDPSession(p);
  for(const [name,value]of [['prefers-reduced-motion','reduce'],['prefers-reduced-transparency','reduce'],['prefers-contrast','more'],['forced-colors','active']]){
   await p.goto(base+'/#plan');await cdp.send('Emulation.setEmulatedMedia',{features:[{name,value}]});await p.locator('.plan-card>summary').first().hover();assert.equal(await p.locator('[data-pointer-glow]').count(),0,name+' disables tracking');await cdp.send('Emulation.setEmulatedMedia',{features:[]});
  }
  await p.locator('.plan-card>summary').first().hover();await p.waitForSelector('[data-pointer-glow]');assert.equal(await p.locator('[data-pointer-glow]').count(),1,'tracking returns after restoring preferences');
  const touch=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await touch.goto(base+'/#plan');assert(!(await touch.evaluate(()=>matchMedia('(hover: hover) and (pointer: fine)').matches)));await touch.locator('.plan-card>summary').first().dispatchEvent('pointermove',{pointerType:'mouse',clientX:100,clientY:500});assert.equal(await touch.locator('[data-pointer-glow]').count(),0);await touch.close();
  assert.deepEqual(errors,[]);console.log('PASS local pointer positions, one frame per burst and no idle loop, click-through, dynamic cards, route/focus/scroll cleanup, excluded maps/menus, accessibility preferences and touch fallback');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

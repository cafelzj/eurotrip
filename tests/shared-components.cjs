const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:4180',routes=['#guide/hu/budapest?view=waterfall','#china/jiangsu/suzhou?view=waterfall','#card-manager/china?province=jiangsu&primary=food&city='+encodeURIComponent('苏州')];
 for(const width of [1440,390]){
  await p.setViewportSize({width,height:1000});let reference;
  for(const hash of routes){
   await p.goto(base+'/'+hash);await settle(p);await p.waitForSelector('.ui-card');
   const values=await p.evaluate(()=>{const style=(selector,props)=>{const s=getComputedStyle(document.querySelector(selector));return Object.fromEntries(props.map(k=>[k,s[k]]));};return{card:style('.ui-card',['borderRadius','paddingTop']),heading:style('.ui-card-title',['fontSize','lineHeight','fontWeight']),search:style('.ui-search',['borderRadius','paddingTop','borderTopWidth']),button:style('.ui-button',['fontSize','borderRadius','paddingLeft','paddingTop','minHeight']),select:style('.ui-select',['fontSize','borderRadius','paddingTop'])};});
   if(reference)assert.deepEqual(values,reference,hash+' uses shared components at '+width);else reference=values;
   await p.locator('.ui-search input').focus();assert.equal(await p.locator('.ui-search').evaluate(e=>getComputedStyle(e).outlineStyle),'solid');assert.equal(await p.locator('.ui-search input').evaluate(e=>getComputedStyle(e).outlineStyle),'none');
   const card=p.locator('.ui-card').first();await card.scrollIntoViewIfNeeded();await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));const box=await card.boundingBox();
   await p.mouse.move(box.x+20,box.y+25);await p.waitForFunction(()=>document.querySelector('.ui-card.is-pointer-active'),null,{timeout:5000}).catch(async error=>{throw new Error(hash+' at '+width+' '+JSON.stringify(await card.evaluate(e=>({box:e.getBoundingClientRect().toJSON(),scrollY,pointer:matchMedia('(hover:hover) and (pointer:fine)').matches,reduce:matchMedia('(prefers-reduced-motion:reduce)').matches})))+' '+error.message);});
   const first=await card.evaluate(e=>e.style.getPropertyValue('--pointer-x'));
   await p.mouse.move(box.x+box.width-20,box.y+35);await p.waitForFunction(x=>document.querySelector('.ui-card.is-pointer-active')?.style.getPropertyValue('--pointer-x')!==x,first);
   assert((await card.evaluate(e=>getComputedStyle(e,'::before').backgroundImage)).includes('radial-gradient'));
   assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e,'::before').backgroundImage),'none');
   assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await p.mouse.move(0,0);assert.equal(await p.locator('.is-pointer-active').count(),0);
  }
 }
 await p.emulateMedia({reducedMotion:'reduce'});await p.locator('.ui-card').first().hover();assert.equal(await p.locator('.is-pointer-active').count(),0);assert.equal(await p.locator('.ui-card').first().evaluate(e=>getComputedStyle(e,'::before').display),'none');
 await p.emulateMedia({reducedMotion:'no-preference',forcedColors:'active'});assert.equal(await p.locator('.ui-card').first().evaluate(e=>getComputedStyle(e,'::before').display),'none');
 const touch=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await touch.goto(base+'/'+routes[2]);await touch.waitForSelector('.ui-card');await touch.locator('.ui-card .hub-detail-action').first().tap();await touch.waitForSelector('.entity-detail');assert.equal(await touch.locator('.is-pointer-active').count(),0);await touch.close();
 assert.deepEqual(errors,[]);console.log('PASS shared card/header/search/button/select styles across Europe, China and flavors, moving card highlights, fixed navigation, focus, reduced motion, forced colors and touch');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

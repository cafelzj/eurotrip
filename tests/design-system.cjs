const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await b.newPage({viewport:{width:1440,height:1050}}),errors=[],bad=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)bad.push(r.url());});
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://fonts.googleapis.com/**',r=>r.abort());await p.route('https://overpass-api.de/**',r=>r.fulfill({contentType:'application/json',body:'{"elements":[]}'}));
  const base=process.env.SITE_URL||'http://127.0.0.1:3018',shots='/tmp/eurotrip-design-after';fs.mkdirSync(shots,{recursive:true});
  const routes=[['city','#guide/hu/budapest','.knowledge-hub[data-scope="budapest"]'],['china','#china/jiangsu/suzhou','.knowledge-hub[data-scope="suzhou"]'],['words','#words','#vocabulary:visible'],['produce','#produce/de','[data-produce-country="de"]'],['plan','#plan','.plan-page'],['manager','#card-manager','.card-manager'],['map','#map/vienna','.map-focused'],['detail','#card/fact-hu-1','[data-entity-id="fact-hu-1"]']];
  async function go(hash,selector){await p.goto(base+'/'+hash);await p.locator(selector).waitFor();}
  for(const width of [1440,768,390,320]){
   await p.setViewportSize({width,height:width>900?1050:844});
   for(const [id,hash,selector]of routes){
    await go(hash,selector);
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${id} fits ${width}`);
    assert.equal(await p.locator('.mode-tabs .selected').count(),1);
    assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).position),'relative');
    assert((await p.locator('body').evaluate(e=>parseFloat(getComputedStyle(e).fontSize)))>=16);
    if(width===1440||width===390)await p.screenshot({path:`${shots}/${id}-${width}.png`});
   }
  }
  await p.setViewportSize({width:1440,height:1050});await go('#guide/hu/budapest','.knowledge-hub');
  assert((await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backdropFilter)).includes('blur'));
  const layout=await p.locator('.destination-hero').evaluate(e=>{const s=getComputedStyle(e);return {padding:parseFloat(s.paddingLeft),height:e.getBoundingClientRect().height};});assert(layout.padding>=24&&layout.height>150,'hero text has real padding, not clipped by legacy rules');
  await p.locator('[data-hub-section="food"]').scrollIntoViewIfNeeded();const nav=await p.locator('.mode-tabs').boundingBox();assert(nav.y+nav.height<0,'navigation scrolls away instead of covering cards');
  await p.locator('#travelMode').click();assert(await p.locator('#countryMenu').isVisible());await p.keyboard.press('Escape');assert.equal(await p.locator('#travelMode').getAttribute('aria-expanded'),'false');
  await p.locator('#miniMapToggle').click();assert(await p.locator('#miniMapPanel').isVisible());assert((await p.locator('#miniMapPanel').evaluate(e=>getComputedStyle(e).backdropFilter)).includes('blur'));
  assert.equal(await p.locator('#miniMapCanvas').evaluate(e=>getComputedStyle(e).filter),'none');assert.equal(await p.locator('.map-pin').first().evaluate(e=>getComputedStyle(e).backdropFilter),'none');
  await p.screenshot({path:shots+'/glass-map-desktop.png'});await p.locator('#miniMapClose').click();
  await p.locator('#hubSearch').focus();assert(await p.locator('#hubSearch').evaluate(e=>{const s=getComputedStyle(e);return document.activeElement===e&&s.outlineStyle==='solid'&&parseFloat(s.outlineWidth)>=2;}));
  // Contrast checks use computed text colors and conservative backgrounds, including glass over black.
  const contrasts=await p.evaluate(()=>{
   const rgb=s=>s.match(/[\d.]+/g).map(Number),lum=c=>c.slice(0,3).map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((v,x,i)=>v+x*[.2126,.7152,.0722][i],0);
   const ratio=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
   const nav=rgb(getComputedStyle(document.querySelector('.mode-tabs')).backgroundColor),alpha=nav[3]??1,glassOverBlack=nav.slice(0,3).map(x=>x*alpha);
   const card=document.querySelector('.hub-card'),text=card.querySelector('p');
   return {nav:ratio(rgb(getComputedStyle(document.querySelector('#wordsMode')).color),glassOverBlack),card:ratio(rgb(getComputedStyle(text).color),rgb(getComputedStyle(card).backgroundColor)),caption:ratio(rgb(getComputedStyle(document.querySelector('.guide-kicker')).color),[229,240,237])};
  });for(const [name,ratio]of Object.entries(contrasts))assert(ratio>=4.5,`${name} text contrast ${ratio}`);
  await p.emulateMedia({reducedMotion:'reduce'});await p.locator('.hub-card').first().hover();assert(await p.locator('.hub-card').first().evaluate(e=>{const s=getComputedStyle(e);return s.transitionDuration==='0s'&&s.transform==='none';}));
  const cdp=await p.context().newCDPSession(p);
  for(const preference of ['prefers-reduced-transparency','prefers-contrast']){
   await cdp.send('Emulation.setEmulatedMedia',{features:[{name:preference,value:preference==='prefers-contrast'?'more':'reduce'}]});
   assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backdropFilter),'none');assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(255, 254, 251)');
  }
  await cdp.send('Emulation.setEmulatedMedia',{features:[]});await p.emulateMedia({forcedColors:'active'});
  assert(await p.evaluate(()=>matchMedia('(forced-colors: active)').matches));assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backdropFilter),'none');assert(await p.locator('#travelMode').isVisible());
  await p.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
  // Removing the successful @supports branch simulates browsers that use only the opaque baseline.
  await p.evaluate(()=>{const sheet=[...document.styleSheets].find(s=>s.href?.includes('design-system.css'));for(let i=sheet.cssRules.length-1;i>=0;i--)if(sheet.cssRules[i] instanceof CSSSupportsRule&&sheet.cssRules[i].conditionText.includes('backdrop-filter'))sheet.deleteRule(i);});
  assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backdropFilter),'none');assert.equal(await p.locator('.mode-tabs').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(255, 254, 251)');
  await p.reload();await p.locator('.knowledge-hub').waitFor();
  await p.setViewportSize({width:390,height:844});await go('#guide/at/vienna','.knowledge-hub');await p.locator('#miniMapToggle').click();await p.screenshot({path:shots+'/glass-map-mobile.png'});await p.locator('#miniMapClose').click();assert(await p.locator('#miniMapToggle').isVisible(),'map close is not covered by navigation');
  await p.locator('#chinaMode').click();assert(await p.locator('#chinaMenu').isVisible());const menu=await p.locator('#chinaMenu').boundingBox();assert(menu.x>=0&&menu.x+menu.width<=390);await p.keyboard.press('Escape');
  await go('#words','#vocabulary:visible');await p.fill('#search','alma');await p.locator('.word-row').click();assert(await p.locator('#detail').evaluate(d=>d.open));assert((await p.locator('#detail').evaluate(e=>getComputedStyle(e).backdropFilter)).includes('blur'));await p.keyboard.press('Escape');assert(!(await p.locator('#detail').evaluate(d=>d.open)));
  assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);
  console.log('PASS 8 page types at 4 widths, non-sticky navigation, glass and clear map pins, padded hero, keyboard focus, key text contrast, reduced motion/transparency, high contrast, forced colors, opaque fallback and mobile overlay controls');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});

// Exercise the published style switch against real content, photos and navigation.
const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
const base=(process.env.SITE_URL||'http://127.0.0.1:4173').replace(/\/$/,''),tick=p=>p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
(async()=>{
 const args=['--no-sandbox'];
 if(process.env.PROXY_CA){const {execFileSync}=require('node:child_process'),crypto=require('node:crypto'),pem=execFileSync('openssl',['x509','-in',process.env.PROXY_CA,'-pubkey','-noout']),der=execFileSync('openssl',['pkey','-pubin','-outform','DER'],{input:pem});args.push('--ignore-certificate-errors-spki-list='+crypto.createHash('sha256').update(der).digest('base64'));}
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args});
 try{
  const p=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[];
  p.on('pageerror',error=>errors.push(error.message));
  await p.route('**/*',route=>new URL(route.request().url()).origin===new URL(base).origin?route.continue():route.abort());
  const go=async hash=>{await p.goto(base+'/'+hash);await settle(p);await tick(p);};
  const choose=async style=>{await p.locator('[data-site-style-choice="'+style+'"]').click();await tick(p);assert.equal(await p.locator('html').getAttribute('data-site-style'),style);assert.equal(await p.locator('[data-site-style-choice="'+style+'"]').getAttribute('aria-pressed'),'true');};
  await go('#guide/hu/budapest?zone=food&view=waterfall');
  assert.equal(await p.evaluate(()=>SiteStyle.get()),'new','new presentation is available on first visit');
  const yNew=(await p.locator('[data-knowledge-card]').first().boundingBox()).y;
  assert(yNew<650,'first food card appears in a normal phone viewport');
  assert.equal(await p.locator('[data-destination-toggle]').getAttribute('aria-expanded'),'false');
  await p.locator('[data-destination-toggle]').click();assert(await p.locator('.destination-feature-visual').isVisible());
  await p.locator('[data-destination-toggle]').click();assert(!(await p.locator('.destination-feature-visual').isVisible()));

  const first=p.locator('[data-knowledge-card="food-budapest-0"]');
  const short=await first.locator(':scope > p').innerText();assert(short.includes('牛肉汤'));assert(short.length<75);
  const hash=await p.evaluate(()=>location.hash);await p.evaluate(()=>{window.styleDocumentToken={};window.savedStyleDocumentToken=window.styleDocumentToken;window.styleCard=document.querySelector('[data-knowledge-card="food-budapest-0"]');});
  await choose('classic');
  assert((await first.locator(':scope > p').innerText()).includes('牧牛人'),'classic introduction stays intact');
  assert(await p.locator('.destination-feature-visual').isVisible(),'classic keeps the full destination feature');
  assert((await first.boundingBox()).y+await p.evaluate(()=>scrollY)>yNew+250,'classic and new have distinct document layouts even when the reading anchor is retained');
  assert.equal(await p.evaluate(()=>location.hash),hash);
  assert(await p.evaluate(()=>styleDocumentToken===savedStyleDocumentToken&&styleCard===document.querySelector('[data-knowledge-card="food-budapest-0"]')),'switch never recreates the page or card');
  await p.reload();await settle(p);assert.equal(await p.evaluate(()=>SiteStyle.get()),'classic','saved style survives refresh');
  await choose('new');

  await p.locator('#hubSearch').fill('蛋糕');await p.selectOption('#hubKind','甜品');await tick(p);
  const before=await p.evaluate(()=>({hash:location.hash,cards:[...document.querySelectorAll('[data-knowledge-card]')].map(e=>e.dataset.knowledgeCard)}));
  await choose('classic');assert.equal(await p.locator('#hubSearch').inputValue(),'蛋糕');assert.equal(await p.locator('#hubKind').inputValue(),'甜品');
  assert.deepEqual(await p.evaluate(()=>({hash:location.hash,cards:[...document.querySelectorAll('[data-knowledge-card]')].map(e=>e.dataset.knowledgeCard)})),before);
  await choose('new');
  await p.locator('.destination-switcher [data-guide-city="debrecen"]').click();await settle(p);
  assert.equal(await p.locator('#hubSearch').inputValue(),'蛋糕');assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'debrecen');
  await p.goBack();await settle(p);assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'budapest');

  await go('#guide/hu/budapest?zone=food&view=waterfall');
  for(const style of ['classic','new']){
   await p.evaluate(value=>SiteStyle.set(value),style);await tick(p);
   await p.locator('[data-knowledge-card="food-budapest-0"]').scrollIntoViewIfNeeded();await p.evaluate(()=>scrollBy(0,120));await tick(p);
   const anchor=await p.evaluate(()=>{const e=[...document.querySelectorAll('[data-knowledge-card]')].find(e=>{const b=e.getBoundingClientRect();return b.bottom>120&&b.top<innerHeight});return {id:e.dataset.knowledgeCard,top:e.getBoundingClientRect().top};});
   await p.evaluate(value=>SiteStyle.set(value),style==='new'?'classic':'new');await tick(p);await tick(p);
   assert(Math.abs((await p.locator('[data-knowledge-card="'+anchor.id+'"]').boundingBox()).y-anchor.top)<3,'keep the visible card in place');
   assert(await p.locator('.card-feed-grid').evaluate(grid=>{const rs=[...grid.children].map(e=>e.getBoundingClientRect());return rs.every((a,i)=>rs.slice(i+1).every(b=>Math.abs(a.left-b.left)>1||a.bottom<=b.top+1||b.bottom<=a.top+1));}),'masonry remeasures after the summary and image changes');
  }

  await go('#card/food-pl-prince-polo');await choose('new');await p.locator('[data-photo-index="1"]').click();await tick(p);
  const selected=await p.locator('.entity-image .card-image-frame img').getAttribute('src'),frame=p.locator('.entity-image .card-image-frame'),newHeight=(await frame.boundingBox()).height;
  assert.equal(await p.locator('.card-image-position').innerText(),'2 / 3');
  await choose('classic');assert.equal(await p.locator('.entity-image .card-image-frame img').getAttribute('src'),selected);assert.equal(await p.locator('.card-image-position').innerText(),'2 / 3');
  assert((await frame.boundingBox()).height>newHeight*1.5,'classic image geometry is restored');
  await choose('new');await p.locator('[data-photo-index="2"]').click();assert(Math.abs((await frame.boundingBox()).height-newHeight)<1,'new album keeps its height');
  assert((await p.locator('.entity-image figcaption').innerText()).includes('Evan-Amos'),'per-photo credits still change');
  await go('#card/food-budapest-0');
  assert((await p.locator('.entity-description').innerText()).includes('牛肉汤'));assert((await p.locator('.entity-reading').innerText()).includes('牧牛人'));
  await choose('classic');assert((await p.locator('.entity-description').innerText()).includes('牧牛人'));

  await choose('new');await p.setViewportSize({width:390,height:844});
  await p.locator('#travelMode').click();await p.locator('#moreMode').click();assert(await p.locator('#moreModeMenu').isVisible());assert(!(await p.locator('#countryMenu').isVisible()),'only one navigation menu stays open');await p.keyboard.press('Escape');assert.equal(await p.locator('#moreMode').getAttribute('aria-expanded'),'false');
  await p.locator('#moreMode').focus();await p.keyboard.press('ArrowDown');await p.keyboard.press('Enter');await p.locator('[data-produce-country]').first().waitFor();assert.equal(await p.locator('#moreMode').getAttribute('aria-expanded'),'false');
  await p.locator('#moreMode').click();await p.locator('#planMode').click();await p.locator('.plan-page').waitFor();
  await choose('classic');assert(await p.locator('#produceMode').isVisible());assert(!(await p.locator('#moreMode').isVisible()));await p.locator('#wordsMode').click();await p.locator('#vocabulary:visible').waitFor();

  await go('#guide/at/vienna?zone=food&view=waterfall');await choose('new');await p.locator('[data-hub-costs]').click();
  assert.equal(await p.locator('#hubKind').inputValue(),'物价与开销');assert((await p.locator('[data-knowledge-card]').first().innerText()).includes('每户'));
  const contrast=await p.evaluate(()=>{const parse=s=>s.match(/[\d.]+/g).map(Number),l=s=>parse(s).slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0),e=document.querySelector('.hub-local'),a=l(getComputedStyle(e).color),b=l(getComputedStyle(e.closest('.hub-card')).backgroundColor);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)});
  assert(contrast>=4.5,'subtitle contrast meets normal-text AA');

  for(const style of ['new','classic'])for(const width of [1440,768,390,320]){
   await p.setViewportSize({width,height:844});await p.evaluate(value=>SiteStyle.set(value),style);await tick(p);
   for(const route of ['#guide/hu/budapest?zone=food&view=waterfall','#china/jiangsu/suzhou?zone=food','#card/food-pl-prince-polo','#card/person-mozart']){
    await go(route);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),style+' '+width+' '+route);
   }
   assert.equal(await p.locator('[data-site-style-choice="'+style+'"]').getAttribute('aria-pressed'),'true');
   assert.equal(await p.locator('#moreMode').isVisible(),style==='new'&&width<=700);
   for(const [button,menu]of [['#travelMode','#countryMenu'],['#chinaMode','#chinaMenu']]){await p.locator(button).click();const box=await p.locator(menu).boundingBox();assert(box.x>=0&&box.x+box.width<=width,'navigation menu stays in viewport '+style+' '+width+' '+menu+' '+JSON.stringify(box));await p.keyboard.press('Escape');}
  }
  await p.goto(base+'/?style=classic#card/food-pl-prince-polo');await settle(p);assert.equal(await p.evaluate(()=>SiteStyle.get()),'classic','comparison URL overrides saved preference');
  await choose('new');await p.reload();await settle(p);assert.equal(new URL(p.url()).searchParams.get('style'),'new');assert.equal(await p.evaluate(()=>SiteStyle.get()),'new');
  await p.goto(base+'/?style=classic#guide/hu/budapest?zone=food&view=waterfall');await settle(p);
  await p.locator('.destination-switcher [data-guide-city="debrecen"]').click();await settle(p);await choose('new');
  await p.goBack();await settle(p);assert.equal(await p.evaluate(()=>SiteStyle.get()),'classic','back restores the explicit style in the comparison URL');
  await p.goForward();await settle(p);assert.equal(await p.evaluate(()=>SiteStyle.get()),'new','forward restores the matching version');
  assert.deepEqual(errors,[]);
  console.log('PASS both style versions at four widths, saved choice and comparison URLs, focused destination folding, unchanged data/filter/history, anchored reading and masonry, stable real galleries/credits, all mobile menu destinations and local-cost shortcut');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});

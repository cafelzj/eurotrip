const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('https://upload.wikimedia.org/**',r=>r.abort());await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://fonts.googleapis.com/**',r=>r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:3052';await p.goto(base+'/#guide/hu/budapest?zone=food&view=waterfall');await settle(p);
 assert.equal(await p.locator('.destination-feature-visual img').count(),1);assert.equal(await p.locator('.hub-heading').count(),0);
 assert((await p.locator('.breadcrumbs').innerText()).startsWith('欧洲国家 · 匈牙利'));
 // A destination switch changes the collection without recreating the document,
 // retaining search/view/topic and the current scroll position.
 await p.evaluate(()=>{window.destinationDocumentToken={};window.savedDocumentToken=window.destinationDocumentToken;window.scrollTo(0,120);});
 const top=await p.evaluate(()=>scrollY);await p.locator('.destination-switcher [data-guide-city="debrecen"]').click();await settle(p);
 assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'debrecen');assert.equal(await p.locator('.destination-feature-text h1').innerText(),'德布勒森');
 assert(await p.evaluate(()=>window.destinationDocumentToken===window.savedDocumentToken));assert(Math.abs(await p.evaluate(()=>scrollY)-top)<2,'switch retains scroll');
 assert.equal(await p.locator('[data-hub-topic="food"]').first().getAttribute('aria-pressed'),'true');assert.equal(await p.locator('.knowledge-hub').getAttribute('data-view'),'waterfall');
 await p.goBack();await settle(p);assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'budapest');
 await p.goForward();await settle(p);assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'debrecen');
 await p.reload();await settle(p);assert.equal(await p.locator('.destination-switcher [aria-pressed="true"]').innerText(),'德布勒森');
 await p.locator('#hubSearch').fill('香肠');await p.locator('.destination-switcher [data-guide-city=""]').click();await settle(p);
 assert.equal(await p.locator('#hubSearch').inputValue(),'香肠');assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'hu');
 await p.locator('#hubSearch').focus();assert.equal(await p.locator('#hubSearch').evaluate(e=>getComputedStyle(e).outlineStyle),'none');assert.notEqual(await p.locator('.hub-search').evaluate(e=>getComputedStyle(e).boxShadow),'none');
 for(const country of ['hu','at','de','rs','si','pl']){
  await p.goto(base+'/#guide/'+country);await settle(p);assert.equal(await p.locator('.destination-feature-visual img').count(),1,country+' has one image');
  const buttons=p.locator('.destination-switcher button');for(let i=0;i<await buttons.count();i++){await buttons.nth(i).click();await settle(p);assert.equal(await p.locator('.destination-feature-visual img').count(),1);}
  for(const width of [1440,768,390,320]){await p.setViewportSize({width,height:1000});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),country+' fits '+width);}
 }
 assert.deepEqual(errors,[]);console.log('PASS single-image city feature, six countries, in-place scopes, filters, scroll, history, reload, compact focus and four widths');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

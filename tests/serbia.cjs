const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],queries=[];p.on('pageerror',e=>errors.push(e.message));
 await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://overpass-api.de/**',r=>{queries.push(r.request().postData());return r.fulfill({contentType:'application/json',body:'{"elements":[]}'});});
 const base=process.env.SITE_URL||'http://127.0.0.1:3014';await p.goto(base+'/#guide/rs');await p.waitForSelector('.knowledge-hub[data-scope="rs"]');
 assert((await p.locator('.destination-hero').innerText()).includes('塞尔维亚'));assert.equal(await p.locator('.destination-cities a').count(),4);await p.locator('#travelMode').click();await p.locator('[data-nav-country="rs"]').click();await settle(p);
 assert(await p.evaluate(()=>countryBorders.features.some(f=>f.properties.name==='Serbia')));
 assert.equal(await p.locator('.hub-section').count(),5);assert(await p.evaluate(()=>KnowledgeHub.scoped(travelCountries.find(c=>c.id==='rs')).length>=75));
 for(const city of ['belgrade','novi-sad','nis']){
  await p.goto(base+'/#guide/rs/'+city);await p.waitForSelector('.knowledge-hub[data-scope="'+city+'"]');assert.equal(await p.locator('.hub-section').count(),5);
  assert(await p.evaluate(id=>KnowledgeHub.scoped(travelCountries.find(c=>c.id==='rs'),travelCities.find(c=>c.id===id)).every(n=>n.city===id||n.cities?.includes(id)||n.type==='tip'&&!n.city),city));
  await p.reload();assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),city);
  await p.goto(base+'/#map/'+city);await p.waitForSelector('[data-map-series]');assert.equal(await p.locator('[data-map-series]').count(),5);assert.equal(queries.length,0);
  const ids=await p.locator('[data-source-card]').evaluateAll(nodes=>nodes.map(n=>n.dataset.sourceCard));assert(ids.length>=6);assert(await p.evaluate(({ids,city})=>ids.every(id=>CardGraph.nodes.get(id)?.city===city&&CardGraph.nodes.get(id)?.point),{ids,city}));
 }
 await p.goto(base+'/#card/person-rs-tesla');assert.equal(await p.locator('.entity-actions a[href^="#map/"]').count(),0);await p.locator('.entity-relations a[href="#card/place-belgrade-tesla"]').click();await settle(p);assert.equal(await p.locator('.entity-actions a[href^="#map/"]').getAttribute('href'),'#map/belgrade?focus=place-belgrade-tesla');await p.locator('.entity-actions a[href^="#map/"]').click();await settle(p);assert((await p.locator('.poi-popup').innerText()).includes('特斯拉'));
 await p.goto(base+'/#guide/rs/belgrade?zone=brands');await p.selectOption('#hubKind','超市');await p.locator('[data-knowledge-card="brand-lidl"] .card-pin-action').click();await settle(p);assert((await p.locator('#travelMode').innerText()).includes('塞尔维亚'));assert(await p.locator('[data-chain-card="brand-lidl"]').isChecked());await p.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('未找到'));assert.equal(queries.length,1);
 await p.goto(base+'/#guide/rs/novi-sad?zone=food');await p.fill('#hubSearch','Index');assert((await p.locator('.hub-card-title').innerText()).includes('Index'));
 await p.goto(base+'/#guide/rs/belgrade');await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.screenshot({path:'/tmp/serbia-mobile.png'});assert.deepEqual(errors,[]);
 console.log('PASS Serbia menu/overview, three scoped cities, all categories, card-derived POIs, person/place/map links, shared chain search, city food, mobile');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

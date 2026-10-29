const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],bad=[],queries=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)bad.push(r.url());});
  await p.route('https://fonts.googleapis.com/**',r=>r.abort());await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await p.route('https://overpass-api.de/**',r=>{
   const query=new URLSearchParams(r.request().postData()||'').get('data')||'';queries.push(query);const dining=query.includes('Zapiecek');
   return r.fulfill({contentType:'application/json',body:JSON.stringify({elements:[
    {type:'node',id:dining?902912:902911,lat:52.2312,lon:21.0122,tags:dining?{amenity:'restaurant',brand:'Zapiecek',name:'Zapiecek Fixture'}:{shop:'convenience',brand:'Żabka',name:'Żabka Fixture'}},
    {type:'node',id:902913,lat:52.2310,lon:21.0123,tags:{shop:'convenience',brand:'Unselected Chain',name:'Unselected Shop'}}
   ]})});
  });
  const base=process.env.SITE_URL||'http://127.0.0.1:3023',go=async hash=>{await p.goto(base+'/'+hash);await settle(p);};
  const scopes={si:['ljubljana','maribor','bled','piran'],pl:['warsaw','krakow','gdansk','wroclaw']};
  await go('#guide/si');await p.locator('#travelMode').click();assert.equal(await p.locator('[data-nav-country]').count(),6);assert(await p.locator('#countryMenu button').last().evaluate(e=>e.hasAttribute('data-nav-manager')));await p.locator('[data-nav-country="si"]').click();await settle(p);
  assert(await p.evaluate(()=>countryBorders.features.some(f=>f.properties.name==='Slovenia')&&countryBorders.features.some(f=>f.properties.name==='Poland')));
  assert.equal(await p.evaluate(()=>[...CardStore.nodes.values()].filter(n=>!n.live).length),971);
  for(const [country,cityIds]of Object.entries(scopes)){
   await go('#guide/'+country);assert.equal(await p.locator('.destination-cities a').count(),5);assert.equal(await p.locator('.hub-section').count(),5);
   for(const city of cityIds){
    await go('#guide/'+country+'/'+city);await p.waitForSelector('.knowledge-hub[data-scope="'+city+'"]');assert.equal(await p.locator('.hub-section').count(),5);
    const scope=await p.evaluate(({country,city})=>{const list=KnowledgeHub.scoped(travelCountries.find(c=>c.id===country),travelCities.find(c=>c.id===city));return {categories:[...new Set(list.map(n=>n.category))].sort(),valid:list.every(n=>CardStore.cityIds(n).includes(city)||n.type==='tip'&&!CardStore.cityIds(n).length)};},{country,city});
    assert.deepEqual(scope.categories,['brands','facts','food','places','transport']);assert(scope.valid);await p.reload();assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),city);
    await go('#map/'+city);assert.equal(await p.locator('[data-map-series]').count(),5);
    const staticPoints=await p.locator('[data-map-leaf]').evaluateAll(els=>els.map(e=>CardStore.nodes.get(e.dataset.mapLeaf)).filter(n=>n.point).map(n=>n.id));assert(staticPoints.length>=6,city+' mapped venues');
    assert(await p.evaluate(({ids,country,city})=>ids.every(id=>KnowledgeHub.scoped(travelCountries.find(c=>c.id===country),travelCities.find(c=>c.id===city)).some(n=>n.id===id)),{ids:staticPoints,country,city}));
   }
  }
  assert.equal(queries.length,0,'visiting maps does not automatically search all chains');
  await go('#guide/si/bled?zone=transport&view=waterfall&q=Lesce');await p.waitForSelector('[data-knowledge-card="place-bled-lesce-station"]');assert((await p.locator('#hubCount').innerText()).includes('张关联卡片'));
  await go('#card/food-si-bled-cream');await p.locator('.entity-relations a[href="#card/place-bled-park-cafe"]').click();await settle(p);await p.locator('.entity-actions a[href^="#map/"]').click();await settle(p);assert((await p.locator('.poi-popup').innerText()).includes('Park'));
  await go('#card/person-pl-chopin');assert.equal(await p.locator('.entity-actions a[href^="#map/"]').count(),0);await p.locator('.entity-relations a[href="#card/place-warsaw-chopin-museum"]').click();await settle(p);await p.locator('.entity-actions a[href^="#map/"]').click();await settle(p);assert((await p.locator('.poi-popup').innerText()).includes('肖邦'));
  await go('#card/heritage-ljubljana-plecnik');assert.equal(await p.locator('.entity-actions a[href^="#map/"]').count(),0,'series heritage does not invent a single complete POI');assert(await p.locator('.entity-relations a[href="#card/place-ljubljana-nuk"]').count());
  assert(await p.evaluate(()=>KnowledgeHub.scoped(travelCountries.find(c=>c.id==='at'),travelCities.find(c=>c.id==='vienna')).some(n=>n.id==='person-si-plecnik')),'shared person retains the Vienna association');
  await go('#card-manager');assert.equal(await p.locator('[data-manager-country] option[value="si"]').count(),1);assert.equal(await p.locator('[data-manager-country] option[value="pl"]').count(),1);await p.selectOption('[data-manager-country]','pl');assert.equal(await p.locator('[data-manager-city] option[value="warsaw"]').count(),1);assert.equal(await p.locator('[data-manager-city] option[value="ljubljana"]').count(),0);
  await go('#card-manager/china');assert.equal(await p.locator('[data-manager-country] option[value="pl"]').count(),0);
  await go('#map/warsaw?search=brand-pl-zabka');await p.waitForFunction(()=>document.querySelector('#poiResults')?.textContent.includes('Żabka Fixture'));assert(queries.at(-1).includes('supermarket|convenience'));assert(!(await p.locator('#poiResults').innerText()).includes('Unselected Shop'));
  await p.locator('#poiResults a[href="#card/poi-warsaw-osm-node-902911"]').click();await settle(p);assert((await p.locator('.entity-ownership').innerText()).includes('波兰'));await p.reload();assert(await p.locator('[data-entity-id="poi-warsaw-osm-node-902911"]').count());
  await go('#map/warsaw?search=brand-pl-zapiecek');await p.waitForFunction(()=>document.querySelector('#poiResults')?.textContent.includes('Zapiecek Fixture'));assert(queries.at(-1).includes('restaurant|cafe|fast_food'));assert(await p.evaluate(()=>CardStore.nodes.get('poi-warsaw-osm-node-902912').subcategory==='chain-dining'));
  await go('#guide/pl?zone=facts&view=waterfall&q='+encodeURIComponent('托卡尔丘克'));await p.waitForSelector('[data-knowledge-card="person-pl-tokarczuk"]');assert((await p.locator('#hubCount').innerText()).includes('1 张'));
  await go('#guide/si');await p.screenshot({path:'/tmp/slovenia-overview-desktop.png',fullPage:false});
  for(const width of [390,320]){await p.setViewportSize({width,height:844});for(const path of ['#guide/si/ljubljana?view=waterfall','#guide/pl/warsaw?view=waterfall','#card/heritage-auschwitz-birkenau']){await go(path);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path+' fits '+width);}}
  await p.screenshot({path:'/tmp/poland-heritage-mobile.png',fullPage:false});assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);
  console.log('PASS six-country menu, eight new scoped cities, five categories, country outlines, 971 retained cards, search/food/person/heritage/map paths, shared ownership, management isolation, branded convenience and restaurant search, live-card reload and mobile');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];let queries=0;
  page.on('pageerror',e=>errors.push(e.stack));
  await page.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await page.route('https://overpass-api.de/**',r=>{queries++;return r.fulfill({contentType:'application/json',body:'{"elements":[]}'});});
  const base=process.env.SITE_URL||'http://127.0.0.1:3014',inventory=new Set();
  // Read actual rendered collections, including cards behind pagination and collapsed groups.
  for(const country of ['hu','at','de','rs','si','pl']){
   await page.goto(base+'/#guide/'+country);
   const ids=await page.evaluate(()=>{
    while(document.querySelector('[data-hub-more]'))document.querySelector('[data-hub-more]').click();
    document.querySelectorAll('.hub-subgroup').forEach(d=>d.open=true);
    return [...document.querySelectorAll('[data-knowledge-card]')].map(el=>el.dataset.knowledgeCard);
   });
   ids.forEach(id=>inventory.add(id));
   assert(await page.locator('.hub-section-heading p').evaluateAll(es=>es.length===5&&es.every(e=>e.textContent.trim().length>0)));
   assert(await page.locator('.hub-subgroup-description').evaluateAll(es=>es.length>0&&es.every(e=>e.textContent.trim().length>0)));
   if(await page.locator('#miniMapToggle').isVisible())await page.locator('#miniMapToggle').click();
   assert.equal(await page.locator('#miniMapFull').getAttribute('href'),'#map/'+country);
   await page.locator('#miniMapFull').click();await settle(page);
   assert.equal(await page.locator('[data-map-series]').count(),5);
   assert.equal(queries,0);
   await page.reload();assert.equal(await page.locator('#travelMap').count(),1);
   await page.goto(base+'/#card/brand-lidl');
   assert.equal(await page.locator('.entity-actions a[href^="#map/"]').getAttribute('href'),'#map/'+country+'?search=brand-lidl','shared chain retains the selected country');
   assert((await page.locator('#travelMode').innerText()).includes({hu:'匈牙利',at:'奥地利',de:'德国',rs:'塞尔维亚',si:'斯洛文尼亚',pl:'波兰'}[country]),'navigation retains the selected country');
   assert.equal(await page.locator('.entity-breadcrumb a').last().getAttribute('href'),'#guide/'+country);
  }
  for(const city of ['suzhou','xuzhou','wuxi']){
   await page.goto(base+'/#china/jiangsu/'+city);
   const ids=await page.evaluate(()=>{while(document.querySelector('[data-hub-more]'))document.querySelector('[data-hub-more]').click();return [...document.querySelectorAll('[data-knowledge-card]')].map(el=>el.dataset.knowledgeCard);});ids.forEach(id=>inventory.add(id));
  }
  const registered=await page.evaluate(()=>[...CardGraph.nodes.keys()]);
  assert.deepEqual([...inventory].sort(),registered.sort(),'every remaining detail is reachable through the rendered country collections');
  assert(await page.evaluate(()=>[...CardGraph.nodes.values()].every(n=>{const b=KnowledgeHub.mapBinding(n),points=KnowledgeHub.mappedPoints(n);return ['none','fixed','dynamic'].includes(b.mode)&&points.length<=1&&(b.mode==='fixed'?points.length===1&&points[0].id===n.id:points.length===0&&!n.point);}))); 
  console.log('PASS all retained details reachable in actual country cards; zero/one/search POI contract; country map links and reload');
  for(const id of ['person-mozart','food-vienna-1','fact-at-3','brand-sap']){
   await page.goto(base+'/#card/'+id);
   assert.equal(await page.locator('.entity-actions a[href^="#map/"],.entity-actions [data-map-card]').count(),0);
   if(await page.locator('#miniMapToggle').isVisible())await page.locator('#miniMapToggle').click();
   assert.equal(await page.locator('#miniMapCanvas .mini-marker').count(),0,'unlocated cards never inherit a related place pin');
  }
  await page.goto(base+'/#card/venue-vienna-opera');
  await page.locator('.entity-actions [data-map-card]').click();
  assert.equal(await page.locator('#miniMapCanvas .mini-marker').count(),1);
  assert((await page.locator('.leaflet-popup-content').innerText()).includes('歌剧院'));
  await page.locator('#miniMapFull').click();await settle(page);
  assert((await page.locator('.poi-popup').innerText()).includes('歌剧院'));
  for(const id of ['country-at','city-vienna','map-vienna','word-0','venue-elbphilharmonie']){
   await page.goto(base+'/#card/'+id);assert.equal(await page.locator('.entity-missing').count(),1);
  }
  console.log('PASS no inferred pins for people/food/facts/companies; exact venue pin and full-map focus; obsolete detail routes removed');
  await page.goto(base+'/#guide/at/vienna?zone=food&kind='+encodeURIComponent('连锁餐饮品牌'));
  assert.equal(await page.locator('#hubKind').inputValue(),'连锁餐饮','old brand category link opens the merged category');
  assert.equal(await page.locator('[data-knowledge-card="venue-nordsee-vienna"]').count(),1);
  await page.locator('[data-knowledge-card="brand-chain-nordsee"] .card-pin-action').click();await settle(page);
  assert.equal(await page.locator('[data-chain-card="brand-chain-nordsee"]').isChecked(),true);
  await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('未找到'));
  assert.equal(queries,1);
  await page.goto(base+'/#guide/at');
  const countryLayout=await page.locator('.destination-hero').boundingBox();
  await page.screenshot({path:'/tmp/country-simple.png'});
  await page.locator('.destination-cities a[href="#guide/at/vienna"]').click();await settle(page);
  const cityLayout=await page.locator('.destination-hero').boundingBox();assert.equal(cityLayout.width,countryLayout.width);
  assert.equal(await page.locator('.destination-facts').count(),0);
  if(await page.locator('#miniMapToggle').isVisible())await page.locator('#miniMapToggle').click();assert.equal(await page.locator('#miniMapFull').getAttribute('href'),'#map/vienna');
  await page.screenshot({path:'/tmp/city-simple.png'});
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('#miniMapClose').click();await page.screenshot({path:'/tmp/city-simple-mobile.png'});
  assert.deepEqual(errors,[]);
  console.log('PASS chain brand search from city card, shared destination layout, city map link, mobile, no JS errors');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

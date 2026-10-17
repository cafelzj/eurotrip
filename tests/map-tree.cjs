const {chromium}=require('playwright'),assert=require('node:assert/strict'),open=require('./open-map-branch.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[],queries=[];
  p.on('pageerror',e=>errors.push(e.stack));
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await p.route('https://overpass-api.de/**',r=>{queries.push(new URLSearchParams(r.request().postData()).get('data'));return r.fulfill({contentType:'application/json',body:JSON.stringify({elements:[
   {type:'node',id:111,lat:48.2034,lon:16.3696,tags:{shop:'supermarket',brand:'Lidl',name:'Tree Lidl'}},
   {type:'node',id:222,lat:48.2035,lon:16.3697,tags:{amenity:'fast_food',brand:'NORDSEE',name:'Tree NORDSEE'}}
  ]})});});
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';await p.goto(base+'/#map/vienna');
  assert.equal(await p.locator('.map-layer-tree>li').count(),6);
  assert.equal(await p.locator('.full-map-layer-grid,.inline-chain-controls,.sub-filter-row,[data-dynamic-kind]').count(),0);
  assert.equal(queries.length,0);
  assert(await p.locator('[data-map-series="facts"]').isDisabled());
  assert(await p.evaluate(()=>[...document.querySelectorAll('[data-map-leaf]')].every(e=>{const n=CardGraph.nodes.get(e.dataset.mapLeaf);return n&&['fixed','dynamic'].includes(KnowledgeHub.mapBinding(n).mode)&&e.closest('.map-tree-subgroup').querySelector('[data-map-sub]').dataset.mapSub===KnowledgeHub.subtype(n);}))); 
  const museum='[data-map-sub="博物馆 / 美术馆 / 展览"]',place='[data-map-leaf="place-vienna-2"]';
  await open(p,place);await p.locator(place).uncheck();
  assert.equal(await p.locator('[data-source-card="place-vienna-2"]').count(),0);
  assert(await p.locator(museum).evaluate(e=>e.indeterminate));
  assert(await p.locator('[data-map-series="places"]').evaluate(e=>e.indeterminate));
  const toggle=p.locator(museum).locator('xpath=../preceding-sibling::button');
  const before=await p.locator('[data-map-leaf]').evaluateAll(es=>es.map(e=>[e.dataset.mapLeaf,e.checked]));
  await toggle.focus();await p.keyboard.press('Enter');
  assert.equal(await toggle.getAttribute('aria-expanded'),'false');
  assert.deepEqual(await p.locator('[data-map-leaf]').evaluateAll(es=>es.map(e=>[e.dataset.mapLeaf,e.checked])),before);
  assert.equal(queries.length,0);
  await p.locator(museum).click();assert(await p.locator(museum).isChecked());assert(!(await p.locator(museum).evaluate(e=>e.indeterminate)));
  await p.locator(museum).uncheck();assert.equal(await p.locator('.poi-result').evaluateAll(es=>es.filter(e=>e.textContent.includes('博物馆 / 美术馆 / 展览')).length),0);
  await p.locator(museum).check();await open(p,place);await p.locator(place).uncheck();await p.reload();assert.equal(await p.locator(place).isChecked(),false);
  await p.goto(base+'/#map/budapest');assert(await p.locator(museum).isChecked());
  await p.goto(base+'/#map/vienna');await open(p,place);await p.locator(place).check();
  console.log('PASS real card hierarchy, half-selected ancestors, category bulk selection, independent keyboard disclosure, per-card persistence and city isolation');
  await open(p,'[data-layer-focus="venue-vienna-opera"]');await p.locator('[data-layer-focus="venue-vienna-opera"]').click();
  assert((await p.locator('.poi-popup').innerText()).includes('歌剧院'));assert(await p.locator('[data-tree-card="venue-vienna-opera"]').evaluate(e=>e.classList.contains('active')));
  await open(p,'[data-chain-card="brand-lidl"]');await p.locator('[data-chain-card="brand-lidl"]').check();
  await p.waitForSelector('[data-source-card="poi-vienna-osm-node-111"]');assert.equal(queries.length,1);
  assert(await p.locator('[data-map-sub="超市"]').evaluate(e=>e.indeterminate));
  await p.locator('[data-map-sub="超市"]').click();await p.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('已获取'));
  await p.waitForFunction(()=>!document.querySelector('#cancelPois')||document.querySelector('#cancelPois').hidden);
  assert(await p.locator('[data-map-sub="超市"]').isChecked());
  await p.locator('[data-map-series="brands"]').uncheck();assert.equal(await p.locator('[data-source-card="poi-vienna-osm-node-111"]').count(),0);
  assert(await p.locator('[data-map-layer="brands"] [data-map-leaf]').evaluateAll(es=>es.every(e=>!e.checked)));
  await p.locator('[data-map-series="brands"]').check();await p.waitForSelector('[data-source-card="poi-vienna-osm-node-111"]');
  await open(p,'[data-chain-search="brand-chain-nordsee"]');await p.locator('[data-chain-search="brand-chain-nordsee"]').click();
  await p.waitForSelector('[data-source-card="poi-vienna-osm-node-222"]');
  assert.equal(await p.locator('[data-tree-card="poi-vienna-osm-node-222"]').count(),0,'remote branches stay in the result list instead of growing the tree');
  assert((await p.locator('[data-chain-count="brand-chain-nordsee"]').innerText()).includes('已载入 1 家'));
  await p.locator('[data-map-sub="连锁餐饮"]').uncheck();assert.equal(await p.locator('[data-source-card="poi-vienna-osm-node-222"],[data-source-card="venue-nordsee-vienna"]').count(),0);assert(await p.locator('[data-source-card="poi-vienna-osm-node-111"]').count());
  console.log('PASS leaf-to-exact-pin highlight, dynamic brand leaves, parent selection drives results/search, bounded dynamic results, mixed chain category');
  await p.screenshot({path:'/tmp/map-tree-desktop.png'});
  const sidebar=await p.locator('#cityExplorer').boundingBox(),map=await p.locator('#travelMap').boundingBox();assert(sidebar.x+sidebar.width<=map.x);
  await p.reload();assert(await p.locator('[data-chain-card]').evaluateAll(es=>es.every(e=>!e.checked)));
  await p.setViewportSize({width:390,height:844});await open(p,'[data-layer-focus="venue-vienna-opera"]');
  assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  const mobileTree=await p.locator('#cityExplorer').boundingBox(),mobileMap=await p.locator('#travelMap').boundingBox();assert(mobileTree.y+mobileTree.height<=mobileMap.y);
  await p.screenshot({path:'/tmp/map-tree-mobile.png',fullPage:true});
  await p.goto(base+'/#map/at');assert.equal(await p.locator('[data-map-series]').count(),6);assert(await p.locator('[data-map-leaf]').count()>20);
  await p.evaluate(()=>localStorage.setItem('eurotrip-card-map-hu',JSON.stringify({series:{places:false},subs:{essential:{'机场':false}}})));
  await p.goto(base+'/#map/hu');assert(await p.locator('[data-map-layer="places"] [data-map-leaf]').evaluateAll(es=>es.every(e=>!e.checked)));assert.equal(await p.locator('[data-map-sub="机场"]').isChecked(),false);
  assert.deepEqual(errors,[]);
  console.log('PASS desktop sidebar, mobile stacked map, default dynamic search off on return, country tree, legacy preference migration and no JS errors');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

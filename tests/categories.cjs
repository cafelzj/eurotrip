const openMapBranch=require('./open-map-branch.cjs');
const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],badAssets=[];
  p.on('pageerror',e=>errors.push(e.stack));p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)badAssets.push([r.status(),r.url()]);});
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://overpass-api.de/**',r=>r.fulfill({contentType:'application/json',body:'{"elements":[]}'}));
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';
  for(const country of ['hu','at','de']){
   await p.goto(base+'/#guide/'+country);assert.equal(await p.locator('.hub-section').count(),5);assert((await p.locator('.hub-tabs').innerText()).includes('交通出行'));
   assert.deepEqual(await p.locator('.hub-tabs [data-hub-topic]').evaluateAll(es=>es.map(e=>e.dataset.hubTopic)),['all','transport','food','brands','places','facts']);
   assert.equal(await p.locator('[data-hub-topic="essential"]').count(),0);
   await p.locator('[data-hub-topic="facts"]').first().click();await p.selectOption('#hubKind','日常 / 应急');assert.equal(await p.locator('[data-knowledge-card="tip-common-help"]').count(),1);
   await p.locator('[data-hub-topic="transport"]').first().click();assert((await p.locator('#hubKind').innerText()).includes('乘车指南'));assert((await p.locator('#hubKind').innerText()).includes('机场'));
   await p.selectOption('#hubKind','地铁');assert(await p.locator('.hub-card').count());
   await p.selectOption('#hubKind','共享单车 / 滑板车');assert.equal(await p.locator('[data-knowledge-card="tip-'+country+'-shared-mobility"]').count(),1);
   await p.locator('[data-hub-topic="brands"]').first().click();await p.selectOption('#hubKind','支付 / 货币');assert(await p.locator('[data-knowledge-card="tip-'+country+'-money"]').count());
   await p.selectOption('#hubKind','医药服务');assert.equal(await p.locator('[data-knowledge-card="tip-'+country+'-pharmacy"]').count(),1);
   await p.selectOption('#hubKind','购物提醒');assert.equal(await p.locator('.hub-card').count(),2);
   await p.locator('[data-hub-topic="food"]').first().click();await p.selectOption('#hubKind','点餐 / 结账提醒');assert(await p.locator('[data-knowledge-card="tip-common-bill"]').count());
  }
  await p.goto(base+'/#guide/at/vienna?zone=essential');assert.equal(await p.locator('#hubKind').inputValue(),'日常 / 应急');assert.equal(await p.locator('[data-knowledge-card="tip-common-help"]').count(),1);
  await p.goto(base+'/#guide/at/vienna?zone=essential&kind='+encodeURIComponent('交通买票'));assert.equal(await p.locator('[data-hub-topic="transport"]').first().getAttribute('aria-pressed'),'true');assert((await p.evaluate(()=>location.hash)).includes('zone=transport'));
  for(const oldKind of ['交通买票','乘车提醒','交通','transport-rules','交通票务与乘车','交通 App / 线路图','交通APP/线路图','transit-tools']){
   await p.goto(base+'/#guide/at/vienna?zone=transport&kind='+encodeURIComponent(oldKind));
   assert.equal(await p.locator('#hubKind').inputValue(),'乘车指南');
   while(await p.locator('[data-hub-more]').count())await p.locator('[data-hub-more]').first().click();
   const ids=await p.locator('[data-knowledge-card]').evaluateAll(nodes=>nodes.map(n=>n.dataset.knowledgeCard));
   assert(ids.includes('tip-vienna-ticket-choice'));assert(ids.includes('tip-city-vienna'));assert(ids.includes('tip-vienna-transit-tools'));
   assert.equal(await p.locator('.hub-subgroup').count(),1);
  }
  for(const [oldKind,topic]of [['支付','brands'],['购物','brands'],['医药服务','brands'],['餐饮','food']]){await p.goto(base+'/#guide/at/vienna?zone=essential&kind='+encodeURIComponent(oldKind));assert.equal(await p.locator('[data-hub-topic="'+topic+'"]').first().getAttribute('aria-pressed'),'true');}
  await p.goto(base+'/#guide/hu/budapest?zone=transport&kind='+encodeURIComponent('地铁'));assert.equal(await p.locator('[data-knowledge-card="tip-budapest-metro"]').count(),1);
  await p.goto(base+'/#guide/hu/debrecen?zone=transport');assert.equal(await p.locator('#hubKind option[value="地铁"]').count(),0);await p.selectOption('#hubKind','共享单车 / 滑板车');assert.equal(await p.locator('[data-knowledge-card="tip-hu-shared-mobility"]').count(),1);
  console.log('PASS ordered categories, pharmacy migration and old links, scoped metro and shared mobility guides, shopping and dining');
  await p.goto(base+'/#guide/at/vienna?zone=transport');await p.selectOption('#hubKind','机场');const airport=p.locator('.hub-card').first();const id=await airport.getAttribute('data-knowledge-card');assert((await airport.getAttribute('data-card-theme'))==='transport');assert((await airport.locator('[data-map-card] b').innerText()).startsWith('交'));
  await airport.locator('[data-map-card]').click();assert.equal(await p.locator('[data-mini-layer]').count(),5);assert(await p.locator('[data-mini-layer="transport"]').isChecked());assert((await p.locator('.leaflet-popup-content').innerText()).includes('交'));
  await p.locator('#miniMapFull').click();await settle(p);assert.deepEqual(await p.locator('[data-map-series]').evaluateAll(es=>es.map(e=>e.dataset.mapSeries)),['transport','food','brands','places','facts']);assert.equal(await p.locator('[data-map-layer="essential"]').count(),0);assert(await p.locator('[data-map-layer="transport"] [data-map-leaf="'+id+'"]').count());await openMapBranch(p,'[data-layer-focus="'+id+'"]');await p.locator('[data-layer-focus="'+id+'"]').click();assert((await p.locator('.poi-popup').innerText()).includes('交通出行'));assert(await p.locator('.poi-marker.map-series-transport').first().evaluate(e=>{const hex=cardCategories.primary.find(c=>c.id==='transport').color.slice(1),rgb='rgb('+hex.match(/../g).map(n=>parseInt(n,16)).join(', ')+')';return getComputedStyle(e).color===rgb;}));
  await p.screenshot({path:'/tmp/categories-transport-map.png'});
  await p.goto(base+'/#guide/at/vienna?zone=food&kind='+encodeURIComponent('点餐 / 结账提醒'));await p.locator('[data-knowledge-card="tip-common-bill"] .hub-card-title').click();await settle(p);assert((await p.locator('.entity-description').innerText()).includes('服务费'));
  await p.evaluate(()=>sessionStorage.setItem('eurotrip-live-cards',JSON.stringify([{id:'poi-vienna-osm-node-987',type:'place',live:true,country:'at',city:'vienna',name:'迁移前的 Lidl 门店',description:'旧会话保存的门店',parentCard:'brand-lidl',point:{id:'osm-node-987',lat:48.2082,lon:16.3738,group:'supermarkets'},sources:[['https://www.openstreetmap.org/node/987','OSM']]}])));
  await p.goto(base+'/#card/poi-vienna-osm-node-987');await p.reload();assert.equal(await p.locator('[data-entity-id="poi-vienna-osm-node-987"]').count(),1);assert.equal(await p.evaluate(()=>CardGraph.nodes.get('poi-vienna-osm-node-987').category),'brands');assert(await p.locator('.entity-relations a[href="#card/brand-lidl"]').count());
  await p.goto(base+'/#guide/at/vienna?zone=transport');await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.screenshot({path:'/tmp/categories-transport-mobile.png'});
  assert.deepEqual(badAssets,[]);assert.deepEqual(errors,[]);console.log('PASS unified five map layers, transport pins and exact card links, migrated live sessions, mobile and no missing data assets');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

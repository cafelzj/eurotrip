const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs'),openMapBranch=require('./open-map-branch.cjs');
(async()=>{
 const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];let queries=0;
  p.on('pageerror',e=>errors.push(e.stack));
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await p.route('https://overpass-api.de/**',r=>{queries++;return r.fulfill({contentType:'application/json',body:'{"elements":[]}'});});
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';
  await p.goto(base+'/#china/jiangsu/xuzhou');
  assert.equal(await p.locator('#chinaProvince').inputValue(),'jiangsu');assert.equal(await p.locator('#chinaPrefecture').inputValue(),'xuzhou');
  assert.equal(await p.locator('#chinaCounty option').count(),6);assert((await p.locator('.destination-hero h1').innerText()).includes('徐州'));
  assert.equal(await p.locator('.hub-section').count(),5);assert.equal(await p.locator('[data-knowledge-card="food-suzhou-noodles"]').count(),0);
  assert(await p.evaluate(()=>KnowledgeHub.mapContext().mapUniverse.some(n=>n.id==='venue-xuzhou-airport'&&n.city==='suining')));
  await p.selectOption('#chinaPrefecture','wuxi');await settle(p);
  assert.equal(await p.locator('#chinaCounty option').count(),3);assert.equal(await p.locator('#chinaCounty').inputValue(),'wuxi');
  assert.equal(await p.evaluate(()=>location.hash),'#china/jiangsu/wuxi');
  assert(await p.evaluate(()=>KnowledgeHub.mapContext().mapUniverse.some(n=>n.id==='venue-yixing-highlight')));
  await p.selectOption('#chinaCounty','yixing');await settle(p);
  assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),'yixing');assert.equal(await p.locator('#chinaPrefecture').inputValue(),'wuxi');
  assert.equal(await p.evaluate(()=>location.hash),'#china/jiangsu/wuxi/yixing');
  assert((await p.locator('.breadcrumbs').innerText()).includes('无锡市'));assert((await p.locator('.breadcrumbs').innerText()).includes('宜兴市'));
  assert(await p.evaluate(()=>KnowledgeHub.mapContext().mapUniverse.every(n=>n.city==='yixing')));
  await p.goto(base+'/#map/yixing?focus=venue-yixing-highlight');
  assert((await p.locator('.poi-popup').innerText()).includes('宜兴竹海'));
  assert(await p.evaluate(()=>[...document.querySelectorAll('[data-map-leaf]')].every(e=>CardGraph.nodes.get(e.dataset.mapLeaf).city==='yixing')));
  await p.locator('.poi-popup a[href="#card/venue-yixing-highlight"]').click();await settle(p);
  assert.equal(await p.locator('.entity-breadcrumb a').last().getAttribute('href'),'#china/jiangsu/wuxi/yixing');
  assert((await p.locator('.entity-breadcrumb').innerText()).includes('无锡市'));
  const groups={suzhou:['kunshan','changshu','zhangjiagang','taicang'],xuzhou:['fengxian','peixian','suining','xinyi','pizhou'],wuxi:['jiangyin','yixing']};
  for(const [city,counties]of Object.entries(groups)){
   await p.goto(base+'/#china/jiangsu/'+city);
   for(const county of counties){
    await p.selectOption('#chinaCounty',county);await settle(p);
    assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),county);
    assert(await p.evaluate(id=>{const nodes=KnowledgeHub.mapContext().mapUniverse;return nodes.length>=3&&nodes.every(n=>n.city===id);},county));
    await p.reload();assert.equal(await p.locator('#chinaCounty').inputValue(),county);
   }
   await p.selectOption('#chinaCounty',city);await settle(p);assert.equal(await p.locator('.knowledge-hub').getAttribute('data-scope'),city);
  }
  await p.goto(base+'/#china/jiangsu/wuxi');await p.goto(base+'/#card/venue-suzhou-museum');
  assert((await p.locator('.entity-breadcrumb a').first().getAttribute('href')).startsWith('#china/jiangsu/suzhou'));
  await p.goto(base+'/#china/wuxi');await settle(p);assert.equal(await p.evaluate(()=>location.hash),'#china/jiangsu/wuxi');
  await p.goto(base+'/#china/yixing');await settle(p);assert.equal(await p.evaluate(()=>location.hash),'#china/jiangsu/wuxi/yixing');
  await p.selectOption('#chinaPrefecture','xuzhou');await settle(p);assert.equal(await p.locator('#chinaCounty').inputValue(),'xuzhou');
  await p.goto(base+'/#map/xuzhou');await openMapBranch(p,'[data-layer-focus="venue-xuzhou-airport"]');await p.locator('[data-layer-focus="venue-xuzhou-airport"]').click();assert((await p.locator('.poi-popup').innerText()).includes('徐州观音国际机场'));
  await p.goto(base+'/#china/jiangsu/wuxi/yixing');await p.screenshot({path:'/tmp/jiangsu-hierarchy-desktop.png'});
  await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.locator('#chinaMode').click();assert.equal(await p.locator('[data-nav-city]').count(),3);const menu=await p.locator('#chinaMenu').boundingBox();assert(menu.x>=0&&menu.x+menu.width<=390);await p.keyboard.press('Escape');
  await p.screenshot({path:'/tmp/jiangsu-hierarchy-mobile.png'});
  assert.equal(queries,0);assert.deepEqual(errors,[]);
  console.log('PASS Jiangsu prefectures, all eleven counties, parent aggregation and county isolation, canonical/legacy URLs, scoped maps, cross-city return links, native selectors and mobile');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});

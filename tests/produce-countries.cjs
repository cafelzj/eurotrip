const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs/promises');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true}),errors=[],bad=[];
 p.on('pageerror',e=>errors.push(e.stack));p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)bad.push(r.url());});
 await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:3016';
 for(const [id,name,term,item]of [['de','德国','Spargel','asparagus'],['at','奥地利','Marille','apricot'],['hu','匈牙利','alma','apple']]){
  await p.goto(base+'/#produce/'+id);assert.equal(await p.locator('.produce-country-picker a[aria-current="page"]').getAttribute('href'),'#produce/'+id);
  assert.equal(await p.locator('.produce-region-grid article').count(),6);assert.equal(await p.locator('[data-produce-chart]').count(),7);
  assert((await p.locator('.supply-coverage').innerText()).includes(name+'全国'));assert.equal(await p.locator('.floating-map').isVisible(),false);
  await p.fill('[data-produce-filter="query"]',term);assert.equal(await p.locator('[data-produce-food="'+item+'"]').count(),1);await p.locator('[data-produce-reset]').click();
  for(const category of ['grain','fruit','vegetable','meat','aquatic','oil','spice','dairy','eggs','nuts','sweetener','drink']){await p.selectOption('[data-produce-filter="category"]',category);assert(await p.locator('[data-produce-food]').count(),id+' '+category);}
  await p.locator('[data-produce-reset]').click();await p.fill('[data-produce-filter="query"]','小麦');await p.locator('[data-produce-food="wheat"]>summary').click();assert((await p.locator('[data-produce-food="wheat"] .produce-item-statistics').innerText()).includes(name+'全国'));
  await p.locator('[data-supply-mode="countries"]').click();assert.equal(await p.locator('[data-supply-line]').count(),3);assert.deepEqual(await p.locator('[data-supply-readout]>div>span').allTextContents(),['德国','奥地利','匈牙利']);
  const count=await p.locator('[data-supply-readout] strong').allTextContents();assert.deepEqual(count,['21,536 千吨','1,745 千吨','5,942 千吨']);
  await p.selectOption('[data-supply-indicator]','perCapita');assert((await p.locator('[data-supply-readout]').innerText()).includes('千克 / 人 / 年'));
  const promise=p.waitForEvent('download');await p.locator('[data-supply-save]').click();const svg=await fs.readFile(await (await promise).path(),'utf8');
  const parsed=await p.evaluate(xml=>{const d=new DOMParser().parseFromString(xml,'image/svg+xml');return {errors:d.querySelectorAll('parsererror').length,metadata:JSON.parse(d.querySelector('metadata').textContent)};},svg);assert.equal(parsed.errors,0);assert.equal(parsed.metadata.series.length,3);assert.equal(parsed.metadata.sources.length,3);assert.deepEqual(parsed.metadata.series.map(s=>s.scope),['德国全国','奥地利全国','匈牙利全国']);assert(!svg.includes('NaN'));
  await p.selectOption('[data-supply-view]','latest');assert(await p.locator('[data-supply-mode="countries"]').isHidden());assert(await p.locator('[data-supply-line]').count());
  const download=p.waitForEvent('download');await p.locator('[data-produce-download="json"]').click();const file=await download,data=JSON.parse(await fs.readFile(await file.path(),'utf8'));assert.equal(file.suggestedFilename(),id+'-produce-and-energy.json');assert.equal(data.country.id,id);assert.equal(data.supply.scope,name+'全国');assert.equal(data.energy.trade.length,3);
  await p.locator('.produce-energy-balance>summary').click();assert.equal(await p.locator('.produce-energy-balance tbody tr').count(),3);assert((await p.locator('.produce-energy-balance').innerText()).includes('总热值'));
  await p.locator('[data-produce-source="eurostat-gas"]').first().click();assert(await p.locator('[data-source-id="eurostat-gas"]').evaluate(e=>e.open));const snap=p.locator('[data-source-id="eurostat-gas"] a[href^="data/snapshots/"]');assert.equal(await snap.count(),1);assert.equal((await p.request.get(base+'/'+await snap.getAttribute('href'))).status(),200);
 }
 await p.goto(base+'/#produce/at');await p.locator('#wordsMode').click();await p.waitForSelector('#vocabulary:visible');await p.locator('#produceMode').click();await p.waitForSelector('[data-produce-country="at"]');await p.reload();assert.equal(await p.locator('.produce-page').getAttribute('data-produce-country'),'at');
 await p.goto(base+'/#produce/budapest?section=supply');await p.waitForSelector('[data-produce-country="hu"]');assert.equal(await p.evaluate(()=>location.hash),'#produce/hu?section=supply');
 await p.goto(base+'/#produce/de');await p.screenshot({path:'/tmp/produce-germany-desktop.png',fullPage:false});
 for(const width of [390,320]){await p.setViewportSize({width,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.locator('[data-supply-mode="countries"]').click();assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.selectOption('[data-produce-filter="category"]','dairy');assert(await p.locator('[data-produce-food="milk"]').count());}
 await p.screenshot({path:'/tmp/produce-germany-mobile.png',fullPage:false});assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);
 console.log('PASS three country routes, local-language search, 12 food groups, 18 region profiles, scoped energy/food data, true three-country curves and SVG metadata, exports, official snapshots, last-country restore, legacy route and mobile');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

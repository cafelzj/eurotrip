const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs/promises');
const settle=require('./wait-for-route.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true}),errors=[],badAssets=[];let queries=0,downloads=0;
  page.on('pageerror',e=>errors.push(e.stack));page.on('download',()=>downloads++);
  page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)badAssets.push(r.url());});
  await page.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await page.route('https://overpass-api.de/**',r=>{queries++;return r.abort();});
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';
  await page.goto(base+'/#guide/hu/budapest');await page.locator('#miniMapToggle').click();assert(await page.locator('#miniMapPanel').isVisible());
  await page.locator('#produceMode').click();await settle(page);
  assert.equal(await page.evaluate(()=>location.hash),'#produce/budapest');assert.equal(await page.locator('#produceMode').getAttribute('aria-pressed'),'true');
  assert.equal(await page.locator('.mode-tabs .selected').count(),1);assert(await page.locator('#vocabulary').isHidden());assert(await page.locator('.floating-map').isHidden());assert.equal(await page.locator('#miniMapCanvas .leaflet-pane').count(),0);
  assert.equal(await page.locator('[data-produce-chart]').count(),4);assert.equal(await page.locator('[data-produce-food]').count(),12);assert((await page.locator('.produce-origin-note').innerText()).includes('不承诺'));
  await page.locator('[data-produce-more]').click();await page.locator('[data-produce-more]').click();assert.equal(await page.locator('[data-produce-food]').count(),60);assert(await page.locator('[data-produce-more]').isHidden());
  for(const category of ['grain','fruit','vegetable','meat','aquatic','oil','spice','dairy','eggs','nuts','sweetener','drink']){
   await page.selectOption('[data-produce-filter="category"]',category);
   const ids=await page.locator('[data-produce-food]').evaluateAll(nodes=>nodes.map(n=>n.dataset.produceFood));assert(ids.length>0);assert(await page.evaluate(({ids,category})=>ids.every(id=>produceFood.items.find(n=>n.id===id).category===category),{ids,category}));
  }
  assert.equal(await page.locator('#produce-cooking,[data-produce-jump="cooking"]').count(),0);assert(!(await page.locator('.produce-page').innerText()).includes('同样的食材，怎样吃出匈牙利味道'));
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="category"]','nuts');assert.equal(await page.locator('[data-produce-food="walnut"] .produce-food-icon').innerText(),'核桃');
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="feature"]','regional');assert(await page.locator('[data-produce-food="paprika-powder"]').count()>0);assert.equal(await page.locator('[data-produce-food="oats"]').count(),0);
  await page.selectOption('[data-produce-filter="category"]','spice');await page.fill('[data-produce-filter="query"]','塞格德');assert.equal(await page.locator('[data-produce-food]').count(),1);await page.locator('[data-produce-food="paprika-powder"]>summary').click();assert((await page.locator('.produce-feature-details').innerText()).includes('甜椒粉'));
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="category"]','aquatic');assert.equal(await page.locator('[data-produce-food]').count(),8);assert((await page.locator('[data-produce-food="carp"] .produce-food-category').innerText()).includes('淡水'));assert((await page.locator('[data-produce-food="shrimp"] .produce-food-category').innerText()).includes('海产'));
  await page.locator('.produce-indicator-guide>summary').click();assert.equal(await page.locator('.produce-indicator-guide tbody tr').count(),6);assert((await page.locator('.produce-indicator-guide').innerText()).includes('实际消费量与人均消费量'));
  await page.locator('[data-produce-reset]').click();await page.fill('[data-produce-filter="query"]','korte');assert.equal(await page.locator('[data-produce-food]').getAttribute('data-produce-food'),'pear');
  await page.fill('[data-produce-filter="query"]','alma');assert.equal(await page.locator('[data-produce-food]').getAttribute('data-produce-food'),'apple');
  await page.locator('[data-produce-food="apple"]>summary').click();assert((await page.locator('.produce-item-statistics').innerText()).includes('376,680'));assert((await page.locator('.produce-item-statistics').innerText()).includes('匈牙利全国'));
  await page.locator('[data-produce-food="apple"] [data-produce-source="fao-fbs"]').click();assert(await page.locator('[data-source-id="fao-fbs"]').evaluate(n=>n.open));assert.equal(await page.evaluate(()=>location.hash),'#produce/budapest');
  assert.equal(await page.locator('[data-source-id="fao-fbs"] .produce-source-variables li').count(),11);assert((await page.locator('[data-source-id="fao-fbs"]').innerText()).includes('已读取'));
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="origin"]','import');assert(await page.locator('[data-produce-food]').count()>0);assert(await page.locator('[data-produce-food="apple"]').count()===0);
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="category"]','fruit');await page.selectOption('[data-produce-filter="month"]','1');assert.equal(await page.locator('[data-produce-food]').count(),0);assert((await page.locator('.produce-empty').first().innerText()).includes('没有符合'));
  await page.locator('[data-produce-reset]').click();await page.selectOption('[data-produce-filter="method"]','fry');assert(await page.locator('[data-produce-food]').count()>0);
  await page.locator('.produce-season-panel>summary').click();assert(await page.locator('.produce-season-table').isVisible());
  const first=page.locator('[data-produce-chart="0"]');assert((await first.locator('.produce-bar-row').first().innerText()).includes('62.51'));
  await first.locator('[data-chart-year]').selectOption('0');assert((await first.locator('.produce-chart-period').innerText()).includes('2020'));
  await first.locator('[data-chart-mode]').selectOption('trend');await first.locator('[data-chart-series]').selectOption('0');assert.equal(await first.locator('.produce-bar-row').count(),4);assert((await first.locator('.produce-chart-period').innerText()).includes('能源净进口'));
  await first.locator('.produce-raw>summary').click();assert.equal(await first.locator('tbody tr').count(),1);assert((await first.locator('table').innerText()).includes('62.51'));
  const svgPromise=page.waitForEvent('download');await first.locator('[data-produce-save-chart]').click();const svg=await svgPromise,svgText=await fs.readFile(await svg.path(),'utf8');assert(svg.suggestedFilename().endsWith('.svg'));assert(svgText.includes('xmlns="http://www.w3.org/2000/svg"'));assert(svgText.includes('匈牙利全国'));assert(svgText.includes('2020–2023'));assert(svgText.includes('metadata'));assert(svgText.includes('d3f4efb3873ab6ebd5624d66b66d401ab63abb79'));assert(!svgText.includes('NaN'));
  const parsed=await page.evaluate(xml=>{const doc=new DOMParser().parseFromString(xml,'image/svg+xml');return {errors:doc.querySelectorAll('parsererror').length,rows:JSON.parse(doc.querySelector('metadata').textContent).rows.length};},svgText);assert.deepEqual(parsed,{errors:0,rows:4});
  const csvPromise=page.waitForEvent('download');await page.locator('[data-produce-download="csv"]').click();const csv=await fs.readFile(await (await csvPromise).path(),'utf8');assert(csv.includes('谷物进口'));assert(csv.includes('同年供需：小麦及制品'));assert(csv.includes('5942'));assert(csv.includes('metadata.json'));assert(csv.includes('2025'));
  for(let i=0;i<3;i++){await page.locator('#wordsMode').click();await page.waitForSelector('#vocabulary:visible');assert(await page.locator('#vocabulary').isVisible());await page.locator('#produceMode').click();await settle(page);}
  const before=downloads,jsonPromise=page.waitForEvent('download');await page.locator('[data-produce-download="json"]').click();const json=JSON.parse(await fs.readFile(await (await jsonPromise).path(),'utf8'));assert.equal(json.food.items.length,60);assert.equal(json.stats.charts.length,1);assert.equal(json.supply.products.length,53);assert.equal(downloads,before+1,'handlers must not accumulate on repeated visits');
  await page.locator('a[href="#guide/hu/budapest"]').first().click();await settle(page);assert.equal(await page.locator('.knowledge-hub').getAttribute('data-scope'),'budapest');
  await page.goto(base+'/#produce');await settle(page);assert.equal(await page.evaluate(()=>location.hash),'#produce/budapest');await page.reload();assert.equal(await page.locator('[data-produce-chart]').count(),4);
  for(const width of [390,320]){
   await page.setViewportSize({width,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile page overflows');
   await page.locator('#chinaMode').click();const menu=await page.locator('#chinaMenu').boundingBox();assert(menu.x>=0&&menu.x+menu.width<=width);await page.keyboard.press('Escape');
   await page.locator('[data-produce-jump="supply"]').click();await first.locator('.produce-raw>summary').click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'raw table must scroll within its own container');
   const box=await first.locator('.produce-bar-label').first().boundingBox();assert(box.width>200);await first.locator('.produce-raw>summary').click();
  }
  assert.equal(queries,0);assert.deepEqual(errors,[]);assert.deepEqual(badAssets,[]);
  console.log('PASS fourth navigation, map cleanup, 60 foods/filtering/diacritics/seasons, source links, year/indicator charts, raw tables, valid SVG/CSV/JSON exports, repeat visits, desktop/mobile');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

const {chromium}=require('playwright'),assert=require('node:assert/strict'),settle=require('./wait-for-route.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],bad=[];let overpass=0;
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)bad.push(r.url());});
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://overpass-api.de/**',r=>{overpass++;return r.fulfill({contentType:'application/json',body:'{"elements":[]}'});});
  const base=process.env.SITE_URL||'http://127.0.0.1:3016',go=async hash=>{await p.goto(base+'/'+hash);await settle(p);};
  await go('#guide/hu');await p.locator('#miniMapToggle').click();await p.locator('#miniMapCanvas .leaflet-pane').first().waitFor({state:'attached'});
  await p.locator('#planMode').click();await settle(p);await p.locator('.plan-page').waitFor();
  assert.equal(await p.locator('.mode-tabs .selected').count(),1);assert.equal(await p.locator('#planMode').getAttribute('aria-pressed'),'true');assert(await p.locator('#vocabulary').isHidden());assert(await p.locator('.floating-map').isHidden());assert.equal(await p.locator('#miniMapCanvas .leaflet-pane').count(),0);
  assert.equal(await p.locator('[data-plan-id]').count(),15);assert.equal(await p.locator('.plan-tabs a').count(),3);
  const audit=await p.evaluate(()=>{
   const areas=new Set(projectPlan.areas.map(a=>a.id)),ids=new Map(Object.entries(projectPlan).filter(([key])=>['features','roadmap','benchmarks'].includes(key)).map(([key,items])=>[key,new Set(items.map(x=>x.id))]));
   const failures=[];
   for(const [key,set]of ids){if(set.size!==projectPlan[key].length)failures.push('duplicate '+key);for(const n of projectPlan[key]){if(!areas.has(n.area))failures.push(n.id+' area');for(const id of n.benchmarks||[])if(!ids.get('benchmarks').has(id))failures.push(n.id+' benchmark');for(const id of n.roadmap||[])if(!ids.get('roadmap').has(id))failures.push(n.id+' roadmap');for(const [u]of n.links||[])if(u.startsWith('#card/')&&!CardStore.nodes.has(u.slice(6)))failures.push(u);}}
   const metrics=[...document.querySelectorAll('.plan-metrics strong')].map(e=>e.textContent);
   return {failures,metrics,cards:[...CardStore.nodes.values()].filter(n=>!n.live).length,words:words.length,foods:Object.values(produceCountries).reduce((sum,c)=>sum+(c.food||produceFood).items.length,0)};
  });assert.deepEqual(audit.failures,[]);assert.deepEqual(audit.metrics,[String(audit.cards),'4 国 / 13 城',String(audit.words),String(audit.foods)]);
  await p.fill('#planSearch','FAO');assert.equal(await p.locator('[data-plan-id]').count(),1);assert.equal(await p.locator('[data-plan-id]').getAttribute('data-plan-id'),'charts');assert.equal(await p.locator('#planCount').innerText(),'显示 1 / 15 项');
  await p.reload();assert.equal(await p.locator('#planSearch').inputValue(),'FAO');assert.equal(await p.locator('[data-plan-id]').count(),1);
  await p.locator('#planReset').click();await p.selectOption('#planArea','language');assert.equal(await p.locator('[data-plan-id]').count(),1);
  await p.locator('.plan-tabs a').filter({hasText:'计划实现'}).click();await p.locator('[data-plan-id="context-vocabulary"]').waitFor();assert.equal(await p.locator('#planArea').inputValue(),'language');assert.equal(await p.locator('[data-plan-id]').count(),1);
  await p.locator('#planReset').click();assert.equal(await p.locator('[data-plan-id]').count(),12);assert.equal(await p.locator('[data-plan-id="history"]').getAttribute('data-plan-priority'),'first');
  await p.locator('[data-plan-id="images"]>summary').click();await p.locator('[data-plan-id="images"] .plan-related a').filter({hasText:'TREK'}).click();await p.waitForURL('**/#plan?view=benchmarks&item=trek');
  assert(await p.locator('[data-plan-id="trek"]').evaluate(el=>el.open));assert.equal(await p.locator('[data-plan-id]').count(),12);assert((await p.locator('[data-plan-id="trek"]').innerText()).includes('本站现状'));assert.equal(await p.locator('[data-plan-id="trek"] a[href="https://github.com/liketrek/TREK"]').count(),1);
  await p.locator('[data-plan-id="trek"] .plan-related a').filter({hasText:'配准确'}).click();await p.waitForURL('**/#plan?view=roadmap&item=images');assert(await p.locator('[data-plan-id="images"]').evaluate(el=>el.open));
  await go('#plan?view=benchmarks&q=MIT');assert((await p.locator('.plan-results').innerText()).includes('Grapher'));
  await go('#plan?view=benchmarks&q=美食与特产');
  assert.deepEqual((await p.locator('[data-plan-id]').evaluateAll(els=>els.map(el=>el.dataset.planId))).sort(),['howtocook','localbite','openfoodfacts','recipe-collection','worldcuisines']);
  assert.equal(await p.locator('#planCount').innerText(),'显示 5 / 12 项');
  await p.locator('[data-plan-id="localbite"]>summary').click();const localbite=await p.locator('[data-plan-id="localbite"]').innerText();assert(localbite.includes('1,800')&&localbite.includes('115')&&localbite.includes('东京'));
  await p.locator('[data-plan-id="localbite"] .plan-related a').filter({hasText:'扩展目的地'}).click();await p.waitForURL('**/#plan?view=roadmap&item=coverage');
  assert(await p.locator('[data-plan-id="coverage"]').evaluate(el=>el.open));assert.equal(await p.locator('[data-plan-id="coverage"] .plan-related a').count(),4);
  await p.locator('[data-plan-id="coverage"] .plan-related a').filter({hasText:'WorldCuisines'}).click();await p.waitForURL('**/#plan?view=benchmarks&item=worldcuisines');assert(await p.locator('[data-plan-id="worldcuisines"]').evaluate(el=>el.open));
  await go('#plan?view=features&q=不存在的方案词');assert.equal(await p.locator('[data-plan-id]').count(),0);assert(await p.locator('.plan-empty').isVisible());await p.locator('#planReset').click();assert.equal(await p.locator('[data-plan-id]').count(),15);
  // Internal experience links must resolve to real implemented pages, not merely valid hashes.
  const urls=await p.evaluate(()=>[...new Set(projectPlan.features.flatMap(n=>n.links||[]).map(x=>x[0]).filter(x=>x.startsWith('#')))]);
  for(const hash of urls){await go(hash);assert.equal(await p.locator('.entity-missing').count(),0,hash);assert(await p.locator('#vocabulary:visible,.knowledge-hub,.entity-detail,.card-manager,.produce-page,.map-focused').count(),hash);}
  await go('#map/vienna');await p.locator('#planMode').click();await settle(p);assert.equal(await p.locator('#travelMap').count(),0);assert.equal(await p.locator('.map-focused').count(),0);
  await go('#plan?view=roadmap&q=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E');assert.equal(await p.locator('.plan-page img').count(),0);assert(await p.locator('.plan-empty').isVisible());
  await go('#plan?view=benchmarks&item=owid');assert((await p.locator('[data-plan-id="owid"] .plan-license').innerText()).includes('不再使用 MIT'));
  await go('#plan');await p.screenshot({path:'/tmp/eurotrip-plan-desktop.png',fullPage:false});
  for(const width of [768,390,320]){await p.setViewportSize({width,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no horizontal overflow '+width);await p.locator('.plan-tabs a').filter({hasText:'类似产品'}).click();await p.locator('[data-plan-id="trek"]>summary').click();assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'open comparison fits '+width);await p.locator('#travelMode').click();assert(await p.locator('#countryMenu').isVisible());await p.keyboard.press('Escape');await p.locator('#chinaMode').click();assert(await p.locator('#chinaMenu').isVisible());await p.keyboard.press('Escape');await p.locator('#planMode').click();await settle(p);}
  await p.setViewportSize({width:390,height:844});await p.screenshot({path:'/tmp/eurotrip-plan-mobile.png',fullPage:false});
  assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);
  console.log('PASS plan navigation, dynamic inventory, honest status, implementation links, search/filter/reload, 12 benchmarks including five food resources with verified scope and roadmap links, map cleanup, escaping and responsive menus');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

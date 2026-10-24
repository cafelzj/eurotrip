const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs/promises');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true}),errors=[];
 p.on('pageerror',e=>errors.push(e.stack));await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:3014';
 const openManager=async region=>{const china=region==='china';await p.locator(china?'#chinaMode':'#travelMode').click();await p.locator(`[data-nav-manager="${region}"]`).click();await p.waitForSelector(`[data-manager-region="${region}"]`);};
 await p.goto(base+'/#guide/at');await openManager('europe');
 assert.equal(await p.locator('[data-manager-country] option[value="cn"]').count(),0);
 assert.equal(await p.locator('[data-manager-city] option[value="suzhou"]').count(),0);
 await p.selectOption('[data-manager-country]','at');await p.selectOption('[data-manager-secondary]','world-heritage');
 const europeUrl=await p.evaluate(()=>location.hash);
 await p.locator('#chinaMode').click();assert(await p.locator('#chinaMenu button').last().evaluate(e=>e.dataset.navManager==='china'));
 await p.keyboard.press('End');assert(await p.locator('[data-nav-manager="china"]').evaluate(e=>e===document.activeElement));await p.keyboard.press('Enter');
 await p.waitForSelector('[data-manager-region="china"]');assert.equal(await p.locator('#chinaMode').getAttribute('aria-pressed'),'true');assert.equal(await p.locator('#travelMode').getAttribute('aria-pressed'),'false');
 assert((await p.locator('#chinaMode').innerText()).includes('卡片管理'));assert(!(await p.locator('#travelMode').innerText()).includes('卡片管理'));
 assert.deepEqual(await p.locator('[data-manager-country] option').evaluateAll(es=>es.map(e=>e.value)),['','cn']);
 assert(await p.locator('[data-manager-city] option[value="suzhou"]').count());assert(await p.locator('[data-manager-city] option[value="kunshan"]').count());assert.equal(await p.locator('[data-manager-city] option[value="vienna"]').count(),0);
 // Inspect every page, so later rows cannot leak cards from the other region.
 const seen=[];await p.selectOption('[data-manager-size]','100');
 do{const ids=await p.locator('[data-manager-card]').evaluateAll(es=>es.map(e=>e.dataset.managerCard));seen.push(...ids);assert(await p.evaluate(ids=>ids.every(id=>CardGraph.countryIds(CardGraph.nodes.get(id)).includes('cn')),ids));if(await p.locator('[data-manager-next]').isDisabled())break;await p.locator('[data-manager-next]').click();}while(true);
 const expected=await p.evaluate(()=>[...CardGraph.nodes.values()].filter(n=>!n.live&&!n.collectionHidden&&CardGraph.countryIds(n).includes('cn')).map(n=>n.id).sort());assert.deepEqual(seen.sort(),expected);
 await p.locator('[data-manager-reset]').click();await p.fill('[data-manager-search]','heritage-vienna-centre');assert.equal(await p.locator('[data-manager-card]').count(),0);
 await p.locator('[data-manager-reset]').click();await p.selectOption('[data-manager-city]','suzhou');await p.fill('[data-manager-search]','园林');assert(await p.locator('[data-manager-card]').count());
 const chinaUrl=await p.evaluate(()=>location.hash),id=await p.locator('[data-manager-card]').first().getAttribute('data-manager-card');
 await p.locator('[data-manager-card]').first().locator('.manager-card-link').click();await p.waitForSelector('.entity-detail');assert.equal(await p.locator('.entity-breadcrumb a').first().getAttribute('href'),chinaUrl);
 await p.reload();assert.equal(await p.locator('.entity-breadcrumb a').first().getAttribute('href'),chinaUrl);await p.locator('.entity-breadcrumb a').first().click();await p.waitForSelector('[data-manager-region="china"]');assert.equal(await p.locator('[data-manager-city]').inputValue(),'suzhou');assert.equal(await p.locator('[data-manager-search]').inputValue(),'园林');assert(await p.locator(`[data-manager-card="${id}"]`).count());
 const download=p.waitForEvent('download');await p.locator('[data-manager-export]').click();const file=await download,csv=await fs.readFile(await file.path(),'utf8');assert.equal(file.suggestedFilename(),'eurotrip-china-cards.csv');assert(csv.includes('园林'));assert(!csv.includes('heritage-vienna-centre'));assert(!csv.includes('heritage-budapest'));
 await openManager('europe');assert.equal(await p.evaluate(()=>location.hash),europeUrl);assert.equal(await p.locator('[data-manager-country]').inputValue(),'at');assert.equal(await p.locator('[data-manager-secondary]').inputValue(),'world-heritage');
 await p.fill('[data-manager-search]',id);assert.equal(await p.locator('[data-manager-card]').count(),0);await openManager('china');assert.equal(await p.evaluate(()=>location.hash),chinaUrl);
 assert((await p.locator('.manager-heading>a').getAttribute('href')).startsWith('#china/'));
 // Foreign filter parameters are discarded on direct visits, including reloads.
 for(const [path,country,city,region]of [['#card-manager','cn','suzhou','europe'],['#card-manager/china','at','vienna','china']]){
  await p.goto(base+'/'+path+'?country='+country+'&city='+city);await p.reload();assert.equal(await p.locator('[data-manager-country]').inputValue(),'');assert.equal(await p.locator('[data-manager-city]').inputValue(),'');assert.equal(await p.locator('.card-manager').getAttribute('data-manager-region'),region);
 }
 await p.goto(base+'/#card-manager/china');await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.screenshot({path:'/tmp/china-card-manager-mobile.png'});
 await p.setViewportSize({width:1440,height:1000});await p.screenshot({path:'/tmp/china-card-manager-desktop.png'});
 assert.deepEqual(errors,[]);console.log('PASS independent Europe/China menus, all-page ownership isolation, scoped filters/search/export, separate saved filters, detail return/reload, invalid foreign filters and mobile');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

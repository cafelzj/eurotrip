const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto'),{chromium}=require('playwright');
const ctx={window:{}};vm.createContext(ctx);for(const path of ['data/flavors.js','data/flavor-counties.js'])vm.runInContext(fs.readFileSync(path,'utf8'),ctx);
const data=ctx.window.flavorCatalog,geo=ctx.window.flavorCounties,audit=JSON.parse(fs.readFileSync('research/flavors/county-maps.json','utf8'));
assert.equal(Object.values(geo.cities).reduce((n,c)=>n+c.regions.length,0),2010);
assert.equal(audit.sources.length,234);
for(const source of audit.sources){const city=geo.cities[source.adcode],raw=fs.readFileSync(city.map);assert.equal(crypto.createHash('sha256').update(raw).digest('hex'),source.svgSha256);assert.equal((raw.toString().match(/data-flavor-county=/g)||[]).length,city.regions.length);assert(!/href="https?:|<script|onclick=/.test(raw));}
for(const [id,codes]of Object.entries(geo.itemCounties)){const item=data.items.find(i=>i.id===id);assert(item);for(const code of codes){const parent=Object.values(geo.cities).find(c=>c.regions.some(r=>r.adcode===code)),county=parent.regions.find(r=>r.adcode===code);assert.equal(parent.province,item.province);assert.equal(parent.city,item.city);assert(item.locality?.includes(county.name)||item.district===county.name||item.districts?.includes(county.name));}}
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await b.newPage({viewport:{width:1440,height:1100}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:4180',go=async query=>{await p.goto(base+'/#flavors/shandong?'+query);await p.waitForSelector('[data-manager-count]');};
 await go('city='+encodeURIComponent('济南'));await p.waitForSelector('#flavorCountyMap svg');
 assert.equal(await p.locator('#flavorCountyPicker [data-flavor-county-choice]').count(),geo.cities['370100'].regions.length+2);
 await p.locator('[data-flavor-county-choice="370124"]').click();await p.waitForFunction(()=>location.hash.includes('county=370124')&&document.querySelector('[data-flavor-county-choice="370124"][aria-current]'));
 const expected=data.items.filter(i=>(geo.itemCounties[i.id]||[]).includes(370124));
 assert.equal(await p.locator('.flavor-card').count(),Math.min(24,expected.length));assert(expected.length>0);
 assert(await p.locator('.flavor-card').evaluateAll(es=>es.every(e=>e.querySelector('.ui-card-meta small').textContent.includes('平阴县'))));
 await p.reload();await p.waitForSelector('#flavorCountyMap [data-flavor-county="370124"][aria-current]');
 await p.locator('#flavorCountyMap [data-flavor-county="370126"]').focus();await p.keyboard.press('Enter');await p.waitForFunction(()=>location.hash.includes('county=370126'));
 await p.locator('[data-flavor-county-choice="unspecified"]').click();await p.waitForSelector('[data-flavor-county-choice="unspecified"][aria-current]');
 assert(await p.locator('.flavor-card').evaluateAll(es=>es.every(e=>e.querySelector('.ui-card-meta small').textContent.includes('县区待明确'))));
 await p.locator('[data-flavor-city="青岛"]').click();await p.waitForSelector('#flavorCountyMap [data-flavor-county="370211"]');assert(!p.url().includes('county='));
 await p.goBack();await p.waitForSelector('[data-flavor-county-choice="unspecified"][aria-current]');
 for(const width of [1440,1024,768,390,320]){await p.setViewportSize({width,height:1100});await go('city='+encodeURIComponent('济南'));await p.waitForSelector('#flavorCountyMap svg');assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'county picker fits '+width);if(width===1440||width===390)await p.screenshot({path:'/tmp/flavor-counties-'+width+'.png',fullPage:false});}
 await go('city='+encodeURIComponent('济南')+'&county=999999');assert.equal(await p.locator('[data-flavor-county-choice="all"]').getAttribute('aria-current'),'true');
 await p.route('**/assets/maps/flavors/counties/*.svg',r=>r.abort());await p.reload();await p.waitForFunction(()=>document.querySelector('#flavorCountyMap')?.textContent.includes('仍可用县区清单'));await p.locator('[data-flavor-county-choice="370124"]').click();await p.waitForSelector('[data-flavor-county-choice="370124"][aria-current]');assert(await p.locator('.flavor-card').count()>0);
 await p.goto(base+'/#flavors/beijing?district='+encodeURIComponent('延庆区'));await p.waitForSelector('.flavor-card');assert.equal(await p.locator('.flavor-card').count(),data.items.filter(i=>(geo.itemCounties[i.id]||[]).includes(110119)).length,'municipal districts include every explicitly attributed card');
 assert.deepEqual(errors,[]);console.log('PASS 234 maps / 2010 counties, explicit card attribution, city/county/list/map counts, keyboard, reload/back, unknown county, missing-map fallback and five widths');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

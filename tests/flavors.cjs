const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright');
const ctx={window:{}};vm.createContext(ctx);for(const file of['data/flavors.js','data/flavor-map-regions.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const data=ctx.window.flavorCatalog,regions=ctx.window.flavorMapRegions,review=JSON.parse(fs.readFileSync('docs/flavor-source-review.json','utf8'));
assert.deepEqual(Array.from(data.provinces,p=>p.name),['北京','山东','安徽','江苏','浙江','上海','山西']);
assert.equal(new Set(data.items.map(i=>i.id)).size,data.items.length);
assert.equal(new Set(data.items.map(i=>i.province+'|'+i.city+'|'+i.name)).size,data.items.length);
for(const item of data.items){
 assert(data.provinces.some(p=>p.id===item.province));assert(data.categories.some(t=>t.id===item.type));
 assert(item.city&&item.name&&item.description.length>30&&item.detail.length>30,item.name+' has useful food descriptions');assert(item.sources.length>0);
 for(const id of item.sources){const s=data.sources[id];assert(s&&typeof s.name==='string'&&/^https?:\/\//.test(s.url));assert(review.sources.some(r=>r.id===id&&r.read&&/^[a-f0-9]{64}$/.test(r.evidenceSha256)),item.name+' has read evidence');}
 for(const protein of item.proteins||[])assert(data.proteins.includes(protein));const geo=regions[item.province];
 if(geo.level==='city')assert(item.city==='全省'||geo.regions.some(r=>r.name===item.city),'current city attribution for '+item.name);
 if(item.district)assert(geo.level==='district'&&geo.regions.some(r=>r.name===item.district));
}
let cityCount=0;
for(const province of data.provinces){
 const cities=regions[province.id].level==='city'?regions[province.id].regions.map(r=>r.name):[province.name];
 for(const city of cities){cityCount++;assert(data.items.filter(i=>i.province===province.id&&i.city===city).length>=11,province.name+' '+city+' needs more than ten entries');}
 const svg=fs.readFileSync('assets/maps/flavors/'+province.id+'.svg','utf8');assert.equal((svg.match(/data-flavor-region=/g)||[]).length,regions[province.id].regions.length);assert(!/(?:href|src)="https?:|<script|onload=|onclick=/.test(svg));assert(review.provinceMaps.some(r=>r.province===province.id&&r.features===regions[province.id].regions.length));
}
assert.equal(cityCount,69);assert.equal(Object.values(regions).reduce((n,p)=>n+p.regions.length,0),99);
const coverage=JSON.parse(fs.readFileSync('docs/flavor-city-coverage.json','utf8'));
assert.equal(coverage.cities.length,69);
for(const row of coverage.cities)assert.equal(row.count,data.items.filter(i=>i.province===row.province&&i.city===row.city).length,'coverage agrees with live catalog');
for(const type of data.categories)assert(data.items.some(i=>i.type===type.id));
assert.equal(data.categories.find(c=>c.id==='staples').name,'面食');
assert.equal(data.categories.find(c=>c.id==='drinks').name,'饮品');assert(!data.categories.some(c=>c.id==='milktea'));assert(!data.items.some(i=>i.type==='milktea'));
for(const name of ['老北京炸酱面','片儿川','锅盖面','大同猪肉臊子刀削面','忻州荞面饸饹','三河米饺','福山拉面','开洋葱油拌面'])assert.equal(data.items.find(i=>i.name===name)?.type,'staples',name+' belongs to the dedicated staples category');
for(const name of ['定襄蒸肉','溱潼鱼饼','平定豆丝粉条'])assert.equal(data.items.find(i=>i.name===name)?.type,'dishes',name+' is a prepared dish');
for(const name of['雁门金波黄酒','上海辣酱油','糟卤','三河米饺','白云春毫','桐城小花','霍山黄大茶'])assert(data.items.some(i=>i.name===name),'verified local product: '+name);
assert(data.items.some(i=>i.type==='drinks'&&i.kind.includes('冲泡')));assert(data.items.some(i=>i.type==='drinks'&&i.kind.includes('现制')));
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],external=[],mapRequests=[];
 p.on('pageerror',e=>errors.push(e.message));const base=process.env.SITE_URL||'http://127.0.0.1:4173',origin=new URL(base).origin;
 await p.route('**/*',r=>{const u=r.request().url();if(u.includes('/assets/maps/'))mapRequests.push(u);if(new URL(u).origin!==origin){external.push(u);return r.abort();}return r.continue();});
 const ready=()=>p.waitForSelector('.flavor-card');const visit=async hash=>{await p.goto(base+'/'+hash);await ready();};
 await visit('#flavors');assert.equal(await p.locator('#flavorsMode').getAttribute('aria-pressed'),'true');
 assert.equal(await p.locator('.flavor-provinces nav a').count(),8);assert.equal(await p.locator('#flavorMap, #flavorProvinceMap').count(),0,'choose a province from the list before showing a city map');
 assert.equal(await p.locator('.flavor-card').count(),24);await p.locator('#flavorMore').click();assert.equal(await p.locator('.flavor-card').count(),48);
 for(const region of data.provinces){await visit('#flavors/'+region.id);await p.waitForSelector('#flavorProvinceMap[data-province="'+region.id+'"] svg');assert.equal(await p.locator('#flavorProvinceMap [data-flavor-region]').count(),regions[region.id].regions.length);assert.equal(await p.locator('[data-flavor-city]').count(),regions[region.id].regions.length+1);}
 await visit('#flavors/shanxi');await p.locator('[data-flavor-city="忻州"]').click();await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'忻州');assert(await p.locator('[data-flavor-id="sx-jinbo-huangjiu"]').isVisible());
 await p.waitForSelector('#flavorProvinceMap [data-flavor-region="忻州"][aria-current]');assert.equal(await p.locator('[data-flavor-city="忻州"]').getAttribute('aria-current'),'true');
 await p.locator('#flavorProvinceMap [data-flavor-region="太原"]').focus();await p.keyboard.press('Enter');await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'太原');await p.reload();await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'太原');
 await visit('#flavors/beijing');await p.waitForSelector('#flavorProvinceMap [data-flavor-label="延庆区"]');await p.locator('#flavorProvinceMap [data-flavor-label="延庆区"]').click();await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'延庆区');assert((await p.evaluate(()=>location.hash)).includes('district='));assert.equal(await p.locator('.flavor-card').count(),data.items.filter(i=>i.district==='延庆区').length);assert((await p.locator('#flavorMapScope').innerText()).includes('全市'));
 const emptyCity=data.provinces.flatMap(province=>regions[province.id].level==='city'&&data.items.some(i=>i.province===province.id&&i.type==='drinks')?regions[province.id].regions.map(r=>({province:province.id,city:r.name})):[]).find(r=>!data.items.some(i=>i.province===r.province&&i.city===r.city&&i.type==='drinks'));assert(emptyCity);
 await visit('#flavors/'+emptyCity.province+'?type=drinks');await p.locator('[data-flavor-city="'+emptyCity.city+'"]').click();await p.waitForSelector('.flavor-empty');assert.equal(await p.locator('#flavorCity').inputValue(),emptyCity.city);await p.reload();await p.waitForSelector('.flavor-empty');assert.equal(await p.locator('#flavorCity').inputValue(),emptyCity.city,'empty city remains selected on reload');
 await visit('#flavors?type=milktea');assert.equal(await p.locator('[data-flavor-type=drinks]').getAttribute('aria-pressed'),'true','old tea links open merged drinks');assert.equal(await p.locator('[data-flavor-type=milktea]').count(),0);await visit('#flavors?type=drinks');assert.equal(await p.locator('.flavor-card').count(),Math.min(24,data.items.filter(i=>i.type==='drinks').length));assert((await p.locator('[data-flavor-id="zj-xiangpiaopiao"] .flavor-card-tags').innerText()).includes('冲泡'));
 await visit('#flavors/shanxi?type=staples&city='+encodeURIComponent('太原'));assert(await p.locator('#flavorTypeNote').isVisible());assert((await p.locator('.flavor-card h3').allTextContents()).includes('太原刀拨面'));await p.locator('[name="flavorProtein"][value="羊"]').check();await ready();assert.equal(await p.locator('.flavor-card').count(),data.items.filter(i=>i.province==='shanxi'&&i.city==='太原'&&i.type==='staples'&&i.proteins?.includes('羊')).length);await p.reload();await ready();assert.equal(await p.locator('[name="flavorProtein"]:checked').inputValue(),'羊','staples ingredient filter survives reload');await p.locator('[data-flavor-type="tea"]').click();assert(await p.locator('#flavorTypeNote').isHidden());assert(await p.locator('.flavor-proteins').isHidden());
 await visit('#flavors/beijing?type=tea');await p.locator('.flavor-card details summary').first().click();assert(await p.locator('.flavor-origin-note').first().isVisible());assert((await p.locator('.flavor-sources a').first().getAttribute('rel')).includes('noopener'));
 await p.locator('.flavor-provinces nav a[href^="#flavors/jiangsu"]').click();await ready();assert((await p.evaluate(()=>location.hash)).includes('type=tea'),'province list retains category');await p.selectOption('#flavorCity','苏州');await ready();assert(await p.locator('.flavor-card h3').allTextContents().then(t=>t.some(x=>x.includes('碧螺春'))));await p.reload();await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'苏州');
 await p.locator('[data-flavor-reset]').first().click();await p.locator('[data-flavor-type="dishes"]').click();await p.locator('[name="flavorProtein"][value="鸭"]').check();assert(await p.locator('.flavor-card').count()>0);assert(await p.locator('.flavor-card').evaluateAll(es=>es.every(e=>e.querySelector('.flavor-card-tags').textContent.includes('鸭'))));await p.fill('#flavorSearch','没有这道菜');await p.waitForSelector('.flavor-empty');await p.locator('.flavor-empty [data-flavor-reset]').click();await ready();
 await visit('#flavors/shandong');await p.locator('.flavor-provinces nav a[href^="#flavors/anhui"]').click();await ready();await p.goBack();await ready();assert((await p.locator('.flavor-province-intro h2').innerText()).includes('山东'));
 for(const width of[1440,1024,768,390,320]){
  await p.setViewportSize({width,height:1000});await visit('#flavors/anhui');await p.waitForSelector('#flavorProvinceMap svg');assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'fits '+width);
  const [list,map]=await p.locator('.flavor-city-picker > *').evaluateAll(es=>es.map(e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,bottom:r.bottom,right:r.right};}));assert(width<=700?map.y>=list.bottom:map.x>=list.right,'city list and map fit '+width);assert.equal(await p.locator('#flavorProvinceMap svg').count(),1);
  assert(await p.locator('.flavor-provinces nav a[aria-current]').evaluate(e=>getComputedStyle(e).color==='rgb(255, 255, 255)'));await p.locator('.flavor-card details summary').first().click();assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));if([1440,390].includes(width))await p.screenshot({path:'/tmp/flavors-'+width+'.png',fullPage:false});
 }
 await p.route('**/assets/maps/flavors/*.svg',r=>r.abort());await p.reload();await ready();await p.waitForFunction(()=>document.querySelector('#flavorProvinceMap').textContent.includes('仍可用城市清单'));await p.locator('[data-flavor-city="铜陵"]').click();await ready();assert.equal(await p.locator('#flavorCity').inputValue(),'铜陵');assert(await p.locator('.flavor-card').count()>=11,'list works without a map');
 assert(!mapRequests.some(u=>u.includes('china-provinces.svg')),'province selection does not request a national map');assert.deepEqual(errors,[]);assert(external.every(u=>/fonts\.googleapis\.com/.test(u)),'catalog has no external map, media, data or search dependency');
 console.log('PASS '+data.items.length+' sourced entries; 69 cities each >10; province/city lists, seven maps/99 regions, keyboard, empty-city state, filters, URL/reload/back, five widths and map failure fallback');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

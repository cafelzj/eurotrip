const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright');
const ctx={window:{}};vm.createContext(ctx);for(const file of['data/flavors.js','data/flavor-map-regions.js','data/flavor-counties.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const data=ctx.window.flavorCatalog,regions=ctx.window.flavorMapRegions,review=JSON.parse(fs.readFileSync('research/flavors/sources.json','utf8'));
for(const source of review.sources.filter(r=>r.evidenceFile))assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(source.evidenceFile)).digest('hex'),source.readingNotesSha256,'saved source evidence agrees with '+source.id);
assert.deepEqual(Array.from(data.provinces,p=>p.name),['北京','山东','安徽','江苏','浙江','上海','山西','河南','河北','湖南','湖北','福建','辽宁','吉林','黑龙江','江西','广西','广东','陕西','甘肃']);
assert.equal(new Set(data.items.map(i=>i.id)).size,data.items.length);
assert.equal(new Set(data.items.map(i=>i.province+'|'+i.city+'|'+i.name)).size,data.items.length);
for(const item of data.items){
 assert(data.provinces.some(p=>p.id===item.province));assert(data.categories.some(t=>t.id===item.type));
 assert(item.city&&item.name&&item.description.length>0&&item.detail.length>30);if(item.verificationStatus==='pending')assert(item.verificationNote&&item.description.startsWith('待核实线索：'));else {assert(item.description.length>30,item.name);assert(item.sources.length>0);}
 for(const id of item.sources){const s=data.sources[id];assert(s&&typeof s.name==='string'&&/^https?:\/\//.test(s.url));assert(review.sources.some(r=>r.id===id&&r.read&&/^[a-f0-9]{64}$/.test(r.evidenceSha256)),item.name+' has read evidence');}
 for(const protein of item.proteins||[])assert(data.proteins.includes(protein));const geo=regions[item.province];
 if(geo.level==='city')assert(item.city==='全省'||geo.regions.some(r=>r.name===item.city),'current city attribution for '+item.name);
 if(item.district)assert(geo.level==='district'&&geo.regions.some(r=>r.name===item.district));
}
let cityCount=0;
for(const province of data.provinces){
 const cities=regions[province.id].level==='city'?regions[province.id].regions.map(r=>r.name):[province.name];
 for(const city of cities){cityCount++;const count=data.items.filter(i=>i.province===province.id&&i.city===city).length;assert(count>0,province.name+' '+city+' has a first sourced batch');if(['beijing','shandong','anhui','jiangsu','zhejiang','shanghai','shanxi'].includes(province.id))assert(count>=11,province.name+' '+city+' retains completed coverage');}
 const svg=fs.readFileSync('assets/maps/flavors/'+province.id+'.svg','utf8');assert.equal((svg.match(/data-flavor-region=/g)||[]).length,regions[province.id].regions.length);assert(!/(?:href|src)="https?:|<script|onload=|onclick=/.test(svg));assert(review.provinceMaps.some(r=>r.province===province.id&&r.features===regions[province.id].regions.length));
}
assert.equal(cityCount,244);assert.equal(Object.values(regions).reduce((n,p)=>n+p.regions.length,0),274);
const coverage=JSON.parse(fs.readFileSync('research/flavors/coverage.json','utf8'));
assert.equal(coverage.cities.length+coverage.countyAreas.length,cityCount);
assert.equal(coverage.minimumPerCity,11);assert.equal(coverage.status,'in-progress');for(const row of coverage.cities.filter(r=>r.count<11))assert(coverage.pendingCities.some(r=>r.province===row.province&&r.city===row.city&&r.remainingToTarget===11-(row.sourceBackedCount??row.count)),'unfinished targets remain explicit');
for(const row of [...coverage.cities,...coverage.countyAreas])assert.equal(row.count,data.items.filter(i=>i.province===row.province&&i.city===row.city).length,'coverage agrees with live catalog');
for(const type of data.categories)assert(data.items.some(i=>i.type===type.id));
const research=JSON.parse(fs.readFileSync('research/flavors/queue.json','utf8'));assert.equal(new Set(research.places.map(p=>p.adcode)).size,research.places.length);assert.equal(research.totalItems,data.items.length);assert.equal(research.targetItems,data.targetItems);assert.deepEqual(research.missingBoundaryLists,[]);for(const place of research.places)for(const id of place.entryIds)assert(data.items.some(i=>i.id===id),'research references existing entries');
assert.equal(data.targetItems,5001);assert.equal(coverage.totalItems,data.items.length);assert.equal(coverage.remainingItems,Math.max(0,data.targetItems-data.items.length));
assert.equal(data.items.find(i=>i.name==='禹州杂炣')?.locality,'禹州市顺店镇');assert(!data.items.find(i=>i.name==='蛋清羊尾')?.proteins?.includes('羊'),'egg-white dessert is not lamb');
assert.equal(data.categories.find(c=>c.id==='staples').name,'面食');
assert.equal(data.categories.find(c=>c.id==='drinks').name,'饮品');assert(!data.categories.some(c=>c.id==='milktea'));assert(!data.items.some(i=>i.type==='milktea'));
for(const name of ['老北京炸酱面','片儿川','锅盖面','大同猪肉臊子刀削面','忻州荞面饸饹','三河米饺','福山拉面','开洋葱油拌面'])assert.equal(data.items.find(i=>i.name===name)?.type,'staples',name+' belongs to the dedicated staples category');
for(const name of ['定襄蒸肉','溱潼鱼饼','平定豆丝粉条'])assert.equal(data.items.find(i=>i.name===name)?.type,'dishes',name+' is a prepared dish');
for(const name of['雁门金波黄酒','上海辣酱油','糟卤','三河米饺','白云春毫','桐城小花','霍山黄大茶'])assert(data.items.some(i=>i.name===name),'verified local product: '+name);
assert(data.items.some(i=>i.type==='drinks'&&i.kind.includes('冲泡')));assert(data.items.some(i=>i.type==='drinks'&&i.kind.includes('现制')));
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));const base=process.env.SITE_URL||'http://127.0.0.1:4180';await p.route('**/*',r=>new URL(r.request().url()).origin===new URL(base).origin?r.continue():r.abort());
 const visit=async hash=>{await p.goto(base+'/'+hash+(hash.includes('?')?'&':'?')+'view=waterfall');await p.waitForSelector('[data-manager-count]');assert(p.url().includes('#card-manager/china'));assert.equal(await p.locator('#flavorsMode,.flavor-page,#flavorResults').count(),0);};
 await visit('#flavors');assert.equal(await p.locator('[data-china-primary="food"]').getAttribute('aria-pressed'),'true');assert((await p.locator('[data-manager-count]').innerText()).startsWith((data.items.length+13)+' 张'));assert(await p.evaluate(expected=>!ChinaFlavorUI.render&&!ChinaFlavorUI.bind&&ChinaCollection.flavors().length===expected,data.items.length));
 for(const [hash,params]of [
  ['#flavors?type=dairy',[['secondary','dairy']]],
  ['#flavors?type=milktea',[['secondary','drinks']]],
  ['#flavors/shandong?county=370124',[['province','shandong'],['city','济南'],['county','370124']]],
  ['#flavors/beijing?district='+encodeURIComponent('延庆区'),[['district','延庆区']]],
  ['#flavors?review=pending&q='+encodeURIComponent('HTTP 403'),[['review','pending'],['q','HTTP 403']]]
 ]){await visit(hash);const qs=new URLSearchParams(new URL(p.url()).hash.split('?')[1]);for(const [key,value]of params)assert.equal(qs.get(key),value);}
 await visit('#flavors?review=pending');assert((await p.locator('[data-manager-count]').innerText()).startsWith('47 张'));assert(await p.locator('.flavor-card').evaluateAll(es=>es.every(e=>e.textContent.includes('待核实'))));await p.reload();await p.waitForSelector('[data-china-review]');assert.equal(await p.locator('[data-china-review]').inputValue(),'pending');
 await visit('#flavors?type=dishes&protein='+encodeURIComponent('鸭'));assert(await p.locator('.flavor-card').count()>0);assert(await p.locator('.flavor-card').evaluateAll(es=>es.every(e=>CardStore.nodes.get(e.dataset.knowledgeCard).proteins.includes('鸭'))));assert(await p.locator('[data-china-clear-protein]').isVisible());await p.locator('[data-china-view="table"]').click();assert(p.url().includes('protein='));await p.locator('[data-china-clear-protein]').click();assert(!p.url().includes('protein='));
 await visit('#flavors?review=pending&q='+encodeURIComponent('HTTP 403'));assert((await p.locator('.flavor-card h3').allTextContents()).includes('宝应荷藕'));await p.locator('.flavor-card .hub-detail-action').first().click();await p.waitForSelector('.entity-detail');assert((await p.locator('.entity-sources').innerText()).includes('未核实线索链接'));await p.locator('.china-detail-back').click();await p.waitForSelector('[data-manager-count]');
 await p.locator('[data-manager-reset]').click();assert((await p.locator('[data-manager-count]').innerText()).includes(String(data.items.length+130)));
 assert.deepEqual(errors,[]);console.log('PASS preserved flavor sources and expanded records, standalone UI retired, old category/region/county/review/protein links redirected, pending evidence remains in the shared detail page');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});

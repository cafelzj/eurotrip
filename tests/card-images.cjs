const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..'),context=vm.createContext({});
for(const file of ['data/cards.js','data/capitals-cards.js','data/china-cards.js','data/heritage-cards.js','data/knowledge-cards.js','data/slovenia-cards.js','data/poland-cards.js','data/card-images.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {cards,media}=vm.runInContext('({cards:[...travelCards,...capitalCards,...chinaCards,...heritageCards,...knowledgeCards,...sloveniaCards,...polandCards],media:cardImages})',context),byId=new Map(cards.map(n=>[n.id,n]));
const used=new Set(Object.values(media.cards));
assert.equal(Object.keys(media.assets).length,used.size,'no unreferenced images');
for(const [id,key]of Object.entries(media.cards)){assert(['person','food'].includes(byId.get(id)?.type),id);assert(media.assets[key],id);}
for(const [key,image]of Object.entries(media.assets)){
 assert(used.has(key));assert(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\//.test(image.src));
 assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(image.source));assert(/^https:\/\//.test(image.licenseUrl));
 assert(image.alt&&image.caption&&image.author&&image.license&&image.file&&/^\d{4}-\d\d-\d\d$/.test(image.checked));
 assert(Number.isInteger(image.width)&&image.width>0&&Number.isInteger(image.height)&&image.height>0);assert(['food','portrait','product'].includes(image.kind));
}
assert(cards.filter(n=>n.type==='person').every(n=>media.cards[n.id]),'all existing people have a reviewed image');
assert(Object.keys(media.cards).filter(id=>byId.get(id).type==='food').length>=100,'substantial food coverage');
assert(!media.cards['food-xuzhou-lomo'],'Luomo musician is not the Xuzhou flatbread');
assert(!media.cards['food-innsbruck-0'],'South Tyrolean ham is not an Austrian Tiroler Speck product photo');
console.log('PASS curated image ownership, source/license/alt/dimensions, complete people coverage and food identity exclusions');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://fonts.googleapis.com/**',r=>r.abort());
  // Controlled pixels test layout/load behavior without depending on remote media
  // access. They do not verify the photographic contents or real CDN availability.
  await p.route('https://upload.wikimedia.org/**',r=>r.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="960" height="720"><rect width="960" height="720" fill="#d4ddcd"/></svg>'}));
  await p.route('**/__missing-card-image.jpg',r=>r.abort());
  const base=process.env.SITE_URL||'http://127.0.0.1:3020',go=async hash=>{await p.goto(base+'/'+hash);await settle(p);},tick=()=>p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  await go('#guide/hu/budapest?zone=food&view=waterfall');await p.waitForSelector('.card-feed-item .card-image img');await tick();
  const tile=p.locator('[data-knowledge-card="food-budapest-0"]'),img=tile.locator('img');
  assert.equal(await img.getAttribute('loading'),'lazy');assert((await img.getAttribute('alt')).includes('古拉什'));assert.equal(await img.evaluate(e=>getComputedStyle(e).objectFit),'cover');
  await tile.locator('.card-image').focus();await p.keyboard.press('Enter');await settle(p);assert.equal(await p.locator('.entity-image img').getAttribute('loading'),'eager');
  assert.equal(await p.locator('.entity-image a[href^="https://commons.wikimedia.org/wiki/File:"]').count(),1);assert((await p.locator('.entity-image figcaption').innerText()).includes('Lily15'));assert((await p.locator('.entity-image figcaption').innerText()).includes('CC BY-SA'));
  assert.equal(await p.locator('.entity-image img').evaluate(e=>getComputedStyle(e).objectFit),'contain');
  await p.locator('.entity-breadcrumb>a').first().click();await settle(p);assert((await p.evaluate(()=>location.hash)).includes('at=food-budapest-0'));
  await tick();await img.scrollIntoViewIfNeeded();const before=await tile.locator('.card-image-frame').boundingBox();
  await img.evaluate(e=>e.src='/__missing-card-image.jpg');await tile.locator('.card-image-fallback').waitFor({state:'visible'});await tick();const after=await tile.locator('.card-image-frame').boundingBox();
  assert.equal(after.height,before.height,'failed image reserves the exact frame height');assert.equal(await tile.locator('.hub-card-title').count(),1,'card stays readable');
  assert(await p.locator('.card-feed-grid').evaluate(grid=>{const rs=[...grid.children].map(e=>e.getBoundingClientRect());return rs.every((a,i)=>rs.slice(i+1).every(b=>Math.abs(a.left-b.left)>1||a.bottom<=b.top+1||b.bottom<=a.top+1));}),'feed remains non-overlapping after image failure');
  for(const hash of ['#card/person-mozart','#card/food-product-redbull-can']){
   await go(hash);assert.equal(await p.locator('.entity-image img').evaluate(e=>getComputedStyle(e).objectFit),'contain');
   for(const width of [1440,768,390,320]){await p.setViewportSize({width,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'image/credit fit '+width);const r=await p.locator('.entity-image .card-image-frame').boundingBox();assert(r.width>100&&r.height>100);}
  }
  await go('#card/food-xuzhou-lomo');assert.equal(await p.locator('.entity-image').count(),0,'unreviewed entries stay text-only');
  await go('#guide/pl?zone=food&view=groups');assert(await p.locator('.hub-card .card-image').count());
  await go('#china/jiangsu/suzhou?zone=food&view=waterfall');assert(await p.locator('.card-feed .card-image').count());assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert.deepEqual(errors,[]);console.log('PASS lazy/eager images, keyboard/detail return, visible credits, complete portraits/products, fixed failure frames, no feed overlap and four responsive widths');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

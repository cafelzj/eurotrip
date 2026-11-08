const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..'),context=vm.createContext({});
for(const file of ['data/cards.js','data/capitals-cards.js','data/china-cards.js','data/heritage-cards.js','data/knowledge-cards.js','data/slovenia-cards.js','data/poland-cards.js','data/card-images.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {cards,media}=vm.runInContext('({cards:[...travelCards,...capitalCards,...chinaCards,...heritageCards,...knowledgeCards,...sloveniaCards,...polandCards],media:cardImages})',context),byId=new Map(cards.map(n=>[n.id,n]));
const used=new Set([...Object.values(media.cards),...Object.values(media.galleries||{}).flat()]);
assert.equal(Object.keys(media.assets).length,used.size,'no unreferenced images');
for(const [id,key]of Object.entries(media.cards)){assert(['person','food'].includes(byId.get(id)?.type),id);assert(media.assets[key],id);}
for(const [id,keys]of Object.entries(media.galleries||{})){assert(media.cards[id],id+' gallery has a cover');assert(Array.isArray(keys)&&keys.length>0);assert.equal(new Set(keys).size,keys.length,'gallery has no duplicate entries');assert(keys.every(key=>media.assets[key]),id+' gallery references existing photos');}
for(const [key,image]of Object.entries(media.assets)){
 assert(used.has(key));assert(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\//.test(image.src));
 assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(image.source));assert(/^https:\/\//.test(image.licenseUrl));
 assert(image.alt&&image.caption&&image.author&&image.license&&image.file&&/^\d{4}-\d\d-\d\d$/.test(image.checked));
 assert(Number.isInteger(image.width)&&image.width>0&&Number.isInteger(image.height)&&image.height>0);assert(['food','portrait','product'].includes(image.kind));
}
assert(cards.filter(n=>n.type==='person').every(n=>media.cards[n.id]),'all existing people have a reviewed image');
assert(!media.cards['food-xuzhou-lomo'],'Luomo musician is not the Xuzhou flatbread');
assert(!media.cards['food-innsbruck-0'],'South Tyrolean ham is not an Austrian Tiroler Speck product photo');
const photoReview=JSON.parse(fs.readFileSync(path.join(root,'docs/food-photo-review.json'),'utf8'));
const canonicalFile=file=>decodeURIComponent(file).replaceAll('_',' ').normalize('NFC');
for(const file of photoReview.rejected.map(entry=>entry.file))assert(!Object.values(media.assets).some(image=>canonicalFile(image.file)===canonicalFile(file)),'withdraw rejected photo '+file);
// Coverage must follow the visual decisions; a numeric quota must never force
// rejected photographs back into the site. These checks validate the record,
// not the appearance of a photograph.
const reviewed=new Map((photoReview.reviewed||[]).map(entry=>[entry.asset,entry]));
const pending=new Map(photoReview.pending.map(entry=>[entry.asset,entry]));
for(const [key,image]of Object.entries(media.assets)){
 if(image.kind==='portrait')continue;
 const decision=reviewed.get(key);
 assert(decision?.status==='approved'||pending.has(key),'photo has an audit record: '+key);
 if(decision){assert(decision.notes&&decision.reviewedAt&&decision.method);assert(/^[a-f0-9]{64}$/.test(decision.originalSha256),'original download fingerprint: '+key);assert.equal(image.visualReview?.status,'approved');}
 if(photoReview.policy.visualAuditComplete)assert.equal(decision?.status,'approved','completed batch contains only approved photos');
}
if(photoReview.policy.visualAuditComplete)assert.equal(pending.size,0);
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
  const tile=p.locator('[data-knowledge-card="food-budapest-2"]'),img=tile.locator('img');
  assert.equal(await img.getAttribute('loading'),'lazy');assert((await img.getAttribute('alt')).includes('兰戈什'));assert.equal(await img.evaluate(e=>getComputedStyle(e).objectFit),'cover');
  await tile.locator('.card-image').focus();await p.keyboard.press('Enter');await settle(p);assert.equal(await p.locator('.entity-image img').getAttribute('loading'),'eager');
  assert.equal(await p.locator('.entity-image a[href^="https://commons.wikimedia.org/wiki/File:"]').count(),1);assert((await p.locator('.entity-image figcaption').innerText()).includes('sikeri'));assert((await p.locator('.entity-image figcaption').innerText()).includes('CC BY-SA'));
  assert.equal(await p.locator('.entity-image img').evaluate(e=>getComputedStyle(e).objectFit),'contain');
  assert.equal(await p.locator('.entity-breadcrumb').count(),0);await p.goBack();await settle(p);assert((await p.evaluate(()=>location.hash)).includes('at=food-budapest-2'));
  await tick();await img.scrollIntoViewIfNeeded();const before=await tile.locator('.card-image-frame').boundingBox();
  await img.evaluate(e=>e.src='/__missing-card-image.jpg');await tile.locator('.card-image-fallback').waitFor({state:'visible'});await tick();const after=await tile.locator('.card-image-frame').boundingBox();
  assert.equal(after.height,before.height,'failed image reserves the exact frame height');assert.equal(await tile.locator('.hub-card-title').count(),1,'card stays readable');
  assert(await p.locator('.card-feed-grid').evaluate(grid=>{const rs=[...grid.children].map(e=>e.getBoundingClientRect());return rs.every((a,i)=>rs.slice(i+1).every(b=>Math.abs(a.left-b.left)>1||a.bottom<=b.top+1||b.bottom<=a.top+1));}),'feed remains non-overlapping after image failure');
  for(const hash of ['#card/person-mozart','#card/food-product-turo-rudi']){
   await go(hash);assert.equal(await p.locator('.entity-image img').evaluate(e=>getComputedStyle(e).objectFit),'contain');
   for(const width of [1440,768,390,320]){await p.setViewportSize({width,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'image/credit fit '+width);const r=await p.locator('.entity-image .card-image-frame').boundingBox();assert(r.width>100&&r.height>100);}
  }
  await go('#card/food-budapest-2');
  await p.evaluate(()=>{const id='food-budapest-2';cardImages.galleries={[id]:[cardImages.cards['food-budapest-3']]};document.querySelector('.entity-media').innerHTML=CardImages.detail(CardGraph.nodes.get(id));});
  assert.equal(await p.locator('[data-photo-index]').count(),2);await p.locator('[data-photo-index="1"] img').evaluate(e=>e.src='/__missing-card-image.jpg');await p.locator('[data-photo-index="1"].is-unavailable').waitFor();await p.locator('[data-photo-index="1"]').click();assert.equal(await p.locator('.card-image-position').innerText(),'2 / 2');assert((await p.locator('.entity-image figcaption').innerText()).includes('炖肉'));await p.keyboard.press('ArrowLeft');assert.equal(await p.locator('.card-image-position').innerText(),'1 / 2');assert.equal(await p.locator('[data-photo-index="0"]').getAttribute('aria-pressed'),'true');
  // UI-only gallery fixtures use controlled pixels; no new photo is published.
  for(const view of ['groups','waterfall']){
   await go('#guide/hu/budapest?zone=food&view='+view);await p.evaluate(()=>{const id='food-budapest-2';cardImages.galleries={[id]:[cardImages.cards['food-budapest-3']]};const old=document.querySelector('[data-knowledge-card="'+id+'"] .card-photo-carousel')||document.querySelector('[data-knowledge-card="'+id+'"] .card-image'),box=document.createElement('div');box.innerHTML=CardImages.card(CardGraph.nodes.get(id));old.replaceWith(box.firstElementChild);});
   const root=p.locator('[data-knowledge-card="food-budapest-2"] .card-photo-carousel'),photo=root.locator('.card-image-frame img'),first=await photo.getAttribute('src'),hash=await p.evaluate(()=>location.hash);await root.scrollIntoViewIfNeeded();const before=await root.locator('.card-image-frame').boundingBox();
   await root.locator('[data-photo-step="1"]').click();assert.notEqual(await photo.getAttribute('src'),first);assert.equal(await root.locator('.card-image-position').innerText(),'2 / 2');assert.equal(await p.evaluate(()=>location.hash),hash,'carousel never navigates');
   await root.locator('[data-photo-step="1"]').click();assert.equal(await photo.getAttribute('src'),first,'last photo wraps to first');await p.keyboard.press('ArrowLeft');assert.equal(await root.locator('.card-image-position').innerText(),'2 / 2');
   assert.equal((await root.locator('.card-image-frame').boundingBox()).height,before.height,'switching reserves the frame');
   for(const width of [1440,768,390,320]){await p.setViewportSize({width,height:844});await tick();assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'carousel fits '+width);}
   await root.locator('.card-image').click();await settle(p);assert.equal(await p.locator('.entity-image [data-photo-index]').count(),2,'detail retains the same gallery');
  }
  await go('#card/food-xuzhou-lomo');assert.equal(await p.locator('.entity-image').count(),0,'unreviewed entries stay text-only');
  await go('#guide/pl?zone=food&view=groups');assert(await p.locator('.hub-card .card-image').count());
  await go('#china/jiangsu/suzhou?zone=food&view=waterfall');assert(await p.locator('.card-feed .card-image').count());assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert.deepEqual(errors,[]);console.log('PASS lazy/eager images, keyboard/detail return, visible credits, complete portraits/products, fixed failure frames, list carousels without navigation, detail galleries, no feed overlap and four responsive widths');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

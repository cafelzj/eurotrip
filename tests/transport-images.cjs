const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),{chromium}=require('playwright'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..'),review=JSON.parse(fs.readFileSync(path.join(root,'docs/transport-photo-review.json'),'utf8'));
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('https://upload.wikimedia.org/**',r=>r.abort());await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://fonts.googleapis.com/**',r=>r.abort());
 const base=process.env.SITE_URL||'http://127.0.0.1:4173';
 for(const row of review.reviewed.filter(r=>r.status==='approved')){
  assert(/^[a-f0-9]{64}$/.test(row.originalSha256));assert(row.notes&&row.source&&row.author&&row.license&&row.licenseUrl);
  await p.goto(base+'/#card/'+row.card);await settle(p);assert.equal(await p.locator('.entity-image img').count(),1,row.card);
  await p.waitForFunction(()=>{const im=document.querySelector('.entity-image img');return im?.complete&&im.naturalWidth>0;});
  const media=await p.evaluate(id=>CardImages.get(CardGraph.nodes.get(id)),row.card);assert.equal(media.file,row.file);assert.equal(media.source,row.source);assert.equal(media.visualReview.status,'approved');assert.equal(media.kind,'place');
  const credit=await p.locator('.entity-image figcaption').innerText();assert(credit.includes(row.author)&&credit.includes(row.license));assert.equal(await p.locator('.entity-image a[href="'+row.source+'"]').count(),1);
  for(const width of [1440,390]){await p.setViewportSize({width,height:1000});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),row.card+' fits '+width);assert.equal(await p.locator('.entity-image img').evaluate(e=>getComputedStyle(e).objectFit),'contain');}
 }
 await p.goto(base+'/#guide/at/salzburg?zone=transport&view=groups');await settle(p);const tile=p.locator('[data-knowledge-card="poi-salzburg-salzburg-1"]');await tile.locator('.card-image img').waitFor();await tile.scrollIntoViewIfNeeded();await p.waitForFunction(()=>{const im=document.querySelector('[data-knowledge-card="poi-salzburg-salzburg-1"] .card-image img');return im?.complete&&im.naturalWidth>0;});await tile.locator('.card-image').click();await settle(p);assert.equal(await p.locator('.entity-detail').getAttribute('data-entity-id'),'poi-salzburg-salzburg-1');assert.equal(await p.locator('.entity-breadcrumb').count(),0);
 await p.setViewportSize({width:1137,height:900});await p.screenshot({path:'/tmp/transport-review/detail-desktop.png'});await p.setViewportSize({width:390,height:844});await p.screenshot({path:'/tmp/transport-review/detail-mobile.png'});assert.deepEqual(errors,[]);console.log('PASS reviewed transport photo records, real local image loading, per-photo credits, exact station navigation and desktop/mobile detail layout');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..'),source=fs.readFileSync(path.join(root,'data/landmark-art.js'),'utf8');
const art=JSON.parse(source.match(/const landmarkArt = ([\s\S]*?);\n/)[1]);
assert.equal(Object.keys(art).length,9);
assert(new Set(Object.values(art).map(a=>a.style)).size>=5);
for(const a of Object.values(art)){
 assert(a.alt&&a.credit&&a.generatedAt&&a.kind==='ai-illustration');
 assert.equal(a.width/a.height,1.5);
 for(const file of [a.src,a.thumbnail]){
  assert(/^assets\/landmarks\/[a-z0-9-]+\.webp$/.test(file));
  const bytes=fs.readFileSync(path.join(root,file));
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');
  assert(bytes.length<300000,'web-sized asset '+file);
 }
}
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  p.on('pageerror',e=>errors.push(e.message));await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
  const base=process.env.SITE_URL||'http://127.0.0.1:3026',go=async hash=>{await p.goto(base+'/'+hash);await settle(p);};
  for(const [id,a]of Object.entries(art)){
   await go('#card/'+id);
   assert.equal(await p.locator('.entity-detail .landmark-art').count(),1,id);
   const img=p.locator('.entity-detail .landmark-art img');
   await img.evaluate(e=>e.decode());assert.equal(await img.getAttribute('alt'),a.alt);
   assert.equal(await img.getAttribute('loading'),'eager');
   // naturalWidth is density-corrected for srcset; inspect the decoded asset instead.
   const size=await img.evaluate(async e=>{const bitmap=await createImageBitmap(await(await fetch(e.currentSrc)).blob());const size=[bitmap.width,bitmap.height];bitmap.close();return size;});
   assert.deepEqual(size,[1200,800],id+' detail asset dimensions');
   assert((await p.locator('.landmark-art figcaption').innerText()).includes('非实景照片'));
  }
  await go('#guide/hu/budapest?zone=places');
  const first=p.locator('[data-knowledge-card="place-budapest-0"]');
  assert.equal(await first.locator('.landmark-art').count(),1);
  assert.equal(await first.locator('img').getAttribute('loading'),'lazy');
  for(const width of [320,390,768,1440]){
   await p.setViewportSize({width,height:900});
   await go('#guide/hu/budapest?zone=places&view=waterfall');
   await first.scrollIntoViewIfNeeded();await first.locator('img').evaluate(e=>e.decode());
   assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'phone fits '+width);
   assert(await first.locator('.landmark-art-frame').evaluate(e=>{const r=e.getBoundingClientRect();return Math.abs(r.width/r.height-1.5)<.02;}));
   await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
   assert(await p.locator('.card-feed-grid').evaluate(grid=>{const rects=[...grid.children].map(e=>e.getBoundingClientRect());return rects.every((a,i)=>rects.slice(i+1).every(b=>Math.abs(a.left-b.left)>1||a.bottom<=b.top+1||b.bottom<=a.top+1));}),'masonry images do not overlap');
  }
  await go('#card/tip-common-help');assert.equal(await p.locator('.landmark-art').count(),0,'unillustrated cards have no empty image');
  await p.route('**/assets/landmarks/**',r=>r.abort());
  await go('#card/place-berlin-0');
  await p.locator('.landmark-art-fallback').waitFor({state:'visible'});
  assert(await p.locator('.landmark-art img').isHidden());
  assert(await p.locator('.entity-description').isVisible());
  assert(await p.locator('.landmark-art-frame').evaluate(e=>e.getBoundingClientRect().height>100));
  assert.deepEqual(errors,[]);
  console.log('PASS nine local art records/assets, styles, detail/list reuse, responsive masonry and readable image-failure fallback');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

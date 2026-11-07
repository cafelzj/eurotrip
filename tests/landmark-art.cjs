const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..');
const constants=file=>[...fs.readFileSync(path.join(root,file),'utf8').matchAll(/const (\w+) = ([\s\S]*?);\n/g)].map(m=>JSON.parse(m[2]));
const art=constants('data/landmark-art.js')[0],plan=JSON.parse(fs.readFileSync(path.join(root,'docs/landmark-art-prompts.json'),'utf8'));
const places=['cards','capitals-cards','china-cards','heritage-cards','slovenia-cards','poland-cards'].flatMap(name=>constants('data/'+name+'.js').flat()).filter(n=>n?.category==='places');
assert.equal(places.length,plan.targetCount);
assert.deepEqual(Object.keys(art).sort(),places.map(n=>n.id).sort(),'every static attraction has a mapped illustration');
assert(new Set(Object.values(art).map(a=>a.style)).size>=15,'regional and period styles');
const assets=new Map(),frames=new Map();
for(const [id,a]of Object.entries(art)){
 assert(a.alt&&a.credit&&a.generatedAt&&a.styleReason&&a.kind==='ai-illustration',id);
 assert.equal(a.width/a.height,1.5);
 if(a.columns){assert.equal(a.columns,2);assert.equal(a.rows,2);assert(Number.isInteger(a.panel)&&a.panel>=0&&a.panel<4);}
 const frame=a.src+'#'+(a.panel??0);if(frames.has(frame))assert.equal(a.aliasOf,frames.get(frame),id+' only explicit same-place aliases share art');else frames.set(frame,id);
 for(const [file,width,height]of [[a.src,a.width,a.height],[a.thumbnail,a.thumbnailWidth||480,(a.thumbnailWidth||480)*2/3]]){
  assert(/^assets\/landmarks\/[a-z0-9-]+\.webp$/.test(file));
  if(assets.has(file))continue;
  const bytes=fs.readFileSync(path.join(root,file));
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');
  assert(bytes.length<650000,'web-sized asset '+file);assets.set(file,[width,height]);
 }
}
for(const job of plan.jobs)for(const panel of job.panels){
 const a=art[panel.id];assert(a.src.endsWith('/'+job.id+'.webp'));assert.equal(a.panel,panel.panel);assert.equal(a.style,panel.style);assert.equal(a.styleReason,panel.styleReason);
}
assert.equal(frames.size,places.length-Object.keys(plan.aliases).length);
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  p.on('pageerror',e=>errors.push(e.message));await p.route('https://tile.openstreetmap.org/**',r=>r.abort());
  const base=process.env.SITE_URL||'http://127.0.0.1:3026',go=async hash=>{await p.goto(base+'/'+hash);await settle(p);};
  await go('#card/place-budapest-0');
  const audit=await p.evaluate(ids=>ids.filter(id=>{const n=CardGraph.nodes.get(id);return !n||!CardArt.get(n)||!CardArt.render(n).includes('data-landmark-art');}),Object.keys(art));
  assert.deepEqual(audit,[],'all art is reachable through the card registry');
  const assetFailures=await p.evaluate(async entries=>{const failures=[];for(const [file,expected]of entries){const b=await createImageBitmap(await(await fetch(file)).blob());if(b.width!==expected[0]||b.height!==expected[1])failures.push(file);b.close();}return failures;},[...assets]);
  assert.deepEqual(assetFailures,[],'all exported asset dimensions match the catalog');
  const countrySamples=['hu','at','de','rs','si','pl','cn'].flatMap(country=>plan.jobs.find(j=>j.country===country).panels.map(p=>p.id));
  const samples=[...new Set(['place-budapest-0','venue-suzhou-humble-administrator',...countrySamples])];
  for(const id of samples){
   const a=art[id];
   await go('#card/'+id);
   assert.equal(await p.locator('.entity-detail .landmark-art').count(),1,id);
   const img=p.locator('.entity-detail .landmark-art img');
   await img.evaluate(e=>e.decode());assert.equal(await img.getAttribute('alt'),a.alt);
   assert.equal(await img.getAttribute('loading'),'eager');
   const geometry=await img.evaluate(e=>{const r=e.getBoundingClientRect(),f=e.parentElement.getBoundingClientRect();return {w:r.width/f.width,h:r.height/f.height,x:(r.left-f.left)/f.width,y:(r.top-f.top)/f.height};});
   assert(Math.abs(geometry.w-(a.columns||1))<.02&&Math.abs(geometry.h-(a.rows||1))<.02);
   assert(Math.abs(geometry.x+((a.panel||0)%(a.columns||1)))<.02&&Math.abs(geometry.y+Math.floor((a.panel||0)/(a.columns||1)))<.02,'only the assigned scene is shown');
   assert((await p.locator('.landmark-art figcaption').innerText()).includes(a.styleReason));
   assert((await p.locator('.landmark-art figcaption').innerText()).includes('非实景照片'));
  }
  await go('#guide/hu/budapest?zone=places');
  const first=p.locator('[data-knowledge-card="place-budapest-1"]');
  assert.equal(await first.locator('.landmark-art').count(),1);
  assert.equal(await first.locator('img').getAttribute('loading'),'lazy');
  for(const width of [320,390,768,1440]){
   await p.setViewportSize({width,height:900});
   await go('#guide/hu/budapest?zone=places&view=waterfall');
   await first.scrollIntoViewIfNeeded();await first.locator('img').evaluate(e=>e.decode());
   assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'phone fits '+width);
   assert(await p.locator('.card-feed .hub-card').evaluateAll(cards=>cards.every(c=>c.querySelector('.landmark-art'))));
   assert(await first.locator('.landmark-art-frame').evaluate(e=>{const r=e.getBoundingClientRect();return Math.abs(r.width/r.height-1.5)<.02;}));
   await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
   assert(await p.locator('.card-feed-grid').evaluate(grid=>{const rects=[...grid.children].map(e=>e.getBoundingClientRect());return rects.every((a,i)=>rects.slice(i+1).every(b=>Math.abs(a.left-b.left)>1||a.bottom<=b.top+1||b.bottom<=a.top+1));}),'masonry images do not overlap');
  }
  await go('#card/tip-common-help');assert.equal(await p.locator('.landmark-art').count(),0,'unillustrated cards have no empty image');
  // Use a fresh context: the atlas already decoded above can survive in the image cache.
  const failedContext=await browser.newContext({viewport:{width:390,height:844}}),failed=await failedContext.newPage();
  failed.on('pageerror',e=>errors.push(e.message));
  await failed.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await failed.route('**/assets/landmarks/**',r=>r.abort());
  await failed.goto(base+'/#card/place-budapest-1');await settle(failed);
  await failed.locator('.landmark-art-fallback').waitFor({state:'visible'});
  assert(await failed.locator('.landmark-art img').isHidden());
  assert(await failed.locator('.entity-description').isVisible());
  assert(await failed.locator('.landmark-art-frame').evaluate(e=>e.getBoundingClientRect().height>100));
  await failedContext.close();
  assert.deepEqual(errors,[]);
  console.log('PASS full attraction art coverage, explicit same-place aliases, all local assets, regional styles, per-scene framing, responsive masonry and image-failure fallback');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

// Real files, no substitute pixels: exercise mobile loading without third-party hosts
// or WebP support. Availability checks do not replace photographic visual review.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process');
const root=path.join(__dirname,'..'),ctx=vm.createContext({});
for(const f of ['card-images','landmark-art','country-art'])vm.runInContext(fs.readFileSync(path.join(root,'data',f+'.js'),'utf8'),ctx);
const catalogs=vm.runInContext('({photos:cardImages.assets,art:landmarkArt,countries:countryArt})',ctx),files=new Map();
for(const a of Object.values(catalogs.photos)){assert(a.source&&a.author&&a.license&&a.licenseUrl);files.set(a.src,[a.width,a.height]);}
for(const a of [...Object.values(catalogs.art),...Object.values(catalogs.countries)]){files.set(a.src,[a.width,a.height]);const w=a.thumbnailWidth||480;files.set(a.thumbnail,[w,w*2/3]);}
for(const file of files.keys()){assert(/^assets\/[a-z0-9/-]+\.(jpg|png)$/.test(file),file);assert(fs.existsSync(path.join(root,file)),file);}
(async()=>{
 const base=(process.env.SITE_URL||'http://127.0.0.1:4173').replace(/\/$/,''),origin=new URL(base).origin,args=['--no-sandbox'];
 if(process.env.PROXY_CA){const pem=execFileSync('openssl',['x509','-in',process.env.PROXY_CA,'-pubkey','-noout']),der=execFileSync('openssl',['pkey','-pubin','-outform','DER'],{input:pem});args.push('--ignore-certificate-errors-spki-list='+crypto.createHash('sha256').update(der).digest('base64'));}
 const b=await chromium.launch({executablePath:'/usr/bin/chromium',args});
 try{
  const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  await p.route('**/*',r=>{const u=new URL(r.request().url());return u.origin!==origin||/\.webp(?:\?|$)/i.test(u.pathname)?r.abort():r.continue();});
  await p.goto(base+'/#card/food-budapest-0');await p.waitForFunction(()=>typeof CardImages!=='undefined');
  const failures=await p.evaluate(async entries=>{const failed=[];let next=0;await Promise.all(Array.from({length:4},async()=>{while(next<entries.length){const [src,dims]=entries[next++];try{const im=new Image();im.src=src;await im.decode();if(im.naturalWidth!==dims[0]||im.naturalHeight!==dims[1])throw Error('dimension mismatch');}catch(e){failed.push({src,error:String(e)});}}}));return failed;},[...files]);
  assert.deepEqual(failures,[],'every actual image decodes with external images and WebP blocked');
  for(const hash of ['#guide/hu/budapest?zone=food&view=waterfall','#guide/at/salzburg?zone=transport&view=groups','#guide/at?zone=people&view=waterfall','#guide/de?zone=places&view=waterfall','#card/person-mozart','#card/food-product-ritter-chocolate','#card/food-pl-prince-polo','#card/food-product-redbull-can','#card/food-product-kellys-chips','#card/specialty-at-2','#card/poi-szeged-szeged-1']){
   await p.goto(base+'/'+hash);await p.waitForFunction(()=>document.querySelector('.entity-detail,.card-feed,.knowledge-hub'));await p.waitForTimeout(250);
   for(const img of await p.locator('img:visible').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(async im=>{if(!im.complete)await im.decode();if(!im.naturalWidth)throw Error('broken image '+im.src);});}
   assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile overflow '+hash);
  }
  const thumbs=p.locator('[data-photo-index]');assert.equal(await thumbs.count(),2);await thumbs.nth(1).click();await p.locator('.entity-image .card-image-frame img').evaluate(im=>im.decode());assert.equal(await p.locator('.card-image-position').innerText(),'2 / 2');
  assert.deepEqual(errors,[]);await p.screenshot({path:process.env.MEDIA_SCREENSHOT||'/tmp/mobile-local-media.png',fullPage:true});
  console.log('PASS '+files.size+' real local JPEG/PNG files, exact dimensions, mobile lists/details/gallery, third-party and WebP requests blocked');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});

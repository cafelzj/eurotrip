const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.stack));
 await page.route('https://tile.openstreetmap.org/**',r=>r.abort());
 let requests=[],mode='normal';
 const fixtures=[
 {type:'node',id:11,lat:47.4978,lon:19.0401,tags:{shop:'supermarket',name:'LIDL',brand:'Lidl','addr:street':'Test utca','addr:housenumber':'1'}},
 {type:'way',id:12,center:{lat:47.4984,lon:19.041},tags:{shop:'supermarket',name:'ALDI',brand:'ALDI Süd'}},
 {type:'node',id:13,lat:47.498,lon:19.043,tags:{shop:'supermarket',name:'INTERSPAR',brand:'INTERSPAR'}},
 {type:'node',id:14,lat:47.499,lon:19.044,tags:{shop:'supermarket',name:'Local Grocery'}},
 {type:'node',id:20,lat:47.497,lon:19.042,tags:{amenity:'restaurant',name:'Regional Kitchen',cuisine:'hungarian',website:'javascript:alert(1)'}},
 {type:'node',id:21,lat:47.497,lon:19.046,tags:{amenity:'cafe',name:'Coffee House'}},
 {type:'node',id:22,lat:47.498,lon:19.042,tags:{shop:'supermarket',name:'<script>unsafe</script>',brand:'Lidl'}},
 {type:'node',id:99,lat:NaN,lon:19,tags:{shop:'supermarket',name:'Invalid'}}];
 await page.route('https://overpass-api.de/api/interpreter',async r=>{
  const query=new URLSearchParams(r.request().postData()).get('data');requests.push(query);
  if(mode==='failure')return r.fulfill({status:429,body:'rate limited'});
  if(mode==='malformed')return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({elements:[],remark:'runtime error: timeout'})});
  if(mode==='huge'){const bbox=query.match(/\((-?\d+\.\d+),(-?\d+\.\d+),(-?\d+\.\d+),(-?\d+\.\d+)\)/).slice(1).map(Number);const elements=Array.from({length:601},(_,i)=>({type:'node',id:1000+i,lat:bbox[0]+(bbox[2]-bbox[0])*((i%20)+1)/21,lon:bbox[1]+(bbox[3]-bbox[1])*(Math.floor(i/20)+1)/32,tags:{shop:'supermarket',name:'Lidl '+i,brand:'Lidl'}}));return r.fulfill({contentType:'application/json',body:JSON.stringify({elements})});}
  const selected=fixtures.filter(e=>e.tags.shop==='supermarket'?query.includes('shop="supermarket"'):query.includes('amenity~'));selected.push(...selected.slice(0,1));
  return r.fulfill({contentType:'application/json',body:JSON.stringify({elements:selected})});
 });
 const assert=(ok,msg)=>{if(!ok)throw Error(msg);console.log('PASS '+msg)};
 await page.goto((process.env.SITE_URL||'http://127.0.0.1:3000')+'/#guide/hu/budapest');
 assert(await page.locator('.layer-card').count()===4,'four new city columns');
 assert((await page.locator('.food-notes').innerText()).includes('兰戈什'),'local food descriptions');
 await page.locator('input[data-poi-group="supermarkets"]:not([data-poi-sub])').check();
 await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('已获取'));
 assert(requests.length===1&&requests[0].includes('out tags center 601')&&/\d+\.\d+,\d+\.\d+,\d+\.\d+,\d+\.\d+/.test(requests[0]),'bounded viewport query and server output limit');
 assert(await page.locator('.poi-result').count()===5,'way centers parsed; invalid/duplicate elements excluded');
 assert((await page.locator('[data-sub-count="supermarkets:SPAR"]').innerText())==='1','INTERSPAR normalized to SPAR');
 assert(await page.locator('.poi-cluster').count()>0,'dense stores clustered');
 await page.locator('input[data-poi-group="supermarkets"][data-poi-sub="Lidl"]').uncheck();
 assert(await page.locator('.poi-result').count()===3,'brand sublayer hides only Lidl points');
 await page.locator('input[data-poi-group="food"]:not([data-poi-sub])').check();
 await page.waitForFunction(()=>document.querySelector('#poiResults').textContent.includes('Regional Kitchen'));
 assert(await page.locator('.poi-result').count()===5,'different parent layers coexist');
 await page.locator('input[data-poi-group="food"][data-poi-sub="cafe"]').uncheck();assert(!(await page.locator('#poiResults').innerText()).includes('Coffee House'),'food sublayer independently hidden');
 await page.locator('input[data-poi-group="supermarkets"]:not([data-poi-sub])').uncheck();assert((await page.locator('#poiResults').innerText()).includes('Regional Kitchen'),'hiding supermarket parent retains food');
 assert(await page.locator('#poiResults .poi-result').count()===1,'parent off hides all children');
 await page.locator('#poiResults [data-focus-poi="osm-node-20"]').click();assert(await page.locator('.poi-popup').count()===1,'POI card locates and opens popup');assert(await page.locator('a[href^="javascript:"]').count()===0,'unsafe websites excluded');
 await page.locator('[data-curated="budapest-0"]').click();assert((await page.locator('.poi-popup').last().innerText()).includes('机场'),'airport shortcut enables layer and locates outside center');
 await page.locator('#fitMap').click();assert(await page.locator('#searchPois').isDisabled(),'wide city/airport view blocks expensive query');
 await page.reload();assert(!(await page.locator('input[data-poi-sub="Lidl"]').isChecked()),'per-city brand preferences survive reload');
 await page.locator('input[data-poi-group="transport"]:not([data-poi-sub])').uncheck();await page.locator('input[data-poi-group="food"]:not([data-poi-sub])').uncheck();
 await page.locator('input[data-poi-group="supermarkets"]:not([data-poi-sub])').check();await page.locator('input[data-poi-sub="Lidl"]').check();
 await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('已获取'));const beforeCache=requests.length;await page.locator('#searchPois').click();await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('缓存'));assert(requests.length===beforeCache,'identical viewport served from memory cache');
 // Change viewport through normal zoom controls so query differs from cache.
 await page.locator('.leaflet-control-zoom-in').click();mode='failure';await page.locator('#searchPois').click();
 await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('请求较多'));
 assert(await page.locator('[data-sub-count="supermarkets:Lidl"]').innerText()==='2','network failure preserves previously loaded results');
 await page.locator('.leaflet-control-zoom-in').click();mode='malformed';await page.locator('#searchPois').click();await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('未完整完成'));assert(!(await page.locator('#poiStatus').innerText()).includes('暂无匹配'),'server timeout not mistaken for zero results');
 await page.locator('.leaflet-control-zoom-in').click();mode='huge';await page.locator('#searchPois').click();await page.waitForFunction(()=>document.querySelector('#poiStatus').textContent.includes('600 个地点上限'));assert((await page.locator('[data-sub-count="supermarkets:Lidl"]').innerText())==='600','loaded stores capped at 600');assert(await page.locator('.poi-result').count()<=30,'result list capped at 30');assert(await page.locator('.poi-marker-wrap').count()<100,'cluster prevents hundreds of visible store icons');
 await page.locator('[data-country="at"]').first().click();await page.locator('[data-city="vienna"]').click();assert(await page.locator('input[data-poi-sub="HOFER"]').count()===1,'Austria has HOFER brand');assert((await page.locator('#poiResults').innerText()).includes('没有已载入'),'previous city fetched results not leaked');
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile explorer fits');await page.locator('input[data-poi-group="shopping"]:not([data-poi-sub])').check();assert((await page.locator('[data-group-count="shopping"]').innerText())==='2','curated shopping points available immediately');
 await page.screenshot({path:'/tmp/eurotrip-poi-mobile.png',fullPage:true});await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'/tmp/eurotrip-poi-desktop.png',fullPage:true});
 if(errors.length)console.error(errors);assert(errors.length===0,'no JavaScript errors');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

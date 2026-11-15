const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{chromium}=require('playwright');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('data/flavors.js','utf8'),c);const data=c.window.flavorCatalog;
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const base=process.env.SITE_URL||'http://127.0.0.1:4180',page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>new URL(r.request().url()).origin===new URL(base).origin?r.continue():r.abort());
 for(const [province,city,cityCode,total,features]of [['jiangxi','南昌',360100,222,11],['guangxi','南宁',450100,302,14],['guangdong','广州',440100,272,21]]){
  await page.goto(base+'/#card-manager/china?province='+province);await page.waitForSelector('#flavorProvinceMap svg');assert((await page.locator('[data-manager-count]').innerText()).startsWith(total+' 张'));assert.equal(await page.locator('#flavorProvinceMap [data-flavor-region]').count(),features);assert.equal(await page.locator('[data-map-province]').count(),18);assert.equal(await page.locator('.china-pending-province').count(),16);assert.equal(await page.locator('.china-pending-province').filter({hasText:/江西|广西|广东/}).count(),0);
  await page.locator('[data-flavor-city="'+city+'"]').click();await page.waitForSelector('#flavorCountyMap svg');assert(await page.locator('#flavorCountyMap [data-flavor-county]').count()>0);
  for(const view of ['waterfall','groups','table']){await page.locator('[data-china-view="'+view+'"]').click();assert.equal(await page.locator('.flavor-card figcaption,tbody details').count(),0);assert(await page.locator(view==='table'?'tbody tr':'.ui-card').count()>0);}
  await page.locator('[data-china-view="waterfall"]').click();await page.locator('.hub-detail-action').first().click();await page.waitForSelector('.entity-detail');assert(await page.locator('.entity-sources a').count()>0);assert(await page.locator('.china-detail-back').isVisible());
 }
 for(const [code,name]of [['441900','东莞'],['442000','中山']]){
  await page.goto(base+'/#china/guangdong/cn-'+code);await page.waitForSelector('#chinaCounty');assert.equal(await page.locator('[data-china-page-title]').innerText(),name+'总览');assert(await page.locator('#chinaCounty').isDisabled());assert.equal(await page.locator('#chinaCounty option').count(),1);assert.equal(await page.locator('#chinaCounty option').innerText(),'全市范围');assert((await page.locator('.ui-card .ui-card-meta small').first().innerText()).includes('全市范围'));
 }
 for(const width of [390,320]){await page.setViewportSize({width,height:1000});await page.goto(base+'/#card-manager/china?province=guangdong&view=table');await page.waitForSelector('tbody tr');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 assert.deepEqual(errors,[]);console.log('PASS new province totals/maps, 18 covered and 16 pending, 3 views/details, Dongguan/Zhongshan county handling and mobile overflow');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});

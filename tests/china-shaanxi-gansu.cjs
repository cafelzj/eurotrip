const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const base=process.env.SITE_URL||'http://127.0.0.1:4180',p=await b.newPage({ignoreHTTPSErrors:true,viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('**/*',r=>new URL(r.request().url()).origin===new URL(base).origin?r.continue():r.abort());
 const go=async hash=>{await p.goto(base+'/'+hash);await p.waitForSelector('[data-manager-count]');};
 for(const [province,count,city,code,features,countyCode]of [['shaanxi',147,'西安','610100',10,'610114'],['gansu',164,'天水','620500',14,'620525']]){
  await go('#card-manager/china?province='+province);assert((await p.locator('[data-manager-count]').innerText()).startsWith(count+' 张'));assert.equal(await p.locator('[data-china-province-choices] a[href*="province='+province+'"]').count(),1);assert.equal(await p.locator('.china-pending-province').filter({hasText:province==='shaanxi'?'陕西':'甘肃'}).count(),0);
  await p.waitForSelector('#flavorProvinceMap [data-flavor-region]');assert.equal(await p.locator('#flavorProvinceMap [data-flavor-region]').count(),features);
  await p.locator('[data-flavor-city="'+city+'"]').click();await p.waitForSelector('#flavorCountyMap [data-flavor-county="'+countyCode+'"]');await p.locator('#flavorCountyMap [data-flavor-county-label="'+countyCode+'"]').click();assert(p.url().includes('county='+countyCode));assert((await p.locator('[data-manager-count]').innerText()).match(/^[1-9]\d* 张/));
  await go('#china/'+province);assert.equal(await p.locator('#chinaProvince').inputValue(),province);
  for(const view of ['waterfall','groups','table']){await p.locator('[data-china-view="'+view+'"]').click();assert((await p.locator('[data-manager-count]').innerText()).startsWith(count+' 张'));assert.equal(await p.locator('.ui-card > details,tbody details,figcaption').count(),0);}
  await p.locator('tbody .manager-row-actions a').first().click();await p.waitForSelector('.entity-reading');assert(await p.locator('.entity-reading').innerText());
  await go('#china/'+province+'/cn-'+code);assert.equal(await p.locator('#chinaPrefecture').inputValue(),'cn-'+code);assert.equal(await p.locator('#chinaCounty').isDisabled(),false);
 }
 await go('#china/gansu/cn-620200');assert.equal(await p.locator('#chinaCounty').isDisabled(),true);assert.equal(await p.locator('#chinaCounty option').count(),1);assert((await p.locator('#chinaCounty').innerText()).includes('全市范围'));assert((await p.locator('[data-manager-count]').innerText()).startsWith('3 张'));
 await p.locator('#chinaMode').click();await p.locator('[data-region-search]').fill('甘肃 张家川');assert.equal(await p.locator('[data-nav-region-result]').count(),1);assert((await p.locator('[data-nav-region-result]').innerText()).includes('天水'));
 await p.keyboard.press('Escape');await p.setViewportSize({width:390,height:844});await go('#card-manager/china?province=shaanxi&city='+encodeURIComponent('西安'));assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);console.log('PASS Shaanxi/Gansu province buttons, maps and county selection, 3 views, details, prefecture scope, Jiayuguan whole city, region search and mobile');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

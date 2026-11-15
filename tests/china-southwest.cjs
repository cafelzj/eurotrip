const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const base=process.env.SITE_URL||'http://127.0.0.1:4180',p=await b.newPage({ignoreHTTPSErrors:true,viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('**/*',r=>new URL(r.request().url()).origin===new URL(base).origin?r.continue():r.abort());
 const go=async hash=>{await p.goto(base+'/'+hash);await p.waitForSelector('[data-manager-count]');};
 for(const [province,count,city,code,features,countyCode]of [['sichuan',573,'成都','510100',21,'510114'],['yunnan',265,'昆明','530100',16,'530181'],['guizhou',203,'贵阳','520100',9,'520123']]){
  await go('#card-manager/china?province='+province);assert((await p.locator('[data-manager-count]').innerText()).startsWith(count+' 张'));
  await p.waitForSelector('#flavorProvinceMap [data-flavor-region]');assert.equal(await p.locator('#flavorProvinceMap [data-flavor-region]').count(),features);
  await p.locator('[data-flavor-city="'+city+'"]').click();await p.waitForSelector('#flavorCountyMap [data-flavor-county="'+countyCode+'"]');await p.locator('#flavorCountyMap [data-flavor-county-label="'+countyCode+'"]').click();assert(p.url().includes('county='+countyCode));
  await go('#china/'+province);assert.equal(await p.locator('#chinaProvince').inputValue(),province);
  for(const view of ['waterfall','groups','table']){await p.locator('[data-china-view="'+view+'"]').click();assert((await p.locator('[data-manager-count]').innerText()).startsWith(count+' 张'));assert.equal(await p.locator('.ui-card > details,tbody details,figcaption').count(),0);}
  await p.locator('tbody .manager-row-actions a').first().click();await p.waitForSelector('.entity-reading');assert(await p.locator('.entity-reading').innerText());
  await go('#china/'+province+'/cn-'+code);assert.equal(await p.locator('#chinaPrefecture').inputValue(),'cn-'+code);assert.equal(await p.locator('#chinaCounty').isDisabled(),false);
 }
 await go('#card-manager/china?province=chongqing');assert((await p.locator('[data-manager-count]').innerText()).startsWith('94 张'));await p.waitForSelector('#flavorProvinceMap [data-flavor-region]');assert.equal(await p.locator('#flavorProvinceMap [data-flavor-region]').count(),38);
 await go('#china/chongqing/cn-500000');assert.equal(await p.locator('#chinaCounty option').count(),39);await p.locator('#chinaCounty').selectOption('cn-500117');await p.waitForURL('**/cn-500117*');assert((await p.locator('[data-manager-count]').innerText()).match(/^[1-9]\d* 张/));
 await go('#china/sichuan');await p.locator('#chinaMode').click();await p.locator('[data-region-search]').fill('云南 勐海');assert.equal(await p.locator('[data-nav-region-result]').count(),1);await p.keyboard.press('Escape');
 for(const width of [320,390]){await p.setViewportSize({width,height:844});await go('#card-manager/china?province=sichuan');assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 assert.deepEqual(errors,[]);console.log('PASS southwest provinces, county maps, 3 views, details, Chongqing municipality, region search and mobile');
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 const base=process.env.SITE_URL||'http://127.0.0.1:3014';
 await p.goto(base+'/#words');await p.waitForSelector('.word-row');
 const languages=()=>p.locator('#dictionaryHead [data-language]').evaluateAll(nodes=>nodes.map(n=>n.dataset.language));
 assert.deepEqual(await languages(),['zh','en','hu','de']);assert.equal(await p.locator('[data-display-language]').count(),5);
 assert(await p.evaluate(()=>words.length===87&&words.every(w=>dictionaryLanguages.every(l=>typeof w[l.id]==='string'&&w[l.id].length))));
 await p.fill('#search','jabuka');assert.equal(await p.locator('.word-row').count(),2);assert((await p.locator('.word-row[data-word="0"]').innerText()).includes('苹果'));await p.fill('#search','alma');
 const favorite=p.locator('.word-row [data-favorite]');await favorite.click();assert.equal(await favorite.getAttribute('aria-pressed'),'true');
 await p.locator('.language-settings>summary').click();await p.locator('[data-display-language="sr"]').check();await p.locator('[data-display-language="hu"]').uncheck();
 assert.deepEqual(await languages(),['zh','en','de','sr']);assert((await p.locator('.word-row').innerText()).includes('jabuka'));assert(!(await p.locator('.word-row').innerText()).includes('alma'));
 await p.locator('.word-row').click();assert.deepEqual(await p.locator('.translation').evaluateAll(nodes=>nodes.map(n=>n.dataset.language)),['zh','en','de','sr']);
 assert.equal(await p.locator('.translation[data-language="sr"] [data-say]').getAttribute('data-lang'),'sr-RS');assert(await p.locator('.dictionary-links a[href$="#Serbian"]').count());assert.equal(await p.locator('.translation[data-language="de"] b').innerText(),'der Apfel');assert.equal(await p.locator('.dictionary-links a[href$="#German"]').getAttribute('href'),'https://en.wiktionary.org/wiki/Apfel#German');
 await p.evaluate(()=>{window.spoken=[];speechSynthesis.getVoices=()=>[{lang:'sr-RS'}];speechSynthesis.speak=u=>spoken.push([u.text,u.lang]);});await p.locator('.translation[data-language="sr"] [data-say]').click();assert.deepEqual(await p.evaluate(()=>spoken),[['jabuka','sr-RS']]);await p.keyboard.press('Escape');
 await p.reload();assert.deepEqual(await languages(),['zh','en','de','sr']);assert.equal(await p.locator('#savedCount').innerText(),'1');await p.locator('.language-settings>summary').click();
 for(const id of ['zh','en','de'])await p.locator(`[data-display-language="${id}"]`).uncheck();assert.deepEqual(await languages(),['sr']);assert(await p.locator('[data-display-language="sr"]').isDisabled());
 await p.locator('#resetLanguages').click();assert.deepEqual(await languages(),['zh','en','hu','de']);
 // A registered language without translations still works throughout the UI.
 await p.evaluate(()=>{dictionaryLanguages.push({id:'test',name:'测试语言',native:'Test',heading:'TEST',flag:'🌐',locale:'en-US',defaultVisible:false});render();});
 await p.locator('[data-display-language="test"]').check();assert.equal(await p.locator('.word-row').first().locator('[data-language="test"]').innerText(),'—');await p.locator('.word-row').first().click();assert.equal(await p.locator('.translation[data-language="test"] b').innerText(),'暂未收录');assert.equal(await p.locator('.translation[data-language="test"] [data-say]').count(),0);await p.keyboard.press('Escape');
 await p.reload();assert.deepEqual(await languages(),['zh','en','hu','de']);await p.locator('.language-settings>summary').click();await p.locator('[data-display-language="sr"]').check();
 for(const width of [1440,390,320]){await p.setViewportSize({width,height:900});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 await p.screenshot({path:'/tmp/dictionary-languages-mobile.png'});await p.locator('.word-row').first().click();assert.equal(await p.locator('.translation').count(),5);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.keyboard.press('Escape');
 await p.evaluate(()=>localStorage.setItem('eurotrip-display-languages','["obsolete"]'));await p.reload();assert.deepEqual(await languages(),['zh','en','hu','de']);assert.deepEqual(errors,[]);
 console.log('PASS configurable columns/details/speech/links, all-language search, persistence/reset/minimum, favorites, new-language missing values and desktop/mobile');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});

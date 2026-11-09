const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process'),{chromium}=require('playwright'),settle=require('./wait-for-route.cjs');
const root=path.join(__dirname,'..'),ctx=vm.createContext({});
for(const file of ['categories','knowledge-cards'])vm.runInContext(fs.readFileSync(path.join(root,'data',file+'.js'),'utf8'),ctx);
const {cards,categories}=JSON.parse(vm.runInContext('JSON.stringify({cards:knowledgeCards.filter(n=>n.subcategory==="living-costs"),categories:cardCategories})',ctx)),byId=new Map(cards.map(n=>[n.id,n]));
const evidence=JSON.parse(fs.readFileSync(path.join(root,'docs/living-costs-sources.json'),'utf8'));
assert.equal(categories.secondary.find(n=>n.id==='living-costs').category,'facts');
assert.deepEqual([...new Set(cards.map(n=>n.country))].sort(),['at','de','hu','pl','rs','si']);
for(const n of cards){
 assert(!n.point&&!n.searchKind,'financial context does not create a fabricated POI');
 const c=n.costOfLiving;assert(c.period&&c.basis&&c.currency&&/^\d{4}-\d\d-\d\d$/.test(c.checked));
 assert(n.subtitle.includes(c.period)||n.subtitle.includes('2026'),'data period is visible on the list');
 assert(n.reading.length>=3&&n.reading.every(s=>s.title&&s.text));
 assert(Object.values(c.figures).every(v=>Number.isFinite(v)&&v>=0));
 assert(n.sources.every(([url,label])=>url.startsWith('https://')&&label));
 assert(evidence.sources.some(s=>s.cards.includes(n.id)),'official source record '+n.id);
}
// Calculations must retain their source units and denominators.
const figures=id=>byId.get('living-'+id).costOfLiving.figures,round2=n=>Math.round(n*100)/100;
let f=figures('hu-household');assert.equal(Math.round(f.annualConsumptionPerPerson/12),f.monthlyConsumptionPerPersonApprox);
f=figures('hu-groceries');assert.equal(f.breadPerKg+f.uhtMilk28PerLitre+f.eggsPer10,f.exampleBasketTotal);
f=figures('si-groceries');assert.equal(round2(f.breadPerKg+f.uhtWholeMilkPerLitre+f.eggsPer10),f.exampleBasketTotal);
f=figures('si-lunch');assert.equal(round2(f.lunchPerPortion+f.espressoPerCup),f.exampleLunchAndCoffee);
f=figures('vienna-pass');assert.equal(round2(f.adultAnnualFrom/12),f.monthlyEquivalentApprox);
f=figures('de-groceries');assert.equal(f.twoPersonHouseholdMonthly/2,f.twoPersonPerPersonMonthly);
f=figures('ljubljana-pass');assert.equal(f.singleZone1*25,f.singleFares25Total);
assert(byId.get('living-pl-wage').costOfLiving.basis.includes('税前'));
assert.equal(byId.get('living-de-commute').costOfLiving.announcedNextEffective,'2027-01-01');
assert(!byId.get('living-pl-price-level').costOfLiving.basis.includes('通胀率'));
console.log('PASS six-country dated cost context, official provenance, units/denominators and arithmetic');
(async()=>{
 const base=(process.env.SITE_URL||'http://127.0.0.1:4173').replace(/\/$/,''),origin=new URL(base).origin,args=['--no-sandbox'];
 if(process.env.PROXY_CA){const pem=execFileSync('openssl',['x509','-in',process.env.PROXY_CA,'-pubkey','-noout']),der=execFileSync('openssl',['pkey','-pubin','-outform','DER'],{input:pem});args.push('--ignore-certificate-errors-spki-list='+crypto.createHash('sha256').update(der).digest('base64'));}
 const b=await chromium.launch({executablePath:'/usr/bin/chromium',args});
 try{
  const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());
  const go=async hash=>{await p.goto(base+'/'+hash);await settle(p);};
  const guide=(country,city='',view='groups')=>'#guide/'+country+(city?'/'+city:'')+'?'+new URLSearchParams({zone:'facts',kind:'物价与开销',view});
  for(const country of ['hu','at','de','rs','si','pl']){
   await go(guide(country));
   const ids=await p.locator('.hub-card').evaluateAll(es=>es.map(e=>e.dataset.knowledgeCard));
   assert.deepEqual(ids.sort(),cards.filter(n=>n.country===country).map(n=>n.id).sort(),'country filter includes exactly its cost cards');
  }
  for(const [country,city] of [['hu','budapest'],['at','vienna'],['at','salzburg'],['de','berlin'],['rs','belgrade'],['rs','novi-sad'],['si','ljubljana'],['si','maribor'],['pl','warsaw']]){
   await go(guide(country,city));
   const ids=await p.locator('.hub-card').evaluateAll(es=>es.map(e=>e.dataset.knowledgeCard));
   assert.deepEqual(ids.sort(),cards.filter(n=>n.country===country&&(!n.city||n.city===city)).map(n=>n.id).sort(),'national reference and city-specific boundaries '+city);
   for(const n of cards.filter(n=>n.country===country&&!n.city))assert((await p.locator('[data-knowledge-card="'+n.id+'"] .hub-card-meta').innerText()).includes('全国参考'));
  }
  await go(guide('hu','budapest','waterfall'));await p.fill('#hubSearch','鸡蛋');assert.equal(await p.locator('.hub-card').count(),1);assert.equal(await p.locator('.hub-card').getAttribute('data-knowledge-card'),'living-hu-groceries');
  await p.locator('.hub-detail-action').click();await settle(p);assert.equal(await p.locator('.entity-detail').getAttribute('data-entity-id'),'living-hu-groceries');
  for(const n of cards){
   await go('#card/'+n.id);assert.equal(await p.locator('.entity-detail').getAttribute('data-entity-id'),n.id);
   assert.equal(await p.locator('.entity-reading-section').count(),n.reading.length);
   const links=await p.locator('.entity-sources a').evaluateAll(es=>es.map(e=>[e.href,e.target,e.rel]));
   assert.equal(links.length,n.sources.length);for(const [i,[url,target,rel]]of links.entries()){assert.equal(url,new URL(n.sources[i][0]).href);assert.equal(target,'_blank');assert(rel.includes('noopener'));}
   assert.equal(await p.locator('.entity-map-tools').count(),0,'context cards never pretend to have a physical location');
   for(const width of [390,320]){await p.setViewportSize({width,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'detail fits '+width+' '+n.id);}
  }
  for(const view of ['groups','waterfall']){await go(guide('at','vienna',view));assert.equal(await p.locator('.hub-card').count(),3);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  await go('#card/living-si-lunch');await p.screenshot({path:'/tmp/living-costs-detail-mobile.png',fullPage:true});
  await go(guide('at','vienna','waterfall'));await p.screenshot({path:'/tmp/living-costs-cards-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]);console.log('PASS country/city scope, national labels, cost-category filters and search, linked detail reading, official links, no fake map actions, grouped/waterfall mobile layouts');
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});

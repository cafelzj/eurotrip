/* Read-only audit: an unmatched selector is a lead, never an automatic deletion. */
const fs=require('node:fs'),path=require('node:path'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),output=process.argv[2]||'/tmp/eurotrip-css-audit.json';
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const inputs=[...html.matchAll(/<script[^>]+src="([^"?]+)/g)].map(m=>m[1]);
function svgFiles(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?svgFiles(path.join(dir,e.name)):e.name.endsWith('.svg')?[path.join(dir,e.name)]:[]);}
const source=[html,...inputs.map(f=>fs.readFileSync(path.join(root,f),'utf8')),...svgFiles(path.join(root,'assets/maps/flavors')).map(f=>fs.readFileSync(f,'utf8'))].join('\n');
const tokens=new Set(source.match(/[a-zA-Z_][\w-]*/g));
const dynamic={ 'leaflet-':'Leaflet constructs popup and control classes dynamically', 'card-image-':'CardImages uses media.kind', 'produce-chart-':'chart SVG classes depend on metric', 'produce-feature-':'feature.kind', 'plan-priority-':'roadmap priority enum' };
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
 const p=await b.newPage(),base=process.env.SITE_URL||'http://127.0.0.1:4180',rules=new Map(),visited=[];
 await p.route('**/*',r=>new URL(r.request().url()).origin===new URL(base).origin?r.continue():r.abort());
 const routes=['#guide/hu','#guide/hu/budapest?view=groups','#guide/de/cologne?view=waterfall','#china/jiangsu/suzhou?view=groups','#china/jiangsu/suzhou?view=waterfall','#flavors','#flavors/shandong?city='+encodeURIComponent('济南')+'&county=370124','#flavors/beijing?district='+encodeURIComponent('延庆区'),'#flavors/jiangsu?q='+encodeURIComponent('松鼠鳜鱼'),'#card/food-budapest-0','#card/person-mozart','#card/place-innsbruck-4','#map/vienna','#card-manager','#card-manager/china','#words','#produce/hu','#produce/de','#produce/pl','#plan','#plan?view=roadmap','#plan?view=benchmarks'];
 for(const width of [1440,390]){
  await p.setViewportSize({width,height:1000});
  for(const route of routes){
   await p.goto(base+'/'+route);await p.waitForFunction(()=>typeof FlavorPage!=='undefined'&&document.querySelector('#travelGuide'));
   if(route.includes('county='))await p.waitForSelector('#flavorCountyMap svg');
   const snapshot=await p.evaluate(()=>{
    const result=[];
    function walk(list,file,conditions=[]){for(const r of list){if(r.selectorText){let count=null;try{const base=r.selectorText.replace(/::[\w-]+(?:\([^)]*\))?/g,'').replace(/:(?:hover|active|focus-visible|focus-within|focus)(?![\w-])/g,'');count=document.querySelectorAll(base).length;}catch{}result.push({file,selector:r.selectorText,conditions,matchedElements:count});}else if(r.cssRules)walk(r.cssRules,file,[...conditions,r.conditionText||r.name||'group']);}}
    for(const sheet of document.styleSheets)if(sheet.href&&!sheet.href.includes('/vendor/'))walk(sheet.cssRules,new URL(sheet.href).pathname.split('/').pop());return result;
   });
   for(const rule of snapshot){const key=rule.file+'|'+rule.conditions.join('|')+'|'+rule.selector,old=rules.get(key);if(old)old.matchedElements=Math.max(old.matchedElements||0,rule.matchedElements||0);else rules.set(key,rule);}
   visited.push({route,renderedRoute:new URL(p.url()).hash,width});
  }
 }
 const values=[...rules.values()];
 for(const rule of values){rule.identifiersAbsentFromRuntime=[...rule.selector.matchAll(/[.#]([a-zA-Z_][\w-]*)/g)].map(m=>m[1]).filter(n=>!tokens.has(n)&&!Object.keys(dynamic).some(prefix=>n.startsWith(prefix)));}
 const report={method:'CSSOM selector inventory plus markup matching; dynamic pseudo states relaxed. Matching does not prove a declaration wins the cascade; absence does not prove a selector is dead.',visited,dynamicRetained:dynamic,styleRuleCount:values.length,unmatchedRuleCount:values.filter(r=>r.matchedElements===0).length,staticCandidates:values.filter(r=>r.identifiersAbsentFromRuntime.length),rules:values};
 fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(`CSS audit: ${values.length} rules, ${visited.length} route/viewport samples, ${report.staticCandidates.length} static candidates; ${output}`);
}finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});

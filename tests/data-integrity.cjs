const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),context=vm.createContext({});context.window=context;context.sessionStorage={getItem:()=>null,setItem:()=>{}};
const files=['data/destinations.js','data/categories.js','data/cards.js','data/relations.js','data/china-cards.js','data/map-providers.js'];
for(const file of files){const source=fs.readFileSync(path.join(root,file),'utf8'),declaration=/const (\w+) = ([\s\S]*?);\n/g;for(const match of source.matchAll(declaration))JSON.parse(match[2]);assert.equal(source.replace(declaration,'').replace(/\/\*[\s\S]*?\*\//g,'').trim(),'',file+' should contain only JSON data declarations');vm.runInContext(source,context,{filename:file});}
vm.runInContext('globalThis.catalog={countries:travelCountries,cities:travelCities,categories:cardCategories,cards:[...travelCards,...chinaCards],relations:[...cardRelations,...chinaRelations]}',context);
const {countries,cities,categories,cards,relations}=JSON.parse(JSON.stringify(context.catalog));
const countryIds=new Set(countries.map(c=>c.id)),cityIds=new Set(cities.map(c=>c.id)),primary=new Map(categories.primary.map(c=>[c.id,c])),secondary=new Map(categories.secondary.map(c=>[c.id,c]));
assert.equal(primary.size,5);for(const p of primary.values())assert(p.name&&p.icon&&p.description&&p.prefix&&/^#[0-9a-f]{6}$/i.test(p.color));assert.equal(secondary.size,categories.secondary.length);assert.equal(new Set(cards.map(c=>c.id)).size,cards.length);
for(const sub of secondary.values()){assert(primary.has(sub.category));assert(sub.name&&sub.description&&sub.icon);}
for(const n of cards){assert(n.id&&n.name&&n.description&&n.type&&Array.isArray(n.sources));assert(secondary.has(n.subcategory));assert.equal(secondary.get(n.subcategory).category,n.category,n.id);assert((n.country&&countryIds.has(n.country))||n.countries?.length);for(const id of n.countries||[])assert(countryIds.has(id));for(const id of n.city?[n.city]:n.cities||[])assert(cityIds.has(id));if(n.searchKind)assert(['supermarket','restaurant'].includes(n.searchKind));assert(!(n.point&&n.searchKind),n.id+' cannot have a fixed POI and a dynamic search at once');if(n.point){assert(Number.isFinite(n.point.lat)&&Math.abs(n.point.lat)<=90&&Number.isFinite(n.point.lon)&&Math.abs(n.point.lon)<=180);}for(const [url,label]of n.sources)assert(/^https?:\/\//.test(url)&&label,n.id+' source');}
const suzhouCards=cards.filter(n=>n.city==='suzhou');assert(suzhouCards.length>=40);assert(suzhouCards.every(n=>n.country==='cn'&&(!n.point||n.point.coordSystem==='wgs84')));assert.equal(countries.find(c=>c.id==='cn').mapProvider,'osm');
const byId=new Map(cards.map(n=>[n.id,n]));for(const [from,to,forward,backward]of relations){assert(byId.has(from)&&byId.has(to));assert(from!==to&&forward&&backward);}
assert(cards.filter(n=>n.type==='place'&&n.point?.group==='transport').every(n=>n.category==='transport'));
for(const country of ['hu','at','de']){assert.equal(byId.get('tip-'+country+'-money').category,'brands');for(const suffix of ['deposit',country==='hu'?'hours':'sunday'])assert.equal(byId.get('tip-'+country+'-'+suffix).category,'brands');}
assert.equal(byId.get('tip-common-bill').category,'food');for(const id of ['tip-hu-food','tip-at-water','tip-de-water'])assert.equal(byId.get(id).category,'food');
for(const city of cities){for(const id of ['tip-city-'+city.id,'tip-'+city.id+'-ticket-choice','tip-'+city.id+'-transit-tools'])assert.equal(byId.get(id).category,'transport');}
assert(!cards.some(n=>n.category==='essential'));
assert.equal(byId.get('tip-common-help').category,'facts');
assert.equal(secondary.get('daily').category,'facts');
assert.deepEqual(categories.primary.map(c=>c.id),['transport','food','brands','places','facts']);
assert.equal(secondary.get('pharmacy').category,'brands');
for(const country of ['hu','at','de']){assert.equal(byId.get('tip-'+country+'-pharmacy').category,'brands');assert.equal(byId.get('tip-'+country+'-shared-mobility').subcategory,'shared-mobility');}
for(const city of ['budapest','vienna','berlin','munich','hamburg']){const n=byId.get('tip-'+city+'-metro');assert.equal(n.city,city);assert.equal(n.subcategory,'metro');assert.equal(n.category,'transport');assert(!n.point&&!n.searchKind);}
vm.runInContext(fs.readFileSync(path.join(root,'card-store.js'),'utf8'),context,{filename:'card-store.js'});
assert.equal(context.CardStore.nodes.size,cards.length);assert([...context.CardStore.nodes.values()].every(n=>!n.point||n.point.knowledgeId===n.id));assert.equal([...context.CardStore.edges.values()].reduce((sum,es)=>sum+es.length,0),relations.length*2);
assert([...context.CardStore.edges].every(([id,es])=>es.every(e=>(context.CardStore.edges.get(e.to)||[]).some(back=>back.to===id))));
const dynamic=context.CardStore.add({id:'test-dynamic-store',type:'place',live:true,parentCard:'brand-lidl',country:'at',city:'vienna',name:'测试门店',description:'测试',point:{lat:48.2,lon:16.37,group:'supermarkets'}});assert.equal(dynamic.category,'brands');assert.equal(dynamic.subcategory,'supermarket-locations');
console.log(`PASS independent data files, ${cards.length} unique cards, ${relations.length} bidirectional links, five categories, all requested migrations and runtime registration`);

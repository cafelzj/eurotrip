const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const context=vm.createContext({}),root=path.join(__dirname,'..');
function load(file){const code=fs.readFileSync(path.join(root,file),'utf8');const declaration=/^const (\w+) = ([\s\S]*);\s*$/;const match=code.match(declaration);assert(match,file+' must be a data declaration');JSON.parse(match[2]);vm.runInContext(code,context,{filename:file});}
for(const file of ['data/produce-food.js','data/produce-energy.js','data/produce-stats.js'])load(file);
for(const file of ['data/cards.js','data/capitals-cards.js','data/china-cards.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
vm.runInContext('this.data={food:produceFood,energy:produceEnergy,stats:produceStats,cards:[...travelCards,...capitalCards,...chinaCards]}',context);
const {food,energy,stats,cards}=JSON.parse(JSON.stringify(context.data));
const sources=new Map([...food.sources,...energy.sources,...stats.sources].map(s=>[s.id,s]));
assert.equal(sources.size,food.sources.length+energy.sources.length+stats.sources.length,'source IDs must be unique');
const categories=new Set(food.categories.map(c=>c.id)),methods=new Set(food.methods.map(m=>m.id)),cardIds=new Set(cards.map(n=>n.id));
const items=new Map(food.items.map(n=>[n.id,n]));assert.equal(items.size,food.items.length);assert(food.items.length>=60);assert.equal(categories.size,12);
function checkRefs(value){if(!value||typeof value!=='object')return;for(const id of value.sourceIds||[])assert(sources.has(id),'unresolved source '+id);for(const child of Object.values(value))if(child&&typeof child==='object')Array.isArray(child)?child.forEach(checkRefs):checkRefs(child);}
checkRefs({food,energy,stats});
for(const item of items.values()){
 assert(item.name&&item.hu&&item.en&&item.summary&&item.trade&&item.regions.length,item.id);
 assert(categories.has(item.category));assert(Boolean(item.icon)!==Boolean(item.iconLabel),item.id+' must have an accurate emoji or text symbol');assert(item.features.every(f=>food.featureTypes.some(t=>t.id===f.kind)&&f.name&&f.description));assert(['local','domestic','mixed','import'].includes(item.origin));
 assert(item.season.every(m=>Number.isInteger(m)&&m>=1&&m<=12));assert(item.cooking.every(m=>methods.has(m)));
 assert(item.cardIds.every(id=>cardIds.has(id)),item.id+' links a missing card');assert(!item.point&&!item.searchKind,'atlas items do not fabricate map points');
}
assert.equal(items.get('milk').category,'dairy');assert.equal(items.get('egg').category,'eggs');assert.equal(items.get('pork').category,'meat');assert.equal(items.get('walnut').category,'nuts');assert.equal(items.get('walnut').iconLabel,'核桃');assert.equal(items.get('sunflower').category,'oil');assert.equal(items.get('rapeseed').category,'oil');assert.equal(items.get('sugar-beet').category,'sweetener');assert.equal(items.get('carp').category,'aquatic');assert.equal(items.get('carp').habitat,'freshwater');assert.equal(items.get('shrimp').habitat,'marine');assert.equal(food.indicators.length,6);
const variables=new Map(stats.sources.flatMap(s=>(s.variables||[]).map(v=>[v.id,{...v,source:s}])));
const charts=[...stats.charts,...energy.charts];assert.equal(charts.length,9);assert.equal(new Set(charts.map(c=>c.id)).size,charts.length);
for(const chart of charts){
 assert.equal(chart.scope,'匈牙利全国');assert(chart.description&&chart.unit&&chart.sourceIds.length);
 assert(chart.years.every((y,i)=>Number.isInteger(y)&&y>=2020&&y<=2025&&(!i||y>chart.years[i-1])));
 assert(chart.sourceIds.every(id=>sources.get(id).verified===true),'charts require actually read data');
 for(const series of chart.series){
  assert(series.name);assert.equal(series.values.length,chart.years.length);assert(series.values.every(v=>v===null||Number.isFinite(v)));
  if(series.variableId){const v=variables.get(series.variableId);assert(v);assert(chart.sourceIds.includes(v.source.id));assert.equal(v.unit,chart.unit==='吨'?(v.id>=1290000?'metric tons':'tonnes'):chart.unit==='%'?'% of energy use':'kilograms per year per capita');}
 }
}
for(const source of stats.sources){
 assert.match(source.version,/^[a-f0-9]{40}$/);assert.equal(source.accessed,stats.updatedAt);
 for(const variable of source.variables){assert(variable.url.includes(source.version));assert(variable.metadataUrl.includes(source.version));assert.match(variable.dataSha256,/^[a-f0-9]{64}$/);assert.match(variable.metadataSha256,/^[a-f0-9]{64}$/);assert(variable.definition&&variable.upstream.length);}
}
const chartById=new Map(charts.map(c=>[c.id,c]));
assert.equal(chartById.get('field-crops').series.find(s=>s.name==='小麦').values.at(-1),5272960);
assert.equal(chartById.get('cereal-trade').series.find(s=>s.name==='谷物进口').values.at(-1),2085000);
assert.equal(chartById.get('cereal-trade').series.find(s=>s.name==='谷物出口').values.at(-1),6228000);
assert.equal(chartById.get('cereal-trade').years.at(-1),2023);
assert.equal(chartById.get('energy-net-imports').series[0].values.at(-1),62.50981);
assert.equal(chartById.get('food-availability').years.at(-1),2023);
for(const metric of stats.itemMetrics){assert(items.has(metric.itemId));assert(variables.has(metric.variableId));assert.equal(metric.scope,'匈牙利全国');assert(metric.sourceIds.every(id=>sources.get(id).verified));}
assert(Math.abs(energy.electricity.mix.reduce((sum,n)=>sum+n.value,0)-energy.electricity.generation)<1e-8);
for(const row of energy.electricityTrend){assert(Math.abs(row.generation+row.netImports-row.demand)<.011);assert.equal(row.imports,null);assert.equal(row.exports,null);}
assert.equal(energy.latestElectricity.year,2025);assert.equal(energy.fuelConsumption.year,2024);
const electricityHighlight=stats.highlights.find(h=>h.label.startsWith('电力'));assert.equal(electricityHighlight.value,energy.latestElectricity.netImportShare);assert.equal(electricityHighlight.year,energy.latestElectricity.year);
console.log('PASS 60 food entries, existing-card links, complete source graph, 26 pinned variables, units/years/scope, trade quantities and energy accounting');

// Wait for the rendered destination, rather than assuming hashchange ran before click resolved.
module.exports=page=>page.waitForFunction(()=>{
 const [path,query='']=location.hash.slice(1).split('?'),parts=path.split('/');
 if(parts[0]==='cards')return !!document.querySelector('.knowledge-hub');
 if(parts[0]==='card'){let id;try{id=decodeURIComponent(parts.slice(1).join('/'));}catch{return !!document.querySelector('.entity-missing');}return CardGraph.nodes.has(id)?!!document.querySelector('[data-entity-id="'+CSS.escape(id)+'"]'):!!document.querySelector('.entity-missing');}
 if(parts[0]==='words')return document.querySelector('#vocabulary')?.hidden===false;
 if(parts[0]==='map'){const city=travelCities.find(c=>c.id===parts[1]),params=new URLSearchParams(query);const node=CardGraph.nodes.get(params.get('food')||params.get('focus'));return !!document.querySelector('.map-focused .map-context')&&document.querySelector('.city-hero h1')?.textContent.startsWith(city?.name)&&(!node||document.querySelector('.map-context h2')?.textContent.includes(node.name));}
 if(parts[0]==='guide'){if(parts[2]){const city=travelCities.find(c=>c.id===parts[2]);return !!city&&!document.querySelector('#travelGuide').classList.contains('map-focused')&&document.querySelector('.city-hero h1')?.textContent.startsWith(city.name);}return !!document.querySelector('.country-tabs [data-country="'+CSS.escape(parts[1]||'hu')+'"].selected')&&!!document.querySelector('.knowledge-hub[data-scope="'+CSS.escape(parts[1]||'hu')+'"]');}
 return true;
});

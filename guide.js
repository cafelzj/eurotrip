(()=>{
 let map,explorer;
 const guide=document.querySelector('#travelGuide'),countries=travelCountries,cities=travelCities;
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const link=(url,label)=>`<a href="${h(url)}" target="_blank" rel="noopener noreferrer">${h(label)} ↗</a>`;
 KnowledgeHub.finalize();
 function setMode(travel){guide.hidden=!travel;document.querySelector('#vocabulary').hidden=travel;document.querySelector('#travelMode').classList.toggle('selected',travel);document.querySelector('#wordsMode').classList.toggle('selected',!travel);}
 function navigate(hash){if(location.hash===hash)route();else location.hash=hash;}
 function disposeMap(){explorer?.destroy();explorer=null;if(map){map.stop();map.remove();map=null;}}
 function destinationHeader(country,city){const n=city||country;return `<div class="breadcrumbs"><a href="#guide/${country.id}">${country.flag} ${h(country.name)} · 国家知识</a><span>/ ${city?h(city.name):'国家概览'}</span></div><div class="destination-hero ${city?'city-hero':'country-intro'}"><div><div class="guide-kicker">${city?'CITY':'COUNTRY'} FIELD NOTES · ${h(n.local.toUpperCase())}</div><h1>${city?'':country.flag+' '}${h(n.name)}<small>${h(n.local)}</small></h1><p>${h(n.intro)}</p>${link(n.tourism,'官方旅行指南')}</div></div>`;}
 function destinationFacts(country,city){const items=city?[['河流与地形',city.river],['气候与季节',city.climate],['货币 · '+city.currency,city.prices]]:[['首都',country.capital],['货币',country.currency],['主要语言',country.language]];return `<section class="destination-facts ${city?'city-environment':''}" aria-label="目的地基本信息">${items.map(([title,body])=>`<article><h3>${h(title)}</h3><p>${h(body)}</p>${city&&title.startsWith('货币')?'<small>物价为相对预算描述，并非实时价格；季节与位置会影响费用。</small>':''}</article>`).join('')}</section>`;}
 function destinationPage(country,city,zone){guide.innerHTML=destinationHeader(country,city)+KnowledgeHub.cityPicker(country,city)+destinationFacts(country,city)+KnowledgeHub.render(country,city,zone);KnowledgeHub.bind(guide);}
 function mapPage(country,city,params){KnowledgeHub.rememberDestination(country,city);const scope=city||country;guide.innerHTML=`<div class="breadcrumbs"><a href="#guide/${country.id}${city?'/'+city.id:''}">← ${h(scope.name)} · 国家知识</a></div><div class="city-hero map-destination-heading"><h1>${h(scope.name)}<small>卡片地图</small></h1></div><section id="cityExplorer" aria-label="卡片地图图层"></section><div class="guide-layout city-map-layout"><div class="map-panel"><div id="travelMap" aria-label="${h(scope.name)}卡片地图"></div><div class="map-caption"><span id="mapNotice">© OpenStreetMap · 参考位置</span><button id="fitMap">显示全部地点</button></div></div><div class="sights-column"></div></div>`;guide.classList.add('map-focused');
 if(!window.L){document.querySelector('#travelMap').textContent='地图未能加载，请从国家知识卡片继续浏览。';return;}
 const center=city||cities.find(c=>c.country===country.id);map=L.map('travelMap',{scrollWheelZoom:false,zoomAnimation:false}).setView([center.lat,center.lon],city?13:7);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).on('tileerror',()=>{const notice=document.querySelector('#mapNotice');if(notice)notice.textContent='底图暂不可用，卡片地点仍可查看。';}).addTo(map);
 const border=countryBorders.features.find(f=>f.properties.name===country.border);if(border){const layer=L.geoJSON(border,{style:{color:'#879f78',weight:1.5,fillOpacity:city?0:.2},interactive:false}).addTo(map);if(!city)map.fitBounds(layer.getBounds(),{padding:[20,20]});}
 explorer=CityExplorer.mount({map,country,city});const fixed=CardGraph.nodes.get(params.get('focus')),search=CardGraph.nodes.get(params.get('search')||params.get('food'));const inScope=n=>n&&KnowledgeHub.scoped(country,city).some(x=>x.id===n.id);
 if(inScope(fixed)&&KnowledgeHub.mapBinding(fixed).mode==='fixed')explorer.focusNode(fixed.id);
 if((inScope(search)||search?.shopping&&search.country===country.id)&&KnowledgeHub.mapBinding(search).mode==='dynamic')explorer.searchCard(search);
 requestAnimationFrame(()=>map?.invalidateSize());
 }
 function renderRoute(){disposeMap();guide.classList.remove('map-focused');const [path,query='']=location.hash.slice(1).split('?'),parts=path.split('/'),params=new URLSearchParams(query);if(parts[0]==='words'){setMode(false);return;}setMode(true);
 if(parts[0]==='cards'){navigate('#guide/'+KnowledgeHub.lastCountry());return;}
 if(parts[0]==='card'){let id;try{id=decodeURIComponent(parts.slice(1).join('/'));}catch{id='';}guide.innerHTML=CardGraph.renderDetail(id);return;}
 if(parts[0]==='map'){const city=cities.find(c=>c.id===parts[1]),country=countries.find(c=>c.id===(city?.country||parts[1]));if(!country){navigate('#guide/'+KnowledgeHub.lastCountry());return;}mapPage(country,city,params);return;}
 const country=countries.find(c=>c.id===parts[1])||countries[0],city=parts[2]?cities.find(c=>c.id===parts[2]&&c.country===country.id):null;if(parts[2]&&!city){navigate('#guide/'+country.id);return;}destinationPage(country,city,params.get('zone')||'all');
 }
 const countryButton=document.querySelector('#travelMode'),countryMenu=document.querySelector('#countryMenu');
 function closeCountryMenu(focus=false){countryMenu.hidden=true;countryButton.setAttribute('aria-expanded','false');if(focus)countryButton.focus();}
 function syncCountryMenu(){const parts=location.hash.slice(1).split('?')[0].split('/');let id=parts[0]==='guide'?parts[1]:parts[0]==='map'?(cities.find(c=>c.id===parts[1])?.country||countries.find(c=>c.id===parts[1])?.id):parts[0]==='card'?(()=>{try{const n=CardGraph.nodes.get(decodeURIComponent(parts[1]));return n?KnowledgeHub.destinationFor(n).country.id:null;}catch{return null;}})():null;id=id||KnowledgeHub.lastCountry();const selected=countries.find(c=>c.id===id)||countries[0];countryButton.textContent='◎ 国家知识'+(parts[0]==='words'?'':' · '+selected.name)+' ▾';countryMenu.innerHTML=countries.map(c=>`<button type="button" role="menuitemradio" tabindex="-1" aria-checked="${c.id===selected.id}" data-nav-country="${c.id}"><span>${c.flag}</span><span><b>${h(c.name)}</b><small>${h(c.local)}</small></span><i>${c.id===selected.id?'✓':''}</i></button>`).join('');}
 function openCountryMenu(){countryMenu.hidden=false;countryButton.setAttribute('aria-expanded','true');(countryMenu.querySelector('[aria-checked=true]')||countryMenu.querySelector('button'))?.focus();}
 function route(){closeCountryMenu();renderRoute();syncCountryMenu();window.FloatingMap?.sync();}
 countryButton.onclick=()=>countryMenu.hidden?openCountryMenu():closeCountryMenu();document.querySelector('#wordsMode').onclick=()=>navigate('#words');
 countryMenu.onclick=e=>{const option=e.target.closest('[data-nav-country]');if(!option)return;closeCountryMenu(true);navigate('#guide/'+option.dataset.navCountry);};
 document.addEventListener('click',e=>{if(!e.target.closest('.country-mode-control'))closeCountryMenu();});
 document.addEventListener('focusin',e=>{if(!e.target.closest('.country-mode-control'))closeCountryMenu();});
 countryButton.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();openCountryMenu();}});
 countryMenu.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeCountryMenu(true);return;}if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const options=[...countryMenu.querySelectorAll('button')],at=options.indexOf(document.activeElement),next=e.key==='Home'?0:e.key==='End'?options.length-1:(at+(e.key==='ArrowDown'?1:-1)+options.length)%options.length;options[next].focus();});
 document.querySelector('#saved').addEventListener('click',()=>{navigate('#words');});
 window.addEventListener('hashchange',()=>{route();window.scrollTo({top:0,behavior:'instant'});});route();
})();

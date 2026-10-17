/* Administrative hierarchy and its selector; card content remains in data/. */
window.ChinaRegions=(()=>{
 const destinations=travelCities.filter(c=>c.country==='cn'),byId=new Map(destinations.map(c=>[c.id,c]));
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=id=>byId.get(id),parent=city=>get(city?.parentCity),province=city=>chinaProvinces.find(p=>p.id===city?.provinceId);
 const prefectures=provinceId=>destinations.filter(c=>!c.parentCity&&(!provinceId||c.provinceId===provinceId));
 const counties=city=>destinations.filter(c=>c.parentCity===city?.id);
 const contains=(scope,id)=>!!scope&&!!get(id)&&(scope.id===id||get(id).parentCity===scope.id);
 function url(city){const root=parent(city)||city;return '#china/'+root.provinceId+'/'+root.id+(city.parentCity?'/'+city.id:'');}
 function resolve(parts){
  if(parts.length===1)return get(parts[0]); // Preserve links published before the hierarchy.
  const root=get(parts[1]);if(!root||root.parentCity||root.provinceId!==parts[0])return null;
  if(parts.length===2)return root;
  const child=get(parts[2]);return parts.length===3&&child?.parentCity===root.id?child:null;
 }
 function path(city){const root=parent(city)||city;return [{name:province(city).name},...([root,...(city.parentCity?[city]:[])]).map(c=>({name:c.adminName,url:url(c)}))];}
 const label=city=>path(city).map(c=>c.name).join(' · ');
 function breadcrumbs(city,linkCurrent=false){return path(city).map((part,i,parts)=>`<span>/</span>${part.url&&(linkCurrent||i<parts.length-1)?`<a href="${part.url}">${h(part.name)}</a>`:`<span>${h(part.name)}</span>`}`).join('');}
 function picker(city){
  const root=parent(city)||city,localCounties=counties(root);
  return `<section class="destination-picker china-region-picker" aria-label="按省份、地级市和县级目的地选择"><div class="destination-picker-heading"><h2>选择目的地</h2><span>按省份 → 地级市 → 县 / 县级市探索</span></div><div class="china-region-fields"><label>省份<select id="chinaProvince" aria-label="省份">${chinaProvinces.map(p=>`<option value="${p.id}" ${p.id===city.provinceId?'selected':''}>${h(p.name)}</option>`).join('')}</select></label><label>地级市<select id="chinaPrefecture" aria-label="地级市">${prefectures(city.provinceId).map(c=>`<option value="${c.id}" ${c.id===root.id?'selected':''}>${h(c.adminName)}</option>`).join('')}</select></label><label>县 / 县级市<select id="chinaCounty" aria-label="县或县级市"><option value="${root.id}">全市概览</option>${localCounties.map(c=>`<option value="${c.id}" ${c.id===city.id?'selected':''}>${h(c.adminName)}${c.level==='county-city'?'（县级市）':''}</option>`).join('')}</select></label></div><p class="china-region-note">${city.parentCity?`当前只展示${h(city.adminName)}的已收录卡片。 <a href="${url(root)}">返回${h(root.adminName)}全市概览 →</a>`:`${h(root.adminName)}全市概览包含市区与下辖县、县级市的已收录内容；切换县级目的地可缩小卡片与地图范围。`}</p></section>`;
 }
 function bind(root){
  const provinceSelect=root.querySelector('#chinaProvince');if(!provinceSelect)return;
  const navigate=city=>{location.hash=url(city);};
  provinceSelect.onchange=e=>navigate(prefectures(e.target.value)[0]);
  root.querySelector('#chinaPrefecture').onchange=e=>navigate(get(e.target.value));
  root.querySelector('#chinaCounty').onchange=e=>navigate(get(e.target.value));
 }
 return {destinations,provinces:chinaProvinces,get,parent,province,prefectures,counties,contains,url,resolve,path,label,breadcrumbs,picker,bind};
})();

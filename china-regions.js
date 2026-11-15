/* Administrative hierarchy and its selector; card content remains in data/. */
window.ChinaRegions=(()=>{
 const destinations=travelCities.filter(c=>c.country==='cn'),byId=new Map(destinations.map(c=>[c.id,c]));
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=id=>byId.get(id),parent=city=>get(city?.parentCity),province=city=>chinaProvinces.find(p=>p.id===city?.provinceId);
 const prefectures=provinceId=>destinations.filter(c=>!c.parentCity&&(!provinceId||c.provinceId===provinceId));
 const counties=city=>city?destinations.filter(c=>c.parentCity===city.id):[];
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
 const provinceName=p=>p?.name.replace(/省$/,'')||'';
 const provinceUrl=id=>'#china/'+id;
 function selectionUrl(state){
  if(!state.province||state.province==='all')return '#card-manager/china';
  const root=prefectures(state.province).find(c=>c.name===state.city),district=state.district&&state.district!=='all'?destinations.find(c=>c.provinceId===state.province&&c.adminName===state.district):null;
  const child=district||(state.county&&state.county!=='all'&&state.county!=='unspecified'?destinations.find(c=>c.provinceId===state.province&&c.adcode===String(state.county)):null);
  return child?url(child):root?url(root):provinceUrl(state.province);
 }
 function picker(scope){
  const city=scope?.id?scope:scope?.city,root=parent(city)||city,provinceId=scope?.provinceId||city?.provinceId;
  return `<section class="destination-picker china-region-picker" aria-label="按省份、城市和县区选择"><div class="china-region-fields"><label>省份<select id="chinaProvince" aria-label="省份"><option value="all">全国</option>${chinaProvinces.map(p=>`<option value="${p.id}" ${p.id===provinceId?'selected':''}>${h(provinceName(p))}</option>`).join('')}</select></label><label>城市<select id="chinaPrefecture" aria-label="城市或地区"><option value="">全部城市</option>${prefectures(provinceId).map(c=>`<option value="${c.id}" ${c.id===root?.id?'selected':''}>${h(c.adminName)}</option>`).join('')}</select></label><label>县区<select id="chinaCounty" aria-label="县或县级市" ${root&&counties(root).length?'':'disabled'}><option value="${root?.id||''}">${root&&!counties(root).length?'全市范围':'全部县区'}</option>${counties(root).map(c=>`<option value="${c.id}" ${c.id===city?.id?'selected':''}>${h(c.adminName)}</option>`).join('')}</select></label></div></section>`;
 }
 function bind(root,navigate=hash=>{location.hash=hash;}){
  const provinceSelect=root.querySelector('#chinaProvince');if(!provinceSelect)return;
  provinceSelect.onchange=e=>navigate(e.target.value==='all'?'#card-manager/china':provinceUrl(e.target.value));
  root.querySelector('#chinaPrefecture').onchange=e=>navigate(e.target.value?url(get(e.target.value)):provinceUrl(provinceSelect.value));
  root.querySelector('#chinaCounty').onchange=e=>navigate(e.target.value?url(get(e.target.value)):provinceUrl(provinceSelect.value));
 }

 return {destinations,provinces:chinaProvinces,get,parent,province,prefectures,counties,contains,url,resolve,path,label,breadcrumbs,picker,bind,provinceName,provinceUrl,selectionUrl};
})();

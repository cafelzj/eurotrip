/* Shared map setup; provider configuration and destination content stay separate. */
window.TravelMaps=(()=>{
 function provider(country,city){
  const id=city?.mapProvider||country?.mapProvider||'osm';
  if(!mapProviders[id])throw Error('地图提供方尚未接入：'+id);
  return mapProviders[id];
 }
 function create(container,{country,city,center,zoom=13,onTileError=()=>{}}){
  const config=provider(country,city);
  const map=L.map(container,{scrollWheelZoom:true,touchZoom:true,zoomSnap:0.25,wheelPxPerZoomLevel:120,zoomAnimation:false}).setView(center||[city.lat,city.lon],zoom);
  L.tileLayer(config.tiles,{maxZoom:config.maxZoom,attribution:config.attribution}).on('tileerror',onTileError).addTo(map);
  return map;
 }
 return {provider,create};
})();

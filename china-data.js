/* Register administrative destinations once, before collection modules take snapshots. */
(() => {
  const provinces=new Set(chinaProvinces.map(p=>p.id));
  for(const province of window.chinaRegionCatalog.provinces)if(!provinces.has(province.id))chinaProvinces.push({...province});
  const codes=new Set(travelCities.filter(c=>c.country==='cn').map(c=>String(c.adcode)));
  for(const city of window.chinaRegionCatalog.destinations)if(!codes.has(city.adcode))travelCities.push({...city});
})();

/* Shared components consume independent region-specific classifications. */
window.CardTaxonomy=(()=>{
 const china=window.chinaCardCategories,europe=cardCategories,cityCountries=new Map(travelCities.map(c=>[c.id,c.country]));
 const isChina=n=>n?.country==='cn'||n?.countries?.includes('cn')||[n?.city,...(n?.cities||[])].some(id=>cityCountries.get(id)==='cn');
 const forRegion=region=>region==='china'||region?.section==='china'||region?.id==='cn'?china:europe;
 const forNode=n=>isChina(n)?china:europe;
 const secondary=n=>forNode(n).secondary.find(s=>s.id===n.subcategory);
 const primary=n=>forNode(n).primary.find(s=>s.id===n.category);
 return {forRegion,forNode,secondary,primary,isChina};
})();

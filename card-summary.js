/* Reuse the catalog's short, factual introduction without changing its full editorial text. */
window.CardSummary=(()=>{
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function get(node){return node.briefDescription?.trim()||node.description||'';}
 function markup(node){const full=node.description||'',brief=get(node);return full===brief?h(full):`<span class="site-copy-classic">${h(full)}</span><span class="site-copy-new">${h(brief)}</span>`;}
 return {get,markup};
})();

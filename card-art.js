/* Optional, curated artwork shared by card lists and details. No image API at runtime. */
window.CardArt=(()=>{
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function get(node){return node?.category==='places'&&Object.hasOwn(landmarkArt,node.id)?landmarkArt[node.id]:null;}
 function render(node,detail=false){
  const art=get(node);if(!art)return '';
  const sizes=detail?'(max-width:700px) calc(100vw - 76px), (max-width:1200px) 80vw, 1050px':'auto, (max-width:700px) calc(100vw - 68px), (max-width:1100px) 45vw, 420px';
  return `<figure class="landmark-art${detail?' landmark-art-detail':''}"><div class="landmark-art-frame"><img data-landmark-art src="${h(art.src)}" srcset="${h(art.thumbnail)} 480w, ${h(art.src)} ${art.width}w" sizes="${sizes}" width="${art.width}" height="${art.height}" alt="${h(art.alt)}" loading="${detail?'eager':'lazy'}" decoding="async"><span class="landmark-art-fallback" hidden><span aria-hidden="true">✦</span>插画暂不可用</span></div><figcaption>${h(art.style)} · AI 艺术插画${detail?' · 非实景照片':''}</figcaption></figure>`;
 }
 document.addEventListener('error',event=>{
  const image=event.target;
  if(!(image instanceof HTMLImageElement)||!image.hasAttribute('data-landmark-art'))return;
  const figure=image.closest('.landmark-art');if(!figure)return;
  image.hidden=true;figure.querySelector('.landmark-art-fallback').hidden=false;
 },true);
 return {get,render};
})();

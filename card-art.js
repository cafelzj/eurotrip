/* Optional, curated artwork shared by card lists and details. No image API at runtime. */
window.CardArt=(()=>{
 const h=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function get(node){return node?.category==='places'&&Object.hasOwn(landmarkArt,node.id)?landmarkArt[node.id]:null;}
 function render(node,detail=false){
  const art=get(node);if(!art)return '';
  const columns=art.columns===2?2:1,rows=art.rows===2?2:1,panel=Number.isInteger(art.panel)?art.panel:0;
  const x=-(panel%columns)*100/columns,y=-Math.floor(panel/columns)*100/rows;
  const position=`--art-columns:${columns};--art-rows:${rows};--art-x:${x}%;--art-y:${y}%`;
  const sizes=detail?`(max-width:700px) calc((100vw - 76px) * ${columns}), (max-width:1200px) ${80*columns}vw, ${1050*columns}px`:`auto, (max-width:700px) calc((100vw - 68px) * ${columns}), (max-width:1100px) ${45*columns}vw, ${420*columns}px`;
  return `<figure class="landmark-art${detail?' landmark-art-detail':''}${columns>1?' landmark-art-panel':''}"><div class="landmark-art-frame"><img data-landmark-art style="${position}" src="${h(art.src)}" srcset="${h(art.thumbnail)} ${art.thumbnailWidth||480}w, ${h(art.src)} ${art.width}w" sizes="${sizes}" width="${art.width}" height="${art.height}" alt="${h(art.alt)}" loading="${detail?'eager':'lazy'}" decoding="async"><span class="landmark-art-fallback" hidden><span aria-hidden="true">✦</span>插画暂不可用</span></div><figcaption>${h(art.style)} · AI 艺术插画${detail?' · 非实景照片':''}${detail&&art.styleReason?`<span class="landmark-art-context">${h(art.styleReason)}</span>`:''}</figcaption></figure>`;
 }
 document.addEventListener('error',event=>{
  const image=event.target;
  if(!(image instanceof HTMLImageElement)||!image.hasAttribute('data-landmark-art'))return;
  const figure=image.closest('.landmark-art');if(!figure)return;
  image.hidden=true;figure.querySelector('.landmark-art-fallback').hidden=false;
 },true);
 return {get,render};
})();

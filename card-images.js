/* Curated media only: no client-side image search or generated food imagery. */
window.CardImages=(()=>{
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function get(n){const key=cardImages.cards[n?.id];return key?cardImages.assets[key]:null;}
 function frame(media,detail){return `<div class="card-image-frame"><img src="${h(media.src)}" alt="${h(media.alt)}" width="${media.width}" height="${media.height}" loading="${detail?'eager':'lazy'}" decoding="async" referrerpolicy="no-referrer"><span class="card-image-fallback" hidden>图片暂未载入</span></div>`;}
 function card(n){const media=get(n);return media?`<a class="card-image card-image-${media.kind}" href="#card/${encodeURIComponent(n.id)}" aria-label="${h(n.name)}：查看图片与详情">${frame(media,false)}</a>`:'';}
 function detail(n){const media=get(n);return media?`<figure class="card-image entity-image card-image-${media.kind}">${frame(media,true)}<figcaption><span>${h(media.caption)}</span><span class="card-image-credit">${h(media.author)} · <a href="${h(media.licenseUrl)}" target="_blank" rel="noopener noreferrer">${h(media.license)}</a> · <a href="${h(media.source)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons 原始图片 ↗</a>${media.kind==='food'?' · 列表为裁切预览':''}</span></figcaption></figure>`:'';}
 // Capture image errors because they do not bubble. Keep the reserved frame so
 // a failed remote image never changes the feed's measured card heights.
 document.addEventListener('error',e=>{const img=e.target;if(!img.matches?.('.card-image img'))return;const frame=img.closest('.card-image-frame');frame.classList.add('is-unavailable');img.hidden=true;frame.querySelector('.card-image-fallback').hidden=false;},true);
 return {get,card,detail};
})();

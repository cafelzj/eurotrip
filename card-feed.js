/* Finite, incremental masonry for existing cards. No separate card or POI data. */
window.CardFeed=(()=>{
 const batch=24;
 function mount({root,items,renderCard,initialCount=batch,onCount}){
  let shown=0,frame=0,stopped=false,lastWidth=0,intersection,resize;
  root.innerHTML='<section class="card-feed" aria-label="瀑布流卡片"><div class="card-feed-grid"></div><div class="card-feed-footer"><p role="status" aria-live="polite"></p><button type="button" class="hub-more" data-feed-more>继续浏览</button><span class="card-feed-sentinel" aria-hidden="true"></span></div></section>';
  const grid=root.querySelector('.card-feed-grid'),footer=root.querySelector('.card-feed-footer'),status=footer.querySelector('p'),button=footer.querySelector('button'),sentinel=footer.querySelector('.card-feed-sentinel');
  function layout(){
   if(frame)cancelAnimationFrame(frame);frame=0;if(stopped||!grid.isConnected)return;
   const style=getComputedStyle(grid),columns=parseInt(style.getPropertyValue('--feed-columns'))||1,gap=parseFloat(style.columnGap)||16,heights=Array(columns).fill(0),nodes=[...grid.children];
   // Clear former coordinates before measuring: a third column must not survive a two-column resize.
   for(const item of nodes){item.style.gridColumn='auto';item.style.gridRow='auto';}
   const sizes=nodes.map(item=>Math.ceil(item.firstElementChild.getBoundingClientRect().height));
   for(const [index,item]of nodes.entries()){
    const column=heights.indexOf(Math.min(...heights)),height=sizes[index];
    item.style.gridColumn=String(column+1);item.style.gridRow=(heights[column]+1)+' / span '+Math.max(1,height);
    heights[column]+=height+gap;
   }
   if(shown<items.length)intersection?.observe(sentinel);
  }
  function schedule(){if(!stopped&&!frame)frame=requestAnimationFrame(layout);}
  function append(count){
   if(stopped||shown>=items.length)return;
   intersection?.unobserve(sentinel);
   const end=Math.min(items.length,count),markup=items.slice(shown,end).map(n=>'<div class="card-feed-item">'+renderCard(n)+'</div>').join('');
   grid.insertAdjacentHTML('beforeend',markup);shown=end;
   status.textContent=shown===items.length?'已看完当前筛选的 '+shown+' 张卡片。':'已展示 '+shown+' / '+items.length+' 张卡片 · 向下滚动继续浏览';
   button.hidden=shown>=items.length;button.textContent='再看 '+Math.min(batch,items.length-shown)+' 张卡片 ↓';
   onCount?.(shown);schedule();
  }
  button.onclick=()=>append(shown+batch);
  if(window.IntersectionObserver)intersection=new IntersectionObserver(entries=>{
   if(entries.some(e=>e.isIntersecting)&&!button.matches(':focus-visible'))append(shown+batch);
  },{rootMargin:'400px 0px'});
  if(window.ResizeObserver){resize=new ResizeObserver(entries=>{const width=entries[0].contentRect.width;if(Math.abs(width-lastWidth)>.5){lastWidth=width;schedule();}});resize.observe(grid);}
  else window.addEventListener('resize',schedule,{passive:true});
  grid.addEventListener('load',schedule,true);document.fonts?.ready.then(schedule);
  if(items.length)append(Math.max(batch,initialCount));
  else{status.textContent='当前筛选没有匹配卡片，可尝试其他关键词或重置筛选。';button.hidden=true;}
  function reveal(id){const index=items.findIndex(n=>n.id===id);if(index<0)return null;if(index>=shown)append(Math.ceil((index+1)/batch)*batch);layout();return grid.querySelector('[data-knowledge-card="'+CSS.escape(id)+'"]');}
  function destroy(){stopped=true;intersection?.disconnect();resize?.disconnect();if(frame)cancelAnimationFrame(frame);grid.removeEventListener('load',schedule,true);window.removeEventListener('resize',schedule);}
  return {destroy,reveal};
 }
 return {mount};
})();

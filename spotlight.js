/* One delegated, frame-batched pointer highlight for navigation and short cards. */
(()=>{
 if(!window.matchMedia||!window.PointerEvent)return;
 const targets='.mode-tabs,.hub-card,.destination-cities>a,.produce-country-picker>a,.entity-mini,.plan-card>summary,.produce-food-card>summary,.produce-region-grid>article,.plan-metrics>div';
 const excluded='.country-menu,.floating-map,.leaflet-container,input,select,textarea,[contenteditable="true"]';
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 const quiet=['(prefers-reduced-motion: reduce)','(prefers-reduced-transparency: reduce)','(prefers-contrast: more)','(forced-colors: active)'].map(q=>matchMedia(q));
 let active=null,pending=null,frame=0,listening=false;
 const allowed=()=>fine.matches&&!quiet.some(q=>q.matches);
 function release(){
  if(!active)return;
  active.removeAttribute('data-pointer-glow');
  active.style.removeProperty('--pointer-x');active.style.removeProperty('--pointer-y');
  active=null;
 }
 function reset(){
  if(frame)cancelAnimationFrame(frame);
  frame=0;pending=null;release();
 }
 function draw(){
  frame=0;const point=pending;pending=null;
  if(!point?.target.isConnected||!allowed()||document.hidden){reset();return;}
  const rect=point.target.getBoundingClientRect(),x=point.x-rect.left,y=point.y-rect.top;
  if(!rect.width||!rect.height||x<0||y<0||x>rect.width||y>rect.height){reset();return;}
  if(active!==point.target){release();active=point.target;active.setAttribute('data-pointer-glow','');}
  active.style.setProperty('--pointer-x',x.toFixed(1)+'px');
  active.style.setProperty('--pointer-y',y.toFixed(1)+'px');
 }
 function move(event){
  if(event.pointerType!=='mouse'||event.buttons||!(event.target instanceof Element)){reset();return;}
  const target=event.target.closest(targets);
  if(!target||event.target.closest(excluded)){reset();return;}
  pending={target,x:event.clientX,y:event.clientY};
  if(!frame)frame=requestAnimationFrame(draw);
 }
 function sync(){
  const enabled=allowed();
  if(enabled===listening)return;
  listening=enabled;
  if(enabled)document.addEventListener('pointermove',move,{passive:true});
  else{document.removeEventListener('pointermove',move);reset();}
 }
 for(const query of [fine,...quiet])query.addEventListener('change',sync);
 document.addEventListener('pointerout',event=>{
  if(active&&(!(event.relatedTarget instanceof Node)||!active.contains(event.relatedTarget)))reset();
 },{passive:true});
 for(const type of ['pointerdown','focusin'])document.addEventListener(type,reset,{passive:true});
 document.addEventListener('scroll',reset,{capture:true,passive:true});
 document.addEventListener('visibilitychange',reset);
 window.addEventListener('blur',reset);window.addEventListener('hashchange',reset);
 sync();
})();

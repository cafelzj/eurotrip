/* Apply the saved presentation before styles load; both versions share the same data and routes. */
window.SiteStyle=(()=>{
 const root=document.documentElement,key='roam-notes-style',valid=value=>value==='new'||value==='classic';
 let saved;try{saved=localStorage.getItem(key);}catch{}
 const requested=new URLSearchParams(location.search).get('style');
 let current=valid(requested)?requested:valid(saved)?saved:'new';
 root.dataset.siteStyle=current;
 const slots=new Map();
 const narrow=()=>matchMedia('(max-width:700px)').matches;
 function closeDestinationMenus(){for(const [menuId,buttonId]of [['countryMenu','travelMode'],['chinaMenu','chinaMode']]){const menu=document.getElementById(menuId),button=document.getElementById(buttonId);if(menu)menu.hidden=true;button?.setAttribute('aria-expanded','false');}}
 function closeMore(focus=false){const menu=document.getElementById('moreModeMenu'),button=document.getElementById('moreMode');if(!menu||!button)return;menu.hidden=true;button.setAttribute('aria-expanded','false');if(focus)button.focus({preventScroll:true});}
 function positionMenus(){
  for(const [menuId,buttonId]of [['countryMenu','travelMode'],['chinaMenu','chinaMode']]){
   const menu=document.getElementById(menuId),button=document.getElementById(buttonId);if(!menu||!button)continue;
   if(!narrow()){menu.style.removeProperty('left');menu.style.removeProperty('right');continue;}
   const viewport=Math.min(innerWidth,document.documentElement.clientWidth),width=menu.hidden?Math.min(parseFloat(getComputedStyle(menu).width)||250,viewport-28):menu.getBoundingClientRect().width,parent=menu.offsetParent||menu.parentElement,parentLeft=parent.getBoundingClientRect().left,border=parseFloat(getComputedStyle(parent).borderLeftWidth)||0;
   const left=Math.max(14,Math.min(button.getBoundingClientRect().left,viewport-width-14));menu.style.left=(left-parentLeft-border)+'px';menu.style.right='auto';
  }
 }
 function navigation(){
  const menu=document.getElementById('moreModeMenu'),control=document.querySelector('.mode-more-control');if(!menu||!control)return;
  const compact=current==='new'&&narrow();let moveFocus=false;
  for(const id of ['produceMode','planMode']){
   const button=document.getElementById(id);if(!button)continue;
   if(!slots.has(id)){const slot=document.createComment(id+' navigation position');button.before(slot);slots.set(id,slot);}
   if(compact){if(button.parentElement!==menu){moveFocus ||= document.activeElement===button;menu.append(button);}button.setAttribute('role','menuitem');button.tabIndex=-1;}
   else{if(button.previousSibling!==slots.get(id))slots.get(id).after(button);button.removeAttribute('role');button.removeAttribute('tabindex');}
  }
  control.hidden=!compact;if(!compact)closeMore();else if(moveFocus)document.getElementById('moreMode').focus({preventScroll:true});
 }
 function controls(){document.querySelectorAll('[data-site-style-choice]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.siteStyleChoice===current));navigation();positionMenus();}
 function anchor(){return [...document.querySelectorAll('[data-knowledge-card],.entity-reading-section')].find(element=>{const box=element.getBoundingClientRect();return box.bottom>120&&box.top<innerHeight;});}
 function set(value,{persist=true,updateUrl=true}={}){
  if(!valid(value))return;
  const before=current,element=anchor(),top=element?.getBoundingClientRect().top;
  current=value;root.dataset.siteStyle=value;
  if(persist)try{localStorage.setItem(key,value);}catch{}
  if(updateUrl&&new URLSearchParams(location.search).has('style')){const url=new URL(location.href);url.searchParams.set('style',value);history.replaceState(history.state,'',url);}
  closeMore();closeDestinationMenus();controls();
  if(before!==value){
   window.dispatchEvent(new CustomEvent('site-style-change',{detail:{previous:before,current:value}}));
   requestAnimationFrame(()=>requestAnimationFrame(()=>{if(element?.isConnected)window.scrollBy({top:element.getBoundingClientRect().top-top,behavior:'instant'});}));
  }
 }
 function feature(section,expanded){
  if(!section)return;section.dataset.expanded=String(expanded);
  const button=section.querySelector('[data-destination-toggle]');if(button){button.setAttribute('aria-expanded',expanded);button.textContent=expanded?'收起介绍':'展开介绍';}
 }
 function syncDestination(section,focused){if(section)feature(section,section.hasAttribute('data-manual-expanded')?section.dataset.manualExpanded==='true':!focused);}
 document.addEventListener('click',event=>{
  const choice=event.target.closest('[data-site-style-choice]');if(choice){set(choice.dataset.siteStyleChoice);return;}
  const toggle=event.target.closest('[data-destination-toggle]');if(toggle){const section=toggle.closest('.destination-feature'),expanded=section.dataset.expanded!=='true';section.dataset.manualExpanded=expanded;feature(section,expanded);window.dispatchEvent(new Event('site-layout-change'));return;}
  const button=event.target.closest('#moreMode');if(button){const menu=document.getElementById('moreModeMenu'),open=menu.hidden;closeDestinationMenus();menu.hidden=!open;button.setAttribute('aria-expanded',open);if(open)menu.querySelector('button')?.focus({preventScroll:true});return;}
  if(event.target.closest('#moreModeMenu button'))closeMore(true);else if(!event.target.closest('.mode-more-control'))closeMore();positionMenus();
 });
 document.addEventListener('focusin',event=>{if(!event.target.closest('.mode-more-control'))closeMore();positionMenus();});
 document.addEventListener('keydown',event=>{
  const control=event.target.closest('.mode-more-control');if(!control)return;
  if(event.key==='Escape'){event.preventDefault();closeMore(true);return;}
  if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
  event.preventDefault();const menu=document.getElementById('moreModeMenu'),buttons=[...menu.querySelectorAll('button')];if(!buttons.length)return;
  closeDestinationMenus();menu.hidden=false;document.getElementById('moreMode').setAttribute('aria-expanded','true');
  const index=buttons.indexOf(document.activeElement),next=event.key==='Home'?0:event.key==='End'?buttons.length-1:index<0?(event.key==='ArrowUp'?buttons.length-1:0):(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();
 });
 window.addEventListener('resize',()=>{navigation();positionMenus();},{passive:true});
 window.addEventListener('hashchange',()=>closeMore());
 // Traversing between comparison URLs changes the query as well as the hash;
 // browsers do not emit hashchange for that case, so notify the existing router.
 window.addEventListener('popstate',()=>{const value=new URLSearchParams(location.search).get('style');if(valid(value)&&value!==current){set(value,{persist:false,updateUrl:false});window.dispatchEvent(new HashChangeEvent('hashchange',{newURL:location.href}));}});
 window.addEventListener('storage',event=>{if(event.key===key&&valid(event.newValue))set(event.newValue,{persist:false});});
 document.addEventListener('DOMContentLoaded',controls,{once:true});
 return {get:()=>current,set,syncDestination};
})();

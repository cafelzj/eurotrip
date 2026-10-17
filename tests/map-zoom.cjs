const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{
  const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.stack));
  await p.route('https://tile.openstreetmap.org/**',r=>r.abort());await p.route('https://overpass-api.de/**',r=>r.abort());
  const base=process.env.SITE_URL||'http://127.0.0.1:3014';await p.goto(base+'/#china/jiangsu/xuzhou');
  await p.evaluate(()=>{window.testMaps=[];L.Map.addInitHook(function(){window.testMaps.push(this);});});
  const zoom=id=>p.evaluate(id=>window.testMaps.find(m=>m.getContainer().isConnected&&m.getContainer().id===id).getZoom(),id);
  const changed=(id,initial,direction)=>p.waitForFunction(({id,initial,direction})=>{const m=window.testMaps.find(m=>m.getContainer().isConnected&&m.getContainer().id===id);return direction==='in'?m.getZoom()>initial:m.getZoom()<initial;},{id,initial,direction});
  async function pinch(id,delta){
   return p.evaluate(({id,delta})=>{const element=document.getElementById(id),r=element.getBoundingClientRect();const event=new WheelEvent('wheel',{deltaY:delta,deltaMode:0,ctrlKey:true,bubbles:true,cancelable:true,clientX:r.x+r.width/2,clientY:r.y+r.height/2});element.dispatchEvent(event);return event.defaultPrevented;},{id,delta});
  }
  for(const city of ['xuzhou','vienna']){
   await p.evaluate(city=>location.hash='#map/'+city,city);await p.waitForSelector('#travelMap');
   const id='travelMap',start=await zoom(id),box=await p.locator('#travelMap').boundingBox();
   await p.mouse.move(box.x+box.width/2,Math.min(box.y+box.height/2,900));await p.mouse.wheel(0,-60);await changed(id,start,'in');
   const afterWheel=await zoom(id);assert(afterWheel-start<=1,'small trackpad scroll should not jump several levels');
   const scroll=await p.evaluate(()=>scrollY);assert(await pinch(id,-24),'pinch must prevent browser page zoom');await changed(id,afterWheel,'in');
   const afterPinch=await zoom(id);assert(await pinch(id,24));await changed(id,afterPinch,'out');
   assert.equal(await p.evaluate(()=>scrollY),scroll);assert.equal(await p.evaluate(()=>visualViewport.scale),1);
   assert(await p.locator('.poi-marker').count());
   const beforeButton=await zoom(id);await p.locator('#travelMap .leaflet-control-zoom-in').click();await changed(id,beforeButton,'in');
  }
  await p.evaluate(()=>location.hash='#china/jiangsu/xuzhou');await p.waitForSelector('.knowledge-hub');
  await p.locator('#miniMapToggle').click();const miniStart=await zoom('miniMapCanvas');assert(await pinch('miniMapCanvas',-24));await changed('miniMapCanvas',miniStart,'in');
  await p.locator('#miniMapClose').click();const scroll=await p.evaluate(()=>scrollY);await p.mouse.move(500,80);await p.mouse.wheel(0,300);await p.waitForFunction(initial=>scrollY>initial,scroll);
  assert.deepEqual(errors,[]);console.log('PASS trusted wheel zoom, Ctrl+wheel trackpad pinch in/out, fine zoom steps, browser zoom/scroll prevention, map buttons, European and China maps, mini map, outside-page scrolling');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

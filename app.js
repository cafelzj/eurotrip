let category=0, favoritesOnly=false;
let favorites;
try { favorites=new Set(JSON.parse(localStorage.getItem('eurotrip-favorites')||'[]')); } catch { favorites=new Set(); }
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){try{localStorage.setItem('eurotrip-favorites',JSON.stringify([...favorites]));}catch{toast('浏览器未允许保存，收藏仅在本次使用中有效。')}$('#savedCount').textContent=favorites.size;}
function toggleFavorite(index){favorites.has(index)?favorites.delete(index):favorites.add(index);save();render();}
function render(){
 $('#categories').innerHTML=categories.map((c,i)=>`<button class="category ${i===category&&!favoritesOnly?'active':''}" data-category="${i}"><span>${c.icon}</span>${c.name}<b>${words.filter(w=>w.cat===i).length}</b></button>`).join('');
 const c=categories[category];$('#categoryTitle').innerHTML=favoritesOnly?'我的收藏 <span>YOUR LITTLE COLLECTION</span>':`${c.name} <span>WORDS FOR YOUR JOURNEY</span>`;
 $('#categorySub').textContent=favoritesOnly?'把想记住的词，带在身边':c.sub;
 const q=$('#search').value.trim().toLocaleLowerCase();
 const filtered=words.map((w,i)=>({...w,i})).filter(w=>(favoritesOnly?favorites.has(w.i):q||w.cat===category)&&(!q||[w.zh,w.en,w.hu,w.de].some(v=>v.toLocaleLowerCase().includes(q))));
 $('#resultCount').textContent=`${filtered.length} 个词条${q?' · 在全部分类中搜索':''}`;
 $('#wordList').innerHTML=filtered.map(w=>`<div class="word-row" data-word="${w.i}" tabindex="0" role="button" aria-label="查看${w.zh}的详情"><span class="chinese"><span class="word-image" role="img" aria-label="${w.zh}图示">${w.emoji}</span>${w.zh}</span><span class="en">${esc(w.en)}</span><span class="hu">${esc(w.hu)}</span><span class="de">${esc(w.de)}</span><button class="star ${favorites.has(w.i)?'is-saved':''}" data-favorite="${w.i}" aria-label="${favorites.has(w.i)?'取消收藏':'收藏'}${w.zh}" aria-pressed="${favorites.has(w.i)}">${favorites.has(w.i)?'★':'☆'}</button></div>`).join('');
 $('#empty').hidden=!!filtered.length;$('#saved').classList.toggle('active',favoritesOnly);$('#total').textContent=`${words.length} 个旅行词汇 · 8 个生活场景`;save();
}
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',4000);}
function say(text,lang){if(!('speechSynthesis' in window)){toast('此浏览器不支持语音朗读。');return;}const voices=speechSynthesis.getVoices();if(!voices.some(v=>v.lang.startsWith(lang.slice(0,2)))){toast('设备可能未安装此语言语音；可在系统设置中添加。')}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.8;u.onerror=()=>toast('语音暂不可用，请检查设备的语言语音设置。');speechSynthesis.speak(u);}
function detail(index){const w=words[index];const langs=[['中文',w.zh,'zh-CN'],['English · 英语',w.en,'en-GB'],['Magyar · 匈牙利语',w.hu,'hu-HU'],['Deutsch · 德语',w.de,'de-DE']];const german=w.de.replace(/^(der|die|das|eine) /,'');
 $('#detailContent').innerHTML=`<div class="detail-picture" role="img" aria-label="${w.zh}辅助图示">${w.emoji}</div><div class="detail-title"><div><h2>${w.zh}</h2><p>${categories[w.cat].icon} ${categories[w.cat].name}</p></div><button class="saved" data-detail-favorite="${index}">${favorites.has(index)?'★ 已收藏':'☆ 收藏词条'}</button></div><div class="detail-languages">${langs.map(([name,text,lang])=>`<div class="translation"><div><small>${name}</small><b>${esc(text)}</b></div><button class="speak" data-say="${esc(text)}" data-lang="${lang}" aria-label="朗读${esc(text)}">♪</button></div>`).join('')}</div><div class="etymology"><h3>✦ 单词背后的故事</h3><p>${w.note||'这条词汇的词源说明尚未收录。可以通过下方词典查看对应语言的词源与历史，避免把发音相似误认为同源。'}</p><h3>旅行小提示</h3><p>${w.zh==='小面包'?'在奥地利点小面包时，Semmel 比 Brötchen 更常见。':w.cat===7?'路牌常省略德语冠词。遇到站台、车票或入口标识时，先识别关键词再核对方向与线路。':w.cat===2||w.cat===3?'有过敏或饮食限制时，请核对配料表并向店员确认；单个食品名称不能说明全部配料。':'德语名词通常首字母大写；词条保留 der、die、das 冠词，帮助你同时记住语法性别。'}</p><div class="dictionary-links"><a target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/${encodeURIComponent(w.en.split(' ')[0])}#English">英语词典 ↗</a><a target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/${encodeURIComponent(w.hu)}#Hungarian">匈牙利语词典 ↗</a><a target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/${encodeURIComponent(german)}#German">德语词典 ↗</a></div></div><p class="detail-foot">图示用于辅助记忆，并非实物照片。发音使用设备语音，是否可用取决于系统语言包。词典链接需联网；复合词或短语可能需要分别查阅。</p>`;
 if(!$('#detail').open)$('#detail').showModal();
}
$('#categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){category=Number(b.dataset.category);favoritesOnly=false;$('#search').value='';render();}});
$('#search').addEventListener('input',render);
$('#saved').addEventListener('click',()=>{favoritesOnly=!favoritesOnly;$('#search').value='';render();});
$('#wordList').addEventListener('click',e=>{const fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(Number(fav.dataset.favorite));return;}const row=e.target.closest('[data-word]');if(row)detail(Number(row.dataset.word));});
$('#wordList').addEventListener('keydown',e=>{if(e.target.matches('[data-word]')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();detail(Number(e.target.dataset.word));}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)say(b.dataset.say,b.dataset.lang);const f=e.target.closest('[data-detail-favorite]');if(f){const i=Number(f.dataset.detailFavorite);toggleFavorite(i);detail(i);}});
$('#close').addEventListener('click',()=>$('#detail').close());$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!document.querySelector('#vocabulary').hidden&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)&&!$('#detail').open){e.preventDefault();$('#search').focus();}});render();

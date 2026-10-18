let category=0, favoritesOnly=false;
let favorites;
try { favorites=new Set(JSON.parse(localStorage.getItem('eurotrip-favorites')||'[]')); } catch { favorites=new Set(); }
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const defaultLanguages=dictionaryLanguages.filter(l=>l.defaultVisible).map(l=>l.id);
let visibleLanguageIds;
try{const stored=JSON.parse(localStorage.getItem('eurotrip-display-languages')||'null');visibleLanguageIds=Array.isArray(stored)?dictionaryLanguages.filter(l=>stored.includes(l.id)).map(l=>l.id):defaultLanguages;}catch{visibleLanguageIds=defaultLanguages;}
if(!visibleLanguageIds.length)visibleLanguageIds=[...defaultLanguages];
const visibleLanguages=()=>dictionaryLanguages.filter(l=>visibleLanguageIds.includes(l.id));
const wordText=(word,language)=>typeof word[language.id]==='string'?word[language.id]:'';
function renderLanguageSettings(){
 const selected=visibleLanguages();
 $('#languageSummary').textContent=selected.map(l=>l.name).join(' · ');
 $('#languageOptions').innerHTML='<legend class="visually-hidden">选择展示语言</legend>'+dictionaryLanguages.map(l=>`<label><input type="checkbox" data-display-language="${esc(l.id)}" ${visibleLanguageIds.includes(l.id)?'checked':''} ${visibleLanguageIds.length===1&&visibleLanguageIds.includes(l.id)?'disabled':''}><span>${l.flag} ${esc(l.name)}<small>${esc(l.native)} · ${words.filter(w=>wordText(w,l)).length} 个词条</small></span></label>`).join('');
 $('#languageNotes').textContent=selected.map(l=>l.note||'').filter(Boolean).join(' ');
 $('.language-pills').innerHTML=selected.map(l=>`<span>${l.flag} ${esc(l.native)}</span>`).join('<i aria-hidden="true">→</i>');
 $('#dictionaryHead').innerHTML=selected.map(l=>`<span data-language="${esc(l.id)}">${esc(l.heading)}${l.id==='zh'?'':` <small>${esc(l.name)}</small>`}</span>`).join('')+'<span aria-hidden="true"></span>';
 $('#dictionaryTable').style.setProperty('--dictionary-columns',`repeat(${selected.length},minmax(135px,1fr)) 26px`);
 $('#dictionaryTable').style.setProperty('--dictionary-min-width',`${selected.length*147+60}px`);
 $('#phraseLanguages').innerHTML=selected.filter(l=>l.thanks).map(l=>`<button data-say="${esc(l.thanks)}" data-lang="${esc(l.locale)}"><span lang="${esc(l.locale)}">${esc(l.thanks)}</span><small>${esc(l.name)}</small> ♪</button>`).join('');
}
function setDisplayLanguages(ids){visibleLanguageIds=dictionaryLanguages.filter(l=>ids.includes(l.id)).map(l=>l.id);if(!visibleLanguageIds.length)visibleLanguageIds=[...defaultLanguages];try{localStorage.setItem('eurotrip-display-languages',JSON.stringify(visibleLanguageIds));}catch{toast('语言设置仅在本次使用中有效。');}render();}
function save(){try{localStorage.setItem('eurotrip-favorites',JSON.stringify([...favorites]));}catch{toast('浏览器未允许保存，收藏仅在本次使用中有效。')}$('#savedCount').textContent=favorites.size;}
function toggleFavorite(index){favorites.has(index)?favorites.delete(index):favorites.add(index);save();render();}
function render(){
 renderLanguageSettings();
 $('#categories').innerHTML=categories.map((c,i)=>`<button class="category ${i===category&&!favoritesOnly?'active':''}" data-category="${i}"><span>${c.icon}</span>${c.name}<b>${words.filter(w=>w.cat===i).length}</b></button>`).join('');
 const c=categories[category];$('#categoryTitle').innerHTML=favoritesOnly?'我的收藏 <span>YOUR LITTLE COLLECTION</span>':`${c.name} <span>WORDS FOR YOUR JOURNEY</span>`;
 $('#categorySub').textContent=favoritesOnly?'把想记住的词，带在身边':c.sub;
 const q=$('#search').value.trim().toLocaleLowerCase();
 const filtered=words.map((w,i)=>({...w,i})).filter(w=>(favoritesOnly?favorites.has(w.i):q||w.cat===category)&&(!q||dictionaryLanguages.some(l=>wordText(w,l).toLocaleLowerCase().includes(q))));
 $('#resultCount').textContent=`${filtered.length} 个词条${q?' · 在全部分类中搜索':''}`;
 $('#wordList').innerHTML=filtered.map(w=>`<div class="word-row" data-word="${w.i}" tabindex="0" role="button" aria-label="查看${esc(w.zh)}的详情">${visibleLanguages().map((l,i)=>`<span class="${esc(l.id)} ${i===0?'word-primary':''}" data-language="${esc(l.id)}" data-language-label="${esc(l.name)}"><span class="word-cell-text" lang="${esc(l.locale)}">${i===0?`<span class="word-image" role="img" aria-label="${esc(w.zh)}图示">${w.emoji}</span>`:''}${esc(wordText(w,l)||'—')}</span></span>`).join('')}<button class="star ${favorites.has(w.i)?'is-saved':''}" data-favorite="${w.i}" aria-label="${favorites.has(w.i)?'取消收藏':'收藏'}${esc(w.zh)}" aria-pressed="${favorites.has(w.i)}">${favorites.has(w.i)?'★':'☆'}</button></div>`).join('');
 $('#empty').hidden=!!filtered.length;$('#saved').classList.toggle('active',favoritesOnly);$('#total').textContent=`${words.length} 个旅行词汇 · 8 个生活场景`;save();
}
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').style.display='none',4000);}
function say(text,lang){if(!('speechSynthesis' in window)){toast('此浏览器不支持语音朗读。');return;}const voices=speechSynthesis.getVoices();if(!voices.some(v=>v.lang.startsWith(lang.slice(0,2)))){toast('设备可能未安装此语言语音；可在系统设置中添加。')}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.8;u.onerror=()=>toast('语音暂不可用，请检查设备的语言语音设置。');speechSynthesis.speak(u);}
function detail(index){const w=words[index],langs=visibleLanguages();
 $('#detailContent').innerHTML=`<div class="detail-picture" role="img" aria-label="${w.zh}辅助图示">${w.emoji}</div><div class="detail-title"><div><h2>${w.zh}</h2><p>${categories[w.cat].icon} ${categories[w.cat].name}</p></div><button class="saved" data-detail-favorite="${index}">${favorites.has(index)?'★ 已收藏':'☆ 收藏词条'}</button></div><div class="detail-languages">${langs.map(l=>{const text=wordText(w,l);return `<div class="translation" data-language="${esc(l.id)}"><div><small>${esc(l.native)} · ${esc(l.name)}</small><b lang="${esc(l.locale)}">${esc(text||'暂未收录')}</b></div>${text?`<button class="speak" data-say="${esc(text)}" data-lang="${esc(l.locale)}" aria-label="朗读${esc(text)}">♪</button>`:''}</div>`;}).join('')}</div><div class="etymology"><h3>✦ 单词背后的故事</h3><p>${w.note||'这条词汇的词源说明尚未收录。可以通过下方词典查看对应语言的词源与历史，避免把发音相似误认为同源。'}</p><h3>旅行小提示</h3><p>${w.zh==='小面包'?'在奥地利点小面包时，Semmel 比 Brötchen 更常见。':w.cat===7?'路牌常省略德语冠词。遇到站台、车票或入口标识时，先识别关键词再核对方向与线路。':w.cat===2||w.cat===3?'有过敏或饮食限制时，请核对配料表并向店员确认；单个食品名称不能说明全部配料。':'德语名词通常首字母大写；词条保留 der、die、das 冠词，帮助你同时记住语法性别。'}</p><div class="dictionary-links">${langs.filter(l=>l.dictionarySection&&wordText(w,l)).map(l=>{const text=wordText(w,l),term=l.lookupStrip?text.replace(new RegExp(l.lookupStrip,'i'),''):text;return `<a target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/${encodeURIComponent(term)}#${encodeURIComponent(l.dictionarySection)}">${esc(l.name)}词典 ↗</a>`;}).join('')}</div></div><p class="detail-foot">图示用于辅助记忆，并非实物照片。发音使用设备语音，是否可用取决于系统语言包。词典链接需联网；复合词或短语可能需要分别查阅。</p>`;
 if(!$('#detail').open)$('#detail').showModal();
}
$('#languageOptions').addEventListener('change',event=>{const control=event.target.closest('[data-display-language]');if(!control)return;const ids=[...document.querySelectorAll('[data-display-language]:checked')].map(n=>n.dataset.displayLanguage);setDisplayLanguages(ids);document.querySelector(`[data-display-language="${control.dataset.displayLanguage}"]`)?.focus();});
$('#resetLanguages').addEventListener('click',()=>setDisplayLanguages(defaultLanguages));
$('#categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){category=Number(b.dataset.category);favoritesOnly=false;$('#search').value='';render();}});
$('#search').addEventListener('input',render);
$('#saved').addEventListener('click',()=>{favoritesOnly=!favoritesOnly;$('#search').value='';render();});
$('#wordList').addEventListener('click',e=>{const fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(Number(fav.dataset.favorite));return;}const row=e.target.closest('[data-word]');if(row)detail(Number(row.dataset.word));});
$('#wordList').addEventListener('keydown',e=>{if(e.target.matches('[data-word]')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();detail(Number(e.target.dataset.word));}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)say(b.dataset.say,b.dataset.lang);const f=e.target.closest('[data-detail-favorite]');if(f){const i=Number(f.dataset.detailFavorite);toggleFavorite(i);detail(i);}});
$('#close').addEventListener('click',()=>$('#detail').close());$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!document.querySelector('#vocabulary').hidden&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)&&!$('#detail').open){e.preventDefault();$('#search').focus();}});render();

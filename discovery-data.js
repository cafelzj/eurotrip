/* Curated visiting examples. Coordinates identify the venue, not a verified entrance. */
(()=>{
 const G=CardGraph;
 const records=[
 ['menza','budapest','Menza 餐厅',47.5036,19.0631,'food','restaurant','布达佩斯 Liszt Ferenc tér 的餐饮探索示例，可从菜单认识匈牙利家常风味与现代餐厅表达。','https://www.menzaetterem.hu/'],
 ['ikon','debrecen','IKON Restaurant',47.5299,21.6255,'food','restaurant','德布勒森市中心的餐厅探索示例，菜品和套餐随菜单与季节调整。','https://ikonrestaurant.hu/'],
 ['regi-hid','szeged','Régi Híd Vendéglő',46.2511,20.1505,'food','restaurant','塞格德市中心的匈牙利餐饮探索示例，可先查菜单中的鱼汤和地方风味。','https://regihid.hu/'],
 ['figlmueller','vienna','Figlmüller · Wollzeile',48.2098,16.3747,'food','restaurant','维也纳知名炸肉排餐厅的 Wollzeile 场所。不同分店、菜单与预约安排应分别核对。','https://www.figlmueller.at/'],
 ['nordsee-vienna','vienna','NORDSEE · Kärntner Straße',48.2044,16.3714,'food','restaurant','连锁海鲜快餐门店探索示例，适合比较鱼类三明治与热食套餐；不同门店供应可能不同。','https://www.nordsee.com/',true],
 ['augustiner-salzburg','salzburg','Augustiner Bräu · Mülln',47.806,13.0345,'food','restaurant','萨尔茨堡的啤酒馆与庭院餐饮场所，座位、供餐方式和开放安排以官网为准。','https://www.augustinerbier.at/'],
 ['stiftskeller','innsbruck','Stiftskeller Innsbruck',47.2687,11.3954,'food','restaurant','老城中的蒂罗尔与奥地利餐饮探索场所，不同季节的菜单和庭院开放情况需核对。','https://www.stiftskeller.eu/'],
 ['zur-letzten-instanz','berlin','Zur letzten Instanz',52.5161,13.4128,'food','restaurant','柏林具有历史背景的传统餐饮场所，可从菜单了解本地朴实的肉食与家常菜。','https://zurletzteninstanz.com/'],
 ['augustiner-klosterwirt','munich','Augustiner Klosterwirt',48.1388,11.5713,'food','restaurant','慕尼黑老城的巴伐利亚餐饮与啤酒馆探索示例，可结合老城步行路线安排。','https://www.augustiner-klosterwirt.de/'],
 ['block-house-hamburg','hamburg','BLOCK HOUSE · Gänsemarkt',53.5552,9.9859,'food','restaurant','汉堡起源的牛排连锁在 Gänsemarkt 的门店示例。此卡定位具体门店，不把整条连锁都标成一个地点。','https://www.block-house.de/',true],
 ['frueh','cologne','Früh am Dom',50.9401,6.9568,'food','restaurant','科隆大教堂附近的传统啤酒馆与餐饮场所，可了解 Kölsch 的点单和酒馆文化。','https://www.frueh-am-dom.de/'],
 ['hungarian-museum','budapest','匈牙利国家博物馆',47.4912,19.0624,'places','museum','通过考古、历史文物与展览了解匈牙利历史；展厅开放与临展以官方发布为准。','https://mnm.hu/'],
 ['kunsthistorisches','vienna','艺术史博物馆',48.2038,16.3618,'places','museum','维也纳的重要艺术博物馆，可结合藏品主题与临展选择参观路线。','https://www.khm.at/'],
 ['museumsquartier','vienna','MuseumsQuartier 博物馆区',48.2033,16.3589,'places','exhibition','包含多家文化机构、展览空间与公共庭院的文化区域，区内各机构的票务独立核对。','https://www.mqw.at/'],
 ['vienna-opera','vienna','维也纳国家歌剧院',48.203,16.3695,'places','theatre','歌剧与芭蕾的重要演出场所；演出、导览和站票是不同的参观方式。','https://www.wiener-staatsoper.at/'],
 ['salzburg-festspielhaus','salzburg','萨尔茨堡节庆剧院',47.7985,13.0404,'places','theatre','萨尔茨堡音乐节相关演出建筑群，可从节目与官方导览了解场馆。','https://www.salzburgerfestspiele.at/'],
 ['berlin-deutsches-theater','berlin','德意志剧院 · 柏林',52.5234,13.3827,'places','theatre','柏林的话剧演出机构，注意剧目语言、字幕安排及各舞台位置。','https://www.deutschestheater.de/'],
 ['bavarian-opera','munich','巴伐利亚国家歌剧院 · 国家剧院',48.1397,11.5795,'places','theatre','慕尼黑歌剧与芭蕾的重要舞台，演出与建筑导览需分别查看官方安排。','https://www.staatsoper.de/'],
 ['elbphilharmonie','hamburg','易北爱乐音乐厅',53.5413,9.9841,'places','theatre','汉堡港区的地标性音乐厅。观景平台、导览与音乐会的预约方式不同。','https://www.elbphilharmonie.de/'],
 ['hamburg-ferry','hamburg','Landungsbrücken 轮渡码头',53.5464,9.9664,'essential','ferry','汉堡易北河畔的主要码头区域，可查询 HADAG 公共轮渡。具体登船桥、线路与票种以运营商为准。','https://hadag.de/']
 ];
 for(const [id,cityId,name,lat,lon,topic,sub,description,url,chain]of records){const c=travelCities.find(c=>c.id===cityId);const group=topic==='food'?'food':topic==='essential'?'transport':'landmarks';const n=G.add({id:'venue-'+id,type:'place',country:c.country,city:cityId,name,description,collectionTopic:topic,chain:!!chain,note:topic==='food'?'餐饮探索示例，不是排名或实时菜单；营业、预约、供应与门店地址以官方最新查询为准。坐标为参考位置。':'坐标为场所参考位置，并非保证可通行的入口；开放、展览、节目和票务以官网为准。',point:{id:'venue-'+id,knowledgeId:'venue-'+id,lat,lon,name,description,source:'场所官方入口（参考坐标）',group,sub:topic==='places'&&!['museum','church','university','landmark'].includes(sub)?'other':sub,category:topic==='places'?sub:undefined,website:url},sources:[[url,'场所 / 品牌官方入口'],['https://www.openstreetmap.org/?mlat='+lat+'&mlon='+lon+'#map=17/'+lat+'/'+lon,'OpenStreetMap 参考位置']]});}
 for(const c of travelCities){const n=G.add({id:'tip-'+c.id+'-transit-tools',type:'tip',country:c.country,city:c.id,name:c.name+' · 交通 App 与线路图',description:c.transit,note:'推荐查询工具：'+c.app+'；运营商：'+c.operator+'。线路、票价及下载方式请以提供方最新信息为准。',sources:[[c.appurl,c.app+' · 工具入口'],[c.mapurl,'官方交通图 / 线路查询']]});}
 // A chain brand searches; its sample branch card owns one fixed POI.
 for(const [id,name,country,cities,venue,url,description]of [
 ['nordsee','NORDSEE','at',['vienna'],'venue-nordsee-vienna','https://www.nordsee.com/','德国起源的海鲜餐饮连锁，在奥地利也经营门店。可比较鱼类三明治与热食；门店菜单和营业安排分别核对。'],
 ['block-house','BLOCK HOUSE','de',['hamburg'],'venue-block-house-hamburg','https://www.block-house.de/','起源于汉堡的牛排餐饮连锁。地图搜索按当前范围找门店，菜单、预约与营业时间以官网为准。']
 ]){const n=G.add({id:'brand-chain-'+id,type:'brand',country,cities,name,description,collectionTopic:'food',searchKind:'restaurant',searchName:name,note:'此卡用于动态搜索连锁门店，不对应一个固定地址。',sources:[[url,'连锁品牌官方入口']]});G.connect(n.id,venue,'已收录的具体门店示例','所属连锁品牌');}
 // Keep duplicate editorial venue cards out of the same collection when a landmark already exists.
 for(const [a,b]of [['venue-elbphilharmonie','place-hamburg-0']]){const p=G.nodes.get(b);if(p&&/易北爱乐/.test(p.name)){const n=G.nodes.get(a);n.collectionHidden=true;p.point.category='theatre';p.sources.unshift(n.sources[0]);G.connect(a,b,'同一建筑的原有地标卡片','演出场馆资料');}}
})();

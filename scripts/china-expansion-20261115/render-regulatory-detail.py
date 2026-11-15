"""Draft reading paragraphs from item-specific regulatory facts; never pad to a length."""
import re

def compact(s):
    s=re.sub(r'—\s*\d+\s*—|-\s*\d+\s*-','',s)
    s=s.replace('≥','不少于').replace('≤','不超过')
    s=re.sub(r'^与果实处理[。:：]?', '', s)
    return s.strip('。:：;；,， ')

def clip(s,limit):
    s=compact(s)
    if len(s)<=limit:return s
    stops=[m.end()for m in re.finditer(r'[。；;]',s[:limit])]
    if stops and stops[-1]>=limit//2:return s[:stops[-1]].rstrip('。；;')
    stops=[m.end()for m in re.finditer(r'[,，]',s[:limit])]
    return s[:stops[-1]].rstrip(',，') if stops and stops[-1]>=limit//2 else ''

def section(text,start,end,limit=800):
    m=re.search(start,text)
    if not m:return ''
    value=text[m.end():];stop=re.search(end,value)
    return value[:stop.start()if stop else limit][:limit].strip('。:：')

def sensible_sentences(text,limit):
    choices=[]
    for sentence in re.split(r'[。；;]',text):
        sentence=re.sub(r'^\d+[.、]','',sentence).strip()
        if len(sentence)<8 or re.search(r'农药|杀虫|杀菌剂|尿素|磷酸|施肥|施入|追施|氮|农家肥|复合肥|病虫|防治|氯化钾|施基肥|安全要求|国家相关规定|公斤|kg/|\?|\(三\)|\(四\)',sentence):continue
        if re.search(r'生长|种植|栽培|繁育|嫁接|扦插|饲养|养殖|放养|棚|饲料|圈养|定植|通风|水质|饲草|青贮|采收|采摘|成熟|出栏|收获|加工|糯|烘干|压制|蒸|酿造|原料|种藕|移栽|整形|修剪|管水|选种|选苗|繁殖|分级|摊晾|日晒|熟化|拉制|盐渍|去壳|去皮|通心',sentence):choices.append(sentence)
    value='。'.join(choices)
    return clip(value,limit)

def primary_detail(record,province):
    name=record['name'];text=record['sectionText'];kind=record['kind'];locality=record['locality'];city=record['city']
    place=province+('·'+city if city not in (province,'全省')else '')+('·'+locality if locality and locality not in (city,city+'相关产区')else '')
    paragraphs=[]
    intro=f'{name}是与{place}相联系的{kind}。'
    marker=r'(?:[（(][一二三四五六七八九十]+[）)]|[一二三四五六七八九十]+、|\d+[.、])'
    variety=clip(record.get('variety','') or section(text,marker+r'(?:品种|原料)[。:：]?',r'(?:[（(]二[）)]|二、|2[.、])',400),95)
    if '?' in variety:variety=''
    if variety:intro+='原料或品种方面，保护要求记载为'+variety+'。'
    paragraphs.append(intro)
    sensory=record.get('sensory','') or section(text,r'(?:1[.、]|[（(]1[）)])(?:感官特色|感官特征|感官要求|感官指标|外观特征|外观特色)[。:：]?',r'(?:2[.、]|[（(]2[）)])|理化指标|理化特征|理化要求',600)
    # Regulatory tables are not prose. Only retain descriptors actually present;
    # never append an inferred flavour to an empty or malformed extraction.
    if re.search(r'项目指标|等级外形|分类外观|特级.*一级',sensory):
        vocabulary=['色泽翠绿','色泽绿润','色泽乌黑','黄褐色','红褐色','墨绿色','乳白色','浅黄色','紫红色','宝石红','琥珀色','晶莹剔透','饱满','均匀','清澈','明亮','油润','肥厚','细腻','柔软','有弹性','挺直','紧结','清香','栗香','花香','果香','酒香','陈酿','鲜爽','鲜醇','香甜','酸甜','咸甜适中','醇厚','醇和','回甘','回甜','绵长']
        found=[word for word in vocabulary if word in sensory]
        sensory='描述中可辨认的品质要点包括'+'、'.join(found[:13]) if found else ''
    sensory=clip(sensory,155)
    if sensory:paragraphs.append('辨识成品时，可以留意其外观、香气与质地。该产品的感官描述是：'+sensory+'。')
    process=record.get('process','') or section(text,marker+r'(?:加工工艺流程|加工工艺|工艺流程|酿造工艺)[。:：]?',marker+r'(?:加工要点|质量特色|质量要求)',900)
    flow=re.search(r'[^。]{0,20}[→].{3,180}',process)
    if flow:process=re.split(r'。|加工要点|\d+[.]',flow.group(0))[0]
    else:process=sensible_sentences(process,120)
    process=clip(process,120)
    if process:paragraphs.append('生产方式也是认识它的一条线索。文中列出的加工环节包括'+process+'。')
    site=section(text,marker+r'(?:立地条件|养殖环境|养殖条件|养殖方式及条件|生长环境|生产环境|原料要求)[。:：]?',r'(?:[（(]三[）)]|三、|3[.、])',600)
    site=clip(site,95)
    if '?' in site:site=''
    if site:paragraphs.append('产地条件方面，资料写到'+site+'。这些条件构成了该地方产品的生产背景。')
    harvest=clip(record.get('harvest','') or section(text,r'(?:\d+[.、]|[（(]四[）)]|四、)(?:采收|采摘|收获)[。:：]?',r'(?:[（(]五[）)]|五、|\d+[.、])',500),95)
    if harvest:paragraphs.append('采收或收获环节的记录是'+harvest+'。')
    # If more factual context is needed, select a genuine cultivation paragraph.
    if len('\n\n'.join(paragraphs))<300:
        grow=section(text,marker+r'(?:栽培管理|种植管理|饲养管理|养殖管理|生产管理)[。:：]?',r'[（(]四[）)]|四、|质量特色|质量要求',1400)
        grow=sensible_sentences(grow,150)
        if grow:paragraphs.append('与原料形成有关的生产记录还包括'+grow+'。')
    if len('\n\n'.join(paragraphs))<300:
        handling=section(text,r'[（(][一二三四五六七八九十]+[）)](?:采收加工|采收和储存|采摘加工|采收与加工|加工方法|加工技术)[。:：]?',r'[（(][一二三四五六七八九十]+[）)]|质量特色|五、',900)
        handling=sensible_sentences(handling,140)
        if handling:paragraphs.append('采后处理的资料记载为'+handling+'。')
    # Enforce a maximum through complete sentences, not arbitrary character cuts.
    while len('\n\n'.join(paragraphs))>500:
        last=paragraphs[-1];budget=500-len('\n\n'.join(paragraphs[:-1]))-2
        shortened=clip(last,max(0,budget-1))
        if shortened:paragraphs[-1]=shortened+'。';break
        paragraphs.pop()
    return '\n\n'.join(paragraphs)

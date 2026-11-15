"""Editorial corrections after reviewing product names, original scopes and use."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[2];LOCAL=ROOT/'research/.local/shaanxi-gansu-20261115'
rows=json.loads((LOCAL/'classified-primary.json').read_text())['items'];corrections=[]
crafts={'耀州瓷','尧头黑瓷','蒲城花炮','环县皮影','庆阳香包','酒泉夜光杯'}
for row in rows:
 name=row['name']
 if name in {'略阳猪苓','略阳黄精','白河木瓜'}:
  row.update(reviewStatus='hold',reviewNote='药材或食品用途边界尚需专门核对，不直接作为食材采用。')
 if name in crafts:
  row.update(type='crafts',kind='地方工艺物品');corrections.append(dict(name=name,action='correct-category',reason='实物、器物或民间工艺，不归为食材。'))
 if name=='蒲城花炮':row.update(variety='',sensory='',process='',harvest='',sectionText='')
 if name in {'流曲琼锅糖','三原蓼花糖'}:row.update(type='staples',kind='地方糕点糖食')
 if name=='清水粉壳蛋':row.update(type='ingredients',kind='地方禽蛋')
 if name=='潼关酱笋':row.update(type='seasoning',kind='地方酱菜')
 if name=='华胥大银杏(华胥大杏)':
  row['kind']='地方杏果';corrections.append(dict(name=name,action='clarify-identity',reason='原文记载金黄果皮、橘黄果肉及大杏别名；这里是杏果，不按名称误认银杏白果。'))
 if name=='张家川红花牛':
  row.update(province='gansu',city='天水',locality='张家川回族自治县',placeIds=['county:620525']);corrections.append(dict(name=name,action='correct-geography',reason='保护范围首句明确为甘肃天水张家川县；东接陕西陇县是邻界说明，不能把邻县当产地。'))
selected=[r for r in rows if r['reviewStatus']!='hold'];held=[r for r in rows if r['reviewStatus']=='hold']
(LOCAL/'approved-primary.json').write_text(json.dumps(dict(items=selected,held=held,corrections=corrections),ensure_ascii=False,indent=2)+'\n')
print(len(selected),'approved product sections;',len(held),'held')

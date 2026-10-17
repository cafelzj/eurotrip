// Open the real disclosure buttons so map controls can be reached as a user would.
module.exports=async(page,selector)=>{
 const ids=await page.locator(selector).first().evaluate(el=>{
  const ids=[];for(let list=el.closest('[data-tree-children]');list;list=list.parentElement.closest('[data-tree-children]'))if(list.hidden)ids.unshift(list.id);return ids;
 });
 for(const id of ids)await page.locator('[data-tree-toggle][aria-controls="'+id+'"]').click();
};

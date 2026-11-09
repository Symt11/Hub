/* Funciones de búsqueda, compartidas por la interfaz y las comprobaciones. */
(()=>{'use strict';
const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es');
function prepare(items){return items.map(m=>({m,text:normalize([m.title,m.summary,m.body,m.example,m.category,m.key,...m.questions].join(' '))}));}
function find(prepared,query='',category='',type=''){const tokens=normalize(query.trim()).split(/\s+/).filter(Boolean);return prepared.filter(({m,text})=>(!category||String(m.categoryId)===String(category))&&(!type||m.type===type)&&tokens.every(token=>text.includes(token))).map(item=>item.m);}
window.HUB_SEARCH=Object.freeze({normalize,prepare,find});
})();

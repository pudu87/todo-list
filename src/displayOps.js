import { format } from 'date-fns'

function clearProjectSection() {
  document.querySelector('#project').textContent = '';
}
function clearTodoSection() {
  document.querySelector('#todo').textContent = '';
}
function addChild(parent, child, content, clazz = 0) {
  let c = document.createElement(child);
  c.textContent = content;
  clazz ? c.classList.add(clazz) : 0;
  return parent.appendChild(c);
}
function dateToString(date) {
  return format(date, 'yyyy-MM-dd');
}

export { 
  clearProjectSection, clearTodoSection, 
  addChild, dateToString 
}

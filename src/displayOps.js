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

export { clearProjectSection, clearTodoSection, addChild }
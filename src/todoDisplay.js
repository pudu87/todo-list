import { 
  createTodo, updateTodo, deleteTodo,
  findProject, findTodos, findTodo
  } from './data.js'
import { showProject } from './projectDisplay.js'
import { clearTodoSection, addChild } from './displayOps'

/// Todo

const section = document.querySelector('#todo');

function showTodo(todo) {
  clearTodoSection();
  addTodoHeader(todo);
  addUpdateTodoForm(todo);
  addTodoArticle(todo);
  document.querySelector('#todo .o')
    .addEventListener('click', toggleUpdateTodoForm);
  document.querySelector('#todo .x')
    .addEventListener('click', deleteCurrentTodo);
  document.querySelector('#update-todo')
    .addEventListener('submit', submitUpdateTodo);
}
function toggleUpdateTodoForm() {
  let article = document.querySelector('#todo article');
  let form = document.querySelector('#update-todo');
  article.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function deleteCurrentTodo() {
  let id = document.querySelector('#todo header').classList[0].split('_')[1];
  let projectId = document.querySelector('#project header').classList[0].split('_')[1];
  deleteTodo(id);
  clearTodoSection();
  if (id != 'undefined') {
    let project = findProject(projectId);
    let projectTodos = findTodos(project.id);
    showProject(project, projectTodos);
  }
}
function submitUpdateTodo(e) {
  e.preventDefault();
  let todo = enterData();
  toggleUpdateTodoForm();
  showTodo(todo);
  let project = findProject(todo.projectId);
  let projectTodos = findTodos(project.id);
  showProject(project, projectTodos);
}
function enterData() {
  let id = document.querySelector('#todo header').classList[0].split('_')[1];
  let todo = findTodo(id);
  let title = document.querySelector('#update-todo-title').value;
  let description = document.querySelector('#update-todo-description').value;
  let dueDate = document.querySelector('#update-todo-dueDate').value;
  let priority = document.querySelector('#update-todo input[type="radio"]:checked').value;
  let projectId;
  if (id == 'undefined') {
    projectId = document.querySelector('#project header').classList[0].split('_')[1];
    todo = createTodo({ title, description, dueDate, priority, projectId })
  } else {
    projectId = todo.projectId;
    todo = updateTodo({ title, description, dueDate, priority, projectId, id });
  }
  return todo;
}
function addTodoHeader(todo) {
  let header = addChild(section, 'header', '', `todo_${todo.id}`);
  addChild(header, 'h1', '');
  let div = addChild(header, 'div', '');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option, option);
  })
}
function addUpdateTodoForm(todo) {
  let form = addChild(section, 'form', '', 'display-none');
  form.id = 'update-todo';
  ['title', 'description', 'dueDate'].forEach(prop => {
    let labelContent = prop.charAt(0).toUpperCase() + prop.slice(1) + ':';
    let label = addChild(form, 'label', labelContent);
    label.htmlFor = `update-todo-${prop}`;
    let input = addChild(form, 'input', '');
    input.type = 'text';
    input.id = `update-todo-${prop}`;
    input.value = todo[prop] == undefined ? '' : todo[prop];
  })
  addChild(form, 'label', 'Priority:');
  let div = addChild(form, 'div');
  div.id = 'priorities';
  ['low', 'medium', 'high'].forEach(prop => {
    let input = addChild(div, 'input', '');
    input.type = 'radio';
    input.id = `${prop}-priority`;
    input.name = 'priority';
    input.value = prop;
    if (todo.priority) {
      todo.priority == prop ? input.checked = true : 0;
    } else {
      prop == 'low' ? input.checked = true : 0;
    }
    let label = addChild(div, 'label', '');
    label.htmlFor = `${prop}-priority`;
    let span = addChild(label, 'span', '');
    let img = addChild(span, 'img', '');
    img.src = 'img/checked-icon.svg';
    img.alt = 'Checked Icon';
  })
  let submit = addChild(form, 'input', '');
  submit.type = 'submit';
  submit.value = 'Change';
}
function addTodoArticle(todo) {
  let article = addChild(section, 'article', '');
  addChild(article, 'h2', todo.title);
  addChild(article, 'p', todo.description);
  addChild(article, 'div', todo.dueDate);
}

export { showTodo, toggleUpdateTodoForm };

// TODO: priorities
// TODO: add date manipulation and sorting
// TODO: local storage
// TODO: ask for confirmation when deleting
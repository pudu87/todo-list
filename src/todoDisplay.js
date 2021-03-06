import { 
  createTodo, updateTodo, deleteTodo,
  findProject, findTodos, findTodo
} from './dataOps.js'
import { showProject } from './projectDisplay.js'
import { clearTodoSection, 
  addChild, dateToString 
} from './displayOps'

const section = document.querySelector('#todo');
const deleteMsg = 'Do you really want to delete this todo?';

function showTodo(todo) {
  clearTodoSection();
  addTodoHeader(todo);
  addUpdateTodoForm(todo);
  addTodoArticle(todo);
  document.querySelector('#todo .edit')
    .addEventListener('click', toggleUpdateTodoForm);
  document.querySelector('#todo .delete')
    .addEventListener('click', () => {
      window.confirm(deleteMsg) ? deleteCurrentTodo() : 0;
    });
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
  if (id != 'undefined') {
    deleteTodo(id);
    let project = findProject(projectId);
    let projectTodos = findTodos(project.id);
    showProject(project, projectTodos);
  }
  clearTodoSection();
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
  [['fa-edit', 'edit'], ['fa-trash-alt', 'delete',]].forEach(clazz => {
    let icon = addChild(div, 'i', '', 'far');
    icon.classList.add(...clazz);
  })
}
function addUpdateTodoForm(todo) {
  let form = addChild(section, 'form', '', 'display-none');
  form.id = 'update-todo';
  ['title', 'description'].forEach(prop => {
    let labelContent = prop.charAt(0).toUpperCase() + prop.slice(1) + ':';
    let label = addChild(form, 'label', labelContent);
    label.htmlFor = `update-todo-${prop}`;
    let input = addChild(form, 'input', '');
    input.type = 'text';
    input.id = `update-todo-${prop}`;
    input.value = todo[prop] == undefined ? '' : todo[prop];
  })
  addChild(form, 'label', 'Due Date:');
  let timeDiv = addChild(form, 'div', '');
  timeDiv.id = 'dueDate';
  let dateInput = addChild(timeDiv, 'input', '');
  dateInput.type = 'date';
  dateInput.id = 'update-todo-dueDate';
  dateInput.value = dateToString(todo.dueDate);
  addChild(form, 'label', 'Priority:');
  let priorityDiv = addChild(form, 'div', '');
  priorityDiv.id = 'priorities';
  ['low', 'medium', 'high'].forEach(prop => {
    let input = addChild(priorityDiv, 'input', '');
    input.type = 'radio';
    input.id = `${prop}-priority`;
    input.name = 'priority';
    input.value = prop;
    if (todo.priority) {
      todo.priority == prop ? input.checked = true : 0;
    } else {
      prop == 'low' ? input.checked = true : 0;
    }
    let label = addChild(priorityDiv, 'label', '');
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
  addChild(article, 'div', dateToString(todo.dueDate));
}

export { showTodo, toggleUpdateTodoForm };

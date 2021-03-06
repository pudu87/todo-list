import { todos } from './data.js'
import { 
  updateProject, deleteProject,
  findProject, findTodo, 
  sortTodos, checkIfOverdue
} from './dataOps.js'
import { showProjects } from './projectsDisplay.js'
import { showTodo, toggleUpdateTodoForm } from './todoDisplay.js'
import { 
  clearProjectSection, clearTodoSection, 
  addChild, dateToString
} from './displayOps'

const section = document.querySelector('#project');
const deleteMsg = 'Do you really want to delete this project?';

function showProject(project, pTodos) {
  clearProjectSection();
  clearTodoSection();
  addProjectHeader(project);
  addTodos(project, pTodos);
  addNewTodoButton();
  document.querySelectorAll('#project li').forEach(todo => {
    todo.addEventListener('click', selectTodo);
  })
  document.querySelector('#project .fa-edit')
    .addEventListener('click', toggleUpdateProjectForm);
  document.querySelector('#project .fa-trash-alt')
    .addEventListener('click', () => {
      window.confirm(deleteMsg) ? deleteCurrentProject() : 0;
    });
  document.querySelector('#update-project')
    .addEventListener('submit', (e) => submitUpdateProject(e, pTodos));
  document.querySelector('#new-todo-button')
    .addEventListener('click', selectNewTodo);
}
function selectTodo(e) {
  let id = e.currentTarget.classList[0].split('_')[1];
  let todo = findTodo(id);
  showTodo(todo);
}
function toggleUpdateProjectForm() {
  let h1 = document.querySelector('#project header h1');
  let form = document.querySelector('#update-project');
  h1.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function deleteCurrentProject() {
  let id = document.querySelector('#project header').classList[0].split('_')[1];
  if (id == 0) {
    alert('Default map cannot be deleted!');
  } else {
    deleteProject(id);
    clearProjectSection();
    showProjects();
  }
}
function submitUpdateProject(e, pTodos) {
  e.preventDefault();
  enterData();
  toggleUpdateProjectForm();
  showProjects();
  let projectId = e.target.parentNode.classList[0].split('_')[1];
  let project = findProject(projectId);
  showProject(project, pTodos);
}
function enterData() {
  let name = document.querySelector('#update-project-name').value;
  let id = document.querySelector('#project header').classList[0].split('_')[1];
  if (id == 0) {
    alert('Default map name cannot be changed!');
  } else {
  updateProject({ name, id });
  }
}
function selectNewTodo() {
  showTodo({ dueDate: new Date() });
  document.querySelector('#todo .edit').classList.toggle('display-none');
  document.querySelector('#todo input[type="submit"]').value = 'Create';
  toggleUpdateTodoForm();
}
function addProjectHeader(project) {
  let header = addChild(section, 'header', '', `project_${project.id}`);
  addChild(header, 'h1', project.name);
  addUpdateProjectForm(header, project);
  let div = addChild(header, 'div', '');
  [['fa-edit', 'edit'], ['fa-trash-alt', 'delete',]].forEach(clazz => {
    let icon = addChild(div, 'i', '', 'far');
    icon.classList.add(...clazz);
  })
}
function addUpdateProjectForm(header, project) {
  let form = addChild(header, 'form', '', 'display-none');
  form.id = 'update-project';
  let input = addChild(form, 'input', '');
  input.type = 'text';
  input.id = 'update-project-name';
  input.value = project.name;
  let submit = addChild(form, 'input', '');
  submit.type = 'submit';
  submit.value = 'Change';
}
function addTodos(project, pTodos) {
  let ul = addChild(section, 'ul', '');
  project.id == 0 ? pTodos = todos : 0;
  let sortedTodos = sortTodos(pTodos);
  sortedTodos.forEach(todo => {
    let li = addChild(ul, 'li', '', `todo_${todo.id}`);
    li.classList.add(`${todo.priority}-priority`);
    checkIfOverdue(todo) ? li.classList.add('overdue') : 0;
    addChild(li, 'h2', todo.title);
    addChild(li, 'div', dateToString(todo.dueDate));
  })
}
function addNewTodoButton() {
  let button = addChild(section, 'button', 'New Todo');
  button.id = 'new-todo-button';
}

export { showProject }

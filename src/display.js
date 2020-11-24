import { 
  projects, todos,
  createProject, updateProject,
  createTodo, updateTodo
  } from './data.js'

const showProjects = () => {
  addProjects();
  document.querySelectorAll('#projects li').forEach(project => {
    project.addEventListener('click', findProject);
  })
  document.querySelector('#projects button')
    .addEventListener('click', toggleNewProjectForm);
  document.querySelector('#new-project')
    .addEventListener('submit', submitNewProject)
}
function addProjects() {
  let ul = document.querySelector('#projects ul');
  ul.textContent = '';
  projects.forEach(project => {
    let li = document.createElement('li');
    li.textContent = project.name;
    li.classList.add(`project_${project.id}`);
    ul.appendChild(li);
  })
}
function findProject(e) {
  let projectId = e.target.classList[0].split('_')[1];
  let project = projects.find(p => p.id == projectId);
  let projectTodos = [];
  todos.forEach(todo => {
    todo.projectId == projectId ? projectTodos.push(todo) : 0;
  })
  hideNewProjectForm();
  showProject(project, projectTodos);
}
function toggleNewProjectForm() { 
  let button = document.querySelector('#projects button');
  let form = document.querySelector('#new-project');
  button.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function submitNewProject(e) { 
  e.preventDefault();
  let name = document.querySelector('#new-project-name').value;
  createProject({ name: name });
  toggleNewProjectForm();
  showProjects();
}
function hideNewProjectForm() {
  let button = document.querySelector('#projects button');
  button.classList[0] ? toggleNewProjectForm() : 0;
}

const showProject = (project, todos) => {
  let section = document.querySelector('#project');
  clearProjectSection();
  clearTodoSection();
  addProjectHeader(section, project);
  addProjectTodos(section, todos);
  createTodosListener(todos);
}
function addProjectHeader(section, project) {
  let header = document.createElement('header')
  addChild(header, 'h1', project.name);
  let div = document.createElement('div');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option);
  })
  header.appendChild(div);
  section.appendChild(header);
}
function addProjectTodos(section, todos) {
  let ul = document.createElement('ul');
  todos.forEach(todo => {
    let li = document.createElement('li');
    addChild(li, 'h2', todo.title);
    addChild(li, 'div', todo.dueDate);
    li.classList.add(`todo_${todo.id}`);
    ul.appendChild(li);
  })
  section.appendChild(ul);
}
function createTodosListener(todos) {
  document.querySelectorAll('#project li').forEach(todo => {
    todo.addEventListener('click', (e) => {
      let todoId = e.currentTarget.classList[0].split('_')[1];
      let todo = todos.find(t => t.id == todoId);
      showTodo(todo)
    })
  })
}

const showTodo = (todo) => {
  let section = document.querySelector('#todo');
  clearTodoSection();
  addTodoHeader(section, todo);
  addTodoArticle(section, todo);
}
function addTodoHeader(section, todo) {
  let header = document.createElement('header');
  addChild(header, 'h1', '');
  let div = document.createElement('div');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option);
  })
  header.appendChild(div);
  section.appendChild(header);
}
function addTodoArticle(section, todo) {
  let article = document.createElement('article');
  addChild(article, 'h2', todo.title);
  addChild(article, 'p', todo.description);
  addChild(article, 'div', todo.dueDate);
  section.appendChild(article);
}

function clearProjectSection() {
  let section = document.querySelector('#project');
  section.textContent = '';
}
function clearTodoSection() {
  let section = document.querySelector('#todo');
  section.textContent = '';
}
function addChild(parent, child, content) {
  let c = document.createElement(child);
  c.textContent = content;
  parent.appendChild(c);
}

export { showProjects };

import { 
  projects, todos,
  createProject, updateProject,
  createTodo, updateTodo
  } from './data.js'

/// Projects

const showProjects = () => {
  addProjects();
  document.querySelectorAll('#projects li').forEach(project => {
    project.addEventListener('click', findProject);
  })
  document.querySelector('#projects button')
    .addEventListener('click', toggleNewProjectForm);
  document.querySelector('#new-project')
    .addEventListener('submit', submitNewProject);
}
function addProjects() {
  let ul = document.querySelector('#projects ul');
  ul.textContent = '';
  projects.forEach(project => {
    addChild(ul, 'li', project.name, `project_${project.id}`)
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

/// Project

const showProject = (project, todos) => {
  let section = document.querySelector('#project');
  clearProjectSection();
  clearTodoSection();
  addProjectHeader(section, project);
  addTodos(section, todos);
  document.querySelectorAll('#project li').forEach(todo => {
    todo.addEventListener('click', findTodo);
  })
  document.querySelector('#project .o')
    .addEventListener('click', toggleUpdateProjectForm);
  document.querySelector('#project .x')
    .addEventListener('click', deleteProject);
  document.querySelector('#update-project')
    .addEventListener('submit', submitUpdateProject);
}
function toggleUpdateProjectForm() {
  let h1 = document.querySelector('#project header h1');
  let form = document.querySelector('#update-project');
  h1.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function deleteProject() {
  let id = document.querySelector('#project header').classList[0].split('_')[1];
  updateProject({ name, id, completed: true });
  clearProjectSection();
  showProjects();
}
function submitUpdateProject(e) {
  e.preventDefault();
  let name = document.querySelector('#update-project-name').value;
  let id = document.querySelector('#project header').classList[0].split('_')[1];
  updateProject({ name, id });
  toggleUpdateProjectForm();
  showProjects();
  findProject(e);
}
function addProjectHeader(section, project) {
  let header = addChild(section, 'header', '', `project_${project.id}`);
  addChild(header, 'h1', project.name);
  addUpdateProjectForm(header, project);
  let div = addChild(header, 'div', '');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option, option);
  })
}
function addUpdateProjectForm(header, project) {
  let form = addChild(header, 'form', '', `project_${project.id}`);
  form.classList.add('display-none');
  form.id = 'update-project';
  let input = addChild(form, 'input', '');
  input.type = 'text';
  input.id = 'update-project-name';
  input.value = project.name;
  let submit = addChild(form, 'input', '');
  submit.type = 'submit';
  submit.value = 'Change';
}
function addTodos(section, todos) {
  let ul = addChild(section, 'ul', '');
  todos.forEach(todo => {
    let li = addChild(ul, 'li', '', `todo_${todo.id}`);
    addChild(li, 'h2', todo.title);
    addChild(li, 'div', todo.dueDate);
  })
}
function findTodo(e) {
  let todoId = e.currentTarget.classList[0].split('_')[1];
  let todo = todos.find(t => t.id == todoId);
  showTodo(todo);
}

/// Todo

const showTodo = (todo) => {
  let section = document.querySelector('#todo');
  clearTodoSection();
  addTodoHeader(section, todo);
  addTodoArticle(section, todo);
}
function addTodoHeader(section, todo) {
  let header = addChild(section, 'header', '');
  addChild(header, 'h1', '');
  let div = addChild(header, 'div', '');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option);
  })
}
function addTodoArticle(section, todo) {
  let article = addChild(section, 'article', '');
  addChild(article, 'h2', todo.title);
  addChild(article, 'p', todo.description);
  addChild(article, 'div', todo.dueDate);
}

function clearProjectSection() {
  let section = document.querySelector('#project');
  section.textContent = '';
}
function clearTodoSection() {
  let section = document.querySelector('#todo');
  section.textContent = '';
}
function addChild(parent, child, content, klass = 0) {
  let c = document.createElement(child);
  c.textContent = content;
  klass ? c.classList.add(klass) : 0;
  return parent.appendChild(c);
}

export { showProjects };

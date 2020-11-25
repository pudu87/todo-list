import { 
  projects, todos,
  createProject, updateProject,
  createTodo, updateTodo
  } from './data.js'

/// Projects

const showProjects = () => {
  addProjects();
  document.querySelectorAll('#projects li').forEach(project => {
    project.addEventListener('click', (e) => {
      let project = findProject(e.target);
      let todos = findTodos(project);
      hideNewProjectForm();
      showProject(project, todos);
    })
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
function findProject(target) {
  let projectId = target.classList[0].split('_')[1];
  return projects.find(p => p.id == projectId);
}
function findTodos(project) {
  let projectTodos = [];
  todos.forEach(todo => {
    todo.projectId == project.id ? projectTodos.push(todo) : 0;
  })
  return projectTodos;
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
  addNewTodoButton(section);
  document.querySelectorAll('#project li').forEach(todo => {
    todo.addEventListener('click', (e) => {
      let todo = findTodo(e);
      showTodo(todo);
    });
  })
  document.querySelector('#project .o')
    .addEventListener('click', toggleUpdateProjectForm);
  document.querySelector('#project .x')
    .addEventListener('click', deleteProject);
  document.querySelector('#update-project')
    .addEventListener('submit', (e) => {
      submitUpdateProject(e);
      let project = findProject(e.target.parentNode);
      showProject(project, todos);
    });
  document.querySelector('#new-todo-button')
    .addEventListener('click', () => {
      showTodo(0);
      document.querySelector('#todo .o').classList.toggle('display-none');
      document.querySelector('#todo input:last-child').value = 'Create';
      toggleUpdateTodoForm();
    })
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
function addTodos(section, todos) {
  let ul = addChild(section, 'ul', '');
  todos.forEach(todo => {
    let li = addChild(ul, 'li', '', `todo_${todo.id}`);
    addChild(li, 'h2', todo.title);
    addChild(li, 'div', todo.dueDate);
  })
}
function addNewTodoButton(section) {
  let button = addChild(section, 'button', 'New Todo');
  button.id = 'new-todo-button';
}
function findTodo(e) {
  let todoId = e.currentTarget.classList[0].split('_')[1];
  return todos.find(t => t.id == todoId);
}

/// Todo

const showTodo = (todo) => {
  let section = document.querySelector('#todo');
  clearTodoSection();
  addTodoHeader(section, todo);
  addUpdateTodoForm(section, todo);
  addTodoArticle(section, todo);
  document.querySelector('#todo .o')
    .addEventListener('click', toggleUpdateTodoForm);
  document.querySelector('#todo .x')
    .addEventListener('click', deleteTodo);
  document.querySelector('#update-todo')
    .addEventListener('submit', submitUpdateTodo);
}
function toggleUpdateTodoForm() {
  let article = document.querySelector('#todo article');
  let form = document.querySelector('#update-todo');
  article.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function deleteTodo() {
  let id = document.querySelector('#todo header').classList[0].split('_')[1];
  if (id == 'undefined') {
    clearTodoSection();
  } else {
  let todo = todos.find(t => t.id == id);
  updateTodo({ id, completed: true });
  clearTodoSection();
  let project = projects.find(p => p.id == todo.projectId);
  let projectTodos = findTodos(project);
  showProject(project, projectTodos);
  }
}
function submitUpdateTodo(e) {
  e.preventDefault();
  let id = document.querySelector('#todo header').classList[0].split('_')[1];
  let todo = todos.find(t => t.id == id);
  let title = document.querySelector('#update-todo-title').value;
  let description = document.querySelector('#update-todo-description').value;
  let dueDate = document.querySelector('#update-todo-dueDate').value;
  let priority = 0;
  let projectId;
  if (id == 'undefined') {
    projectId = document.querySelector('#project header')
      .classList[0].split('_')[1];
    todo = createTodo({ title, description, dueDate, priority, projectId })
  } else {
    projectId = todo.projectId;
    todo = updateTodo({ title, description, dueDate, priority, projectId, id });
  }
  toggleUpdateTodoForm();
  showTodo(todo);
  let project = projects.find(p => p.id == todo.projectId);
  let projectTodos = findTodos(project);
  showProject(project, projectTodos);
}
function addTodoHeader(section, todo) {
  let header = addChild(section, 'header', '', `todo_${todo.id}`);
  addChild(header, 'h1', '');
  let div = addChild(header, 'div', '');
  ['o', 'x'].forEach(option => {
    addChild(div, 'span', option, option);
  })
}
function addUpdateTodoForm(section, todo) {
  let form = addChild(section, 'form', '', 'display-none');
  form.id = 'update-todo';
  ['title', 'description', 'dueDate'].forEach(prop => {
    let labelContent = prop.charAt(0).toUpperCase() + prop.slice(1) + ':';
    let label = addChild(form, 'label', labelContent);
    label.for = `update-todo-${prop}`;
    let input = addChild(form, 'input', '');
    input.type = 'text';
    input.id = `update-todo-${prop}`;
    input.value = todo[prop] == undefined ? '' : todo[prop];
  })
  let submit = addChild(form, 'input', '');
  submit.type = 'submit';
  submit.value = 'Change';
}
function addTodoArticle(section, todo) {
  let article = addChild(section, 'article', '');
  addChild(article, 'h2', todo.title);
  addChild(article, 'p', todo.description);
  addChild(article, 'div', todo.dueDate);
}

/// General

function clearProjectSection() {
  let section = document.querySelector('#project');
  section.textContent = '';
}
function clearTodoSection() {
  let section = document.querySelector('#todo');
  section.textContent = '';
}
function addChild(parent, child, content, clazz = 0) {
  let c = document.createElement(child);
  c.textContent = content;
  clazz ? c.classList.add(clazz) : 0;
  return parent.appendChild(c);
}

export { showProjects };

// TODO: make default show all todo's
// TODO: CHANGE UPDATETODO ALGORITM

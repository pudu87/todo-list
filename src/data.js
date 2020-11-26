import { Todo, Project } from './classes.js'

const projects = [ { name: 'default', id: 0 } ];
const todos = [];

function createProject(p) {
  p.id = projects.length ? projects[projects.length - 1].id + 1 : 0;
  let project = new Project(p);
  projects.push(project);
}
function updateProject(p) {
  let index = projects.findIndex(project => p.id == project.id);
  let project = new Project(p);
  projects.splice(index, 1, project);
}
function deleteProject(id) {
  let index = projects.findIndex(project => id == project.id);
  projects.splice(index, 1);
  deleteTodos(id);
}
function createTodo(t) {
  t.id = todos.length ? todos[todos.length - 1].id + 1 : 0;
  let todo = new Todo(t);
  todos.push(todo);
  return todo;
}
function updateTodo(t) {
  let index = todos.findIndex(todo => t.id == todo.id);
  let todo = new Todo(t);
  todos.splice(index, 1, todo);
  return todo;
}
function deleteTodo(id) {
  let index = todos.findIndex(todo => id == todo.id);
  todos.splice(index, 1);
}
function findProject(id) {
  return projects.find(p => p.id == id);
}
function findTodos(id) {
  let projectTodos = [];
  todos.forEach(todo => {
    todo.projectId == id ? projectTodos.push(todo) : 0;
  })
  return projectTodos;
}
function findTodo(id) {
  return todos.find(t => t.id == id);
}
function deleteTodos(projectId) {
  let indexes = [];
  todos.forEach((todo, index) => {
    todo.projectId == projectId ? indexes.unshift(index) : 0;
  })
  indexes.forEach(index => {
    todos.splice(index, 1);
  })
}

export {
  projects, todos, 
  createProject, updateProject, deleteProject,
  createTodo, updateTodo, deleteTodo,
  findProject, findTodos, findTodo
}

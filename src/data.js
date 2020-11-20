import { Todo, Project } from './classes.js'

const projects = [ { name: 'default', id: 0 } ];
const todos = [];

const createProject = (p) => { 
  let project = new Project(p);
  projects.push(project);
}
const updateProject = (p) => {
  let index = projects.findIndex(project => p.id == project.id);
  let project = new Project(p);
  if (p.completed === undefined) {
    projects.splice(index, 1, project);
  } else {
    projects.splice(index, 1);
    removeTodos(project.id);
  }
}
const createTodo = (t) => {
  let id = todos.length ? todos[todos.length - 1].id + 1 : 0;
  t.id = id;
  let todo = new Todo(t);
  todos.push(todo);
}
const updateTodo = (t) => {
  let index = todos.findIndex(todo => t.id == todo.id);
  let todo = new Todo(t);
  t.completed === undefined ? 
    todos.splice(index, 1, todo) :
    todos.splice(index, 1);
}
const removeTodos = (id) => {
  let indexes = [];
  todos.forEach((todo, index) => {
    todo.projectId == id ? indexes.unshift(index) : 0;
  })
  indexes.forEach(index => {
    todos.splice(index, 1)
  })
}

export {
  projects, todos, 
  createProject, updateProject, createTodo, updateTodo 
}

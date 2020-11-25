import { 
  projects, todos,
  createProject, updateProject,
  createTodo, updateTodo
  } from './data.js'
import { showProjects } from './display.js'

// Pre-populate
//// Todos
let a = {title:'a', description:'a', dueDate:'a', priority:'a', projectId:'0'}
let b = {title:'b', description:'b', dueDate:'b', priority:'b', projectId:'0'}
let c = {title:'c', description:'c', dueDate:'c', priority:'c', projectId:'1'}
let d = {title:'d', description:'d', dueDate:'d', priority:'d', projectId:'2'}
let e = {title:'e', description:'e', dueDate:'e', priority:'e', projectId:'3'}
let f = {title:'f', description:'f', dueDate:'f', priority:'f', projectId:'4'}
//// Projects
let p = {name:'p'}
let q = {name:'q'}
let r = {name:'r'}
let s = {name:'s'}
//// populate
createTodo(a); createTodo(b); createTodo(c); createTodo(d); createTodo(e); createTodo(f);
createProject(p); createProject(q); createProject(r); createProject(s);

showProjects();

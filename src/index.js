import { 
  createProject,
  createTodo
  } from './data.js'
import { showProjects } from './projectsDisplay.js'

// Pre-populate
//// Todos
let a = {title:'a', description:'a', dueDate:undefined, priority:'low', projectId:'0'}
let b = {title:'b', description:'b', dueDate:undefined, priority:'medium', projectId:'0'}
let c = {title:'c', description:'c', dueDate:undefined, priority:'high', projectId:'1'}
let d = {title:'d', description:'d', dueDate:undefined, priority:'low', projectId:'2'}
let e = {title:'e', description:'e', dueDate:undefined, priority:'medium', projectId:'3'}
let f = {title:'f', description:'f', dueDate:undefined, priority:'high', projectId:'4'}
//// Projects
let p = {name:'p'}
let q = {name:'q'}
let r = {name:'r'}
let s = {name:'s'}
//// populate
createTodo(a); createTodo(b); createTodo(c); createTodo(d); createTodo(e); createTodo(f);
createProject(p); createProject(q); createProject(r); createProject(s);

showProjects();
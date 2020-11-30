import { 
  createProject,
  createTodo
} from './dataOps.js'
import { showProjects } from './projectsDisplay.js'

// Pre-populate
//// Todos
let a = {title:'a', description:'a', dueDate:'2000-02-02', priority:'low', projectId:'0'}
let b = {title:'b', description:'b', dueDate:'1905-05-12', priority:'medium', projectId:'0'}
let c = {title:'c', description:'c', dueDate:'2021-01-02', priority:'high', projectId:'1'}
let d = {title:'d', description:'d', dueDate:'2021-01-03', priority:'low', projectId:'2'}
let e = {title:'e', description:'e', dueDate:'2021-02-02', priority:'medium', projectId:'3'}
let f = {title:'f', description:'f', dueDate:'1021-02-02', priority:'high', projectId:'4'}
//// Projects
let p = {name:'p'}
let q = {name:'q'}
let r = {name:'r'}
let s = {name:'s'}
//// populate
createTodo(a); createTodo(b); createTodo(c); createTodo(d); createTodo(e); createTodo(f);
createProject(p); createProject(q); createProject(r); createProject(s);

showProjects();

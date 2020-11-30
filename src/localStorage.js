import { 
  Project, Todo,
  projects, todos
} from './data.js'

const initProjects = [
  new Project({ name: 'Default', id: 0 }),
  new Project({ name: 'Feed the cat', id: 1}),
];
const initTodos = [
  new Todo({ title: 'Buy cat food', description: 'I go to the store and buy cat food', dueDate:'2019-05-14', priority:'medium', projectId: 1, id: 0 }),
  new Todo({ title: 'Buy a cat', description: 'I can get it for free though probably', dueDate:'2031-01-24', priority:'low', projectId: 1, id: 1 }),
  new Todo({ title: 'Feed it', description: 'I position the cat next to the cat food', dueDate:'2040-01-28', priority:'high', projectId: 1, id: 2 })
];

function initData() {
  if(!localStorage.getItem('data')) { 
    populateStorage(true);
    setData();
  } else {
    setData();
  }
}
function setData() {
  let data = JSON.parse(localStorage.getItem('data'));
  data.projects.forEach(project => {
    projects.push(new Project(project));
  });
  data.todos.forEach(todo => {
    todos.push(new Todo(todo));
  });
}
function populateStorage(init = false) {
  let data;
  if (init) {
    data = { projects: initProjects, todos: initTodos };
  } else {
    data = { projects: projects, todos: todos };
  }
  localStorage.setItem('data', JSON.stringify(data));
}

export { initData, populateStorage }

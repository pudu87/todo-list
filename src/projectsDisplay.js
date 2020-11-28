import { projects } from './data'
import { 
  createProject,
  findProject, findTodos
  } from './dataOps.js'
import { showProject } from './projectDisplay'
import { addChild } from './displayOps'

const button = document.querySelector('#projects button');
const form = document.querySelector('#new-project');

function showProjects() {
  addProjects();
  document.querySelectorAll('#projects li').forEach(project => {
    project.addEventListener('click', selectProject)
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
    addChild(ul, 'li', project.name, `project_${project.id}`);
  })
}
function selectProject(e) {
  let projectId = e.target.classList[0].split('_')[1];
  let project = findProject(projectId);
  let todos = findTodos(project.id);
  hideNewProjectForm();
  showProject(project, todos);
}
function toggleNewProjectForm() { 
  button.classList.toggle('display-none');
  form.classList.toggle('display-none');
}
function submitNewProject(e) { 
  e.preventDefault();
  enterData();
  toggleNewProjectForm();
  showProjects();
  let project = projects[projects.length - 1];
  let todos = findTodos(project);
  showProject(project, todos);
}
function enterData() {
  let name = document.querySelector('#new-project-name').value;
  createProject({ name });
}
function hideNewProjectForm() {
  button.classList.contains('display-none') ? toggleNewProjectForm() : 0;
}

export { showProjects }

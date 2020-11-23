const showProjects = (projects, todos) => {
  const projectsList = document.querySelector('#projects');
  projects.forEach(project => {
    let li = document.createElement('li');
    li.textContent = project.name;
    li.classList.add(`project_${project.id}`);
    projectsList.appendChild(li);
  })

  const projectsDisplay = document.querySelectorAll('#projects li');
  projectsDisplay.forEach(project => {
    project.addEventListener('click', (e) => {
      let projectId = e.target.classList[0].split('_')[1];
      let project = projects.find(p => p.id == projectId);
      let projectTodos = [];
      todos.forEach(todo => {
        todo.projectId == projectId ? projectTodos.push(todo) : 0;
      })
      showProject(project, projectTodos);
    })
  })
}

const showProject = (project, todos) => {
  const section = document.querySelector('#project-folder');
  const todoSection = document.querySelector('#todo-folder');
  clearSection(section);
  clearSection(todoSection);

  const header = document.createElement('header')
  const h1 = document.createElement('h1');
  h1.textContent = project.name;
  header.appendChild(h1);

  const div = document.createElement('div');
  ['o', 'x'].forEach(option => {
    let span = document.createElement('span');
    span.textContent = option;
    div.appendChild(span);
  })
  header.appendChild(div);

  const ul = document.createElement('ul');
  todos.forEach(todo => {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let div = document.createElement('div');
    h2.textContent = todo.title;
    div.textContent = todo.dueDate;
    li.appendChild(h2);
    li.appendChild(div);
    li.classList.add(`todo_${todo.id}`);
    ul.appendChild(li);
  })

  section.appendChild(header);
  section.appendChild(ul);

  let todosDisplay = document.querySelectorAll('#project-folder li');
  todosDisplay.forEach(todo => {
    todo.addEventListener('click', (e) => {
      let todoId = e.currentTarget.classList[0].split('_')[1];
      let todo = todos.find(t => t.id == todoId);
      showTodo(todo)
    })
  })
}

const showTodo = (todo) => {
  const section = document.querySelector('#todo-folder');
  clearSection(section);

  const header = document.createElement('header')
  const h1 = document.createElement('h1');
  h1.textContent = todo.name;
  header.appendChild(h1);

  let div = document.createElement('div');
  ['o', 'x'].forEach(option => {
    let span = document.createElement('span');
    span.textContent = option;
    div.appendChild(span);
  })
  header.appendChild(div);
  section.appendChild(header);

  const article = document.createElement('article');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  div = document.createElement('div');
  h2.textContent = todo.title;
  p.textContent = todo.description;
  div.textContent = todo.dueDate;
  article.appendChild(h2);
  article.appendChild(p);
  article.appendChild(div);
  section.appendChild(article);
}
function clearSection(section) {
  section.textContent = '';
}

export { showProjects };

class Project {

  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
  }
}

class Todo {

  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.dueDate = new Date(obj.dueDate);
    this.priority = obj.priority;
    this.projectId = obj.projectId;
    this.id = obj.id;
  }
}

const projects = [];
const todos = [];

export { 
  Project, Todo,
  projects, todos
}
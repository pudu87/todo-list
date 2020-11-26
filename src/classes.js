class Todo {

  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.dueDate = obj.dueDate;
    this.priority = obj.priority;
    this.projectId = obj.projectId;
    this.id = obj.id;
  }
}

class Project {

  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
  }
}

export { Todo, Project }
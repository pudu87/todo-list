class Todo {

  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.dueDate = obj.dueDate;
    this.priority = obj.priority;
    this.projectId = obj.projectId;
    this.id = obj.id;
  }

  get title() { return this._title; }
  set title(value) { this._title = value; }
}

class Project {

  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
  }

  get name() { return this._name; }
  set name(value) { this._name = value; }
}

export { Todo, Project }
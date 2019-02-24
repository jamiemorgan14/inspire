export default class Todo {
  constructor(data) {
    this.id = data._id || data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description || 'Add a task'
  }
  getTemplate() {
    return `				
  <li onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')"class="text-white">${this.description}</li><button onclick="app.controllers.todoController.removeTodo('${this.id}')">X</button>
`
  }
}
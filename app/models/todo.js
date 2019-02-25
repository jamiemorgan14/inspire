export default class Todo {
  constructor(data) {
    this.id = data._id || data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description || 'Add a task'
  }
  getTemplate() {
    if (this.completed) {
      return `
      <hr><li onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')" class="completed text-white">${this.description}</li>
              
      <button class="btn btn-outline-danger" id="delete" onclick="app.controllers.todoController.removeTodo('${this.id}')">X</button>`
    } else {
      return `
      <hr><li onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')" class="text-white">${this.description}</li>`
    }
  }
}
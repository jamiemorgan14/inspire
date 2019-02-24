export default class Todo {
  constructor(data) {
    this.id = data._id || data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description || 'Add a task'
  }
  getTemplate() {
    return `
              <li onmouseover="app.controllers.todoController.showDelete('visible')" onmouseout="app.controllers.todoController.showDelete('hidden')" onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')" class="listed text-white">${this.description}
              
              <button class="btn btn-outline-danger" id="delete" onclick="app.controllers.todoController.removeTodo('${this.id}')">X</button></li> 
								
`
  }
}
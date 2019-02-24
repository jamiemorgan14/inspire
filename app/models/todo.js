export default class Todo {
  constructor(data) {
    this.id = data.id || data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description || 'Add a task'
  }
  getTemplate() {
    return `				
    			<li class="text-white">${this.description}</li>
`
  }
}
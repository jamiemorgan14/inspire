export default class Todo {
  constructor(data) {
    this.id = data.id || data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
    this.message = data.message
  }
  getTemplate() {
    return `
        <h3>${this.user}</h3>					
    			<ul>
            <li>
							<ul class="text-white">${this.description}</ul>
						</li>
					</ul>
`
  }
}
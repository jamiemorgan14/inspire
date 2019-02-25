import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	let template = ''
	todos.forEach(todo => {
		template += todo.getTemplate();
	})
	document.getElementById('todos').innerHTML = template
	document.getElementById('todo-entry').innerHTML = `
	<form onsubmit="app.controllers.todoController.addTodo(event)">
		<input class="form-control form-control-md text-center" type="text" name="description" placeholder="List your priorities" required>
		<button class="btn btn-outline-info btn-blk" type="submit">Add</button>
	</form>
	`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(event) {
		event.preventDefault();
		let form = event.target
		let todo = {
			description: form.description.value
		}

		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}

}
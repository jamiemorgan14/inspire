import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jamie/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Todos() {
		return _state.todos
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let todoData = res.data.data.map(l => new Todo(l))
				_setState('todos', todoData)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		let newTodo = new Todo(todo)
		todoApi.post('', newTodo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo.id == todoId)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?

			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete('' + todoId)
			.then(res => {
				this.getTodos()
			})
	}

}
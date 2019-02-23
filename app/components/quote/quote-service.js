import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function setState(prop, data) {
	_state[prop] = data;
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	get Quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
		return _subscribers[prop].push(fn)
	}

	getQuote() {
		_quoteApi.get().then(res => {
			setState('quote', new Quote(res.data))
		})
	}
}

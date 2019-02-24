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

	showAuthor() {
		document.getElementById('author').style.visibility = "visible";
	}

	hideAuthor() {
		document.getElementById('author').style.visibility = "hidden"
	}

	formatTime() {
		let _currentTime = new Date()
		let _currentHours = _currentTime.getHours()
		let _currentMinutes = _currentTime.getMinutes()
		let _currentSeconds = _currentTime.getSeconds()
		_currentMinutes = (_currentMinutes < 10 ? "0" : "") + _currentMinutes
		_currentSeconds = (_currentSeconds < 10 ? "0" : "") + _currentSeconds
		let timeOfDay = (_currentHours < 12) ? "AM" : "PM"
		_currentHours = (_currentHours > 12) ? _currentHours - 12 : _currentHours;
		_currentHours = (_currentHours == 0) ? 12 : _currentHours;
		let alert = (timeOfDay == 'AM') ? "Good Morning!" : "Good Afternoon!"
		let currentTimeString = `${_currentHours}:${_currentMinutes} ${timeOfDay} <br> ${alert}`;
		return currentTimeString
	}
}

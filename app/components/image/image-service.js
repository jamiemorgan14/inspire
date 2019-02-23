import Image from "../../models/image.js"

// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function setState(prop, data) {
	_state[prop] = data;
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	get Image() {
		return _state.image
	}

	addSubscriber(prop, fn) {
		return _subscribers[prop].push(fn)
	}

	getImage() {
		_imgApi.get().then(res => {
			setState('image', new Image(res.data))
		})
	}
}

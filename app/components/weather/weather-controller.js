import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	document.getElementById('weather').innerHTML = _weatherService.Weather.getF();
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}

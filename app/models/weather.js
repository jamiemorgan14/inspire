export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
    this.description = data.weather[0].description
    this.humidity = data.main.humidity
  }

  getTemplate() {
    return `
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item weather-card">Temp: ${this.kelvin}</li>
        <li class="list-group-item">Humidity: ${this.humidity}</li>
        <li class="list-group-item">Weather: ${this.description.toUpperCase()}</li>
        <li class="list-group-item">City: ${this.city.toUpperCase()}</li>
      </ul>
    </div>`
  }
}
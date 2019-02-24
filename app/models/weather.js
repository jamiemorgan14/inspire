export default class Weather {
  constructor(data) {

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
        <h4 class="weather">${this.kelvin}° F</h4>`
  }
}
export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
  }
  getTemplate() {
    return `
    <h2 class="mb-5">"${this.quote}"</h2>
    `
  }
}
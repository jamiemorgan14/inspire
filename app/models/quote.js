export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }
  getTemplate() {
    return `
    <hr><h2 class="main-clock text-center mb-4">"${this.quote}"</h2>
    <h4 class="mb-3 text-center" id="author">- ${this.author}</h4>
    `
  }
}
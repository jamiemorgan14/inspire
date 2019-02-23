export default class Quote {
  constructor(data) {
    console.log('quote')
    this.quote = data.quote.body
  }
  getTemplate() {
    return `
    <h1>${this.quote}</h1>
    `
  }
}
export default class Image {
  constructor(data) {
    this.url = data.url
  }
  getTemplate() {
    return `${this.url}`
  }
}
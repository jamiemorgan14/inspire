import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  document.getElementById('quote').innerHTML = _qs.Quote.getTemplate();
  _qs.hideAuthor()
}


function drawTime() {
  document.getElementById('clock').innerHTML = `<h1 class="text-center main-clock">${_qs.formatTime()}</h1>`
}
let interval = setInterval(drawTime, 1000)
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote);
    _qs.getQuote()
    drawTime()
    interval
  }
  showAuthor() {
    _qs.showAuthor()
  }

  hideAuthor() {
    _qs.hideAuthor()
  }
}

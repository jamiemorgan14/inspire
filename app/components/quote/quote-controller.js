import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  document.getElementById('quote').innerHTML = _qs.Quote.getTemplate();
}
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote);
    _qs.getQuote()
  }
}

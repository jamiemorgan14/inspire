import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  document.getElementById('bg-image').setAttribute('background', _is.Image.getTemplate())
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
  }

  getImage() {
    _is.getImage()
  }

}


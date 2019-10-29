import images from '../data/images.js';
import htmlToDOM from '../utils/html-to-DOM.js';
import renderImageItem from './render-image-item.js';
const list = document.querySelector('.images');

images.forEach(image => {
    const html = renderImageItem(image);
    const dom = htmlToDOM(html);
    list.appendChild(dom);
});
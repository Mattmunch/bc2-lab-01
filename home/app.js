import images from '../data/cats.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderImageItem from './render-cat-item.js';
const list = document.querySelector('.images');

images.forEach(image => {
    const html = renderImageItem(image);
    const dom = htmlToDOM(html);
    list.appendChild(dom);
});
import images from '../data/images.js';
import htmlToDOM from '../utils/html-to-DOM.js';
import renderImageItem from './render-image-item.js';
const list = document.querySelector('.images');
const imageTypeFilter = document.querySelector('.image-type-filter');
const hornFilter = document.querySelector('.horn-filter');

imageTypeFilter.addEventListener('change', () => {
    const filter = imageTypeFilter.value;
    let filteredImages = null;

    if (!filter || filter === 'any') {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => {
            return image.keyword === filter;
        });
    }

    renderImages(filteredImages);
});
hornFilter.addEventListener('change', () => {
    const filter = parseInt(hornFilter.value);
    let filteredImages = null;

    if (!filter || filter === 'any') {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => {
            return image.horns === filter;
        });
    }

    renderImages(filteredImages);
});

renderImages(images);


function renderImages(imagesToRender){

    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }
    imagesToRender.forEach(image => {
        const html = renderImageItem(image);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}


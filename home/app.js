import images from '../data/images.js';
import htmlToDOM from '../utils/html-to-DOM.js';
import renderImageItem from './render-image-item.js';
const list = document.querySelector('.images');
const imageTypeFilter = document.querySelector('.image-type-filter');

imageTypeFilter.addEventListener('change', () => {
    const filter = imageTypeFilter.value;
    let filteredImages = null;

    if (!filter) {
        filteredImages = images;
    } else {
        filteredImages = images.filter(image => {
            return image.keyword === filter;
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


export default function renderImageItem(imageItem) {
    const html = /*html*/`
        <li>
            <div class="info-container">
                <h2>${imageItem.title}</h2>
             </div>
            <div class="image-container">
                 <img src="${imageItem.url}"
                                alt="${imageItem.description}">
            </div>
                <p class="horn-quantity">Horns:${imageItem.horns}
                </p>
        </li>
    `;

    return html;
}
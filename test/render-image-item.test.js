
import renderImageItem from '../home/render-image-item.js';
const test = QUnit.test;

QUnit.module('Render Image Item');

test('renders html from data', assert => {
    // arrange
    const image = {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg',
        title: 'Markhor',
        description: 'These wild goats eat snakes, then secrete a foam that locals fight over for the antivenom properties -- how cool is that?',
        keyword: 'markhor',
        horns: 2
    };

    const expected = /*html*/`
    <li>
        <div class="info-container">
            <h2>Markhor</h2>
         </div>
        <div class="image-container">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg"
                            alt="These wild goats eat snakes, then secrete a foam that locals fight over for the antivenom properties -- how cool is that?">
        </div>
            <p class="horn-quantity">Horns:2
            </p>
    </li>
`;

    // act
    const html = renderImageItem(image);
    
    // assert
    assert.htmlEqual(html, expected);
});

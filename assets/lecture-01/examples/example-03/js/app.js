// Create & render some elements, utilizing a JS array

// Some recipe ingredients
const ingredients = [
    { title: 'flour', quantity: '2 cups', vegan: true },
    { title: 'sugar', quantity: '1 cup', vegan: true },
    { title: 'milk', quantity: '1 cup' },
    { title: 'oil', quantity: '1/2 cup', vegan: true },
    { title: 'egg(s)', quantity: '1' },
];

// Header element
const h1 = React.createElement('h1', null, 'Recipe');

// List element
// Children come from Array.map
const ul = React.createElement('ul', { className: 'ingredient-list' },
    ingredients.map((item, index) =>
        React.createElement('li', { className: 'ingredient', key: index },
            `${item.quantity} ${item.title} ${item.vegan ? '(vegan)' : ''}`
        )
    )
);

// Render them inside the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, ul]);

// Create & render some elements, utilizing a JS array

// Some recipe ingredients
const ingredients = [
    { title: 'flour', quantity: '1kg', vegan: true },
    { title: 'salt', quantity: '3tbs', vegan: true },
    { title: 'eggs', quantity: '2' },
];

// Header element
const h1 = React.createElement('h1', null, 'Recipe');

// List element
// Children come from Array.map
const ul = React.createElement(
    'ul',
    { className: 'ingredient-list' },
    ingredients.map(
        (item, index) => React.createElement(
            'li',
            { className: 'ingredient', key: index },
            `${item.quantity} ${item.title} ${item.vegan ? '(vegan)' : ''}`
        )
    )
);

// Render them inside the 'root' div
ReactDOM.render([h1, ul], document.getElementById('root'));

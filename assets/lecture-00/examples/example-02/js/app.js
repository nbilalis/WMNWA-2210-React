// Create a React element
const h1 = React.createElement('h1', null, 'Recipe for muffins');

// Create another element with multiple children`
const ul = React.createElement('ul', { className: 'ingredients' },
    React.createElement('li', null, '2 cups of flour'),
    React.createElement('li', null, '1 cup of sugar'),
    React.createElement('li', null, '1 cup of milk'),
    React.createElement('li', null, '1/2 cup of oil'),
    React.createElement('li', null, '1 egg'),
);

// Create a root to render the React elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, ul]);

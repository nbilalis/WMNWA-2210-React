// Create & render some elements, with children

// React.createElement(element, properties, child(ren))
const h1 = React.createElement('h1', null, 'Child elements!');
const ul = React.createElement(
    'ul',
    { className: 'secondary-title', key: 'h2' },
    React.createElement('li', null, '1st node'),
    React.createElement('li', null, '2nd node'),
    React.createElement('li', null, '3rd node'),
    React.createElement('li', null, '4th node'),
);

// Render them inside the 'root' div
ReactDOM.render([h1, ul], document.getElementById('root'));

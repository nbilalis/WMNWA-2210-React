// Create & render some elements

// React.createElement(element, properties, child(ren))
const h1 = React.createElement('h1', { id: 'main-title', key: 'h1' }, 'Hello, humans!');
const h2 = React.createElement('h2', { className: 'secondary-title', key: 'h2' }, 'Greetings from React!');

// Log them to study their structure
console.log({h1, h2});

// Render them inside the 'root' div
ReactDOM.render([h1, h2], document.getElementById('root'));

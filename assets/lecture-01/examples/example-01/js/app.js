// Create a couple of React elements
const h1 = React.createElement('h1', { id: 'main', className: 'main-title' }, 'Hello, World!');
const h2 = React.createElement('h2', { id: 'secondary' }, 'Greetings from React!');

// Check their structure
console.log({ h1, h2 });

// Create a root to render the React elements
// Notice the use of the array
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, h2]);

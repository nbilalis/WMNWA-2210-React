// JSX FTW!

const styles = { color: '#61DAFB', backgroundColor: 'black' };

// We need Babel in order for this to be parsed
const header = <h1 id="main-header" style={styles}>
    Hello, from JSX! Time is {new Date().toLocaleTimeString()}
</h1>;

// It's still a React element
console.log(header);

ReactDOM.render(header, document.getElementById('root'));

const Message = (props) => (
  <div>Hello, {props.name}!</div>
);

const App = ({ color }) => (          // props destructuring
  <section style={{ color }}>
    <h1>JSX Components</h1>
    <Message name="SAE" />
  </section>
);

ReactDOM.render(
  <App color={'#61DAFB'} />,
  document.getElementById('root')
);

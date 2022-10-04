// Click counting function component

const ClickCounter = () => {
  const [count, setCount] = React.useState(0);

  const incrementCounter = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Click me!</button>
      <button onClick={resetCounter}>Reset</button>
      <span>Clicks: {count}</span>
    </div>
  );
};

const App = () => (
  <>
    <ClickCounter />
    <ClickCounter />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

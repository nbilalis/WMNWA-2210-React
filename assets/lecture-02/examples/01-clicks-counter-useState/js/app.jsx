// Click counting function component

const ClickCounter = () => {
  const [count, setCount] = React.useState();

  const incrementValue = () => {
    // setCount(count + 1); // Avoid this
    setCount((prev) => prev + 1);
  };

  const resetValue = () => {
    setCount(0);
  }

  return (
    <div>
      <button onClick={incrementValue}>Click me!</button>
      <button onClick={resetValue}>Reset</button>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


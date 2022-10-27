// sleep time expects milliseconds
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Usage!
sleep(500).then(() => {
    // Do something after the sleep!
});

const TripleCounter = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  console.log('Rerender');

  const increment = async () => {
    setCount1(c => c + 1);
    setCount3(c => c + 1);

    // for (let i = 0; i < 1000000000; i++) { }
    await sleep(5000);

    setCount2(c => c + 1);
    setCount3(c => c + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click</button>
      <div>
        <span>{count1}</span> -
        <span>{count2}</span> -
        <span>{count3}</span>
      </div>
    </div>
  );
};

const App = () => (
  <>
    <TripleCounter />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

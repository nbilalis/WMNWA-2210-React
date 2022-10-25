// Character limiting function component v2

const CharacterLimitInput = ({ limit = 120 }) => {
  // Setting state as an object
  const [state, setState] = React.useState({ count: 0, color: "darkgreen" });

  const changeHandler = (event) => {
    const length = event.target.value.length;
    const remaining = limit - length;

    setState((prevState) => ({ ...prevState, count: remaining }));
    setState((prevState) => ({ ...prevState, color: remaining >= 0 ? "darkgreen" : "red" }));

    // or maybe...

    /* setState({
      count: remaining,
      color: remaining >= 0 ? "darkgreen" : "red",
    }); */
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <span style={{ color: state.color }}>{state.count}</span>
    </div>
  );
};

const App = () => (
  <>
    <CharacterLimitInput limit={10} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

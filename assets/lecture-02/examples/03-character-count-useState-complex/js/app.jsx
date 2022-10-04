// Character limiting function component v2

const CharacterCountingInput = ({ limit }) => {
  // Setting state as an object
  const [state, setState] = React.useState({ count: 0, color: "darkgreen" });

  const changeHandler = (e) => {
    const left = limit - e.target.value.length;

    setState((prevState) => ({ ...prevState, count: left }));
    setState((prevState) => ({
      ...prevState,
      color: left >= 0 ? "fgreen" : "red",
    }));
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      <span style={{ color: state.color }}>{state.count}</span>
    </>
  );
};

const App = () => (
  <>
    <CharacterCountingInput limit={10} />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

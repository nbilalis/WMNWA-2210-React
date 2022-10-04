// Character limiting function component

const CharacterCountingInput = ({ limit }) => {
  // Setting two distinct state variables
  const [charCount, setCharCount] = React.useState(limit);
  const [color, setColor] = React.useState("darkgreen");

  const changeHandler = (e) => {
    const left = limit - e.target.value.length;
    setCharCount(left);

    if (left < 0) setColor("red");
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      <span style={{ color }}>{charCount}</span>
    </>
  );
};

const App = () => (
  <>
    <CharacterCountingInput limit={10} />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

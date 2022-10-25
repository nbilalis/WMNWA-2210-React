// Character limiting function component

const CharacterLimitInput = ({ limit = 120 }) => {
  // Setting two distinct state variables
  const [charCount, setCharCount] = React.useState(limit);
  const [color, setColor] = React.useState("darkgreen");

  const changeHandler = (e) => {
    const length = event.target.value.length;
    const remaining = limit - length;

    setCharCount(remaining);

    if (remaining < 0) {
      setColor("red");
    }
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <span style={{ color }}>{charCount}</span>
    </div>
  );
};

const App = () => (
  <>
    <CharacterLimitInput />
    <CharacterLimitInput limit={10} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

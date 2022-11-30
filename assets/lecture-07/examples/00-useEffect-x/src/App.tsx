import { useState, useEffect } from 'react';

import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);

  console.log('rendering...');

  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1); // Closure
    }, 1000);
  }, []);

  return (
    <>
      <h1>Counter: {counter}</h1>
    </>
  );
}

export default App;

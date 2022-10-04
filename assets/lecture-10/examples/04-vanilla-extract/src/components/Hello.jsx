import { useState } from 'react';

import { themeClass, container, button } from './Hello.css';

function Hello({ name }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className={themeClass}>
      <h1>Hello, {name}!</h1>

      <p>From your React app!</p>
      <p>Clicked {counter} times</p>
      <p className={container}>
        <button
          type="button"
          className={button}
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          className={button}
          onClick={() => {
            setCounter((c) => c - 1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className={button}
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </p>
    </div>
  );
}

export default Hello;

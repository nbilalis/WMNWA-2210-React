import { useState } from 'react';

import { button, buttonContainer, container, themeClass } from './Hello.css';

interface HelloProps {
  name: string;
  initialValue?: number;
}

function Hello({ name, initialValue = 0 }: HelloProps) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div className={themeClass}>
      <div className={container}>
        <h1>Hello, {name}!</h1>
        <p>Clicked {counter} times</p>
        <p className={buttonContainer}>
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
    </div>
  );
}

export default Hello;

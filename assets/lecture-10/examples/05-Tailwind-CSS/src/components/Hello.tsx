import { useState } from 'react';

interface HelloProps {
  name: string;
}

function Hello({ name }: HelloProps) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="m-4 text-3xl font-bold underline">Hello, {name}!</h1>

      <p>From your React app!</p>
      <p>Clicked {counter} times</p>
      <p className="flex justify-center gap-1">
        <button
          type="button"
          className="m-4 p-2 bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => {
            setCounter((counter) => counter + 1);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          className="m-4 p-2 bg-violet-700 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500"
          onClick={() => {
            setCounter((counter) => counter - 1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className="m-4 p-2"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </p>
    </>
  );
}

export default Hello;

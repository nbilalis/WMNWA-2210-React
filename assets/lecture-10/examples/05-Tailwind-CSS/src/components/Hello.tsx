import { useState } from 'react';

interface HelloProps {
  name: string;
  initialValue?: number;
}

function Hello({ name, initialValue = 0 }: HelloProps) {
  const [counter, setCounter] = useState(initialValue);
  return (
    <div className="m-0 p-0 text-slate-200 bg-[#242830] flex flex-col items-center h-[100vh]">
      <h1 className="m-4 text-3xl font-bold underline">Hello, {name}!</h1>
      <p>Clicked {counter} times</p>
      <p className="flex justify-center gap-1">
        <button
          type="button"
          className="m-4 p-2 bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          className="m-4 p-2 bg-violet-700 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500"
          onClick={() => {
            setCounter((c) => c - 1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className="m-4 p-2"
          onClick={() => {
            setCounter(initialValue);
          }}
        >
          Reset
        </button>
      </p>
    </div>
  );
}

export default Hello;

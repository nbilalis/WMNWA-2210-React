import { useOutletContext } from 'react-router-dom';

import type OutletContext from '@/types/OutletContext';

import './Home.scoped.scss';

function Hello() {
  const [counter, setCounter] = useOutletContext<OutletContext<number>>();

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to your React app!</p>
      <p>This counter persists among views: {counter}</p>
      <p>
        <button
          type="button"
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Click me!
        </button>
      </p>
    </>
  );
}

export default Hello;

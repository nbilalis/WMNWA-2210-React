import { useOutletContext } from 'react-router-dom';

import OutletDispatch from '@/types/OutletDispatch';

import './Home.scoped.scss';

function Hello() {
  const [counter, setCounter] = useOutletContext<[number, OutletDispatch]>();

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to your React app!</p>
      <p>This counter persists among views: {counter}</p>
      <p>
        <button
          type="button"
          onClick={() => {
            setCounter((c: number) => c + 1);
          }}
        >
          Click me!
        </button>
      </p>
    </>
  );
}

export default Hello;

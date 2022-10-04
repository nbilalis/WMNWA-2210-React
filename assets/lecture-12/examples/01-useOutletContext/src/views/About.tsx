import { useOutletContext } from 'react-router-dom';

import OutletDispatch from '@/types/OutletDispatch';

import './About.scoped.scss';

function About() {
  const [counter, setCounter] = useOutletContext<[number, OutletDispatch]>();

  return (
    <>
      <h1>About</h1>
      <p>This is an opinionated starting point, to get you going with React.</p>
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

export default About;

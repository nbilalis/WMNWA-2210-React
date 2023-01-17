import { useState } from 'react';

import useLogRender from '@/hooks/useLogRender';

function Counter() {
  useLogRender('Counter');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>
        Upper counter: {counter} -{' '}
        <button
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Click me
        </button>
      </p>
    </>
  );
}

export default Counter;

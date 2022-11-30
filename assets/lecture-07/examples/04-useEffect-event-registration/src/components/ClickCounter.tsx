import { useEffect, useState } from 'react';

import './ClickCounter.scoped.scss';

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handler = () => setCounter(counter + 1);
    document.addEventListener('click', handler);

    return () => {
      // Clean-up
      document.removeEventListener('click', handler);
    };
  }, []);

  return <>Counter: {counter}</>;
}

export default ClickCounter;

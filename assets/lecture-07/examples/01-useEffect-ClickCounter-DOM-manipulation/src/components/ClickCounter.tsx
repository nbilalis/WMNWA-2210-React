import { useEffect, useState } from 'react';

import './ClickCounter.scoped.scss';

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCounter;

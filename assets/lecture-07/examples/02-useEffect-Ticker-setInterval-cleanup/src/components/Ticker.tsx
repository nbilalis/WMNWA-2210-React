import { useState, useEffect } from 'react';

function Ticker() {
  const getTimestamp = () => new Date().toLocaleTimeString();
  const [timestamp, setTimestamp] = useState(getTimestamp());

  useEffect(() => {
    // Effect: On mount and update
    const handler = setInterval(() => {
      setTimestamp(getTimestamp());
    }, 1000);

    return () => {
      // Clean-up: On unmount
      clearInterval(handler);
    };
  }, []); // No deps, otherwise it will run on every render

  return <h2>Current time: {timestamp}</h2>;
}

export default Ticker;

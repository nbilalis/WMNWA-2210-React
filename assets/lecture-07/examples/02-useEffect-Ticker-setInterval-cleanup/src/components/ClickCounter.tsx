import { useEffect, useState } from 'react';

import './ClickCounter.scoped.scss';

function ClickCounter() {
  const [timestamp, setTimestamp] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Show the current timestamp
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Current time: {timestamp}</h2>
    </div>
  );
}

export default ClickCounter;

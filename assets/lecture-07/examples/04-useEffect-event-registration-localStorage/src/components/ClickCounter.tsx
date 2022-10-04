import { useEffect, useState } from 'react';

function ClickCounter() {
  const LOCAL_STORAGE_KEY = 'value';

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prev) => {
      const next = prev + 1;
      window.localStorage.setItem(LOCAL_STORAGE_KEY, next + '');
      return next;
    });
  };

  useEffect(() => {
    const value = +(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? 0);
    if (value) setCounter(value);
  }, []);

  useEffect(() => {
    document.addEventListener('click', increaseCounter);

    return () => {
      document.removeEventListener('click', increaseCounter);
    };
  }, []);

  return <h2>You clicked {counter} times!!!</h2>;
}

export default ClickCounter;

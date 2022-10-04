import useLocalStorageState from '@/hooks/useLocalStorageState';

function ClickCounter() {
  const [count, setCount] = useLocalStorageState('count', 0);

  return (
    <div>
      <p>
        You clicked <em>{count}</em> times
      </p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </button>
      <p>Try refreshing the page, the count is still there!</p>
    </div>
  );
}

export default ClickCounter;

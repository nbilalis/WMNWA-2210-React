import { useEffect, useState } from 'react';

// Detecting HTML5 Features - Dive Into HTML5 - https://bit.ly/3FGMbyH
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
}

/**
 * A React custom hook that persists a state in `localStorage`.
 * You can use this as you would use `useState`,
 * except that the first argument is the key to use
 * in order to store the value in `localStorage`.
 * @see https://usehooks.com/useLocalStorage/
 * @template T - The type of the value to store in `localStorage`
 * @param {string} key - The key to store the value in `localStorage`
 * @param {T} initialValue - The initial value to store in `localStorage`
 * @returns {[T, typeof setState]} The state and a function to update the state
 */
function useLocalStorageState<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [state, setState] = useState<T>(() => {
    if (supportsLocalStorage()) {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? (JSON.parse(item) as T) : initialValue;
    }

    return initialValue;
  });

  useEffect(() => {
    if (supportsLocalStorage()) {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState] as [T, typeof setState];
}

export default useLocalStorageState;

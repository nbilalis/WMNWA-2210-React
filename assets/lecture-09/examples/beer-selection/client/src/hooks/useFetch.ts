import { useEffect, useState } from 'react';

/**
 * A React custom hook that fetches data from a URI.
 * @see https://usehooks.com/useFetch/
 * @template T - The type of the data to fetch
 * @param {string} uri - The URI to fetch
 * @param {T} initialValue - The initial value to return
 * @param {(data: any) => T} resolver - A function to resolve the data from the response
 * @returns {{ data: T, loading: boolean, error: string | null }} The data, loading state, and error message, if any
 */
function useFetch<T>(
  uri: string,
  initialValue: T | null = null,
  resolver: (data: any) => T = (data) => data as T
) {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    fetch(uri, { signal: controller.signal })
      .then((response) => response.json())
      .then((json: T) => {
        const result = resolver(json);
        if (result === undefined) {
          throw new Error('Resolver returned undefined.');
        }
        setData(result);
      })
      .catch((err) => {
        console.warn({ err });
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [uri]);

  return { data, loading, error };
}

export default useFetch;

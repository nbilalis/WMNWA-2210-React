import { useEffect, useState } from 'react';

function useFetch<T>(uri: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(uri)
      .then((response) => response.json())
      .then((json: T) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [uri]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;

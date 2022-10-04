import { useState } from 'react';

import Spinner from './Spinner';

import Response from '@/types/Response';
import useFetch from '@/hooks/useFetch';

import './Movies.scoped.scss';

const API_KEY = 'ENTER_TMDB_API_KEY_HERE';
const ITEMS_PER_PAGE = 20;

function Movies() {
  const [page, setPage] = useState(0);

  const { data, loading, error } = useFetch<Response>(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page + 1}`
  );

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <Spinner active={loading} />
      <h1>Movies</h1>
      {data && (
        <>
          <div className="pages">
            {page + 1} / {data.total_pages}
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setPage((prev) => (prev - 1 + data.total_pages) % data.total_pages);
              }}
            >
              «
            </button>
            <button
              type="button"
              onClick={() => {
                setPage((prev) => (prev + 1) % data.total_pages);
              }}
            >
              »
            </button>
          </div>
          <ol start={page * ITEMS_PER_PAGE + 1}>
            {data.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ol>
        </>
      )}
    </>
  );
}

export default Movies;

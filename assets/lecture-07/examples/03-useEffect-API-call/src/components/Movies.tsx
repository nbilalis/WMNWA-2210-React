import { useEffect, useState } from 'react';

import Movie from '@/types/Movie';

import './Movies.scoped.scss';

function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.warn({ err });
        if (!signal.aborted) {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Oops something is wrong!</div>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            width="200"
            height="300"
            loading="lazy"
          />
          <div className="info">
            <h3>{movie.title}</h3>
            <span>
              Rating: <em>{movie.vote_average}</em>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;

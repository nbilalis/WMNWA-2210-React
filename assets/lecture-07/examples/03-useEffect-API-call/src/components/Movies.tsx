import { useState, useEffect } from 'react';

import Movie from '@/types/Movie';

const API_KEY = 'ENTER_YOUR_API_KEY_HERE';

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default Movies;

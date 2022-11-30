import Movie from '@/types/Movie';

import useFetch from '@/hooks/useFetch';

import './Movies.scoped.scss';

function Movies() {
  const uri = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  const { data: movies, loading, error } = useFetch<Movie[]>(uri, [], (data) => data.results);

  console.log({ movies, loading, error });

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movies) {
    return <div className="no-data">No movies found...</div>;
  }

  if (error) {
    return <div className="error">Oops something is wrong!</div>;
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

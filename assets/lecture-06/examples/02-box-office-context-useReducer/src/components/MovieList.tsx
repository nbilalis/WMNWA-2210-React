import { useMovieData } from '../store/MovieDataProvider';
import { useWatchlistDispatch } from '../store/WatchlistProvider';

import MovieCard from './MovieCard';

import './MovieList.scoped.scss';

interface MovieListProps {
  title: string;
}

function MovieList({ title }: MovieListProps) {
  const movieData = useMovieData();
  const dispatch = useWatchlistDispatch();

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {movieData.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              movie={movie}
              buttonText="👁"
              onClick={() => {
                dispatch({ type: 'ADD', payload: movie.id });
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;

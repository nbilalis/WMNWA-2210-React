import { BsFillBookmarkCheckFill } from 'react-icons/bs';

import { useMovieData } from '../store/MovieDataProvider';
import { useWatchlist } from '../store/WatchlistProvider';

import MovieCard from './MovieCard';

import './MovieList.scoped.scss';

interface MovieListProps {
  title: string;
}

function MovieList({ title }: MovieListProps) {
  const movieData = useMovieData();
  const { addToWatchlist } = useWatchlist();

  return (
    <>
      <h2>{title}</h2>
      {movieData && (
        <ul>
          {movieData.map((movie) => (
            <li key={movie.id}>
              <MovieCard
                movie={movie}
                buttonText={<BsFillBookmarkCheckFill color="red" />}
                onClick={() => {
                  addToWatchlist(movie.id);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieList;

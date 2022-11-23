import { BsFillBookmarkXFill } from 'react-icons/bs';

import { useMovieData } from '../store/MovieDataProvider';
import { useWatchlist } from '../store/WatchlistProvider';

import Movie from '../types/Movie';
import MovieCard from './MovieCard';

import './Watchlist.scoped.scss';

interface WatchlistProps {
  title: string;
}

function Watchlist({ title }: WatchlistProps) {
  const moviedata = useMovieData();
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (!watchlist.length || !moviedata) return null;

  // const list = moviedata.filter((movie) => watchlist.includes(movie.id));
  const list = watchlist
    .map((id) => moviedata.find((movie) => movie.id === id))
    .filter((movie) => movie !== undefined) as Movie[];

  return (
    <div className="container">
      <h2>
        {title} ({watchlist.length})
      </h2>
      <ul>
        {list.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              movie={movie}
              image="backdrop"
              buttonText={<BsFillBookmarkXFill color="red" />}
              onClick={() => {
                removeFromWatchlist(movie.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;

import MovieDataProvider from '../store/MovieDataProvider';
import WatchlistProvider from '../store/WatchlistProvider';

import MovieList from './MovieList';
import Watchlist from './Watchlist';

import './App.scss';

function App() {
  return (
    <>
      <h1>Box Office</h1>
      <MovieDataProvider>
        <WatchlistProvider>
          <MovieList title="Popular Movies" />
          <Watchlist title="My Watchlist" />
        </WatchlistProvider>
      </MovieDataProvider>
    </>
  );
}

export default App;

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import Movie from '../types/Movie';

// Key for the TMDB API
const API_KEY = 'REGISTER_FOR_AN_ACCOUNT_TO_TMDB_AND_ENTER_THE_API_KEY_HERE';

// Create the Context
const MovieDataContext = createContext<Movie[]>([]);
// Provide a custom hook for accessing the context
const useMovieData = () => useContext(MovieDataContext);

// Component Props
interface MovieDataProviderProps {
  children: ReactNode;
}

// MovieDataProvider Component
function MovieDataProvider({ children }: MovieDataProviderProps) {
  // Component/Context State
  const [movieData, setMovieData] = useState<Movie[]>([]);

  // Fetch the movie data from the API
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);

  return (
    <MovieDataContext.Provider value={movieData}>
      {children}
    </MovieDataContext.Provider>
  );
}

// Export the custom hook
export { useMovieData };
// Export (as default) the MovieDataProvider Component
export default MovieDataProvider;

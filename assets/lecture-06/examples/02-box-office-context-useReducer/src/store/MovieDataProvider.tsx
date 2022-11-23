import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type Movie from '../types/Movie';

import useFetch from '../hooks/useFetch';

// Key for the TMDB API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Create the Context
const MovieDataContext = createContext<Movie[] | null>([]);
// Provide a custom hook for accessing the Context
const useMovieData = () => useContext(MovieDataContext);

// Component Props
interface MovieDataProviderProps {
  children: ReactNode;
}

// MovieDataProvider Component
function MovieDataProvider({ children }: MovieDataProviderProps) {
  // Fetch the movie data from the API
  const { data: movieData } = useFetch<Movie[]>(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    [],
    (data) => data.results
  );

  return <MovieDataContext.Provider value={movieData}>{children}</MovieDataContext.Provider>;
}

// Export the custom hook
export { useMovieData };

// Export (as default) the MovieDataProvider Component
export default MovieDataProvider;

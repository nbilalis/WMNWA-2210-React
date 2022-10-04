import Movie from './Movie';

interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default Response;

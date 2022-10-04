import './MoviePoster.scss';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

interface MovieThumbProps {
  size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
  poster: string;
  alt: string;
}

function MovieThumb({ size, poster, alt }: MovieThumbProps) {
  return <img src={`${BASE_IMG_URL}${size}${poster}`} alt={alt} />;
}

export default MovieThumb;

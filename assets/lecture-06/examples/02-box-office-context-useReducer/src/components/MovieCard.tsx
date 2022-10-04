import MoviePoster from './MoviePoster';

import Movie from '../types/Movie';

import './MovieCard.scoped.scss';

interface MovieCardProps {
  movie: Movie;
  image?: 'poster' | 'backdrop';
  buttonText: string;
  onClick: () => void;
}

function MovieCard({ movie, image, onClick, buttonText }: MovieCardProps) {
  return (
    <div className="card">
      <div>
        <MoviePoster
          size="w185"
          poster={
            image === 'backdrop' ? movie.backdrop_path : movie.poster_path
          }
          alt={movie.title}
        />
      </div>
      <span className="title">{movie.title}</span>
      <span className="rating">
        <em>Rating:</em> {movie.vote_average} ({movie.vote_count})
      </span>
      <button type="button" className="action" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

MovieCard.defaultProps = {
  image: 'poster',
};

export default MovieCard;

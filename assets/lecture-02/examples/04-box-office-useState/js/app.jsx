const fetchedMovies = [
  { id: 'tt0076759', title: 'Star Wars', rating: 8.7, sum: 121 },
  { id: 'tt0080684', title: 'Raiders of the Lost Ark', rating: 8.5, sum: 39 },
  { id: 'tt0086190', title: 'E.T. the Extra-Terrestrial', rating: 7.9, sum: 43.5 },
  { id: 'tt0099785', title: 'Indiana Jones and the Last Crusade', rating: 8.3, sum: 48 },
  { id: 'tt0120338', title: 'Forrest Gump', rating: 8.8, sum: 55 },
  { id: 'tt0120915', title: 'The Lord of the Rings: The Fellowship of the Ring', rating: 8.8, sum: 315 },
];

const TopMovies = ({ movies, number }) => (
  <>
    <h2>Top grossing movies</h2>
    <ol>
      {[...movies]
        .sort((m1, m2) => m2.sum - m1.sum)
        .slice(0, number) /* .filter((m, i) => i < number) */
        .map((m) => (
          <li key={m.id}>{m.title} | ${m.sum}m</li>
        ))}
    </ol>
  </>
);

const MovieList = ({ movies, "card-width": cardWidth }) => (
  <div className="movie-list">
    <h2>Movie List</h2>
    <ul style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <li key={movie.id} style={{ listStyleType: "none", width: `${cardWidth}px` }}>
          <MovieCard movie={movie} width={cardWidth} />
        </li>
      ))}
    </ul>
  </div>
);

const MovieCard = ({ movie, width }) => {
  const [isFavorite, setIsfavorite] = React.useState(Math.random() < 0.5);

  const handleClick = () => {
    setIsfavorite((prev) => !prev);
  };

  return (
    <div>
      <img src={`https://api.lorem.space/image/movie?w=${width}&h=${width * 1.5}&hash=${movie.id}`}
           width={width} height={width * 1.5} />
      <h3 style={{ margin: "0 0 .5em 0" }}>
        {movie.title}
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {isFavorite ? "💖" : "🖤"}
        </span>
      </h3>
      <div className="movie-rating">{movie.rating}/10</div>
      <div className="movie-sum">${movie.sum}m</div>
    </div>
  );
};

const App = () => (
  <>
    <h1>Box Office</h1>
    <TopMovies movies={fetchedMovies} number={3} />
    <MovieList movies={fetchedMovies} card-width="200" />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const fetchedMovies = [
  { title: "Candyman", rating: 6.1, sum: 3.5 },
  { title: "Cry Macho", rating: 5.9, sum: 4.4 },
  { title: "Copshop", rating: 6.7, sum: 2.2 },
  { title: "Free Guy", rating: 7.9, sum: 5.1 },
  { title: "Malignant", rating: 6.3, sum: 2.7 },
  { title: "Shang-Chi and the Legend of the Ten Rings", rating: 7.9, sum: 22 },
];

const TopMovies = ({ movies, number }) => (
  <>
    <h2>Top grossing movies</h2>
    <ol>
      {[...movies]
        .sort((m1, m2) => m2.sum - m1.sum)
        .slice(0, number) /* .filter((m, i) => i < number) */
        .map((m, i) => (
          <li key={i}>{m.title} | ${m.sum}m</li>
        ))}
    </ol>
  </>
);

const MovieList = ({ movies, "card-width": cardWidth }) => (
  <div className="movie-list">
    <h2>Movie List</h2>
    <ul style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
      {movies.map((movie, index) => (
        <li
          key={index}
          style={{ listStyleType: "none", width: `${cardWidth}px` }}
        >
          <MovieCard movie={movie} width={cardWidth} seed={index + 1} />
        </li>
      ))}
    </ul>
  </div>
);

const MovieCard = ({ movie, width, seed }) => {
  const [isFavorite, setIsfavorite] = React.useState(false);

  const handleClick = () => {
    setIsfavorite((prev) => !prev);
  };

  return (
    <>
      <img
        src={`https://picsum.photos/${width}/${width * 1.5}?random=${seed}`}
        width={width}
        height={width * 1.5}
      />
      <h3 style={{ margin: "0 0 .5em 0" }}>
        {movie.title}
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {isFavorite ? "💖" : "🖤"}
        </span>
      </h3>
      <div className="movie-rating">{movie.rating}/10</div>
      <div className="movie-sum">${movie.sum}m</div>
    </>
  );
};

const App = () => (
  <>
    <h1>Box Office</h1>
    <TopMovies movies={fetchedMovies} number={3} />
    <MovieList movies={fetchedMovies} card-width="200" />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

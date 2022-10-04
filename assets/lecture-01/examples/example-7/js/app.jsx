const movies = [{ title: 'Dune', rating: 8.4, sum: 117 }, { title: 'Dune', rating: 8.4 }];

const Header = () => (
  <h1>Box Office</h1>
);

const MovieList = ({ movies }) => (
  <ul>
    {movies.map((m) => (
      <li>{`${m.title} ${m.sum ? `| $${m.sum}m` : ''} | ${m.rating}⭐`}</li>
    ))}
  </ul>
);

const App = () => (
  <React.Fragment>
    <Header />
    <MovieList movies={movies} />
  </React.Fragment>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

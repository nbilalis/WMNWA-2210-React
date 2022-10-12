// Switch from simple elements to function components

const movies = [
    { title: 'The Godfather', rating: 9.2, sum: 134, imdb_id: 'tt0068646' },
    { title: 'The Shawshank Redemption', rating: 9.3, sum: 28, imdb_id: 'tt0111161' },
    { title: 'The Godfather: Part II', rating: 9.0, sum: 57, imdb_id: 'tt0071562' },
    { title: 'The Dark Knight', rating: 9.0, sum: 534, imdb_id: 'tt0468569' },
    { title: 'Star Wars', rating: 8.7, sum: 121, imdb_id: 'tt0076759' },
    { title: 'Raiders of the Lost Ark', rating: 8.5, sum: 39, imdb_id: 'tt0082971' },
    { title: 'E.T. the Extra-Terrestrial', rating: 7.9, sum: 43.5, imdb_id: 'tt0083866' },
    { title: 'Indiana Jones and the Last Crusade', rating: 8.3, sum: 48, imdb_id: 'tt0097576' },
    { title: 'Forrest Gump', rating: 8.8, sum: 55, imdb_id: 'tt0109830' },
];

// Header component
function Header() {
    return <h1>Box Office</h1>;
}

// Item component
function MovieItem({ title, rating, sum, imdb_id }) {
    return (<li>
        <a href={`https://www.imdb.com/title/${imdb_id}/`} target="_blank">{title}</a> | ${sum}m | {rating}⭐
    </li>);
}

// List component
function MovieList({ title, movies }) {
    return (<>
        <h2>{title}</h2>
        <h3>Total earnings: {movies.reduce((acc, cur) => acc + cur.sum, 0)}m</h3>
        <ul>
            {movies.map(movie =>
                <MovieItem {...movie} />
            )}
        </ul>
    </>);
}

// App component
function App() {
    return (<>
        <Header />
        <MovieList title="Top Movies" movies={movies.filter(m => m.rating >= 9).sort((m1, m2) => m2.rating - m1.rating)} />
        <MovieList title="All Movies" movies={movies} />
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

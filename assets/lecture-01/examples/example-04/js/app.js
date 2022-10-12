// Switch from simple elements to function components

const movies = [
    { imdb_id: 'tt0076759', title: 'Star Wars', rating: 8.7, sum: 121 },
    { imdb_id: 'tt0080684', title: 'Raiders of the Lost Ark', rating: 8.5, sum: 39 },
    { imdb_id: 'tt0086190', title: 'E.T. the Extra-Terrestrial', rating: 7.9, sum: 43.5 },
    { imdb_id: 'tt0099785', title: 'Indiana Jones and the Last Crusade', rating: 8.3, sum: 48 },
    { imdb_id: 'tt0120338', title: 'Forrest Gump', rating: 8.8, sum: 55 },
];

// Header component
function Header() {
    return React.createElement('h1', null, 'Box Office');
}
// Alternatively
// const Header = () => React.createElement('h1', null, 'Box Office')

// List component with two props
function MovieList({ items, sep }) {
    return React.createElement('ul', null,
        items.map((movie) =>
            React.createElement('li', { key: movie.imdb_id },
                `${movie.title} ${sep} $${movie.sum}m ${sep} ${movie.rating}⭐`
            )
        )
    )
}

// Render components inside the 'root' div
// Need to call React.createElement here too
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
    React.createElement(Header),
    React.createElement(MovieList, { items: movies, sep: '|' } ),
]);

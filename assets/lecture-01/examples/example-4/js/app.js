// Switch from simple elements to function components

const movies = [
    { title: 'Shang-Chi and the Legend of the Ten Rings', rating: 7.9, sum: 22 },
    { title: 'Free Guy', rating: 7.9, sum: 5.1 },
    { title: 'Cry Macho', rating: 5.9, sum: 4.4 },
    { title: 'Candyman', rating: 6.1, sum: 3.5 },
    { title: 'Malignant', rating: 6.3, sum: 2.7 },
    { title: 'Copshop', rating: 6.7, sum: 2.2 },
];

// Header component
function Header() {
    return React.createElement('h1', null, 'Box Office');
}

// Alternatively
// const Header = () => React.createElement('h1', null, 'Box Office')

// List component with two props
function List({ items, separator }) {
    return React.createElement('ul',
        null,
        items.map((m, i) => React.createElement('li',
            { key: i },
            `${m.title} ${separator} $${m.sum}m ${separator} ${m.rating}⭐`
        ))
    )
}

// Render components inside the 'root' div
// Need to call React.createElement here too
ReactDOM.render([
    React.createElement(Header, { key: 'h1' }),
    React.createElement(List, { key: 'ul', items: movies, separator: '|' })
], document.getElementById('root'))

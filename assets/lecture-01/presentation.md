name: common
layout: true
class: common

.logo-sae[![SAE Logo](img/logo-sae.png)]
.logo-web[![WEB logo](img/logo-web.png)]

.ruler.one[· · · · · · · ·]
.ruler.two[· · · · · · · ·]
.ruler.three[· · · · · · · ·]
.ruler.four[· · · · · · · ·]
.ruler.five[· · · · · · · ·]
.ruler.six[· · · · · · · ·]
.ruler.seven[· · · · · · · ·]

.footer[Nikos Bilalis - n.bilalis@sae.edu]

---
name: cover
layout: true
template: common
class: cover

---
name: section
layout: true
template: common
class: section, center, middle

---
name: section-details
layout: true
template: common
class: section-details, topbar-space

---
name: chapter
layout: true
template: common
class: chapter, topbar-space

---
name: list
layout: true
template: common
class: list, topbar-space

---
template: cover

# WMNWA 2210

## Web App Development

### React #1 | Getting started

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Welcome to `React`
  - Basic Setup
- Elements
- Components
  - JSX

---
template: section

## Welcome to `React`

---
layout: true
template: chapter

### Welcome to `React`

---

#### What is `React`?

Η `React` (παλαιότερα γνωστή και ως `React.js` ή `ReactJS`) είναι μία `JavaScript` βιβλιοθήκη για τη δημιουργία διεπαφών (_UI_).

Δημιουργήθηκε και υποστηρίζεται από την _Facebook_ και μπορεί να χρησιμοποιηθεί για τη δημιουργία διαδραστικών σελίδων, _SPA_ αλλά και _Mobile_ εφαρμογών.

Οι βασικές τις λειτουργίες αφορούν στη διαχείριση της κατάστασης μιας εφαρμογής (_state management_) και την αποτύπωση αυτής στο _DOM_. Για περισσότερες λειτουργίες (π.χ. `Routing`) είναι αναγκαία η χρήση βιβλιοθηκών.

---
template: section

## Basic Setup

---
layout: true
template: chapter

### Basic Setup

---
class: long-code

#### Using CDN links

Για την ανάπτυξη μίας απλής εφαρμογής, μπορεί να χρησιμοποιηθεί η βιβλιοθήκη `React` απευθείας από κάποιο _CDN_.

Σε αυτή την περίπτωση αρκεί η προσθήκη των παρακάτω `script` στο `head`.

```html
<script src="https://unpkg.com/react/umd/react.development.js"
        crossorigin defer></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"
        crossorigin defer></script>

```

---

#### Γιατί δύο ξεχωριστά `script`;

H `React` δεν αφορά αποκλειστικά σε _web_ εφαρμογές, μπορεί να υποστηρίξει και _native_ υλοποιήσεις.

Η βασική λειτουργικότητα βρίσκεται στο `react.js`, ενώ η αποτύπωση στον _browser_ (`DOM`) γίνεται μέσω του `react-dom.js`.

Στην ουσία, το `react-dom.js` αναλαμβάνει του _rendering_ στη σελίδα και το `react.js` όλα (?) τα υπόλοιπα.

---
class: extra-long-code

#### ... in production

Τα προηγούμενα _URL_ είναι αυστηρά για τη φάση του _development_.

Αν και η προσέγγιση αυτή, με τη χρήση των `script` απευθείας από κάποιο _CDN_, ίσως δεν είναι η απόλυτα ενδεδειγμένη, όταν/αν η εφαρμογή ανέβει σε _production_ περιβάλλον, θα χρειαστούμε τα παρακάτω `script`.

```html
<script src="https://unpkg.com/react/umd/react.production.min.js" defer></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" defer></script>

```

Με τα κατάλληλα εργαλεία υπάρχουν και πιο σύνθετοι τρόποι να ξεκινήσει κανείς με μια εφαρμογή `React`.

---
template: section

## `React` Elements

---
layout: true
template: chapter

### `React` Elements

---
class: long-text

#### `DOM` manipulation

Η `HTML` είναι μια σειρά από οδηγίες τις οποίες ακολουθεί ο _browser_ για να χτίσει το `DOM`.

Ως γνωστόν, κάποιος μπορεί να διαχειριστεί το `DOM` και μέσω της `JavaScript` και του `DOM API`, χρησιμοποιώντας μεθόδους όπως οι `document.createElement()`, `document.appendChild()`, κ.λπ.

Με τη `React` δεν αναφερόμαστε στο `DOM` απευθείας, αλλά δημιουργούμε _React elements_, τα οποία αναλαμβάνουν να ενημερώνουν το `DOM` σε κάθε αλλαγή.

---
class: long-text

#### `React.createElement()`

Η δημιουργία των `React elements` γίνεται μέσω της μεθόδου `React.createElement()`.

```js
React.createElement(type, [props], [...children])

```

- `type`: `string` που αντιπροσωπεύει τον τύπο του _element_, π.χ. ένα _HTML tag_ ή κάποιο ήδη ορισμένο _React element_.
- `props` (optional): `JSON` με τα χαρακτηριστικά του _element_, ή `null` αν δεν υπάρχουν κάποια.
- `children` (optional): ένα ή περισσότερα _child elements_. Μπορεί να είναι είτε ένα `string`, από το οποίο θα δημιουργηθεί ένα _text node_, είτε άλλα _React elements_.

---

#### Props

Τα _properties_ ενός `element` μπορεί να είναι, είτε από τα ήδη υπάρχοντα `HTML attributes`, είτε _custom_ ιδιότητες.

Μιας και δεν μπορούμε να χρησιμοποιήσουμε το _keyword_ `class` (ως _reserved word_), στη θέση του γράφουμε `className`.

Ομοίως, στη θέση του _attribute_ `for` γράφουμε `htmlFor`.

---

#### Παράδειγμα #1

```js
const h1 = React.createElement('h1',
  { id: 'main-title'},
  'Hello, World!'
);
const h2 = React.createElement('h2',
  { className: 'secondary-title'},
  'Greetings from React!'
);

// Render the two elements inside the 'root' div
// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, h2]);

// React 17
// ReactDOM.render([h1, h2], document.getElementById('root'));

```

---

#### Παράδειγμα #2

```js
const h1 = React.createElement('h1', null, 'Recipe for muffins');
const ul = React.createElement('ul', { className: 'ingredients' },
    React.createElement('li', null, '2 cups of flour'),
    React.createElement('li', null, '1 cup of sugar'),
    React.createElement('li', null, '1 cup of milk'),
    React.createElement('li', null, '1/2 cup of oil'),
    React.createElement('li', null, '1 egg'),
);

// Render the elements inside the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([h1, ul]);

```

---
class: long-code

#### Παράδειγμα #3

```js
const ingredients = [
    { title: 'flour', quantity: '2 cups', vegan: true },
    { title: 'sugar', quantity: '1 cup', vegan: true },
    { title: 'milk', quantity: '1 cup' },
    { title: 'oil', quantity: '1/2 cup', vegan: true },
    { title: 'eggs', quantity: '1' },
];

const ul = React.createElement('ul',
    { className: 'ingredient-list' },
    ingredients.map(
      (item, index) => React.createElement('li',
        { className: 'ingredient', key: index },
        `${item.quantity} ${item.title} ${item.vegan ? '(v)' : ''}`
      )
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el);

```

---
template: section

## Components

---
layout: true
template: chapter

### Components

---

#### Composition & Re-usability

Στη `React`, αν και το βασικό δομικό στοιχείο είναι το _React Element_, το _UI_ μιας εφαρμογής χτίζεται με/συντίθεται από ένα σύνολο στοιχείων _React Component_.

Ένα _component_, όχι μόνο στη `React` αλλά γενικά στον κόσμο των _web framework_, είναι ένα κομμάτι επαναχρησιμοποιούμενου κώδικα, το οποίο εμπεριέχει ότι αυτό χρειάζεται για τη λειτουργικότητά του.

Σε αντίθεση με την κληρονομικότητα, από τον κόσμο του _Αντικειμενοστραφούς Προγραμματισμού_, εδώ συναντάμε την αρχή της _Σύνθεσης_ (_Composition_).

---

#### Functional Programming

Όπως θα γίνει ξεκάθαρο στη συνέχεια, η `React` βασίζεται στη φιλοσοφία του `Functional Programming`.

Εδώ, το βασικό στοιχείο της εφαρμογής είναι οι συναρτήσεις, και μάλιστα οι "_pure_" συναρτήσεις, στις οποίες το επιστρεφόμενο αποτέλεσμα βασίζεται αποκλειστικά στα δεδομένα εισόδου και δεν προκαλούν _side effects_.

Ένα _React Component_ είναι μια συνάρτηση (_function_) που επιστρέφει ένα _React Element_.

Μέσα στη συνάρτηση αυτή, προσθέτουμε όλη τη λειτουργικότητα που χρειάζεται ένα _component_.

---
class: extra-long-code

#### Παράδειγμα

```js
const movies = [{ title: 'Dune', rating: 8.4, sum: 117 }, ...];

const Header = () => React.createElement('h1', null, 'Box Office')

function MovieList({ items, separator }) { // props destructuring
    return React.createElement('ul',
        null,
        items.map((m, i) => React.createElement('li',
            null,
            `${m.title} | $${m.sum}m | ${m.rating}⭐`
        ))
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
    React.createElement(Header, null),
    React.createElement(MovieList, { items: movies })
])

```

---
class: long-text

#### `JSX`

Η `JSX` σύνταξη επιτρέπει να γράφουμε κώδικα όπως ο παρακάτω:

```js
const element = <h1>Hello, world!</h1>;

```

Δεν πρόκειται ούτε για `HTML`, ούτε για `JavaScript`, αλλά είναι η προσπάθεια της `React` για πιο ευανάγνωστο κώδικα.

Με τη βοήθεια της `JSX`, δεν χρειαζόμαστε πλέον τη μέθοδο `React.createElement()`.

Σε σύνθετες εφαρμογές, είναι δύσκολο να δομήσουμε έναν όμορφο και ευανάγνωστο κώδικα με εμφωλευμένες κλήσεις της `React.createElement()`.

---
class: long-text, long-code

#### Not a template engine

Η `JSX` θυμίζει αλλά δεν είναι _template engine_.

Είναι μια  επέκταση της `JavaScript` που επιτρέπει να συνδυάζουμε `markup` με κώδικα `JavaScript` με έναν ευπαρουσίαστο τρόπο.

Ως επέκταση της `JavaScript` μπορεί να εκτελέσει οποιονδήποτε κώδικα `JavaScript`.

Χρειάζεται τη βιβλιοθήκη _Babel_ για να μπορέσει να εκτελεστεί σε browser.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js" defer></script>

```

```js
const tick = <span>{new Date().toLocaleTimeString()}</span>;

```

---

#### JSX Elements / Components

Με τη βοήθεια της `JSX`, η συγγραφή των `elements` & `components` γίνεται ευκολότερη.

Μπορούμε να παρεμβάλουμε σε οποιοδήποτε σημείο (?) _expressions_ σε `JavaScript`, αρκεί να βρίσκεται μέσα σε _curly brackets_.

Οτιδήποτε βρίσκεται μέσα σε `{ }` γίνεται _evaluated_ (αποτιμάται).

---

#### Παράδειγμα #1

```js
const styles = { color: '#61DAFB', backgroundColor: 'black' };

// We need Babel in order for this to be parsed
const header = <h1 id="main-header" style={styles}>
    Hello, from JSX! Time is {new Date().toLocaleTimeString()}
</h1>;

// It's still a React element
console.log(header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

```

---

#### Παράδειγμα #2

```js
const movie = { title: 'Dune', rating: 8.4, sum: 117 };

const Header = () => (<h1>Box Office</h1>);

const Movie = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <span>${movie.sum}m</span> -
    <span>{movie.rating}⭐</span>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
  <Header />,
  <Movie movie={movie} />
]);

```

---
class: long-text

#### Loops & Conditionals

Όπως αναφέρθηκε και νωρίτερα, η `React` ακολουθεί τη φιλοσοφία του _Functional Programming_.

Σε αυτή επικρατεί η _declarative_ προσέγγιση, έναντι της _imperative_. Μέσα στα _curly brackets_ της `JSX` ενσωματώνουμε _expression_ και όχι _statement_.

Για το λόγο αυτό, σε κώδικα `React` θα δούμε να χρησιμοποιείται συχνά η _higher-order function_ `map`, στη θέση εντολών και μεθόδων όπως οι `for`, `forEach`, κ.λπ.

Επίσης, η _conditional_ λογική αναπαριστάται, όχι με τις εντολές `if` ή `switch`, αλλά με τους _ternary_, _logical_ και _nullish coalescing_ τελεστές, ειδικά μέσα στη `JSX`.

---
class: long-code

#### Παράδειγμα

```js
const movies = [{ title: 'Dune', rating: 8.4, sum: 117 }, ...];

const Header = () => (<h1>Box Office</h1>);

const MovieList = ({ movies }) => (<ul>
    {movies.map((m) => (<li>
      {m.title} {m.sum ? `| ${m.sum}m` : ''} | {m.rating}⭐
    </li>))}
  </ul>);

const App = () => (
  <React.Fragment>
    <Header />
    <MovieList movies={movies} />
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---
class: extra-long-text

#### Λίστα Προϊόντων

Φτιάξτε μια μικρή εφαρμογή σε `React`, που να εμφανίζει μία λίστα προϊόντων.

Στην εφαρμογή θα πρέπει:

- Να υπάρχει μία επικεφαλίδα `h1` (`Component` _Header_).
- Να υπάρχει μία λίστα `ul` (`Component` _ProductList_), όπου κάθε στοιχείο `li` (`Component` _Product_) να είναι και ένα προϊόν.
- Τα στοιχεία των προϊόντων να βρίσκονται σε πίνακα.
- Τα προϊόντα να έχουν τα εξής χαρακτηριστικά: _τίτλος_, _τιμή_, _έκπτωση_ (σε ποσοστό), _απόθεμα_ και ένα πεδίο `isOnSale` που να δείχνει αν το προϊόν είναι σε προσφορά ή όχι (τα χαρακτηριστικά αυτά διαχειριστείτε τα όπως νομίζετε για την εμφάνιση των προϊόντων).
- Να γίνει χρήση της σύνταξης `JSX`.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Getting Started – React https://reactjs.org/docs/getting-started.html
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) CDN Links – React https://reactjs.org/docs/cdn-links.html
- ![favicon](https://www.google.com/s2/favicons?domain=learn.co) React Create Element - Learn.co https://learn.co/lessons/react-create-element
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) DOM Elements – React https://reactjs.org/docs/dom-elements.html
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Components and Props – React https://reactjs.org/docs/components-and-props.html
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Introducing JSX – React https://reactjs.org/docs/introducing-jsx.html
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Rendering Elements – React https://reactjs.org/docs/rendering-elements.html
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Lists and Keys – React https://reactjs.org/docs/lists-and-keys.html
- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Rendering Lists https://beta.reactjs.org/learn/rendering-lists

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Composition vs Inheritance – React https://reactjs.org/docs/composition-vs-inheritance.html
- ![favicon](https://www.google.com/s2/favicons?domain=blog.isquaredsoftware.com) Blogged Answers: A (Mostly) Complete Guide to React Rendering Behavior · Mark's Dev Blog https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#component-types-and-reconciliation
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Array.prototype.map() - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---
template: section

## Thank You!

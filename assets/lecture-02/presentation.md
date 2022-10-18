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

### React 2 | Components

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Components
- JSX
  - Fragment
- Props
- Rendering
- State

---
template: section

## Components

---
layout: true
template: chapter

### Components

---

#### Composition & Re-usability

Η `React` βασίζεται στη φιλοσοφία της σύνθεσης (_composition_) και όχι σε αυτή της κληρονομικότητας (_inheritance_).

Τα `Components` επιτρέπουν το διαχωρισμό του _UI_ σε μικρά, ανεξάρτητα, επαναχρησιμοποιούμενα κομμάτια κώδικα.

Παρέχουν ένα βαθμό ενθυλάκωσης (_encapsulation_), όπως και τα _Web Components_, αν και δεν είναι αυτός ο βασικός σκοπός της `React`.

Βασικός σκοπός της `React` είναι να αποτυπώνει τα δεδομένα μιας εφαρμογής στο `DOM`.

---

#### `Virtual DOM`

Το `Virtual DOM` είναι ένα μια ιδεατή αναπαράσταση του `UI`, στη μνήμη, η οποία συγχρονίζει με το πραγματικό `DOM` μέσω μιας βιβλιοθήκης όπως η `ReactDOM`.

Η παραπάνω διαδικασία ονομάζεται _reconciliation_.

Η προσέγγιση αυτή επιτρέπει την _declarative_ φύση της `React`. Δηλώνεις την κατάσταση στην οποία θες να βρίσκεται το `UI` και η βιβλιοθήκη αναλαμβάνει να το κάνει.

Αντί να αναφέρεται απευθείας στο `DOM`, δημιουργεί μια αφηρημένη εκδοχή του.

---

#### Function vs Class Components

Ο ενδεδειγμένος τρόπος για να δηλωθεί ένα `Component` στη `React`, από την έκδοση _16.8_ και έπειτα, είναι μέσω μιας `JS` συνάρτησης (_function component_).

Πριν την έκδοση αυτή, για τον ίδιο σκοπό, χρησιμοποιούνταν κλάσεις (_class component_).

Τα _function component_ υπήρχαν και νωρίτερα από την έκδοση _16.8_, αλλά περιορίζονταν σε απλές χρήσεις, καθώς δεν μπορούσαν να διαχειριστούν _internal state_ κ.λπ.

Αυτό άλλαξε με την εισαγωγή των _React hooks_.

---

#### Κανόνες

Ένα _function component_ πρέπει:

- Να επιστρέφει ένα _React element_, είτε μέσω της _createElement_, είτε με χρήση της `JSX`.
  - Αν δεν υπάρχει ένα μοναδικό _root element_ αλλά περισσότερα, μπορεί να γίνει χρήση του `<React.Fragment>`.
- Να έχει όνομα που ξεκινά με κεφαλαίο γράμμα.

---
class: long-code

#### Παράδειγμα

```js
const styles = { color: '#61DAFB', backgroundColor: 'black' };

function Header() {
  return React.createElement(
    'h1',
    {
      id: 'main-header',
      style: styles
    },
    'Hello, from JSX! Time is ',
    new Date().toLocaleTimeString()
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Header));

```

---
class: long-text

#### `JSX`

Είναι μια `XML` επέκταση της `ECMAScript` που επιτρέπει να συνδυάζουμε `markup` με κώδικα `JavaScript` με έναν ευπαρουσίαστο τρόπο.

```jsx
const element = <h1>Hello, world!</h1>;

```

Η `JSX` θυμίζει αλλά δεν είναι _template engine_.

Ως επέκταση:

- δεν μπορεί να εκτελεστεί απευθείας από το _browser_, χρειάζεται είτε τη βοήθεια μιας βιβλιοθήκης (`Babel`), είτε _transpilation_.
- μπορεί να εμπεριέχει οποιονδήποτε κώδικα `JavaScript`.

---

#### Παράδειγμα

```jsx
const styles = { color: '#61DAFB', backgroundColor: 'black' };

const Header = () => (
  <h1 id="main-header" style={styles}>
    Hello, from JSX! Time is {new Date().toLocaleTimeString()}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

```

---

#### `Props`

Εννοιολογικά, τα `Components` είναι σαν οποιαδήποτε άλλη συνάρτηση σε `JavaScript`.

Δέχονται είσοδο (`props`) και επιστρέφουν `React element`, τα οποία περιγράφουν τι πρέπει να αποτυπωθεί στο `UI`.

Όλα τα _attributes_ που υπάρχουν στη `JSX` περνούν, μέσω του αντικειμένου `props`, στο αντίστοιχο `Component`.

Επιπλέον, αν ένα `Component` περικλείει άλλα `Component` ή `HTML tag`, αυτά είναι διαθέσιμα μέσω του `props.children`.

---

#### `Props` & _Curly Brackets_

Αν ένα `attribute` παίρνει τιμή "δυναμικά", τότε πρέπει να χρησιμοποιηθούν τα `{ }` αντί των `" "` ή `' '`.

Το ίδιο ισχύει και όταν θέλουμε να περάσουμε μια τιμή που δεν είναι αλφαριθμητική (`string`).

```jsx
const title = 'This is a title';

const component = <ProductList title={title} noOfItems={10} />

```

---

#### Παράδειγμα #1

```jsx
const cssAttrs = { color: '#61DAFB', backgroundColor: 'black' };

const Header = (props) => (
  <h1 id="main-header" style={props.style}>
    Hello, from {props.greeter}!
    Time is {new Date().toLocaleTimeString()}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header greeter="JSX" style={cssAttrs} />);

```

---
class: long-code

#### Παράδειγμα #2

```jsx
const movies = { title: 'Dune', rating: 8.4, sum: 117 };

const Header = () => (
  <h1>Box Office</h1>
);

const Movie= ({ movie }) => (
  <div>{`${movie.title} | $${movie.sum}m | ${movie.rating}⭐`}</div>
);

const App = () => (
  <>
    <Header />
    <Movie movie={movie} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

---

#### Παράδειγμα #3

```jsx
const CodeFormatter = ({ children }) => {
  const style = {
    backgroundColor: "lightgrey",
    padding: "1em",
  };
  return (<pre style={style}>{children}</pre>);
};

const App = () => (
  <CodeFormatter>
    let a = 1;
  </CodeFormatter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

---
class: long-text

#### Loops & Conditionals

Η `React` ακολουθεί τη φιλοσοφία του _Functional Programming_.

Σε αυτή επικρατεί η _declarative_ προσέγγιση, έναντι της _imperative_. Μέσα στα _curly brackets_ της `JSX` ενσωματώνουμε _expression_ και όχι _statement_.

Για το λόγο αυτό, σε κώδικα `React` θα δούμε να χρησιμοποιείται συχνά η μέθοδος `map`, στη θέση εντολών όπως οι `for`, `while`, κ.λπ.

Επίσης, η _conditional_ λογική αναπαριστάται, όχι με τις εντολές `if` ή `switch`, αλλά με τους _ternary_, _logical_ και _nullish coalescing_ τελεστές.

Αυτά αφορούν κυρίως στη `JSX`.

---
class: extra-long-code

#### Παράδειγμα

```jsx
const movies = [{ title: 'Dune', rating: 8.4, sum: 117 }, ...];

const Header = () => (<h1>Box Office</h1>);

// Loop items with `.map()` method
// Conditional logic with ternary operator (? :)
const MovieList = ({ movies }) => (
  <ul>
    {movies.map((m) => (
      <li>{`${m.title} ${m.sum ? `| $${m.sum}m` : ''} | ${m.rating}⭐`}</li>
    ))}
  </ul>
);

const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

---

#### `Prop` destructuring

Τα `function components`, όπως προαναφέρθηκε, δέχονται το πολύ μία παράμετρο.

Η παράμετρος αυτή, συνήθως, έχει το όνομα `props`, χωρίς αυτό να είναι δεσμευτικό.

Για να αποφευχθεί η συνεχής αναφορά στην παράμετρο αυτή, πολύ συχνά χρησιμοποιείται η τεχνική του _destructuring_.

```jsx
const Header = (props) => (<h1>{props.title}</h1>);

const Header = ({ title }) => (<h1>{title}</h1>);

```

---

#### Stateful Components

Στο παρελθόν, τα `Function Components` χρησιμοποιούνταν για απλά στοιχεία, που δεν είχαν αποθήκευαν εσωτερικά την κατάστασή στην οποία βρίσκονταν (_stateless_).

Με την εμφάνιση των `React Hooks`, αυτό άλλαξε και έκανε τη χρήση των `class component` μη αναγκαία.

Για να αναπαρασταθεί η εσωτερική κατάσταση ενός `Component`, γίνεται χρήση της μεθόδου `useState`.

---

#### `useState` `hook`

Η μέθοδος `useState` δέχεται ως όρισμα μια αρχική τιμή και επιστρέφει έναν πίνακα (θυμίζει `tuple`).

Ο πίνακας περιέχει την τρέχουσα τιμή ως πρώτο στοιχείο και μια συνάρτηση που αλλάζει την τιμή αυτή, ως δεύτερο.

```js
const [state, setState] = useState(initialState);

```

Και εδώ, η τεχνική του _destructuring_ είναι πολύ συνηθισμένη.

---

#### `useState` `hook`

- Το πρώτο στοιχείο (ίδιου τύπου με την αρχική τιμή), θα χρησιμοποιηθεί μέσα στην `JSX` για να αναπαραστήσει τη συγκεκριμένη τιμή.
- Το δεύτερο στοιχείο (συνάρτηση), θα χρησιμοποιηθεί για την αλλαγή της τιμής, καθώς "απαγορεύεται" (_immutability_) να επέμβουμε απευθείας σε αυτή.
  - Αν δοθεί, ως όρισμα, μια τιμή, αυτή η τιμή θα αντικαταστήσει την παλιά.
  - Αν η νέα τιμή εξαρτάται από την προηγούμενη, τότε πρέπει να δοθεί, ως όρισμα, μια συνάρτηση που να περιγράφει την αλλαγή, βάσει της προηγούμενης τιμής.

---

#### Παράδειγμα #1

```jsx
const Counter = ({initial}) => {
  const [count, setCount] = useState(initial);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </>
  );
}

```

---
class: extra-long-code

#### Παράδειγμα #2

```jsx
const ClickCounter = () => {
  const [count, setCount] = React.useState(0);

  const incrementCounter = () => { setCount((prev) => prev + 1); };
  const resetCounter = () => { setCount(0); };

  return (
    <div>
      <button onClick={incrementCounter}>Click me!</button>
      <button onClick={resetCounter}>Reset</button>
      <span>Clicks: {count}</span>
    </div>
  );
};

const App = () => (
  <ClickCounter />
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
class: long-text

#### Αccordion menu

Να φτιαχτεί ένα `React Component` που να υλοποιεί ένα <nobr>_accordion menu_</nobr>.

Το μενού θα αποτελείται από δυάδες `h2` & `div`, οι οποίες μπορεί να είναι αποθηκευμένες σε έναν πίνακα.

Όταν ο χρήστης κάνει κλικ σε ένα `h2` εμφανίζεται το αντίστοιχο `div`, ενώ κρύβονται όλα τα υπόλοιπα. Αρχικά, στο μενού, όλα τα `div` είναι κρυμμένα.

Στο `state` θα πρέπει να αποθηκεύεται το `index` του στοιχείου που είναι ορατό ή _-1_ αν είναι όλα κρυμμένα.

[Starting point](https://codesandbox.io/s/wyjek)

---
template: list

### Χρήσιμα links

- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Components and Props – React https://reactjs.org/docs/components-and-props.html
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) State and Lifecycle – React https://reactjs.org/docs/state-and-lifecycle.html
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Handling Events – React https://reactjs.org/docs/handling-events.html
- ![](https://www.google.com/s2/favicons?domain=www.robinwieruch.de) React Function Components https://www.robinwieruch.de/react-function-component

---
template: list

### Extra info

- ![](https://www.google.com/s2/favicons?domain=www.telerik.com) A Beginner’s Guide to Loops in React JSX https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Conditional Rendering – React https://reactjs.org/docs/conditional-rendering.html
- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Conditional Rendering https://beta.reactjs.org/learn/conditional-rendering
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Conditional (ternary) operator - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Nullish coalescing operator (??) - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Destructuring assignment - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Passing Functions to Components – React https://reactjs.org/docs/faq-functions.html

- ![favicon](https://www.google.com/s2/favicons?domain=www.telerik.com) A Beginner’s Guide to Loops in React JSX https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx

---
template: section

## Thank You!

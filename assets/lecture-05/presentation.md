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

### React 5 | Passing Data

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Lifting State Up
- Prop Drilling
- Context

---
template: section

## Passing Data

---
name: passing-data
layout: true
template: chapter

### Passing Data

---
layout: true
template: passing-data

#### Lifting State Up

---

Πολύ συχνά τα `Component` μιας εφαρμογής έχουν την ανάγκη να μοιράζονται _data_/_state_.

Στην περίπτωση αυτή, δεν έχει το κάθε `Component` τα δικό του `state`, αλλά κρατάμε τα δεδομένα στον πρώτο (ιδανικά) κοινό τους πρόγονο.

Ο στόχος είναι να έχουμε _"a single source of truth"_.

Η διαδικασία αυτή είναι αρκετά συχνή και είναι γνωστή ως <br>
_lifting state up_.

---

> Steps:
>
> 1. Remove state from the child components.
> 1. Pass hardcoded data from the common parent.
> 1. Add state to the common parent and pass it down together with the event handlers.

---

Αν κάποιο `Component` έχει την ανάγκη να αλλάξει κάτι σε κοινά _data_/_state_, τότε θα πρέπει το `Component` που τα "κρατά" να παρέχει μεθόδους για οποιαδήποτε αλλαγή, μιας και δεν υπάρχει απευθείας πρόσβαση.

Στην ουσία, το `Component` γονέας παρέχει `event handlers` στα παιδιά του, που τους επιτρέπει να "επέμβουν" στα κοινά δεδομένα.

---

> 1. When you want to coordinate two components, move their state to their common parent.
> 1. Then pass the information down through props from their common parent.
> 1. Finally, pass the event handlers down so that the children can change the parent’s state.
> 1. It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

---

![](assets/lecture-05/lifting-state-up.png)

---
layout: true
template: passing-data

#### Prop Drilling

---

Τα δεδομένα "ταξιδεύουν" πάντα _προς τα κάτω_, συχνά ως `props`, από το ένα `Component` στο άλλο.

Είναι συνηθισμένη πρακτική, να χρησιμοποιείται μία συνάρτηση `dispatch` για τη δουλειά αυτή.

Ως `dispatch` αναφέρεται η συνάρτηση που προκύπτει από την κλήση του `useReducer` `hook`.

---

![](assets/lecture-05/prop-drilling.png)

---
template: chapter

### Classwork

#### Classwork #1

Δημιουργήστε μία εφαρμογή _Todos_, με τη εξής δομή:

- `<Todos />`
    - `<TodoInput />` (για την εισαγωγή νέων _items_)
    - `<TodosList />`
        - `<TodoItem />`

To `<Todos />` `Component` κρατά τα απαραίτητα δεδομένα, είτε με τη χρήση του `useState` ή του `useReducer` `hook`.

Περνά τα δεδομένα αυτά, μέσω `props` στα υπόλοιπα `Component`.

---
layout: true
template: passing-data

#### Context

---

Αν η δομή της εφαρμογής έχει αρκετά επίπεδα, τότε η διαδικασία "διαβίβασης" των δεδομένων από `Component` σε `Component`, μπορεί να γίνει δύσκολη στη διαχείρισή της.

H `React` παρέχει το μηχανισμό `Context` ώστε τα δεδομένα να είναι προσβάσιμα σε όλα τα στοιχεία, κάτω από ένα στοιχείο "γονέα".

Με το `Context` δεν μας απασχολεί πόσο χαμηλά, στην ιεραρχία, βρίσκεται ένα στοιχείο που χρειάζεται πρόσβαση στα δεδομένα.

---

![](assets/lecture-05/context.png)

---

> Steps:
>
> 1. Create a context.
> 2. Use that context from the component that needs the data.
> 3. Provide that context from the component that specifies the data.

---
template: section

## Context

---
layout: true
template: chapter

### Context

---

#### Create a `Context`

Για τη δημιουργία ενός `Context`, αρκεί να καλέσουμε τη συνάρτηση `createContext`, με όρισμα ένα _initial state_.

```jsx
const MyContext = createContext({ data: [], setData: () => {} });

```

Μέσα στο `Context` που δημιουργείται, υπάρχουν δύο `Component`.

Ένας `Provider` και ένας `Consumer`.

---

#### Provide the `Context`

Ο `Provider` πρέπει να τοποθετηθεί πάνω στη ρίζα του υποδέντρου που μοιράζεται τα δεδομένα.

Έχει ένα `prop` με το όνομα `value`, μέσω του οποίου θα "περασούν" τα δεδομένα και, ίσως, κάποιες μέθοδοι για την διαχείριση τους.

```jsx
<MyContext.Provider value={{ data, setData }}>
  ...
</MyContext.Provider>

```

---

#### Παράδειγμα

```jsx
export const MovieDataContext = createContext();

function App() {
  const [movies, setMovies] = useState(movieData);

  return (
    <>
      <h1>Box Office</h1>
      <MovieDataContext.Provider value={{ movies, setMovies }}>
        <TopMovies />
        <MovieList />
      </MovieDataContext.Provider>
    </>
  );
}

```

---

#### Use the `Context`

O `Consumer` πρέπει να τοποθετηθεί σε κάθε στοιχείο "απόγονο" που θέλει πρόσβαση στα δεδομένα.

Η χρήση του `Consumer` δεν είναι απαραίτητη και συχνά, στη θέση του, χρησιμοποιείται μία κλήση στο `useContext` `hook`.

```jsx
const { data, setData } = useContext(MyContext);

```

---
class: extra-long-code

#### Παράδειγμα

```jsx
import { useContext } from 'react';

import { MovieDataContext } from './App';

function TopMovies() {
  const { movies } = useContext(MovieDataContext);

  return (<>
      <h2>Top Movies</h2>
      <ol>
        {movies
          .sort((a, b) => b.gross - a.gross)
          .slice(0, 3)
          .map((movie, index) => (
            <li key={index}>
              {`${movie.title} $${movie.gross}m ${movie.favorite ? '💖' : '🖤'}`}
            </li>
          )
        )}
      </ol>
    </>);
}

```

---
class: long-text, extra-long-code

#### Custom hook

Είναι καλή πρακτική να μεταφέρουμε όλη τη λογική ενός `Context` σε ξεχωριστό αρχείο.

```jsx
// in MyContextProvider.jsx

const useMyContextProvider = () => useContext(MyContextProvider);

function MyContextProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      { children }
    </MyContext.Provider>
  );
}

```

```jsx
// in SomeComponent.jsx

const { data, setData } = useMyContextProvider();

```

---
template: chapter

### Classwork

#### Classwork #2

Τροποποιήστε την εφαρμογή _Todos_, ώστε να κάνει χρήση ενός `Context`.

Κατά προτίμηση, φτιάξτε ένα `custom hook` για τη δουλειά αυτή.

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---
class: extra-long-text, long-code

#### Box Office

Δημιουργήστε έναν `MovieDataProvider` που θα διαχειρίζεται τα δεδομένα ταινιών.

Τα δεδομένα θα πρέπει να έχουν τη μορφή:

```jsx
{ "title": "Some Movie", "rating": 8.1, "sum": 5.1, "favorite": false }

```

Στη συνέχεια, μέσα σε ένα `React` app, χρησιμοποιήστε τον `MovieDataProvider`, ώστε:

- να εμφανίζεται μία λίστα με τα δεδομένα των ταινιών
- να δίνεται η δυνατότητα να οριστεί μια ταινία ως "favorite"

Και οι δύο αυτές λειτουργίες πρέπει να γίνονται μέσα σε κάποιο _sub-component_.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Thinking in React https://beta.reactjs.org/learn/thinking-in-react
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) useReducer - Hooks API Reference – React https://reactjs.org/docs/hooks-reference.html#usereducer
- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Sharing State Between Components https://beta.reactjs.org/learn/sharing-state-between-components
- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Passing Data Deeply with Context https://beta.reactjs.org/learn/passing-data-deeply-with-context
- ![favicon](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Scaling Up with Reducer and Context https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=kentcdodds.com) Prop Drilling https://kentcdodds.com/blog/prop-drilling
- ![favicon](https://www.google.com/s2/favicons?domain=dev.to) React doesn't need state management tool, I said - DEV Community https://dev.to/tolgee_i18n/react-doesnt-need-state-management-tool-i-said-31l4
- ![favicon](https://www.google.com/s2/favicons?domain=www.emgoto.com) Getting started with state management using useReducer and Context · Emma Goto https://www.emgoto.com/react-state-management/
- ![favicon](https://www.google.com/s2/favicons?domain=hswolff.com) How To useContext With useReducer | Harry Wolff https://hswolff.com/blog/how-to-usecontext-with-usereducer/
- ![favicon](https://www.google.com/s2/favicons?domain=moduscreate.com) React Context API Global State Management - Modus Create https://moduscreate.com/blog/react-context-api-state-management/
- ![favicon](https://www.google.com/s2/favicons?domain=thoughtspile.github.io) How to destroy your app performance using React contexts https://thoughtspile.github.io/2021/10/04/react-context-dangers/
- ![favicon](https://www.google.com/s2/favicons?domain=kentcdodds.com) How to use React Context effectively https://kentcdodds.com/blog/how-to-use-react-context-effectively
- ![favicon](https://www.google.com/s2/favicons?domain=kentcdodds.com) How to optimize your context value https://kentcdodds.com/blog/how-to-optimize-your-context-value
- ![favicon](https://www.google.com/s2/favicons?domain=dev.to) useReducer TypeScript: React Context with useReducer and Typescript. - DEV Community 👩‍💻 https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

---
template: section

## Thank You!

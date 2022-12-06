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

### React 8 | Routes

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Installation
- Basic Setup
  - NoMatch
- Navigation
  - `Link` & `NavLink`
  - `useNavigate` & `Navigate`
  - `useParams` & `useSearchParams`
  - `useLocation`
- Nested routes
  - `Outlet` component
- Lazy routes

---
template: section

## Routes

---
layout: true
template: chapter

### Routes

---
class: long-text

#### What's a route?

Στη γλώσσα των _Single-page apps_, η έννοια της σελίδας (_page_), αντικαθίσταται από αυτή του _route_.

Αν σε μια κλασική εφαρμογή _Web_, κάνουμε κλικ σε συνδέσμους (_links_) για να πλοηγηθούμε σε σελίδες, σε ένα _Single-page app_, παραμένουμε στην ίδια σελίδα, αλλά εναλλάσσονται τα `Component` που εμφανίζονται σε αυτή.

Τα `Component` αυτά μπορεί να εκτείνονται, είτε σε όλο το σώμα της σελίδας,  είτε σε ένα μέρος της, μιας και αρκετά τμήματα μιας σελίδας παραμένουν κοινά με των υπολοίπων.

Το όφελος αυτής της προσέγγισης είναι πως, μιας και δεν αλλάζει ποτέ η σελίδα, διατηρείται με ευκολία το _state_ της εφαρμογής.

---

#### `React Router`

Η `React` συχνά αναφέρεται ως μία βιβλιοθήκη για τη δημιουργία _Single-page apps_, αλλά αυτό προϋποθέτει την ύπαρξη ενός κατάλληλου _router_ για την διαχείριση των _routes_ στον _browser_.

Η `React` δεν περιλαμβάνει τέτοια λειτουργικότητα, αλλά υπάρχει η πλέον διαδεδομένη βιβλιοθήκη `React Router` για το σκοπό αυτό.

Η `React Router` είναι μια πλήρως εξοπλισμένη βιβλιοθήκη δρομολόγησης για τη `React`.

H `React Router` εκτελείται οπουδήποτε εκτελείται και η `React`. Στον ιστό (_client_), στον διακομιστή (_server_) με `node.js`, και στο `React Native`.

---
template: section

## `React Router`

---
layout: true
template: chapter

### `React Router`

---

#### Installation

Αρχικά, μιας και η `React Router` είναι μια "εξωτερική" βιβλιοθήκη θα πρέπει να φροντίσουμε να την προσθέσουμε στο _project_ μας.

```bash
npm install react-router-dom

```

```bash
yarn add react-router-dom

```

---
template: section

## Basic Setup

---
layout: true
template: chapter

### Basic Setup

---
class: long-text

#### Router

Για να ξεκινήσουμε να δουλεύουμε με τη `React Router` θα πρέπει να συμπεριλάβουμε έναν από τους `Router` που υπάρχουν στη βιβλιοθήκη.

```jsx
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

```

Ο `Router` θα πρέπει να βρίσκεται στη "ρίζα" του _app_.

---

#### Router options

Οι επιλογές για `Router` (σε _browser_) είναι οι εξής.

- `BrowserRouter`: αντανακλά το _state_ του _routing_ στο _URL_, μέσω του _History API_. Είναι το πιο κοντινό σε ένα "παραδοσιακό" _Web app_. Χρειάζεται κατάλληλες ρυθμίσεις στο _server_ για να λειτουργήσει προβλέψιμα.
- `HashRouter`: αντανακλά το _state_ του _routing_ μέσω του  _hash_ / _fragment_ τμήματος του _URL_. Λειτουργεί χωρίς καμία ιδιαίτερη ρύθμιση στο _server_.
- `MemoryRouter`: το _state_ του _routing_ υπάρχει μόνο στη μνήμη. Σε πιθανό _refresh_ θα χαθεί.

---

#### `Routes` _component_

Παρόλο που ο `Router` πρέπει να είναι μοναδικός σε μία εφαρμογή, μπορούν να υπάρχουν περισσότερα του ενός σημεία στα οποία τα `Component` θα εναλλάσονται, βάσει του _path_.

Το πιο συνηθισμένο, βέβαια, είναι το `Component` αυτό να εμφανίζεται μία φορά, μέσα στο "βασικό" `Component`.

Τα σημεία αυτά ορίζονται με το `Routes` _component_.

---

#### `Route` _component_

To `Routes` _component_ λειτουργεί σε συνεργασία με το <br> `Route` _component_.

Με αυτό ορίζονται οι "κανόνες" για το ποιο _element_ / _component_ θα εμφανίζεται κάθε φορά.

```jsx
<Route path="[path]" element={[jsx]} />

```

- `path`: ορίζει το _matching_
- `element`: ορίζει τον `JSX` κώδικα που θα εμφανιστεί μεσα στο `<Routes>`, αν ταιριάξει το `path`.

---

#### Παράδειγμα

```jsx
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <>
    <h1>Welcome to my site!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;

```

---

#### NoMatch (_404_)

Το `path` _property_ μπορεί να πάρει και την τιμή _*_.

Αυτή η τιμή είναι χρήσιμη στο τελευταίο `Route` _component_, για να εμφανίσει κάποιο _element_ όταν δεν βρεθεί κάποιο `path`.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  ...
  <Route path="*" element={<NoMatch />} />
</Routes>

```

---
template: section

## Navigation

---
layout: true
template: chapter

### Navigation

---

#### `Link` component

Για να λειτουργήσει σωστά το _routing_, θα πρέπει να αντικαταστήσουμε τα στοιχεία `<a>` με το `Link` _component_ που μας παρέχει η `React Router`.

```jsx
<Link to="[path]">[Link text]</Link>

```

Υπάρχει περίπτωση, αν συνεχίσουμε τα χρησιμοποιούμε στοιχεία `<a>`, η εφαρμογή να λειτουργεί φαινομενικά σωστά.

Αλλά, ένα στοιχεία `<a>` θα προκαλεί _refresh_ της σελίδας, που, για πολλούς λόγους, δεν είναι επιθυμητό.

---

#### Παράδειγμα

```jsx
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Menu;

```

---

#### `NavLink` component

Πολύ συχνά, υπάρχει η ανάγκη να εφαρμόσουμε κάποιο συγκεκριμένο στυλ στα _link_ που αναφέρονται στο "ενεργό" _route_.

Αυτό μπορεί να επιτευχθεί με το `NavLink` _component_, όπου στο `className` _property_, μπορεί να γίνει χρήση μιας `function` που καθορίζει μια κλάση, βάσει του αν το συγκεκριμένο _route_ είναι ενεργό ή όχι.

```jsx
<NavLink
  to="[path]"
  className={({ isActive }) => isActive ? [active-class-name] : ''}
>
  [Link text]
</NavLink>

```

---

#### `NavLink` component

Το ίδιο μπορεί να γίνει και στο `style` _property_.

```jsx
<NavLink
  to="[path]"
  style={({ isActive }) => ({
    css-property-1: isActive ? [value-1] : [value-2],
    css-property-2: isActive ? [value-3] : [value-4],
    ...
  })}
>
  [Link text]
</NavLink>

```

---

#### `useNavigate`

Εκτός των `Link` & `NavLink` _component_, υπάρχει η δυνατότητα "πλοήγησης", είτε με κάποιο άλλο στοιχείο, είτε με _imperative_ τρόπο.

Για το σκοπό αυτό, υπάρχει το `useNavigate` _hook_, το οποίο μας παρέχει μια συνάρτηση η οποία μπορεί να κληθεί με ένα _path_ ή με μια αριθμητική τιμή, π.χ. με _-1_ για προσομοίωση του _back button_.

```jsx
import { useNavigate } from 'react-router-dom';
...
const navigate = useNavigate();

```

---
class: long-code

#### `Navigate`

Ίδια λειτουργικότητα μπορεί να επιτευχθεί και με _declarative_ τρόπο, με τη βοήθεια του `Navigate` _component_.

```jsx
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const { user, setUser } = useState();
  ...
  return (
    <>
      {user && (
        <Navigate to="/dashboard" replace={ true } />
      )}
      ...
    </>
  );
}

```

---
class: extra-long-code

#### Παράδειγμα

```jsx
import { useNavigate } from 'react-router-dom';
...
export default function Invoice({ invoice }) {
  let navigate = useNavigate();

  return (
    <h2>Total Due: {invoice.amount}</h2>
    <p>
      {invoice.name}: {invoice.number}
    </p>
    <p>Due Date: {invoice.due}</p>
    <p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices');
        }}
      >
        Delete
      </button>
    </p>
  );
}

```

---
class: long-text

#### `useParams`

Το `path` σε ένα `Route` _component_ συχνά περιλαμβάνει και κάποιο δυναμικό κομμάτι, ως παράμετρο. Π.χ., το `path` που αφορά στο προφίλ ενός χρήστη ή στις λεπτομέρειες ενός προϊόντος.

Ένα τέτοιο δυναμικό κομμάτι ενός `path` ορίζεται με το πρόθεμα '`:`',
π.χ., `/users/:id` ή `/products/:id`.

Το `Component` μπορεί να έχει πρόσβαση στην παράμετρο αυτή, με το `useParams` _hook_.

```jsx
import { useParams } from 'react-router-dom';
...
const params = useParams();

```

---
class: long-code

#### Παράδειγμα

```jsx
// App.jsx

export default App = () => (
  <Routes>
    ...
    <Route path="/product/:id" element={<Product />} />
  </Routes>
);

```

```jsx
// Product.jsx

import { useParams } from 'react-router-dom';

export default Product = () => {
  const { id } = useParams();
  return <h2>Product: #{id}</h2>;
}

```

---

#### `useSearchParams`

Εκτός του `useParams` _hook_, υπάρχει και το `useSearchParams` _hook_, το οποίο παρέχει πρόσβαση στις παραμέτρους που περιέχονται στο `search` _property_ του `location` _object_, π.χ. στο <nobr>`/search?q=react-router`</nobr>.

Πέρα από την πρόσβαση, το _hook_ αυτό μας παρέχει και τη δυνατότητα **τροποποίησης** του `search` _property_, π.χ. για να αποτυπώσουμε την κατάσταση των φίλτρων μιας αναζήτησης.

```jsx
import { useSearchParams } from 'react-router-dom';
...
const [searchParams, setSearchParams] = useSearchParams({});

```

---
class: long-code

#### Παράδειγμα

```jsx
import { useSearchParams } from 'react-router-dom';

export default Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  return (
    <div className="filters">
      <button type="button" onClick={() => { setSearchParams({}); }}>
        Όλα
      </button>
      <button type="button" onClick={
        () => { setSearchParams({ type: 'pc' }); }
      }>
        PC
      </button>
      ...
    </div>
  );
}

```

---
class: long-code

#### `useLocation`

Το _hook_ αυτό επιστρέφει το τρέχων `location` _object_.

Χρήσιμο για _side effects_ που πρέπει να εκτελούνται όταν αλλάζει η διεύθυνση.

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ga('send', 'pageview');
  }, [location]);

  return ( ... );
};

```

---
template: section

## Nested routes

---
layout: true
template: chapter

### Nested routes

---

#### Nesting

Υπάρχουν πολλοί τρόποι να οργανώσει κανείς τα _routes_ μιας εφαρμογής.

Σε αυτό μπορεί να βοηθήσει η δυνατότητα να οριστούν _nested routes_.

Σε ένα _nested route_ το _path_ προσαρτάται σε αυτό του _parent route_.

Το κύριο _route_ σε μια σειρά από _sibling routes_ ορίζεται με το <br> _keyword_ `index`.

---

#### Παράδειγμα #1

```jsx
import { Route, Routes } from 'react-router-dom';

...

const App = () => (
  <>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>
);

export default App;

```

---
class: long-code

#### Παράδειγμα #2

```jsx
import { Route, Routes } from 'react-router-dom';

...

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products">
        <Route index element={<List />} />
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  </>
);

export default App;

```

---
class: long-text

#### `Outlet` component

Αν σε ένα _parent route_ δεν έχει οριστεί το `element` _property_, τότε το `route` αυτό απλά προσφέρει το `path` του ως πρόθεμα στα <br> _child routes_.

Αντίθετα, αν έχει οριστεί το `element` _property_, τότε θα πρέπει να γίνει χρήση του `Outlet` _component_ σε κάποιο στοιχείο που εμφανίζεται στο `element` _property_.

Στη θέση του `Outlet` _component_, εμφανίζεται το περιεχόμενο του `element` _property_ από το _child route_, που έχει "ταιριάξει" με το τρέχων `path`.

Αν δεν υπάρχει `Outlet` _component_, τότε το περιεχόμενο των _child routes_ δεν θα εμφανιστεί πουθενά.

---

#### Παράδειγμα

```jsx
// App.jsx
import { Route, Routes } from 'react-router-dom';

...

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>
);

export default App;

```

---

#### Παράδειγμα (cont.)

```jsx
// Layout.jsx
...

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <aside>
      <SideBar />
    </aside>
    <Footer />
  </>
);

export default Layout;

```

---

#### Lazy routes

Μιας και όλα τα _components_ που αφορούν σε `Routes` δηλώνονται, συνήθως, στο κεντρικό _component_, π.χ., `<App />`, ο κώδικας που περιέχουν θα πρέπει να φορτωθεί εξ΄αρχής.

Αν η εφαρμογή έχει αρκετά `Routes`, αυτό μπορεί να αυξάνει το χρόνο απόκρισης, γεγονός μη επιθυμητό.

Η χρήση της μεθόδου `React.lazy` επιτρέπει να φορτώνονται τα _components_, στο πρώτο _mount_ και όχι εξ' αρχής.

Πρέπει, όμως, να γίνει χρήση και του `React.Suspense` _component_, αλλιώς η χρήση του `React.lazy` οδηγεί σε σφάλμα.

---
class: extra-long-code

#### Παράδειγμα

```jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';

const About = React.lazy(() => import('./About'));

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={
          <React.Suspense fallback={<>...</>}>
            <About />
          </React.Suspense>
        } />
      </Routes>
    </Routes>
  </>
);

export default App;

```

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---

#### Homework #1

Φτιάξτε ένα `React` _app_ για το "_sitemap_" ενός e-shop.
Θα πρέπει να υπάρχουν, κατ' ελάχιστον, τα εξής _routes_:

_Home_, _About_, _Contact_, _Product List_, _Product Details_

Χρησιμοποιήστε το `React Router` για την διαχείριση των `Routes` και ένα `Layout` _component_ για τη βασική δομή.

Προαιρετικά, ορίστε κάποια `Routes` ως _lazy_.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=reactrouter.com) React Router | Installation https://reactrouter.com/docs/en/v6/getting-started/installation
- ![favicon](https://www.google.com/s2/favicons?domain=reactrouter.com) React Router | Overview https://reactrouter.com/docs/en/v6/getting-started/overview#overview
- ![favicon](https://www.google.com/s2/favicons?domain=reactrouter.com) React Router | Tutorial https://reactrouter.com/docs/en/v6/getting-started/tutorial#tutorial
- ![](https://www.google.com/s2/favicons?domain=dev.to) Create a React App with React Router Dom v6 - DEV Community https://dev.to/salehmubashar/react-router-dom-36a2
- ![favicon](https://www.google.com/s2/favicons?domain=www.robinwieruch.de) React Router 6 Tutorial https://www.robinwieruch.de/react-router/

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=ui.dev) How to Pass Props Through React Router's Link Component - ui.dev https://ui.dev/react-router-pass-props-to-link/
- ![favicon](https://www.google.com/s2/favicons?domain=enlear.academy) What’s New in React Router 6?. A Quick Overview of React Router v6 | by Piumi Liyana Gunawardhana | Nov, 2021 | Enlear Academy https://enlear.academy/whats-new-in-react-router-6-e34e451e5285
- ![favicon](https://www.google.com/s2/favicons?domain=www.youtube.com) React Router 6 - What Changed & Upgrading Guide - YouTube https://www.youtube.com/watch?v=zEQiNFAwDGo
- ![favicon](https://www.google.com/s2/favicons?domain=medium.com) Amazing New Features In React & React Router v6 | by rishav ghosh | Age of Awareness | Medium https://medium.com/age-of-awareness/amazing-new-stuff-in-react-router-v6-895ba3fab6af
- ![favicon](https://www.google.com/s2/favicons?domain=www.robinwieruch.de) React Router 6: Nested Routes https://www.robinwieruch.de/react-router-nested-routes/
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Code-Splitting – React https://reactjs.org/docs/code-splitting.html

---
template: section

## Thank You!

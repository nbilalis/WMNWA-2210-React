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

## WMNWA 2210 | Web Applications

# React #7

### Side Effects

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- `useEffect`
  - Clean-up
  - The Dependency Array
  - `API` calls
- `useLayoutEffect`

---
template: section

## Side Effects

---
layout: true
template: chapter

### Side Effects

---

#### "Effectfull" Code

Κάποιες ενέργειες δεν μπορούν να γίνουν το κύριο σώμα ενός _Function Component_, αυτό που αναφέρεται και ως _render phase_.

Τέτοιες ενέργειες, συνήθως, έχουν να κάνουν με:

- _mutations_
- _subscriptions_
- _timers_
- _logging_

---
class: long-text

#### (Un)intended Consequences

Αν και η _Functional_ προσέγγιση βασίζεται σε μεγάλο βαθμό στην «καθαρότητα» (_purity_), κάποια στιγμή, κάπου, κάτι πρέπει να υποστεί αλλαγές.

Χαρακτηριστικά παραδείγματα είναι τα παρακάτω:

- `API` call
- `DOM` manipulation
- _Event listener_ registering/de-registering
- _Local/Session storage_ access
- Logging
- κ.λπ.

Σε αυτές τις περιπτώσεις, θα χρειαστούμε τη βοήθεια της `useEffect`.

---

#### `useEffect` _hook_

Η `useEffect` δέχεται, ως κύριο όρισμα, ένα _callback function_ το οποίο περιέχει _imperative_ και _effectfull_ κώδικα.

Ο κώδικας αυτός εκτελείται όταν ολοκληρωθεί η _render phase_ του `Component`.

```jsx
useEffect(didUpdate);

```

Η `useEffect` παρέχει παρόμοια λειτουργικότητα με τα `componentDidMount`, `componentDidUpdate` και `componentWillUnmount` των _Class Components_.

---
class: long-code

#### Παράδειγμα

```jsx
import { useState, useEffect } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
}

export default ClickCounter;

```

---
class: long-text

#### Clean-up

Συχνά, χρειάζεται να εκτελεστεί κώδικας όταν κάποιο `Component` «αποπροσαρτηθεί» (_unmount_) από το `DOM`.

Αυτό μπορεί να αφορά σε κάποιο _event listener_, _subscription_, _timer_, κ.λπ.

Ο κώδικας που θα κάνει _remove_, _unregister_ ή _clear_ κάτι από τα παραπάνω, θα πρέπει να επιστρέφεται ως `function` από το όρισμα της `useEffect`.

```jsx
useEffect(() => {
  // similar to the componentDidMount & componentDidUpdate events
  ...
  return () => {
    // similar to the componentWillUnmount event
    ...
  };
});

```

---
class: long-code

#### Παράδειγμα #1

```jsx
import { useState, useEffect } from 'react';

const Ticker = () => {
  const getTimestamp = () => new Date().toLocaleTimeString();
  const [timestamp, setTimestamp] = useState(getTimestamp());

  useEffect(() => {
    const handler = setInterval(() => {
      setTimestamp(getTimestamp());
    }, 1000);

    return () => {
      clearInterval(handler);
    };
  }, []);

  return <div>Current time: {timestamp}</div>;
};

export default Ticker;

```

---
class: long-code

#### Παράδειγμα #2

```jsx
import { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => { setX(x); setY(y); };

  useEffect(() => {
    window.addEventListener('mousemove', setPosition);
    return () => {
      window.removeEventListener('mousemove', setPosition);
    };
  }, []);

  return <div>Current mouse position: {x}, {y}</div>;
};

export default MouseTracker;

```

---
class: long-text

#### The Dependency Array

Στα προηγούμενα παραδείγματα, η `useEffect` έχει κληθεί με δύο ορίσματα. Το πρώτο είναι η _callback function_ και το δεύτερο (προαιρετικό) είναι ένας πίνακας με «εξαρτήσεις» (_dependencies_).

Αν το δεύτερο όρισμα απουσιάζει, τότε η _callback function_ καλείται σε κάθε _re-render_.

Μιας και αυτό, συχνά, δεν είναι επιθυμητό, παρέχουμε στην `useEffect` (μέσω ενός πίνακα) κάποιες αναφορές, ώστε η _callback function_ να εκτελείται μόνο όταν οι «εξαρτήσεις» αυτές έχουν υποστεί αλλαγές.

**ΠΡΟΣΟΧΗ**: Η σύγκριση που γίνεται στα `deps` είναι _shallow equality check_, για αυτό και θέλει προσοχή όταν κάποιο από τα `deps` δεν είναι _primitive type_.

---
#### `API` calls

Ίσως η πιο συχνή χρήση του `useEffect` _hook_ είναι για την κλήση κάποιου `API`.

Είτε το `Fetch API`, είτε κάποια βιβλιοθήκη, όπως η `axios` μπορούν να χρησιμοποιηθούν για αυτή τη δουλειά.

Όταν η κλήση επιστρέψει θα πρέπει να ενημερώσει το `state` του `component`.

Και η ενημέρωση αυτή θα οδηγήσει, εν συνεχεία, σε _re-render_.

---
class: extra-long-code

#### Παράδειγμα #1

```jsx
import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  if (!movies.length) return <div>Loading...</div>;

  return (
    <ol>
      {movies.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ol>
  );
}

export default Movies;

```

---
class: extra-long-code

#### Παράδειγμα #2

```jsx
import { useEffect, useState } from 'react';

function FetchEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/employees');
      const fetchedEmployees = await response.json(response);
      setEmployees(fetchedEmployees);
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}

```

---
class: extra-long-code

#### Παράδειγμα #3

```jsx
import { useEffect, useState } from 'react';

function useFetch(uri) {              // Custom hook
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(uri)
      .then((response) => response.json())
      .then((json) => { setData(json); setLoading(false); })
      .catch((err) => { setError(err); setLoading(false); });
  }, [uri]);

  return { data, loading, error };
}

export default useFetch;


```

---
class: extra-long-text

#### `useLayoutEffect`

Ο τρόπος κλήσης της `useLayoutEffect` είναι πανομοιότυπος με αυτόν της `useEffect`.

Σε αντίθεση με την `useEffect`, η `useLayoutEffect` εκτελείται «σύγχρονα» μετά από όλες τις αλλαγές στο `DOM`, **αλλά πριν** το _paint_ στο _browser_.

Αυτό είναι χρήσιμο όταν θέλουμε να κάνουμε αλλαγές στο `DOM` που θα αποτυπωθούν στο _paint_ εξαρχής και όχι ασύγχρονα σε δεύτερο χρόνο.

Εάν κάποιο _component_ τρεμοπαίζει (`flickering`) όταν ενημερώνεται η κατάσταση του - π.χ γίνεται _render_ σε μια αρχική κατάσταση και κατόπιν (μέσω της `useEffect`) - αυτό είναι μια καλή ένδειξη ότι πρέπει να χρησιμοποιηθεί η `useLayoutEffect`.

Διαφορετικά η `useEffect` είναι _99%_ η σωστή επιλογή.

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---

#### Github user info

Δημιουργήστε ένα `React` _component_, το οποίο θα δείχνει πληροφορίες για έναν χρήστη του `Github`.

Το _component_ πρέπει να δέχεται ως `prop` το _username_ του χρήστη και με αυτό να καλεί, μέσω της `useEffect`, το _endpoint_ "https://api.github.com/users/{username}".

Στη συνέχεια, ενσωματώστε το _component_ σε ένα `React` _app_ όπου κάποιος θα μπορεί να επιλέξει/εισάγει ένα _username_ και θα εμφανίζονται οι πληροφορίες του αντίστοιχου χρήστη, μέσω του _component_.

---
template: list

### Χρήσιμα links

- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Using the Effect Hook – React https://reactjs.org/docs/hooks-effect.html
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Hooks API Reference - useEffect – React https://reactjs.org/docs/hooks-reference.html#useeffect
- ![](https://www.google.com/s2/favicons?domain=beta.reactjs.org) Keeping Components Pure https://beta.reactjs.org/learn/keeping-components-pure
- ![](https://www.google.com/s2/favicons?domain=blog.logrocket.com) The last guide to the useEffect Hook you'll ever need - LogRocket Blog https://blog.logrocket.com/guide-to-react-useeffect-hook/
- ![](https://www.google.com/s2/favicons?domain=dmitripavlutin.com) A Simple Explanation of React.useEffect() https://dmitripavlutin.com/react-useeffect-explanation/
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Hooks API Reference – useLayoutEffect - React https://reactjs.org/docs/hooks-reference.html#uselayouteffect
- ![](https://www.google.com/s2/favicons?domain=kentcdodds.com) useEffect vs useLayoutEffect https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
- ![](https://www.google.com/s2/favicons?domain=daveceddia.com) When to useLayoutEffect Instead of useEffect (example) https://daveceddia.com/useeffect-vs-uselayouteffect/

---
template: list

### Extra info

- ![](https://www.google.com/s2/favicons?domain=reactjs.org) Is it safe to omit functions from the list of dependencies? - Hooks FAQ – React https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
- ![](https://www.google.com/s2/favicons?domain=reactjs.org) ESLint Plugin - Rules of Hooks – React https://reactjs.org/docs/hooks-rules.html#eslint-plugin
- ![](https://www.google.com/s2/favicons?domain=betterprogramming.pub) How to Use the React Hook useDeepEffect | by Marco Antonio Ghiani | Better Programming https://betterprogramming.pub/how-to-use-the-react-hook-usedeepeffect-815818c0ad9d
- ![](https://www.google.com/s2/favicons?domain=usehooks.com) useLocalStorage React Hook - useHooks https://usehooks.com/useLocalStorage/
- ![](https://www.google.com/s2/favicons?domain=github.com) donavon/use-persisted-state: A custom React Hook that provides a multi-instance, multi-tab/browser shared and persistent state. https://github.com/donavon/use-persisted-state
- ![](https://www.google.com/s2/favicons?domain=react-query.tanstack.com) React Query - Hooks for fetching, caching and updating asynchronous data in React https://react-query.tanstack.com/

---
template: section

## Thank You!

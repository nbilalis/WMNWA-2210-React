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

# React #11

### (Rest of) Top-Level API

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Components
  - `React.memo`
- Suspense
  - `React.lazy`
  - `React.Suspense`
- Hooks
  - `useCallback`
  - `useMemo`
  - `useRef`

---
template: section

## Top-Level API

---
layout: true
template: chapter

### Top-Level API

---

#### Introduction

> `React` is the entry point to the `React` library. If you load `React` from a `<script>` tag, these top-level _APIs_ are available on the `React` global.
>
> If you use _ES6_ with `npm`, you can write `import React from 'react'`. If you use _ES5_ with `npm`, you can write `var React = require('react')`.

---
template: section

## Components

---
layout: true
template: chapter

### Components

---
class: extra-long-text, long-code

#### `React.memo`

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

```

> `React.memo` is a higher order component.
>
> If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that `React` will skip rendering the component, and reuse the last rendered result.
>
> `React.memo` only checks for `prop` changes. If your function component wrapped in React.memo has a `useState`, `useReducer` or `useContext` _Hook_ in its implementation, it will still rerender when state or context change.
>

---
class: extra-long-text, extra-long-code

#### `React.memo` (cont.)

> By default `React.memo` will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

```js
function MyComponent(props) { /* render using props */ }

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}

export default React.memo(MyComponent, areEqual);

```

> This method only exists as a performance optimization. Do not rely on it to "prevent" a render, as this can lead to bugs.

---
layout: true
template: chapter

### Suspense

---
class: extra-long-text, long-code

#### `React.lazy`

> `React.lazy()` lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren’t used during the initial render.

```js
const SomeComponent = React.lazy(() => import('./SomeComponent'));

```

> Note that rendering lazy components requires that there's a `<React.Suspense>` component higher in the rendering tree. This is how you specify a loading indicator.

##### Note

> Using `React.lazy` with dynamic import requires Promises to be available in the `JS` environment. This requires a _polyfill_ on _IE11_ and below.

---
class: extra-long-text, long-code

#### `React.Suspense`

> `React.Suspense` lets you specify the loading indicator in case some components in the tree below it are not yet ready to render. Today, lazy loading components is the only use case supported by `<React.Suspense>`:

```jsx
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}

```

---
layout: true
template: chapter

### Hooks

---
class: extra-long-text, long-code

#### `useCallback`

```js
const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);

```

> Returns a _memoized_ _callback_.
>
> Pass an inline _callback_ and an array of _dependencies_. `useCallback` will return a memoized version of the _callback_ that only changes if one of the _dependencies_ has changed.
>
> This is useful when passing _callbacks_ to optimized child _components_ that rely on reference equality to prevent unnecessary renders <nobr>(e.g. `shouldComponentUpdate`)</nobr>.
>
> `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

---
class: extra-long-text, long-code

#### `useMemo`

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

> Returns a _memoized_ value.
>
> Pass a "create" _function_ and an array of _dependencies_. `useMemo` will only recompute the _memoized_ value when one of the _dependencies_ has changed. This optimization helps to avoid expensive calculations on every render.
>
> Remember that the _function_ passed to `useMemo` runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in `useEffect`, not `useMemo`.
>
> If no array is provided, a new value will be computed on every render.

---

#### `useMemo`

> You may rely on `useMemo` as a performance optimization, not as a semantic guarantee.
>
> In the future, `React` may choose to "forget" some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components.
>
> Write your code so that it still works without `useMemo` — and then add it to optimize performance.

---

#### `useRef`

```js
const refContainer = useRef(initialValue);

```

> `useRef` returns a mutable ref _object_ whose `.current` property is initialized to the passed argument (`initialValue`).
>
> The returned _object_ will persist for the full lifetime of the component.
>
> Essentially, `useRef` is like a "box" that can hold a mutable value in its `.current` property.

---
class: extra-long-text, long-code

#### `useRef` (cont.)

> A common use case is to access a child imperatively:

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


```

---

#### `useRef` (cont.)

> You might be familiar with refs primarily as a way to access the _DOM_. If you pass a ref object to `React` with `<div ref={myRef} />`, `React` will set its .current property to the corresponding _DOM_ node whenever that node changes.
>
> However, `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable value around similar to how you'd use instance fields in classes.

---

#### `useRef` (cont.)

> This works because `useRef()` creates a plain `JavaScript` object. The only difference between `useRef()` and creating a `{current: ...}` _object_ yourself is that `useRef` will give you the same ref _object_ on every render.
>
> Keep in mind that `useRef` doesn't notify you when its content changes. Mutating the `.current` property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a _DOM_ node, you may want to use a _callback_ ref instead.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) React Top-Level API – React https://reactjs.org/docs/react-api.html
- ![favicon](https://www.google.com/s2/favicons?domain=en.wikipedia.org) Memoization - Wikipedia https://en.wikipedia.org/wiki/Memoization
- ![favicon](https://www.google.com/s2/favicons?domain=medium.com) Lazy loading (and preloading) components in React 16.6 | by Rodrigo Pombo | HackerNoon.com | Medium https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d
- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Lists and Keys – React https://reactjs.org/docs/lists-and-keys.html

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=reactjs.org) Reconciliation – React https://reactjs.org/docs/reconciliation.html
- ![favicon](https://www.google.com/s2/favicons?domain=jvcjunior) Reference Identity in Javascript — React/Performance | by Valter Júnior | Medium https://medium.com/@jvcjunior/reference-identity-in-javascript-react-performance-12a8354addad
- ![favicon](https://www.google.com/s2/favicons?domain=thoughtbot.com) A React Rendering Misconception https://thoughtbot.com/blog/react-rendering-misconception
- ![favicon](https://www.google.com/s2/favicons?domain=kentcdodds.com) One simple trick to optimize React re-renders https://kentcdodds.com/blog/optimize-react-re-renders
- ![favicon](https://www.google.com/s2/favicons?domain=dmitripavlutin.com) How to Memoize with React.useMemo() https://dmitripavlutin.com/react-usememo-hook/

---
template: section

## Thank You!

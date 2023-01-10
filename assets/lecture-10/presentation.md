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

### React 10 | Styling

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- `Material-UI / MUI`
- `styled-components`
- `Emotion`
- `vanilla-extract`
- `TailwindCSS`

---
template: section

## `Material-UI`

---
layout: true
template: chapter

### `Material-UI`

---

#### Introduction

> MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.

---

#### Installation

```bash
# with npm
npm install @mui/material @emotion/react @emotion/styled

# with yarn
yarn add @mui/material @emotion/react @emotion/styled

```

---
class: extra-long-code

#### Suggested fonts

> MUI was designed with the Roboto font in mind

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

```

---
class: long-code

#### `Icon` component

> To use the font Icon component, you must first add the Material icons font

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

```

---

#### SVG icons

> In order to use prebuilt SVG Material icons, such as those found in the icons demos you must first install the @mui/icons-material package.

```bash
# with npm
npm install @mui/icons-material

# with yarn
yarn add @mui/icons-material

```

---
template: section

## `styled-components`

---
layout: true
template: chapter

### `styled-components`

---

#### Introduction

> Utilising tagged template literals (a recent addition to `JavaScript`) and the power of `CSS`, styled-components allows you to write actual `CSS` code to style your components.
>
> It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

---

#### Installation

```bash
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components

```

---
class: extra-long-text

#### Installation

> If you use a package manager like yarn that supports the "_resolutions_" _package.json_ field, we also highly recommend you add an entry to it as well corresponding to the major version range.
>
> This helps avoid an entire class of problems that arise from multiple versions of `styled-components` being installed in your project.

```json
{
  "resolutions": {
    "styled-components": "^5"
  }
}

```

---

#### Installation

In case you use `TypeScript`

```bash
# with npm
npm install --save-dev @types/styled-components

# with yarn
yarn add @types/styled-components --dev

```

---
template: section

## `Emotion`

---
layout: true
template: chapter

### `Emotion`

---

#### Introduction

> `Emotion` is a library designed for writing css styles with `JavaScript`.
>
> It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities.
>
> Both string and object styles are supported.

---

#### Installation

##### Framework Agnostic

```bash
# with npm
npm i @emotion/css

# with yarn
yarn add @emotion/css

```

---

#### Installation

##### `React`

```bash
# with npm
npm i @emotion/react

# with yarn
yarn add @emotion/react

```

---

#### Installation

##### `React`

> The `@emotion/styled package` is for those who prefer to use the `styled.div` style _API_ for creating components.

```bash
# with npm
npm i @emotion/styled @emotion/react

# with yarn
yarn add @emotion/styled @emotion/react

```

---
template: section

## `vanilla-extract`

---
layout: true
template: chapter

### `vanilla-extract`

---

#### Introduction

> Use `TypeScript` as your preprocessor.
>
> Write type‑safe, locally scoped classes, variables and themes, then generate static `CSS` files at build time.
>
> Basically, it’s “_CSS Modules-in-TypeScript_” but with scoped `CSS` Variables and heaps more.

---

#### Installation

```bash
# with npm
npm install @vanilla-extract/css

# with yarn
yarn add @vanilla-extract/css

```

---

#### Installation

##### `Vite`

```bash
# with npm
npm install @vanilla-extract/css @vanilla-extract/vite-plugin

# with yarn
yarn add @vanilla-extract/css @vanilla-extract/vite-plugin

```

```js
// vite.config.js
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  plugins: [vanillaExtractPlugin()]
};

```

---
template: section

## `Tailwind CSS`

---
layout: true
template: chapter

### `Tailwind CSS`

---

#### Introduction

> A utility-first `CSS` framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.
>
> Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values.
>
> They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.

---

#### Installation

```bash
# with npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# with yarn
yarn add -D tailwindcss postcss autoprefixer
yarn run tailwind init -p

```

---

#### Installation

##### `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

---

#### Installation

##### `tailwind.config.js`

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=mui.com) Installation - MUI https://mui.com/getting-started/installation/
- ![favicon](https://www.google.com/s2/favicons?domain=chakra-ui.com) Getting Started - Chakra UI https://chakra-ui.com/docs/getting-started
- ![favicon](https://www.google.com/s2/favicons?domain=styled-components.com) styled-components: Basics https://styled-components.com/docs/basics#installation
- ![favicon](https://www.google.com/s2/favicons?domain=emotion.sh) Emotion - Introduction https://emotion.sh/docs/introduction
- ![favicon](https://www.google.com/s2/favicons?domain=vanilla-extract.style) Getting Started — vanilla-extract https://vanilla-extract.style/documentation/
- ![favicon](https://www.google.com/s2/favicons?domain=ant.design) Ant Design of React - Ant Design https://ant.design/docs/react/introduce
- ![favicon](https://www.google.com/s2/favicons?domain=tailwindcss.com) Installation: Tailwind CSS with Create React App - Tailwind CSS https://tailwindcss.com/docs/guides/create-react-app

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=fontsource.org) Fontsource | Home https://fontsource.org/docs/introduction
- ![favicon](https://www.google.com/s2/favicons?domain=css-tricks.com) The CSS-in-React Landscape - CSS-Tricks https://css-tricks.com/the-css-in-react-landscape/
- ![favicon](https://www.google.com/s2/favicons?domain=dmitrynozhenko) 9 Ways To Implement CSS in React JS | by Dmitry Nozhenko | Medium https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
- ![favicon](https://www.google.com/s2/favicons?domain=www.puruvj.dev) Why I moved from Styled Components to (S)CSS modules // Puru Vijay https://www.puruvj.dev/blog/move-to-css-modules-from-styled-components
- ![favicon](https://www.google.com/s2/favicons?domain=medium.com) Styled Components: To Use or Not to Use? | by Talia Marcassa | Building CrowdRiff | Medium https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21
- ![favicon](https://www.google.com/s2/favicons?domain=dev.to) Using emotionJs with Vite - DEV Community https://dev.to/ajitsinghkamal/using-emotionjs-with-vite-2ndj
- ![favicon](https://www.google.com/s2/favicons?domain=blog.logrocket.com) Styled-components vs. Emotion for handling CSS - LogRocket Blog https://blog.logrocket.com/styled-components-vs-emotion-for-handling-css/
- ![favicon](https://www.google.com/s2/favicons?domain=vanilla-extract.style) Getting Started — vanilla-extract https://vanilla-extract.style/documentation/
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Template literals (Template strings) - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- ![](https://www.google.com/s2/favicons?domain=wesbos.com) Tagged Template Literals - Wes Bos https://wesbos.com/tagged-template-literals

---
template: section

## Thank You!

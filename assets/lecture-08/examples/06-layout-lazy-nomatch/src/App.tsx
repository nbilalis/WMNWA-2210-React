import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import ProductList from './views/Products/List';
import ProductDetails from './views/Products/Details';
import NoMatch from './views/NoMatch';

const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<>...</>}>
            <About />
          </Suspense>
        }
      />
      <Route path="/products/">
        <Route index element={<ProductList />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;

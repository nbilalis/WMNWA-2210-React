import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './views/Layout';

import './App.scss';

const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const NoMatch = lazy(() => import('./views/NoMatch'));

const Index = lazy(() => import('./views/pokemon/Index'));
const Details = lazy(() => import('./views/pokemon/Details'));
const List = lazy(() => import('./views/pokemon/List'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Index />}>
            <Route index element={<List />} />
            <Route path=":name" element={<Details />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

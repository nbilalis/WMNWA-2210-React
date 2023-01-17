import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import './App.scss';

const About = React.lazy(() => import('./views/About'));
const Home = React.lazy(() => import('./views/Home'));
const Layout = React.lazy(() => import('./views/Layout'));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

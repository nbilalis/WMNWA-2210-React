import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import ThemeProvider from '@/store/ThemeProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet context={[counter, setCounter]} />
      </main>
      <aside />
      <footer />
    </ThemeProvider>
  );
}

export default Layout;

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Outlet context={[counter, setCounter]} />
      </main>
      <aside />
      <footer />
    </>
  );
}

export default Layout;

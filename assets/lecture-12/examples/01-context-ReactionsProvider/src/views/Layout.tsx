import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import ReactionsProvider from '@/store/ReactionsProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  return (
    <ReactionsProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside />
      <footer />
    </ReactionsProvider>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import ReactionsProvider from '@/store/ReactionsProvider';
import ThemeProvider from '@/store/ThemeProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <ReactionsProvider>
        <main>
          <Outlet />
        </main>
      </ReactionsProvider>
      <aside />
      <footer />
    </ThemeProvider>
  );
}

export default Layout;

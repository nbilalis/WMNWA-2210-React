import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import useLogRender from '@/hooks/useLogRender';

import ThemeProvider from '@/store/ThemeProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  useLogRender('Layout');

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside />
      <footer />
    </ThemeProvider>
  );
}

export default Layout;

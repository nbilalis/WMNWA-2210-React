import { Outlet } from 'react-router-dom';

import Menu from './Menu';

import './Layout.scss';

function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <aside>This is aside</aside>
      <footer>This is the footer</footer>
    </>
  );
}

export default Layout;

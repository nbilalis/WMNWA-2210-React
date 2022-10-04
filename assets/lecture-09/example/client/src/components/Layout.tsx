import { Outlet } from 'react-router-dom';

import './Layout.scss';
import './Layout.scoped.scss';

function Layout() {
  return (
    <>
      <header>This is the header</header>
      <main>
        <Outlet />
      </main>
      <footer>This is the footer</footer>
    </>
  );
}

export default Layout;

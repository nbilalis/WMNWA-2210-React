import { Outlet } from 'react-router-dom';

import './Index.scoped.scss';

function Index() {
  return (
    <>
      <h1>Pokémon</h1>
      <Outlet />
    </>
  );
}

export default Index;

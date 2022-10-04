import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <>
      <h2>Pokémon</h2>
      <Outlet />
    </>
  );
}

export default Index;

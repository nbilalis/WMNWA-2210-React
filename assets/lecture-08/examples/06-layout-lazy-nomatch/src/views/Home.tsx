import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Home page');

  return (
    <>
      <h1>Home page</h1>
      <p>Welcome to my Pokémon page!</p>
    </>
  );
}

export default Home;

import useDocumentTitle from '@/hooks/useDocumentTitle';

function About() {
  useDocumentTitle('About page');

  return (
    <>
      <h1>About page</h1>
      <p>This is a page for Pokémon!</p>
    </>
  );
}

export default About;

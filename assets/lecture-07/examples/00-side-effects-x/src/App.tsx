import { useState } from 'react';

import './App.scss';

function App() {
  const [repos, setRepos] = useState(0);
  const [counter, setCounter] = useState(0);

  console.log('rendering...');

  fetch('https://api.github.com/users/lalibi')
    .then((response) => response.json())
    .then((data) => setRepos(data.public_repos));

  /* setInterval(() => {
    setCounter(counter + 1);
  }, 1000); */

  return (
    <>
      <h1>Repos: {repos}</h1>
      <h1>Counter: {counter}</h1>
    </>
  );
}

export default App;

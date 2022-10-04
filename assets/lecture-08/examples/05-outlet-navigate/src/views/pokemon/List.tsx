import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './List.scoped.scss';

interface Pokemon {
  name: string;
  uri: string;
}

function List() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then((data) => { setPokemon(data.results); });
  }, []);

  if (!pokemon.length) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {pokemon.map((p) => (
        <li key={p.name}>
          <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default List;

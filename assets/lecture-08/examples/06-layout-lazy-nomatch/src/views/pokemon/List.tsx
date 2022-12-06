import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentTitle from '@/hooks/useDocumentTitle';

import './List.scoped.scss';

interface Pokemon {
  name: string;
  url: string;
}

const imagePrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function List() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);

  useDocumentTitle('Pokémon list');

  return (
    <ul>
      {pokemon.map((p) => (
        <li key={p.name}>
          <Link to={`/pokemon/${p.name}`}>
            <img src={`${imagePrefix}${p.url.split('/').at(-2)}.png`} alt={p.name} />
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useDocumentTitle from '@/hooks/useDocumentTitle';

import './Details.scoped.scss';

interface Pokemon {
  id: number;
  name: string;
}

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function Details() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const navigate = useNavigate();

  useDocumentTitle(`Pokémon details: ${pokemon?.name ?? 'Loading...'}`);

  useEffect(() => {
    (async () => {
      await wait(500);

      const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data1 = await res1.json();

      setPokemon(data1);
    })();
  }, [name]);

  if (!pokemon) return <h2>Loading...</h2>;

  const paddedId = `000${pokemon.id}`.slice(-3);

  return (
    <>
      <h2>Name: {pokemon.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedId}.png`}
        alt={pokemon.name}
        width="400"
      />
      <button
        type="button"
        onClick={() => {
          // navigate('/pokemon');
          navigate(-1);
        }}
      >
        ≪ Back
      </button>
    </>
  );
}

export default Details;

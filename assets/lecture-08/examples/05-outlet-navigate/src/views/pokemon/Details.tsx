import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import './Details.scoped.scss';

interface Form {
  name: string;
  url: string;
}

interface Pokemon {
  id: number;
  name: string;
  forms: Form[];
}

function Details() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data1 = await res1.json();

      const res2 = await fetch(data1.forms[0].url);
      const data2 = await res2.json();

      setPokemon(data1);
      setImage(data2.sprites.front_default);
    })();
  }, [id]);

  if (!pokemon || !image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="pokemon-card">
        <img src={image} alt={pokemon.name} /> {pokemon.name}
      </div>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        « Return
      </button>
    </div>
  );
}
export default Details;

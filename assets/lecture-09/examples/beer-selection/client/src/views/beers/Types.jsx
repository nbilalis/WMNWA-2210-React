import useFetch from '../../hooks/useFetch';
import useLocalStorageState from '../../hooks/useLocalStorageState';

import Card from '../../components/beers/Card';

import './Types.scoped.scss';

function Types() {
  const { data: types } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/types`, []);
  const { data: subtypes } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/subtypes`, []);
  const [selected, setSelected] = useLocalStorageState('selected', 'all');

  const groupedSubtypes = subtypes
    .filter((st) => selected === 'all' || selected.slug === st.type.slug)
    .reduce(
      (acc, cur) => ({ ...acc, [cur.type.title]: [...(acc[cur.type.title] || []), cur] }),
      {}
    );

  return (
    <>
      <h1>Beer types</h1>
      <ul className="types">
        <li>
          <button
            type="button"
            className={selected === 'all' ? 'selected' : ''}
            onClick={() => setSelected('all')}
          >
            All types
          </button>
        </li>
        {types.map((t) => (
          <li key={t.slug}>
            <button
              type="button"
              className={selected.slug === t.slug ? 'selected' : ''}
              onClick={() => setSelected(t)}
            >
              {t.title}
            </button>
          </li>
        ))}
      </ul>

      <h2>Beer sub-types</h2>
      {Object.entries(groupedSubtypes).map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <ul className="subtypes">
            {value.map((st) => (
              <li key={st.slug}>
                <Card subtype={st} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Types;

import { useCallback, useMemo, useState } from 'react';
import React from 'react';

import useLogRender from '@/hooks/useLogRender';

import './List.scoped.scss';
import ListItem from './ListItem';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

interface ListProps {
  color: string;
}

function List({ color }: ListProps) {
  useLogRender('List');
  const [counter, setCounter] = useState(0);

  const style = useMemo(
    () => ({
      color,
    }),
    [color]
  );

  const callback = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return (
    <>
      <ul>
        {planets.map((p) => (
          <ListItem key={p} text={p} style={style} clickCallback={callback} />
        ))}
      </ul>
      <div>Lower counter: {counter}</div>
    </>
  );
}

export default List;

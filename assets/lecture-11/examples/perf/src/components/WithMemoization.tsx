import React from 'react';
import { useState } from 'react';

import useLogRender from '@/hooks/useLogRender';

import List from './List';

const ListMemo = React.memo(List);

function WithMemoization() {
  useLogRender('WithMemoization');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>With memoization</h2>
      <p>
        Upper counter: {counter} -{' '}
        <button
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Click me
        </button>
      </p>
      <ListMemo color="whitesmoke" />
    </>
  );
}

export default WithMemoization;

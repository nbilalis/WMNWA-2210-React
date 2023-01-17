import { useState } from 'react';

import useLogRender from '@/hooks/useLogRender';

import Counter from './Counter';
import List from './List';

function MoveStateDown() {
  useLogRender('MoveStateDown');

  return (
    <>
      <h2>Move state down</h2>
      <Counter />
      <List color="whitesmoke" />
    </>
  );
}

export default MoveStateDown;

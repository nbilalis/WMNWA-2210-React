import { useState } from 'react';

import useLogRender from '@/hooks/useLogRender';

import SlowComponent from './SlowComponent';

function WithSlowChildComponents() {
  useLogRender('WithSlowChildComponents');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        onMouseMove={(e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        }}
      >
        <h2>With slow child components</h2>
        <SlowComponent text="This took a while..." />
        <br />
        <div>{`x: ${coords.x}, y: ${coords.y}`}</div>
      </div>
    </>
  );
}

export default WithSlowChildComponents;

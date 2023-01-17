import useLogRender from '@/hooks/useLogRender';

import MouseCoordinates from './MouseCoordinates';
import SlowComponent from './SlowComponent';

function LiftContentUp() {
  useLogRender('LiftContentUp');

  return (
    <>
      <MouseCoordinates>
        <h2>Lift content up</h2>
        <SlowComponent text="This took a while..." />
      </MouseCoordinates>
    </>
  );
}

export default LiftContentUp;

import React from 'react';

import useLogRender from '@/hooks/useLogRender';

function Hello({ name = 'World' }) {
  useLogRender('Hello');

  return <h2>Hello, {name}!</h2>;
}

export default React.memo(Hello);
// export default Hello;

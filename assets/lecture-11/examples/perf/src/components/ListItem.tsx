import React from 'react';

import useLogRender from '@/hooks/useLogRender';

import './ListItem.scoped.scss';

interface ListItemProps {
  text: string;
  style?: React.CSSProperties;
  clickCallback: () => void;
}

function ListItem({ text, style, clickCallback }: ListItemProps) {
  useLogRender('ListItem');

  return (
    <li style={style} onClick={clickCallback}>
      {text}
    </li>
  );
}

export default ListItem;

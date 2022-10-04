import React from "react";

import useLogRender from "./hooks/useLogRender";

import Item from "./Item";

interface ListProps {
  things: string[];
  formatCb: (value: string) => string;
}

function List({ things, formatCb }: ListProps) {
  useLogRender(`List rendered: ${things}`);

  return (
    <ul>
      {things.map((value) => (
        <Item key={value} value={formatCb(value)} />
      ))}
    </ul>
  );
}

export default React.memo(List);

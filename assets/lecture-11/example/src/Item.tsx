import React from "react";

import useLogRender from "./hooks/useLogRender";

function Item({ value }: { value: string }) {
  useLogRender("Item");

  return (
    <li>
      <span>{value}</span>
    </li>
  );
}

export default React.memo(Item);

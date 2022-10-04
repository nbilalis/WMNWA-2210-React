import { useEffect } from "react";

function useLogRender(name: string) {
  useEffect(() => {
    console.log(`${name} rendered.`);
  });
}

export default useLogRender;

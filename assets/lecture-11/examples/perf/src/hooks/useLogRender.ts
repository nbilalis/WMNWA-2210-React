import { useEffect, useState } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function useLogRender(name: string) {
  useEffect(() => {
    console.log(`${name} rendered.`);
  });
}

export default useLogRender;

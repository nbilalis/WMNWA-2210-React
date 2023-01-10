import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface HelloProps {
  name: string;
  initialValue?: number;
}

function Hello({ name, initialValue = 0 }: HelloProps) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Clicked {counter} times</p>
      <Box
        sx={{
          display: 'inline-flex',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          gap: 1,
          p: 1,
          m: 1,
        }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Increase
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setCounter((c) => c - 1);
          }}
        >
          Decrease
        </Button>
        <Button
          type="button"
          variant="text"
          onClick={() => {
            setCounter(initialValue);
          }}
        >
          Reset
        </Button>
      </Box>
    </>
  );
}

export default Hello;

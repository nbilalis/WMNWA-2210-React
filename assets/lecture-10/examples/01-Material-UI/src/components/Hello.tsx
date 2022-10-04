import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const initialState = 0;

interface HelloProps {
  name: string;
}

function Hello({ name }: HelloProps) {
  const [counter, setCounter] = useState(initialState);

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>From your React app!</p>
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
            setCounter((counter) => counter + 1);
          }}
        >
          Increase
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setCounter((counter) => counter - 1);
          }}
        >
          Decrease
        </Button>
        <Button
          type="button"
          variant="text"
          onClick={() => {
            setCounter(initialState);
          }}
        >
          Reset
        </Button>
      </Box>
    </>
  );
}

export default Hello;

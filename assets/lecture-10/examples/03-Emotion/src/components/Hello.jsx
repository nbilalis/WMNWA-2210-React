import { useState } from 'react';

import { css } from '@emotion/css';
import styled from '@emotion/styled';

const initialValue = 0;

const mainColor = 'hotpink';
const accentColor = 'whitesmoke';
const depth = 5;
const depress = 2;

// Arrow function that returns JSON object
const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  gap: '.5em',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Tagged template string
const Button = styled.button`
  color: ${(props) => (props.primary ? mainColor : accentColor)};
  background-color: ${(props) => (props.primary ? accentColor : mainColor)};
  padding: 0.25em 1em;
  outline: none;
  border: none;
  border-radius: 0.5em;
  box-shadow: 0 ${depth}px #666;

  &:hover {
    color: ${(props) => (props.primary ? accentColor : mainColor)};
    background-color: ${(props) => (props.primary ? mainColor : accentColor)};
  }

  &:active {
    color: ${(props) => (props.primary ? accentColor : mainColor)};
    background-color: ${(props) => (props.primary ? mainColor : accentColor)};
    box-shadow: 0 ${depth - depress}px #666;
    transform: translateY(${depress}px);
  }
`;

function Hello({ name }) {
  const [counter, setCounter] = useState(initialValue);
  return (
    <>
      <h1>Hello, {name}!</h1>

      <p>From your React app!</p>
      <p>Clicked {counter} times</p>
      <Container>
        <Button
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Increase
        </Button>
        <Button
          primary
          onClick={() => {
            setCounter((c) => c - 1);
          }}
        >
          Decrease
        </Button>
        <button
          type="button"
          className={css`
            padding: 0.25em 1em;
            outline: none;
            border: none;
            background-color: #61dafb;
            border-radius: 4px;
            &:hover {
              color: ${accentColor};
            }
          `}
          onClick={() => {
            setCounter(initialValue);
          }}
        >
          Reset
        </button>
      </Container>
    </>
  );
}

export default Hello;

import { useState } from 'react';

import { css } from '@emotion/css';
import styled from '@emotion/styled';

const mainColor = 'hotpink';
const accentColor = 'whitesmoke';
const depth = 5;
const depress = 2;

interface ViewContainerProps {
  width: string;
}

// Arrow function that returns JSON object
const ViewContainer = styled('div')<ViewContainerProps>(
  {
    color: 'whitesmoke',
    background: '#242830',
    height: '100vh',
    textAlign: 'center',
    padding: '1em',
  },
  (props) => ({
    width: props.width,
  })
);

/* interface ButtonContainerProps {
  column: boolean;
} */

const ButtonContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  gap: '.5em',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
}));

interface ButtonProps {
  primary?: boolean;
}

// Tagged template string
const Button = styled.button<ButtonProps>`
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

interface HelloProps {
  name: string;
  initialValue?: number;
}

function Hello({ name, initialValue = 0 }: HelloProps) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <ViewContainer width="100vw">
      <h1>Hello, {name}!</h1>
      <p>Clicked {counter} times</p>
      <ButtonContainer>
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
      </ButtonContainer>
    </ViewContainer>
  );
}

export default Hello;

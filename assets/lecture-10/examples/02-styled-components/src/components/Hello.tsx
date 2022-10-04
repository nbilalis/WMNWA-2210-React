import { useState } from 'react';

import Button from './Button';
import Link from './Link';

import styled from 'styled-components';

interface HelloProps {
  name: string;
}

const Wrapper = styled.section`
  padding: 1em;
  background: #242830;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

function Hello({ name }: HelloProps) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Wrapper>
        <Title>Hello, {name}!</Title>
        <p>From your React app!</p>
      </Wrapper>

      <p>Clicked {counter} times</p>
      <p>
        <Button
          primary
          onClick={() => {
            setCounter((counter) => counter + 1);
          }}
        >
          Increase
        </Button>
        <Button
          onClick={() => {
            setCounter((counter) => counter - 1);
          }}
        >
          Decrease
        </Button>
        <TomatoButton
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </TomatoButton>
      </p>
      <p>
        <Link>Unstyled, boring Link</Link>
      </p>
      <p>
        <StyledLink>Styled, exciting Link</StyledLink>
      </p>
    </>
  );
}

export default Hello;

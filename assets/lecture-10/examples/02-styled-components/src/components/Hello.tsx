import { useState } from 'react';

import styled from 'styled-components';

import Button from './Button';
import Text from './Text';

const Wrapper = styled.section`
  padding: 1em;
  text-align: center;
  height: 100vh;
  color: whitesmoke;
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

const StyledText = styled(Text)`
  color: palevioletred;
  font-weight: bold;
`;

interface HelloProps {
  name: string;
  initialValue?: number;
}

function Hello({ name, initialValue = 0 }: HelloProps) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <Wrapper>
      <Title>Hello, {name}!</Title>
      <p>Clicked {counter} times</p>
      <p>
        <Button
          primary={counter % 2 === 0}
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Increase
        </Button>
        <Button
          onClick={() => {
            setCounter((c) => c - 1);
          }}
        >
          Decrease
        </Button>
        <TomatoButton
          onClick={() => {
            setCounter(initialValue);
          }}
        >
          Reset
        </TomatoButton>
      </p>
      <Text>Unstyled, boring Link</Text>
      <StyledText>Styled, exciting Link</StyledText>
    </Wrapper>
  );
}

export default Hello;

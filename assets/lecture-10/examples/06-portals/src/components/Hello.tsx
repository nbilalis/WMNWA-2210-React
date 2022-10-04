import { useState } from 'react';

import Modal from './Modal';
import Button from './Button';

import styled from 'styled-components';

import '@/components/Hello.scoped.scss';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: #242830;
`;

interface HelloProps {
  name: string;
}

function Hello({ name }: HelloProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Title>Hello, {name}!</Title>
      </Wrapper>

      <p>From your React app!</p>
      <p>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
      </p>
      <Modal
        message="Did I say hello, already?"
        buttonText="Yes, you did!"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Hello;

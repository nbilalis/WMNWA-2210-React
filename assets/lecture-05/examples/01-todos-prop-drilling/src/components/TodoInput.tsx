import { KeyboardEvent } from 'react';

import useInput from '@/hooks/useInput';

import './TodoInput.scoped.scss';

interface TodoInputProps {
  onEnterPressed: (text: string) => void;
}

function TodoInput({ onEnterPressed }: TodoInputProps) {
  const { value, bind, reset } = useInput('');

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...bind}
      type="text"
      onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && value.length) {
          onEnterPressed(value);
          reset();
        }
      }}
      title="enter todo text…"
      placeholder="enter todo text…"
    />
  );
}

export default TodoInput;

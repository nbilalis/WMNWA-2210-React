import { useState, KeyboardEvent } from 'react';
import { useTodosDispatch } from '../store/TodosProvider';

function TodoInput() {
  const [text, setText] = useState('');
  const { dispatch } = useTodosDispatch();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // If the "Enter" key was pressed and there is a value
    if (e.key === 'Enter' && text.length) {
      // Add a new Todo item
      dispatch({
        type: 'ADD',
        payload: { text },
      });
      // Clear the value of the input element
      setText('');
    }
  };

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.currentTarget.value.trim());
      }}
      onKeyPress={handleKeyPress}
      title="Enter Todo text here"
      placeholder="Enter Todo text here"
    />
  );
}

export default TodoInput;

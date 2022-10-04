import { useState, KeyboardEvent } from 'react';

interface TodoInputProps {
  onEnterPressed: (text: string) => void;
}

function TodoInput({ onEnterPressed }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // If the "Enter" key was pressed and there is a value
    if (e.key === 'Enter' && text.trim().length) {
      // Add a new Todo item
      onEnterPressed(text);
      // Clear the value of the input element
      setText('');
    }
  };

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
      onKeyPress={handleKeyPress}
      title="Enter Todo text here"
      placeholder="Enter Todo text here"
    />
  );
}

export default TodoInput;

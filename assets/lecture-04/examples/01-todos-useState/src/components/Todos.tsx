import { useState, KeyboardEvent, MouseEvent } from 'react';
import { v4 } from 'uuid';

import './Todos.scoped.scss';

interface Todo {
  id: string;
  text: string;
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    // Use currentTarget to get rid of the casting
    // const el = e.target as HTMLInputElement;

    // Get the element that fired the event
    const el = event.currentTarget;
    // Get its value
    const text = el.value.trim();

    const id = v4();

    // If the "Enter" key was pressed and there is a value
    if (event.key === 'Enter' && text.length) {
      // Add a new Todo item
      setTodos((prev) => [...prev, { id, text }]);
      // Clear the value of the input element
      el.value = '';
    }
  };

  // This is an event handler for removing Todos
  const removeTodo = (event: MouseEvent<HTMLButtonElement>) => {
    // Use currentTarget to get rid of the casting
    // const el = e.target as HTMLButtonElement;
    const el = event.currentTarget;
    // Get Todo's id. It was stored in `data-id`.
    const { id } = el.dataset;

    // Filter out the deleted item
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2>Todos: {todos.length ? todos.length : 'none yet'}</h2>
      <input type="text" onKeyPress={addTodo} title="enter todo text here…" placeholder="enter todo text…" />
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button data-id={item.id} type="button" onClick={removeTodo}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

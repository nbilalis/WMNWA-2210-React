import { useState, KeyboardEvent, MouseEvent } from 'react';
import { v4 } from 'uuid';

import './Todos.scss';

interface Todo {
  id: string;
  text: string;
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // This is an event handler for adding Todos
  const addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    // Use currentTarget to get rid of the casting
    // const el = e.target as HTMLInputElement;

    // Get the element that fired the event
    const el = e.currentTarget;
    // Get its value
    const value = el.value.trim();

    // If the "Enter" key was pressed and there is a value
    if (e.key === 'Enter' && value.length) {
      // Add a new Todo item
      setTodos((prev) => [...prev, { id: v4(), text: value }]);
      // Clear the value of the input element
      el.value = '';
    }
  };

  // This is an event handler for removing Todos
  const removeTodo = (e: MouseEvent<HTMLButtonElement>) => {
    // Use currentTarget to get rid of the casting
    // const el = e.target as HTMLButtonElement;
    const el = e.currentTarget;
    // Get Todo's id. It was stored in `data-id`.
    const { id } = el.dataset;
    // Filter out the deleted item
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2>Todos: {todos.length}</h2>
      <input type="text" onKeyPress={addTodo} title="Enter Todo text here" placeholder="Enter Todo text here" />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button data-id={todo.id} type="button" onClick={removeTodo}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

import { useState, useReducer } from 'react';
import { v4 } from 'uuid';

import './Todos.scss';

interface Todo {
  id: string;
  text?: string; // text is optional
}

interface Action {
  type: 'ADD' | 'REMOVE';
  payload: Todo;
}

// The reducer function for the Todos
const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

// This is a controlled component
// Its value is "sync" with the state
function Todos() {
  const [value, setValue] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = () => {
    if (value.length) {
      // Add a new Todo item
      dispatch({
        type: 'ADD',
        payload: { id: v4(), text: value },
      });
      // Clear the value of the input element
      setValue('');
    }
  };

  return (
    <>
      <h2>Todos: {todos.length}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value.trim());
        }}
        title="Enter Todo text here"
        placeholder="Enter Todo text here"
      />
      <button type="button" onClick={addTodo}>
        💾
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'REMOVE', payload: { id: todo.id } });
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

import { useReducer, KeyboardEvent, MouseEvent } from 'react';
import { v4 } from 'uuid';

import './Todos.scoped.scss';

interface Todo {
  id: string;
  text: string;
}

interface Action {
  type: 'ADD' | 'REMOVE';
  payload: Partial<Todo>;
}

// The reducer function for the Todos
const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload as Todo];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    // Get the element that fired the event
    const el = event.currentTarget;
    // Make a new unique id
    const id = v4();
    // Get its value
    const text = el.value.trim();

    // If the "Enter" key was pressed and there is a value
    if (event.key === 'Enter' && text.length) {
      // Dispatch the 'ADD' action
      dispatch({ type: 'ADD', payload: { id, text } });
      // Clear the value of the input element
      el.value = '';
    }
  };

  // This is an event handler for removing Todos
  const removeTodo = (event: MouseEvent<HTMLButtonElement>) => {
    // Get the element that fired the event
    const el = event.currentTarget;
    // Get Todo's id. It was stored in `data-id`.
    const { id } = el.dataset;

    // Dispatch the 'REMOVE' action
    if (id) dispatch({ type: 'REMOVE', payload: { id } });
  };

  return (
    <>
      <h2>Todos: {todos.length ? todos.length : '[none]'}</h2>
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

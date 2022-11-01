import { useReducer, useRef, MouseEvent } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = () => {
    // Get element's value
    const text = inputRef.current?.value;

    // If there is no text, return\
    if (!text) return;

    // Dispatch the 'ADD' action
    dispatch({ type: 'ADD', payload: { id: v4(), text } });

    // Clear the value of the input element
    inputRef.current.value = '';
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
      <div>
        <input ref={inputRef} type="text" title="enter todo text here…" placeholder="enter todo text…" />
        <button type="button" className="add" onClick={addTodo}>
          💾
        </button>
      </div>
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

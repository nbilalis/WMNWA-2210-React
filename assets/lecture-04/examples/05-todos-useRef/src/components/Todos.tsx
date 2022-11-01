import { useReducer, useRef } from 'react';

import { AiFillDelete } from 'react-icons/ai';

import './Todos.scoped.scss';

interface Todo {
  id: number;
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
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  return (
    <>
      <h2>Todos: {todos.length ? todos.length : '[none]'}</h2>
      <div>
        <input
          type="text"
          title="enter todo text here…"
          placeholder="enter todo text…"
          onKeyPress={(e) => {
            const el = e.currentTarget;
            const text = el.value.trim();
            if (e.key === 'Enter' && text) {
              // eslint-disable-next-line no-plusplus
              // Keep ids with `useRef` to avoid re-renders
              dispatch({ type: 'ADD', payload: { id: ++idRef.current, text } });
              el.value = '';
            }
          }}
        />
      </div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id} - {item.text}
            <button
              data-id={item.id}
              type="button"
              onClick={() => {
                dispatch({ type: 'REMOVE', payload: { id: item.id } });
              }}
            >
              <AiFillDelete />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

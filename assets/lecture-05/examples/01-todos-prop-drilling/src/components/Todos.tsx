import { useReducer } from 'react';
import { v4 } from 'uuid';

import Todo from '@/types/Todo';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import './Todos.scoped.scss';

interface Action {
  type: 'ADD' | 'REMOVE' | 'COMPLETE' | 'RESTORE';
  payload: Partial<Todo>;
}

// The reducer function for the Todos
const reducer = (state: readonly Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload as Todo];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id);
    case 'COMPLETE':
      return state.map((item) => (item.id === action.payload.id ? { ...item, completed: true } : item));
    case 'RESTORE':
      return state.map((item) => (item.id === action.payload.id ? { ...item, completed: false } : item));
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h2>Todos: {todos.length ? todos.length : '[none]'}</h2>
      <TodoInput
        onEnterPressed={(text) => {
          dispatch({ type: 'ADD', payload: { id: v4(), text, completed: false } });
        }}
      />
      {todos.some((item) => !item.completed) && (
        <>
          <h3>Pending</h3>
          <TodoList
            todos={todos.filter((item) => !item.completed)}
            onPrimaryButtonPressed={(id) => {
              dispatch({ type: 'COMPLETE', payload: { id } });
            }}
            onSecondaryButtonPressed={(id) => {
              dispatch({ type: 'REMOVE', payload: { id } });
            }}
          />
        </>
      )}
      {todos.some((item) => item.completed) && (
        <>
          <h3>Completed</h3>
          <TodoList
            todos={todos.filter((item) => item.completed)}
            onPrimaryButtonPressed={(id) => {
              dispatch({ type: 'RESTORE', payload: { id } });
            }}
            onSecondaryButtonPressed={(id) => {
              dispatch({ type: 'REMOVE', payload: { id } });
            }}
          />
        </>
      )}
    </>
  );
}

export default Todos;

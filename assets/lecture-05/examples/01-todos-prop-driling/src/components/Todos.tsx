import { useReducer } from 'react';
import { v4 } from 'uuid';

import Todo from '../types/Todo';
import TodoAction from '../types/TodoAction';

import TodosList from './TodosList';
import TodoInput from './TodoInput';

import './Todos.scss';

// The reducer function for the Todos
const reducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: v4(), completed: false }];
    case 'COMPLETE':
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: true } : todo));
    case 'RESTORE':
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: false } : todo));
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h2>Todos: {todos.length}</h2>
      <TodoInput
        onEnterPressed={(text) => {
          dispatch({ type: 'ADD', payload: { text } });
        }}
      />
      {todos.some((todo) => !todo.completed) && (
        <>
          <h3>Pending:</h3>
          <TodosList
            items={todos.filter((todo) => !todo.completed)}
            onButtonPressed={(id) => {
              dispatch({ type: 'COMPLETE', payload: { id } });
            }}
          />
        </>
      )}
      {todos.some((todo) => todo.completed) && (
        <>
          <h3>Completed:</h3>
          <TodosList
            items={todos.filter((todo) => todo.completed)}
            onButtonPressed={(id) => {
              dispatch({ type: 'RESTORE', payload: { id } });
            }}
          />
        </>
      )}
    </>
  );
}

export default Todos;

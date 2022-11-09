import PropTypes from 'prop-types';

import { createContext, useContext, useReducer } from 'react';

import { nanoid } from 'nanoid';

// The reducer function for the Todos
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: nanoid(), text: action.payload.text, completed: false }];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id);
    case 'COMPLETE':
      return state.map((item) => (item.id === action.payload.id ? { ...item, completed: true } : item));
    case 'RESTORE':
      return state.map((item) => (item.id === action.payload.id ? { ...item, completed: false } : item));
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const StateContext = createContext([]);
const DispatchContext = createContext(() => null);

// Convenience hooks to get the todos state and dispatch
const useTodos = () => useContext(StateContext);
const useTodosDispatch = () => useContext(DispatchContext);

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={todos}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodosProvider;

export { useTodos, useTodosDispatch };

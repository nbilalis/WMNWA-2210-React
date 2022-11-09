import {
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';

import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

const StateContext = createContext({});

// Convenience hooks to get the todos state and dispatch
const useTodos = () => useContext(StateContext);

function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((items) => [...items, { id: nanoid(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos((items) => items.filter((todo) => todo.id !== id));
  };

  const setTodoState = (id, completed) => {
    setTodos((items) => items.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const context = useMemo(() => ({
    todos, addTodo, removeTodo, setTodoState,
  }), [todos]);

  return <StateContext.Provider value={context}>{children}</StateContext.Provider>;
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodosProvider;

export { useTodos };

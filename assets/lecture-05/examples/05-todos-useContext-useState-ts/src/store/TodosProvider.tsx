import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { nanoid } from 'nanoid';

import Todo from '@/types/Todo';

interface TodosContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  setTodoState: (id: string, completed: boolean) => void;
}

const StateContext = createContext<TodosContext>({} as TodosContext);

// Convenience hooks to get the todos state and dispatch
const useTodos = () => useContext(StateContext);

interface TodosProviderProps {
  children: ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((items) => [...items, { id: nanoid(), text, completed: false }]);
  };

  const removeTodo = (id: string) => {
    setTodos((items) => items.filter((todo) => todo.id !== id));
  };

  const setTodoState = (id: string, completed: boolean) => {
    setTodos((items) => items.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const context = useMemo<TodosContext>(() => ({ todos, addTodo, removeTodo, setTodoState }), [todos]);

  return <StateContext.Provider value={context}>{children}</StateContext.Provider>;
}

export default TodosProvider;

export { useTodos };

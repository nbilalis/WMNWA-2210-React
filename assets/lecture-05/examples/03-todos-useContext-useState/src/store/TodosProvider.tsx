import { createContext, ReactNode, useState, useContext } from 'react';
import { v4 } from 'uuid';

import Todo from '../types/Todo';

interface TodosContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  setTodoCompleted: (id: string, completed: boolean) => void;
}

// const TodosContext = createContext<TodosContext>({} as TodosContext);
const TodosContext = createContext<TodosContext>({
  todos: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodoCompleted: () => {},
});

const useTodos = () => useContext(TodosContext);

interface TodosProviderProps {
  children: ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((state) => {
      return [...state, { id: v4(), text, completed: false }];
    });
  };

  const setTodoCompleted = (id: string, completed: boolean) => {
    setTodos((state) => {
      return state.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, setTodoCompleted }}>
      {children}
    </TodosContext.Provider>
  );
}

export { useTodos };

export default TodosProvider;

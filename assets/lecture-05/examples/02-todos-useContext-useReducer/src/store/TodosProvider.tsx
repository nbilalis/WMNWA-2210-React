import { createContext, ReactNode, useContext, useReducer } from 'react';
import { v4 } from 'uuid';

import Todo from '../types/Todo';
import TodoAction from '../types/TodoAction';

interface StateContext {
  todos: Todo[];
}

interface DispatchContext {
  dispatch: (action: TodoAction) => void;
}

const DefaultStateContext: StateContext = {
  todos: [],
};

const DefaultDispatchContext: DispatchContext = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
};

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

const StateContext = createContext(DefaultStateContext);
const DispatchContext = createContext(DefaultDispatchContext);

const useTodos = () => useContext(StateContext);
const useTodosDispatch = () => useContext(DispatchContext);

interface TodosProviderProps {
  children: ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StateContext.Provider value={{ todos }}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export { useTodos, useTodosDispatch };

export default TodosProvider;

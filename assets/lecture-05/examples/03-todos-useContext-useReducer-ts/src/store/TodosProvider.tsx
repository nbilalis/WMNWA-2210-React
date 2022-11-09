import { createContext, useContext, useReducer, ReactNode } from 'react';
import { nanoid } from 'nanoid';

import Todo from '@/types/Todo';
import TodoAction from '@/types/TodoAction';

// The reducer function for the Todos
const reducer = (state: readonly Todo[], action: TodoAction) => {
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
      // @ts-expect-error TypeScript assumes thet the default case is unreachable
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const StateContext = createContext<Todo[]>([]);
// OR
// const StateContext = createContext([] as Todo[]);
const DispatchContext = createContext<React.Dispatch<TodoAction>>(() => null);
// OR
// const DispatchContext = createContext<(action: TodoAction) => void>((() => null));
// const DispatchContext = createContext((() => null) as (action: TodoAction) => void);

// Convenience hooks to get the todos state and dispatch
const useTodos = () => useContext(StateContext);
const useTodosDispatch = () => useContext(DispatchContext);

interface TodosProviderProps {
  children: ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={todos}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default TodosProvider;

export { useTodos, useTodosDispatch };

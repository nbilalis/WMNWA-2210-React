/* eslint-disable @typescript-eslint/no-empty-function */

import type { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

import type WatchlistAction from '../types/WatchlistAction';

// Context schema
interface WatchlistContext {
  watchlist: number[];
  dispatch: () => void;
}

// Create the Context
const WatchlistContext = createContext<number[]>([]);
const WatchlistDispatchContext = createContext<(action: WatchlistAction) => void>(() => {});

// Provide custom hooks for accessing the Contexts
const useWatchlist = () => useContext(WatchlistContext);
const useWatchlistDispatch = () => useContext(WatchlistDispatchContext);

// Reducer function
const reducer = (state: number[], action: WatchlistAction) => {
  switch (action.type) {
    case 'ADD':
      return [...new Set([...state, action.payload])];
    case 'REMOVE':
      return state.filter((item) => item !== action.payload);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Component Props schema
interface WatchlistProviderProps {
  children: ReactNode;
}

// WatchlistProvider Component
function WatchlistProvider({ children }: WatchlistProviderProps) {
  // Component/Context State
  const [watchlist, dispatch] = useReducer(reducer, []);

  return (
    <WatchlistDispatchContext.Provider value={dispatch}>
      <WatchlistContext.Provider value={watchlist}>{children}</WatchlistContext.Provider>
    </WatchlistDispatchContext.Provider>
  );
}

// Export (as default) the WatchlistProvider Component
export default WatchlistProvider;

// Export the custom hook
export { useWatchlist, useWatchlistDispatch };

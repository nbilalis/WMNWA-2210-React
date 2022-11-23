import { createContext, ReactNode, useContext, useState, useMemo } from 'react';

// Context schema
interface WatchlistContext {
  watchlist: number[];
  addToWatchlist: (id: number) => void;
  removeFromWatchlist: (id: number) => void;
}

// Create the Context
const WatchlistContext = createContext({} as WatchlistContext);
// Provide a custo hook for accessing the Context
const useWatchlist = () => useContext(WatchlistContext);

// Component Props schema
interface WatchlistProviderProps {
  children: ReactNode;
}

// WatchlistProvider Component
function WatchlistProvider({ children }: WatchlistProviderProps) {
  // Component/Context State
  const [watchlist, setWatchlist] = useState<number[]>([]);

  // Functions to alter the State
  const addToWatchlist = (id: number) => {
    setWatchlist((prev) => [...new Set([...prev, id])]);
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((item) => item !== id));
  };

  const value = useMemo(() => ({ watchlist, addToWatchlist, removeFromWatchlist }), [watchlist]);

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

// Export the custom hook
export { useWatchlist };
// Export (as default) the WatchlistProvider Component
export default WatchlistProvider;

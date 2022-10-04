import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// TypeScript: How to get types from arrays | Steve Holgado - https://tmpl.at/3tCx4nn
const reactionValues = ['👍', '👎', '❤', '💩', '🤔', '🤨', '🐗', '🐍'] as const;
type Reaction = typeof reactionValues[number];

interface ReactionItem {
  reaction: Reaction;
  count: number;
}

interface ReactionsContextValue {
  reactions: ReactionItem[];
  addReaction: (reaction: Reaction) => void;
  removeReaction: (reaction: Reaction) => void;
}

const ReactionsContext = createContext<ReactionsContextValue>({} as ReactionsContextValue);
const useReactions = () => useContext(ReactionsContext);

interface ReactionsProviderProps {
  children: React.ReactNode;
}

function ReactionsProvider({ children }: ReactionsProviderProps) {
  const [reactions, setReactions] = useState<ReactionItem[]>([]);

  const addReaction = useCallback((reaction: Reaction) => {
    setReactions((prev) =>
      prev.some((item) => item.reaction === reaction)
        ? prev.map((item) =>
            item.reaction === reaction ? { reaction, count: item.count + 1 } : item
          )
        : [...prev, { reaction, count: 1 }]
    );
  }, []);

  const removeReaction = useCallback((reaction: Reaction) => {
    setReactions((prev) =>
      prev.some((item) => item.reaction === reaction && item.count > 1)
        ? prev.map((item) =>
            item.reaction === reaction ? { reaction, count: item.count - 1 } : item
          )
        : prev.filter((item) => item.reaction !== reaction)
    );
  }, []);

  const value = useMemo(
    () => ({ reactions, addReaction, removeReaction }),
    [reactions, addReaction, removeReaction]
  ) as ReactionsContextValue;

  return <ReactionsContext.Provider value={value}>{children}</ReactionsContext.Provider>;
}

export { reactionValues, useReactions };

export default ReactionsProvider;

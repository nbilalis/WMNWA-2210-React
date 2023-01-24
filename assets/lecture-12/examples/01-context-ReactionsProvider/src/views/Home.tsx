import { reactionValues, useReactions } from '@/store/ReactionsProvider';

import './Home.scoped.scss';

function Home() {
  const { reactions, addReaction, removeReaction } = useReactions();

  return (
    <>
      <h1>Home</h1>
      <p>Rate this app with the buttons bellow:</p>
      <p>
        {reactionValues.map((reaction) => (
          <button
            key={reaction}
            type="button"
            onClick={() => {
              addReaction(reaction);
            }}
            onContextMenu={(e) => {
              removeReaction(reaction);
              e.preventDefault();
            }}
          >
            {reaction}
          </button>
        ))}
      </p>
      <p>
        {reactions.map((item) => (
          <span key={item.reaction}>
            {item.reaction} {item.count}
          </span>
        ))}
      </p>
    </>
  );
}

export default Home;

import { useState } from 'react';

import Star from './Star';

function StarRating({ initialRating = 0, totalStars = 5 }) {
  const [rating, setRating] = useState(initialRating);

  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          on={index < rating}
          clickHandler={() => {
            setRating(index + 1);
          }}
          key={index}
        />
      ))}
    </>
  );
}

export default StarRating;

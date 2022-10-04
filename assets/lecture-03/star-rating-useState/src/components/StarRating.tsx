import { useState } from 'react';
import Star from './Star';

function StarRating() {
  const [rating, setRating] = useState(2);

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          on={index < rating}
          onSelect={() => {
            setRating(index + 1);
          }}
        />
      ))}
    </div>
  );
}

export default StarRating;

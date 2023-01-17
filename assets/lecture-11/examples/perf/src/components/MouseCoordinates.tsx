import { useState } from 'react';

interface MouseCoordinatesProps {
  children: React.ReactNode;
}

function MouseCoordinates({ children }: MouseCoordinatesProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        setCoords({ x: e.clientX, y: e.clientY });
      }}
    >
      {children}
      <br />
      <div>{`x: ${coords.x}, y: ${coords.y}`}</div>
    </div>
  );
}

export default MouseCoordinates;

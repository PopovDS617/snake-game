import { useEffect, useState } from 'react';
import { directions } from '../../utils/board';

const useControlButtons = () => {
  const [currentDirection, setCurrentDirection] = useState(directions.right);

  useEffect(() => {
    const changeDirection = ({ key }: KeyboardEvent) => {
      switch (key) {
        case 'ArrowRight':
          setCurrentDirection(directions.right);
          break;
        case 'ArrowDown':
          setCurrentDirection(directions.down);
          break;
        case 'ArrowLeft':
          setCurrentDirection(directions.left);
          break;
        case 'ArrowUp':
          setCurrentDirection(directions.up);
          break;
      }
    };

    document.addEventListener('keydown', changeDirection);

    return () => {
      document.removeEventListener('keydown', changeDirection);
    };
  }, [currentDirection]);

  return currentDirection;
};

export default useControlButtons;

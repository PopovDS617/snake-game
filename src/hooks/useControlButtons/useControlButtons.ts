import { useEffect, useState } from 'react';
import { directions } from '../../utils/board';

const useControlButtons = () => {
  const [currentDirection, setCurrentDirection] = useState(directions.right);

  useEffect(() => {
    const changeDirection = ({ key }: KeyboardEvent) => {
      if (key === 'ArrowRight' && currentDirection !== directions.left) {
        setCurrentDirection(directions.right);
      }
      if (key === 'ArrowLeft' && currentDirection !== directions.right) {
        setCurrentDirection(directions.left);
      }
      if (key === 'ArrowDown' && currentDirection !== directions.up) {
        setCurrentDirection(directions.down);
      }
      if (key === 'ArrowUp' && currentDirection !== directions.down) {
        setCurrentDirection(directions.up);
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

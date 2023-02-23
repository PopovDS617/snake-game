import { useEffect, useState } from 'react';
import { directions } from '../../utils/board';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { snakeActions } from '../../store/snake/snakeSlice';

const useControlButtons = () => {
  const [currentDirection, setCurrentDirection] = useState(directions.right);

  const hasFailed = useAppSelector((state) => state.snake.hasFailed);
  const { setFailed } = snakeActions;
  const dispatch = useAppDispatch();

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
    if (key === 'Enter') {
      dispatch(setFailed(false));
    }
  };
  useEffect(() => {
    if (hasFailed) {
      setCurrentDirection(directions.right);
    }
    document.addEventListener('keydown', changeDirection);

    return () => {
      document.removeEventListener('keydown', changeDirection);
    };
  }, [currentDirection, hasFailed]);

  return currentDirection;
};

export default useControlButtons;

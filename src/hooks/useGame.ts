import { useEffect } from 'react';
import useFood from './useFood/useFood';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { snakeActions } from '../store/snake/snakeSlice';
import useSlither from './useSlither/useSlither';
import { directions } from '../utils/board';

const useGame = () => {
  const dispatch = useAppDispatch();

  // state
  const coordinates = useAppSelector((state) => state.snake.coordinates);

  // auxiliary hooks
  const { foodPosition, generateRandomFoodPosition } = useFood();
  const { moveSnake } = useSlither();

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, [coordinates, directions]);

  return {
    foodPosition,
    coordinates,
  };
};

export default useGame;

import { useEffect } from 'react';
import useFood from './useFood/useFood';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { snakeActions } from '../store/snake/snakeSlice';

const useGame = () => {
  const { foodPosition, generateRandomFoodPosition } = useFood();

  return {
    foodPosition,
  };
};

export default useGame;

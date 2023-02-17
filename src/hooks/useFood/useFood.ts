import { useAppSelector } from '../../store/store-hooks';
import { useState, useCallback } from 'react';
import { getRandomPosition } from './use-food-utils';

const useFood = () => {
  const coordinates = useAppSelector((state) => state.snake.coordinates);
  const [foodPosition, setFoodPosition] = useState<number>(
    getRandomPosition(coordinates)
  );

  const generateRandomFoodPosition = useCallback(() => {
    const randomCoordinate = getRandomPosition(coordinates);
    setFoodPosition(randomCoordinate);
  }, [coordinates]);

  return {
    foodPosition,
    generateRandomFoodPosition,
  };
};

export default useFood;

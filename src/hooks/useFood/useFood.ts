import { useAppSelector } from '../../store/hooks';
import { useState, useCallback } from 'react';
import { Coordinates } from '../../models/snake-types';
import { board } from '../../utils/board';

export const getRandomPosition = (coordinates: Coordinates): number => {
  const freeCoordinates = board.filter((item) => !coordinates.includes(item));
  const randomFreeCoordinate = Math.floor(
    Math.random() * freeCoordinates.length
  );
  return freeCoordinates[randomFreeCoordinate];
};

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

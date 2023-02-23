import { useEffect, useCallback } from 'react';
import useFood from './useFood/useFood';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { snakeActions } from '../store/snake/snakeSlice';
import useSlither from './useSlither/useSlither';
import { directions } from '../utils/board';
import useHitBorder from './useHitBorder/useHitBorder';
import useHitItself from './useHitItself/useHitItself';
import { getNewCoordinates } from '../hooks/useSlither/use-slither-utils';
import useControlButtons from './useControlButtons/useControlButtons';
import { initialSnakeCoordinates } from '../models/snake-types';

const useGame = () => {
  const dispatch = useAppDispatch();
  const { setCoordinates, incrementScore, clearCurrentScore } = snakeActions;

  // state
  const coordinates = useAppSelector((state) => state.snake.coordinates);
  const hasFailed = useAppSelector((state) => state.snake.hasFailed);

  // auxiliary hooks
  const { foodPosition, generateRandomFoodPosition } = useFood();
  const { moveSnake } = useSlither();
  const currentDirection = useControlButtons();
  // check for failure
  useHitBorder(currentDirection);
  useHitItself();

  // eat food and grow in size
  const growLarger = useCallback(() => {
    const newCoordinates = getNewCoordinates(coordinates, currentDirection);

    dispatch(setCoordinates(newCoordinates));
  }, [currentDirection, coordinates]);

  useEffect(() => {
    const snakeHead = coordinates[coordinates.length - 1];

    if (snakeHead === foodPosition) {
      dispatch(incrementScore());
      growLarger();
      generateRandomFoodPosition();
    }
  }, [coordinates, foodPosition]);

  //regular movement
  useEffect(() => {
    console.log(coordinates);
    if (!hasFailed) {
      const interval = setInterval(() => {
        moveSnake();
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }
  }, [coordinates, directions]);

  //back to default
  useEffect(() => {
    console.log(currentDirection);
    if (!hasFailed) {
      generateRandomFoodPosition();
      dispatch(setCoordinates(initialSnakeCoordinates));
      dispatch(clearCurrentScore());
    }
  }, [hasFailed]);

  return {
    foodPosition,
    coordinates,
  };
};

export default useGame;

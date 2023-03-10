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

const useGame = () => {
  const dispatch = useAppDispatch();
  const {
    setCoordinates,
    incrementScore,
    clearCurrentScore,
    increaseSpeed,
    resetSpeed,
    resetCoordinates,
  } = snakeActions;

  // state
  const { coordinates, hasFailed, score, speed, isInitial } = useAppSelector(
    (state) => state.snake
  );

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
    dispatch(increaseSpeed());
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
    if (!hasFailed && !isInitial) {
      const interval = setInterval(() => {
        moveSnake();
      }, speed);

      return () => {
        clearInterval(interval);
      };
    }
  }, [coordinates, directions, hasFailed, isInitial]);

  //back to default
  useEffect(() => {
    if (!hasFailed && !isInitial) {
      generateRandomFoodPosition();
      dispatch(resetSpeed());
      dispatch(resetCoordinates());
      dispatch(clearCurrentScore());
    }
  }, [hasFailed]);

  return {
    foodPosition,
    coordinates,
    score,
  };
};

export default useGame;

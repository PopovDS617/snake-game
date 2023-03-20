import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { snakeActions } from '../../store/snake/snakeSlice';
import { useCallback } from 'react';
import { moveSnakeForward } from '../useSlither/use-slither-utils';
import useControlButtons from '../useControlButtons/useControlButtons';

const useSlither = () => {
  const dispatch = useAppDispatch();
  const { setCoordinates } = snakeActions;

  // state
  const coordinates = useAppSelector((state) => state.snake.coordinates);

  // auxiliary hooks
  const currentDirection = useControlButtons();

  const changeCoordinates = useCallback(
    (direction: number) => {
      const newCoordinates = moveSnakeForward(coordinates, currentDirection);

      dispatch(setCoordinates(newCoordinates));
    },
    [currentDirection, coordinates]
  );

  const moveSnake = useCallback(() => {
    changeCoordinates(currentDirection);
  }, [currentDirection, changeCoordinates]);

  return { moveSnake };
};

export default useSlither;

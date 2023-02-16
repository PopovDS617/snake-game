import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { snakeActions } from '../../store/snake/snakeSlice';
import { useCallback } from 'react';
import {
  getDirection,
  getNewCoordinates,
  moveSnakeForward,
} from '../useSlither/use-slither-utils';
import { directions } from '../../utils/board';

const useSlither = () => {
  const dispatch = useAppDispatch();
  const { setCoordinates } = snakeActions;

  // state
  const coordinates = useAppSelector((state) => state.snake.coordinates);

  const changeCoordinates = useCallback(
    (direction: number) => {
      const newCoordinates = moveSnakeForward(coordinates, directions.right);

      dispatch(setCoordinates(newCoordinates));
    },
    [directions, coordinates]
  );

  const moveSnake = useCallback(() => {
    changeCoordinates(directions.right);
  }, [directions, changeCoordinates]);

  return { moveSnake };
};

export default useSlither;

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { snakeActions } from '../../store/snake/snakeSlice';
import {
  isHitVerticalBorder,
  isHitHorizontalBorder,
} from './use-hit-border-utils';

const useHitBorder = () => {
  const dispatch = useAppDispatch();
  const { setFailed, setCoordinates } = snakeActions;

  // state
  const coordinates = useAppSelector((state) => state.snake.coordinates);

  useEffect(() => {
    const currCoordinate = coordinates[coordinates.length - 1];

    const isHitVertical = isHitVerticalBorder(currCoordinate);
    const isHitHorizontal = isHitHorizontalBorder(currCoordinate);

    if (isHitVertical || isHitHorizontal) {
      dispatch(setFailed(true));
      dispatch(setCoordinates([0, 1, 2, 3]));
    }
  }, [coordinates]);
};

export default useHitBorder;

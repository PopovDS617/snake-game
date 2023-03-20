import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { snakeActions } from '../../store/snake/snakeSlice';

const useHitItself = () => {
  const dispatch = useAppDispatch();

  const coordinates = useAppSelector((state) => state.snake.coordinates);
  const { setFailed } = snakeActions;

  useEffect(() => {
    const snakeHead = coordinates[coordinates.length - 1];

    const snakeBody = [...coordinates.slice(0, -1)];

    const isHitItself = snakeBody.some((bodyPart) => bodyPart === snakeHead);

    if (isHitItself) {
      dispatch(setFailed(true));
    }
  }, [coordinates]);
};

export default useHitItself;

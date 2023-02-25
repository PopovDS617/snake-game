import { useEffect, useState } from 'react';
import { snakeActions } from '../../store/snake/snakeSlice';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { directions } from '../../utils/board';

import { controlsActions } from '../../store/controls/controlsSlice';

const useControlButtons = () => {
  const [currentDirection, setCurrentDirection] = useState(directions.right);

  const { hasFailed, isInitial } = useAppSelector((state) => state.snake);
  const { setFailed, setInitial } = snakeActions;
  const { setPressedButton } = controlsActions;
  const dispatch = useAppDispatch();

  const changeDirection = ({ key }: KeyboardEvent) => {
    if (key === 'ArrowRight' && currentDirection !== directions.left) {
      setCurrentDirection(directions.right);
      dispatch(setPressedButton('ArrowRight'));
    }
    if (key === 'ArrowLeft' && currentDirection !== directions.right) {
      setCurrentDirection(directions.left);
      dispatch(setPressedButton('ArrowLeft'));
    }
    if (key === 'ArrowDown' && currentDirection !== directions.up) {
      setCurrentDirection(directions.down);
      dispatch(setPressedButton('ArrowDown'));
    }
    if (key === 'ArrowUp' && currentDirection !== directions.down) {
      setCurrentDirection(directions.up);
      dispatch(setPressedButton('ArrowUp'));
    }
    if (key === 'Enter') {
      if (isInitial) {
        dispatch(setInitial(false));
      }

      dispatch(setFailed(false));

      dispatch(setPressedButton('Enter'));
    }
  };

  useEffect(() => {
    if (hasFailed) {
      setCurrentDirection(directions.right);
    }
    document.addEventListener('keydown', changeDirection);

    return () => {
      document.removeEventListener('keydown', changeDirection);
    };
  }, [currentDirection, hasFailed]);

  return currentDirection;
};

export default useControlButtons;

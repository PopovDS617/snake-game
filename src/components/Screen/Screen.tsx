import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';
import useGame from '../../hooks/useGame';
import { setStyles } from './screen-utils';
import Modal from '../Modal/Modal';
import { useAppSelector } from '../../store/store-hooks';

const Screen = () => {
  const { coordinates, foodPosition, score } = useGame();
  const { isInitial, hasFailed } = useAppSelector((state) => state.snake);

  return (
    <div className="screen">
      {hasFailed || isInitial ? (
        <Modal score={score} />
      ) : (
        <div className="board">
          {board.map((item, index) => {
            const style = setStyles({
              index,
              foodPosition,
              coordinates,
              hasFailed,
            });

            return <div key={index} className={style} />;
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(Screen);

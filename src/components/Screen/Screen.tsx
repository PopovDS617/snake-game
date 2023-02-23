import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';
import useGame from '../../hooks/useGame';
import { setStyles } from './screen-utils';
import Modal from '../Modal/Modal';

const Screen = () => {
  const { coordinates, foodPosition, hasFailed, score } = useGame();

  return (
    <div className="screen">
      {hasFailed ? (
        <Modal score={score} />
      ) : (
        <div className="board">
          {board.map((item, index) => {
            const color = setStyles({
              index,
              foodPosition,
              coordinates,
              hasFailed,
            });

            return <div key={index} style={{ background: color }} />;
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(Screen);

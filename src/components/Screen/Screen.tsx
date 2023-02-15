import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';
import useGame from '../../hooks/useGame';
import { setStyles } from './screen-utils';

const Screen = () => {
  const { foodPosition } = useGame();

  return (
    <div className="screen">
      {board.map((item, index) => {
        const color = setStyles({ index, foodPosition });

        return <div key={index} style={{ background: color }} />;
      })}
    </div>
  );
};

export default Screen;

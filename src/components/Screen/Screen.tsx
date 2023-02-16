import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';
import useGame from '../../hooks/useGame';
import { setStyles } from './screen-utils';

const Screen = () => {
  const { coordinates, foodPosition } = useGame();

  return (
    <div className="screen">
      {board.map((item, index) => {
        const color = setStyles({ index, foodPosition, coordinates });

        return <div key={index} style={{ background: color }} />;
      })}
    </div>
  );
};

export default Screen;

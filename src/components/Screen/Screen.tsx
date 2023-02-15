import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';

const Screen = () => {
  return (
    <div className="screen">
      {board.map((item, index) => {
        return <div key={index} />;
      })}
    </div>
  );
};

export default Screen;

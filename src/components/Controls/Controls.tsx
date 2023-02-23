import React from 'react';
import Button from '../Button/Button';
import { turnHandler } from '../../hooks/useControlButtons/control-buttons-class';
import { DirectionButtons } from '../../enums/DirectionButtons';

const Controls = () => {
  return (
    <div>
      <Button
        content="left"
        onTurn={turnHandler.bind(null, DirectionButtons.Left)}
      />

      <Button
        content="up"
        onTurn={turnHandler.bind(null, DirectionButtons.Up)}
      />
      <Button
        content="right"
        onTurn={turnHandler.bind(null, DirectionButtons.Right)}
      />
      <Button
        content="down"
        onTurn={turnHandler.bind(null, DirectionButtons.Down)}
      />
      <Button
        content="enter"
        onTurn={turnHandler.bind(null, DirectionButtons.Space)}
      />
    </div>
  );
};

export default Controls;

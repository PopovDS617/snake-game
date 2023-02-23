import React from 'react';
import { turnHandler } from '../../hooks/useControlButtons/control-buttons-class';
import Button from './Button';
import { DirectionButtons } from '../../enums/DirectionButtons';
import './controls.scss';

const DirectionControls = () => {
  return (
    <>
      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-vertical"
            direction="↑"
            onTurn={turnHandler.bind(null, DirectionButtons.Up)}
          />
        </div>
      </div>
      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-horizontal"
            direction="←"
            onTurn={turnHandler.bind(null, DirectionButtons.Left)}
          />
        </div>
        <div className="button-container">
          <Button
            variant="direction-button-horizontal"
            direction="→"
            onTurn={turnHandler.bind(null, DirectionButtons.Right)}
          />
        </div>
      </div>

      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-vertical"
            direction="↓"
            onTurn={turnHandler.bind(null, DirectionButtons.Down)}
          />
        </div>
      </div>
    </>
  );
};

export default DirectionControls;

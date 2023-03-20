import React from 'react';
import { turnHandler } from '../../hooks/useControlButtons/use-control-buttons-utils';
import { Button } from './Button';
import { DirectionButtons } from '../../enums/DirectionButtons';
import './controls.scss';

export const DirectionControls = () => {
  return (
    <>
      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-vertical"
            direction="↑"
            bindedButton="ArrowUp"
            onTurn={turnHandler.bind(null, DirectionButtons.Up)}
          />
        </div>
      </div>
      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-horizontal"
            direction="←"
            bindedButton="ArrowLeft"
            onTurn={turnHandler.bind(null, DirectionButtons.Left)}
          />
        </div>
        <div className="button-container">
          <Button
            variant="direction-button-horizontal"
            direction="→"
            bindedButton="ArrowRight"
            onTurn={turnHandler.bind(null, DirectionButtons.Right)}
          />
        </div>
      </div>

      <div className="button-row">
        <div className="button-container">
          <Button
            variant="direction-button-vertical"
            direction="↓"
            bindedButton="ArrowDown"
            onTurn={turnHandler.bind(null, DirectionButtons.Down)}
          />
        </div>
      </div>
    </>
  );
};

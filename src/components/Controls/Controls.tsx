import React from 'react';
import Button from './Button';
import { turnHandler } from '../../hooks/useControlButtons/control-buttons-class';
import { DirectionButtons } from '../../enums/DirectionButtons';
import './controls.scss';
import DirectionControls from './DirectionControls';
import { useAppSelector } from '../../store/store-hooks';

const Controls = () => {
  const hasFailed = useAppSelector((state) => state.snake.hasFailed);

  return (
    <div className="controls-container">
      {hasFailed ? (
        <div className="button-row">
          <div className="button-container">
            <Button
              variant="start-button"
              direction="Start"
              onTurn={turnHandler.bind(null, DirectionButtons.Enter)}
            />
          </div>
        </div>
      ) : (
        <DirectionControls />
      )}
    </div>
  );
};

export default Controls;

import React from 'react';
import Button from './Button';
import { turnHandler } from '../../hooks/useControlButtons/use-control-buttons-utils';
import { DirectionButtons } from '../../enums/DirectionButtons';
import './controls.scss';
import DirectionControls from './DirectionControls';
import { useAppSelector } from '../../store/store-hooks';
import { buttonNameHandler } from '../../utils/button-names';

const Controls = () => {
  const hasFailed = useAppSelector((state) => state.snake.hasFailed);

  return (
    <div className="controls-container">
      {hasFailed ? (
        <div className="button-row">
          <div className="button-container">
            <Button
              variant="start-button"
              direction={buttonNameHandler('start', 'Enter')}
              bindedButton="Enter"
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

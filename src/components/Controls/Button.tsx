import React, { useState, useEffect } from 'react';
import './controls.scss';
import { useAppSelector } from '../../store/store-hooks';

interface Props {
  direction: string;
  onTurn: () => void;
  variant: string;
  bindedButton: string | null;
}

const Button = (props: Props) => {
  const [isButtonActive, setIsButtonAcitve] = useState(false);

  const pressedButton = useAppSelector((state) => state.controls.pressedButton);

  const activeStyleHandler = () => {
    setIsButtonAcitve(true);
    setTimeout(() => {
      setIsButtonAcitve(false);
    }, 120);
  };

  useEffect(() => {
    if (props.bindedButton === pressedButton) {
      activeStyleHandler();
    }
  }, [pressedButton]);

  return (
    <button
      onClick={props.onTurn}
      className={`control-button ${props.variant} ${
        isButtonActive ? 'button-active' : ''
      }`}
    >
      <span>{props.direction}</span>
    </button>
  );
};

export default Button;

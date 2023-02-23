import React from 'react';
import './controls.scss';

interface Props {
  direction: string;
  onTurn: () => void;
  variant: string;
}

const Button = (props: Props) => {
  return (
    <button
      className={`control-button ${props.variant}`}
      onClick={props.onTurn}
    >
      <span>{props.direction}</span>
    </button>
  );
};

export default Button;

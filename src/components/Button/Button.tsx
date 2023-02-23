import React from 'react';

interface Props {
  content: string;
  onTurn: () => void;
}

const Button = (props: Props) => {
  return (
    <button className="control-button" onClick={props.onTurn}>
      <span>{props.content}</span>
    </button>
  );
};

export default Button;

import React from 'react';

interface Props {
  content: string;
}

const Button = (props: Props) => {
  return (
    <button className="control-button">
      <span>{props.content}</span>
    </button>
  );
};

export default Button;

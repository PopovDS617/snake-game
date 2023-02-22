import React from 'react';
import { useAppSelector } from '../../store/store-hooks';

const CurrentScore = () => {
  const currentScore = useAppSelector((state) => state.snake.score);

  return <div>CurrentScore is {currentScore}</div>;
};

export default CurrentScore;

import React from 'react';
import { useAppSelector } from '../../store/store-hooks';

type Props = {};

const BestScore = (props: Props) => {
  const bestScore = useAppSelector((state) => state.snake.bestScore);

  return <div>BestScore is {bestScore}</div>;
};

export default BestScore;

import React from 'react';
import { useAppSelector } from '../../store/store-hooks';

const CurrentScore = ({ currentScore }: { currentScore: number }) => {
  return <div>CurrentScore is {currentScore}</div>;
};

export default CurrentScore;

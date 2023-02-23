import React from 'react';
import { useAppSelector } from '../../store/store-hooks';

const CurrentScore = ({ currentScore }: { currentScore: number }) => {
  return <div className="score-indicator">current score: {currentScore}</div>;
};

export default CurrentScore;

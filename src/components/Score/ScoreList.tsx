import { CurrentScore } from './CurrentScore';
import { BestScore } from './BestScore';
import { useAppSelector } from '../../store/store-hooks';
import './score.scss';

const ScoreList = () => {
  const {
    score: currentScore,
    bestScore,
    hasFailed,
  } = useAppSelector((state) => state.snake);

  return (
    <div className="score-container">
      <CurrentScore currentScore={currentScore} />
      <BestScore bestScore={bestScore} />
    </div>
  );
};

export default ScoreList;

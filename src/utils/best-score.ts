export const saveBestScore = (score: number) => {
  localStorage.setItem('bestScore', score.toString());
};

export const getBestScore = () => {
  const savedBestScore = localStorage.getItem('bestScore');
  if (savedBestScore) {
    return +savedBestScore;
  }
};

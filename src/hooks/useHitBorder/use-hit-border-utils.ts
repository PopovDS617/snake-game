import { board } from '../../utils/board';

export const isHitVerticalBorder = (
  currCoordinate: number,
  currentDirection: number
) => {
  if (currentDirection === 1 && currCoordinate % 10 === 0) {
    return true;
  }
  if (currentDirection === -1 && (currCoordinate + 1) % 10 === 0) {
    console.log(currCoordinate);
    return true;
  }

  return false;
};

export const isHitHorizontalBorder = (currCoordinate: number) => {
  if (board[currCoordinate] === undefined) {
    return true;
  }

  return false;
};

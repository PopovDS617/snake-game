import { board } from '../../utils/board';

export const isHitVerticalBorder = (
  currCoordinate: number,
  prevCoordinate: number
) => {
  if (currCoordinate % 10 === 0 && prevCoordinate % 3 === 2) {
    return true;
  }
  if (prevCoordinate % 10 === 0 && currCoordinate % 3 === 2) {
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

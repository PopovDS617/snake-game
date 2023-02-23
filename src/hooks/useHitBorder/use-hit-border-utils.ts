import { board } from '../../utils/board';

export const isHitVerticalBorder = (
  currCoordinate: number,
  currentDirection: number,
  prevCoordinate: number
) => {
  if (currCoordinate % 12 === 0 && prevCoordinate % 3 === 2) {
    return true;
  }

  if (prevCoordinate % 12 === 0 && currCoordinate % 3 === 2) {
    return true;
  }

  // if (
  //   currentDirection === 1 &&
  //   [9, 19, 29, 39, 49, 59, 69, 79, 89, 99].includes(currCoordinate)
  // ) {
  //   return true;
  // }
  // if (
  //   currentDirection === -1 &&
  //   [10, 20, 30, 40, 50, 60, 70, 80, 90].includes(currCoordinate)
  // ) {
  //   return true;
  // }

  return false;
};

export const isHitHorizontalBorder = (currCoordinate: number) => {
  if (board[currCoordinate] === undefined) {
    return true;
  }

  return false;
};

import { board } from '../../utils/board';

export const isHitVerticalBorder = (currCoordinate: number) => {
  if (currCoordinate % 10 === 0) {
    console.log('hit wall');
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

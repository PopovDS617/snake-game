import { Directions } from '../models/movement-types';

const boardSize = 144;

export const board: Array<number> = [...Array(boardSize)].map((el, i) => i);

export const directions: Directions = {
  up: -12,
  right: 1,
  down: 12,
  left: -1,
};

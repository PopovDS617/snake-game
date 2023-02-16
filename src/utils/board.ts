import { Directions } from '../models/movement-types';

const boardSize = 100;

export const board: Array<number> = [...Array(boardSize)].map((el, i) => i);

export const directions: Directions<number> = {
  up: -10,
  right: 1,
  down: 10,
  left: -1,
};

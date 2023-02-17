import { board } from '../../utils/board';
import { Coordinates } from '../../models/snake-types';

export const getRandomPosition = (coordinates: Coordinates): number => {
  const freeCoordinates = board.filter((item) => !coordinates.includes(item));
  const randomFreeCoordinate = Math.floor(
    Math.random() * freeCoordinates.length
  );
  return freeCoordinates[randomFreeCoordinate];
};

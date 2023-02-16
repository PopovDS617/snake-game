import { Coordinates } from '../../models/snake-types';
import { directions } from '../../utils/board';

export const getDirection = (dir: number) => {
  return directions[dir];
};

export const getNewCoordinates = (
  coordinates: Coordinates,
  direction: number
) => {
  const currentPosition = coordinates.length - 1;
  const newPosition = coordinates[currentPosition] + direction;

  return [...coordinates, newPosition];
};

export const moveSnakeForward = (
  coordinates: Coordinates,
  direction: number
) => {
  const snakeBody = [...coordinates.slice(1)];
  const prevCoordinate = snakeBody.length - 1;
  const nextCoordinate = snakeBody[prevCoordinate] + direction;

  return [...snakeBody, nextCoordinate];
};

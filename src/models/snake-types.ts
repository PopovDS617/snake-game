export type Coordinates = number[];

export const initialSnakeCoordinates = [0, 1, 2, 3];

interface SnakeState {
  coordinates: Coordinates;
  score: number;
  hasFailed: boolean;
}

export default SnakeState;

export type Coordinates = number[];

interface SnakeState {
  coordinates: Coordinates;
  score: number;
  bestScore: number;
  hasFailed: boolean;
  speed: number;
}

export default SnakeState;

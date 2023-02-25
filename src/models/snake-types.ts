export type Coordinates = number[];

interface SnakeState {
  isInitial: boolean;
  coordinates: Coordinates;
  score: number;
  bestScore: number;
  hasFailed: boolean;
  speed: number;
}

export default SnakeState;

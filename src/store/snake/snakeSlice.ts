import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBestScore, saveBestScore } from '../../utils/best-score';
import SnakeState, { Coordinates } from '../../models/snake-types';
import { initialSnakeCoordinates, initialSpeed } from '../../utils/initial';

const initialState: SnakeState = {
  isInitial: true,
  coordinates: initialSnakeCoordinates,
  score: 0,
  bestScore: getBestScore() ?? 0,
  hasFailed: true,
  speed: initialSpeed,
};

const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    setInitial(state, action: PayloadAction<boolean>) {
      state.isInitial = action.payload;
    },
    setCoordinates(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
    resetCoordinates(state): void {
      state.coordinates = initialSnakeCoordinates;
    },
    setFailed(state, action: PayloadAction<boolean>) {
      state.hasFailed = action.payload;
    },
    incrementScore(state: SnakeState): void {
      state.score += 1;
      if (state.score > state.bestScore) {
        state.bestScore = state.score;
        saveBestScore(state.score);
      }
    },
    increaseSpeed(state: SnakeState): void {
      if (state.speed >= 50) {
        state.speed -= 10;
      }
    },
    resetSpeed(state: SnakeState): void {
      state.speed = initialSpeed;
    },

    clearCurrentScore(state) {
      state.score = 0;
    },
  },
});
export const snakeActions = snakeSlice.actions;
export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SnakeState, { Coordinates } from '../../models/snake-types';
import { initialSnakeCoordinates, initialSpeed } from '../../utils/initial';

const initialState: SnakeState = {
  coordinates: initialSnakeCoordinates,
  score: 0,
  bestScore: 0,
  hasFailed: false,
  speed: initialSpeed,
};

const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    setCoordinates(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
    resetCoordinates<ActionCreatorWithoutPayload>(state: SnakeState): void {
      state.coordinates = initialSnakeCoordinates;
    },
    setFailed(state, action: PayloadAction<boolean>) {
      state.hasFailed = action.payload;
    },
    incrementScore<ActionCreatorWithoutPayload>(state: SnakeState): void {
      state.score += 1;
    },
    increaseSpeed<ActionCreatorWithoutPayload>(state: SnakeState): void {
      state.speed -= 10;
    },
    resetSpeed<ActionCreatorWithoutPayload>(state: SnakeState): void {
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

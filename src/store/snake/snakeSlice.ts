import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SnakeState, {
  initialSnakeCoordinates,
  Coordinates,
} from '../../models/snake-types';

const initialState: SnakeState = {
  coordinates: initialSnakeCoordinates,
  score: 0,
  bestScore: 0,
  hasFailed: false,
};

const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    setCoordinates(state, action: PayloadAction<Coordinates>) {
      state.coordinates = action.payload;
    },
    setFailed(state, action: PayloadAction<boolean>) {
      state.hasFailed = action.payload;
    },
    incrementScore<ActionCreatorWithoutPayload>(state: SnakeState): void {
      state.score += 1;
    },
    clearCurrentScore(state) {
      state.score = 0;
    },
  },
});
export const snakeActions = snakeSlice.actions;
export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;

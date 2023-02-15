import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SnakeState, {
  defaultCoordinates,
  Coordinates,
} from '../../models/snake-types';

const initialState: SnakeState = {
  coordinates: defaultCoordinates,
  score: 0,

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
    incrementScore(state) {
      state.score++;
    },
    clearScore(state) {
      state.score = 0;
    },
  },
});
export const snakeActions = snakeSlice.actions;
export const snakeReducer = snakeSlice.reducer;

export default snakeSlice;

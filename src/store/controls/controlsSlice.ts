import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ControlsState } from '../../models/controls-types';

const initialState: ControlsState = {
  pressedButton: null,
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setPressedButton(state, action: PayloadAction<string>) {
      state.pressedButton = action.payload;
    },
  },
});
export const controlsActions = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export default controlsSlice;

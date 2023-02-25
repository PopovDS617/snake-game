import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { snakeReducer } from './snake/snakeSlice';
import { controlsReducer } from './controls/controlsSlice';

const rootReducer = combineReducers({
  snake: snakeReducer,
  controls: controlsReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

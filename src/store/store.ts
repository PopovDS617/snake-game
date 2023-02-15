import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { snakeReducer } from './snake/snakeSlice';

const rootReducer = combineReducers({ snakeReducer });

const store = configureStore({ reducer: rootReducer });
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

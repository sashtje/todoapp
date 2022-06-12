import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './reducers/todoSlice';

export const setupStore = () => {
  return configureStore({ reducer: todoReducer });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

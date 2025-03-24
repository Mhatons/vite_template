import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loadingReducer from './loadingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
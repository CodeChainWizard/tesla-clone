import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/cartSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

//Crete a reducer very Imp

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: ['Model S', 'Model X', 'Model 3', 'Model Y'],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
});
export const selectCar = (state) => state.car.cars;

export default carSlice.reducer;

// and this reducer entery in store.jsx name file

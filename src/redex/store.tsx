// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authiniCation } from './authSlice';


export const store = configureStore({
  reducer: {
    authiniCation,
  },
});
export type dispatchType = typeof store.dispatch
export type Statetype = ReturnType< typeof store.getState> 
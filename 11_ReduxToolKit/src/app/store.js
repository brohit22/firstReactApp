import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer,
});

// only one store is mandatory
0
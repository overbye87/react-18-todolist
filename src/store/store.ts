import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todosSlice";
import filterSlice from "./filterSlice";
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    filter: filterSlice,
    user: userSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
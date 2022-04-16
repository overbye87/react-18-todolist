import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    filter: filterSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
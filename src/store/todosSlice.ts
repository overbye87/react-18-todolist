import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo, ITodos } from "../types"
import type { RootState } from "./store"

const initialState: ITodos = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (store, action: PayloadAction<ITodo>) => {
      return [ ...store, action.payload ]
    },
    removeTodo: (store, action: PayloadAction<number>) => {
      return store.filter(
        (todo) => todo.id !== action.payload
        )
    },
    toggleTodo: (store, action: PayloadAction<number>) => {
      return store.map(
        (todo) => 
          todo.id === action.payload
          ? {...todo, isDone: !todo.isDone }
          : todo
        )
    },
  }
})

export const {
  addTodo,
  removeTodo,
  toggleTodo,
} = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
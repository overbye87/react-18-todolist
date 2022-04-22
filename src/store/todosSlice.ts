import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo, ITodos } from "../types"
import type { RootState } from "./store"

const initialState: ITodos = []

interface IEditTodo {
  id: number,
  title: string,
}

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
    editTodo: (store, action: PayloadAction<IEditTodo>) => {
      return store.map(
        (todo) => 
          todo.id === action.payload.id
          ? {...todo, title: action.payload.title }
          : todo
        )
    },
  }
})

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
} = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
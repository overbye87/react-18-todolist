import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../types"
import type { RootState } from "./store"

interface IInitial {
  user: null | IUser,
}

const initialState: IInitial = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (store, action: PayloadAction<IUser>) => {
      store.user = action.payload
      return store
    },
  }
})

export const {
  setUser,
} = userSlice.actions

export const selectFilter = (state: RootState) => state.filter

export default userSlice.reducer
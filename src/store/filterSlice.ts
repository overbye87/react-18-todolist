import { FilterValue } from './../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface IInitial {
  value: FilterValue
}

const initialState: IInitial = {
  value: FilterValue.ALL,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (store, action: PayloadAction<FilterValue>) => {
      store.value = action.payload
      return store
    },
  }
})

export const {
  setFilter,
} = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer
import { FilterValue, IFilter } from './../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

const initialState: IFilter = FilterValue.ALL

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (store, action: PayloadAction<FilterValue>) => {
      // return action.payload
      return FilterValue.ALL
    },
  }
})

export const {
  setFilter,
} = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer
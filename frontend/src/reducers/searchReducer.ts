import { createSlice } from "@reduxjs/toolkit"

import type { SetSearchAction } from "../types/actions"

const searchSlice = createSlice({
  name: 'search',
  initialState: '' as string,
  reducers: {
    setSearch(_state, action: SetSearchAction) {
      return action.payload
    }
  }
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer
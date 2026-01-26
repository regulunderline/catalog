import { createSlice } from "@reduxjs/toolkit"

import type { SetPageAction } from "../types/actions"

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    setPage(_state, action: SetPageAction) {
      return action.payload
    }
  }
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer
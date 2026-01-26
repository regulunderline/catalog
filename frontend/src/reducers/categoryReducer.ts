import { createSlice } from "@reduxjs/toolkit"

import type { SetCategoryAction } from "../types/actions"

const categorySlice = createSlice({
  name: 'category',
  initialState: 'all',
  reducers: {
    setCategory(_state, action: SetCategoryAction) {
      return action.payload
    }
  }
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer
import { createSlice } from "@reduxjs/toolkit"

import type { SetCategoryAction } from "../types/actions"
import type { Category } from "../types/other"

const categorySlice = createSlice({
  name: 'category',
  initialState: { name: 'all', id: null } as Category,
  reducers: {
    setCategory(_state, action: SetCategoryAction) {
      return action.payload
    }
  }
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer
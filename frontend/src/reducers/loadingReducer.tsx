import { createSlice } from "@reduxjs/toolkit"

import type { SetLoadingAction } from "../types/actions"

const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    setLoading(_state, action: SetLoadingAction) {
      return action.payload
    }
  }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer
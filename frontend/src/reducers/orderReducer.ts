import { createSlice } from "@reduxjs/toolkit"

import type { SetOrderAction } from "../types/actions"
import type { Order } from "../types/other"

const orderSlice = createSlice({
  name: 'order',
  initialState: { sortBy: 'title', desc: false } as Order,
  reducers: {
    setOrder(_state, action: SetOrderAction) {
      return action.payload
    }
  }
})

export const { setOrder } = orderSlice.actions

export default orderSlice.reducer
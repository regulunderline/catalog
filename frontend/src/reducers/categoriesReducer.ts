import { createSlice } from '@reduxjs/toolkit'

import categoriesService from '../services/categories.ts'

import type { AppDispatch } from '../store.ts'
import type { SetCategoriesAction } from '../types/actions.ts'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [] as string[],
  reducers: {
    setCategories(_state, action: SetCategoriesAction) {
      return action.payload
    }
  }
})

const { setCategories } = categoriesSlice.actions

export const initializeCategories = () => {
  return async (dispatch: AppDispatch) => {
    const categories = await categoriesService.getAll()
    dispatch(setCategories(categories))
  }
}

export default categoriesSlice.reducer
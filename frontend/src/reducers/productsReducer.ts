import { createSlice } from '@reduxjs/toolkit'

import productService, { type GetAllArgs } from '../services/products.ts'

import type { AppDispatch, StoreState } from '../store.ts'
import type { Product } from '../types/products.ts'
import type { SetProductsAction } from '../types/actions.ts'

const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {
    setProducts(_state, action: SetProductsAction) {
      return action.payload
    }
  }
})

const { setProducts } = productsSlice.actions

export const fetchProducts = (limit: number | undefined = undefined, offset: number | undefined = undefined) => {
  return async (dispatch: AppDispatch, getState: () => StoreState) => {
    const state = getState()

    const args: GetAllArgs = { limit, offset }
    if(state.category.id !== null) args.categoryId = state.category.id
    if(state.search) args.title = state.search

    const products = await productService.getAll(args)
    dispatch(setProducts(products))
  }
}

export default productsSlice.reducer
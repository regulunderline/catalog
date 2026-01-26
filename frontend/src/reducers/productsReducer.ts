import { createSlice } from '@reduxjs/toolkit'

import productService from '../services/products.ts'

import type { AppDispatch, StoreState } from '../store.ts'
import type { Product } from '../types/products.ts'
import type { SetProductsAction } from '../types/actions.ts'
import type { GetAllSortedArgs } from '../types/other.ts'

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

export const fetchProducts = () => {
  return async (dispatch: AppDispatch, getState: () => StoreState) => {
    const state = getState()

    const args: GetAllSortedArgs = { sortBy: state.order.sortBy, desc: state.order.desc }
    if(state.category !== 'all') args.category = state.category
    if(state.search) args.title = state.search

    const products = await productService.getAllSorted(args)
    dispatch(setProducts(products))
  }
}

export default productsSlice.reducer
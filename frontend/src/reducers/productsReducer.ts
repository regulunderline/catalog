import { createSlice } from '@reduxjs/toolkit'

import productService from '../services/products.ts'

import type { AppDispatch } from '../store.ts'
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

export const initializeProducts = () => {
  return async (dispatch: AppDispatch) => {
    const products = await productService.getAll()
    dispatch(setProducts(products))
  }
}

export default productsSlice.reducer
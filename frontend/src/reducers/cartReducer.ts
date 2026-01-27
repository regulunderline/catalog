import { createSlice } from '@reduxjs/toolkit'

import type { AddProductToCartAction, IncreaseCountInCartAction, RemoveFromCartAction, SetCartAction, SetCountInCartAction } from '../types/actions.ts'
import type { CartProduct } from '../types/products.ts'

const cartSlice = createSlice({
  name: 'cart',
  initialState: (localStorage.getItem('catalogShoppingCart') 
    ? JSON.parse(localStorage.getItem('catalogShoppingCart') as string) 
    : []) as CartProduct[],
  reducers: {
    setCart(_state, action: SetCartAction) {
      window.localStorage.setItem('catalogShoppingCart', JSON.stringify(action.payload)) 

      return action.payload
    },
    setCountInCart(state, action: SetCountInCartAction) {
      const newState = state.map(p => p.id === action.payload.id ? { ...p, count: action.payload.count } : p)

      window.localStorage.setItem('catalogShoppingCart', JSON.stringify(newState)) 

      return newState
    },
    increaseCountInCart(state, action: IncreaseCountInCartAction) {
      const newState = state.map(p => p.id === action.payload.id ? { ...p, count: p.count + action.payload.increaseBy } : p)

      window.localStorage.setItem('catalogShoppingCart', JSON.stringify(newState)) 

      return newState
    },
    addProductToCart(state, action: AddProductToCartAction) {
      let productIsInCart = false

      const newState = state.map(p => {
        if(p.id === action.payload.id) {
          productIsInCart = true
          return { ...p, count: p.count + 1 }
        }

        return p
      })

      if(!productIsInCart) newState.push({ ...action.payload, count: 1 } )

      window.localStorage.setItem('catalogShoppingCart', JSON.stringify(newState)) 

      return newState
    },
    removeFromCart(state, action: RemoveFromCartAction) {
      const newState = state.filter(p => p.id !== action.payload.id)

      window.localStorage.setItem('catalogShoppingCart', JSON.stringify(newState)) 

      return newState
    },
  }
})

export const { addProductToCart, increaseCountInCart, removeFromCart, setCart, setCountInCart } = cartSlice.actions

export default cartSlice.reducer
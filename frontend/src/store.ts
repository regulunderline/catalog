import { configureStore } from '@reduxjs/toolkit'

import productsreducer from './reducers/productsReducer'

const store = configureStore({
  reducer: {
    products: productsreducer
}
})
console.log(store.getState())

export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'
import categoryReducer from './reducers/categoryReducer'
import categoriesReducer from './reducers/categoriesReducer'
import searchReducer from './reducers/searchReducer'
import orderReducer from './reducers/orderReducer'
import pageReducer from './reducers/pageReducer'
import notificationReducer from './reducers/notificationReducer'
import loadingReducer from './reducers/loadingReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    category: categoryReducer,
    categories: categoriesReducer,
    search: searchReducer,
    order: orderReducer,
    page: pageReducer,
    notification: notificationReducer,
    loading: loadingReducer,
  }
})

export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
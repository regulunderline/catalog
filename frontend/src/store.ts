import { configureStore } from '@reduxjs/toolkit'

import productsreducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
import categoriesReducer from './reducers/categoriesReducer'
import searchReducer from './reducers/searchReducer'
import orderReducer from './reducers/orderReducer'
import pageReducer from './reducers/pageReducer'

const store = configureStore({
  reducer: {
    products: productsreducer,
    category: categoryReducer,
    categories: categoriesReducer,
    search: searchReducer,
    order: orderReducer,
    page: pageReducer,
}
})

export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
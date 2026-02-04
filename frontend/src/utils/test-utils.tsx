import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import productsReducer from '../reducers/productsReducer'
import cartReducer from '../reducers/cartReducer'
import categoryReducer from '../reducers/categoryReducer'
import categoriesReducer from '../reducers/categoriesReducer'
import searchReducer from '../reducers/searchReducer'
import orderReducer from '../reducers/orderReducer'
import pageReducer from '../reducers/pageReducer'
import notificationReducer from '../reducers/notificationReducer'
import loadingReducer from '../reducers/loadingReducer'

import type { ReactNode } from 'react'

export const setupTestStore = () => {
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


  const Wrapper = ({ children } : { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, Wrapper };
}

type StoreAndWrapper = ReturnType<typeof setupTestStore>

export type TestStore = StoreAndWrapper['store']
export type TestWrapper = StoreAndWrapper['Wrapper']
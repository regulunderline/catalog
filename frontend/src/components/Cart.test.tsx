import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { setupTestStore, type TestStore, type TestWrapper } from '../utils/test-utils'

import Cart from './Cart'

import type { CartProduct } from '../types/products'
import { setCart } from '../reducers/cartReducer'

describe('<Cart />', () => {
  let Wrapper: TestWrapper
  let store: TestStore
  let cartProducts: CartProduct[]

  beforeEach(() => {
    const storeAndWrapper = setupTestStore()
    Wrapper = storeAndWrapper.Wrapper
    store = storeAndWrapper.store

    cartProducts = [
      {
        id: 1,
        title: 'title',
        price: 100,
        description: 'description',
        category: 'category',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png',
        count: 1,
      },
      {
        id: 2,
        title: 'title2',
        price: 200,
        description: 'description2',
        category: 'category2',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png',
        count: 1,
      }
    ]

    store.dispatch(setCart(cartProducts))

    render(<Cart />, { wrapper: Wrapper })
  })

  test('renders content', () => {
    const element = screen.getByText('title')
    const element2 = screen.getByText('title2')
    expect(element).toBeDefined()
    expect(element2).toBeDefined()
  })
  test('renders total price', () => {
    const element = screen.getByText('Total: $300.00')
    expect(element).toBeDefined()
  })

  test('clicking the button removes all products', async () => {
    expect(store.getState().cart.length).toBe(2)

    const user = userEvent.setup()
    const button = screen.getByText('clear')
    await user.click(button)

    expect(store.getState().cart.length).toBe(0)
  })

  test('clear state', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('clear')
    await user.click(button)
    
    const element = screen.getByText('cart is empty')
    expect(element).toBeDefined()
  })
})





import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { setupTestStore, type TestStore, type TestWrapper } from '../utils/test-utils'

import CartCard from './CartCard'

import type { CartProduct } from '../types/products'
import { setCart } from '../reducers/cartReducer'

describe('<Cart />', () => {
  let Wrapper: TestWrapper
  let store: TestStore
  let cartProduct: CartProduct

  beforeEach(() => {
    const storeAndWrapper = setupTestStore()
    Wrapper = storeAndWrapper.Wrapper
    store = storeAndWrapper.store

    cartProduct = {
      id: 1,
      title: 'title',
      price: 100,
      description: 'description',
      category: 'category',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png',
      count: 2,
    }

    store.dispatch(setCart([cartProduct]))

    render(<CartCard product={cartProduct} />, { wrapper: Wrapper })
  })

  test('renders content', () => {
    const element = screen.getByText('title')
    expect(element).toBeDefined()
  })

  test('clicking the "+" button increases count', async () => {
    expect(store.getState().cart[0].count).toBe(2)

    const user = userEvent.setup()
    const button = screen.getAllByTestId('plus-cart-product')[0]
    await user.click(button)

    expect(store.getState().cart[0].count).toBe(3)
  })
  test('clicking the "-" button increases count', async () => {
    expect(store.getState().cart[0].count).toBe(2)

    const user = userEvent.setup()
    const button = screen.getAllByTestId('minus-cart-product')[0]
    await user.click(button)

    expect(store.getState().cart[0].count).toBe(1)
  })
  test('clicking the "remove" button increases count', async () => {
    expect(store.getState().cart.length).toBe(1)

    const user = userEvent.setup()
    const button = screen.getAllByTestId('remove-cart-product')[0]
    await user.click(button)

    expect(store.getState().cart.length).toBe(0)
  })
})





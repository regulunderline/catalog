import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { setupTestStore, type TestStore, type TestWrapper } from '../utils/test-utils'

import Card from './Card'

import type { Product } from '../types/products'

describe('<Card />', () => {
  let Wrapper: TestWrapper
  let store: TestStore
  let product: Product

  beforeEach(() => {
    const storeAndWrapper = setupTestStore()
    Wrapper = storeAndWrapper.Wrapper
    store = storeAndWrapper.store

    product = {
      id: 1,
      title: 'title',
      price: 100,
      description: 'description',
      category: 'category',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png'
    }

    render(<Card product={product} />, { wrapper: Wrapper })
  })

  test('renders title', () => {
    const element = screen.getByText('title')
    expect(element).toBeDefined()
  })
  test('renders price', () => {
    const element = screen.getByText('$100.00')
    expect(element).toBeDefined()
  })
  test('renders description', () => {
    const element = screen.getByText('description')
    expect(element).toBeDefined()
  })
  test('renders indicator', () => {
    const element = screen.getByText('Есть на складе')
    expect(element).toBeDefined()
  })

  test('clicking the button adds product to cart', async () => {
    expect(store.getState().cart.length).toBe(0)

    const user = userEvent.setup()
    const button = screen.getByText('Добавить в корзину')
    await user.click(button)

    expect(store.getState().cart.length).toBe(1)
  })
})





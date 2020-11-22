import React from 'react'
import { CartWidget } from './CartWidget'
import { render, screen, act } from '@testing-library/react'
import { useCart } from '../../shared/state/useCart'
import faker from 'faker'

const getRandomCount = (): number => faker.random.number() || 1

it('shows the cart icon', () => {
  render(<CartWidget />)
  const cartIcon = screen.getByLabelText(/cart icon/i)
  expect(cartIcon).toBeInTheDocument()
})
it('does not show cart items counter if no products in the cart', () => {
  render(<CartWidget />)
  expect(screen.queryByTestId('cart-counter')).not.toBeInTheDocument()
  act(() => useCart.setState({ totalCount: getRandomCount() }))
  expect(screen.queryByTestId('cart-counter')).toBeInTheDocument()
  act(() => useCart.setState({ totalCount: 0 }))
  expect(screen.queryByTestId('cart-counter')).not.toBeInTheDocument()
})

it('shows the amount of products in the cart', () => {
  render(<CartWidget />)
  let totalCount = getRandomCount()
  act(() => useCart.setState({ totalCount }))
  expect(screen.queryByTestId('cart-count')).toHaveTextContent(totalCount.toString())
  totalCount = getRandomCount()
  act(() => useCart.setState({ totalCount }))
  expect(screen.queryByTestId('cart-count')).toHaveTextContent(totalCount.toString())
})

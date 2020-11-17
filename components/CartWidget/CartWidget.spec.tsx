import React from 'react'
import { CartWidget } from './CartWidget'
import { render, screen, act } from '@testing-library/react'
import { useCart } from '../../useCart'

it('shows the cart icon', () => {
  render(<CartWidget />)
  const cartIcon = screen.getByLabelText(/cart icon/i)
  expect(cartIcon).toBeInTheDocument()
})
it('does not show cart items counter if no products in the cart', () => {
  render(<CartWidget />)
  expect(screen.queryByTestId('cart-counter')).not.toBeInTheDocument()
  act(() => useCart.setState({ totalCount: 1 }))
  expect(screen.queryByTestId('cart-counter')).toBeInTheDocument()
  act(() => useCart.setState({ totalCount: 0 }))
  expect(screen.queryByTestId('cart-counter')).not.toBeInTheDocument()
})

it('shows the amount of products in the cart', () => {
  render(<CartWidget />)
  act(() => useCart.setState({ totalCount: 3 }))
  expect(screen.queryByTestId('cart-count')).toHaveTextContent('3')
  act(() => useCart.setState({ totalCount: 1 }))
  expect(screen.queryByTestId('cart-count')).toHaveTextContent('1')
})

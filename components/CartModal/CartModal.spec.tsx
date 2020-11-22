import React from 'react'
import { CartModal } from './CartModal'
import { render, screen, fireEvent } from '@testing-library/react'

it('shows cart summary when cart icon is clicked', () => {
  render(<CartModal />)
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  const cartIcon = screen.getByLabelText(/cart icon/i)
  fireEvent.click(cartIcon)
  expect(screen.queryByRole('dialog')).toBeInTheDocument()
})

it.todo('shows cart summary when cart icon is clicked')

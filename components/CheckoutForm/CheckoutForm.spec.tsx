import React from 'react'
import { CheckoutForm } from './CheckoutForm'
import { render, fireEvent } from '@testing-library/react'

it('renders correctly', () => {
  const { container } = render(<CheckoutForm />)
  expect(container.innerHTML).toMatch(/Cardholder's name/i)
  expect(container.innerHTML).toMatch(/card number/i)
  expect(container.innerHTML).toMatch(/expiration date/i)
  expect(container.innerHTML).toMatch(/cvv/i)
})

describe('with invalid inputs', () => {
  it('shows errors ', async () => {
    const { container, getByText } = render(<CheckoutForm />)
    fireEvent.click(getByText('Place order'))
    expect(container.innerHTML).toMatch('Error:')
  })
})

describe('with valid inputs', () => {
  describe('on place order button click', () => {
    it('calls submit function with form data')
  })
})

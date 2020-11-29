import { proxy, useProxy, subscribe } from 'valtio'

const state = proxy({ category: 'Top', cartItems: [], total: 0 })

export function useOrder() {
  return useProxy(state)
}

export function selectCategory(e) {
  state.category = e.target.name
}

subscribe(state, () => console.log(state.total))

export function addToCart({ product }): void {
  const cartItem = state.cartItems.find(({ id }) => id === product.idMeal)
  if (!cartItem) {
    const newItem = { id: product.idMeal, product, count: 1, subtotal: product.price, weight: product.weight }
    state.cartItems.push(newItem)
  } else {
    cartItem.count += 1
    cartItem.subtotal += product.price
    cartItem.weight += product.weight
  }
  state.total += product.price
}

export function removeOneItem(productId): void {
  const cartItem = state.cartItems.find(({ id }) => id === productId)
  if (cartItem.count === 1) {
    return removeItemFromCart(productId)
  }
  cartItem.count -= 1
  cartItem.subtotal -= cartItem.product.price
  cartItem.weight -= cartItem.product.weight
  state.total -= cartItem.product.price
}

export function removeItemFromCart(productId: string | number): void {
  const cartItem = state.cartItems.find((item) => item.product.idMeal === productId)
  state.cartItems = state.cartItems.filter((item) => item.product.idMeal !== productId)
  state.total -= cartItem.subtotal
}

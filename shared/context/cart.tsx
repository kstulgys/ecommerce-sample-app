import React from 'react'
import { CartMenuItem, MenuItem } from '../types'

function toFixedTwoDec(num: number): number {
  return +num.toFixed(2)
}

const saveProducts = (products: CartMenuItem[]): void => {
  localStorage.setItem('products', JSON.stringify(products))
}

const getSavedProducts = (): CartMenuItem[] | [] => {
  const storedProducts = localStorage.getItem('products')
  return storedProducts ? JSON.parse(storedProducts) : []
}

interface CartContextValue {
  cartItems: CartMenuItem[]
  total: number
  addToCart: (newProduct: MenuItem) => void
  removeOneItem: (productId: string) => void
  removeItem: (productId: string) => void
  getStoredProducts: () => void
  clearCart: () => void
}

const ACTIONS = {
  ADD_NEW_ITEM: 'ADD_NEW_ITEM',
  ADD_EXISTING_ITEM: 'ADD_EXISTING_ITEM',
  REMOVE_ONE_ITEM: 'REMOVE_ONE_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  GET_STORED_PRODUCTS: 'GET_STORED_PRODUCTS',
  CLEAR_CART: 'CLEAR_CART',
}

const initialState = {
  cartItems: [],
  total: 0,
}

function reducer(state, [action, payload]) {
  if (ACTIONS.ADD_NEW_ITEM === action) {
    const { price, weight } = payload
    const newItem = { ...payload, count: 1, subTotal: price, subWeight: weight }
    const cartItems = [...state.cartItems, newItem]
    const total = toFixedTwoDec(state.total + price)
    return { ...state, total, cartItems }
  }
  if (ACTIONS.ADD_EXISTING_ITEM === action) {
    const cartItems = [...state.cartItems]
    const currentItem = cartItems[payload]
    currentItem.count += 1
    currentItem.subTotal += currentItem.price
    currentItem.subWeight += currentItem.weight
    const total = toFixedTwoDec(state.total + currentItem.price)
    return { ...state, cartItems, total }
  }
  if (ACTIONS.REMOVE_ONE_ITEM === action) {
    const index = state.cartItems.findIndex(({ id }) => id === payload)
    const cartItems = [...state.cartItems]
    const currentItem = cartItems[index]
    currentItem.count -= 1
    currentItem.subTotal -= currentItem.price
    currentItem.subWeight -= currentItem.weight
    const total = toFixedTwoDec(state.total - currentItem.price)
    return { ...state, total, cartItems }
  }
  if (ACTIONS.REMOVE_ITEM === action) {
    const cartItem = state.cartItems.find(({ id }) => id === payload)
    const cartItems = state.cartItems.filter(({ id }) => id !== payload)
    const total = toFixedTwoDec(state.total - cartItem.subTotal)
    return { ...state, total, cartItems }
  }
  if (ACTIONS.GET_STORED_PRODUCTS === action) {
    const total = toFixedTwoDec(payload.reduce((acc, next) => (acc += next.subTotal), 0))
    return { ...state, total, cartItems: payload }
  }
  if (ACTIONS.CLEAR_CART === action) {
    return { ...initialState }
  }
  return state
}

const CartContext = React.createContext({} as CartContextValue)

export function CartProvider({ children }: React.PropsWithChildren<Record<string, unknown>>): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const methods = useMethods(state, dispatch)
  const value = React.useMemo(() => ({ ...state, ...methods }), [state, methods])

  React.useEffect(() => {
    try {
      methods.getStoredProducts()
    } catch ({ error }) {
      console.log({ error })
    }
  }, [methods])

  React.useEffect(() => {
    try {
      saveProducts(state.cartItems)
    } catch ({ error }) {
      console.log({ error })
    }
  }, [state.cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

interface UseMethodsReturns {
  addToCart: (newProduct: CartMenuItem) => void
  removeOneItem: (productId: string) => void
  removeItem: (productId: string) => void
  getStoredProducts: () => void
  clearCart: () => void
}

function useMethods(state, dispatch): UseMethodsReturns {
  const addToCart = (newProduct: MenuItem): void => {
    const index = state.cartItems.findIndex(({ id }) => id === newProduct.id)
    const isExistingItem = index !== -1
    if (isExistingItem) {
      dispatch([ACTIONS.ADD_EXISTING_ITEM, index])
    } else {
      dispatch([ACTIONS.ADD_NEW_ITEM, newProduct])
    }
  }

  const removeOneItem = (productId: string): void => {
    const currentItem = state.cartItems.find(({ id }) => id === productId)
    if (currentItem.count === 1) {
      dispatch([ACTIONS.REMOVE_ITEM, productId])
    } else {
      dispatch([ACTIONS.REMOVE_ONE_ITEM, productId])
    }
  }

  const removeItem = (productId: string): void => {
    dispatch([ACTIONS.REMOVE_ITEM, productId])
  }

  const getStoredProducts = (): void => {
    try {
      const cartItems = getSavedProducts()
      dispatch([ACTIONS.GET_STORED_PRODUCTS, cartItems])
    } catch ({ error }) {
      console.log({ error })
    }
  }

  const clearCart = (): void => {
    try {
      window.localStorage.removeItem('products')
      dispatch([ACTIONS.CLEAR_CART])
    } catch ({ error }) {
      console.log({ error })
    }
  }

  return { addToCart, removeOneItem, removeItem, getStoredProducts, clearCart }
}

export const useCart = (): CartContextValue => React.useContext(CartContext)

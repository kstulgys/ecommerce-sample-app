import create from 'zustand'
import { Book } from 'shared/types'

interface CartItems {
  [key: string]: { count: number; product: Book }
}

type Store = {
  totalCount: number
  totalSum: number
  cartItems: CartItems
  incProductCount: ({ productId, product }: { productId: string; product: Book }) => void
  decProductCount: (productId: string) => void
  addToCart: ({ productId: string, count: number, product: Product }) => void
  updateTotalSumAndCount: () => void
  overrideCartItemCount: ({ productId, count }: { productId: string; count: number }) => void
  removeProduct: (productId: string) => void
}

export const useCart = create<Store>((set, get) => ({
  // State
  cartItems: {},
  totalCount: 0,
  totalSum: 0,
  // Actions
  updateTotalSumAndCount: () => {
    const { cartItems } = get()
    const [totalCount, totalSum] = [].concat(...Object.values(cartItems)).reduce(
      ([totalCount, totalSum], next) => {
        totalCount += next.count
        totalSum += +next.product.price * next.count
        return [totalCount, totalSum]
      },
      [0, 0]
    )
    set({ totalCount, totalSum })
  },

  incProductCount: ({ productId, product }) => {
    const { cartItems, updateTotalSumAndCount } = get()
    const item = cartItems[productId]
    if (typeof item === undefined) {
      cartItems[productId] = { count: 1, product }
      set({ cartItems })
    } else {
      cartItems[productId].count++
      set({ cartItems })
    }
    updateTotalSumAndCount()
  },

  decProductCount: (productId) => {
    const { cartItems, updateTotalSumAndCount } = get()
    cartItems[productId].count--
    if (cartItems[productId].count === 0) {
      delete cartItems[productId]
    }
    set({ cartItems })
    updateTotalSumAndCount()
  },

  addToCart: ({ productId, count, product }) => {
    const { cartItems, updateTotalSumAndCount } = get()
    const item = cartItems[productId]
    if (typeof item === 'undefined') {
      cartItems[productId] = { count, product }
      set({ cartItems })
    } else {
      cartItems[productId].count += count
      set({ cartItems })
    }
    updateTotalSumAndCount()
  },

  removeProduct: (productId) => {
    const { cartItems, updateTotalSumAndCount } = get()
    delete cartItems[productId]
    set({ cartItems })
    updateTotalSumAndCount()
  },

  overrideCartItemCount: ({ productId, count }) => {
    const { cartItems, updateTotalSumAndCount } = get()
    cartItems[productId].count = count
    set({ cartItems })
    updateTotalSumAndCount()
  },
}))

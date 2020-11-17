import create from 'zustand'

interface Product {
  id: string
  src: string
  price: string
}
interface CartItems {
  [key: string]: { count: number; product: Product }
}

type Store = {
  totalCount: number
  totalSum: number
  cartItems: CartItems
  incProductCount: ({ productId, product }: { productId: string; product: Product }) => void
  decProductCount: (productId: string) => void
  addToCart: ({ productId: string, count: number, product: Product }) => void
  updateTotalSumAndCount: () => void
  overrideCartItemCount: ({ productId, count }: { productId: string; count: number }) => void
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
  overrideCartItemCount: ({ productId, count }) => {
    const { cartItems, updateTotalSumAndCount } = get()
    cartItems[productId].count = count
    set({ cartItems })
    updateTotalSumAndCount()
  },
}))

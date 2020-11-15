import create from 'zustand'

export const useCart = create<{ cartItems: any[]; addItem: (item) => void }>((set, get) => ({
  cartItems: [],
  addItem: (item) => {
    const { cartItems } = get()
    set({ cartItems: [...cartItems, item] })
  },
}))

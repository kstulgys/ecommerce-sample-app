import create from 'zustand'

interface Product {
  id: string
  src: string
}
interface CartItems {
  [key: string]: { src: string }[]
}

export const useCart = create<{ cartItems: Partial<CartItems>; addItem: (itemList: Product[]) => void }>((set, get) => ({
  cartItems: {},
  addItem: (itemList) => {
    const { cartItems } = get()
    const itemId = itemList[0].id
    const foundList = cartItems[itemId]
    let newList
    if (foundList) {
      newList = [...foundList, ...itemList]
      cartItems[itemId] = newList
      set({ cartItems })
    } else {
      cartItems[itemId] = itemList
      set({ cartItems })
    }
  },
}))

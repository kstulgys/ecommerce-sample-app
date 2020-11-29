export interface MenuItem {
  id: number
  imageUrl: string
  name: string
  price: number
  weight: number
}

export interface CartMenuItem extends MenuItem {
  subTotal: number
  subWeight: number
  count: number
}

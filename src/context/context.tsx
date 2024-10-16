import { createContext, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/reducers";
import { addItemAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction, selectPaymentAction } from "../reducers/actions";
import { OrderInfo } from "../pages/Cart";
import { useNavigate } from "react-router-dom";


interface CoffeeContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItens: (itemId: Item['id']) => void
  addPayment: (payment: string) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  checkoutCart: (order: OrderInfo) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)


interface CoffeeProviderProps {
  children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [], orders: [], payment: '' })
  const { cart, orders } = cartState
  const navigate = useNavigate()

  const addItem = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const removeItens = (itemId: Item['id']) => {
    dispatch(removeItemAction(itemId))
  }

  const addPayment = (payment: string) => {
    dispatch(selectPaymentAction(payment))
  }

  const incrementItemQuantity = (itemId: Item['id']) => {
    dispatch(incrementItemQuantityAction(itemId))
  }

  const decrementItemQuantity = (itemId: Item['id']) => {
    dispatch(decrementItemQuantityAction(itemId))
  }

  const checkoutCart = (order: OrderInfo) => {
    dispatch(checkoutCartAction(order, navigate))
  }

  return (
    <CoffeeContext.Provider
    value={{
      cart,
      orders,
      addItem,
      removeItens,
      addPayment,
      incrementItemQuantity,
      decrementItemQuantity,
      checkoutCart
    }}>
      {children}
    </CoffeeContext.Provider>
  )
}

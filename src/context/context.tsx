import { createContext, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/reducers";
import { addItemAction, removeItemAction, selectPaymentAction } from "../reducers/actions";


interface CoffeeContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItens: (itemId: Item['id']) => void
  addPayment: (payment: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)


interface CoffeeProviderProps {
  children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [], orders: [] })
  const { cart, orders } = cartState

  const addItem = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const removeItens = (itemId: Item['id']) => {
    dispatch(removeItemAction(itemId))
  }

  const addPayment = (payment: string) => {
    dispatch(selectPaymentAction(payment))
  }

  return (
    <CoffeeContext.Provider
    value={{
      cart,
      orders,
      addItem,
      removeItens,
      addPayment
    }}>
      {children}
    </CoffeeContext.Provider>
  )
}

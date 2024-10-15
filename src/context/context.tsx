import { createContext, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/reducers";
import { addItemAction, removeItemAction } from "../reducers/actions";


interface CoffeeContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItens: (itemId: Item['id']) => void
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

  return (
    <CoffeeContext.Provider
    value={{
      cart,
      orders,
      addItem,
      removeItens
    }}>
      {children}
    </CoffeeContext.Provider>
  )
}

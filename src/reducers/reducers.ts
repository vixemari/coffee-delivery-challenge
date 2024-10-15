import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Item {
  id: string
  quantity: number
}

export interface Order {
  id: string
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}


export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const item = draft.cart.find(i => i.id === action.payload.id)
        if (item) {
          item.quantity++
        } else {
          draft.cart.push({ id: action.payload.id, quantity: 1 })
        }
      }
      )
    case ActionTypes.REMOVE_ITEM:
      return produce(state, draft => {
        const itemIndex = draft.cart.findIndex(i => i.id === action.payload)
        if (draft.cart[itemIndex].quantity > 1) {
          draft.cart[itemIndex].quantity--
        } else {
          draft.cart.splice(itemIndex, 1)
        }
      })

    default:
      return state
  }
}
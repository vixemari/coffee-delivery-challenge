import { produce } from 'immer'
import { ActionTypes } from './actions'
import { OrderInfo } from '../pages/Cart'


export interface Item {
  id: string | undefined
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
  payment: string

}

export interface CartState {
  cart: Item[]
  orders: Order[]
  payment: string

}


export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const item = draft.cart.find(i => i.id === action.payload.id)
        if (item) {
          item.quantity++
        } else {
          draft.cart.push({ id: action.payload.id, quantity: action.payload.quantity })
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

    case ActionTypes.SELECT_PAYMENT:
      return produce(state, draft => {
        const payment = action.payload
        draft.payment = payment
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const item = draft.cart.find(i => i.id === action.payload)
        if (item) {
          item.quantity++
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const item = draft.cart.find(i => i.id === action.payload)
        if (item && item.quantity > 1) {
          item.quantity--
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, draft => {
        const order: Order = {
          id: Date.now(),
          items: state.cart,
          payment: state.payment,
          ...action.payload.order
        }
        draft.orders.push(order)
        draft.cart = []
        draft.payment = ''
        action.payload.callback(`/success/${order.id}`)
      })

    default:
      return state
  }
}
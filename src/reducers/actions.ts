import { Item } from './reducers'
import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../pages/Cart'


export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  SELECT_PAYMENT = 'SELECT_PAYMENT',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART'
}


export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: item
  }
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId
  }
}

export function selectPaymentAction(payment: string) {
  return {
    type: ActionTypes.SELECT_PAYMENT,
    payload: payment
  }
}

export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: itemId
  }
}

export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: itemId
  }
}

export function checkoutCartAction(order: OrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {order,
    callback}
  }
}
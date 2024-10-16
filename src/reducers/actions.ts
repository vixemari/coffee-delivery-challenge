import { Item } from './reducers'


export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  SELECT_PAYMENT = 'SELECT_PAYMENT'
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
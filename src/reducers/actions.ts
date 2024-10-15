import { Item } from './reducers'


export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
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
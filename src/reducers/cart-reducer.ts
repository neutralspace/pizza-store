import { ActionObjectType } from '@actions/common';
import { PizzasListType } from './pizzas-reducer';
import { GET_CART } from '@actions/cart';

export interface CartType {
  itemsCount: number;
  items: PizzasListType;
  total: number;
}

const defaultCartState = {
  itemsCount: 0,
  items: [],
  total: 0,
}

const cartReducer = (cart = defaultCartState, action: ActionObjectType): CartType => {
  switch (action.type) {
    case GET_CART:
      return {
        ...cart,
        ...action.payload.cart,
      };
    default:
      return cart;
  }
}

export default cartReducer;
import { ActionObjectType } from '@actions/common';
import { GET_SESSION_DATA } from '@actions/session';
import { PizzasListType } from './pizzas-reducer';

export enum CURRENCY_TYPES {
  EURO,
  DOLLAR,
}

export interface CartType {
  itemsCount: number;
  items: PizzasListType;
  total: number;
}

export interface SessionType {
  id: number | undefined;
  cart: CartType;
  currency: CURRENCY_TYPES;
}


const defaultSessionState = {
  id: undefined,
  cart: {
    itemsCount: 0,
    items: {},
    total: 0,
  },
  currency: CURRENCY_TYPES.EURO,
}

const sessionReducer = (session = defaultSessionState, action: ActionObjectType): SessionType => {
  switch (action.type) {
    case GET_SESSION_DATA:
      return {
        ...session,
        ...action.payload.session,
      };
    default:
      return session;
  }
}

export default sessionReducer;
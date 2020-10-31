import { ActionObjectType } from '@actions/common';
import { GET_SESSION_DATA } from '@actions/session';
import { PizzasListType } from './pizzas-reducer';
import { createPriceObj } from '../helpers';

export enum CURRENCY_TYPES {
  EURO,
  DOLLAR,
}

export interface PriceType {
  [CURRENCY_TYPES.EURO]: number;
  [CURRENCY_TYPES.DOLLAR]: number;
}

export interface CartType {
  items: PizzasListType;
  totalQty: number;
  totalPrice: PriceType;
}

export interface SessionType {
  id: number | undefined;
  cart: CartType;
  currency: CURRENCY_TYPES;
}

export const defaultSessionState = {
  id: undefined,
  cart: {
    items: {},
    totalQty: 0,
    totalPrice: createPriceObj(0, 0),
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
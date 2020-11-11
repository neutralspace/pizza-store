import { CURRENCY_TYPES } from '@reducers/session-reducer';

export const createPriceObj = (priceInEuros: number, priceInDollars: number) => ({
  [CURRENCY_TYPES.EURO]: priceInEuros,
  [CURRENCY_TYPES.DOLLAR]: priceInDollars,
});

export const EMPTY_CART = {
  items: {},
  totalQty: 0,
  totalPrice: 0,
};

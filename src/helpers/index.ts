import { CURRENCY_TYPES } from '@reducers/session-reducer';

export const createPriceObj = (priceInEuros: number, priceInDollars: number) => ({
  [CURRENCY_TYPES.EURO]: priceInEuros,
  [CURRENCY_TYPES.DOLLAR]: priceInDollars,
});

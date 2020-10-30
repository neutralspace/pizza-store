import { CURRENCY_TYPES, PriceType } from '@reducers/session-reducer';

export const createPriceObj = (priceInEuros: number, priceInDollars: number): PriceType => ({
  [CURRENCY_TYPES.EURO]: priceInEuros,
  [CURRENCY_TYPES.DOLLAR]: priceInDollars,
});

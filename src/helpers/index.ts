
export enum CURRENCY_TYPES {
  EURO,
  DOLLAR,
}

export const createPriceObj = (priceInEuros: number, priceInDollars: number) => ({
  [CURRENCY_TYPES.EURO]: priceInEuros,
  [CURRENCY_TYPES.DOLLAR]: priceInDollars,
});

import React, { memo } from 'react';
import { CartType } from '@reducers/session-reducer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';
import { CURRENCY_TYPES } from '@reducers/session-reducer';
import CurrencySign from '@components/common/CurrencySign/CurrencySign';
import { createPriceObj } from '@helpers';
import './Totals.scss';

interface TotalsProps {
  cart: CartType;
  chosenCurrency: CURRENCY_TYPES;
}

const DELIVERY_COST = createPriceObj(4, 9);

/**
 * Totals or order.
 *
 * @returns {JSX} - order component.
 */
const Totals = (props: TotalsProps): JSX.Element => {
  const {
    cart,
    chosenCurrency,
  } = props;
  const overallTotal = Number(cart.totalPrice[chosenCurrency]) + Number(DELIVERY_COST[chosenCurrency]);

  return (
    <>
      <Title size={TITLE_SIZES.SM}>Total:</Title>
      <p className="totals-text">
        Items in cart: {cart.totalQty}
      </p>
      <p className="totals-text">
         Price: {cart.totalPrice[chosenCurrency]} <CurrencySign type={chosenCurrency} />
      </p>
      <p className="totals-hint-text">
        + additional {DELIVERY_COST[chosenCurrency]} <CurrencySign type={chosenCurrency} /> for delivery service
      </p>
      <p className="totals-text totals-text-overall">
        Overall: {overallTotal} <CurrencySign type={chosenCurrency} />
      </p>
    </>
  );
}

export default memo(Totals);

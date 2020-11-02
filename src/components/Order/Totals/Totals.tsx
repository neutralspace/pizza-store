import React, { memo } from 'react';
import { CartType } from '@reducers/session-reducer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';
import { CURRENCY_TYPES } from '@reducers/session-reducer';
import './Totals.scss';
import CurrencySign from '../../common/CurrencySign/CurrencySign';

interface TotalsProps {
  cart: CartType;
  chosenCurrency: CURRENCY_TYPES;
}

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

  return (
    <>
      <Title size={TITLE_SIZES.SM}>Total:</Title>
      <p className="totals-text">
        Items in cart: {cart.totalQty}
      </p>
      <p className="totals-text">
         Price: {cart.totalPrice[chosenCurrency]} <CurrencySign type={chosenCurrency} />
      </p>
    </>
  );
}

export default memo(Totals);

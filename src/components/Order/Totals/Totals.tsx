import React, { memo } from 'react';
import { CartType } from '@reducers/session-reducer';

interface TotalsProps {
  cart: CartType;
}

/**
 * Totals or order.
 *
 * @returns {JSX} - order component.
 */
const Totals = (props: TotalsProps): JSX.Element => {
  const {
    cart
  } = props;

  return (
    <>
      <p>Total:</p>
      <p>
        Items in cart: {cart.totalQty}
      </p>
      <p>
        Price: {cart.totalPrice[0]}
      </p>
    </>
  );
}

export default memo(Totals);

import React, { memo } from 'react';
import OrderContainer from '@containers/OrderContainer';
import CheckoutFormContainer from '@containers/CheckoutFormContainer';

/**
 * Checkout page.
 *
 * @returns {JSX} - checkout page component.
 */
const CheckoutPage = (): JSX.Element => {
  return (
    <section>
      <h1>Your order</h1>
      <CheckoutFormContainer />
      <OrderContainer />
    </section>
  );
}

export default memo(CheckoutPage);

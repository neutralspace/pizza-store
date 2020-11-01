import React, { memo } from 'react';
import OrderContainer from '@containers/OrderContainer';

/**
 * Checkout page.
 *
 * @returns {JSX} - checkout page component.
 */
const CheckoutPage = (): JSX.Element => {
  return (
    <section>
      <h1>Your order</h1>
      <OrderContainer />
    </section>
  );
}

export default memo(CheckoutPage);

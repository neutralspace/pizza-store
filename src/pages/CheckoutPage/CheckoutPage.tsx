import React, { memo } from 'react';
import OrderContainer from '@containers/OrderContainer';
import CheckoutFormContainer from '@containers/CheckoutFormContainer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';

/**
 * Checkout page.
 *
 * @returns {JSX} - checkout page component.
 */
const CheckoutPage = (): JSX.Element => {
  return (
    <section>
      <Title tag="h1" size={TITLE_SIZES.LG}>
        Your order
      </Title>
      <CheckoutFormContainer />
      <OrderContainer />
    </section>
  );
}

export default memo(CheckoutPage);

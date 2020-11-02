import React, { memo } from 'react';
import OrdersHistoryContainer from '@containers/OrdersHistoryContainer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';

/**
 * Main page.
 *
 * @returns {JSX} - main page component.
 */
const OrdersHistoryPage = (): JSX.Element => {
  return (
    <section>
      <Title tag="h1" size={TITLE_SIZES.LG}>
        Order history
      </Title>
      <OrdersHistoryContainer />
    </section>
  );
}

export default memo(OrdersHistoryPage);

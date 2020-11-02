import React, { memo } from 'react';
import OrdersHistoryContainer from '@containers/OrdersHistoryContainer';

/**
 * Main page.
 *
 * @returns {JSX} - main page component.
 */
const OrdersHistoryPage = (): JSX.Element => {
  return (
    <section>
      <h1>Order history</h1>
      <OrdersHistoryContainer />
    </section>
  );
}

export default memo(OrdersHistoryPage);

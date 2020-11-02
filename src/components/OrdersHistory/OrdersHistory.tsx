import React, { memo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartType, CURRENCY_TYPES } from '@reducers/session-reducer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';
import Order from '../Order/Order';
import './OrdersHistory.scss';

interface OrderProps {
  cart: CartType;
  chosenCurrency: CURRENCY_TYPES;
}

/**
 * Orders history with pizza list and totals.
 *
 * @returns {JSX} - order history component.
 */
const OrdersHistory = (props: OrderProps): JSX.Element => {
  const { orders, chosenCurrency } = props;

  if (!orders) return null;

  const ordersIds = Object.keys(orders);

  const createDate = (timestamp: string | number): string => {
    const date = new Date(Number(timestamp));
    let day = date.getDate();
    day = String(day).length > 1 ? day : `0${day}`;

    return `${day}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  return (
    <>
      {
        ordersIds.map((key) => {
          return (
            <article key={key} className="order-list-item">
              <Row>
                <Col xs={12}>
                  <Title size={TITLE_SIZES.SM} className="order-date">
                    { createDate(key) }
                  </Title>
                </Col>
              </Row>
              <Order cart={orders[key]} chosenCurrency={chosenCurrency} noCartAction={true} />
            </article>
          );
        })
      }
    </>
  );
}

export default memo(OrdersHistory);

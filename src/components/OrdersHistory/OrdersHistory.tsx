import React, { memo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartType } from '@reducers/session-reducer';
import PizzasOrderList from '../PizzasOrderList/PizzasOrderList';
import Totals from './Totals/Totals';
import Order from '../Order/Order';

interface OrderProps {
  cart: CartType;
}

/**
 * Orders history with pizza list and totals.
 *
 * @returns {JSX} - order history component.
 */
const OrdersHistory = (props: OrderProps): JSX.Element => {
  const { orders } = props;

  if (!orders) return null;

  const ordersIds = Object.keys(orders);

  const createDate = (timestamp: string | number): string => {
    const date = new Date(Number(timestamp));

    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  return (
    <>
      {
        ordersIds.map((key) => {
          return (
            <React.Fragment key={key}>
              <Row>
                <Col xs={12}>
                  { createDate(key) }
                </Col>
              </Row>
              <Order cart={orders[key]} noCartAction={true} />
            </React.Fragment>
          );
        })
      }
    </>
  );
}

export default memo(OrdersHistory);

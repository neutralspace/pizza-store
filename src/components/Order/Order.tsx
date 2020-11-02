import React, { memo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartType } from '@reducers/session-reducer';
import PizzasOrderList from '../PizzasOrderList/PizzasOrderList';
import Totals from './Totals/Totals';

interface OrderProps {
  cart: CartType;
  noCartAction?: boolean;
  updateCart?: Function;
}

/**
 * Order with pizza list and totals.
 *
 * @returns {JSX} - order component.
 */
const Order = (props: OrderProps): JSX.Element => {
  const {
    cart,
    noCartAction,
    updateCart,
  } = props;

  if (!cart) return null;

  return (
    <>
      <Row>
        <Col sm={8} xs={12}>
          <PizzasOrderList cart={cart}
                           pizzas={cart.items}
                           noCartAction={noCartAction}
                           updateCart={updateCart} />
        </Col>
        <Col sm={4} xs={12}>
          <Totals cart={cart} />
        </Col>
      </Row>
    </>
  );
}

export default memo(Order);

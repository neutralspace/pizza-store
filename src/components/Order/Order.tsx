import React, { memo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CartType, CURRENCY_TYPES } from '@reducers/session-reducer';
import PizzasOrderList from '../PizzasOrderList/PizzasOrderList';
import Totals from './Totals/Totals';
import './Order.scss';

interface OrderProps {
  cart: CartType;
  chosenCurrency: CURRENCY_TYPES;
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
    chosenCurrency,
    noCartAction,
    updateCart,
  } = props;

  if (!cart) return null;

  return (
    <>
      <Row className="order">
        <Col sm={8} xs={12}>
          <PizzasOrderList cart={cart}
                           pizzas={cart.items}
                           chosenCurrency={chosenCurrency}
                           noCartAction={noCartAction}
                           updateCart={updateCart} />
        </Col>
        <Col sm={4} xs={12}>
          <Totals cart={cart} chosenCurrency={chosenCurrency} />
        </Col>
      </Row>
    </>
  );
}

export default memo(Order);

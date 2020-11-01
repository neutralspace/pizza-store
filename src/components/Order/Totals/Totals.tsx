import React, { memo } from 'react';
import { PriceType } from '@reducers/session-reducer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PizzasOrderListContainer from '../../containers/PizzasOrderListContainer';

interface PizzaProps {
  totalQty;
  totalPrice;
}

/**
 * Order with pizza list and totals.
 *
 * @returns {JSX} - order component.
 */
const Totals = (props): JSX.Element => {
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

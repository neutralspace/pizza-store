import React, { useEffect, memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PizzasListType } from '@reducers/pizzas-reducer';
import { CURRENCY_TYPES, PriceType } from '@reducers/session-reducer';
import Pizza from './Pizza/Pizza';
import { createPriceObj } from '../../helpers';

interface PizzasListProps {
  pizzas: PizzasListType;
  getPizzasList: Function;
}

/**
 * Pizzas list.
 *
 * @returns {JSX} - pizzas list component.
 */
const PizzasList = (props: PizzasListProps): JSX.Element => {
  const { pizzas, cart, updateCart: dispatchUpdateCart, getPizzasList } = props;
  const pizzasIds = Object.keys(pizzas);
  const pizzasInCart = cart?.items;

  useEffect(() => {
    if (getPizzasList) {
      getPizzasList();
    }
  }, []);

  const updateCart = (pizzaId: number, newQty: number): void => {
    const updatedCart = { ...cart };

    if (newQty === 0) {
      delete updatedCart.items?.[pizzaId];
    } else {
      const updatedPizza = pizzas[pizzaId];

      updatedCart.items = {
        ...updatedCart?.items,
        [pizzaId]: {
          ...updatedPizza,
          qty: newQty,
          totalPrice: createPriceObj(
            Number(updatedPizza.price[CURRENCY_TYPES.EURO]) * newQty,
            Number(updatedPizza.price[CURRENCY_TYPES.DOLLAR]) * newQty,
          ),
        }
      }
    }

    const { qty: totalQty, price: totalPrice } = getTotals({ ...updatedCart.items });
    const newCart = {
      ...updatedCart,
      totalQty,
      totalPrice,
    };

    dispatchUpdateCart(newCart);
  }

  const getTotals = (cartItems: PizzasListType): { qty:number, price: PriceType } => {
    const itemsKeys = Object.keys(cartItems);
    let initialTotals = {
      qty: 0,
      price: createPriceObj(0, 0),
    };
    const totals = itemsKeys.reduce((totals, itemKey) => {
      const itemQty = Number(cartItems[itemKey].qty);
      const { [CURRENCY_TYPES.EURO]: itemEuroPrice,
              [CURRENCY_TYPES.DOLLAR]: itemDollarPrice } = cartItems[itemKey].price;

      return {
        qty: totals.qty + itemQty,
        price: createPriceObj(
          totals.price[CURRENCY_TYPES.EURO] * itemEuroPrice * itemQty,
          totals.price[CURRENCY_TYPES.DOLLAR] * itemDollarPrice * itemQty
        )
      }
    }, initialTotals);

    return totals;
  }

  return (
    <>
    {
      Boolean(pizzasIds?.length > 0)
      &&
      <Row>
        {
          pizzasIds.map((pizzaId) => {
            const isInCart = Boolean(pizzasInCart?.[pizzaId]);
            const cartQty = isInCart ? pizzasInCart?.[pizzaId].qty : 0;
            const pizzaProps = {
              ...pizzas[pizzaId],
              isInCart,
              cartQty,
            };

            return (
              <Col key={pizzaId}>
                <Pizza { ...pizzaProps }
                       updateCartHandler={updateCart} />
              </Col>
            )
          })
        }
      </Row>
    }
    </>
  );
}

export default memo(PizzasList);

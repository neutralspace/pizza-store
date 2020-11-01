import React from 'react';
import { PizzasListType } from '@reducers/pizzas-reducer';
import { CURRENCY_TYPES, PriceType, CartType } from '@reducers/session-reducer';
import { createPriceObj } from '@helpers';
import './AbstractPizzasList.scss';

export interface AbstractPizzasListProps {
  pizzas: PizzasListType;
  cart?: CartType;
  updateCart: Function;
}

/**
 * Abstract class for pizza list.
 *
 * @returns {JSX} - pizzas list component.
 */
abstract class AbstractPizzasList<P extends AbstractPizzasListProps> extends React.PureComponent<P> {
  constructor(props: AbstractPizzasListProps) {
    super(props);

    this.updateCart = this.updateCart.bind(this);
  }

  updateCart(pizzaId: number, newQty: number): void {
    const { cart, pizzas, updateCart: dispatchUpdateCart } = this.props;
    const updatedCart = { ...cart } as CartType;

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

    const { qty: totalQty, price: totalPrice } = this.getTotals({ ...updatedCart.items });
    const newCart = {
      ...updatedCart,
      totalQty,
      totalPrice,
    };

    console.log(totalPrice);

    dispatchUpdateCart(newCart);
  }

  getTotals(cartItems: PizzasListType): { qty: number, price: PriceType } {
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
          totals.price[CURRENCY_TYPES.EURO] + (itemEuroPrice * itemQty),
          totals.price[CURRENCY_TYPES.DOLLAR] + (itemDollarPrice * itemQty),
        )
      }
    }, initialTotals);

    return totals;
  }
}

export default AbstractPizzasList;

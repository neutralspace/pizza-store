import React from 'react';
import AbstractPizzasList, { AbstractPizzasListProps } from '../abstract/AbstractPizzasList/AbstractPizzasList';
import './PizzasOrderList.scss';
import OrderedPizza from './OrderedPizza/OrderedPizza';

interface PizzasOrderListProps extends AbstractPizzasListProps {}

/**
 * Class for ordered pizza list.
 *
 * @returns {JSX} - pizzas list component.
 */
class PizzasOrderList extends AbstractPizzasList<PizzasOrderListProps> {
  render(): JSX.Element {
    const { pizzas, chosenCurrency, noCartAction } = this.props;

    if (!pizzas) return null;

    const pizzasIds = Object.keys(pizzas);

    return (
      <>
        {
          Boolean(pizzasIds?.length > 0)
          &&
          pizzasIds.map((pizzaId) => {
            const pizzaProps = {
              ...pizzas[pizzaId],
              isInCart: true,
              cartQty: pizzas[pizzaId].qty,
            };

            return (
                <OrderedPizza {...pizzaProps}
                              key={pizzaId}
                              chosenCurrency={chosenCurrency}
                              noCartAction={noCartAction}
                              updateCartHandler={this.updateCart} />
            )
          })
        }
      </>
    );
  }
}

export default PizzasOrderList;

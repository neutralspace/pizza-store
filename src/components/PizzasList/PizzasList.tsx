import React, { useEffect, memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PizzasListType } from '@reducers/pizzas-reducer';

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
  const { pizzas, pizzasInCart, getPizzasList } = props;
  const pizzasIds = Object.keys(pizzas);

  useEffect(() => {
    if (getPizzasList) {
      getPizzasList();
    }
  }, []);

  return (
    <>
    {
      Boolean(pizzasIds?.length > 0)
      &&
      <Row>
        {
          pizzasIds.map((pizzaId) => {
            const pizza = pizzas[pizzaId];
            const isInCart = Boolean(pizzasInCart?.[pizzaId]);
            const pizzasInCartQty = Object.keys(pizzasInCart || {}).length;

            return (
              <Col key={pizzaId}>
                { pizza.name }
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

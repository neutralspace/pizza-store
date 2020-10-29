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
  const { pizzas, getPizzasList } = props;

  useEffect(() => {
    if (getPizzasList) {
      getPizzasList();
    }
  }, []);

  return (
    <>
    {
      Boolean(pizzas?.length > 0)
      &&
      <Row>
        {
          pizzas.map((item, index) => {
            return (
              <Col key={index}>
                {item.name}
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

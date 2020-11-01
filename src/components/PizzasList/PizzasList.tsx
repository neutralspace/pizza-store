import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pizza from './Pizza/Pizza';
import AbstractPizzasList, { AbstractPizzasListProps } from '../abstract/AbstractPizzasList/AbstractPizzasList';
import './PizzasList.scss';

interface PizzasListProps extends AbstractPizzasListProps {
  getPizzasList: Function;
}

/**
 * Class for pizza list.
 *
 * @returns {JSX} - pizzas list component.
 */
class PizzasList<P extends PizzasListProps> extends AbstractPizzasList<P> {
  componentDidMount() {
    const { getPizzasList } = this.props;

    if (getPizzasList) {
      getPizzasList();
    }
  }

  render(): JSX.Element {
    const { pizzas, cart } = this.props;
    const pizzasIds = Object.keys(pizzas);
    const pizzasInCart = cart?.items;

    return (
      <>
        {
          Boolean(pizzasIds?.length > 0)
          &&
          <Row className="pizzas-list">
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
                  <Col className="pizzas-list-item" sm={4} xs={12} key={pizzaId}>
                    <Pizza {...pizzaProps}
                           updateCartHandler={this.updateCart}/>
                  </Col>
                )
              })
            }
          </Row>
        }
      </>
    );
  }
}

export default PizzasList;

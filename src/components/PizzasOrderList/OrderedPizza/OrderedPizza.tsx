import React from 'react';
import Button from '@components/common/Button/Button';
import './OrderedPizza.scss';
import Input from '@components/common/Input/Input';
import {AbstractPizzaProps} from '@components/abstract/AbstractPizza/AbstractPizza';
import AbstractPizza from '@components/abstract/AbstractPizza/AbstractPizza';

interface PizzaProps extends AbstractPizzaProps {
  ingredients: string;
  isInCart: boolean;
  qty?: number;
}

/**
 * Class for single pizza item.
 *
 * @returns {JSX} - pizza component.
 */
class OrderedPizza<P extends AbstractPizzaProps> extends AbstractPizza<P> {
  render(): JSX.Element {
    const {
      name,
      price,
      isInCart,
      cartQty,
    } = this.props;

    return (
      <article className="pizza ordered-pizza">
        <p className="pizza-title">
          {name}
        </p>
        <div className="pizza-details">
          <div className="pizza-img-wrapper">
            <img className="pizza-img" src="assets/img/pizza1.jpg" alt={name}/>
          </div>
          <p className="pizza-price">
            {price[0]} €
          </p>
          {
            isInCart ?
              <Input className="pizza-qty-input"
                     name="qty"
                     type="number"
                     min="0"
                     defaultValue={cartQty}
                     onChange={this.handleQtyChange}/>
              :
              <Button className="pizza-button" onClick={this.handleAddToCart}>
                Add
              </Button>
          }
        </div>
      </article>
    );
  }
}

export default OrderedPizza;

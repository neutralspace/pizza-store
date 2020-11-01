import React, { memo } from 'react';
import Button from '@components/common/Button/Button';
import { PriceType } from '@reducers/session-reducer';
import './Pizza.scss';
import Input from '../../common/Input/Input';
import { AbstractPizzaProps } from '@components/abstract/AbstractPizza/AbstractPizza';
import AbstractPizza from '../../abstract/AbstractPizza/AbstractPizza';

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
class Pizza<P extends AbstractPizzaProps> extends AbstractPizza<P> {
  render(): JSX.Element {
    const {
      name,
      price,
      isInCart,
      cartQty,
    } = this.props;

    return (
      <article className="pizza">
        <p className="pizza-title">
          { name }
        </p>
        <div className="pizza-img-wrapper">
          <img className="pizza-img" src="assets/img/pizza1.jpg" alt={name} />
        </div>
        <p className="pizza-price">
          { price[0] } €
        </p>
        {
          isInCart ?
            <Input className="pizza-qty-input"
                   name="qty"
                   type="number"
                   min="0"
                   defaultValue={cartQty}
                   onChange={this.handleQtyChange} />
            :
            <Button className="pizza-button" onClick={this.handleAddToCart}>
              Add
            </Button>
        }
      </article>
    );
  }
}

export default Pizza;

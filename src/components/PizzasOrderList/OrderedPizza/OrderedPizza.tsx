import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { AbstractPizzaProps } from '@components/abstract/AbstractPizza/AbstractPizza';
import AbstractPizza from '@components/abstract/AbstractPizza/AbstractPizza';
import './OrderedPizza.scss';

/**
 * Class for single pizza item in order.
 *
 * @returns {JSX} - pizza component.
 */
class OrderedPizza extends AbstractPizza<AbstractPizzaProps> {
  render(): JSX.Element {
    const {
      name,
      price,
      isInCart,
      cartQty,
      noCartAction,
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
            !noCartAction
            &&
            (
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
            )
          }
        </div>
      </article>
    );
  }
}

export default OrderedPizza;

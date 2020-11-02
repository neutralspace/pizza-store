import React from 'react';
import { PriceType } from '@reducers/session-reducer';
import { CURRENCY_TYPES } from '@reducers/session-reducer';
import './AbstractPizza.scss';

export interface AbstractPizzaProps {
  id: number;
  name: string;
  img: string;
  price: PriceType;
  chosenCurrency: CURRENCY_TYPES;
  updateCartHandler: Function;
}

/**
 * Abstract class for single pizza item.
 *
 * @returns {JSX} - pizza component.
 */
abstract class AbstractPizza<P extends AbstractPizzaProps> extends React.PureComponent<P> {
  constructor(props: AbstractPizzaProps) {
    super(props);

    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleQtyChange(e: React.SyntheticEvent<HTMLInputElement>): void {
    const { id, updateCartHandler } = this.props;
    const newQty = Number(e.currentTarget?.value);

    if (newQty >= 0) {
      updateCartHandler(id, newQty);
    }
  }

  handleAddToCart(): void {
    const { id, updateCartHandler } = this.props;

    updateCartHandler(id, 1);
  }
}

export default AbstractPizza;

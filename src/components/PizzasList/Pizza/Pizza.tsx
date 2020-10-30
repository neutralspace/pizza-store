import React, { memo } from 'react';
import './Pizza.scss';

interface PizzaProps {
  id: number;
  name: string;
  img: string,
  ingredients: string;
  price: number;
  totalPrice?: number;
  isInCart: boolean;
  cartQty?: number;
  updateCartHandler: Function;
}

/**
 * Single pizza item.
 *
 * @returns {JSX} - pizza component.
 */
const Pizza = (props: PizzaProps): JSX.Element => {
  const {
    id,
    name,
    isInCart,
    cartQty,
    updateCartHandler,
  } = props;

  const handleQtyChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const newQty = Number(e.currentTarget?.value);
    updateCartHandler(id, newQty);
  }

  const handleAddToCart = (): void => {
    updateCartHandler(id, 1);
  }

  return (
    <article>
      { name }
      {
        isInCart ?
          <input type="number"
                 min="0"
                 defaultValue={cartQty}
                 onChange={handleQtyChange} />
          :
          <button onClick={handleAddToCart}>
            Add
          </button>
      }
    </article>
  );
}

export default memo(Pizza);

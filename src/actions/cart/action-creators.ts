import { ActionObjectType } from '../common/constants';
import { GET_CART } from './constants';
import { CartType } from '@reducers/cart-reducer';

export const getCartAction = (data: CartType): ActionObjectType => ({
  type: GET_CART,
  payload: {
    cart: data,
  },
});
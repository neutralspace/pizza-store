import { ActionObjectType } from '../common/constants';
import { GET_PIZZAS_LIST } from './constants';
import { PizzasListType } from '@reducers/pizzas-reducer';

export const getPizzasListAction = (data: PizzasListType): ActionObjectType => ({
  type: GET_PIZZAS_LIST,
  payload: {
    pizzasList: data,
  },
});
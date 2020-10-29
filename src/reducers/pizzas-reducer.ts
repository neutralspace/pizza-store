import { ActionObjectType } from '@actions/common';
import { GET_PIZZAS_LIST } from '@actions/pizzas';
import { CURRENCY_TYPES } from './session-reducer';

export interface PizzaType {
  id: string,
  name: string;
  img: string;
  ingredients: string;
  price: { [key: CURRENCY_TYPES]: number };
}

export type PizzasListType = {[key: string]: PizzaType};

const pizzasReducer = (pizzasList: PizzasListType = {}, action: ActionObjectType): PizzasListType => {
  switch (action.type) {
    case GET_PIZZAS_LIST:
      return action.payload.pizzasList;
    default:
      return pizzasList;
  }
}

export default pizzasReducer;
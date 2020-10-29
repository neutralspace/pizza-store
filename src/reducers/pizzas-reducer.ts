import { ActionObjectType } from '@actions/common/constants';
import { GET_PIZZAS_LIST } from '@actions/pizzas/constants';

interface PizzaType {
  name: string;
  img: string;
  ingredients: string;
}

export type PizzasListType = PizzaType[];

const pizzasReducer = (pizzasList: PizzasListType = [], action: ActionObjectType): PizzasListType => {
  if (action.type === GET_PIZZAS_LIST) return action.payload.pizzasList;
  return pizzasList;
}

export default pizzasReducer;
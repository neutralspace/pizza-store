interface Pizza {
  name: string;
  img: string;
  ingredients: string;
}

type PizzasList = Pizza[];

const pizzasReducer = (pizzasList: PizzasList = [], action): PizzasList => {
  if (action.type === 'GET_PIZZAS_LIST') return action.payload;
  return pizzasList;
}

export default pizzasReducer;
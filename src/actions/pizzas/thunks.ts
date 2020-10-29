import DatabaseHandler from '@api/databaseHandler';
import { getPizzasListAction } from './action-creators';
import { PizzasListType } from '@reducers/pizzas-reducer';

const databaseHandler = DatabaseHandler.GET_INSTANCE();

export const getPizzasList = (): Function => {
  return (dispatch) => {
    databaseHandler.getPizzasList().then((data: PizzasListType) =>{
      dispatch(getPizzasListAction(data));
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }
};
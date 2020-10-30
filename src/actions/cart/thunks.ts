import DatabaseHandler from '@api/databaseHandler';
import { getSessionDataAction } from '@actions/session/action-creators';
import { CartType } from '@reducers/session-reducer';

const databaseHandler = DatabaseHandler.GET_INSTANCE();

export const updateCart = (newCart: CartType): Function => {
  return (dispatch) => {
    databaseHandler.updateCart(newCart).then((data) =>{
      dispatch(getSessionDataAction(data));
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }
};
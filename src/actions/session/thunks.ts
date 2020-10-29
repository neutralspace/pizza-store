import DatabaseHandler from '@api/databaseHandler';
import { getSessionDataAction } from './action-creators';
import { SessionType } from '@reducers/session-reducer';

const databaseHandler = DatabaseHandler.GET_INSTANCE();

export const getSessionData = (): Function => {
  return (dispatch) => {
    databaseHandler.getSessionData().then((data: SessionType) =>{
      console.log(data);
      dispatch(getSessionDataAction(data));
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }
};
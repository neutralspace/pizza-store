import DatabaseHandler from '@api/databaseHandler';
import { getSessionDataAction } from './action-creators';
import { SessionType } from '@reducers/session-reducer';
import CookieHandler from '../../utils/cookie/cookieHandler';

export const getSessionData = (): Function => {
  return (dispatch) => {
    const databaseHandler = DatabaseHandler.GET_INSTANCE();
    const sessionId = CookieHandler.getSessionId();

    if (!sessionId) {
      databaseHandler.createSession().then((data: SessionType) => {
        CookieHandler.setSessionId(data.id);
        dispatch(getSessionDataAction(data));
      });
    } else {
      databaseHandler.getSessionData(sessionId).then((data: SessionType) => {
        dispatch(getSessionDataAction(data));
      }).catch((error) => {
        console.log('Error: ', error);
      });
    }
  }
};
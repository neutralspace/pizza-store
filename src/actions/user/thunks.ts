import DatabaseHandler from '@api/databaseHandler';
import {
  getUserDataAction,
  userNotFoundAction,
  userAlreadyExistsAction,
  clearFormsErrorsAction,
} from './action-creators';
import {UserDataType} from '@reducers/user-reducer';
import CookieHandler from '@utils/cookie/cookieHandler';
import {CartType} from '../../reducers/session-reducer';

export const authorizeUser = (email: string, password: string): Function => {
  return (dispatch) => {
    const databaseHandler = DatabaseHandler.GET_INSTANCE();

    dispatch(clearFormsErrorsAction());

    databaseHandler.authorizeAndGetUserData(email, password).then((data: UserDataType) => {
      if (data?.id) {
        CookieHandler.setUserId(data.id);
        dispatch(getUserDataAction(data));
      } else {
        dispatch(userNotFoundAction());
      }
    }).catch((error) => {
      console.log('Error: ', error);
    });
  };
};

export const registerUser = (email: string, password: string, name: string, surname: string): Function => {
  return (dispatch) => {
    const databaseHandler = DatabaseHandler.GET_INSTANCE();

    dispatch(clearFormsErrorsAction());

    databaseHandler.checkIfUserExists(email).then((isExists: Boolean) => {
      if (!isExists) {
        databaseHandler.setUserData(email, password, name, surname).then((data: string) => {
          CookieHandler.setUserId(data);
          dispatch(getUserDataAction({id: data, email, password, name, surname}));
        }).catch((error) => {
          console.log('Error: ', error);
        });
      } else {
        dispatch(userAlreadyExistsAction());
      }
    }).catch((error) => {
      console.log('Error: ', error);
    });
  };
};

export const getUserData = (): Function => {
  return (dispatch) => {
    const databaseHandler = DatabaseHandler.GET_INSTANCE();
    const userId = CookieHandler.getUserId();

    if (Boolean(userId)) {
      databaseHandler.getUserData(userId).then((data: UserDataType) => {
        if (data?.id) {
          CookieHandler.setUserId(data.id);
          dispatch(getUserDataAction(data));
        }
      }).catch((error) => {
        console.log('Error: ', error);
      });
    }
  }
};

export const addToOrderHistory = (userId: string, order: CartType): Function => {
  return (dispatch) => {
    const databaseHandler = DatabaseHandler.GET_INSTANCE();
    const userId = CookieHandler.getUserId();

    databaseHandler.addToOrderHistory(userId, order).then(() => {
      databaseHandler.getUserData(userId).then((data: UserDataType) => {
        if (data?.id) {
          dispatch(getUserDataAction(data));
        }
      }).catch((error) => {
        console.log('Error: ', error);
      });
    }).catch((error) => {
      console.log('Error: ', error);
    });
  };
};
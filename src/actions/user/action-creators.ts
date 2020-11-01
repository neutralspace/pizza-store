import { ActionObjectType } from '../common/constants';
import {
  GET_USER_DATA,
  USER_NOT_FOUND,
  USER_ALREADY_EXISTS,
  CLEAR_FORMS_ERRORS,
} from './constants';
import { UserDataType } from '@reducers/user-reducer';

export const getUserDataAction = (data: UserDataType): ActionObjectType => ({
  type: GET_USER_DATA,
  payload: {
    user: data,
  },
});

export const userNotFoundAction = (): ActionObjectType => ({
  type: USER_NOT_FOUND,
});

export const userAlreadyExistsAction = (): ActionObjectType => ({
  type: USER_ALREADY_EXISTS,
});

export const clearFormsErrorsAction = (): ActionObjectType => ({
  type: CLEAR_FORMS_ERRORS,
});



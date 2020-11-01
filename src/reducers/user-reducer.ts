import { ActionObjectType } from '@actions/common';
import { GET_USER_DATA, USER_NOT_FOUND } from '@actions/user';

export interface UserDataType {
  id: string;
}

export const defaultUserData: UserDataType = {
  id: undefined,
}

const userReducer = (userData = defaultUserData, action: ActionObjectType): UserDataType => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...userData,
        ...action.payload.user,
      };
    case USER_NOT_FOUND:
      return {
        ...defaultUserData,
      };
    default:
      return userData;
  }
}

export default userReducer;
import { ActionObjectType } from '@actions/common';
import { GET_USER_DATA,
         USER_NOT_FOUND,
         USER_ALREADY_EXISTS,
         CLEAR_FORMS_ERRORS
} from '@actions/user';

export enum FORM_TYPES {
  AUTH,
  REG,
}

export interface FormsStateType {
  [key: FORM_TYPES]: {
    error: string,
  }
}

export const defaultFormsData: FormsStateType = {
  [FORM_TYPES.AUTH]: {
    error: null,
  },
  [FORM_TYPES.REG]: {
    error: null,
  },
}

const formReducer = (formsState = defaultFormsData, action: ActionObjectType): FormsStateType => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...formsState,
        [FORM_TYPES.AUTH]: {
          error: null,
        }
      };
    case USER_NOT_FOUND:
      return {
        ...formsState,
        [FORM_TYPES.AUTH]: {
          error: 'E-mail or password does not match',
        }
      };
    case USER_ALREADY_EXISTS:
      return {
        ...formsState,
        [FORM_TYPES.REG]: {
          error: 'Email is already registered',
        }
      };
    case CLEAR_FORMS_ERRORS:
      return {
        ...defaultFormsData,
      };
    default:
      return formsState;
  }
}

export default formReducer;
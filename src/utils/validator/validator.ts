import {
  NAME_RESTRICTIONS,
  PASSWORD_RESTRICTIONS, SURNAME_RESTRICTIONS
} from './constants';
import {
  emailValidation, nameValidation,
  passwordValidation, surnameValidation
} from './rules';

export default class Validator {
  private constructor() {}

  static getNameError(value: string): string {
    if (!nameValidation.minLength(value)) {
      return `Name must contain at least ${NAME_RESTRICTIONS.MIN_SYMBOLS_COUNT} symbol`;
    }
    if (!nameValidation.maxLength(value)) {
      return `Name must contain ${NAME_RESTRICTIONS.MAX_SYMBOLS_COUNT} maximum symbols amount`;
    }
    if (!nameValidation.regExp(value)) {
      return 'Please enter a valid name with alphabet symbols only';
    }
    return '';
  }

  static getSurnameError(value: string): string {
    if (!surnameValidation.minLength(value)) {
      return `Surname must contain at least ${SURNAME_RESTRICTIONS.MIN_SYMBOLS_COUNT} symbol`;
    }
    if (!surnameValidation.maxLength(value)) {
      return `Surname must contain ${SURNAME_RESTRICTIONS.MAX_SYMBOLS_COUNT} maximum symbols amount`;
    }
    if (!(surnameValidation.regExp(value))) {
      return 'Please enter a valid surname with alphabet symbols only';
    }
    return '';
  }

  static getEmailError(value: string): string {
    if (!emailValidation.regExp(value)) {
      return 'Please enter a valid e-mail address';
    }
    return '';
  }

  static getRegistrationPasswordError(value: string): string {
    if (!passwordValidation.minLength(value)) {
      return `Password must contain at least ${PASSWORD_RESTRICTIONS.MIN_SYMBOLS_COUNT} symbols`;
    }
    if (!passwordValidation.maxLength(value)) {
      return `Password must contain ${PASSWORD_RESTRICTIONS.MAX_SYMBOLS_COUNT} maximum symbols amount`;
    }
    return '';
  }

  static getAuthPasswordError(value: string): string {
    if (!value || value.length === 0) {
      return `Password is required`;
    }
    if (!passwordValidation.minLength(value)) {
      return `Password must contain at least ${PASSWORD_RESTRICTIONS.MIN_SYMBOLS_COUNT} symbols`;
    }
    return '';
  }
}
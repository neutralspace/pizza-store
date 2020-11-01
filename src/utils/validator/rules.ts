import {
  EMAIL_RESTRICTIONS,
  NAME_RESTRICTIONS,
  PASSWORD_RESTRICTIONS,
  SURNAME_RESTRICTIONS } from "./constants";

export const nameValidation = {
  minLength: value => value?.length >= NAME_RESTRICTIONS.MIN_SYMBOLS_COUNT,
  maxLength: value => value?.length < NAME_RESTRICTIONS.MAX_SYMBOLS_COUNT,
  regExp: value => NAME_RESTRICTIONS.REG_EXP.test(value),
}

export const surnameValidation = {
  minLength: value => value?.length >= SURNAME_RESTRICTIONS.MIN_SYMBOLS_COUNT,
  maxLength: value => value?.length < SURNAME_RESTRICTIONS.MAX_SYMBOLS_COUNT,
  regExp: value => SURNAME_RESTRICTIONS.REG_EXP.test(value),
}

export const emailValidation = {
  regExp: value => EMAIL_RESTRICTIONS.REG_EXP.test(value),
}

export const passwordValidation = {
  minLength: value => value?.length >= PASSWORD_RESTRICTIONS.MIN_SYMBOLS_COUNT,
  maxLength: value => value?.length < PASSWORD_RESTRICTIONS.MAX_SYMBOLS_COUNT,
}

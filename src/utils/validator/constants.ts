export const NAME_RESTRICTIONS = {
  MIN_SYMBOLS_COUNT: 2,
  MAX_SYMBOLS_COUNT: 30,
  REG_EXP: /[a-zA-Z]+[\s\-]*[a-zA-Z]+/i,
}

export const SURNAME_RESTRICTIONS = {
  MIN_SYMBOLS_COUNT: 2,
  MAX_SYMBOLS_COUNT: 30,
  REG_EXP: /[a-zA-Z]+[\s\-]*[a-zA-Z]+/i,
}

export const EMAIL_RESTRICTIONS = {
  REG_EXP: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
}

export const PASSWORD_RESTRICTIONS = {
  MIN_SYMBOLS_COUNT: 6,
  MAX_SYMBOLS_COUNT: 30,
}
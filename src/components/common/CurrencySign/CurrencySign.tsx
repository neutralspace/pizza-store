import React, { memo } from 'react';
import { CURRENCY_TYPES } from '@reducers/session-reducer';
import './CurrencySign.scss';

const CURRENCY_CONTENT_BY_TYPE = {
  [CURRENCY_TYPES.EURO]: '€',
  [CURRENCY_TYPES.DOLLAR]: '$',
}

/**
 * Currency sign.
 *
 * @returns {JSX} - Currency sign component.
 */
const CurrencySign = (props: { type: CURRENCY_TYPES }): JSX.Element => {
  const {type } = props;

  return (
    <span>
      {CURRENCY_CONTENT_BY_TYPE[type]}
    </span>
  );
}

export default memo(CurrencySign);

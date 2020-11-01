import * as React from 'react';
import './Button.scss';

interface ButtonProps {
  type?: string;
}

/**
 * Button component.
 *
 * @param {ButtonProps} - object with button`s parameters.
 * @returns {JSX} - button component.
 */
const Button = (props: ButtonProps): JSX.Element => {
  const { onClick = null, children } = props;

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
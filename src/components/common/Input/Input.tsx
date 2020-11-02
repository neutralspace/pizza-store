import React from 'react';
import './Input.scss';

interface InputProps {
  name: string;
  label?: string;
  errorText?: string;
  className?:string;
  [key: string]: any;
}

const defaultProps: Partial<InputProps> = {
  type: 'text',
}

/**
 * Input component with label.
 *
 * @param {InputProps} - input`s parameters.
 * @returns {JSX} - input group container with input itself and a label.
 */
const Input = (props: InputProps): JSX.Element => {
  const componentProps = { ...defaultProps, ...props };
  const { label, errorText, className: classNameFromProps, ...attrs } = componentProps;
  const className = `input-row${classNameFromProps ? ` ${classNameFromProps}`: ''}`;

  return (
    <div className={className}>
      {
        label
        &&
        <label className="input-label">{label}</label>
      }
      <input className="input" { ...attrs } />

      {
        Boolean(errorText)
        &&
        <div className="input-error">{errorText}</div>
      }
    </div>
  );
}

export default Input;
